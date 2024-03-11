import React from "react";
import Box from "@mui/material/Box";
import HomeLayout from "@/components/homelayout";
import {
  Typography,
  Button,
  Grid,
  Container,
  createTheme,
  ThemeProvider,
  Alert,
} from "@mui/material";
import { useRouter } from "next/router";
import QRCode from "qrcode.react";
import Image from "next/image";
import { useAuthContext } from "@/context/AuthContext";
import addOrder, { deleteCartItem } from "@/firebase/addOrder";
const generate = require("promptpay-qr");
export default function QR() {
  const router = useRouter();
  const user = useAuthContext();
  const sumtotal = JSON.parse(router.query.totalAllPrice);
  const productDetails = JSON.parse(router.query.productDetails);
  const addressDetails = JSON.parse(router.query.addressDetails);
  const cartID = JSON.parse(router.query.cartId);
  const [price, setPrice] = React.useState(sumtotal);
  const [phoneNumber, setphoneNumber] = React.useState("0960868037");
  const [qrCode, setqrCode] = React.useState("null");
  const [countdown, setCountdown] = React.useState(5 * 60);
  const [imageUrl, setImageUrl] = React.useState("");
  const [alert, setAlert] = React.useState(null);
  const format = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) {
      console.error("No file selected.");
      setImageUrl("");
      return;
    }
    const reader = new FileReader();

    reader.onloadend = () => {
      setImageUrl(reader.result);
    };

    reader.readAsDataURL(file);
    // console.log(imageUrl);
  };
  const handleCancel = () => {
    router.push({
      pathname: "/cart",
    });
  };
  //QR
  function generateQR() {
    if (phoneNumber && price !== null) {
      const payload = generate(phoneNumber, { price });

      setqrCode(payload);
    } else {
      console.error("Missing phoneNumber or price");
    }
  }
  React.useEffect(() => {
    generateQR();
  }, []);

  // นับถอยหลัง
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  React.useEffect(() => {
    if (countdown <= 0) {
      router.push("/cart");
    }
  }, [countdown]);
  const minutes = Math.floor(countdown / 60);
  const seconds = countdown % 60;

  const theme = createTheme({
    palette: {
      primary: {
        main: "#FE616A",
      },
    },
  });
  const updateorder = async (products ,address) => {
    const currentDate = new Date();
    const order = {
      products: products,
      user_id: user.user.uid,
      total_price: price,
      address:address,
      tracker:null,
      createAt: currentDate,
      img: imageUrl,
      status: "รอยืนยัน",
    };

    // Delete cart item first
    const deleteCartResult = await deleteCartItem(cartID);

    if (deleteCartResult.result) {
      // Cart item deleted successfully, now add the order
      const orderResult = await addOrder("orders", order);

      if (orderResult.result) {
        // Order added successfully
        setAlert(
          <Alert severity="success" onClose={handleClose}>
            ชำระเงินเสร็จสิ้น
          </Alert>
        );
        setOpen(true);
        router.push("/homepage");
      } else {
        // Error adding order
        setAlert(
          <Alert severity="error" onClose={handleClose}>
            ผิดพลาด! ไม่สามารถชำระเงิน
          </Alert>
        );
        setOpen(true);
        
      }
    } else {
      // Error deleting cart item
      setAlert(
        <Alert severity="error" onClose={handleClose}>
          ผิดพลาด! ไม่สามารถลบสินค้าในตะกร้าได้
        </Alert>
      );
      setOpen(true);
    }
  };

  const [open, setOpen] = React.useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <HomeLayout>
      <ThemeProvider theme={theme}>
        <Box sx={{ width: "100%" }}>
          <Container
            maxWidth={false}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <Grid
                container
                spacing={2}
                direction="column"
                alignItems="center"
                sx={{
                  mt: 2,
                  p: 3,
                  pt: 2,
                  bgcolor: "#FFF",
                  boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                  borderRadius: "25px",
                }}
              >
                <Grid>
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/c/c5/PromptPay-logo.png"
                    alt="PromptPay Logo"
                    width={250}
                    height={150}
                  />
                </Grid>
                <Grid>
                  <QRCode value={qrCode} size={250} />
                </Grid>
                <Grid textAlign="center">
                  <Typography>จำนวนเงิน : ฿{format(price)}</Typography>
                  <Typography>ระยะเวลาการชำระเงิน:</Typography>
                  <Typography>
                    {minutes} นาที {seconds} วินาที
                  </Typography>
                </Grid>
              </Grid>
              <Grid textAlign="center" mt={2}>
                <Box>
                  {imageUrl && (
                    <Image
                      src={imageUrl}
                      alt="Uploaded Image"
                      priority
                      height="200"
                      width="260"
                      style={{
                        border: "1px solid rgba(0, 0, 0, 0.50)",
                        objectFit: "cover",
                      }}
                    />
                  )}
                </Box>
                <label htmlFor="upload-image">
                  <Button variant="contained" component="span">
                    เพิ่มรูปภาพหลักฐาน
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
              <Grid container spacing={2} alignItems="center" sx={{ pt: 2 }}>
                <Grid item xs={12} sm={6} sx={{ pr: 2, pl: 2 }}>
                  <Button
                    variant="contained"
                    fullWidth
                    onClick={() => updateorder(productDetails,addressDetails)}
                  >
                    ยืนยัน
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6} sx={{ pr: 2, pl: 2 }}>
                  <Button
                    variant="contained"
                    fullWidth
                    onClick={handleCancel}
                    style={{ background: "#AFAFAF" }}
                  >
                    ยกเลิก
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>
      </ThemeProvider>
    </HomeLayout>
  );
}
