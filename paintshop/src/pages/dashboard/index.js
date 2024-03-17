import * as React from "react";
import Box from "@mui/material/Box";
import Layout from "@/components/layout";
import {
  Grid,
  IconButton,
  TextField,
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
import Overall from "./overall";
import Activity from "./activity";
import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded";
import Barchart from "./barchart";
import Topsale from "./topsale";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import { useAuthContext } from "@/context/AuthContext";
import BuyOverall from "./buyoverall";
import Profit from "./profit";
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
        fontSize: "1.2rem",
        fontWeight: 600,
      },
      subtitle2: {
        fontFamily: "Prompt, sans-serif",
        fontSize: "1.5rem",
        fontWeight: 600,
      },
    },
  });
  const currentDate = new Date();
  const oneMonthAgo = new Date(currentDate);
  oneMonthAgo.setMonth(currentDate.getMonth() - 1);
  const formattedDate = currentDate.toISOString().slice(0, 10); // ตัด milliseconds ออก
  const [overallDateEnd, setOverallDateEnd] = useState(formattedDate);
  const [overallDateStart, setOverallDateStart] = useState(oneMonthAgo.toISOString().slice(0, 10));
  // console.log("dashboard::",role)
  if (role == "employee") {
    return null;
  } else if (role == "admin") {
    return (
      <ThemeProvider theme={theme}>
        <Layout>
          <Box sx={{ width: "100%" }}>
            <Typography sx={{ fontSize: "2rem", fontWeight: "600", mt: 5 }}>
              แดชบอร์ด
            </Typography>
            <Grid container spacing={2} sx={{ mt: 1, mb: 4 }}>
              <Grid item xs={12}>
                <Box
                  sx={{
                    backgroundColor: "#fff",
                    borderRadius: "25px",
                    boxShadow: "4px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                    p: 2,
                  }}
                >
                  <Typography variant="subtitle1">ภาพรวม</Typography>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <TextField
                      variant="outlined"
                      value={overallDateStart}
                      onChange={(e) => setOverallDateStart(e.target.value)}
                      label="เลือกวันที่เริ่ม"
                      required
                      size="small"
                      sx={{ mt: 1, mb: 1 }}
                      type="date"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                    <Typography sx={{ m: 1 }}>ถึง</Typography>
                    <TextField
                      variant="outlined"
                      value={overallDateEnd}
                      onChange={(e) => setOverallDateEnd(e.target.value)}
                      label="เลือกวันที่สิ้นสุด"
                      required
                      size="small"
                      sx={{ mt: 1, mb: 1 }}
                      type="date"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Box>

                  <Overall overallDateStart={overallDateStart} overallDateEnd={overallDateEnd}/>
                </Box>
              </Grid>

              <Grid item xs={12} sm={4} md={3} sx={{ width: "100%" }}>
                <Box
                  sx={{
                    backgroundColor: "#fff",
                    borderRadius: "25px",
                    boxShadow: "4px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                    p: 2,
                    height: { xs: "40vh",sm:"30vh", md: "40vh" },
                  }}
                >
                  <Box>
                    <Typography variant="subtitle1">สินค้าขายดี</Typography>
                    <Topsale />
                  </Box>
                </Box>
              </Grid>
              {/* <Grid item xs={12} xl={3}>
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
              </Grid> */}
              <Grid item xs={12} sm={8} md={9}>
                <Box
                  sx={{
                    backgroundColor: "#fff",
                    borderRadius: "25px",
                    boxShadow: "4px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                    p: 2,
                    height: { xs: "30vh", md: "40vh" },
                  }}
                >
                  <Box sx={{ height: "100%" }}>
                    <Barchart />
                  </Box>
                </Box>
              </Grid>

              {/* <Grid item xs={12}>
                <Box
                  sx={{
                    backgroundColor: "#fff",
                    borderRadius: "25px",
                    boxShadow: "4px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                    p: 2,
                  }}
                >
                  <Typography variant="subtitle1">รายการล่าสุด</Typography>
                  <Activity />
                </Box>
              </Grid> */}
            </Grid>
          </Box>
        </Layout>
      </ThemeProvider>
    );
  }
}
