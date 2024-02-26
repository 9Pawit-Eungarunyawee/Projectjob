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
import searchUser from "@/firebase/searchData";
import { useRouter } from "next/router";
import { debounce } from "lodash";
import { CatalogContext } from "@/context/CatalogContext";
function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}
export default function Catalog() {
  const router = useRouter();
  function handleCard(data) {
    router.push({
      pathname: "/productpage/",
      query: { catalogData: JSON.stringify(data) },
    });
  }
  const [searchTerm, setSearchTerm] = React.useState("");
  React.useEffect(() => {
    // ทำสิ่งที่คุณต้องการกับ searchResults ที่ได้
    handleSearch("");
  }, []);

  const { catalogData, setCatalogData, fetchcatalogData } =
    React.useContext(CatalogContext);
  React.useEffect(() => {
    fetchcatalogData();
  }, [catalogData]);
  const debouncedSearchUser = debounce(async (term) => {
    try {
      const collectionName = "catalog";
      const field = "name";
      const results = await searchUser(collectionName, field, term);
      setCatalogData(results);
    } catch (error) {
      console.error("Error searching data:", error);
    }
  }, 500); // กำหนดเวลา debounce ที่คุณต้องการ

  const handleSearch = (term) => {
    setSearchTerm(term);
    debouncedSearchUser(term);
  };

  return (
    <Homelayout>
      <Box sx={{  width: "100%" }}>
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
                <Typography color="text.primary">แค็ตตาล็อก</Typography>
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
              {catalogData &&
                catalogData.map((item) => (
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
