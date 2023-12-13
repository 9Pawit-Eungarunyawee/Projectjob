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
import { getCollection } from "../../firebase/getData";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Product from "../product";
function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}
export default function Cart() {
  const router = useRouter();
  const [cartData, setCartData] = React.useState(null);
  const [productData, setProductData] = React.useState(null);
  const [productIds, setProductIds] = React.useState(null);
  const [total, setTotal] = React.useState(0);
  React.useEffect(() => {
    fetchAllData();
  }, []);
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
  const fetchAllData = async () => {
    const collection = "cart";

    const { result, error } = await getCollection(collection);

    if (error) {
      console.error("Error fetching collection:", error);
    } else {
      const cart = result.docs.map((doc) => ({
        id: doc.id,
        amount: doc.data().amount,
        price: doc.data().price,
        product_id: doc.data().product_id.id,
      }));
      const cartTotal = cart.reduce(
        (acc, item) => acc + item.amount * item.price,
        0
      );
      setTotal(cartTotal);
      console.log("คำนวณเงิน", total);
      const productIds = cart.map((item) => item.product_id);
      setProductIds(productIds);
      console.log("testttttt :", productIds);
      setCartData(cart);
      fetchProductData(productIds);
    }
  };

  const fetchProductData = async (selectedProductIds) => {
    const collection = "products";

    const { result: querySnapshot, error } = await getCollection(collection);

    if (error) {
      console.error("Error fetching collection:", error);
    } else {
      const data = [];

      querySnapshot.forEach((doc) => {
        const productId = doc.id;

        if (selectedProductIds.includes(productId)) {
          console.log("Matching product found:", doc.data());
          data.push({ id: productId, ...doc.data() });
        }
      });
      setProductData(data);
    }
  };

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
                {cartData && cartData.length > 0 ? (
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
                              <TableCell>ราคา(บาท)</TableCell>
                              <TableCell>จำนวน</TableCell>
                              <TableCell></TableCell>
                            </TableRow>
                          </TableHead>
                          {productData &&
                            productData.map((item, index) => (
                              <TableBody>
                                <TableRow
                                  key={index}
                                  sx={{
                                    "&:last-child td, &:last-child th": {
                                      border: 0,
                                    },
                                  }}
                                >
                                  <TableCell component="th" scope="row">
                                    <img
                                      src={item.img}
                                      alt={item.name}
                                      width={60}
                                      height={60}
                                    />
                                  </TableCell>
                                  <TableCell>{item.name}</TableCell>
                                  <TableCell>
                                    ฿
                                    {cartData &&
                                      format(
                                        cartData
                                          .filter(
                                            (cartItem) =>
                                              cartItem.product_id === item.id
                                          )
                                          .reduce(
                                            (totalPrice, carts) =>
                                              totalPrice +
                                              carts.price * carts.amount,
                                            0
                                          )
                                      )}
                                  </TableCell>
                                  <TableCell>
                                    {cartData &&
                                      cartData
                                        .filter(
                                          (cartItem) =>
                                            cartItem.product_id === item.id
                                        )
                                        .reduce(
                                          (totalAmount, carts) =>
                                            totalAmount + carts.amount,
                                          0
                                        )}
                                  </TableCell>
                                  <TableCell>
                                    <IconButton>
                                      <DeleteOutlineIcon />
                                    </IconButton>
                                  </TableCell>
                                </TableRow>
                              </TableBody>
                            ))}
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
                          {productData &&
                            productData.map((item, index) => (
                              <Typography
                                key={index}
                                gutterBottom
                                variant="h8"
                                component="div"
                              >
                                {item.name}
                              </Typography>
                            ))}
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
                              ยอดรวมสินค้า
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
                            sx={{ p: 2, bgcolor: "#FE616A" }}
                            fullWidth
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
