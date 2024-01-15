import Homelayout from "@/components/homelayout";
import * as React from "react";
import {
  Box,
  Typography,
  Container,
  Breadcrumbs,
  Grid,
  Button,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  createTheme,
  ThemeProvider,
  Icon,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import {
  getCart,
  getCollection,
  getColorDetails,
  getProductDetails,
  updateAmount,
} from "../../firebase/getData";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Product from "../product";
import { useAuthContext } from "@/context/AuthContext";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import searchUser from "@/firebase/searchData";
import { debounce } from "lodash";
function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function Cart() {
  const router = useRouter();
  const [documentData, setDocumentData] = React.useState(null);
  const [cartData, setCartData] = React.useState(null);
  const [productData, setProductData] = React.useState(null);
  const [colorData, setColorData] = React.useState(null);
  const [total, setTotal] = React.useState(0);
  const [totalQuantity, setTotalQuantity] = React.useState(0);
  const user = useAuthContext();
  const handleConfirmOrder = () => {
    router.push({
      pathname: "/cart/selectaddress",
    });
  };
  const format = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  const theme = createTheme({
    palette: {
      primary: {
        main: "#FE616A",
      },
    },
  });
  const [groupedProductData, setGroupedProductData] = React.useState(null);

  //ดึงข้อมูล
  const [searchTerm, setSearchTerm] = React.useState("");
  React.useEffect(() => {
    // ทำสิ่งที่คุณต้องการกับ searchResults ที่ได้
    handleSearch("");
  }, []);
  React.useEffect(() => {
    // ทำสิ่งที่คุณต้องการกับ searchResults ที่ได้
    // console.log(documentData);
  }, [documentData]);

  const debouncedSearchUser = debounce(async (term) => {
    const uid = user.user.uid;
    console.log("Fetched data:", {
      documentData,
      productData,
      colorData,
      groupedProductData,
    });
    try {
      const collectionName = "cart";
      const field = "user_id";
      const results = await searchUser(collectionName, field, term);
      const filteredResults = results.filter((doc) => doc.user_id == uid);
      const productIds = filteredResults.map((doc) => doc.product_id.id);
      const colorIds = filteredResults.map((doc) => doc.color_id.id);
      console.log("Product IDs:", productIds);
      console.log("Color IDs:", colorIds);
      const productDetails = await getProductDetails(productIds);
      const colorDetails = await getColorDetails(colorIds);
      setColorData(colorDetails);
      setProductData(productDetails);
      setDocumentData(filteredResults);

      const groupedProducts = {};
      filteredResults.forEach((doc) => {
        const key = `${doc.color_id.id}_${doc.product_id.id}_${doc.price}`;
        if (!groupedProducts[key]) {
          groupedProducts[key] = {
            ...doc,
            amount: 1,
          };
        } else {
          groupedProducts[key].amount += 1;
        }
      });

      setGroupedProductData(Object.values(groupedProducts));
    } catch (error) {
      console.error("Error searching data:", error);
    }
  }, 500);

  // กำหนดเวลา debounce ที่คุณต้องการ
  const handleSearch = (term) => {
    setSearchTerm(term);
    debouncedSearchUser(term);
  };
  //ดึงสี

  // บวก ลบ
  const [amount, setAmount] = React.useState(0);

  const handleIncrement = () => {
    const newAmount = amount + 1;
    setAmount(newAmount);
    console.log("Updating amount for cartIds:", cartIds);
    updateAmount(cartIds, newAmount);
  };

  const handleDecrement = () => {
    if (amount > 0) {
      const newAmount = amount - 1;
      setAmount(newAmount);
      console.log("Updating amount for cartIds:", cartIds);
      updateAmount(cartIds, newAmount);
    }
  };

  React.useEffect(() => {
    if (cartData) {
      const totalAmount = cartData.reduce((acc, item) => acc + item.amount, 0);
      setAmount(totalAmount);
    }
  }, [cartData]);

  React.useEffect(() => {
    if (groupedProductData && groupedProductData.length > 0) {
      let totalQuantity = 0;
      let total = 0;

      groupedProductData.forEach((item) => {
        totalQuantity += item.amount;
        total += item.amount * item.price;
      });

      setTotalQuantity(totalQuantity);
      setTotal(total);
    }
  }, [groupedProductData]);
  return (
    <Homelayout>
      <ThemeProvider theme={theme}>
        <Box sx={{ height: "100vh", width: "100%" }}>
          <Container
            maxWidth="false"
            sx={{
              display: "flex",
              justifyContent: "center",
              bgcolor: "#FAF8F1",
            }}
          >
            <Box sx={{ width: "70vw", pt: 2, pb: 2 }}>
              <div role="presentation" onClick={handleClick}>
                <Breadcrumbs aria-label="Beger">
                  <Link
                    style={{ textDecoration: "none", color: "inherit" }}
                    sx={{
                      color: "inherit",
                      "&:hover": { textDecoration: "underline" },
                    }}
                    href="/homepage"
                  >
                    หน้าแรก
                  </Link>
                  <Typography color="text.primary">รถเข็น</Typography>
                </Breadcrumbs>
              </div>
              <Link
                style={{ textDecoration: "none" }}
                sx={{
                  color: "inherit",
                  "&:hover": { textDecoration: "underline" },
                }}
                href="/homepage"
              >
                <Box sx={{ pt: 2 }}>
                  <Button
                    sx={{
                      color: "#018294",
                      bgcolor: "white",
                      fontWeight: "bold",
                      borderRadius: "50px",
                      boxShadow: "4px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                    }}
                  >
                    <ArrowBackOutlinedIcon />
                    <Typography> ย้อนกลับ</Typography>
                  </Button>
                </Box>
              </Link>
            </Box>
          </Container>
          <Container
            maxWidth={false}
            sx={{
              display: "flex",
              justifyContent: "center",
              bgcolor: "white",
            }}
          >
            <Box sx={{ p: 3, width: "70vw" }}>
              <Grid container spacing={2}>
                {documentData && documentData.length > 0 ? (
                  <>
                    <Grid item xs={12} md={9}>
                      <Typography
                        variant="h4"
                        sx={{
                          fontWeight: "bold",
                          pb: 2,
                          color: "#018294",
                          fontSize: "30px",
                        }}
                      >
                        รถเข็นของฉัน
                      </Typography>
                      <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                          <TableHead>
                            <TableRow>
                              <TableCell>รูปภาพ</TableCell>
                              <TableCell>สินค้า</TableCell>
                              <TableCell>สี</TableCell>
                              <TableCell>ขนาด</TableCell>
                              <TableCell>ราคา(บาท)</TableCell>
                              <TableCell>จำนวน</TableCell>
                              <TableCell></TableCell>
                            </TableRow>
                          </TableHead>
                          {groupedProductData &&
                            groupedProductData.map((item, index) => {
                              const product = productData.find(
                                (p) => p.id === item.product_id.id
                              );
                              return (
                                <TableRow
                                  key={index}
                                  sx={{
                                    "&:last-child td, &:last-child th": {
                                      border: 0,
                                    },
                                  }}
                                >
                                  <TableCell component="th" scope="row">
                                    {product && (
                                      <img
                                        src={product.img}
                                        alt={product.name}
                                        width={60}
                                        height={60}
                                      />
                                    )}
                                  </TableCell>
                                  <TableCell>{product.name}</TableCell>
                                  <TableCell>
                                    <Box
                                      sx={{
                                        width: 50,
                                        height: 50,
                                        bgcolor: colorData.find(
                                          (color) =>
                                            color.id === item.color_id.id
                                        ).code,
                                      }}
                                    ></Box>
                                  </TableCell>
                                  <TableCell>{item.size}</TableCell>
                                  <TableCell>฿{format(item.price)}</TableCell>
                                  <TableCell>{item.amount}</TableCell>
                                  <TableCell>
                                    <IconButton>
                                      <DeleteOutlineIcon />
                                    </IconButton>
                                  </TableCell>
                                </TableRow>
                              );
                            })}
                        </Table>
                      </TableContainer>
                    </Grid>

                    <Grid item xs={12} md={3}>
                      <Card>
                        <CardContent>
                          {" "}
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            sx={{ color: "#018294", fontWeight: "bold" }}
                          >
                            สรุปรายการสั่งซื้อ
                          </Typography>
                          <Typography>
                            ยอดรวมสินค้า ({totalQuantity} ชิ้น)
                          </Typography>
                          <hr />
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <Typography
                              gutterBottom
                              variant="h8"
                              component="div"
                            >
                              ยอดรวมสุทธิ
                            </Typography>
                            <Typography
                              gutterBottom
                              variant="h8"
                              component="div"
                            >
                              ฿{format(total)}
                            </Typography>
                          </Box>
                          <Button
                            variant="contained"
                            sx={{ p: 1, bgcolor: "#FE616A" }}
                            fullWidth
                            onClick={handleConfirmOrder}
                          >
                            ยืนยันคำสั่งซื้อ
                          </Button>
                        </CardContent>
                      </Card>
                    </Grid>
                  </>
                ) : (
                  <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    style={{ height: "50vh" }}
                  >
                    <Grid item xs={12} textAlign="center">
                      <AddShoppingCartOutlinedIcon
                        style={{ fontSize: 80, color: "gray" }}
                      />
                      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                        ไม่มีสินค้าอยู่ในรถเข็น
                      </Typography>
                    </Grid>
                  </Grid>
                )}
              </Grid>
            </Box>
          </Container>
        </Box>
      </ThemeProvider>
    </Homelayout>
  );
}
