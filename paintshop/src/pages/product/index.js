import Layout from "@/components/layout";
import {
  Alert,
  Box,
  Button,
  InputAdornment,
  Snackbar,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import TableProduct from "./table";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getCollection } from "@/firebase/getData";
import { softDeleteData } from "@/firebase/addData";
import { useAuthContext } from "@/context/AuthContext";
import { debounce } from "lodash";

import searchData from "@/firebase/searchData";

export default function Product() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#018294",
      },
      success: {
        main: "#A9C470",
      },
      error: {
        main: "#FE616A",
      },
    },
  });
  const { user } = useAuthContext();
  const [documentData, setDocumentData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();
  function handleAdd() {
    router.push("/product/addproduct");
  }
  // useEffect(() => {
  //   // fetchData();
  // }, []);
  // useEffect(() => {
  //   // console.log(documentData);
  // }, [documentData]);

  useEffect(() => {
    // ทำสิ่งที่คุณต้องการกับ searchResults ที่ได้
    fetchData()
  }, []);
  // useEffect(() => {
  // ทำสิ่งที่คุณต้องการกับ searchResults ที่ได้
  // console.log(documentData);
  // }, [documentData]);

  const debouncedSearchUser = debounce(async (term) => {
    try {
      const collectionName = "products";
      const field = "name";
      const results = await searchData(collectionName, field, term);
      const filteredResults = results.filter((doc) => !doc.delete);
      setDocumentData(filteredResults);
    } catch (error) {
      console.error("Error searching data:", error);
    }
  }, 500); // กำหนดเวลา debounce ที่คุณต้องการ

  const handleSearch = (term) => {
    setSearchTerm(term);
    debouncedSearchUser(term);
  };

  const fetchData = async () => {
    const collectionName = "products";
    const { result, error } = await getCollection(collectionName);
    if (error) {
      console.error("Error fetching document:", error);
    } else if (result) {
      const productData = result.docs.filter((doc) => !doc.data().delete).map((doc) => ({
        id: doc.id,
       ...doc.data()
      }));
      setDocumentData(productData);
    }
  };
  const handleDelete = async (id) => {
    const data = {
      id: id,
      user_id: user.uid,
    };
    const result = await softDeleteData("products", data);
    handleSearch("");
    if (result) {
      setAlert(
        <Alert severity="success" onClose={handleClose}>
          ลบข้อมูลสำเร็จ
        </Alert>
      );
      setOpen(true);
    } else {
      setAlert(
        <Alert severity="error" onClose={handleClose}>
          ผิดพลาด! ไม่สามารถลบข้อมูลได้
        </Alert>
      );
      setOpen(true);
    }
  };
  const [alert, setAlert] = useState(null);
  const [open, setOpen] = useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const openhistory = () => {
    router.push("product/history");
  };
  return (
    <Layout>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        {alert}
      </Snackbar>
      <ThemeProvider theme={theme}>
        <Box sx={{ height: "100%", width: "100%", mt: 5 }}>
          <Typography sx={{ fontSize: "2rem", fontWeight: "600" }}>
            การจัดการสินค้า
          </Typography>
          <Box sx={{ mt: 1 }}>
            <TextField
              label="ค้นหา"
              variant="outlined"
              size="small"
              onChange={(e) => handleSearch(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ fontSize: "1.4rem" }} />
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          <Box>
            <Box sx={{ display: "flex", justifyContent: { xl: "flex-end" } }}>
              <Button
                variant="contained"
                color="success"
                sx={{ mr: 2, mb: 2, mt: 2 }}
                onClick={handleAdd}
              >
                เพิ่มสินค้า
              </Button>
              <Button
                variant="contained"
                color="error"
                sx={{ mb: 2, mt: 2 }}
                onClick={openhistory}
              >
                ประวัติการลบ
              </Button>
            </Box>
            <TableProduct
              data={{ data: documentData }}
              onDelete={handleDelete}
            />
          </Box>
        </Box>
      </ThemeProvider>
    </Layout>
  );
}
