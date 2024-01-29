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
} from "@mui/material";
import Link from "next/link";
import Addressdialog from "./dialog";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import searchUser from "@/firebase/searchData";
import { useRouter } from "next/router";
import { debounce } from "lodash";
import { useAuthContext } from "@/context/AuthContext";
import Editaddress from "./editdialog";
import { getColorDetails, getProductDetails } from "@/firebase/getData";
function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}
export default function Selectaddress() {
  const [addressData, setAddressData] = React.useState(null);
  const [documentData, setDocumentData] = React.useState(null);
  const [cartData, setCartData] = React.useState(null);
  const [productData, setProductData] = React.useState(null);
  const [colorData, setColorData] = React.useState(null);
  const [total, setTotal] = React.useState(0);
  const [totalQuantity, setTotalQuantity] = React.useState(0);
  const [groupedProductData, setGroupedProductData] = React.useState(null);
  const router = useRouter();
  const user = useAuthContext();

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
    router.push({
      pathname: "/cart/QR",
      //   query: { cartId: JSON.stringify(cartIds), total },
    });
  };
  const [searchTerm, setSearchTerm] = React.useState("");
  React.useEffect(() => {
    // ทำสิ่งที่คุณต้องการกับ searchResults ที่ได้
    handleSearch("");
  }, []);
  React.useEffect(() => {
    // ทำสิ่งที่คุณต้องการกับ searchResults ที่ได้
    // console.log(documentData);
  }, [addressData]);

  const debouncedSearchCart = debounce(async (term) => {
    const uid = user.user.uid;
    console.log("Fetched data:", {
      documentData,
      productData,
      colorData,
      groupedProductData,
    });
    try {
      const collectionName = "cart";
      const field = "user_id";
      const results = await searchUser(collectionName, field, term);
      const filteredResults = results.filter((doc) => doc.user_id == uid);
      const productIds = filteredResults.map((doc) => doc.product_id.id);
      const colorIds = filteredResults.map((doc) => doc.color_id.id);
      console.log("Product IDs:", productIds);
      console.log("Color IDs:", colorIds);
      const productDetails = await getProductDetails(productIds);
      const colorDetails = await getColorDetails(colorIds);
      setColorData(colorDetails);
      setProductData(productDetails);
      setDocumentData(filteredResults);

      const groupedProducts = {};
      filteredResults.forEach((doc) => {
        const key = `${doc.color_id.id}_${doc.product_id.id}_${doc.price}`;
        if (!groupedProducts[key]) {
          groupedProducts[key] = {
            ...doc,
            amount: 1,
          };
        } else {
          groupedProducts[key].amount += 1;
        }
      });

      setGroupedProductData(Object.values(groupedProducts));
    } catch (error) {
      console.error("Error searching data:", error);
    }
  }, 500);

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
    debouncedSearchCart(term);
  };

  React.useEffect(() => {
    if (groupedProductData && groupedProductData.length > 0) {
      let totalQuantity = 0;
      let total = 0;

      groupedProductData.forEach((item) => {
        totalQuantity += item.amount;
        total += item.amount * item.price;
      });

      setTotalQuantity(totalQuantity);
      setTotal(total);
    }
  }, [groupedProductData]);

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
              <Link
                style={{ textDecoration: "none" }}
                sx={{
                  color: "inherit",
                  "&:hover": { textDecoration: "underline" },
                }}
                href="/cart"
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
                            <Editaddress handleClickOpen={handleClickOpen} />
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
                                  <Typography>{data.name}</Typography>
                                </Grid>
                                <Grid item xs={12} sm={9}>
                                  <Typography>
                                    {data.addresses[0].address} อำเภอ{" "}
                                    {data.addresses[0].amphure} ตำบล
                                    {data.addresses[0].tambon} จังหวัด{" "}
                                    {data.addresses[0].province}
                                  </Typography>
                                </Grid>
                              </Grid>
                            ))}
                        </Box>
                      </CardContent>
                    </Card>
                  </Box>
                  <Box sx={{ mt: 2, mb: 2 }}>
                    <Typography>รายการสั่งซื้อ</Typography>
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
                          {groupedProductData &&
                            groupedProductData.map((item, index) => {
                              const product = productData.find(
                                (p) => p.id === item.product_id.id
                              );
                              return (
                                <TableRow
                                  key={index}
                                  sx={{
                                    "&:last-child td, &:last-child th": {
                                      border: 0,
                                    },
                                  }}
                                >
                                  <TableCell component="th" scope="row">
                                    {product && (
                                      <img
                                        src={product.img}
                                        alt={product.name}
                                        width={60}
                                        height={60}
                                      />
                                    )}
                                  </TableCell>
                                  <TableCell>{product.name}</TableCell>
                                  <TableCell>
                                    <Box
                                      sx={{
                                        width: 50,
                                        height: 50,
                                        bgcolor: colorData.find(
                                          (color) =>
                                            color.id === item.color_id.id
                                        ).code,
                                      }}
                                    ></Box>
                                  </TableCell>
                                  <TableCell>{item.size}</TableCell>
                                  <TableCell>฿{format(item.price)}</TableCell>
                                  <TableCell>{item.amount}</TableCell>
                                </TableRow>
                              );
                            })}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Box>
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
                      <Typography>
                        ยอดรวมสินค้า ({totalQuantity} ชิ้น)
                      </Typography>
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
                        <Typography gutterBottom variant="h8" component="div">
                          ฿{format(total)}
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
              </Grid>
            </Box>
          </Container>
        </Box>
      </ThemeProvider>
    </Homelayout>
  );
}
