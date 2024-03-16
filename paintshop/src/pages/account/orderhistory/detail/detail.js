import * as React from "react";
import {
  CardActionArea,
  CardMedia,
  Typography,
  Button,
  CardContent,
  CardActions,
  Card,
  Box,
  Grid,
  Stepper,
  Step,
  StepLabel,
  StepIcon,
  StepContent,
} from "@mui/material";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import searchUser from "@/firebase/searchData";
import { useRouter } from "next/router";
import { debounce } from "lodash";
import StepperData from "./stepper";
import StepperDetail from "./stepperdetail";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import {
  getCollection,
  getColorDetails,
  getProductDetails,
} from "@/firebase/getData";
import { ProductContext } from "@/context/ProductContext";
import Link from "next/link";
import { useAuthContext } from "@/context/AuthContext";
import updateOrder from "@/firebase/updateOrder";
import { ColorContext } from "@/context/ColorContext";
import { OrderContext } from "@/context/OrderContext";
import { UserContext } from "@/context/UserContext";

export default function DetailOrder() {
  const shippingCost = 50;
  const [total, setTotal] = React.useState(0);
  const { user, isAdmin } = useAuthContext();
  const [searchTerm, setSearchTerm] = React.useState("");
  const [color, setColor] = React.useState(null);
  const [activeStep, setActiveStep] = React.useState(0);
  function handlePush(data) {
    router.push({
      pathname: "/account/claimuser/refund",
      query: { Order: JSON.stringify(data) },
    });
  }
  const handleReceiveProduct = async (orderId, index) => {
    try {
      const { result, error } = await updateOrder("orders", orderId, {
        status: "จัดส่งสำเร็จ",
      });
      if (error) {
        console.error("Error updating order:", error);
      } else {
        console.log("Order updated successfully:", result);
        // อัปเดตสถานะของรายการคำสั่งซื้อในตัวแปร orderData ทันที
        const updatedOrderData = [...orderData];
        updatedOrderData[index].status = "จัดส่งสำเร็จ";
        setOrderData(updatedOrderData);
        // รีเฟรชหน้าหลังจากการอัปเดตสถานะ
        window.location.reload();
      }
    } catch (error) {
      console.error("Error updating order:", error);
    }
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };
  const router = useRouter();
  const OrderId = JSON.parse(router.query.Order);
  const { productData, setProductData, fetchProductData } =
    React.useContext(ProductContext);
  const { orderData, setOrderData, fetchOrderData } =
    React.useContext(OrderContext);
  const { colorData, setColorData, fetchColorData } =
    React.useContext(ColorContext);
  const { userData, setUserData, fetchUserData } =
    React.useContext(UserContext);
  React.useEffect(() => {}, [orderData]);

  const formatTimestamp = (timestamp) => {
    const date = timestamp.toDate();
    return date.toLocaleString("th-TH", {
      dateStyle: "medium",
      timeStyle: "short",
    });
  };

  const format = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  const findUser = (id) => {
    const user = userData.find((user) => user.uid === id);
    const name = user ? user.name : id;
    const tel = user ? user.tel : id;
    return { tel, name };
  };

  const findProduct = (id) => {
    const product = productData.find((product) => product.id === id);
    const img = product ? product.img : id;
    const name = product ? product.name : id;
    const area = product ? product.area : id;
    return { img, name, area };
  };

  const findColor = (id) => {
    const color = colorData.find((color) => color.id === id);
    const code = color ? color.code : id;
    const name = color ? color.code_name : id;
    return { code, name };
  };
  React.useEffect(() => {
    fetchProductData();
    fetchOrderData();
    fetchUserData();
    fetchColorData();
  }, [orderData]);
  React.useEffect(() => {
    let producttotal = 0;
    if (Array.isArray(orderData)) {
      orderData
        .filter((c) => c.id === OrderId)
        .forEach((item, index) => {
          if (Array.isArray(item.products)) {
            item.products.forEach((data) => {
              // แปลง string เป็น integer ก่อนที่จะบวกเข้ากับ producttotal
              const priceAsInt = parseInt(data.price);
              // ตรวจสอบว่า priceAsInt เป็น NaN หรือไม่
              if (!isNaN(priceAsInt)) {
                producttotal += priceAsInt;
              }
            });
          }
        });
      setTotal(producttotal);
    }
  }, [orderData]);

  return (
    <React.Fragment>
      {orderData &&
        orderData
          .filter((c) => c.id === OrderId)
          .map((order, index) => (
            <Card key={index} sx={{ mb: 2 }}>
              <CardContent>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography
                    sx={{ fontSize: 14, fontWeight: "bold" }}
                    gutterBottom
                  >
                    รายการคำสั่งซื้อ #{order.id}
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        bgcolor:
                          order.status === "ยืนยัน"
                            ? "#FFFF00"
                            : order.status === "จัดเตรียมสินค้า" ||
                              order.status === "อยู่ระหว่างจัดส่ง"
                            ? "#FFA500"
                            : order.status === "จัดส่งสำเร็จ"
                            ? "#4CAF50"
                            : "#FE616A",

                        color: "#FFFFFF", // กำหนดสีตัวอักษรเป็นขาว
                        p: 0.5,
                        borderRadius: "4px",
                      }}
                    >
                      {order.status}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>

              <CardContent sx={{ bgcolor: "#EEEDEB" }}>
                <Grid
                  container
                  spacing={2}
                  alignItems="center"
                  justifyContent="center"
                >
                  <Grid item xs={6} sm={4}>
                    <Typography color="text.secondary">
                      วันที่สั่งซื้อ{" "}
                    </Typography>
                    <Typography sx={{ mb: 1.5, fontWeight: "bold" }}>
                      {formatTimestamp(order.createAt)}
                    </Typography>
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <Typography
                      color="text.secondary"
                      sx={{ display: "flex", justifyContent: "flex-end" }}
                    >
                      การจัดส่ง
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        display: "flex",
                        justifyContent: "flex-end",
                      }}
                    >
                      {order.tracker || "-"}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={5} sx={{ textAlign: "center" }}>
                    {order.status === "อยู่ระหว่างจัดส่ง" && (
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={12}>
                          <Button
                            variant="contained"
                            fullWidth
                            sx={{
                              bgcolor: "#018294",
                              fontWeight: "bold",
                              "&:hover": {
                                bgcolor: "#018294",
                              },
                            }}
                            onClick={() =>
                              handleReceiveProduct(order.id, index)
                            }
                          >
                            ได้รับสินค้าแล้ว
                          </Button>
                        </Grid>
                      </Grid>
                    )}
                    {order.status === "จัดส่งสำเร็จ" && (
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={12}>
                          <Button
                            variant="contained"
                            fullWidth
                            sx={{
                              bgcolor: "#018294",
                              fontWeight: "bold",
                              "&:hover": {
                                bgcolor: "#018294",
                              },
                            }}
                            onClick={() => handlePush(order.id)}
                          >
                            คืนสินค้า
                          </Button>
                        </Grid>
                      </Grid>
                    )}
                  </Grid>
                </Grid>
              </CardContent>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ fontWeight: "bold" }}
                >
                  สถานะคำสั่งซื้อ
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <StepperData />
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container spacing={2}>
                      {orderData[index].address &&
                        orderData[index].address.map((doc, a) => (
                          <Grid item xs={12} sm={6} key={a}>
                            <Box sx={{ display: "flex", mr: 2 }}>
                              <PlaceOutlinedIcon />
                              <Box>
                                <Typography
                                  variant="h6"
                                  sx={{
                                    fontWeight: "bold",
                                    alignItems: "center",
                                  }}
                                >
                                  ที่อยู่จัดส่ง
                                </Typography>
                                {userData &&
                                  userData
                                    .filter((c) => c.uid === user.uid)
                                    .map((item, index) => (
                                      <Box key={index}>
                                        <Typography sx={{ fontWeight: "bold" }}>
                                          {item.name}
                                        </Typography>
                                      </Box>
                                    ))}
                                <Typography>
                                  บ้านเลขที่ {doc.address} อำเภอ
                                  {doc.amphure} ตำบล
                                  {doc.tambon} จังหวัด
                                  {doc.province} รหัสไปรษณีย์
                                  {doc.zipcode}
                                </Typography>
                                <Typography sx={{ fontWeight: "bold" }}>
                                  เบอร์โทร : {doc.tel}
                                </Typography>
                              </Box>
                            </Box>
                          </Grid>
                        ))}
                      <Grid item xs={12} sm={6}>
                        <StepperDetail />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ fontWeight: "bold" }}
                >
                  รายละเอียดคำสั่งซื้อ
                </Typography>
              </CardContent>
              <Card>
                {order.products &&
                  order.products.map((product, productIndex) => (
                    <CardActionArea key={productIndex}>
                      <Grid container spacing={2}>
                        <Grid
                          item
                          xs={3}
                          sm={3}
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <CardMedia
                            component="img"
                            sx={{ width: 100 }}
                            image={findProduct(product.product_id).img}
                            alt={findProduct(product.product_id).name}
                          />
                          <Box
                            sx={{
                              ml: 2,
                              width: 40,
                              height: 40,
                              borderRadius: "50%",
                              bgcolor: findColor(product.color_id).code,
                            }}
                          ></Box>
                        </Grid>
                        <Grid item xs={9} sm={9}>
                          <CardContent>
                            <Grid container spacing={2}>
                              <Grid item xs={9} sm={10}>
                                <Box>
                                  <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                  >
                                    {findProduct(product.product_id).name}{" "}
                                    {findProduct(product.product_id).area}
                                  </Typography>
                                  <Box sx={{ display: "flex" }}>
                                    <Typography
                                      variant="body2"
                                      color="text.secondary"
                                      sx={{ pr: 2 }}
                                    >
                                      จำนวน : {product.amount}
                                    </Typography>
                                    <Typography
                                      variant="body2"
                                      color="text.secondary"
                                    >
                                      ขนาด : {product.size}
                                    </Typography>
                                  </Box>
                                </Box>
                              </Grid>
                              <Grid
                                item
                                xs={3}
                                sm={2}
                                sx={{
                                  display: "flex",
                                  justifyContent: "flex-end",
                                  alignItems: "center",
                                }}
                              >
                                <Typography
                                  variant="h6"
                                  sx={{ fontWeight: "bold" }}
                                >
                                  ฿{format(product.price)}
                                </Typography>
                              </Grid>
                            </Grid>
                          </CardContent>
                        </Grid>
                      </Grid>
                    </CardActionArea>
                  ))}
                <CardContent>
                  <Grid
                    container
                    spacing={2}
                    sx={{ justifyContent: "flex-end" }}
                  >
                    <Grid item xs={7} sm={10}>
                      <Typography>ยอดรวมสินค้า</Typography>
                    </Grid>
                    <Grid
                      item
                      xs={5}
                      sm={2}
                      sx={{ display: "flex", justifyContent: "flex-end" }}
                    >
                      <Typography sx={{ fontWeight: "bold" }}>
                        ฿{format(total)}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    spacing={2}
                    sx={{ justifyContent: "flex-end" }}
                  >
                    <Grid item xs={7} sm={10}>
                      <Typography>ค่าจัดส่ง</Typography>
                    </Grid>
                    <Grid
                      item
                      xs={5}
                      sm={2}
                      sx={{ display: "flex", justifyContent: "flex-end" }}
                    >
                      <Typography sx={{ fontWeight: "bold" }}>
                        ฿{shippingCost}
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid
                    container
                    spacing={2}
                    sx={{ justifyContent: "flex-end" }}
                  >
                    <Grid item xs={7} sm={10}>
                      <Box sx={{ display: "flex" }}>
                        <Typography sx={{ fontWeight: "bold" }}>
                          ยอดสุทธิ
                        </Typography>
                        <Typography>(รวมภาษีมูลค่าเพิ่ม)</Typography>
                      </Box>
                    </Grid>
                    <Grid
                      item
                      xs={5}
                      sm={2}
                      sx={{ display: "flex", justifyContent: "flex-end" }}
                    >
                      <Typography
                        variant="h4"
                        sx={{
                          fontWeight: "bold",
                          color: "#018294",
                        }}
                      >
                        ฿{format(order.total_price)}
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Card>
          ))}
    </React.Fragment>
  );
}
