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
} from "@mui/material";
import { useRouter } from "next/router";
import QRCode from "qrcode.react";
import Image from "next/image";
const generate = require("promptpay-qr");
export default function QR() {
  const router = useRouter();
  const total = JSON.parse(router.query.total);
  const [amount, setAmount] = React.useState(total);
  const [phoneNumber, setphoneNumber] = React.useState("0960868037");
  const [qrCode, setqrCode] = React.useState("null");
  const [countdown, setCountdown] = React.useState(5 * 60);
  const format = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  const handleCancel = () => {
    router.push({
      pathname: "/cart",
    });
  };
  //QR
  function generateQR() {
    if (phoneNumber && amount !== null) {
      const payload = generate(phoneNumber, { amount });

      setqrCode(payload);
    } else {
      console.error("Missing phoneNumber or amount");
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
              height: "90vh",
            }}
          >
            <Box>
              <Grid
                container
                spacing={2}
                direction="column"
                alignItems="center"
                sx={{
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
                <Grid >
                  <QRCode value={qrCode} size={250} />
                </Grid>
                <Grid textAlign="center">
                  <Typography>จำนวนเงิน : ฿{format(amount)}</Typography>
                  <Typography>ระยะเวลาการชำระเงิน:</Typography>
                  <Typography>
                    {minutes} นาที {seconds} วินาที
                  </Typography>
                </Grid>
              </Grid>
              <Grid container spacing={2} alignItems="center" sx={{ pt: 2 }}>
                <Grid item xs={12} sm={6} sx={{ pr: 2, pl: 2 }}>
                  <Button variant="contained" fullWidth>
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
