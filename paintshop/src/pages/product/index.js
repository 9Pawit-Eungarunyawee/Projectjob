import Layout from "@/components/layout";
import {
  Box,
  Button,
  InputAdornment,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import Table from "./table";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getCollection } from "@/firebase/getData";
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
  const [documentData, setDocumentData] = useState(null);
  const router = useRouter();
  function handleAdd() {
    router.push("/product/addproduct");
  }
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    // console.log(documentData);
  }, [documentData]);
  const fetchData = async () => {
    const collectionName = "products";
    const { result, error } = await getCollection(collectionName);
    if (error) {
      console.error("Error fetching document:", error);
    } else if (result) {
      const productData = result.docs.map((doc) => ({
        id: doc.id,
        name: doc.data().name,
      }));
      setDocumentData(productData);
    }
  };
  return (
    <Layout>
      <ThemeProvider theme={theme}>
        <Box sx={{ height: "100%", width: "100%", mt: 5 }}>
          <Typography sx={{ fontSize: "2vw", fontWeight: "600" }}>
            การจัดการสินค้า
          </Typography>
          <Box sx={{ mt: 1 }}>
            <TextField
              label="Search"
              variant="outlined"
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ fontSize: "1.2vw" }} />
                  </InputAdornment>
                ),
              }}
            />
            <Button variant="contained" sx={{ ml: 2 }}>
              <TuneIcon />
              ดูทั้งหมด
            </Button>
          </Box>

          <Box sx={{ pr: 3 }}>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                variant="contained"
                color="success"
                sx={{ mr: 2, mb: 2, mt: 2 }}
                onClick={handleAdd}
              >
                เพิ่มสินค้า
              </Button>
              <Button variant="contained" color="error" sx={{ mb: 2, mt: 2 }}>
                ลบรายการ
              </Button>
            </Box>
            <Table data={documentData}/>
          </Box>
        </Box>
      </ThemeProvider>
    </Layout>
  );
}
