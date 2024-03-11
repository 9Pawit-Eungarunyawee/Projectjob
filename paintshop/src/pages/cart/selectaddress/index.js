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
  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }
  export default function Selectaddress() {
    const shippingCost = 50;
    const [selectedAddressIndex, setSelectedAddressIndex] = React.useState(0);
    const [producttotal, setProducttotal] = React.useState(0);
    const [addressData, setAddressData] = React.useState(null);
    const [documentData, setDocumentData] = React.useState(null);
    const [cartData, setCartData] = React.useState(null);
    const [productData, setProductData] = React.useState(null);
    const [productData2, setProductData2] = React.useState(null);
    const [colorData, setColorData] = React.useState(null);
    const [total, setTotal] = React.useState(0);
    const [totalQuantity, setTotalQuantity] = React.useState(0);
    const [materialData, setMaterialData] = React.useState(null);
    const router = useRouter();
    const user = useAuthContext();
    const isMobile = useMediaQuery("(max-width:600px)");

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
      if (groupedProductData) {
        groupedProductData.forEach((item) => {
          productDetails.push({
            product_id: item.product_id.id,
            amount: item.amount,
            size: item.size,
            price: item.price,
            color_id: item.color_id.id || null,
          });
        });
      }

      // เก็บข้อมูลวัสดุ
      if (groupedMaterialData) {
        groupedMaterialData.forEach((item) => {
          productDetails.push({
            product_id: item.product_id.id,
            amount: item.amount,
            size: item.size,
            price: item.price,
            color_id: null, // ให้เป็น null เนื่องจากไม่มีสีในวัสดุ
          });
        });
      }
      const cartID = [];
      if (documentData) {
        documentData.map((item) => cartID.push(item.id));
      }
      if (materialData) {
        materialData.map((item) => cartID.push(item.id));
      }
      
      const addressDetails = addressData.map((item) => ({
        address: item.addresses[selectedAddressIndex].address,
        amphure: item.addresses[selectedAddressIndex].amphure,
        tambon: item.addresses[selectedAddressIndex].tambon,
        province: item.addresses[selectedAddressIndex].province,
        zipcode: item.addresses[selectedAddressIndex].zipcode,
      }));

      router.push({
        pathname: "/cart/QR",
        query: {
          totalAllPrice,
          productDetails: JSON.stringify(productDetails),
          cartId: JSON.stringify(cartID),
          addressDetails: JSON.stringify(addressDetails),
        },
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

    const [groupedProductData, setGroupedProductData] = React.useState(null);
    const [groupedMaterialData, setGroupedMaterialData] = React.useState(null);
    //ดึงข้อมูล
    React.useEffect(() => {
      // ทำสิ่งที่คุณต้องการกับ searchResults ที่ได้
      handleSearch("");
    }, []);
    React.useEffect(() => {
      // ทำสิ่งที่คุณต้องการกับ searchResults ที่ได้
      // console.log(documentData);
    }, [documentData]);

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
        const filteredResults = results.filter(
          (doc) => doc.user_id == uid && doc.isMaterial === false
        );
        const productIds = filteredResults.map((doc) => doc.product_id?.id);
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
    const debouncedSearchMaterial = debounce(async (term) => {
      const uid = user.user.uid;
      try {
        const collectionName = "cart";
        const field = "user_id";
        const results = await searchUser(collectionName, field, term);
        const filteredResults = results.filter(
          (doc) => doc.user_id === uid && doc.isMaterial === true
        );
        const productIds = filteredResults.map((doc) => doc.product_id?.id);
        const productDetails = await getProductDetails(productIds);
        setProductData2(productDetails);
        setMaterialData(filteredResults);
        const groupedMaterials = {};
        filteredResults.forEach((doc) => {
          const key = `${doc.product_id.id}_${doc.price}`;
          if (!groupedMaterials[key]) {
            groupedMaterials[key] = {
              ...doc,
            };
          } else {
            groupedMaterials[key].amount += 1;
          }
        });

        setGroupedMaterialData(Object.values(groupedMaterials));
      } catch (error) {
        console.error("Error searching data:", error);
      }
    }, 500); // กำหนดเวลา debounce ที่คุณต้องการ
    // กำหนดเวลา debounce ที่คุณต้องการ

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
      debouncedSearchMaterial(term);
      debouncedSearchCart(term);
    };

    React.useEffect(() => {
      if (groupedProductData && groupedProductData.length > 0) {
        let totalQuantity = 0;
        let total = 0;
        let producttotal = 0;
        groupedProductData.forEach((item) => {
          totalQuantity += item.amount;
          producttotal += item.amount * item.price;
        });
        total += producttotal + shippingCost;
        setTotalQuantity(totalQuantity);
        setProducttotal(producttotal);
        setTotal(total);
      }
    }, [groupedProductData]);
    const goBack = () => {
      window.history.back();
    };
    const [totalMaterialPrice, setTotalMaterialPrice] = React.useState(0);
    const [totalProductPrice, setTotalProductPrice] = React.useState(0);
    const [materialTotal, setMaterialTotal] = React.useState(0);

    React.useEffect(() => {
      if (groupedProductData && groupedProductData.length > 0) {
        let totalQuantity = 0;
        let producttotal = 0;
        groupedProductData.forEach((item) => {
          totalQuantity += item.amount;
          producttotal += item.amount * item.price;
        });
        const total = producttotal + shippingCost;
        setTotalQuantity(totalQuantity);
        setProducttotal(producttotal);
        setTotalProductPrice(producttotal);
        setTotal(total);
      }
    }, [groupedProductData]);

    React.useEffect(() => {
      if (groupedMaterialData && groupedMaterialData.length > 0) {
        let totalQuantity = 0;
        let materialtotal = 0;
        groupedMaterialData.forEach((item) => {
          totalQuantity += item.amount;
          materialtotal += item.amount * item.price;
        });
        const total = materialtotal + shippingCost;
        setTotalQuantity(totalQuantity);
        setMaterialTotal(materialtotal);
        setTotalMaterialPrice(materialtotal);
        setTotal(total);
      }
    }, [groupedMaterialData]);
    const productPrice = totalMaterialPrice + totalProductPrice;
    const totalAllPrice = totalMaterialPrice + totalProductPrice + shippingCost;
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
                                    <TableCell>
                                      {product && product.name}
                                    </TableCell>
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
                            {groupedMaterialData &&
                              groupedMaterialData.map((item, index) => {
                                const product = productData2.find(
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
                                    <TableCell>
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
                                    <TableCell></TableCell>
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
                      <AddressDrawer />
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
                            <Typography>
                              {" "}
                              ยอดรวมสินค้า ({totalQuantity} ชิ้น)
                            </Typography>
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
                              ฿{shippingCost}
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
                            <Typography gutterBottom variant="h8" component="div">
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
