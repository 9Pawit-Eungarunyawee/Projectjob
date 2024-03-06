import Layout from "@/components/layout";
import { getCollection } from "@/firebase/getData";
import searchData from "@/firebase/searchData";
import {
  Box,
  Button,
  InputAdornment,
  Tab,
  Tabs,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import { debounce } from "lodash";
import { useContext, useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import TableLots from "./table";
import { ProductContext } from "@/context/ProductContext";
import Link from "next/link";
import PropTypes from "prop-types";
import { BuyContext } from "@/context/BuyContext";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ pt: 2, mb: 5 }}>
          <Box>{children}</Box>
        </Box>
      )}
    </Box>
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

export default function Buy() {
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
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [searchTerm, setSearchTerm] = useState("");

  const debouncedSearch = debounce(async (term) => {
    try {
      const collectionName = "buy";
      const field = "name";
      const results = await searchData(collectionName, field, term);
      const sortedData = results.sort((a, b) => {
        return b.createAt.toMillis() - a.createAt.toMillis();
      });

      // ตั้งค่าข้อมูลใหม่ที่เรียงลำดับแล้ว
      setBuyData(sortedData);
    } catch (error) {
      console.error("Error searching data:", error);
    }
  }, 500);

  const handleSearch = (term) => {
    setSearchTerm(term);
    debouncedSearch(term);
  };

  const { buyData, setBuyData, fetchBuyData } = useContext(BuyContext);

  useEffect(() => {
    fetchBuyData();
  }, []);
  return (
    <Layout>
      <ThemeProvider theme={theme}>
        <Box sx={{ height: "100%", width: "100%", mt: 5 }} variant="div">
          <Typography sx={{ fontSize: "2rem", fontWeight: "600" }}>
            รายการซื้อ
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
        </Box>
        <Box sx={{ display: "flex", justifyContent: { xl: "flex-end" } }}>
          <Link href="/buy/add" passHref>
            <Button variant="contained" color="success" sx={{ mr: 2, mt: 2 }}>
              สร้างรายการซื้อ
            </Button>
          </Link>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              aria-label="basic tabs example"
            >
              <Tab label={<Typography>ทั้งหมด</Typography>} {...a11yProps(0)} />
              <Tab label={<Typography>สำเร็จ</Typography>} {...a11yProps(1)} />
              <Tab label={<Typography>ยกเลิก</Typography>} {...a11yProps(2)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <TableLots data={{ data: buyData }} />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <TableLots
              data={{
                data: buyData.filter((item) => item.status === "สำเร็จ"),
              }}
            />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <TableLots
              data={{
                data: buyData.filter((item) => item.status === "ยกเลิก"),
              }}
            />
          </CustomTabPanel>
        </Box>
      </ThemeProvider>
    </Layout>
  );
}
