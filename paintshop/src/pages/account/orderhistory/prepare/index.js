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
} from "@mui/material";
import searchUser from "@/firebase/searchData";
import { useRouter } from "next/router";
import { debounce } from "lodash";
import {
  getCollection,
  getColorDetails,
  getProductDetails,
} from "@/firebase/getData";
import { ProductContext } from "@/context/ProductContext";
import Link from "next/link";
import { useAuthContext } from "@/context/AuthContext";
export default function Prepare() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [orderData, setOrderData] = React.useState("");
  const [color, setColor] = React.useState(null);
  const router = useRouter();
  const user = useAuthContext();
  function handlePush(data) {
    router.push({
      pathname: "/account/orderhistory/detail",
      query: { Order: JSON.stringify(data) },
    });
  }
  const { productData, setProductData, fetchProductData } =
    React.useContext(ProductContext);

  React.useEffect(() => {
    // ทำสิ่งที่คุณต้องการกับ searchResults ที่ได้
    handleSearch("");
  }, []);

  React.useEffect(() => {}, [orderData]);
  const debouncedSearchUser = debounce(async (term) => {
    const uid = user.user.uid;
    try {
      const collectionName = "orders";
      const field = "status";
      const results = await searchUser(collectionName, field, term);
      const filteredResults = results.filter(
        (doc) => doc.status === "จัดเตรียมสินค้า" && doc.user_id === uid
      );
      setOrderData(filteredResults);
    } catch (error) {
      console.error("Error searching data:", error);
    }
  }, 500); // กำหนดเวลา debounce ที่คุณต้องการ
  const handleSearch = (term) => {
    setSearchTerm(term);
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
                    variant="body2"
                    color="textSecondary"
                    sx={{ mr: 2 }}
                    style={{ cursor: "pointer" }}
                    onClick={() => handlePush(item.id)}
                  >
                    ดูรายละเอียด
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      bgcolor:
                        item.status === "ยืนยัน"
                          ? "#FFFF00"
                          : item.status === "จัดเตรียมสินค้า" ||
                            item.status === "จัดส่ง"
                          ? "#FFA500"
                          : item.status === "จัดส่งสำเร็จ"
                          ? "#4CAF50"
                          : "#FE616A",
                      color: "#FFFFFF",
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
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box>
                  <Typography color="text.secondary">
                    วันที่สั่งซื้อ{" "}
                  </Typography>
                  <Typography sx={{ mb: 1.5, fontWeight: "bold" }}>
                    {formatTimestamp(item.createAt)}
                  </Typography>
                </Box>
                <Box sx={{ display: "flex" }}>
                  <Box sx={{ mr: 4 }}>
                    <Typography>ยอดสุทธิ </Typography>
                    <Typography color="text.secondary">
                      (รวมภาษีมูลค่าเพิ่ม)
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      mb: 1.5,
                      fontWeight: "bold",
                      color: "#018294",
                      fontSize: 20,
                    }}
                  >
                    ฿{format(item.total_price)}
                  </Typography>
                </Box>
              </Box>
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
                          <Grid item xs={12} sm={9}>
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
                            sm={3}
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
          </Card>
        ))}
    </React.Fragment>
  );
}
