import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
  IconButton,
  Menu,
  Avatar,
  MenuItem,
} from "@mui/material";
import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";
import DrawerComp from "./drawer";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import Logo from "../../public/Logo.png";
import Profile from "../../public/Profile.png";
import Image from "next/image";
import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { getAuth, signOut } from "firebase/auth";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

let settings = ["โปรไฟล์", "ออกจากระบบ"];

export default function Navbar() {
  const { isAdmin, user } = useAuthContext();
  if (isAdmin == true) {
    settings = ["โปรไฟล์", "แดชบอร์ด", "ออกจากระบบ"];
    console.log(user);
  } else {
    settings = ["โปรไฟล์", "ออกจากระบบ"];
    console.log(user);
  }
  const [activeLink, SetActiveLink] = React.useState("");
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const auth = getAuth();
  const handlelogout = async () => {
    try {
      await signOut(auth);
      console.log("User signed out");
    } catch (error) {
      console.error("An error occurred while signing out:", error);
    }
  };
  const router = useRouter();
  const handleUserMenu = (setting) => {
    if (setting == "ออกจากระบบ") {
      handlelogout();
    } else if (setting == "โปรไฟล์") {
      router.push("/account/profile");
    } else if (setting == "แดชบอร์ด") {
      router.push("/dashboard");
    }
  };

  console.log("ทดสอบpath", router.pathname);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log("ทดสอบค่า", newValue); // Log the updated value
  };

  const themes = useTheme();
  console.log(themes);
  const isMatch = useMediaQuery(themes.breakpoints.down("md"));
  console.log(isMatch);

  const theme = createTheme({
    typography: {
      fontFamily: "Prompt",
      fontSize: 18,
    },
    palette: {
      primary: {
        main: "#ffffff",
      },
    },
  });
  console.log('Current Path:', router.pathname);
  const styles = {
    activeLink: {
      fontWeight: "bold",
      textDecoration: "underline",
      color: "#018294",
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" sx={{ background: "white" }}>
        <Toolbar>
          <Image
            src={Logo}
            alt="logo"
            style={{
              objectFit: "cover",
              width: "4vw",
              height: "100%",
            }}
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
          />
          {isMatch ? (
            <>
              <DrawerComp />
            </>
          ) : (
            <>
              <Link style={{color:"black"}} href="/homepage" passHref>
                <Button
                  style={
                    router.pathname === "/homepage" ? styles.activeLink : {}
                  }
                  color="inherit"
                >
                  หน้าแรก
                </Button>
              </Link>

              <Link style={{color:"black"}} href="/catalog" passHref>
                <Button
                  style={
                    router.pathname === "/catalog" ? styles.activeLink : {}
                  }
                  color="inherit"
                >
                  ผลิตภัณฑ์
                </Button>
              </Link>

              <Link style={{color:"black"}} href="/designs" passHref>
                <Button
                  style={
                    router.pathname === "/designs" ? styles.activeLink : {}
                  }
                  color="inherit"
                >
                  ออกแบบ
                </Button>
              </Link>
              <IconButton color="black" sx={{ marginLeft: "auto" }}>
                <SearchIcon />
              </IconButton>
              <Link href={"/cart"}>
                <IconButton color="black">
                  <ShoppingCartOutlinedIcon />
                </IconButton>
              </Link>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  src="/profile.png"
                  alt="profile"
                  sx={{ width: 32, height: 32, ml: 1 }}
                />
              </IconButton>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem
                    key={setting}
                    onClick={() => handleUserMenu(setting)}
                  >
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </>
          )}
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}
