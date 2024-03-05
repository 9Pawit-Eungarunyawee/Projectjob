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
import { FieldValue } from "firebase/firestore";
import { ProductContext } from "@/context/ProductContext";
import { debounce } from "lodash";
import searchData from "@/firebase/searchData";
function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function Productpage() {
  const [documentData, setDocumentData] = React.useState(null);
  const [lotData, setLotData] = React.useState(null);
  const [searchTerm, setSearchTerm] = React.useState("");
  const router = useRouter();
  const catalogId = JSON.parse(router.query.catalogData);
  const format = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  const goBack = () => {
    window.history.back();
  };
  function handleCard(productId) {
    router.push({
      pathname: "/colorselect/",
      query: {
        catalogData: JSON.stringify(catalogId),
        productId: JSON.stringify(productId),
      },
    });
  }
  const debouncedSearchUser = debounce(async (term) => {
    try {
      const collectionName = "buy";
      const field = "name";
      const results = await searchData(collectionName, field, term);
      setLotData(results);
    } catch (error) {
      console.error("Error searching data:", error);
    }
  }, 500);

  React.useEffect(() => {
    handleSearch("");
  }, []);
  //ดึงของ
  const debouncedSearchProduct = debounce(async (term) => {
    try {
      const collectionName = "products";
      const field = "name";
      const results = await searchData(collectionName, field, term);
      const filteredResults = results.filter(
        (doc) =>
          doc.catalog_id.id === catalogId &&
          doc.status === true &&
          doc.delete === null
      );
      setDocumentData(filteredResults);
    } catch (error) {
      console.error("Error searching data:", error);
    }
  }, 500);
  const handleSearch = (term) => {
    setSearchTerm(term);
    debouncedSearchUser(term);
    debouncedSearchProduct(term);
  };
  const findprice = (id) => {
    console.log("lotData", lotData);
    console.log("id", id);

    const product = lotData.find((product) => product.id === id);
    const price = product ? product.cost : id;
    return price;
  };
  return (
    <Homelayout>
      <Box sx={{ width: "100%" }}>
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
                  แคตตาล็อก
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
                  onClick={goBack}
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
              <Grid item xs={12} >
                <Grid container spacing={2}>
                  {documentData &&
                    documentData.map((item, index) => (
                      <Grid key={index} item xs={12} sm={6} md={2}>
                        <Card
                          sx={{
                            maxWidth: 350,
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                          }}
                          onClick={() => handleCard(item.id)}
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
                                {item.name} {item.area}
                              </Typography>
                              <Box
                                sx={{
                                  width: "58px",
                                  height: "3px",
                                  bgcolor: "#FE616A",
                                  ml: 0,
                                }}
                              ></Box>

                              <Box>
                                <Typography
                                  sx={{
                                    color: "#FE616A",
                                    fontWeight: "bold",
                                    textAlign: "left",
                                    mt: 1,
                                  }}
                                >
                                  ฿{format(item.productSizes[0].price)}
                                </Typography>
                              </Box>
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
