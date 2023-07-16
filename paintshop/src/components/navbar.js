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
const pages = [
  { label: "หน้าแรก", url: "" },
  { label: "ผลิตภัณฑ์", url: "/product" },
  { label: "ออกแบบ", url: "/designs" },
];
const settings = ["จัดการสินค้า", "ออกจากระบบ"];

export default function Navbar() {
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
      <AppBar position="static">
        <Container
          maxWidth="false"
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box sx={{ width: "70vw" }}>
            <Toolbar disableGutters>
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
                      <Link href={page.url} passHref>
                        <Typography textAlign="center">
                          <Box>{page.label}</Box>
                        </Typography>
                      </Link>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Image
                src={Logo}
                alt="logo"
                style={{
                  width: "4vw",
                  height: "100%",
                }}
                sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
              />
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
                        color: "black",
                        display: "block",
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
                      src={Profile}
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
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
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