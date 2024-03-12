import * as React from "react";
import Homelayout from "@/components/homelayout";
import Accordionlayout from "@/components/accordionlayout";
import {
  Typography,
  Container,
  Grid,
  Breadcrumbs,
  Box,
  Button,
  createTheme,
  ThemeProvider,
  Card,
  CardContent,
  CardActionArea,
  CardMedia,
  IconButton,
  TextField,
  MenuItem,
  Alert,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAuthContext } from "@/context/AuthContext";
import { ProductContext } from "@/context/ProductContext";
import { debounce } from "lodash";
import searchUser from "@/firebase/searchData";
import { getCollection } from "@/firebase/getData";
import Image from "next/image";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import addClaim from "@/firebase/addClaim";
import addOrder, { cancelOrder, deleteOrder } from "@/firebase/addOrder";
import updateOrder from "@/firebase/updateOrder";
function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function Refunddetail() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#018294",
      },
      success: {
        main: "#A9C470",
      },
      edit: {
        main: "#FFC300",
      },
      error: {
        main: "#FE616A",
      },
    },
  });
  const router = useRouter();
  const user = useAuthContext();
  const [userData, setUserData] = React.useState(null);
  const [imageUrl, setImageUrl] = React.useState("");
  const [orderData, setOrderData] = React.useState("");
  const [imageSet, setImageSet] = React.useState([]);
  const [videoUrl, setVideoUrl] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [color, setColor] = React.useState(null);
  const [reason, setReason] = React.useState("");
  const [reasonDetail, setReasonDetail] = React.useState("");
  const [bankDetail, setBankDetail] = React.useState("");
  const [alert, setAlert] = React.useState(null);
  const OrderId = JSON.parse(router.query.Order);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) {
      console.error("No file selected.");
      return;
    }
    const reader = new FileReader();

    reader.onloadend = () => {
      setImageSet((prevImageSet) => [...prevImageSet, reader.result]); // เพิ่ม imageUrl เข้าไปใน imageSet
    };

    reader.readAsDataURL(file);
  };

  //   const handleVideoUpload = (event) => {
  //     const file = event.target.files[0];
  //     if (!file) {
  //       console.error("No file selected.");
  //       setVideoUrl("");
  //       return;
  //     }
  //     const reader = new FileReader();

  //     reader.onloadend = () => {
  //       setVideoUrl(reader.result);
  //     };

  //     reader.readAsDataURL(file);
  //     // console.log(imageUrl);
  //   };
  const handleForm = async (event) => {
    event.preventDefault();
    const currentDate = new Date();
    const claim = {
      user_id: user.user.uid,
      reason: reason,
      reason_detail: reasonDetail,
      bank_detail: bankDetail,
      order_id: OrderId,
      createAt: currentDate,
      img: imageSet, // ใช้ imageSet แทน imageUrl
      status: "รอตรวจสอบ",
    };
    const Updatestatus = await cancelOrder(OrderId);
      const { result, error } = await addClaim("claims", claim);
      if (result) {
        setAlert(
          <Alert severity="success" onClose={handleClose}>
            เพิ่มข้อมูลสำเร็จ
          </Alert>
        );
        setOpen(true);
        router.push("/account/claimuser")
      } else {
        setAlert(
          <Alert severity="error" onClose={handleClose}>
            ผิดพลาด! ไม่สามารถเพิ่มข้อมูลได้
          </Alert>
        );
        setOpen(true);
        fetchProductData();
    }
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
  const handleSearch = (term) => {
    setSearchTerm(term);
    debouncedSearchOrder(term);
  };
  const findProduct = (id) => {
    const product = productData.find((product) => product.id === id);
    const productId = product ? product.id : id;
    const img = product ? product.img : id;
    const name = product ? product.name : id;
    const area = product ? product.area : id;
    return { img, name, area, productId };
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
  return (
    <React.Fragment>
      {orderData &&
        orderData.map((item, index) => (
          <Card key={item.id} sx={{ mb: 2 }}>
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
              <form onSubmit={handleForm} className="form">
                <Grid>
                  {/* {" "}
                      <Grid>
                        <Box>
                          {videoUrl ? (
                            <video
                              controls
                              width="350"
                              height="200"
                              style={{
                                border: "1px solid rgba(0, 0, 0, 0.50)",
                              }}
                            >
                              <source src={videoUrl} type="video/mp4" />
                              Your browser does not support the video tag.
                            </video>
                          ) : (
                            <label htmlFor="upload-video">
                              <IconButton
                                component="span"
                                aria-label="upload video"
                                color="primary"
                                style={{
                                  border: "1px solid rgba(0, 0, 0, 0.50)",
                                  borderRadius: "4px",
                                  width: "100px",
                                  height: "100px",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  overflow: "hidden",
                                }}
                              >
                                <VideoCallIcon />
                              </IconButton>
                            </label>
                          )}
                        </Box>
                        <input
                          id="upload-video"
                          accept="video/*"
                          type="file"
                          hidden
                          onChange={handleVideoUpload}
                        />
                      </Grid> */}
                  <Grid mt={2}>
                    <Box>
                      {imageSet.map((url, index) => (
                        <Image
                          key={index}
                          src={url}
                          alt={`Uploaded Image ${index + 1}`}
                          priority
                          height="150"
                          width="150"
                          style={{
                            border: "1px solid rgba(0, 0, 0, 0.50)",
                            marginRight: "10px",
                          }}
                        />
                      ))}
                    </Box>
                    <label htmlFor="upload-image">
                      <Button variant="contained" component="span">
                        เพิ่มรูปภาพสินค้า
                      </Button>
                      <input
                        id="upload-image"
                        hidden
                        accept="image/*"
                        type="file"
                        onChange={handleFileUpload}
                      />
                    </label>
                  </Grid>
                </Grid>

                <Grid>
                  <Box>
                    <Typography>เหตุผล*</Typography>
                    <TextField
                      value={reason}
                      onChange={(e) => setReason(e.target.value)}
                      select
                      fullWidth
                      label="เหตุผล"
                      sx={{ mt: 1, mb: 1, fontSize: "0.9rem" }}
                      required
                    >
                      <MenuItem value={"สีที่สั่งไม่ตรงตามที่ต้องการ"}>
                        สีที่สั่งไม่ตรงตามที่ต้องการ
                      </MenuItem>
                      <MenuItem value={"สินค้ามีข้อบกพร่อง,ชำรุด"}>
                        สินค้ามีข้อบกพร่อง,ชำรุด
                      </MenuItem>
                      <MenuItem value={"ได้รับสินค้าไม่ครบตามที่สั่งซื้อไป"}>
                        ได้รับสินค้าไม่ครบตามที่สั่งซื้อไป
                      </MenuItem>
                      <MenuItem value={"ไม่ได้รับสินค้า"}>
                        ไม่ได้รับสินค้า
                      </MenuItem>
                    </TextField>
                  </Box>
                  <Box>
                    <Typography>รายละเอียด*</Typography>
                    <TextField
                      id="outlined-multiline-static"
                      multiline
                      rows={4}
                      fullWidth
                      required
                      sx={{ mt: 1, mb: 1 }}
                      value={reasonDetail}
                      onChange={(e) => setReasonDetail(e.target.value)}
                    />
                  </Box>
                  <Box>
                    <Typography>ใส่ช่องทางการโอนเงิน*</Typography>
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      required
                      fullWidth
                      sx={{ mt: 1, mb: 1 }}
                      value={bankDetail}
                      onChange={(e) => setBankDetail(e.target.value)}
                    />
                  </Box>
                </Grid>
                <Grid>
                  <Button variant="contained" type="submit">
                    ยืนยัน
                  </Button>
                </Grid>
              </form>
            </CardContent>
          </Card>
        ))}
    </React.Fragment>
  );
}
