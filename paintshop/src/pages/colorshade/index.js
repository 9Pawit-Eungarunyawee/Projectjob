import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
export default function colorshade() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const theme = createTheme({
    components: {
      MuiTabs: {
        styleOverrides: {
          flexContainer: {
            alignItems: "center",
          },
        },
        indicator: {
          backgroundColor: "transparent",
          display: "none",
        },
      },
    },
  });

  const styles = {
    tab: {
      width: "80px",
      height: "90px",
      boxShadow: "none",
      transition: "width 0.2s, height 0.2s, box-shadow 0.2s",
    },
    activeTab: {
      width: "100px",
      height: "110px",
      border: "none",
      boxShadow: "4px 0px 4px 0px rgba(0, 0, 0, 0.25)",
      zIndex: "1",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: "100%", height: "40vh" }}>
        <Box sx={{ p: 8 }}>
          <Typography
            variant="h4"
            sx={{
              pb: 2,
              color: "#018294",
              textAlign: "center",
            }}
          >
            เฉดสี
          </Typography>
          <Tabs
            value={value}
            onChange={handleChange}
            centered
            sx={{
              "& .css-1aquho2-MuiTabs-indicator": {
                display: "none",
              },
            }}
          >
            <Tab
              sx={{
                ...styles.tab,
                backgroundColor: value === 0 ? "#D9D9D9" : "#D9D9D9",
                ...(value === 0 ? styles.activeTab : {}),
              }}
            />
            <Tab
              sx={{
                ...styles.tab,
                backgroundColor: value === 1 ? "#ED1F24" : "#ED1F24",
                ...(value === 1 ? styles.activeTab : {}),
              }}
            />
            <Tab
              sx={{
                ...styles.tab,
                backgroundColor: value === 2 ? "#F05623" : "#F05623",
                ...(value === 2 ? styles.activeTab : {}),
              }}
            />
            <Tab
              sx={{
                ...styles.tab,
                backgroundColor: value === 3 ? "#F7901E" : "#F7901E",
                ...(value === 3 ? styles.activeTab : {}),
              }}
            />
            <Tab
              sx={{
                ...styles.tab,
                backgroundColor: value === 4 ? "#FBCD09" : "#FBCD09",
                ...(value === 4 ? styles.activeTab : {}),
              }}
            />
            <Tab
              sx={{
                ...styles.tab,
                backgroundColor: value === 5 ? "#F8EF24" : "#F8EF24",
                ...(value === 5 ? styles.activeTab : {}),
              }}
            />
            <Tab
              sx={{
                ...styles.tab,
                backgroundColor: value === 6 ? "#8FC741" : "#8FC741",
                ...(value === 6 ? styles.activeTab : {}),
              }}
            />
            <Tab
              sx={{
                ...styles.tab,
                backgroundColor: value === 7 ? "#31B451" : "#31B451",
                ...(value === 7 ? styles.activeTab : {}),
              }}
            />
            <Tab
              sx={{
                ...styles.tab,
                backgroundColor: value === 8 ? "#1C907F" : "#1C907F",
                ...(value === 8 ? styles.activeTab : {}),
              }}
            />
            <Tab
              sx={{
                ...styles.tab,
                backgroundColor: value === 9 ? "#3F66B0" : "#3F66B0",
                ...(value === 9 ? styles.activeTab : {}),
              }}
            />
            <Tab
              sx={{
                ...styles.tab,
                backgroundColor: value === 10 ? "#655CA8" : "#655CA8",
                ...(value === 10 ? styles.activeTab : {}),
              }}
            />
            <Tab
              sx={{
                ...styles.tab,
                backgroundColor: value === 11 ? "#9F4098" : "#9F4098",
                ...(value === 11 ? styles.activeTab : {}),
              }}
            />
          </Tabs>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
