import * as React from "react";
import { Badge, createTheme, ThemeProvider } from "@mui/material";
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
import { getUser } from "@/firebase/getData";
import { debounce } from "lodash";
import searchUser from "@/firebase/searchData";
import { CartContext } from "@/context/CartContext";

let settings = ["โปรไฟล์", "ออกจากระบบ"];

export default function Navbar() {
  const [userData, setUserData] = React.useState(null);
  const { role, user } = useAuthContext();
  if (role == "admin") {
    settings = ["โปรไฟล์", "แดชบอร์ด", "ออกจากระบบ"];
    console.log(user);
  } else if (role == "employee") {
    settings = ["โปรไฟล์", "แดชบอร์ด", "ออกจากระบบ"];
    console.log(user);
  } else {
    settings = ["โปรไฟล์", "ออกจากระบบ"];
    console.log(user);
  }
  const [activeLink, SetActiveLink] = React.useState("");
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [documentData, setDocumentData] = React.useState(null);
  const { cartItemCount } = React.useContext(CartContext);
  React.useEffect(() => {
    fetchAllData();
  }, []);
  const fetchAllData = async () => {
    const collection = "users";
    const uid = user.uid;
    const { result, error } = await getUser(collection, uid);

    if (error) {
      console.error("Error fetching collection:", error);
    } else {
      const user = result.docs.map((doc) => ({
        id: doc.id,
        name: doc.data().name,
        email: doc.data().email,
        tel: doc.data().tel,
        img: doc.data().profileUrl,
      }));
      setUserData(user);
    }
  };
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
  const [searchTerm, setSearchTerm] = React.useState("");
  React.useEffect(() => {
    // ทำสิ่งที่คุณต้องการกับ searchResults ที่ได้
    handleSearch("");
  }, []);
  const goBack = () => {
    window.history.back();
  };
  const debouncedSearchCart = debounce(async (term) => {
    const uid = user.uid;
    try {
      const collectionName = "cart";
      const field = "user_id";
      const results = await searchUser(collectionName, field, term);
      const filteredResults = results.filter((doc) => doc.user_id == uid);
      setDocumentData(filteredResults);
    } catch (error) {
      console.error("Error searching data:", error);
    }
  }, 500);

  // กำหนดเวลา debounce ที่คุณต้องการ
  const handleSearch = (term) => {
    setSearchTerm(term);
    debouncedSearchCart(term);
  };
  const router = useRouter();
  const handleUserMenu = (setting) => {
    if (setting == "ออกจากระบบ") {
      handlelogout();
    } else if (setting == "โปรไฟล์") {
      router.push("/account/profile");
    } else if (setting == "แดชบอร์ด") {
      if (role == "admin") {
        router.push("/dashboard");
      } else {
        router.push("/product");
      }
    }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  React.useEffect(() => {
    SetActiveLink(router.pathname);
  }, [router.pathname]);

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
  console.log("Current Path:", activeLink);
  const styles = {
    Box: {
      transition: "0.1s",
      "&:hover": {
        transition: "0.1s",
        color: "#018294",
      },
    },
    activeLink: {
      fontWeight: "bold",
      color: "#018294",
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" sx={{ background: "white" }}>
        <Toolbar>
          {isMatch ? (
            <>
              <DrawerComp />
              <Image
                src={Logo}
                alt="logo"
                style={{
                  objectFit: "contain",
                  width: "20vw",
                  height: "100%",
                }}
                sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
              />
            </>
          ) : (
            <>
              <Image
                src={Logo}
                alt="logo"
                style={{
                  objectFit: "contain",
                  width: "4vw",
                  height: "100%",
                }}
                sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
              />
              <Link
                style={{ color: "black" }}
                href="/homepage"
                passHref
                onClick={(e) => SetActiveLink("/homepage")}
              >
                <Box
                  sx={
                    activeLink === "/homepage" ? styles.activeLink : styles.Box
                  }
                >
                  <Button color="inherit">หน้าแรก</Button>
                </Box>
              </Link>

              <Link
                style={{ color: "black" }}
                href="/catalog"
                passHref
                onClick={(e) => SetActiveLink("/catalog")}
              >
                <Box
                  sx={
                    activeLink === "/catalog" ? styles.activeLink : styles.Box
                  }
                >
                  <Button color="inherit">ผลิตภัณฑ์</Button>
                </Box>
              </Link>
              <Link
                style={{ color: "black" }}
                href="/materialpage"
                passHref
                onClick={(e) => SetActiveLink("/materialpage")}
              >
                <Box
                  sx={
                    activeLink === "/materialpage"
                      ? styles.activeLink
                      : styles.Box
                  }
                >
                  <Button
                    style={
                      router.pathname === "/materialpage"
                        ? styles.activeLink
                        : {}
                    }
                    color="inherit"
                  >
                    วัสดุภัณฑ์
                  </Button>
                </Box>
              </Link>
              <Link
                style={{ color: "black" }}
                href="/designs"
                passHref
                onClick={(e) => SetActiveLink("/designs")}
              >
                <Box
                  sx={
                    activeLink === "/designs" ? styles.activeLink : styles.Box
                  }
                >
                  <Button
                    style={
                      router.pathname === "/designs" ? styles.activeLink : {}
                    }
                    color="inherit"
                  >
                    ออกแบบ
                  </Button>
                </Box>
              </Link>
              <Box color="black" sx={{ marginLeft: "auto" }}></Box>
              <Link href={"/cart"}>
                <IconButton color="black">
                  <Badge badgeContent={cartItemCount} color="error">
                    <ShoppingCartOutlinedIcon />
                  </Badge>
                </IconButton>
              </Link>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {userData &&
                  userData.map((item, index) => (
                    <Box key={index}>
                      <Avatar
                        src={item.img}
                        alt="profile"
                        sx={{ width: 32, height: 32, ml: 1 }}
                      />
                    </Box>
                  ))}
              </IconButton>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
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
