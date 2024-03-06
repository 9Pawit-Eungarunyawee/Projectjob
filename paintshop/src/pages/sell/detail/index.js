import Layout from "@/components/layout";
import { ThemeProvider } from "@emotion/react";
import {
  Alert,
  Box,
  Button,
  Grid,
  Paper,
  Snackbar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
  createTheme,
  tableCellClasses,
} from "@mui/material";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { Fragment, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import getDoument from "@/firebase/getData";
import Image from "next/image";
import styled from "@emotion/styled";
import { ProductContext } from "@/context/ProductContext";
import { UserContext } from "@/context/UserContext";
import { ColorContext } from "@/context/ColorContext";
import EditDialog from "./edit-dialog";
import { purple } from "@mui/material/colors";
import { cancelOrder, confirmOrder } from "@/firebase/addOrder";
export default function Detail() {
  const goBack = () => {
    window.history.back();
  };
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
    palette: {
      primary: {
        main: purple[500],
      },
      secondary: {
        main: "#f44336",
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

  const router = useRouter();
  const sell_id = JSON.parse(router.query.id);
  const [show, setShow] = useState(false);
  const [sellData, setSellData] = useState([]);
  const [product, setProduct] = useState(null);
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const { productData } = useContext(ProductContext);
  const { userData } = useContext(UserContext);
  const { colorData } = useContext(ColorContext);
  const fetchData = async () => {
    const collectionName = "orders";
    const { result, error } = await getDoument(collectionName, sell_id);
    if (error) {
      console.error("Error fetching document:", error);
    } else if (result) {
      const Data = result.data();
      console.log(Data);
      setSellData(Data);
      setProduct(productData);
      setUser(userData);
      setShow(true);
    }
  };

  function createData(No, amount, color_id, price, product_id, size) {
    return { No, amount, color_id, price, product_id, size };
  }

  const rows =
    sellData.products && Array.isArray(sellData.products)
      ? sellData.products.map((dataItem, index) => {
          return createData(
            index + 1,
            dataItem.amount,
            dataItem.color_id,
            dataItem.price,
            dataItem.product_id,
            dataItem.size
          );
        })
      : [];
  const [open, setOpen] = useState(false);
  const [alert, setAlert] = useState(null);
  const [alertOpen, setAlertOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [snackbaropen, setSnackbarOpen] = useState(false);
  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbarOpen(false);
  };

  const handleConfirm = async () => {
    const result = await confirmOrder(sell_id);
    if (result) {
      setAlert(
        <Alert severity="success" onClose={handleClose}>
          ยืนยันข้อมูลสำเร็จ
        </Alert>
      );
      setSnackbarOpen(true);
      fetchData();
    } else {
      setAlert(
        <Alert severity="error" onClose={handleClose}>
          ผิดพลาด! ไม่สามารถยืนยันข้อมูลได้
        </Alert>
      );
      setSnackbarOpen(true);
    }
  };

  const handleCancel = async () => {
    const result = await cancelOrder(sell_id);
    if (result) {
      setAlert(
        <Alert severity="success" onClose={handleClose}>
          ยกเลิกรายการสำเร็จ
        </Alert>
      );
      setSnackbarOpen(true);
    } else {
      setAlert(
        <Alert severity="error" onClose={handleClose}>
          ผิดพลาด! ไม่สามารถยกเลิกรายการข้อมูลได้
        </Alert>
      );
      setSnackbarOpen(true);
    }
  };
  return (
    <Layout>
      <ThemeProvider theme={theme}>
        <Snackbar
          open={snackbaropen}
          autoHideDuration={6000}
          onClose={handleSnackbarClose}
        >
          {alert}
        </Snackbar>
        <EditDialog
          open={open}
          onClose={handleClose}
          sell_id={sell_id}
          fetchData={fetchData}
        />
        <Typography sx={{ fontSize: "2rem", fontWeight: "600", mt: 5, mb: 2 }}>
          รายละเอียดรายการขาย
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
          <Typography>ย้อนกลับ</Typography>
        </Button>

        {show ? (
          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={12}>
              <Box
                sx={{
                  backgroundColor:
                    sellData.status === "ยกเลิก"
                      ? "rgba(254, 97, 106, 0.50)"
                      : sellData.status === "จัดส่งสำเร็จ"
                      ? "rgba(169, 196, 112, 0.61)"
                      : "#FFA50080",
                  display: { sm: "flex" },
                  justifyContent: { md: "space-between" },
                  borderBottom: "1px solid #ccc",
                  borderRadius: "10px",
                  boxShadow:
                    "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
                }}
              >
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography
                    sx={{ fontSize: "1.5rem", fontWeight: "600", p: 2 }}
                  >
                    สถานะ
                  </Typography>
                  <Typography
                    sx={{ fontSize: "1.5rem", fontWeight: "600", p: 2 }}
                  >
                    {sellData.status}
                  </Typography>
                </Box>
                {sellData.status !== "จัดส่งสำเร็จ" ? (
                  <Box sx={{ pl: 2 }}>
                    {sellData.status === "รอยืนยัน" ||
                    sellData.status === "ยกเลิก" ? (
                      <Button
                        variant="contained"
                        sx={{ mr: 2, mb: 2, mt: 2 }}
                        onClick={handleConfirm}
                      >
                        {sellData.status === "รอยืนยัน"
                          ? "ยืนยัน"
                          : "ยืนยันใหม่"}
                      </Button>
                    ) : (
                      <Box>
                        <Button
                          variant="contained"
                          sx={{ mr: 2, mb: 2, mt: 2 }}
                          onClick={handleClickOpen}
                        >
                          แก้ไข
                        </Button>
                        <Button
                          variant="contained"
                          sx={{ mr: 2, mb: 2, mt: 2 }}
                          onClick={handleCancel}
                        >
                          ยกเลิก
                        </Button>
                      </Box>
                    )}
                  </Box>
                ) : (
                  ""
                )}
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box
                sx={{
                  bgcolor:
                    sellData.status === "ส่งมอบสินค้า"
                      ? "#A9C470"
                      : "#FFA50080",
                  display: { sm: "flex" },
                  justifyContent: { md: "space-between" },
                  borderBottom: "1px solid #ccc",
                  borderRadius: "10px",
                  boxShadow:
                    "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
                }}
              >
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography
                    sx={{ fontSize: "1.5rem", fontWeight: "600", p: 2 }}
                  >
                    รหัสติดตามสินค้า
                  </Typography>
                  <Typography
                    sx={{ fontSize: "1.5rem", fontWeight: "600", p: 2 }}
                  >
                    {sellData.tracker}
                  </Typography>
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
                  ข้อมูล
                </Typography>
                <Box sx={{ display: { sm: "flex" }, m: 2 }}>
                  <Box sx={{ width: { xs: "100%", sm: "35%" } }}>
                    <Typography variant="text">ชื่อรายการ:</Typography>
                  </Box>
                  <Box>
                    <Typography variant="data">{sell_id}</Typography>
                  </Box>
                </Box>
                <Box sx={{ display: { sm: "flex" }, m: 2 }}>
                  <Box sx={{ width: { xs: "100%", sm: "35%" } }}>
                    <Typography variant="text">วันที่:</Typography>
                  </Box>
                  <Box>
                    <Typography variant="data">
                      {sellData.createAt
                        ? sellData.createAt
                            .toDate()
                            .toLocaleString("th-TH", { dateStyle: "long" })
                        : ""}
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: { sm: "flex" }, m: 2 }}>
                  <Box sx={{ width: { xs: "100%", sm: "35%" } }}>
                    <Typography variant="text">ชื่อลูกค้า:</Typography>
                  </Box>
                  <Box>
                    <Typography variant="data">
                      {userData &&
                        userData.find((u) => u.id === sellData.user_id) &&
                        userData.find((u) => u.id === sellData.user_id).name}
                    </Typography>
                  </Box>
                </Box>
                {/* <Box
                  sx={{
                    display: "flex",
                    m: 2,
                    pt: 1,
                    pb: 1,
                    bgcolor:
                      sellData.status === "ยืนยัน" ? "#A9C470" : "#FFB34E",
                  }}
                >
                  <Box sx={{ width: "35%" }}>
                    <Typography variant="text">สถานะรายการ:</Typography>
                  </Box>
                  <Box>
                    <Typography variant="data">{sellData.status}</Typography>
                  </Box>
                </Box> */}
              </Box>

              <Box
                sx={{
                  mt: 2,
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
                  ที่อยู่
                </Typography>
                <Box sx={{ display: { sm: "flex" }, m: 2 }}>
                  <Box sx={{ width: { xs: "100%", sm: "35%" } }}>
                    <Typography variant="text">บ้านเลขที่:</Typography>
                  </Box>
                  <Box>
                    <Typography variant="data">
                      {sellData.address[0].address}
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: { sm: "flex" }, m: 2 }}>
                  <Box sx={{ width: { xs: "100%", sm: "35%" } }}>
                    <Typography variant="text">ตำบล:</Typography>
                  </Box>
                  <Box>
                    <Typography variant="data">
                      {sellData.address[0].tambon}
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: { sm: "flex" }, m: 2 }}>
                  <Box sx={{ width: { xs: "100%", sm: "35%" } }}>
                    <Typography variant="text">จังหวัด:</Typography>
                  </Box>
                  <Box>
                    <Typography variant="data">
                      {sellData.address[0].province}
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: { sm: "flex" }, m: 2 }}>
                  <Box sx={{ width: { xs: "100%", sm: "35%" } }}>
                    <Typography variant="text">รหัสไปรษณีย์:</Typography>
                  </Box>
                  <Box>
                    <Typography variant="data">
                      {sellData.address[0].zipcode}
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
                  height: "100%",
                  boxShadow:
                    "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
                }}
              >
                <Typography
                  sx={{ fontSize: "1.5rem", fontWeight: "600", p: 2 }}
                >
                  หลักฐานการชำระเงิน
                </Typography>
                <Box
                  sx={{
                    m: 2,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    src={sellData.img}
                    alt="Product Image"
                    priority
                    objectFit="cover"
                    height={400}
                    width={300}
                  />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box
                sx={{
                  mb: 5,
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
                          <StyledTableCell align="center">No.</StyledTableCell>
                          <StyledTableCell align="center">
                            รูปภาพ
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            ชื่อสินค้า
                          </StyledTableCell>
                          <StyledTableCell align="center">สี</StyledTableCell>
                          <StyledTableCell align="center">
                            จำนวน
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            ราคา(บาท)
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            รวม(บาท)
                          </StyledTableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map((row) => (
                          <Fragment key={row.No}>
                            <StyledTableRow>
                              <StyledTableCell align="center"></StyledTableCell>
                              <StyledTableCell align="center">
                                {row.No}
                              </StyledTableCell>
                              <StyledTableCell align="center">
                                {productData &&
                                  productData.find(
                                    (p) => p.id === row.product_id
                                  ) && (
                                    <Image
                                      priority
                                      src={
                                        productData.find(
                                          (p) => p.id === row.product_id
                                        ).img
                                      }
                                      alt={row.product_id}
                                      height="60"
                                      width="60"
                                    />
                                  )}
                              </StyledTableCell>
                              <StyledTableCell align="center">
                                {productData &&
                                  productData.find(
                                    (p) => p.id === row.product_id
                                  ) &&
                                  productData.find(
                                    (p) => p.id === row.product_id
                                  ).name}
                                {/* {row.product_id} */}
                              </StyledTableCell>
                              <StyledTableCell align="center">
                                {colorData &&
                                  colorData.find(
                                    (c) => c.id === row.color_id
                                  ) && (
                                    <Tooltip
                                      arrow
                                      title={
                                        <Fragment>
                                          <Typography color="inherit">
                                            โค้ดสี:{" "}
                                            {
                                              colorData.find(
                                                (c) => c.id === row.color_id
                                              ).code
                                            }
                                          </Typography>
                                          <Typography color="inherit">
                                            ชื่อสี:{" "}
                                            {
                                              colorData.find(
                                                (c) => c.id === row.color_id
                                              ).name
                                            }
                                          </Typography>
                                          <Typography color="inherit">
                                            โค้ดเนม:{" "}
                                            {
                                              colorData.find(
                                                (c) => c.id === row.color_id
                                              ).code_name
                                            }
                                          </Typography>
                                        </Fragment>
                                      }
                                    >
                                      <Box
                                        sx={{
                                          bgcolor: colorData.find(
                                            (c) => c.id === row.color_id
                                          ).code,
                                          minWidth: "1rem",
                                          height: "3rem",
                                          borderRadius: "100px",
                                          transition: "0.1s",
                                          boxShadow:
                                            "4px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                                          m: 1,
                                          ":hover": {
                                            transform: "scale(1.2)",
                                          },
                                        }}
                                      />
                                    </Tooltip>
                                  )}
                              </StyledTableCell>
                              <StyledTableCell align="center">
                                {row.amount}
                              </StyledTableCell>
                              <StyledTableCell align="center">
                                {row.price}
                              </StyledTableCell>
                              <StyledTableCell align="center">
                                {parseInt(row.price) * parseInt(row.amount)}
                              </StyledTableCell>
                            </StyledTableRow>
                          </Fragment>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <Box>
                    <Box
                      sx={{
                        display: { sm: "flex" },
                        m: 2,
                        justifyContent: {
                          xs: "space-between",
                          md: "flex-start",
                        },
                      }}
                    >
                      <Box sx={{ width: { xs: "100%", sm: "35%" } }}>
                        <Typography variant="text">ค่าส่ง:</Typography>
                      </Box>
                      <Box>
                        <Typography variant="data">50 บาท</Typography>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: { sm: "flex" },
                        m: 2,
                        justifyContent: {
                          xs: "space-between",
                          md: "flex-start",
                        },
                        bgcolor: "#EAE4E7",
                        pt: 2,
                        pb: 2,
                      }}
                    >
                      <Box sx={{ width: { xs: "100%", sm: "35%" } }}>
                        <Typography variant="text">มูลค่ารวมสุทธิ:</Typography>
                      </Box>
                      <Box>
                        <Typography variant="data">
                          {sellData.total_price} บาท
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        ) : (
          <></>
        )}
      </ThemeProvider>
    </Layout>
  );
}
