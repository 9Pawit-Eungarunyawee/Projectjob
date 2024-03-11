import Box from "@mui/material/Box";
import Layout from "@/components/layout";
import {
  Tab,
  Tabs,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import TableClaim from "./table";
import { ClaimContext } from "@/context/ClaimContext";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "@/context/UserContext";
import PropTypes from "prop-types";

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

export default function Claim() {
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
  const { claimData, fetchClaimData } = useContext(ClaimContext);
  const { userData, fetchUserData } = useContext(UserContext);
  useEffect(() => {
    fetchClaimData();
    fetchUserData();
  }, []);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Layout>
      <ThemeProvider theme={theme}>
        <Box>
          <Box sx={{ height: "100%", width: "100%", mt: 5 }}>
            <Typography sx={{ fontSize: "2rem", fontWeight: "600" }}>
              การเคลมสินค้า
            </Typography>
            <Box sx={{ width: "100%",mt:3 }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  variant="scrollable"
                  aria-label="basic tabs example"
                >
                  <Tab
                    label={<Typography>ทั้งหมด</Typography>}
                    {...a11yProps(0)}
                  />
                  <Tab
                    label={<Typography>รอตรวจสอบ</Typography>}
                    {...a11yProps(1)}
                  />
                  <Tab
                    label={<Typography>ยืนยัน</Typography>}
                    {...a11yProps(2)}
                  />
                  <Tab
                    label={<Typography>ยกเลิก</Typography>}
                    {...a11yProps(3)}
                  />
                </Tabs>
              </Box>
              <CustomTabPanel value={value} index={0}>
                <TableClaim documentData={claimData} userData={userData} />
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                <TableClaim documentData={claimData.filter((item)=> item.status === "รอตรวจสอบ")} userData={userData} />
              </CustomTabPanel>
              <CustomTabPanel value={value} index={2}>
                <TableClaim documentData={claimData.filter((item)=> item.status === "ยืนยันการเคลม")} userData={userData} />
              </CustomTabPanel>
              <CustomTabPanel value={value} index={3}>
                <TableClaim documentData={claimData.filter((item)=> item.status === "ยกเลิกการเคลม")} userData={userData} />
              </CustomTabPanel>
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </Layout>
  );
}
