import Layout from "@/components/layout";
import { ThemeProvider } from "@emotion/react";
import { Box, Button, Grid, Typography, createTheme } from "@mui/material";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import getDoument from "@/firebase/getData";
import Image from "next/image";
export default function Detail() {
  const goBack = () => {
    window.history.back();
  };
  const theme = createTheme({
    palette: {
      primary: {
        main: "#018294",
      },
      success: {
        main: "#A9C470",
      },
      error: {
        main: "#FE616A",
      },
    },
    typography: {
        text: {
          fontSize: "1.2rem",
          padding: "1vw",
          width: "10rem",
        },
        data: {
          fontSize: "1.2rem",
          fontWeight: "600",
          whiteSpace: "pre-line",
        },
      },
  });
  const router = useRouter();
  const sell_id = JSON.parse(router.query.id);
  const [show ,setShow] = useState(false)
  const [sellData, setSellData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const collectionName = "orders";
    const { result, error } = await getDoument(collectionName, sell_id);
    if (error) {
      console.error("Error fetching document:", error);
    } else if (result) {
      const Data = result.data();
      console.log(Data);
      setSellData(Data);
      setShow(true)
    }
  };

  return (
    <Layout>
      <ThemeProvider theme={theme}>
        <Typography sx={{ fontSize: "2rem", fontWeight: "600", mt: 5, mb: 2 }}>
          รายละเอียดรายการขาย
        </Typography>
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

        {show ? (
          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={12} lg={6}>
              <Box
                sx={{
                  bgcolor: "#fff",
                  borderBottom: "1px solid #ccc",
                  borderRadius: "10px",
                  boxShadow:
                    "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
                }}
              >
                <Typography
                  sx={{ fontSize: "1.5rem", fontWeight: "600", p: 2 }}
                >
                  ข้อมูล
                </Typography>
                <Box sx={{ display: "flex", m: 2 }}>
                  <Box sx={{ width: "35%" }}>
                    <Typography variant="text">ชื่อรายการ:</Typography>
                  </Box>
                  <Box>
                    <Typography variant="data">{sell_id}</Typography>
                  </Box>
                </Box>
                <Box sx={{ display: "flex", m: 2 }}>
                  <Box sx={{ width: "35%" }}>
                    <Typography variant="text">วันที่:</Typography>
                  </Box>
                  <Box>
                    <Typography variant="data">
                      {sellData.createAt
                        ? sellData.createAt
                            .toDate()
                            .toLocaleString("th-TH", { dateStyle: "long" })
                        : ""}
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    m: 2,
                    pt: 1,
                    pb: 1,
                    bgcolor:
                      sellData.status === "ยืนยัน" ? "#A9C470" : "#FFB34E",
                  }}
                >
                  <Box sx={{ width: "35%" }}>
                    <Typography variant="text">สถานะรายการ:</Typography>
                  </Box>
                  <Box>
                    <Typography variant="data">{sellData.status}</Typography>
                  </Box>
                </Box>
              </Box>

              <Box
                sx={{
                  mt: 2,
                  bgcolor: "#fff",
                  borderBottom: "1px solid #ccc",
                  borderRadius: "10px",
                  boxShadow:
                    "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
                }}
              >
                <Typography
                  sx={{ fontSize: "1.5rem", fontWeight: "600", p: 2 }}
                >
                  ที่อยู่
                </Typography>
                <Box sx={{ display: "flex", m: 2 }}>
                  <Box sx={{ width: "35%" }}>
                    <Typography variant="text">บ้านเลขที่:</Typography>
                  </Box>
                  <Box>
                    <Typography variant="data">
                      {sellData.address[0].address}
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", m: 2 }}>
                  <Box sx={{ width: "35%" }}>
                    <Typography variant="text">ตำบล:</Typography>
                  </Box>
                  <Box>
                    <Typography variant="data">
                      {sellData.address[0].tambon}
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", m: 2 }}>
                  <Box sx={{ width: "35%" }}>
                    <Typography variant="text">จังหวัด:</Typography>
                  </Box>
                  <Box>
                    <Typography variant="data">
                      {sellData.address[0].province}
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: "flex", m: 2 }}>
                  <Box sx={{ width: "35%" }}>
                    <Typography variant="text">รหัสไปรษณีย์:</Typography>
                  </Box>
                  <Box>
                    <Typography variant="data">
                      {sellData.address[0].zipcode}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Box
                sx={{
                  bgcolor: "#fff",
                  borderBottom: "1px solid #ccc",
                  borderRadius: "10px",
                  height: "100%",
                  boxShadow:
                    "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
                }}
              >
                <Typography
                  sx={{ fontSize: "1.5rem", fontWeight: "600", p: 2 }}
                >
                  หลักฐานการชำระเงิน
                </Typography>
                <Box sx={{ m: 2, textAlign: "center" }}>
                  <Image
                    src={sellData.img}
                    alt="Product Image"
                    priority
                    height="350"
                    width="300"
                  />
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12}>
                
            </Grid>
          </Grid>
        ) : (
          <></>
        )}
      </ThemeProvider>
    </Layout>
  );
}
