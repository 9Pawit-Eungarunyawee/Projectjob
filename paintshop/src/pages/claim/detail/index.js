import Layout from "@/components/layout";
import styled from "@emotion/styled";
import {
  Alert,
  Box,
  Button,
  Grid,
  ImageList,
  ImageListItem,
  ListSubheader,
  Paper,
  Snackbar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  ThemeProvider,
  Tooltip,
  Typography,
  createTheme,
  tableCellClasses,
} from "@mui/material";
import { useRouter } from "next/router";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { ProductContext } from "@/context/ProductContext";
import { UserContext } from "@/context/UserContext";
import { ColorContext } from "@/context/ColorContext";
import { ClaimContext } from "@/context/ClaimContext";
import getDoument from "@/firebase/getData";
import { Fragment, useContext, useEffect, useState } from "react";
import Image from "next/image";
import { cancelCliam, confirmCliam } from "@/firebase/addClaim";
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
  const claim_id = JSON.parse(router.query.id);
  const [show, setShow] = useState(false);
  const [claimData, setClaimData] = useState([]);
  const [sellData, setSellData] = useState([]);
  const [product, setProduct] = useState(null);
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const { productData } = useContext(ProductContext);
  const { userData } = useContext(UserContext);
  const { colorData } = useContext(ColorContext);
  const { fetchClaimData } = useContext(ClaimContext);
  const fetchData = async () => {
    const collectionName = "claims";
    const { result, error } = await getDoument(collectionName, claim_id);
    if (error) {
      console.error("Error fetching document:", error);
    } else if (result) {
      const Data = result.data();
      // console.log(Data);
      setClaimData(Data);
      fetchSellData(Data.order_id);
      setProduct(productData);
      setUser(userData);
    }
  };
  const fetchSellData = async (sell_id) => {
    const collectionName = "orders";
    const { result, error } = await getDoument(collectionName, sell_id);
    if (error) {
      console.error("Error fetching document:", error);
    } else if (result) {
      const Data = result.data();
      // console.log("sellDAta",Data)
      setSellData(Data);
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
  const [alert, setAlert] = useState(null);
  const [snackbaropen, setSnackbarOpen] = useState(false);
  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleCancel = async () => {
    const result = await cancelCliam(claim_id);
    if (result) {
      setAlert(
        <Alert severity="success" onClose={handleClose}>
          ยกเลิกรายการสำเร็จ
        </Alert>
      );
      fetchData();
      fetchClaimData();
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
  const handleConfirm = async () => {
    const result = await confirmCliam(claim_id);
    if (result) {
      setAlert(
        <Alert severity="success" onClose={handleClose}>
          ยืนยันรายการสำเร็จ
        </Alert>
      );
      fetchData();
      fetchClaimData();
      setSnackbarOpen(true);
    } else {
      setAlert(
        <Alert severity="error" onClose={handleClose}>
          ผิดพลาด! ไม่สามารถยืนยันรายการข้อมูลได้
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
        <Typography sx={{ fontSize: "2rem", fontWeight: "600", mt: 5 }}>
          รายละเอียดรายการเคลม
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
                    claimData.status === "รอตรวจสอบ"
                      ? "#FFA50080"
                      : claimData.status === "ยืนยันการเคลม"
                      ? "rgba(169, 196, 112, 0.61)"
                      : "rgba(254, 97, 106, 0.50)",
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
                    {claimData.status}
                  </Typography>
                </Box>
                <Box sx={{ ml: 2 }}>
                  {claimData.status === "ยกเลิกการเคลม" ? (
                    <Button
                      variant="contained"
                      sx={{ mr: 2, mb: 2, mt: 2 }}
                      onClick={handleConfirm}
                    >
                      <Typography>ยืนยัน</Typography>
                    </Button>
                  ) : (
                    ""
                  )}
                  {claimData.status === "ยืนยันการเคลม" ? (
                    <Button
                      variant="contained"
                      sx={{ mr: 2, mb: 2, mt: 2 }}
                      onClick={handleCancel}
                    >
                      <Typography>ยกเลิก</Typography>
                    </Button>
                  ) : (
                    ""
                  )}
                  {claimData.status === "รอตรวจสอบ" ? (
                    <Box>
                      <Button
                        variant="contained"
                        sx={{ mr: 2, mb: 2, mt: 2 }}
                        onClick={handleConfirm}
                      >
                        <Typography>ยืนยัน</Typography>
                      </Button>
                      <Button
                        variant="contained"
                        sx={{ mr: 2, mb: 2, mt: 2 }}
                        onClick={handleCancel}
                      >
                        <Typography>ยกเลิก</Typography>
                      </Button>
                    </Box>
                  ) : (
                    ""
                  )}
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Box
                sx={{
                  minHeight: "35vh",
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
                    <Typography variant="text">วันที่:</Typography>
                  </Box>
                  <Box>
                    <Typography variant="data">
                      {claimData.createAt
                        ? claimData.createAt
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
                        userData.find((u) => u.id === claimData.user_id) &&
                        userData.find((u) => u.id === claimData.user_id).name}
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: { sm: "flex" }, m: 2 }}>
                  <Box sx={{ width: { xs: "100%", sm: "35%" } }}>
                    <Typography variant="text">เลขที่บัญชี:</Typography>
                  </Box>
                  <Box>
                    <Typography variant="data">
                      {claimData.bank_detail}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Box
                sx={{
                  "&::-webkit-scrollbar": {
                    display: "none",
                  },
                  overflowY: "scroll",
                  height: "35vh",
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
                  เหตุผล
                </Typography>
                <Box sx={{ display: { sm: "flex" }, m: 2 }}>
                  <Box sx={{ width: { xs: "100%", sm: "35%" } }}>
                    <Typography variant="text">หัวข้อ:</Typography>
                  </Box>
                  <Box>
                    <Typography variant="data">{claimData.reason}</Typography>
                  </Box>
                </Box>
                <Box sx={{ display: { sm: "flex" }, m: 2 }}>
                  <Box sx={{ width: { xs: "100%", sm: "35%" } }}>
                    <Typography variant="text">รายละเอียด:</Typography>
                  </Box>
                  <Box>
                    <Typography variant="data">
                      {claimData.reason_detail}
                    </Typography>
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
                  รูปส่วนที่เสียหาย
                </Typography>
                <ImageList
                  // variant="masonry"
                  cols={3}
                  gap={8}
                  sx={{ m: 2 }}
                >
                  {claimData.img.map((item, index) => (
                    <ImageListItem key={index}>
                      <Image
                        layout="responsive"
                        srcSet={`${item}`}
                        src={`${item}`}
                        alt="img"
                        loading="lazy"
                        width={82} // ใช้ครึ่งของค่า w และ h ที่กำหนดใน srcSet
                        height={82} // ใช้ครึ่งของค่า w และ h ที่กำหนดใน srcSet
                      />
                    </ImageListItem>
                  ))}
                </ImageList>
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
                  รายการขาย
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
                            <Typography>รูปภาพ</Typography>
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            <Typography>ชื่อสินค้า</Typography>
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            <Typography>สี</Typography>
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            <Typography>ขนาด</Typography>
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            <Typography>จำนวน</Typography>
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            <Typography>ราคา(บาท)</Typography>
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            <Typography>รวม(บาท)</Typography>
                          </StyledTableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map((row) => (
                          <Fragment key={row.No}>
                            <StyledTableRow>
                              <StyledTableCell align="center"></StyledTableCell>
                              <StyledTableCell align="center">
                                <Typography>{row.No}</Typography>
                              </StyledTableCell>
                              <StyledTableCell align="center">
                                <Typography>
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
                                </Typography>
                              </StyledTableCell>
                              <StyledTableCell align="center">
                                <Typography>
                                  {productData &&
                                    productData.find(
                                      (p) => p.id === row.product_id
                                    ) &&
                                    productData.find(
                                      (p) => p.id === row.product_id
                                    ).name}
                                </Typography>
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
                                <Typography>{row.size}</Typography>
                              </StyledTableCell>
                              <StyledTableCell align="center">
                                <Typography>{row.amount}</Typography>
                              </StyledTableCell>
                              <StyledTableCell align="center">
                                <Typography>{row.price}</Typography>
                              </StyledTableCell>
                              <StyledTableCell align="center">
                                <Typography>
                                  {parseInt(row.price) * parseInt(row.amount)}
                                </Typography>
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
                        mt: 2,
                        mb: 2,
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
