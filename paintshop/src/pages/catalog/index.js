import Homelayout from "@/components/homelayout";
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
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}
export default function Catalog() {
  const [documentData, setDocumentData] = React.useState(null);
  const router = useRouter();
  function handleCard(data) {
    router.push({
      pathname: "/productpage/",
      query: { catalogData: JSON.stringify(data) },
    });
  }
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
                <Typography color="text.primary">ผลิตภัณฑ์</Typography>
              </Breadcrumbs>
            </div>
            <Link
              style={{ textDecoration: "none" }}
              sx={{
                color: "inherit",
                "&:hover": { textDecoration: "underline" },
              }}
              href="/homepage"
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
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                pb: 2,
                color: "#018294",
                fontSize: "30px",
              }}
            >
              เลือกแคตตาล็อก
            </Typography>
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
        </Container>
      </Box>
    </Homelayout>
  );
}
