import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Logo from "../../public/Logo.png";
import Profile from "../../public/Profile.png";
import Image from "next/image";
import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { getAuth, signOut } from "firebase/auth";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
const pages = [
  { label: "หน้าแรก", url: "/" },
  { label: "ผลิตภัณฑ์", url: "/products" },
  { label: "ออกแบบ", url: "/designs" },
];

let settings = ["จัดการสินค้า", "ออกจากระบบ"];

export default function Navbar() {
  const { isAdmin, user } = useAuthContext();
  if (isAdmin == true) {
    settings = ["จัดการสินค้า", "แดชบอร์ด", "ออกจากระบบ"];
    console.log(user);
  } else {
    settings = ["จัดการสินค้า", "ออกจากระบบ"];
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
    } else if (setting == "จัดการสินค้า") {
      console.log("จัดการสินค้า");
    }else if (setting == "แดชบอร์ด"){
      router.push("/dashboard")
    }
  };
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

  const styles = {
    Box: {
      transition: "0.2s",
      mb: 1,
      position: "relative",
      "&:after": {
        content: '""',
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "3px",
        backgroundColor: "transparent",
        transition: "0.3s linear",
      },
      "&:hover:after": {
        backgroundColor: "#018294",
      },
      "&:hover": {
        color: "#018294",
      },
    },
    BoxActive: {
      transition: "0.2s",
      mb: 1,
      position: "relative",
      "&:after": {
        content: '""',
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "3px",
        backgroundColor: "#018294",
      },
      "&:hover": {
        color: "#018294",
      },
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <AppBar
        position="static"
        sx={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
      >
        <Container
          maxWidth="false"
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box sx={{ width: "70vw" }}>
            <Toolbar disableGutters>
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
              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page.label} onClick={handleCloseNavMenu}>
                      <Typography
                        textAlign="center"
                        style={{
                          color:
                            activeLink === page.label ? "#018294" : "inherit",
                        }}
                      >
                        {page.label}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {pages.map((page) => (
                  <Link
                    key={page.label}
                    href={page.url}
                    passHref
                    style={{
                      textDecoration: "none",
                    }}
                    onClick={(e) => SetActiveLink(page.url)}
                  >
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{
                        ...(activeLink === page.url
                          ? styles.BoxActive
                          : styles.Box),
                        my: 2,
                        display: "block",
                      }}
                      style={{
                        color: activeLink === page.url ? "#018294" : "black", // แก้ไขที่นี่
                      }}
                    >
                      {page.label}
                    </Button>
                  </Link>
                ))}
              </Box>

              <Box sx={{ flexGrow: 0, display: "flex", alignItems: "center" }}>
                <Tooltip title="Search">
                  <IconButton color="inherit">
                    <SearchIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Shopping Cart">
                  <IconButton color="inherit">
                    <ShoppingBagOutlinedIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      src="/profile.png"
                      alt="profile"
                      sx={{ width: 32, height: 32, ml: 1 }}
                    />
                  </IconButton>
                </Tooltip>
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
              </Box>
            </Toolbar>
          </Box>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}
