import React from "react";
import { Container, Typography, Box, Grid, useTheme } from "@mui/material";
import Link from "next/link";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import CallIcon from "@mui/icons-material/Call";
import Image from "next/image";
import Logo from "../../public/Logo.png";
export default function Footer() {
  const theme = useTheme();
  return (
    <footer
      style={{ padding: "20px", marginTop: "auto", backgroundColor: "#eeeeee" }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Image
                src={Logo}
                alt="logo"
                style={{
                  objectFit: "cover",
                  width: "6vw",
                  height: "100%",
                }}
                sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
              />
              <Typography
                variant="h5"
                align="center"
                sx={{ fontWeight: "bold", color: "#018294" }}
              >
                ส.วัสดุภัณฑ์
              </Typography>
            </Box>
          </Grid>
          {/* เพิ่มข้อมูลติดต่อ */}
          <Grid item xs={12} sm={4}>
            <Box sx={{ mb: 1 }}>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "#018294" }}
              >
                ติดต่อเรา
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Address: 123 Main Street, City, Country
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Email: Sorwassadupan@gmail.com
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Phone: 0648766312
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "#018294" }}
              >
                ติดตามเรา
              </Typography>
              <FacebookOutlinedIcon
                sx={{
                  fontSize: 20,
                  color: theme.palette.text.secondary,
                  mr: 1,
                }}
              />
              <CallIcon
                sx={{ fontSize: 20, color: theme.palette.text.secondary }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "#018294" }}
            >
              เกี่ยวกับเรา
            </Typography>

            <Link href="/homepage" passHref style={{ textDecoration: "none" }}>
              <Typography
                variant="body2"
                color="textSecondary"
                style={{ textDecoration: "none" }}
              >
                หน้าแรก
              </Typography>
            </Link>

            <Link href="/catalog" passHref style={{ textDecoration: "none" }}>
              <Typography variant="body2" color="textSecondary">
                ผลิตภัณฑ์
              </Typography>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}
