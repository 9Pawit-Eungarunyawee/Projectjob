import Layout from "@/components/layout";
import { getCollection } from "@/firebase/getData";
import searchData from "@/firebase/searchData";
import {
  Box,
  Button,
  InputAdornment,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import { debounce } from "lodash";
import { useContext, useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import TableLots from "./table";
import { ProductContext } from "@/context/ProductContext";

export default function Buy() {
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
 
  const [searchTerm, setSearchTerm] = useState("");
 const [documentData,setDocumentData] = useState([])
  useEffect(() => {
    fetchData();
  }, []);

  const debouncedSearch = debounce(async (term) => {
    try {
      const collectionName = "lots";
      const field = "name";
      const results = await searchData(collectionName, field, term);
      setDocumentData(results);
    } catch (error) {
      console.error("Error searching data:", error);
    }
  }, 500); 

  const handleSearch = (term) => {
    setSearchTerm(term);
    debouncedSearch(term);
  };

  const fetchData = async () => {
    const collectionName = "buy";
    const { result, error } = await getCollection(collectionName);
    if (error) {
      console.error("Error fetching document:", error);
    } else if (result) {
      const lotData = result.docs
        .map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
      console.log(lotData)
      setDocumentData(lotData);
    }
  };
  
  return (
    <Layout>
      <ThemeProvider theme={theme}>
        <Box sx={{ height: "100%", width: "100%", mt: 5 }}>
          <Typography sx={{ fontSize: "2rem", fontWeight: "600" }}>
            รายการซื้อ
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
        </Box>
        <Box sx={{ display: "flex", justifyContent: { xl: "flex-end" } }}>
              <Button
                variant="contained"
                color="success"
                sx={{ mr: 2, mb: 2, mt: 2 }}
                
              >
                สร้างรายการซื้อ
              </Button>
            </Box>
            <TableLots data={{data: documentData}}/>
      </ThemeProvider>
    </Layout>
  );
}
