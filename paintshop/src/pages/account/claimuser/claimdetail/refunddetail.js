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
import Claimsteppers from "./claimstepper";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import {
  getCollection,
  getColorDetails,
  getProductDetails,
} from "@/firebase/getData";
import { ProductContext } from "@/context/ProductContext";
import Link from "next/link";
import { useAuthContext } from "@/context/AuthContext";
import Image from "next/image";
import RefundDialog from "./refunddialog";
export default function Refunddetail() {
  const shippingCost = 50;
  const [total, setTotal] = React.useState(0);
  const { user, isAdmin } = useAuthContext();
  const [searchTerm, setSearchTerm] = React.useState("");
  const [orderData, setOrderData] = React.useState([]);
  const [claimData, setClaimData] = React.useState([]);
  const [userData, setUserData] = React.useState("");
  const [color, setColor] = React.useState(null);
  const [activeStep, setActiveStep] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  // function handlePush(data) {
  //   router.push({
  //     pathname: "/account/claimuser/refund",
  //     query: { Order: JSON.stringify(data) },
  //   });
  // }
  // const handleReceiveProduct = async (orderId, index) => {
  //   try {
  //     const { result, error } = await updateOrder("orders", orderId, {
  //       status: "จัดส่งสำเร็จ",
  //     });
  //     if (error) {
  //       console.error("Error updating order:", error);
  //     } else {
  //       console.log("Order updated successfully:", result);
  //       // อัปเดตสถานะของรายการคำสั่งซื้อในตัวแปร orderData ทันที
  //       const updatedOrderData = [...orderData];
  //       updatedOrderData[index].status = "จัดส่งสำเร็จ";
  //       setOrderData(updatedOrderData);
  //       // รีเฟรชหน้าหลังจากการอัปเดตสถานะ
  //       window.location.reload();
  //     }
  //   } catch (error) {
  //     console.error("Error updating order:", error);
  //   }
  // };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };
  const router = useRouter();
  const ClaimID = JSON.parse(router.query.Claim);
  const { productData, setProductData, fetchProductData } =
    React.useContext(ProductContext);

  React.useEffect(() => {
    // ทำสิ่งที่คุณต้องการกับ searchResults ที่ได้
    handleSearch("");
  }, []);

  React.useEffect(() => {}, [orderData, claimData]);
  const debouncedSearchUser = debounce(async (term) => {
    const uid = user.uid;
    try {
      const collectionName = "claims";
      const field = "status";
      const results = await searchUser(collectionName, field, term);
      const filteredResults = results.filter(
        (doc) => doc.user_id === uid && doc.id === ClaimID
      );
      setClaimData(filteredResults);
    } catch (error) {
      console.error("Error searching data:", error);
    }
  }, 100);

  const debouncedSearchOrder = debounce(async (term) => {
    const uid = user.uid;
    try {
      const collectionName = "orders";
      const field = "status";
      const results = await searchUser(collectionName, field, term);
      const filteredResults = results.filter(
        (doc) => doc.user_id === uid && findOrder(doc.id)
      );
      setOrderData(filteredResults);
    } catch (error) {
      console.error("Error searching data:", error);
    }
  }, 100);
  const handleSearch = (term) => {
    setSearchTerm(term);
    debouncedSearchUser(term);
    debouncedSearchOrder(term);
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
  const findOrder = (id) => {
    const order = claimData.find((order) => order.order_id === id);
    const orderId = order ? order.id : id;
    return orderId;
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
  console.log("asdasdasd", orderData);
  return (
    <React.Fragment>
      {claimData &&
        claimData.map((item, index) => (
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
                        item.status === "ยืนยันการเคลม"
                          ? "#FFA500"
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
                    วันที่ขอคืนเงิน{" "}
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
                  {item.status === "ยืนยันการเคลม" && (
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={12}>
                        <RefundDialog
                          claim_id={ClaimID}
                          onClose={handleClose}
                          ClaimData={debouncedSearchUser}
                        />
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
                สถานะการคืนเงิน
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Claimsteppers />
                </Grid>
                <Grid item xs={12}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={8}>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ fontWeight: "bold" }}
                      >
                        หลักฐาน
                      </Typography>
                      {claimData[index].img &&
                        claimData[index].img.map((data, a) => (
                          <Image
                            key={a}
                            src={data}
                            width={150}
                            height={100}
                            alt={`Image ${a}`}
                          />
                        ))}
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ fontWeight: "bold" }}
                      >
                        รายละเอียดการเคลม
                      </Typography>
                      <Typography sx={{ fontWeight: "bold" }}>
                        เหตุผล : {item.reason}
                      </Typography>
                      <Box>
                        <Typography sx={{ fontWeight: "bold" }}>
                          เหตุผลเพิ่มเติม
                        </Typography>
                        <Typography>{item.reason_detail}</Typography>
                      </Box>
                      <Box>
                        <Typography sx={{ fontWeight: "bold" }}>
                          บัญชีธนาคารของลูกค้า
                        </Typography>
                        <Typography>{item.bank_detail}</Typography>
                      </Box>
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
                รายละเอียดคำสั่งซื้อที่ขอคืนเงิน
              </Typography>
            </CardContent>
            {orderData
              .filter((order) => order.id === item.order_id) // กรองข้อมูล orderData เพื่อแสดงเฉพาะที่เกี่ยวข้องกับเคลม ID นั้นๆ
              .map((data1, x) => (
                <Card key={x}>
                  
                  {orderData[x].products &&
                    orderData[x].products.map((data, i) => (
                      <CardActionArea key={i}>
                        {console.log("tesrtasdasdas123123",data)}
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
                      <Grid item xs={12} sm={10}>
                        <Box sx={{ display: "flex" }}>
                          <Typography sx={{ fontWeight: "bold" }}>
                            ยอดสุทธิ
                          </Typography>
                          <Typography>(รวมภาษีมูลค่าเพิ่ม)</Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={12} sm={2}>
                        <Typography
                          variant="h4"
                          sx={{ fontWeight: "bold", color: "#018294" }}
                        >
                          ฿{format(data1.total_price)}
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              ))}
          </Card>
        ))}
    </React.Fragment>
  );
}
