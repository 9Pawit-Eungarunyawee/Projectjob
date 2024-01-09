import Link from "next/link";
import * as React from "react";
import {
  Box,
  Container,
  Typography,
  Tab,
  Tabs,
  TabPanel,
  ThemeProvider,
  createTheme,
  TabContext,
  TabList,
  Grid,
  Button,
} from "@mui/material";
import PropTypes from "prop-types";
import Image from "next/image";
import ImagesearchRollerOutlinedIcon from "@mui/icons-material/ImagesearchRollerOutlined";
import CabinOutlinedIcon from "@mui/icons-material/CabinOutlined";
import HouseOutlinedIcon from "@mui/icons-material/HouseOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import BrushOutlinedIcon from "@mui/icons-material/BrushOutlined";
import SensorDoorOutlinedIcon from "@mui/icons-material/SensorDoorOutlined";
import Homelayout from "@/components/homelayout";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Designcard from "../designcard";
import Colorshade from "../colorshade";
import CircularProgress from "@mui/material/CircularProgress";
import { useRouter } from "next/router";
import { getCollection, getProduct } from "../../firebase/getData";
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          sx={{
            p: 3,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            bgcolor: "#fff",
            boxShadow: "0px 3px 4px 0px rgba(0, 0, 0, 0.25)",
          }}
        >
          {children}
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
export default function Homepage() {
  const [documentData, setDocumentData] = React.useState(null);
  const [productData, setProductData] = React.useState(null);
  const [productIds, setProductIds] = React.useState(null);

  const router = useRouter();
  const theme = createTheme({
    palette: {
      primary: {
        main: "#fffff",
      },
    },
  });
  const styles = {
    imgHover: {
      transition: "transform 0.3s",
      "&:hover": {
        transform: "scale(1.1)",
        transition: "0.5s",
        cursor: "pointer",
      },
    },
    buttonHover: {
      "&:hover": {
        backgroundColor: "#018294",
        transition: "0.5s",
        color: "white",
      },
    },
    activeTab: {
      backgroundColor: "#018294",
      color: "white",
      "&:hover": {
        backgroundColor: "#018294",
        transition: "0.5s",
        color: "white",
        cursor: "pointer",
      },
      "&::before": {
        content: "''",
        position: "absolute",
        bottom: "-20px",
        left: 0,
        right: 0,
        height: "20px",
        borderBottomLeftRadius: "25px",
        borderBottomRightRadius: "25px",
        border: "2px solid #ffffff",
      },
      minWidth: "120px",
    },
    inactiveTab: {
      color: "white",
      "&:hover": {
        backgroundColor: "#018294",
        transition: "0.5s",
        color: "white",
        cursor: "pointer",
      },
      "&::before": {
        content: "''",
        position: "absolute",
        bottom: "-20px",
        left: 0,
        right: 0,
        height: "20px",
        borderBottomLeftRadius: "25px",
        borderBottomRightRadius: "25px",
        border: "2px solid #ffffff",
      },
      minWidth: "120px",
    },
  };
  const [value, setValue] = React.useState(0);
  const initialCatalogId =
    documentData && documentData[value] ? documentData[value].id : null;
  const [selectedCatalogId, setSelectedCatalogId] =
    React.useState(initialCatalogId);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    const catalogId = documentData[newValue]?.id;
    if (catalogId) {
      setSelectedCatalogId(catalogId);
    }
  };
  function handleBtn(data) {
    router.push({
      pathname: "/productpage/",
      query: { catalogData: JSON.stringify(data) },
    });
  }
  // Use useEffect to fetch product data when selectedCatalogId changes
  React.useEffect(() => {
    if (selectedCatalogId !== null) {
      fetchProductData(selectedCatalogId);
    }
  }, [selectedCatalogId]);

  console.log("แคตตาล็อกไอดี", selectedCatalogId);
  //ดึงสินค้า
  const fetchProductData = async (catalogId) => {
    const collection = "products";
    const { result: querySnapshot, error } = await getProduct(
      collection,
      catalogId
    );

    if (error) {
      console.error("Error fetching collection:", error);
    } else {
      const products = querySnapshot.docs.filter((doc) => !doc.data().delete).map((doc) => ({
        id: doc.id,
        name: doc.data().name,
        image: doc.data().img,
      }));
      setProductData(products);
      console.log("โปรดัก", productData);
    }
  };
  console.log("ทดสอบ value", value);
  React.useEffect(() => {
    fetchAllData();
    console.log(documentData);
  }, []);
  const fetchAllData = async () => {
    const collection = "catalog";
    const { result: querySnapshot, error } = await getCollection(collection);

    if (error) {
      console.error("Error fetching collection:", error);
    } else {
      const data = [];
      querySnapshot.forEach((doc) => {
        console.log("Document ID:", doc.id);
        console.log("Document data:", doc.data());
        data.push({ id: doc.id, ...doc.data() });
      });
      setDocumentData(data);
      console.log("ทดสอบ", documentData);
    }
  };
  return (
    <Homelayout>
      <Container maxWidth="false">
        <ThemeProvider theme={theme}>
          <Box sx={{ width: "100%" }}>
            <Box
              sx={{
                bgcolor: "#ABABAB",
                borderRadius: "0px 0px 25px 25px",
                display: "flex",
                justifyContent: "center",
                zIndex: 1,
              }}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                sx={{ maxWidth: "80%" }}
              >
                {documentData &&
                  documentData.map((tab, index) => (
                    <Tab
                      key={index}
                      icon={<HouseOutlinedIcon />}
                      label={tab.name}
                      sx={{
                        ...(value === index
                          ? styles.activeTab
                          : styles.inactiveTab),
                        py: 2,
                      }}
                      {...a11yProps(index)}
                    />
                  ))}
              </Tabs>
            </Box>
            {documentData &&
              documentData.map((item, index) => (
                <CustomTabPanel value={value} index={index} key={index}>
                  <Grid container spacing={2}>
                    <Grid item xs={5}>
                      <Box sx={{ display: { xs: "none", sm: "block" },}}>
                        <Typography
                          variant="h4"
                          sx={{ pb: 2, color: "#018294" }}
                        >
                          {item.name}
                        </Typography>
                        <Typography
                          sx={{
                            fontStyle: "normal",
                            color: "#7a7a7a",
                            pb: 2,
                          }}
                        >
                          สีสำหรับทาปูนโดยเฉพาะ ใช้สำหรับงานคอนกรีต
                          ทาเคลือบพื้นปูน ผนังปูน ฝ้าเพดาน และกระเบื้องแผ่นเรียบ
                        </Typography>
                        <Button
                          sx={{
                            border: "2px solid #018294",
                            color: "#018294",
                            ...styles.buttonHover,
                          }}
                          onClick={() => handleBtn(item.id)}
                        >
                          <Typography>ดูทั้งหมด</Typography>
                          <ArrowForwardIcon />
                        </Button>
                      </Box>
                    </Grid>

                    <Grid item xs={1}>
                      <Box
                        sx={{
                          width: "1px",
                          height: "300px",
                          bgcolor: "#DDD",
                          margin: "auto",
                          display: { xs: "none", sm: "block" },
                        }}
                      ></Box>
                    </Grid>
                    <Grid item xs={12} sm={5}>
                      <Typography>ผลิตภัณฑ์ที่แนะนำ</Typography>
                      <Box sx={{ display: "flex", gap: "16px", p: 2 }}>
                        {productData && productData.length > 0 ? (
                          productData.slice(0, 3).map((product) => (
                            <Box
                              key={product.id}
                              sx={{
                                borderRadius: "50%",
                                overflow: "hidden",
                                position: "relative",
                                width: 202,
                                height: 202,
                              }}
                            >
                              <Image
                                src={product.image}
                                alt={product.name}
                                layout="responsive"
                                width={202}
                                height={202}
                                loading="lazy"
                              />
                            </Box>
                          ))
                        ) : (
                          <Typography>No products available</Typography>
                        )}
                      </Box>
                      <Button
                        sx={{
                          border: "2px solid #018294",
                          color: "#018294",
                          ...styles.buttonHover,
                          width:150,
                          display: { xs: "flex", sm: "none" }, // Show on small screens
                        }}
                        onClick={() => handleBtn(item.id)}
                      >
                        <Typography>ดูทั้งหมด</Typography>
                        <ArrowForwardIcon />
                      </Button>
                    </Grid>
                  </Grid>
                </CustomTabPanel>
              ))}
          </Box>
          <Colorshade />
        </ThemeProvider>
      </Container>
    </Homelayout>
  );
}
