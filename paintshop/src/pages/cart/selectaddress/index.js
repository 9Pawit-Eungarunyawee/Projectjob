import * as React from "react";
import Homelayout from "@/components/homelayout";
import {
  Box,
  Typography,
  Container,
  Breadcrumbs,
  Button,
  Grid,
  Card,
  CardContent,
  createTheme,
  ThemeProvider,
  TableContainer,
  TableCell,
  TableRow,
  TableHead,
  Paper,
  Table,
  IconButton,
  TableBody,
  useMediaQuery,
} from "@mui/material";
import Link from "next/link";
import Addressdialog from "./dialog";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import searchUser from "@/firebase/searchData";
import AddressDrawer from "./drawer";
import { useRouter } from "next/router";
import { debounce } from "lodash";
import { useAuthContext } from "@/context/AuthContext";
import SelectAddressDialog from "./editdialog";
import { getColorDetails, getProductDetails } from "@/firebase/getData";
import { CartContext } from "@/context/CartContext";
import { ProductContext } from "@/context/ProductContext";
import { ColorContext } from "@/context/ColorContext";
function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}
export default function Selectaddress() {
  const { cartData, setCartData, fetchCartData } =
    React.useContext(CartContext);
  const { productData, setProductData, fetchProductData } =
    React.useContext(ProductContext);
  const { colorData, setColorData, fetchColorData } =
    React.useContext(ColorContext);
  const [selectedAddressIndex, setSelectedAddressIndex] = React.useState(0);
  const [addressData, setAddressData] = React.useState(null);
  const [searchTerm, setSearchTerm] = React.useState("");
  const router = useRouter();
  const user = useAuthContext();
  const isMobile = useMediaQuery("(max-width:600px)");

  React.useEffect(() => {
    fetchCartData();
    fetchProductData();
    fetchColorData();
  }, []);
  const handleClickOpen = () => {
    setOpen(true);
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
  const handleConfirmOrder = () => {
    // รวบรวมข้อมูลสินค้าและวัสดุเข้าไปใน productDetails
    const productDetails = [];

    // เก็บข้อมูลสินค้า
    if (groupedCartArray) {
      groupedCartArray.forEach((item) => {
        productDetails.push({
          product_id: item.product_id?.id,
          amount: item.amount,
          size: item.size,
          price: item.price,
          color_id: item.color_id?.id || null,
        });
      });
    }
    const cartID = [];
    if (cartData) {
      cartData
        .filter((c) => c.user_id === user.user.uid)
        .map((item) => cartID.push(item.id));
    }

    const addressDetails = addressData.map((item) => ({
      address: item.addresses[selectedAddressIndex].address,
      amphure: item.addresses[selectedAddressIndex].amphure,
      tambon: item.addresses[selectedAddressIndex].tambon,
      province: item.addresses[selectedAddressIndex].province,
      zipcode: item.addresses[selectedAddressIndex].zipcode,
      tel: item.addresses[selectedAddressIndex].tel,
    }));

    router.push({
      pathname: "/cart/QR",
      query: {
        totalAllPrice,
        productDetails: JSON.stringify(productDetails),
        cartId: JSON.stringify(cartID),
        addressDetails: JSON.stringify(addressDetails),
        totalShippingCost:JSON.stringify(totalShippingCost),
      },
    });
  };
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

  const shippingCostPerItem = 8;
  const thresholdQuantity = 10;
  let totalShippingCost = 0;
  groupedCartArray.forEach((group) => {
    productPrice += group.price * group.count;
    const quantity = group.count;
    totalShippingCost += shippingCostPerItem * quantity;
  });

  const totalAllPrice = productPrice + totalShippingCost;
  React.useEffect(() => {
    // ทำสิ่งที่คุณต้องการกับ searchResults ที่ได้
    // console.log(documentData);
  }, [addressData]);

  const debouncedSearchUser = debounce(async (term) => {
    const uid = user.user.uid;
    try {
      const collectionName = "users";
      const field = "name";
      const results = await searchUser(collectionName, field, term);
      const filteredResults = results.filter((doc) => doc.uid == uid);
      setAddressData(filteredResults);
    } catch (error) {
      console.error("Error searching data:", error);
    }
  }, 500); // กำหนดเวลา debounce ที่คุณต้องการ
  console.log("บ้านนนนนนนนนน", addressData);
  const handleSearch = (term) => {
    setSearchTerm(term);
    debouncedSearchUser(term);
  };
  React.useEffect(() => {
    // ทำสิ่งที่คุณต้องการกับ searchResults ที่ได้
    handleSearch("");
  }, []);
  const goBack = () => {
    window.history.back();
  };

  return (
    <Homelayout>
      <ThemeProvider theme={theme}>
        <Box sx={{ width: "100%" }}>
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
                  <Link
                    style={{ textDecoration: "none", color: "inherit" }}
                    sx={{
                      color: "inherit",
                      "&:hover": { textDecoration: "underline" },
                    }}
                    href="/cart"
                  >
                    รถเข็น
                  </Link>
                  <Typography color="text.primary">
                    สรุปรายการสั่งซื้อ
                  </Typography>
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
                <Grid item xs={12} sm={9}>
                  <Box>
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: "bold",
                        pb: 2,
                        color: "#018294",
                        fontSize: "30px",
                      }}
                    >
                      ที่อยู่จัดส่ง
                    </Typography>
                    <Card>
                      <CardContent>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <Typography>ที่อยู่จัดส่ง</Typography>
                          <Box>
                            <SelectAddressDialog
                              onSelectAddress={(selectedAddressIndex) => {
                                setSelectedAddressIndex(selectedAddressIndex);
                              }}
                            />
                            <Addressdialog handleClickOpen={handleClickOpen} />
                          </Box>
                        </Box>
                        <Box sx={{ flexGrow: 1 }}>
                          {addressData &&
                            addressData.map((data, index) => (
                              <Grid
                                container
                                spacing={2}
                                sx={{ p: 2 }}
                                key={index}
                              >
                                <Grid item xs={12} sm={3}>
                                  {console.log(
                                    "ดาต้าาาาาาาา",
                                    data.addresses[selectedAddressIndex]
                                  )}
                                  {data && (
                                    <Typography sx={{ fontWeight: "bold" }}>
                                      {data.name}
                                    </Typography>
                                  )}
                                  <Typography sx={{ fontWeight: "bold" }}>
                                    {data.addresses[selectedAddressIndex].tel}{" "}
                                  </Typography>
                                </Grid>
                                <Grid item xs={12} sm={9}>
                                  <Typography>
                                    {
                                      data.addresses[selectedAddressIndex]
                                        .address
                                    }{" "}
                                    อำเภอ{" "}
                                    {
                                      data.addresses[selectedAddressIndex]
                                        .amphure
                                    }{" "}
                                    ตำบล{" "}
                                    {
                                      data.addresses[selectedAddressIndex]
                                        .tambon
                                    }{" "}
                                    จังหวัด{" "}
                                    {
                                      data.addresses[selectedAddressIndex]
                                        .province
                                    }{" "}
                                    {
                                      data.addresses[selectedAddressIndex]
                                        .zipcode
                                    }
                                  </Typography>
                                </Grid>
                              </Grid>
                            ))}
                        </Box>
                      </CardContent>
                    </Card>
                  </Box>
                  <Box sx={{ mt: 2, mb: 2 }}>
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: "bold",
                        pb: 2,
                        color: "#018294",
                        fontSize: "30px",
                      }}
                    >
                      รายการสั่งซื้อ
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
                                  <TableCell>฿{format(group.price)}</TableCell>
                                  <TableCell>{group.count}</TableCell>
                                </TableRow>
                              );
                            })}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Box>
                  <Box>
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: "bold",
                        pb: 2,
                        color: "#018294",
                        fontSize: "30px",
                      }}
                    >
                      วิธีการชำระเงิน
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ pb: 1, display: "flex", alignItems: "center" }}
                    >
                      <Box
                        sx={{
                          width: "20px",
                          height: "20px",
                          borderRadius: "50%",
                          backgroundColor: "#018294",
                          color: "#fff",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          marginRight: "5px",
                        }}
                      >
                        1
                      </Box>
                      หลังกด “ชำระเงิน” คุณจะได้รับ QR Code เพื่อชำระ QR Code
                      จะกำหนดเวลา 5 นาที
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ pb: 1, display: "flex", alignItems: "center" }}
                    >
                      <Box
                        sx={{
                          width: "20px",
                          height: "20px",
                          borderRadius: "50%",
                          backgroundColor: "#018294",
                          color: "#fff",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          marginRight: "5px",
                        }}
                      >
                        2
                      </Box>
                      เปิดแอปพลิเคชันธนาคารที่คุณมี
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ pb: 1, display: "flex", alignItems: "center" }}
                    >
                      <Box
                        sx={{
                          width: "20px",
                          height: "20px",
                          borderRadius: "50%",
                          backgroundColor: "#018294",
                          color: "#fff",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          marginRight: "5px",
                        }}
                      >
                        3
                      </Box>
                      ไปยังเมนู “สแกน” หรือ “สแกนจ่าย”
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ pb: 1, display: "flex", alignItems: "center" }}
                    >
                      <Box
                        sx={{
                          width: "20px",
                          height: "20px",
                          borderRadius: "50%",
                          backgroundColor: "#018294",
                          color: "#fff",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          marginRight: "5px",
                        }}
                      >
                        4
                      </Box>
                      ตรวจสอบข้อมูลการชำระเงินให้ถูกต้องก่อนดำเนินรายการต่อ
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ pb: 1, display: "flex", alignItems: "center" }}
                    >
                      <Box
                        sx={{
                          width: "20px",
                          height: "20px",
                          borderRadius: "50%",
                          backgroundColor: "#018294",
                          color: "#fff",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          marginRight: "5px",
                        }}
                      >
                        5
                      </Box>
                      หลังจากชำระเงินในแอปพลิเคชันธนาคารแล้ว
                      ส่งรูปหลักฐานการชำระเงิน
                    </Typography>
                  </Box>
                </Grid>
                {isMobile ? (
                  <Grid item xs={12} md={12}>
                    <AddressDrawer
                      productPrice={productPrice}
                      totalAllPrice={totalAllPrice}
                      totalShippingCost={totalShippingCost}
                      groupedCartArray={groupedCartArray}
                      addressData={addressData}
                      selectedAddressIndex={selectedAddressIndex}
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
                          <Typography gutterBottom variant="h8" component="div">
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
                          ชำระเงิน
                        </Button>
                      </CardContent>
                    </Card>
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
