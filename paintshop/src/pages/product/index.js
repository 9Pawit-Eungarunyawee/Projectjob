import Layout from "@/components/layout";
import {
  Alert,
  Box,
  Button,
  InputAdornment,
  Snackbar,
  Tab,
  Tabs,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import TableProduct from "./table";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { softDeleteData } from "@/firebase/addData";
import { useAuthContext } from "@/context/AuthContext";
import { debounce } from "lodash";
import searchData from "@/firebase/searchData";
import { ProductContext } from "@/context/ProductContext";
import PropTypes from "prop-types";
import { BuyContext } from "@/context/BuyContext";
import { getCollection } from "@/firebase/getData";
import { OrderContext } from "@/context/OrderContext";
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
        <Box sx={{ pt: 3 }}>
          <Box>{children}</Box>
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

export default function Product() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#018294",
      },
      success: {
        main: "#A9C470",
      },
      error: {
        main: "#FE616A",
      },
    },
  });

  const { user } = useAuthContext();
  const { productData, setProductData, fetchProductData } =
    useContext(ProductContext);
  const { buyData } = useContext(BuyContext);
  const { orderData } = useContext(OrderContext);
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();
  function handleAdd() {
    router.push("/product/addproduct");
  }
 const handleAddMaterial = () =>{
  router.push("/product/addmaterial");
 }
  const debouncedSearchUser = debounce(async (term) => {
    try {
      const collectionName = "products";
      const field = "name";
      const results = await searchData(collectionName, field, term);
      const filteredResults = results.filter((doc) => !doc.delete);
      setProductData(filteredResults);
    } catch (error) {
      console.error("Error searching data:", error);
    }
  }, 500);

  const handleSearch = (term) => {
    setSearchTerm(term);
    debouncedSearchUser(term);
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  const handleDelete = async (id) => {
    const data = {
      id: id,
      user_id: user.uid,
    };
    const result = await softDeleteData("products", data);
    handleSearch("");
    if (result) {
      setAlert(
        <Alert severity="success" onClose={handleClose}>
          ลบข้อมูลสำเร็จ
        </Alert>
      );
      setOpen(true);
    } else {
      setAlert(
        <Alert severity="error" onClose={handleClose}>
          ผิดพลาด! ไม่สามารถลบข้อมูลได้
        </Alert>
      );
      setOpen(true);
    }
  };
  const [alert, setAlert] = useState(null);
  const [open, setOpen] = useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const openhistory = () => {
    router.push("product/history");
  };

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [productOutOfStock, setProductOutOfStock] = useState([]);
  const [productAlmostOutOfStock, setProductAlmostOutOfStock] = useState([]);
  useEffect(() => {
    if (
      productData != undefined
    ) {
      // console.log(
      //   "getProductOutOfStock:",
      //   getProductOutOfStock(productData, buyData, orderData)
      // );
      // console.log(
      //   "getProductAlmostOutOfStock:",
      //   getProductAlmostOutOfStock(productData, buyData, orderData)
      // );

      setProductOutOfStock(
        getProductOutOfStock(productData)
      );

      setProductAlmostOutOfStock(
        getProductAlmostOutOfStock(productData)
      );
    }
  }, [productData]);

  const getProductOutOfStock = (productData) => {
    const outOfStockProducts = productData.filter((product) => {
      return product.productSizes.some((size) => size.amount === 0 || size.amount === "");
    });
  
    return outOfStockProducts;
  };

  const getProductAlmostOutOfStock = (productData) => {
    const almostOutOfStockProducts = productData.filter((product) => {
      return product.productSizes.some((size) => size.amount < 11 && size.amount > 0 );
    });
    return almostOutOfStockProducts;
  };

  return (
    <Layout>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        {alert}
      </Snackbar>
      <ThemeProvider theme={theme}>
        <Box sx={{ height: "100%", width: "100%", mt: 5 }}>
          <Typography sx={{ fontSize: "2rem", fontWeight: "600" }}>
            การจัดการสินค้า
          </Typography>
          <Box sx={{ mt: 1 }}>
            <TextField
              label="ค้นหา"
              variant="outlined"
              size="small"
              onChange={(e) => handleSearch(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ fontSize: "1.4rem" }} />
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          <Box>
            <Box sx={{ display: "flex", justifyContent: { xl: "flex-end" } }}>
              <Button
                variant="contained"
                color="success"
                sx={{ mr: 2, mb: 2, mt: 2 }}
                onClick={handleAdd}
              >
                <Typography>เพิ่มสินค้า(สี)</Typography>
              </Button>
              <Button
                variant="contained"
                color="success"
                sx={{ mr: 2, mb: 2, mt: 2 }}
                onClick={handleAddMaterial}
              >
                <Typography>เพิ่มสินค้า(วัสดุ)</Typography>
              </Button>
              <Button
                variant="contained"
                color="error"
                sx={{ mb: 2, mt: 2 }}
                onClick={openhistory}
              >
                <Typography>ประวัติการลบ</Typography>
              </Button>
            </Box>
            <Box sx={{ width: "100%" }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                  variant="scrollable"
                >
                  <Tab
                    label={<Typography>ทั้งหมด</Typography>}
                    {...a11yProps(0)}
                  />
                  <Tab
                    label={<Typography>พร้อมขาย</Typography>}
                    {...a11yProps(1)}
                  />
                  <Tab
                    label={<Typography>ไม่พร้อมขาย</Typography>}
                    {...a11yProps(2)}
                  />
                  <Tab
                    label={<Typography>สินค้าใกล้หมด</Typography>}
                    {...a11yProps(3)}
                  />
                  <Tab
                    label={<Typography>สินค้าหมด</Typography>}
                    {...a11yProps(4)}
                  />
                </Tabs>
              </Box>
              <CustomTabPanel value={value} index={0}>
                <TableProduct
                  data={{ data: productData.filter((item)=> !item.delete) }}
                  onDelete={handleDelete}
                />
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                <TableProduct
                  data={{ data: productData.filter((item) => item.status && !item.delete) }}
                  onDelete={handleDelete}
                />
              </CustomTabPanel>
              <CustomTabPanel value={value} index={2}>
                <TableProduct
                  data={{ data: productData.filter((item) => !item.status && !item.delete) }}
                  onDelete={handleDelete}
                />
              </CustomTabPanel>

              <CustomTabPanel value={value} index={3}>
                <TableProduct
                  data={{ data: productAlmostOutOfStock.filter((item)=>!item.delete) }}
                  onDelete={handleDelete}
                />
              </CustomTabPanel>
              <CustomTabPanel value={value} index={4}>
                <TableProduct
                  data={{ data: productOutOfStock.filter((item)=>!item.delete) }}
                  onDelete={handleDelete}
                />
              </CustomTabPanel>
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </Layout>
  );
}
