import * as React from "react";
import {
  Avatar,
  Box,
  Collapse,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PhotoLibraryOutlinedIcon from "@mui/icons-material/PhotoLibraryOutlined";
import { getAuth, signOut } from "firebase/auth";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { getUser } from "@/firebase/getData";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import AnnouncementOutlinedIcon from "@mui/icons-material/AnnouncementOutlined";
import HandymanIcon from '@mui/icons-material/Handyman';
import BrushIcon from "@mui/icons-material/Brush";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
const DrawerComp = () => {
  const [userData, setUserData] = React.useState(null);
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const [activeLink, setActiveLink] = React.useState("");
  const { role, user } = useAuthContext();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  const auth = getAuth();
  let additionalLinks = [];
  let settings = ["โปรไฟล์", "ออกจากระบบ"];
  const styles = {
    Box: {
      transition: "0.1s",
      "&:hover": {
        transition: "0.1s",
        borderRadius: "5px",
        backgroundColor: "#FE616A",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        color: "black", // Set default color for font and icon
      },
    },
    BoxActive: {
      transition: "0.1s",
      backgroundColor: "#FE616A",
      borderRadius: "5px",
      boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      color: "white", // Set white color for font and icon
    },
  };
  const handlelogout = async () => {
    try {
      await signOut(auth);
      console.log("User signed out");
    } catch (error) {
      console.error("An error occurred while signing out:", error);
    }
  };
  if (role === "admin") {
    settings = ["โปรไฟล์", "แดชบอร์ด", "ออกจากระบบ"];
    additionalLinks.push(
      <ListItem key="dashboard">
        <Link
          href="/dashboard"
          style={{
            textDecoration: "none",
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
          onClick={(e) => setActiveLink("/dashboard")}
        >
          <Box
            sx={activeLink === "/dashboard" ? styles.BoxActive : styles.Box}
            display="flex"
            alignItems="center"
            width="100%"
          >
            <DashboardOutlinedIcon sx={{ pr: 1, pl: 1, color: "black" }} />
            <Typography variant="menu" noWrap sx={{ color: "black" }}>
              แดชบอร์ด
            </Typography>
          </Box>
        </Link>
      </ListItem>
    );
  } else if (role === "employee") {
    settings = ["โปรไฟล์", "ออกจากระบบ"];
    additionalLinks.push(
      <ListItem key="product">
        <Link
          href="/product"
          style={{
            textDecoration: "none",
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
          onClick={(e) => setActiveLink("/product")}
        >
          <Box
            sx={activeLink === "/product" ? styles.BoxActive : styles.Box}
            display="flex"
            alignItems="center"
            width="100%"
          >
            <DashboardOutlinedIcon sx={{ pr: 1, pl: 1, color: "black" }} />
            <Typography variant="menu" noWrap sx={{ color: "black" }}>
              แดชบอร์ด
            </Typography>
          </Box>
        </Link>
      </ListItem>
    );
  }

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
  return (
    <React.Fragment>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        PaperProps={{ sx: { width: "250px" } }}
      >
        <List sx={{ borderBottom: "1px solid #D3D3D3", p: 2 }}>
          <ListItem>
            <Box display="flex" alignItems="center" width="100%">
              <Link
                href="/account/profile"
                style={{
                  textDecoration: "none",
                  display: "flex",
                  justifyContent: "center",
                  width: "100%", // Set width to 100%
                }}
                onClick={(e) => setActiveLink("/account/profile")}
              >
                {userData &&
                  userData.map((item, index) => (
                    <Box
                      key={index}
                      display="flex"
                      alignItems="center"
                      width="100%"
                    >
                      <Avatar
                        src={item.img}
                        alt="profile"
                        sx={{ width: 32, height: 32, ml: 1 }}
                      />
                      <Typography
                        sx={{ color: "black", pl: 1, fontWeight: "bold" }}
                      >
                        {item.name}
                      </Typography>
                    </Box>
                  ))}
              </Link>
            </Box>
          </ListItem>
        </List>
        <List
          component="div"
          disablePadding
          sx={{ borderBottom: "1px solid #D3D3D3", p: 2 }}
        >
          <ListItem onClick={handleClick}>
            <PersonOutlineIcon sx={{ pr: 1, pl: 1, color: "black" }} />
            <Typography variant="menu" noWrap sx={{ color: "black" }}>
              ข้อมูลส่วนตัว
            </Typography>
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit sx={{ pl: 3 }}>
            <ListItem>
              <Link
                href="/account/profile"
                style={{
                  textDecoration: "none",
                  display: "flex",
                  justifyContent: "center",
                  width: "100%", // Set width to 100%
                }}
                onClick={(e) => setActiveLink("/account/profile")}
              >
                <Box
                  sx={
                    activeLink === "/account/profile"
                      ? styles.BoxActive
                      : styles.Box
                  }
                  display="flex"
                  alignItems="center"
                  width="100%" // Set width to 100%
                >
                  <PersonOutlineIcon sx={{ pr: 1, pl: 1, color: "black" }} />
                  <Typography variant="menu" noWrap sx={{ color: "black" }}>
                    โปรไฟล์
                  </Typography>
                </Box>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="/account/address"
                style={{
                  textDecoration: "none",
                  display: "flex",
                  justifyContent: "center",
                  width: "100%", // Set width to 100%
                }}
                onClick={(e) => setActiveLink("/account/address")}
              >
                <Box
                  sx={
                    activeLink === "/account/address"
                      ? styles.BoxActive
                      : styles.Box
                  }
                  display="flex"
                  alignItems="center"
                  width="100%" // Set width to 100%
                >
                  <PlaceOutlinedIcon sx={{ pr: 1, pl: 1, color: "black" }} />
                  <Typography variant="menu" noWrap sx={{ color: "black" }}>
                    ที่อยู่
                  </Typography>
                </Box>
              </Link>
            </ListItem>
          </Collapse>
          <ListItem>
            <Link
              href="/account/orderhistory"
              style={{
                textDecoration: "none",
                display: "flex",
                justifyContent: "center",
                width: "100%", // Set width to 100%
              }}
              onClick={(e) => setActiveLink("/account/orderhistory")}
            >
              <Box
                sx={
                  activeLink === "/account/orderhistory"
                    ? styles.BoxActive
                    : styles.Box
                }
                display="flex"
                alignItems="center"
                width="100%" // Set width to 100%
              >
                <DescriptionOutlinedIcon
                  sx={{ pr: 1, pl: 1, color: "black" }}
                />
                <Typography variant="menu" noWrap sx={{ color: "black" }}>
                  รายการคำสั่งซื้อ
                </Typography>
              </Box>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="/account/claimuser"
              style={{
                textDecoration: "none",
                display: "flex",
                justifyContent: "center",
                width: "100%", // Set width to 100%
              }}
              onClick={(e) => setActiveLink("/account/claimuser")}
            >
              <Box
                sx={
                  activeLink === "/account/claimuser"
                    ? styles.BoxActive
                    : styles.Box
                }
                display="flex"
                alignItems="center"
                width="100%" // Set width to 100%
              >
                <AnnouncementOutlinedIcon
                  sx={{ pr: 1, pl: 1, color: "black" }}
                />
                <Typography variant="menu" noWrap sx={{ color: "black" }}>
                  การเคลมสินค้า
                </Typography>
              </Box>
            </Link>
          </ListItem>
        </List>
        <List sx={{ borderBottom: "1px solid #D3D3D3", p: 2 }}>
          <ListItem>
            <Link
              href="/homepage"
              style={{
                textDecoration: "none",
                display: "flex",
                justifyContent: "center",
                width: "100%", // Set width to 100%
              }}
              onClick={(e) => setActiveLink("/homepage")}
            >
              <Box
                sx={activeLink === "/homepage" ? styles.BoxActive : styles.Box}
                display="flex"
                alignItems="center"
                width="100%" // Set width to 100%
              >
                <HomeOutlinedIcon sx={{ pr: 1, pl: 1, color: "black" }} />
                <Typography variant="menu" noWrap sx={{ color: "black" }}>
                  หน้าหลัก
                </Typography>
              </Box>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="/catalog"
              style={{
                textDecoration: "none",
                display: "flex",
                justifyContent: "center",
                width: "100%", // Set width to 100%
              }}
              onClick={(e) => setActiveLink("/catalog")}
            >
              <Box
                sx={activeLink === "/catalog" ? styles.BoxActive : styles.Box}
                display="flex"
                alignItems="center"
                width="100%" // Set width to 100%
              >
                <PhotoLibraryOutlinedIcon
                  sx={{ pr: 1, pl: 1, color: "black" }}
                />
                <Typography variant="menu" noWrap sx={{ color: "black" }}>
                  ผลิตภัณฑ์
                </Typography>
              </Box>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="/materialpage"
              style={{
                textDecoration: "none",
                display: "flex",
                justifyContent: "center",
                width: "100%", // Set width to 100%
              }}
              onClick={(e) => setActiveLink("/materialpage")}
            >
              <Box
                sx={activeLink === "/materialpage" ? styles.BoxActive : styles.Box}
                display="flex"
                alignItems="center"
                width="100%" // Set width to 100%
              >
                <HandymanIcon sx={{ pr: 1, pl: 1, color: "black" }} />
                <Typography variant="menu" noWrap sx={{ color: "black" }}>
                  วัสดุภัณฑ์
                </Typography>
              </Box>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="/designs"
              style={{
                textDecoration: "none",
                display: "flex",
                justifyContent: "center",
                width: "100%", // Set width to 100%
              }}
              onClick={(e) => setActiveLink("/designs")}
            >
              <Box
                sx={activeLink === "/designs" ? styles.BoxActive : styles.Box}
                display="flex"
                alignItems="center"
                width="100%" // Set width to 100%
              >
                <BrushIcon sx={{ pr: 1, pl: 1, color: "black" }} />
                <Typography variant="menu" noWrap sx={{ color: "black" }}>
                  ออกแบบ
                </Typography>
              </Box>
            </Link>
          </ListItem>
        </List>
        <List sx={{ borderBottom: "1px solid #D3D3D3", p: 2 }}>
          <ListItem>
            <Link
              href="/cart"
              style={{
                textDecoration: "none",
                display: "flex",
                justifyContent: "center",
                width: "100%", // Set width to 100%
              }}
              onClick={(e) => setActiveLink("/cart")}
            >
              <Box
                sx={activeLink === "/cart" ? styles.BoxActive : styles.Box}
                display="flex"
                alignItems="center"
                width="100%" // Set width to 100%
              >
                <ShoppingCartOutlinedIcon
                  sx={{ pr: 1, pl: 1, color: "black" }}
                />
                <Typography variant="menu" noWrap sx={{ color: "black" }}>
                  ตะกร้าสินค้า
                </Typography>
              </Box>
            </Link>
          </ListItem>
          {additionalLinks}
        </List>
        <List sx={{ pl: 2, pr: 2 }}>
          <ListItem onClick={handlelogout}>
            <Box
              display="flex"
              alignItems="center"
              width="100%" // Set width to 100%
            >
              <LogoutOutlinedIcon sx={{ pr: 1, pl: 1, color: "black" }} />
              <Typography variant="menu" noWrap sx={{ color: "black" }}>
                ออกจากระบบ
              </Typography>
            </Box>
          </ListItem>
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "black" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon color="white" />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;
