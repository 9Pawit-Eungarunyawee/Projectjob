import Box from "@mui/material/Box";
import Layout from "@/components/layout";
import {
  Button,
  InputAdornment,
  Paper,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tabs,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
  styled,
  tableCellClasses,
} from "@mui/material";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import Image from "next/image";
import { useContext, useEffect } from "react";
import { useState } from "react";
import { getCollection } from "@/firebase/getData";
import { ProductContext } from "@/context/ProductContext";
import { UserContext } from "@/context/UserContext";
import { useRouter } from "next/router";
import SearchIcon from "@mui/icons-material/Search";
import searchData from "@/firebase/searchData";
import { debounce } from "lodash";
import TableSell from "./table";
import { OrderContext } from "@/context/OrderContext";
import PropTypes from "prop-types";
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

CustomTabPanel.PropTypes = {
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

export default function Order() {
  const goBack = () => {
    window.history.back();
  };
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

  const router = useRouter();
  const { productData, fetchProductData } = useContext(ProductContext);
  const { userData, fetchUserData } = useContext(UserContext);
  const { orderData, fetchOrderData } = useContext(OrderContext);
  const [documentData, setDocumentData] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUserData();
    fetchProductData();
    fetchOrderData();
  }, []);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // const [searchTerm, setSearchTerm] = useState("");

  // const debouncedSearch = debounce(async (term) => {
  //   try {
  //     const collectionName = "sell";
  //     const field = "name";
  //     const results = await searchData(collectionName, field, term);
  //     const sortedData = results.sort((a, b) => {
  //       return b.date.toMillis() - a.date.toMillis();
  //     });

  //     // ตั้งค่าข้อมูลใหม่ที่เรียงลำดับแล้ว
  //     setBuyData(sortedData);
  //   } catch (error) {
  //     console.error("Error searching data:", error);
  //   }
  // }, 500);

  // const handleSearch = (term) => {
  //   setSearchTerm(term);
  //   debouncedSearch(term);
  // };

  return (
    <Layout>
      <ThemeProvider theme={theme}>
        <Box>
          <Box sx={{ height: "100%", width: "100%", mt: 5 }}>
            <Typography sx={{ fontSize: "2rem", fontWeight: "600" }}>
              รายการขาย
            </Typography>

            {/* <TableSell documentData={orderData} userData={userData}/> */}
            <Box sx={{ width: "100%",mt:5 ,mb:5}}>
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
                    label={<Typography>รอยืนยัน</Typography>}
                    {...a11yProps(1)}
                  />
                  <Tab
                    label={<Typography>จัดเตรียมสินค้า</Typography>}
                    {...a11yProps(2)}
                  />
                  <Tab
                    label={<Typography>อยู่ระหว่างจัดส่ง</Typography>}
                    {...a11yProps(3)}
                  />
                  <Tab
                    label={<Typography>จัดส่งสำเร็จ</Typography>}
                    {...a11yProps(4)}
                  />
                  <Tab
                    label={<Typography>ยกเลิก</Typography>}
                    {...a11yProps(5)}
                  />
                </Tabs>
              </Box>
              <CustomTabPanel value={value} index={0}>
                <TableSell documentData={orderData} userData={userData} />
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                <TableSell documentData={orderData.filter((item) => item.status === "รอยืนยัน")} userData={userData} />
              </CustomTabPanel>
              <CustomTabPanel value={value} index={2}>
                <TableSell documentData={orderData.filter((item) => item.status === "จัดเตรียมสินค้า")} userData={userData} />
              </CustomTabPanel>
              <CustomTabPanel value={value} index={3}>
                <TableSell documentData={orderData.filter((item) => item.status === "อยู่ระหว่างจัดส่ง")} userData={userData} />
              </CustomTabPanel>
              <CustomTabPanel value={value} index={4}>
                <TableSell documentData={orderData.filter((item) => item.status === "จัดส่งสำเร็จ")} userData={userData} />
              </CustomTabPanel>
              <CustomTabPanel value={value} index={5}>
                <TableSell documentData={orderData.filter((item) => item.status === "ยกเลิก")} userData={userData} />
              </CustomTabPanel>
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </Layout>
  );
}
