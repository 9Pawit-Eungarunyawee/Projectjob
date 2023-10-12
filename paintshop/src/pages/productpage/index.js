import * as React from "react";
import {
  Box,
  Typography,
  Container,
  Breadcrumbs,
  Grid,
  Button,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
} from "@mui/material";
import { getCollection } from "../../firebase/getData";
import Homelayout from "@/components/homelayout";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import Link from "next/link";
import { useRouter } from "next/router";
function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function Productpage() {
  const [documentData, setDocumentData] = React.useState(null);
  const router = useRouter();
  const catalogId = JSON.parse(router.query.catalogData);

  React.useEffect(() => {
    fetchAllData();
  }, []);
  const fetchAllData = async () => {
    const collection = "products";

    // Check if catalogId is available
    if (catalogId) {
      console.log("Fetching data for catalogId:", catalogId);

      const { result: querySnapshot, error } = await getCollection(collection, {
        where: { catalog_id: catalogId }, // Filter products by catalog_id
      });

      if (error) {
        console.error("Error fetching collection:", error);
      } else {
        const data = [];
        querySnapshot.forEach((doc) => {
          console.log("Document ID:", doc.id);
          const catalogIdFromProduct = doc.data().catalog_id.id;

          // Make sure to compare the right values
          if (catalogIdFromProduct === catalogId) {
            console.log("Matching product found:", doc.data());
            data.push({ id: doc.id, ...doc.data() });
          }
        });
        setDocumentData(data);
      }
    }
  };
  return (
    <Homelayout>
      <Box sx={{ height: "100vh", width: "100%" }}>
        <Container
          maxWidth="false"
          sx={{
            display: "flex",
            justifyContent: "center",
            bgcolor: "#FAF8F1",
          }}
        >
          <Box sx={{ width: "70vw", pt: 2, pb: 2 }}>
            <div role="presentation" onClick={handleClick}>
              <Breadcrumbs aria-label="Beger">
                <Link
                  style={{ textDecoration: "none", color: "inherit" }}
                  sx={{
                    color: "inherit",
                    "&:hover": { textDecoration: "underline" },
                  }}
                  href="/homepage"
                >
                  หน้าแรก
                </Link>
                <Link
                  style={{ textDecoration: "none", color: "inherit" }}
                  sx={{
                    color: "inherit",
                    "&:hover": { textDecoration: "underline" },
                  }}
                  href="/catalog"
                >
                  แค็ตตาล็อก
                </Link>
                <Typography color="text.primary">ผลิตภัณฑ์</Typography>
              </Breadcrumbs>
            </div>
            <Link
              style={{ textDecoration: "none" }}
              sx={{
                color: "inherit",
                "&:hover": { textDecoration: "underline" },
              }}
              href="/catalog"
            >
              <Box sx={{ pt: 2 }}>
                <Button
                  sx={{
                    color: "#018294",
                    bgcolor: "white",
                    fontWeight: "bold",
                    borderRadius: "50px",
                    boxShadow: "4px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                  }}
                >
                  <ArrowBackOutlinedIcon />
                  <Typography> ย้อนกลับ</Typography>
                </Button>
              </Box>
            </Link>
          </Box>
        </Container>
        <Container
          maxWidth={false}
          sx={{
            display: "flex",
            justifyContent: "center",
            bgcolor: "white",
          }}
        >
          <Box sx={{ p: 3, width: "70vw" }}>
            <Grid container spacing={2}>
              <Grid
                item
                xs={12}
                md={3}
                sx={{ display: { xs: "none", md: "block" } }}
              >
                <Box
                  sx={{
                    p: 2,
                    bgcolor: "white",
                    border: "1px solid #7a7a7a",
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: "bold",
                      pb: 2,
                      color: "#7A7A7A",
                      fontSize: "20px",
                    }}
                  >
                    ฟิล์มสี
                  </Typography>
                  <Box
                    sx={{
                      borderTop: "1px solid #7a7a7a",
                      pt: 2,
                    }}
                  ></Box>
                  {documentData &&
                    documentData.map((data) => (
                      <Box key={data.id}>
                        <Typography>{data.film}</Typography>
                      </Box>
                    ))}
                </Box>
              </Grid>
              <Grid item xs={12} md={9}>
                <Grid container spacing={2}>
                  {documentData &&
                    documentData.map((item) => (
                      <Grid key={item.id} item xs={12} sm={6} md={3}>
                        <Card
                          sx={{
                            maxWidth: 350,
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          <CardActionArea>
                            <CardMedia
                              component="img"
                              height="200"
                              image={item.img}
                              alt={item.name}
                            />
                            <CardContent>
                              <Typography
                                variant="h6"
                                sx={{
                                  fontWeight: "bold",
                                  pb: 2,
                                  color: "#018294",
                                  fontSize: {
                                    xs: "1rem",
                                    sm: "1rem",
                                    md: "1rem",
                                  },
                                  textAlign: "left",
                                }}
                              >
                                {item.name}
                              </Typography>
                              <Box
                                sx={{
                                  width: "58px",
                                  height: "3px",
                                  bgcolor: "#FE616A",
                                  ml: 0,
                                }}
                              ></Box>
                              <Typography
                                sx={{
                                  color: "#FE616A",
                                  fontWeight: "bold",
                                  textAlign: "left",
                                  mt: 1,
                                }}
                              >
                                {item.price}
                              </Typography>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                      </Grid>
                    ))}
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </Homelayout>
  );
}
