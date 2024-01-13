import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  ThemeProvider,
  Toolbar,
  Typography,
  createTheme,
} from "@mui/material";
import Logo from "../../public/Logo.png";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AppsIcon from "@mui/icons-material/Apps";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getAuth, signOut } from "firebase/auth";
import { useAuthContext } from "@/context/AuthContext";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

export default function NavbarAdmin() {
  const [activeLink, setActiveLink] = useState("");
  const { role } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    setActiveLink(router.pathname);
  }, [router.pathname]);

  const auth = getAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User signed out");
    } catch (error) {
      console.error("An error occurred while signing out:", error);
    }
  };

  const theme = createTheme({
    typography: {
      title: {
        color: "#fff",
        fontWeight: 600,
        fontSize: "1.8rem",
      },
      menu: {
        color: "#fff",
        fontSize: "1.4rem",
        fontWeight: 400,
        display: "flex",
        alignItems: "center",
        paddingLeft: "4vw",
        padding: "15px",
      },
    },
  });

  const styles = {
    Box: {
      width: "90%",
      transition: "0.1s",
      m: 1,
      "&:hover": {
        transition: "0.1s",
        borderRadius: "5px",
        backgroundColor: "#FE616A",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      },
    },
    BoxActive: {
      width: "90%",
      transition: "0.1s",
      backgroundColor: "#FE616A",
      borderRadius: "5px",
      boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    },
  };

  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: "70vw",
        minHeight: "100vh",
        bgcolor: "#018294",
        overflow: "scroll",
      }}
    >
      <Box
        sx={{
          width: "100%",
          overflow: "hidden",
          borderRadius: "20px",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Image
          src={Logo}
          alt="logo"
          style={{
            objectFit: "cover",
            width: "15rem",
            height: "124%",
          }}
        />
        <Typography variant="title">ส.วัสดุภัณฑ์</Typography>
      </Box>
      <Box>
        <hr style={{ width: "90%" }} />
      </Box>
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
            href="/homepage"
            style={{
              textDecoration: "none",
              display: "flex",
              justifyContent: "center",
            }}
            onClick={(e) => setActiveLink("/homepage")}
          >
            <Box
              sx={activeLink === "/homepage" ? styles.BoxActive : styles.Box}
            >
              <Typography variant="menu" noWrap>
                <HomeIcon sx={{ pr: 2 }} />
                หน้าหลัก
              </Typography>
            </Box>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard"
            style={{
              textDecoration: "none",
              display: role === "employee" ? "none" : "flex",
              justifyContent: "center",
            }}
            onClick={(e) => setActiveLink("/dashboard")}
          >
            <Box
              sx={activeLink === "/dashboard" ? styles.BoxActive : styles.Box}
            >
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
            onClick={(e) => setActiveLink("/product")}
          >
            <Box sx={activeLink === "/product" ? styles.BoxActive : styles.Box}>
              <Typography variant="menu" noWrap>
                <AppsIcon sx={{ pr: 2 }} />
                จัดการสินค้า
              </Typography>
            </Box>
          </Link>
        </li>
        <li>
          <Link
            href="/catalogadmin"
            style={{
              textDecoration: "none",
              display: "flex",
              justifyContent: "center",
            }}
            onClick={(e) => setActiveLink("/catalogadmin")}
          >
            <Box
              sx={
                activeLink === "/catalogadmin" ? styles.BoxActive : styles.Box
              }
            >
              <Typography variant="menu" noWrap>
                <PhotoLibraryIcon sx={{ pr: 2 }} />
                แคตตาล็อคสี
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
            onClick={(e) => setActiveLink("/order")}
          >
            <Box sx={activeLink === "/order" ? styles.BoxActive : styles.Box}>
              <Typography variant="menu" noWrap>
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
            onClick={(e) => setActiveLink("/claim")}
          >
            <Box sx={activeLink === "/claim" ? styles.BoxActive : styles.Box}>
              <Typography variant="menu" noWrap>
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
              display: role === "employee" ? "none" : "flex",
              justifyContent: "center",
            }}
            onClick={(e) => setActiveLink("/employee")}
          >
            <Box
              sx={activeLink === "/employee" ? styles.BoxActive : styles.Box}
            >
              <Typography variant="menu" noWrap>
                <PersonIcon sx={{ pr: 2 }} />
                จัดการพนักงาน
              </Typography>
            </Box>
          </Link>
        </li>
        <li>
          <Box
            style={{
              textDecoration: "none",
              display: "flex",
              justifyContent: "center",
            }}
            onClick={handleLogout}
          >
            <Box sx={styles.Box}>
              <Typography variant="menu" noWrap>
                <LogoutIcon sx={{ pr: 2 }} />
                ออกจากระบบ
              </Typography>
            </Box>
          </Box>
        </li>
      </ul>
    </Box>
  );

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" sx={{ bgcolor: "#018294", width: "100vw" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer("left", true)}
          >
            <MenuIcon />
          </IconButton>
          <Image
            src={Logo}
            alt="logo"
            style={{
              objectFit: "cover",
              width: "5rem",
              height: "4rem",
              transform:"translate(-30px,0)"
            }}
          />
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={state.left}
        onClose={toggleDrawer("left", false)}
      >
        {list("left")}
      </Drawer>
    </ThemeProvider>
  );
}
