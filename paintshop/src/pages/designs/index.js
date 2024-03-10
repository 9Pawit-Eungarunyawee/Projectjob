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
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import Link from "next/link";
function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}
import Colorfind from "./colorfind";
export default function Designs() {
  const goBack = () => {
    window.history.back();
  };
  return (
    <>
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
                  <Typography color="text.primary">ออกแบบ</Typography>
                </Breadcrumbs>
              </div>
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
                <Grid item xs={12}>
                  <Colorfind />
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>
      </Homelayout>
    </>
  );
}
