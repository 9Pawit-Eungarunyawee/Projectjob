import Layout from "@/components/layout";
import {
  Box,
  Button,
  Grid,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { ProductContext } from "@/context/ProductContext";
import { UserContext } from "@/context/UserContext";
import getDoument from "@/firebase/getData";
import styled from "@emotion/styled";

export default function Detail() {
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
    typography: {
      text: {
        fontSize: "1.2rem",
        padding: "1vw",
        width: "10rem",
      },
      data: {
        fontSize: "1.2rem",
        fontWeight: "600",
        whiteSpace: "pre-line",
      },
    },
  });
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#018294",
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));
  const goBack = () => {
    window.history.back();
  };
  const router = useRouter();
  const buy_id = JSON.parse(router.query.id);
  const [buyData, setBuyData] = useState([]);
  const [nameUser, setNameUser] = useState("");
  const [tel, setTel] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (buyData !== undefined) {
      const user = userData.find((user) => user.id === buyData.user_id);
      const name = user ? user.name : buyData.user_id;
      const tel = user ? user.tel: buyData.user_id;
      setNameUser(name);
      setTel(tel)
    }
  }, [buyData]);
  const { userData } = useContext(UserContext);
  const fetchData = async () => {
    const collectionName = "buy";
    const { result, error } = await getDoument(collectionName, buy_id);
    if (error) {
      console.error("Error fetching document:", error);
    } else if (result) {
      const Data = result.data();
      setBuyData(Data);
    }
  };

  return (
    <Layout>
      <ThemeProvider theme={theme}>
        <Typography sx={{ fontSize: "2rem", fontWeight: "600", mt: 5 }}>
          รายละเอียดรายการซื้อ
        </Typography>
        <Button
          sx={{
            color: "#018294",
            bgcolor: "white",
            fontWeight: "bold",
            borderRadius: "50px",
            boxShadow: "4px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          }}
          onClick={goBack}
        >
          <ArrowBackOutlinedIcon />
          <Typography> ย้อนกลับ</Typography>
        </Button>
        <Box>
          <Grid container spacing={1.5} sx={{ mt: 3 }}>
            <Grid item xs={12} lg={6}>
              <Box
                sx={{
                  bgcolor: "#fff",
                  borderBottom: "1px solid #ccc",
                  borderRadius: "10px",
                }}
              >
                <Typography
                  sx={{ fontSize: "1.5rem", fontWeight: "600", p: 2 }}
                >
                  ข้อมูล
                </Typography>
                <Box sx={{ display: { md: "flex" }, m: 2 }}>
                  <Box sx={{ width: "12rem" }}>
                    <Typography variant="text">ชื่อรายการ:</Typography>
                  </Box>
                  <Box>
                    <Typography variant="data">{buyData.name}</Typography>
                  </Box>
                </Box>
                <Box sx={{ display: { md: "flex" }, m: 2 }}>
                  <Box sx={{ width: "12rem" }}>
                    <Typography variant="text">วันที่:</Typography>
                  </Box>
                  <Box>
                    <Typography variant="data">
                      {buyData.createAt
                        ? buyData.createAt
                            .toDate()
                            .toLocaleString("th-TH", { dateStyle: "long" })
                        : ""}
                    </Typography>
                  </Box>
                </Box>
                
              </Box>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Box
                sx={{
                  bgcolor: "#fff",
                  borderBottom: "1px solid #ccc",
                  borderRadius: "10px",
                }}
              >
                <Typography
                  sx={{ fontSize: "1.5rem", fontWeight: "600", p: 2 }}
                >
                  ผู้สร้าง
                </Typography>
                <Box sx={{ display: { md: "flex" }, m: 2 }}>
                  <Box sx={{ width: "12rem" }}>
                    <Typography variant="text">ชื่อ:</Typography>
                  </Box>
                  <Box>
                    <Typography variant="data">{nameUser}</Typography>
                  </Box>
                </Box>
                
                <Box sx={{ display: { md: "flex" }, m: 2 }}>
                  <Box sx={{ width: "12rem" }}>
                    <Typography variant="text">เบอร์ติดต่อ:</Typography>
                  </Box>
                  <Box>
                    <Typography variant="data">{tel}</Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12}>
                <Box>
                <TableContainer component={Paper} sx={{ borderRadius: "25px" }}>
        <Table sx={{ minWidth: 700 }}>
          <TableHead>
            <TableRow>
              <StyledTableCell>No.</StyledTableCell>
              <StyledTableCell align="center">วันที่</StyledTableCell>
              <StyledTableCell align="center">ชื่อรายการ</StyledTableCell>
              <StyledTableCell align="center">ผู้สร้าง</StyledTableCell>
              <StyledTableCell align="center">มูลค่า(บาท)</StyledTableCell>
              <StyledTableCell align="center">สถานะ</StyledTableCell>
              <StyledTableCell align="center"></StyledTableCell>
            </TableRow>
          </TableHead>
          </Table>
          </TableContainer>
                </Box>
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </Layout>
  );
}
