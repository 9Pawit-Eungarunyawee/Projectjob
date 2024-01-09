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
import { getCart, getCollection, updateAmount } from "../../firebase/getData";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Product from "../product";
import { useAuthContext } from "@/context/AuthContext";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function Cart() {
  const router = useRouter();
  const [cartData, setCartData] = React.useState(null);
  const [productData, setProductData] = React.useState(null);
  const [productIds, setProductIds] = React.useState(null);
  const [colorData, setColorData] = React.useState(null);
  const [colorIds, setColorIds] = React.useState(null);
  const [cartIds, setCartIds] = React.useState(null);
  const [total, setTotal] = React.useState(0);
  const user = useAuthContext();
  const handleConfirmOrder = () => {
    router.push({
      pathname: "/cart/QR",
      query: { cartId: JSON.stringify(cartIds), total },
    });
  };
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
  //ดึงข้อมูล
  const fetchAllData = async () => {
    const collection = "cart";
    const uid = user.user.uid;
    const { result, error } = await getCart(collection, uid);

    if (error) {
      console.error("Error fetching collection:", error);
    } else {
      const cart = result.docs.map((doc) => ({
        id: doc.id,
        amount: doc.data().amount,
        color_id: doc.data().color_id.id,
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
      const colorIds = cart.map((item) => item.color_id);
      const cartIds = cart.map((item) => item.id);
      setCartIds(cartIds);
      setColorIds(colorIds);
      setProductIds(productIds);
      console.log("ตรวจสอบผลิตภัณฑ์ :", productIds);
      console.log("ตรวจสอบสี :", colorIds);
      setCartData(cart);
      console.log("ตรวจสอบตะกร้า :", cartIds);
      fetchProductData(productIds);
      fetchcolorData(colorIds);
    }
  };

  //ดึงสี
  const fetchcolorData = async (selectedColorIds) => {
    const collection = "colors";
    const { result: querySnapshot, error } = await getCollection(collection);

    if (error) {
      console.error("Error fetching collection:", error);
    } else {
      const data = [];

      querySnapshot.forEach((doc) => {
        const colorId = doc.id;

        if (selectedColorIds.includes(colorId)) {
          console.log("Matching color found:", doc.data());
          data.push({ id: colorId, ...doc.data() });
        }
      });

      setColorData(data);
    }
  };

  //ดึงสินค้า
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
                              <TableCell>สี</TableCell>
                              <TableCell>ราคา(บาท)</TableCell>
                              <TableCell>จำนวน</TableCell>
                              <TableCell></TableCell>
                            </TableRow>
                          </TableHead>
                          {productData &&
                            productData.map((item, index) => (
                              <TableBody key={index}>
                                <TableRow
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
                                    {colorData &&
                                      colorData
                                        .filter(
                                          (color) =>
                                            color.id ===
                                            cartData[index].color_id
                                        )
                                        .map((filteredColor, colorIndex) => {
                                          return (
                                            <Box
                                              key={colorIndex}
                                              sx={{
                                                width: "50px",
                                                height: "50px",
                                                bgcolor: filteredColor.code,
                                              }}
                                            ></Box>
                                          );
                                        })}
                                  </TableCell>
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
