import * as React from "react";
import Box from "@mui/material/Box";
import Layout from "@/components/layout";
import { Grid, ThemeProvider, Typography, createTheme } from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
export default function Dashboard() {
  const [value, setValue] = React.useState(null);
  const theme = createTheme({
    palette: {
      primary: {
        main: "#018294",
      },
    },
    typography:{
      subtitle1:{
        fontSize:"20px",
        fontWeight:600
      }
    }
  });
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Box sx={{ width: "100%" }}>
          <Grid container spacing={3} columnSpacing={2}>
            <Grid
              item
              xs={3.5}
              sx={{
                backgroundColor: "#fff",
                borderRadius: "25px",
                boxShadow: "4px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                mt: 8,
                p: 4,
              }}
            >
              <Typography variant="subtitle1">ข้อมูลการใช้งาน</Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DatePicker"]}>
                    <DatePicker
                      value={value}
                      onChange={(newValue) => setValue(newValue)}
                    />
                  </DemoContainer>
                  <Typography sx={{pt:1}}>ถึง</Typography>
                  <DemoContainer components={["DatePicker"]}>
                    <DatePicker
                      value={value}
                      onChange={(newValue) => setValue(newValue)}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </Box>
            </Grid>
            <Grid
              item
              xs={1}
              sx={{ width: "100%", height: "100%", backgroundColor: "#f00" }}
            >asdasd</Grid>
            <Grid
              item
              xs={1}
              sx={{ width: "100%", height: "100%", backgroundColor: "#2fe" }}
            />
          </Grid>
        </Box>
      </Layout>
    </ThemeProvider>
  );
}
