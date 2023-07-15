import {
  Box,
  Button,
  ThemeProvider,
  Typography,
  createTheme,
  makeStyles,
} from "@mui/material";
import Logo from "../../public/Logo.png";
import Image from "next/image";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AppsIcon from "@mui/icons-material/Apps";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import PersonIcon from "@mui/icons-material/Person";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";


export default function Sidebar() {
  const [activeLink,SetActiveLink] = useState("")
  const router = useRouter();
  useEffect(() => {
    SetActiveLink(router.pathname);
  }, [router.pathname]);

  const theme = createTheme({
    typography: {
      title: {
        color: "#fff",
        fontSize: "2vw",
        fontWeight: 600,
      },
      menu: {
        color: "#fff",
        fontSize: "1.3vw",
        fontWeight: 400,
        display: "flex",
        alignItems: "center",
        paddingLeft: "4vw",
      },
    },
  });

  const styles = {
    Box: {
      width: "90%",
      transition: "0.1s",
      mb:1,
      "&:hover": {
        transition: "0.1s",
        borderRadius: "5px",
        backgroundColor: "#FE616A",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        transform: "translateY(-1.5px)",
      },
    },
    BoxActive: {
      width: "90%",
      transition: "0.1s",
      mb:1,
      backgroundColor: "#FE616A",
      borderRadius: "5px",
      boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      "&:hover": {
        transition: "0.1s",
        transform: "translateY(-1.5px)",
      }
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: "19vw",
          height: "100vh",
          bgcolor: "#018294",
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          borderRadius: "0px 50px 50px 0px",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "10vw",
            overflow: "hidden",
            borderRadius: "20px",
          }}
        >
          <Image
            src={Logo}
            alt="logo"
            style={{
              objectFit: "cover",
              width: "10vw",
              height: "124%",
            }}
          />
        </Box>
        <Typography variant="title">ส.วัสดุภัณฑ์</Typography>
        <Box><hr style={{width:"90%"}}/></Box>
        <Box>
          <ul
            style={{
              listStyleType: "none",
              padding: 0,
              lineHeight: "3vw",
              width: "100%",
            }}
          >
            <li>
              <Link
                href="/dashboard"
                style={{
                  textDecoration: "none",
                  display: "flex",
                  justifyContent: "center",
                }}
                onClick={(e)=>SetActiveLink("/dashboard")}
              >
                <Box sx={activeLink === "/dashboard" ? styles.BoxActive : styles.Box}>
                  <Typography variant="menu">
                    <DashboardIcon sx={{ pr: 2 }} />
                    แดชบอร์ด
                  </Typography>
                </Box>
              </Link>
            </li>
            <li>
              <Link
                href="/product"
                style={{
                  textDecoration: "none",
                  display: "flex",
                  justifyContent: "center",
                }}
                onClick={(e)=>SetActiveLink("/product")}
               
              >
                <Box sx={activeLink === "/product" ? styles.BoxActive : styles.Box}>
                  <Typography variant="menu">
                    <AppsIcon sx={{ pr: 2 }} />
                    จัดการสินค้า
                  </Typography>
                </Box>
              </Link>
            </li>
            <li>
              <Link
                href="/category"
                style={{
                  textDecoration: "none",
                  display: "flex",
                  justifyContent: "center",
                }}
                onClick={(e)=>SetActiveLink("/category")}
              >
                <Box sx={activeLink === "/category" ? styles.BoxActive : styles.Box}>
                  <Typography variant="menu">
                    <PhotoLibraryIcon sx={{ pr: 2 }} />
                    หมวดหมู่สินค้า
                  </Typography>
                </Box>
              </Link>
            </li>
            <li>
              <Link
                href="/order"
                style={{
                  textDecoration: "none",
                  display: "flex",
                  justifyContent: "center",
                }}
                onClick={(e)=>SetActiveLink("/order")}
                >
                  <Box sx={activeLink === "/order" ? styles.BoxActive : styles.Box}>
                  <Typography variant="menu">
                    <StarBorderIcon sx={{ pr: 2 }} />
                    จัดการคำสั่งซื้อ
                  </Typography>
                </Box>
              </Link>
            </li>
            <li>
              <Link
                href="/claim"
                style={{
                  textDecoration: "none",
                  display: "flex",
                  justifyContent: "center",
                }}
                onClick={(e)=>SetActiveLink("/claim")}
                >
                  <Box sx={activeLink === "/claim" ? styles.BoxActive : styles.Box}>
                  <Typography variant="menu">
                    <AutorenewIcon sx={{ pr: 2 }} />
                    การเคลมสินค้า
                  </Typography>
                </Box>
              </Link>
            </li>
            <li>
              <Link
                href="/employee"
                style={{
                  textDecoration: "none",
                  display: "flex",
                  justifyContent: "center",
                }}
                onClick={(e)=>SetActiveLink("/employee")}
                >
                  <Box sx={activeLink === "/employee" ? styles.BoxActive : styles.Box}>
                  <Typography variant="menu">
                    <PersonIcon sx={{ pr: 2 }} />
                    จัดการพนักงาน
                  </Typography>
                </Box>
              </Link>
            </li>
          </ul>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
