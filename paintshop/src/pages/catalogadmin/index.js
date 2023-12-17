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
  const [documentData, setDocumentData] = React.useState(null);
  React.useEffect(() => {
    fetchAllData();
    console.log(documentData);
  }, []);
  const fetchAllData = async () => {
    const collection = "catalog";

    const { result: querySnapshot, error } = await getCollection(collection);

    if (error) {
      console.error("Error fetching collection:", error);
    } else {
      const data = [];
      querySnapshot.forEach((doc) => {
        console.log("Document ID:", doc.id);
        console.log("Document data:", doc.data());
        data.push({ id: doc.id, ...doc.data() });
      });
      setDocumentData(data);
    }
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
  return (
    <Layout>
      <ThemeProvider theme={theme}>
        <Box sx={{ minHeight: "70vh", width: "100%", mt: 5, mb: 3 }}>
          <Typography sx={{ fontSize: "2vw", fontWeight: "600" }}>
            แคตตาล็อค
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
          <Box
            sx={{ display: "flex", justifyContent: "flex-end", width: "98%" }}
          >
            <Button variant="contained" color="success" onClick={handleAdd}>
              เพิ่มแค็ตตาล็อก
            </Button>
          </Box>
          <Box
            sx={{
              height: "100%",
              width: "95%",
              backgroundColor: "#fff",
              p: 2,
              mt: 2,
              boxShadow: "4px 4px 4px 0px rgba(0, 0, 0, 0.25)",
              borderRadius: "5px",
            }}
          >
            <Grid container spacing={2}>
              {documentData &&
                documentData.map((item) => (
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
