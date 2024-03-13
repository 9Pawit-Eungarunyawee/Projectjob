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
  Stack,
  Pagination,
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
import { OrderContext } from "@/context/OrderContext";
import { ColorContext } from "@/context/ColorContext";
export default function Prepare() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const router = useRouter();
  const user = useAuthContext();
  function handlePush(data) {
    router.push({
      pathname: "/account/orderhistory/detail",
      query: { Order: JSON.stringify(data) },
    });
  }
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 2;
  const { productData, setProductData, fetchProductData } =
    React.useContext(ProductContext);
  const { orderData, setOrderData, fetchOrderData } =
    React.useContext(OrderContext);
  const { colorData, setColorData, fetchColorData } =
    React.useContext(ColorContext);
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
    const color = colorData.find((color) => color.id === id);
    const code = color ? color.code : id;
    const name = color ? color.code_name : id;
    return { code, name };
  };
  React.useEffect(() => {
    fetchProductData();
    fetchColorData();
    fetchOrderData();
  }, [orderData]);
  const handleChangePage = (event, page) => {
    setCurrentPage(page);
  };
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const ordersToShow = orderData
    .filter(
      (c) => c.user_id === user.user.uid && c.status === "อยู่ระหว่างจัดส่ง"
    )
    .slice(startIndex, endIndex);
  return (
    <React.Fragment>
      {ordersToShow.map((order, orderIndex) => (
        <Card key={orderIndex} sx={{ mb: 2 }}>
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
                  variant="body2"
                  color="textSecondary"
                  sx={{ mr: 2 }}
                  style={{ cursor: "pointer" }}
                  onClick={() => handlePush(order.id)}
                >
                  ดูรายละเอียด
                </Typography>
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
                    color: "#FFFFFF",
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
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box>
                <Typography color="text.secondary">วันที่สั่งซื้อ </Typography>
                <Typography sx={{ mb: 1.5, fontWeight: "bold" }}>
                  {formatTimestamp(order.createAt)}
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
                  ฿{format(order.total_price)}
                </Typography>
              </Box>
            </Box>
          </CardContent>
          {order.products &&
            order.products.map((product, productIndex) => (
              <CardActionArea key={productIndex}>
                <Grid container spacing={2}>
                  <Grid
                    item
                    xs={3} // เปลี่ยนขนาดเป็น 12 ใน xs เพื่อให้ข้อมูลสินค้าแสดงเป็นแนวนอน
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
                        <Grid item xs={9} sm={9}>
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
                          xs={3} // เปลี่ยนขนาดเป็น 12 ใน xs เพื่อให้ข้อมูลสินค้าแสดงเป็นแนวนอน
                          sm={3}
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                            ฿{format(product.price)}
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
      <Box display="flex" justifyContent="center" width="100%">
        <Stack spacing={2}>
          <Pagination
            count={Math.ceil(
              orderData.filter(
                (c) =>
                  c.user_id === user.user.uid &&
                  c.status === "อยู่ระหว่างจัดส่ง"
              ).length / itemsPerPage
            )}
            shape="rounded"
            page={currentPage}
            onChange={handleChangePage}
          />
        </Stack>
      </Box>
    </React.Fragment>
  );
}
