import Layout from "@/components/layout";
import {
  Alert,
  Box,
  Button,
  Collapse,
  Grid,
  IconButton,
  Paper,
  Snackbar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  ThemeProvider,
  Typography,
  createTheme,
  tableCellClasses,
} from "@mui/material";
import { useRouter } from "next/router";
import { Fragment, useContext, useEffect, useState } from "react";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { ProductContext } from "@/context/ProductContext";
import { UserContext } from "@/context/UserContext";
import getDoument from "@/firebase/getData";
import styled from "@emotion/styled";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { cancelBuy, restoreBuy } from "@/firebase/addBuy";
import { BuyContext } from "@/context/BuyContext";
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
  const { fetchBuyData } = useContext(BuyContext);
  const [buyData, setBuyData] = useState([]);
  const [nameUser, setNameUser] = useState("");
  const [tel, setTel] = useState("");
  useEffect(() => {
    fetchData();
  }, []);
  const { userData } = useContext(UserContext);
  useEffect(() => {
    if (buyData !== undefined) {
      // หาข้อมูลผู้ใช้จาก userData โดยใช้ buyData.user_id เป็น ID
      const user = userData.find((user) => user.id === buyData.user_id);
      // ถ้าพบข้อมูลผู้ใช้ กำหนดชื่อและเบอร์โทร
      if (user) {
        setNameUser(user.name);
        setTel(user.tel);
      }
    }
  }, [buyData, userData]);

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

  const { productData } = useContext(ProductContext);
  function createData(No, product_exp, product_id, product_name, product_size) {
    return { No, product_exp, product_id, product_name, product_size };
  }

  const rows =
    buyData.products && Array.isArray(buyData.products)
      ? buyData.products.map((dataItem, index) => {
          return createData(
            index + 1,
            dataItem.product_exp,
            dataItem.product_id,
            dataItem.product_name,
            dataItem.product_size
          );
        })
      : [];
  const [openRows, setOpenRows] = useState([]);
  const handleRowToggle = (rowNo) => {
    setOpenRows((prevOpenRows) => ({
      ...prevOpenRows,
      [rowNo]: !prevOpenRows[rowNo],
    }));
  };
  function handleEdit(id) {
    router.push({
      pathname: "edit",
      query: { id: JSON.stringify(id) },
    });
  }
  const [alert, setAlert] = useState(null);
  const [open, setOpen] = useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleCancel = async () => {
    const result = await cancelBuy("buy", buy_id, buyData);
    if (result) {
      setAlert(
        <Alert severity="success" onClose={handleClose}>
          ยกเลิกรายการสำเร็จ
        </Alert>
      );
      setOpen(true);
      fetchData();
      fetchBuyData();
    } else {
      setAlert(
        <Alert severity="error" onClose={handleClose}>
          ผิดพลาด! ไม่สามารถยกเลิกรายการได้
        </Alert>
      );
      setOpen(true);
    }
  };

  const handleRestore = async () => {
    const result = await restoreBuy("buy", buy_id, buyData);
    if (result) {
      setAlert(
        <Alert severity="success" onClose={handleClose}>
          กู้คืนรายการสำเร็จ
        </Alert>
      );
      setOpen(true);
      fetchData();
      fetchBuyData();
    } else {
      setAlert(
        <Alert severity="error" onClose={handleClose}>
          ผิดพลาด! ไม่สามารถกู้คืนรายการได้
        </Alert>
      );
      setOpen(true);
    }
  };
  return (
    <Layout>
      <ThemeProvider theme={theme}>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          {alert}
        </Snackbar>
        <Typography variant="h4" sx={{ mt: 5, fontWeight: "600" }}>
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
        {buyData.status === "สำเร็จ" ? (
          <Box sx={{ display: "flex", justifyContent: { xl: "flex-end" } }}>
            <Button
              variant="contained"
              color="error"
              sx={{ mr: 2, mb: 2, mt: 2 }}
              onClick={handleCancel}
            >
              <Typography>ยกเลิกรายการ</Typography>
            </Button>
            <Button
              variant="contained"
              color="success"
              sx={{ mr: 2, mb: 2, mt: 2 }}
              onClick={() => handleEdit(buy_id)}
            >
              <Typography>แก้ไขรายการ</Typography>
            </Button>
          </Box>
        ) : (
          <Box sx={{ display: "flex", justifyContent: { xl: "flex-end" } }}>
            <Button
              variant="contained"
              color="success"
              sx={{ mr: 2, mb: 2, mt: 2 }}
              onClick={handleRestore}
            >
              <Typography>กู้คืนรายการ</Typography>
            </Button>
          </Box>
        )}

        <Box>
          <Grid container spacing={1.5} sx={{ mb: 5 }}>
            <Grid item xs={12} lg={6}>
              <Box
                sx={{
                  bgcolor: "#fff",
                  borderBottom: "1px solid #ccc",
                  borderRadius: "10px",
                  boxShadow:
                    "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
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
                <Box
                  sx={{
                    display: { md: "flex" },
                    m: 2,
                    pt: 1,
                    pb: 1,
                    bgcolor:
                      buyData.status === "สำเร็จ" ? "#A9C470" : "#FE616A",
                  }}
                >
                  <Box sx={{ width: "12rem" }}>
                    <Typography variant="text">สถานะรายการ:</Typography>
                  </Box>
                  <Box>
                    <Typography variant="data">{buyData.status}</Typography>
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
                  boxShadow:
                    "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
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
                <Box sx={{ display: { md: "flex" }, m: 2, p: 1 }}>
                  <Box sx={{ width: "12rem" }}>
                    <Typography variant="text"></Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box
                sx={{
                  bgcolor: "#fff",
                  borderBottom: "1px solid #ccc",
                  borderRadius: "10px",
                  boxShadow:
                    "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
                }}
              >
                <Typography
                  sx={{ fontSize: "1.5rem", fontWeight: "600", p: 2 }}
                >
                  สินค้า
                </Typography>
                <Box sx={{ m: 2 }}>
                  <TableContainer
                    component={Paper}
                    sx={{ borderRadius: "10px" }}
                  >
                    <Table sx={{ minWidth: 700 }}>
                      <TableHead>
                        <TableRow>
                          <StyledTableCell align="center"></StyledTableCell>
                          <StyledTableCell align="center">
                            <Typography>No.</Typography>
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            <Typography>ชื่อสินค้า</Typography>
                          </StyledTableCell>
                          {/* <StyledTableCell align="center">
                            วันหมดอายุ
                          </StyledTableCell> */}
                          <StyledTableCell align="center">
                            <Typography>รวม(บาท)</Typography>
                          </StyledTableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map((row) => (
                          <Fragment key={row.No}>
                            <StyledTableRow>
                              <StyledTableCell align="center">
                                <IconButton
                                  size="small"
                                  onClick={() => handleRowToggle(row.No)}
                                >
                                  {openRows[row.No] ? (
                                    <KeyboardArrowUpIcon />
                                  ) : (
                                    <KeyboardArrowDownIcon />
                                  )}
                                </IconButton>
                              </StyledTableCell>
                              <StyledTableCell align="center">
                                <Typography>{row.No}</Typography>
                              </StyledTableCell>
                              <StyledTableCell align="center">
                                <Typography>{row.product_name}</Typography>
                              </StyledTableCell>
                              {/* <StyledTableCell align="center">
                                {row.product_exp
                                  ? row.product_exp
                                      .toDate()
                                      .toLocaleString("th-TH", {
                                        dateStyle: "long",
                                      })
                                  : ""}
                              </StyledTableCell> */}
                              <StyledTableCell align="center">
                                <Typography>
                                  {row.product_size
                                    .map((size) => {
                                      const sum =
                                        parseFloat(size.amount) *
                                        parseFloat(size.cost);
                                      return sum;
                                    })
                                    .reduce((acc, curr) => acc + curr, 0)}
                                </Typography>
                              </StyledTableCell>
                            </StyledTableRow>
                            <TableRow>
                              <TableCell
                                style={{ paddingBottom: 0, paddingTop: 0 }}
                                colSpan={6}
                              >
                                <Collapse
                                  in={openRows[row.No]}
                                  timeout="auto"
                                  unmountOnExit
                                >
                                  <Box>
                                    <Table>
                                      <TableHead>
                                        <TableRow>
                                          <TableCell align="center">
                                            <Typography>
                                              รูปแบบสินค้า
                                            </Typography>
                                          </TableCell>
                                          <TableCell align="center">
                                            <Typography>จำนวน</Typography>
                                          </TableCell>
                                          <TableCell align="center">
                                            <Typography>
                                              ราคาต่อหน่วย(บาท)
                                            </Typography>
                                          </TableCell>
                                          <TableCell align="center">
                                            <Typography>รวม(บาท)</Typography>
                                          </TableCell>
                                        </TableRow>
                                      </TableHead>
                                      <TableBody>
                                        {row.product_size.map((size, index) => (
                                          <TableRow key={index}>
                                            <TableCell align="center">
                                              <Typography>
                                                {size.size}
                                              </Typography>
                                            </TableCell>
                                            <TableCell align="center">
                                              <Typography>
                                                {size.amount}
                                              </Typography>
                                            </TableCell>
                                            <TableCell align="center">
                                              <Typography>
                                                {size.cost}
                                              </Typography>
                                            </TableCell>
                                            <TableCell align="center">
                                              <Typography>
                                                {parseFloat(size.cost) *
                                                  parseFloat(size.amount)}
                                              </Typography>
                                            </TableCell>
                                          </TableRow>
                                        ))}
                                      </TableBody>
                                    </Table>
                                  </Box>
                                </Collapse>
                              </TableCell>
                            </TableRow>
                          </Fragment>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Box>

                <Box>
                  <Box
                    sx={{
                      display: { xs: "flex" },
                      m: 2,
                      justifyContent: { xs: "space-between", md: "flex-start" },
                    }}
                  >
                    <Box sx={{ width: "12rem" }}>
                      <Typography variant="text">ส่วนลด:</Typography>
                    </Box>
                    <Box>
                      <Typography variant="data">
                        {buyData.discount} บาท
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: { xs: "flex" },
                      m: 2,
                      justifyContent: { xs: "space-between", md: "flex-start" },
                    }}
                  >
                    <Box sx={{ width: "12rem" }}>
                      <Typography variant="text">ค่าส่ง:</Typography>
                    </Box>
                    <Box>
                      <Typography variant="data">
                        {buyData.shippingCost} บาท
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: { xs: "flex" },
                      m: 2,
                      justifyContent: { xs: "space-between", md: "flex-start" },
                      bgcolor: "#EAE4E7",
                      pt: 2,
                      pb: 2,
                    }}
                  >
                    <Box sx={{ width: "12rem" }}>
                      <Typography variant="text">มูลค่ารวมสุทธิ:</Typography>
                    </Box>
                    <Box>
                      <Typography variant="data">
                        {buyData.totalCost} บาท
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </Layout>
  );
}
