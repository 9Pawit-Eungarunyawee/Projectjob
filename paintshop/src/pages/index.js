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
} from "@mui/material";
import PropTypes from "prop-types";
import ImagesearchRollerOutlinedIcon from "@mui/icons-material/ImagesearchRollerOutlined";
import CabinOutlinedIcon from "@mui/icons-material/CabinOutlined";
import HouseOutlinedIcon from "@mui/icons-material/HouseOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import BrushOutlinedIcon from "@mui/icons-material/BrushOutlined";
import SensorDoorOutlinedIcon from "@mui/icons-material/SensorDoorOutlined";
import Homelayout from "@/components/homelayout";
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
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
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
export default function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#fffff",
      },
    },
  });
  const styles = {
    activeTab: {
      backgroundColor: "#018294",
      color: "white",
      "&:hover": {
        backgroundColor: "#018294",
        transition: "0.3s",
        color: "white",
        cursor: "pointer",
      },
      minWidth: "120px",
    },
    inactiveTab: {
      color: "white",
      "&:hover": {
        backgroundColor: "#018294",
        transition: "0.3s",
        color: "white",
        cursor: "pointer",
      },
      minWidth: "120px",
    },
  };
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Homelayout>
      <Container maxWidth="false">
        <ThemeProvider theme={theme}>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ bgcolor: "#ABABAB", borderRadius: "0px 0px 25px 25px" }}>
              <Tabs value={value} onChange={handleChange} centered>
                <Tab
                  icon={<HouseOutlinedIcon />}
                  label="สีทาบ้าน"
                  sx={{
                    ...(value === 0 ? styles.activeTab : styles.inactiveTab),
                    py: 2,
                  }}
                  {...a11yProps(0)}
                />
                <Tab
                  icon={<ListOutlinedIcon />}
                  label="ยี่ห้อ"
                  sx={{
                    ...(value === 1 ? styles.activeTab : styles.inactiveTab),
                    py: 2,
                  }}
                  {...a11yProps(1)}
                />
                <Tab
                  icon={<ImagesearchRollerOutlinedIcon />}
                  label="สีทาภายใน"
                  sx={{
                    ...(value === 2 ? styles.activeTab : styles.inactiveTab),
                    py: 2,
                  }}
                  {...a11yProps(2)}
                />
                <Tab
                  icon={<BrushOutlinedIcon />}
                  label="สีทาเหล็ก"
                  sx={{
                    ...(value === 3 ? styles.activeTab : styles.inactiveTab),
                    py: 2,
                  }}
                  {...a11yProps(3)}
                />
                <Tab
                  icon={<CabinOutlinedIcon />}
                  label="สีทาไม้"
                  sx={{
                    ...(value === 4 ? styles.activeTab : styles.inactiveTab),
                    py: 2,
                  }}
                  {...a11yProps(4)}
                />{" "}
                <Tab
                  icon={<SensorDoorOutlinedIcon />}
                  label="วัสดุภัณฑ์"
                  sx={{
                    ...(value === 5 ? styles.activeTab : styles.inactiveTab),
                    py: 2,
                  }}
                  {...a11yProps(5)}
                />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              สีทาบ้าน
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              ยี่ห้อ
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              สีทาภายใน
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
              สีทาเหล็ก
            </CustomTabPanel>
            <CustomTabPanel value={value} index={4}>
              สีทาไม้
            </CustomTabPanel>
            <CustomTabPanel value={value} index={5}>
              วัสดุภัณฑ์
            </CustomTabPanel>
          </Box>
        </ThemeProvider>
      </Container>
    </Homelayout>
  );
}
