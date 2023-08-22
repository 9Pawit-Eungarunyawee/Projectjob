import Layout from "@/components/layout";
import {
  Box,
  Button,
  InputAdornment,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import Table from "./table";
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
  return (
    <Layout>
      <ThemeProvider theme={theme}>
        <Box sx={{ height: "100vh", width: "100%", mt: 1 }}>
          <Typography sx={{ fontSize: "1.4vw", fontWeight: "600" }}>
            การจัดการสินค้า
          </Typography>
          <Box sx={{ mt: 1 }}>
            <TextField
              label="Search"
              variant="outlined"
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ fontSize: "1.2vw" }} />
                  </InputAdornment>
                ),
              }}
            />
            <Button variant="contained" sx={{ ml: 2 }}>
              <TuneIcon />
              ดูทั้งหมด
            </Button>
          </Box>

          <Box sx={{ pr: 3 }}>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button variant="contained" color="success" sx={{mr:2,mb:2,mt:2}}>
                เพิ่มสินค้า
              </Button>
              <Button variant="contained" color="error" sx={{mb:2,mt:2}}>
                ลบรายการ
              </Button>
            </Box>
            <Table />
          </Box>
        </Box>
      </ThemeProvider>
    </Layout>
  );
}
