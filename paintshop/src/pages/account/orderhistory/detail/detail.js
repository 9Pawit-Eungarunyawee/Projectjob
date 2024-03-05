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

export default function DetailOrder() {
  const shippingCost = 50;
  const [total, setTotal] = React.useState(0);
  const { user, isAdmin } = useAuthContext();
  const [searchTerm, setSearchTerm] = React.useState("");
  const [orderData, setOrderData] = React.useState("");
  const [userData, setUserData] = React.useState("");
  const [color, setColor] = React.useState(null);
  const [activeStep, setActiveStep] = React.useState(0);
  function handlePush(data) {
    router.push({
      pathname: "/account/claim/refund",
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

  React.useEffect(() => {
    // ทำสิ่งที่คุณต้องการกับ searchResults ที่ได้
    handleSearch("");
  }, []);

  React.useEffect(() => {}, [orderData]);
  const debouncedSearchOrder = debounce(async (term) => {
    try {
      const collectionName = "orders";
      const field = "status";
      const results = await searchUser(collectionName, field, term);
      const filteredResults = results.filter((doc) => doc.id === OrderId);
      setOrderData(filteredResults);
    } catch (error) {
      console.error("Error searching data:", error);
    }
  }, 500); // กำหนดเวลา debounce ที่คุณต้องการ

  const debouncedSearchUser = debounce(async (term) => {
    const uid = user.uid;
    try {
      const collectionName = "users";
      const field = "name";
      const results = await searchUser(collectionName, field, term);
      const filteredResults = results.filter((doc) => doc.id === uid);
      setUserData(filteredResults);
    } catch (error) {
      console.error("Error searching data:", error);
    }
  }, 500); // กำหนดเวลา debounce ที่คุณต้องการ
  const handleSearch = (term) => {
    setSearchTerm(term);
    debouncedSearchOrder(term);
    debouncedSearchUser(term);
  };

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
    const colordata = color.find((color) => color.id === id);
    const code = colordata ? colordata.code : id;
    const name = colordata ? colordata.code_name : id;
    return { code, name };
  };
  React.useEffect(() => {
    fetchProductData();
    fetchColorData();
  }, [orderData]);

  const fetchColorData = async (colorId) => {
    const collectionName = "colors";
    const { result, error } = await getCollection(collectionName);
    if (error) {
      console.error("Error fetching document:", error);
      return null;
    } else if (result) {
      const colorData = result.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return setColor(colorData);
    }
    return null;
  };
  React.useEffect(() => {
    let producttotal = 0;
    if (Array.isArray(orderData)) {
      orderData.forEach((item, index) => {
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
        orderData.map((item, index) => (
          <Card key={item.id} sx={{ mb: 2 }}>
            <CardContent>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography
                  sx={{ fontSize: 14, fontWeight: "bold" }}
                  gutterBottom
                >
                  รายการคำสั่งซื้อ #{item.id}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      bgcolor:
                        item.status === "ยืนยัน"
                          ? "#FFFF00"
                          : item.status === "จัดเตรียมสินค้า" ||
                            item.status === "อยู่ระหว่างจัดส่ง"
                          ? "#FFA500"
                          : item.status === "จัดส่งสำเร็จ"
                          ? "#4CAF50"
                          : "#FE616A",

                      color: "#FFFFFF", // กำหนดสีตัวอักษรเป็นขาว
                      p: 0.5,
                      borderRadius: "4px",
                    }}
                  >
                    {item.status}
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
                <Grid item xs={12} sm={4}>
                  <Typography color="text.secondary">
                    วันที่สั่งซื้อ{" "}
                  </Typography>
                  <Typography sx={{ mb: 1.5, fontWeight: "bold" }}>
                    {formatTimestamp(item.createAt)}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <Typography color="text.secondary">การจัดส่ง</Typography>
                  <Typography sx={{ fontWeight: "bold" }}>
                    {item.tracker || "-"}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={5} sx={{ textAlign: "center" }}>
                  {item.status !== "จัดส่งสำเร็จ" && (
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
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
                          onClick={() => handleReceiveProduct(item.id, index)}
                        >
                          ได้รับสินค้าแล้ว
                        </Button>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Button
                          variant="contained"
                          fullWidth
                          sx={{
                            bgcolor: "#BBE2EC",
                            fontWeight: "bold",
                            color: "#018294",
                            "&:hover": {
                              bgcolor: "#BBE2EC",
                            },
                          }}
                        >
                          ไม่ได้รับสินค้า
                        </Button>
                      </Grid>
                    </Grid>
                  )}
                  {item.status === "จัดส่งสำเร็จ" && (
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
                          onClick={() => handlePush(item.id)}
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
                                userData.map((item, index) => (
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
                              {userData &&
                                userData.map((item, index) => (
                                  <Box key={index}>
                                    <Typography sx={{ fontWeight: "bold" }}>
                                      เบอร์โทร : {item.tel}
                                    </Typography>
                                  </Box>
                                ))}
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
              {orderData[index].products &&
                orderData[index].products.map((data, i) => (
                  <CardActionArea key={i}>
                    <Grid container spacing={2}>
                      <Grid
                        item
                        xs={12}
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
                          image={findProduct(data.product_id).img}
                          alt={findProduct(data.product_id).name}
                        />
                        <Box
                          sx={{
                            ml: 2,
                            width: 40,
                            height: 40,
                            borderRadius: "50%",
                            bgcolor: findColor(data.color_id).code,
                          }}
                        ></Box>
                      </Grid>
                      <Grid item xs={12} sm={9}>
                        <CardContent>
                          <Grid container spacing={2}>
                            <Grid item xs={12} sm={10}>
                              <Box>
                                <Typography
                                  gutterBottom
                                  variant="h5"
                                  component="div"
                                >
                                  {findProduct(data.product_id).name}{" "}
                                  {findProduct(data.product_id).area}
                                </Typography>
                                <Box sx={{ display: "flex" }}>
                                  <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    sx={{ pr: 2 }}
                                  >
                                    จำนวน : {data.amount}
                                  </Typography>
                                  <Typography
                                    variant="body2"
                                    color="text.secondary"
                                  >
                                    ขนาด : {data.size}
                                  </Typography>
                                </Box>
                              </Box>
                            </Grid>
                            <Grid
                              item
                              xs={12}
                              sm={2}
                              sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              <Typography
                                variant="h6"
                                sx={{ fontWeight: "bold" }}
                              >
                                ฿{format(data.price)}
                              </Typography>
                            </Grid>
                          </Grid>
                        </CardContent>
                      </Grid>
                    </Grid>
                  </CardActionArea>
                ))}
              <CardContent>
                <Grid container spacing={2} sx={{ mb: 2 }}>
                  <Grid item xs={12} sm={11}>
                    <Typography>ยอดรวมสินค้า</Typography>
                  </Grid>
                  <Grid item xs={12} sm={1}>
                    <Typography sx={{ fontWeight: "bold" }}>
                      ฿{format(total)}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container spacing={2} sx={{ mb: 2 }}>
                  <Grid item xs={12} sm={11}>
                    <Typography>ค่าจัดส่ง</Typography>
                  </Grid>
                  <Grid item xs={12} sm={1}>
                    <Typography sx={{ fontWeight: "bold" }}>
                      ฿{shippingCost}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={11}>
                    <Box sx={{ display: "flex" }}>
                      <Typography sx={{ fontWeight: "bold" }}>
                        ยอดสุทธิ
                      </Typography>
                      <Typography>(รวมภาษีมูลค่าเพิ่ม)</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={1}>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: "bold", color: "#018294" }}
                    >
                      ฿{format(item.total_price)}
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
