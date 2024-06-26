import * as React from "react";
import Box from "@mui/material/Box";
import Layout from "@/components/layout";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  InputAdornment,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";
import SearchIcon from "@mui/icons-material/Search";
import { getCollection } from "../../firebase/getData";
import { useRouter } from "next/router";
import { debounce } from "lodash";
import { useEffect } from "react";
import { useState } from "react";
import searchData from "@/firebase/searchData";
import { CatalogContext } from "@/context/CatalogContext";
export default function Catalogadmin() {
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
  const { catalogData, setCatalogData, fetchcatalogData } =
    React.useContext(CatalogContext);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchcatalogData();
  }, []);
  const debouncedSearchUser = debounce(async (term) => {
    try {
      const collectionName = "catalog";
      const field = "name";
      const results = await searchData(collectionName, field, term);
      setCatalogData(results);
    } catch (error) {
      console.error("Error searching data:", error);
    }
  }, 500); // กำหนดเวลา debounce ที่คุณต้องการ

  const handleSearch = (term) => {
    setSearchTerm(term);
    debouncedSearchUser(term);
  };

  const router = useRouter();
  function handleAdd() {
    router.push("/catalogadmin/addcatalog");
  }
  function handleCard(id) {
    router.push({
      pathname: "/catalogadmin/editcatalog",
      query: { catalog_id: JSON.stringify(id) },
    });
  }
  const goHistory = () => {
    router.push("/catalogadmin/history");
  };
  return (
    <Layout>
      <ThemeProvider theme={theme}>
        <Box sx={{ minHeight: "70vh", width: "100%", mt: 5, mb: 3 }}>
          <Typography sx={{ fontSize: "2rem", fontWeight: "600" }}>
            แคตตาล็อค
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
          <Box
            sx={{
              display: "flex",
              justifyContent: { xl: "flex-end" },
              width: "100%",
            }}
          >
            <Button
              variant="contained"
              color="success"
              onClick={handleAdd}
              sx={{ mr: 2, mb: 2, mt: 2 }}
            >
              <Typography>เพิ่มแค็ตตาล็อก</Typography>
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={goHistory}
              sx={{ mb: 2, mt: 2 }}
            >
              <Typography>ประวัติการลบ</Typography>
            </Button>
          </Box>
          <Box
            sx={{
              height: "100%",

              backgroundColor: "#fff",
              p: 2,
              mt: 2,
              boxShadow: "4px 4px 4px 0px rgba(0, 0, 0, 0.25)",
              borderRadius: "5px",
            }}
          >
            <Grid container spacing={2}>
              {catalogData &&
                catalogData
                  .filter((doc) => !doc.delete)
                  .map((item) => (
                    <Grid key={item.id} item xs={12} sm={6} md={4}>
                      <Card
                        sx={{ maxWidth: 400 }}
                        onClick={() => handleCard(item.id)}
                      >
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            height="200"
                            src={item.img}
                            alt="ภาพ"
                          />
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="div"
                              sx={{
                                color: "#018294",
                                fontSize: {
                                  xs: "1rem",
                                  sm: "1rem",
                                  md: "1.5rem",
                                },
                              }}
                            >
                              {item.name}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grid>
                  ))}
            </Grid>
          </Box>
        </Box>
      </ThemeProvider>
    </Layout>
  );
}
