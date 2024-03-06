import * as React from "react";
import Box from "@mui/material/Box";
import Layout from "@/components/layout";
import {
  Grid,
  IconButton,
  ThemeProvider,
  Tooltip,
  Typography,
  createTheme,
} from "@mui/material";
import { DateRange, DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { addDays } from "date-fns";
import Doughnut from "./doughnutchart";
import Linechart from "./linechart";

import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded";
import Barchart from "./barchart";
import Topsale from "./topsale";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import { useAuthContext } from "@/context/AuthContext";
export default function Dashboard() {
  const { role } = useAuthContext();

  const [state, setState] = useState({
    selection: {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  });
  useEffect(() => {
    console.log(state.selection.startDate);
    console.log(state.selection.endDate);
  }, [state]);
  const theme = createTheme({
    palette: {
      primary: {
        main: "#018294",
      },
    },
    typography: {
      subtitle1: {
        fontFamily: "Prompt, sans-serif",
        fontSize: "1vw",
        fontWeight: 600,
      },
      subtitle2: {
        fontFamily: "Prompt, sans-serif",
        fontSize: "1.5vw",
        fontWeight: 600,
      },
    },
  });

  // console.log("dashboard::",role)
  if (role == "employee") {
    return null;
  } else if (role == "admin") {
    return (
      <ThemeProvider theme={theme}>
        <Layout>
          <Box sx={{ width: "100%" }}>
            <Grid container spacing={2} sx={{ mt: 1, mb: 4 }}>
              
              <Grid item xs={3} sx={{ width: "100%", height: "40vh" }}>
                <Box
                  sx={{
                    backgroundColor: "#fff",
                    borderRadius: "25px",
                    boxShadow: "4px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                    p: 2,
                    height: "40vh",
                  }}
                >
                  <Box>
                    <Typography variant="subtitle1">สินค้าขายดี</Typography>

                    <Topsale />
                  </Box>
                </Box>
              </Grid>
              <Grid item xl={3.5}>
                <Box
                  sx={{
                    backgroundColor: "#fff",
                    borderRadius: "25px",
                    boxShadow: "4px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                    p: 2,
                    height: "40vh",
                  }}
                >
                  <Typography variant="subtitle1">
                    แผนภาพแสดงรายรับ และรายจ่าย
                  </Typography>
                  <Box
                    sx={{
                      width: "80%",
                      height: "80%",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  >
                    <Doughnut />
                  </Box>
                </Box>
              </Grid>
              <Grid item xl={8.3}>
                <Box
                  sx={{
                    backgroundColor: "#fff",
                    borderRadius: "25px",
                    boxShadow: "4px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                    p: 2,
                    height: "40vh",
                  }}
                >
                  <Typography variant="subtitle1">ยอดขายทั้งหมด</Typography>
                  <Box sx={{ height: "90%" }}>
                    <Barchart />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Layout>
      </ThemeProvider>
    );
  }
}
