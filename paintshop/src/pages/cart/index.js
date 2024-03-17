import Homelayout from "@/components/homelayout";
import { useContext, useEffect, useState } from "react";
import {
  Box,
  Typography,
  Container,
  Breadcrumbs,
  Grid,
  Button,
  Card,
  CardContent,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  createTheme,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import CartDrawer from "./drawer";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { CartContext } from "@/context/CartContext";
import Link from "next/link";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { useAuthContext } from "@/context/AuthContext";
import { getCollection } from "@/firebase/getData";
import { ProductContext } from "@/context/ProductContext";
import { ColorContext } from "@/context/ColorContext";
import { deleteData } from "@/firebase/addData";
import { useRouter } from "next/router";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { useTheme } from "@mui/material/styles";
import calculateShippingRate from "./calculateshiprate";
function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}
export default function Cart() {
  const user = useAuthContext();
  const router = useRouter();

  const [Alert, setAlert] = useState("");
  const [open, setOpen] = useState(false);
  const themes = useTheme();
  const isMobile2 = useMediaQuery(themes.breakpoints.down("sm"));
  const { cartData, setCartData, fetchCartData } = useContext(CartContext);
  const { productData, setProductData, fetchProductData } =
    useContext(ProductContext);
  const { colorData, setColorData, fetchColorData } = useContext(ColorContext);
  const isMobile = useMediaQuery("(max-width:600px)");
  const theme = createTheme({
    palette: {
      primary: {
        main: "#FE616A",
      },
    },
  });

  const groupedCartData = cartData
    .filter((c) => c.user_id === user.user.uid)
    .reduce((acc, item) => {
      const key = `${item.color_id?.id}-${item.size}-${item.price}-${item.product_id?.id}`;
      if (!acc[key]) {
        acc[key] = { ...item, count: item.amount };
      } else {
        acc[key].count += item.amount;
      }
      return acc;
    }, {});
  const groupedCartArray = Object.values(groupedCartData);

  let productPrice = 0;
  let totalWeight = 0;

  const shippingRates = groupedCartArray.map((item) => {
    let weight = 0;
    let size = item.size;

    // ตรวจสอบขนาดของสินค้าและกำหนดน้ำหนักตามเงื่อนไข
    if (size === "1/4 แกลลอน") {
      weight = 1;
    } else if (size === "1 แกลลอน") {
      weight = 4;
    } else if (size === "2.5 แกลลอน") {
      weight = 10;
    } else if (size === "5 แกลลอน") {
      weight = 19;
    } else {
      weight = 1;
    }
    totalWeight += weight * item.count;
  });
  const shippingRate = calculateShippingRate(totalWeight);
  groupedCartArray.forEach((group) => {
    productPrice += group.price * group.count;
    const quantity = group.count;
  });
  let totalShippingCost = shippingRate;

  const totalAllPrice = productPrice + totalShippingCost;
  const goBack = () => {
    window.history.back();
  };

  const format = (num) => {
    if (num !== null) {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } else {
      return "";
    }
  };
  useEffect(() => {
    fetchCartData();
    fetchProductData();
    fetchColorData();
  }, []);
  const handleConfirmOrder = () => {
    router.push({
      pathname: "/cart/selectaddress",
    });
  };

  const handleDelete = async (id) => {
    const result = await deleteData("cart", id);

    if (result) {
      fetchCartData();
      fetchProductData();
      fetchColorData();
      setAlert(
        <Alert severity="success" onClose={handleClose}>
          ลบข้อมูลสำเร็จ
        </Alert>
      );
      setOpen(true);
    } else {
      setAlert(
        <Alert severity="error" onClose={handleClose}>
          ผิดพลาด! ไม่สามารถลบข้อมูลได้
        </Alert>
      );
      setOpen(true);
    }
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  console.log(groupedCartArray);
  return (
    <Homelayout>
      <ThemeProvider theme={theme}>
        <Box sx={{ height: "100vh", width: "100%" }}>
          {isMobile2 ? (
            <Container
              maxWidth="lg"
              sx={{
                bgcolor: "#FAF8F1",
                p: 2,
              }}
            >
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
              <Box sx={{ pt: 2 }}>
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
              </Box>
            </Container>
          ) : (
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
                <Box sx={{ pt: 2 }}>
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
                </Box>
              </Box>
            </Container>
          )}

          {isMobile2 ? (
            <Container maxWidth="lg" sx={{ bgcolor: "white", pt: 2 }}>
              {cartData &&
              cartData.filter((c) => c.user_id === user.user.uid).length > 0 ? (
                <Grid container spacing={2}>
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
                          <TableBody>
                            {groupedCartArray &&
                              groupedCartArray.map((group, index) => {
                                return (
                                  <TableRow key={index}>
                                    {productData &&
                                      productData
                                        .filter(
                                          (c) => c.id === group.product_id?.id
                                        )
                                        .map((product, productIndex) => (
                                          <TableCell key={productIndex}>
                                            <img
                                              src={product.img}
                                              alt={product.name}
                                              width={60}
                                              height={60}
                                            />
                                          </TableCell>
                                        ))}
                                    {productData &&
                                      productData
                                        .filter(
                                          (c) => c.id === group.product_id?.id
                                        )
                                        .map((product, productIndex) => (
                                          <TableCell key={productIndex}>
                                            {product.name}
                                          </TableCell>
                                        ))}

                                    <TableCell>
                                      {group.isMaterial === true ? (
                                        <Box
                                          sx={{
                                            width: 50,
                                            height: 50,
                                            bgcolor: "transparent",
                                          }}
                                        ></Box>
                                      ) : (
                                        colorData &&
                                        colorData
                                          .filter(
                                            (c) => c.id === group.color_id?.id
                                          )
                                          .map((color, colorIndex) => (
                                            <Box
                                              key={colorIndex}
                                              sx={{
                                                width: 50,
                                                height: 50,
                                                bgcolor: color.code,
                                              }}
                                            ></Box>
                                          ))
                                      )}
                                    </TableCell>
                                    <TableCell>{group.size}</TableCell>
                                    <TableCell>
                                      ฿{format(group.price)}
                                    </TableCell>
                                    <TableCell>{group.count}</TableCell>
                                    <TableCell>
                                      <IconButton
                                        onClick={() => handleDelete(group.id)}
                                      >
                                        <DeleteOutlineIcon />
                                      </IconButton>
                                    </TableCell>
                                  </TableRow>
                                );
                              })}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Grid>
                    {isMobile ? (
                      <Grid item xs={12} md={12}>
                        <CartDrawer
                          productPrice={productPrice}
                          totalAllPrice={totalAllPrice}
                          totalShippingCost={totalShippingCost}
                        />
                      </Grid>
                    ) : (
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
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "space-between",
                              }}
                            >
                              <Typography> ยอดรวมสินค้า</Typography>
                              <Typography sx={{ fontWeight: "bold" }}>
                                ฿{format(productPrice)}
                              </Typography>
                            </Box>
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "space-between",
                              }}
                            >
                              <Typography> ค่าจัดส่ง </Typography>
                              <Typography sx={{ fontWeight: "bold" }}>
                                ฿{totalShippingCost}
                              </Typography>
                            </Box>
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
                                sx={{ fontWeight: "bold" }}
                              >
                                ฿{format(totalAllPrice)}
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
                    )}
                  </>
                </Grid>
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
            </Container>
          ) : (
            <Container
              maxWidth={false}
              sx={{
                display: "flex",
                justifyContent: "center",
                bgcolor: "white",
              }}
            >
              <Box sx={{ p: 3, width: "70vw" }}>
                {cartData &&
                cartData.filter((c) => c.user_id === user.user.uid).length >
                  0 ? (
                  <Grid container spacing={2}>
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
                          <Table
                            sx={{ minWidth: 650 }}
                            aria-label="simple table"
                          >
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
                            <TableBody>
                              {groupedCartArray &&
                                groupedCartArray.map((group, index) => {
                                  return (
                                    <TableRow key={index}>
                                      {productData &&
                                        productData
                                          .filter(
                                            (c) => c.id === group.product_id?.id
                                          )
                                          .map((product, productIndex) => (
                                            <TableCell key={productIndex}>
                                              <img
                                                src={product.img}
                                                alt={product.name}
                                                width={60}
                                                height={60}
                                              />
                                            </TableCell>
                                          ))}
                                      {productData &&
                                        productData
                                          .filter(
                                            (c) => c.id === group.product_id?.id
                                          )
                                          .map((product, productIndex) => (
                                            <TableCell key={productIndex}>
                                              {product.name}
                                            </TableCell>
                                          ))}

                                      <TableCell>
                                        {group.isMaterial === true ? (
                                          <Box
                                            sx={{
                                              width: 50,
                                              height: 50,
                                              bgcolor: "transparent",
                                            }}
                                          ></Box>
                                        ) : (
                                          colorData &&
                                          colorData
                                            .filter(
                                              (c) => c.id === group.color_id?.id
                                            )
                                            .map((color, colorIndex) => (
                                              <Box
                                                key={colorIndex}
                                                sx={{
                                                  width: 50,
                                                  height: 50,
                                                  bgcolor: color.code,
                                                }}
                                              ></Box>
                                            ))
                                        )}
                                      </TableCell>
                                      <TableCell>{group.size}</TableCell>
                                      <TableCell>
                                        ฿{format(group.price)}
                                      </TableCell>
                                      <TableCell>{group.count}</TableCell>
                                      <TableCell>
                                        <IconButton
                                          onClick={() => handleDelete(group.id)}
                                        >
                                          <DeleteOutlineIcon />
                                        </IconButton>
                                      </TableCell>
                                    </TableRow>
                                  );
                                })}
                            </TableBody>
                          </Table>
                        </TableContainer>
                      </Grid>
                      {isMobile ? (
                        <Grid item xs={12} md={12}>
                          <CartDrawer
                            productPrice={productPrice}
                            totalAllPrice={totalAllPrice}
                            totalShippingCost={totalShippingCost}
                          />
                        </Grid>
                      ) : (
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
                              <Box
                                sx={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                }}
                              >
                                <Typography> ยอดรวมสินค้า</Typography>
                                <Typography sx={{ fontWeight: "bold" }}>
                                  ฿{format(productPrice)}
                                </Typography>
                              </Box>
                              <Box
                                sx={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                }}
                              >
                                <Typography> ค่าจัดส่ง </Typography>

                                <Typography sx={{ fontWeight: "bold" }}>
                                  ฿{format(totalShippingCost)}
                                </Typography>
                              </Box>
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
                                  sx={{ fontWeight: "bold" }}
                                >
                                  ฿{format(totalAllPrice)}
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
                      )}
                    </>
                  </Grid>
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
              </Box>
            </Container>
          )}
        </Box>
      </ThemeProvider>
    </Homelayout>
  );
}
