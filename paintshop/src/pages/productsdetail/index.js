import Homelayout from "@/components/homelayout";
import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Breadcrumbs,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}
export default function Productsdetail() {
  const theme = createTheme({
    components: {
      MuiTypography: {
        styleOverrides: {
          root: {
            textDecoration: "none",
          },
        },
      },
    },
  });
  const styles = {
    btnHover: {
      "&:hover": {
        cursor: "pointer",
        bgcolor: "#018294",
      },
    },
    filterHover: {
      "&:hover": {
        color: "red",
        transition: "0.2s",
      },
    },
  };
  const features = [
    "เหมาะกับงานไม้แนวตั้งทั้งภายนอกและภายใน",
    "ฟิล์มสีเงาโปร่งแสงโชว์ลายไม้ 100%",
    "ป้องกันรังสี UV เนื้อสีซึมลึกถึงเนื้อไม้",
    "ยึดเกาะแน่นด้วย Super Resin ทำให้ฟิล์มยืดหยุ่นตัวไม่แตกร้าว",
  ];
  return (
    <Homelayout>
      <ThemeProvider theme={theme}>
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
                  href="/"
                >
                  หน้าแรก
                </Link>
                <Link
                  style={{ textDecoration: "none", color: "inherit" }}
                  sx={{
                    color: "inherit",
                    "&:hover": { textDecoration: "underline" },
                  }}
                  href="/products"
                >
                  ผลิตภัณฑ์
                </Link>
                <Typography color="text.primary">
                  Beger Woodstain Gloss
                </Typography>
              </Breadcrumbs>
            </div>
            <Link
              style={{ textDecoration: "none" }}
              sx={{
                color: "inherit",
                "&:hover": { textDecoration: "underline" },
              }}
              href="/products/beger"
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
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    src="https://static.wixstatic.com/media/04a779_91bec2b9e8dd4d0f8663d83b3c9e2d4c~mv2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/04a779_91bec2b9e8dd4d0f8663d83b3c9e2d4c~mv2.jpg"
                    alt="beger"
                    width={400}
                    height={400}
                    priority
                    sx={{
                      mt: 2,
                    }}
                  />
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
                  <Button
                    sx={{
                      color: "white",
                      bgcolor: "#018294",
                      p: 1,
                      fontWeight: "bold",
                      borderRadius: "50px",
                      boxShadow: "4px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                      ...styles.btnHover,
                    }}
                  >
                    <Typography variant="h4" sx={{ pl: 2, pr: 2 }}>
                      {" "}
                      ออกแบบกับผนัง
                    </Typography>
                  </Button>
                  <IconButton
                    sx={{
                      alignSelf: "flex-end",
                    }}
                  >
                    <ShoppingBagOutlinedIcon sx={{ fontSize: "2vw" }} />
                  </IconButton>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box sx={{ borderBottom: "1px solid #BBB", pb: 2 }}>
                  <Typography
                    variant="h4"
                    sx={{ mt: 2, color: "#018294", fontWeight: "bold" }}
                  >
                    Beger Woodstain Gloss สีย้อมไม้ เบเยอร์ ชนิดเงา ขนาดแกลลอน
                  </Typography>
                  <Box
                    sx={{
                      width: "112px",
                      height: "11px",
                      bgcolor: "#FE616A",
                      mt: 2,
                    }}
                  ></Box>
                  <Typography sx={{ color: "#7A7A7A", mt: 2 }}>
                    สีย้อมไม้ยอดขายอันดับ 1 จากเบเยอร์
                    ที่ได้รับความไว้ใจจากช่างไม้มืออาชีพนานนับสิบปี
                    เหมาะกับงานไม้แนวตั้งทั้งภายนอกและภายใน เช่น ผนังไม้ ระแนง
                    วงกบ ฯลฯ ช่วยป้องกันปัญหาไม้เสื่อมสภาพ สีลอกล่อน เกิดเชื้อรา
                    และแมลงกัดกินไม้ โดย Beger WoodStain
                    จะช่วยปกป้องเนื้อไม้จากทุกสภาวะอากาศ ป้องกันรังสี UV
                    เนื้อสีซึมลึกถึงเนื้อไม้ และยึดเกาะแน่นด้วย Super Resin
                    ทำให้ฟิล์มยืดหยุ่นตัวไม่แตกร้าว มีหลายเฉดสี
                    ฟิล์มสีเงาโปร่งแสงโชว์ลายไม้ 100%
                    นอกจากนี้คุณยังมั่นใจในคุณภาพด้วย มอก. 1513-2554
                    (ห้ามใช้ทาพื้นไม้)
                  </Typography>
                </Box>
                <Box sx={{ pb: 2 }}>
                  <Typography
                    variant="h4"
                    sx={{ mt: 2, color: "#018294", fontWeight: "bold" }}
                  >
                    คุณสมบัติ
                  </Typography>
                  <Box
                    sx={{
                      width: "112px",
                      height: "11px",
                      bgcolor: "#FE616A",
                      mt: 2,
                    }}
                  ></Box>
                  <List sx={{ color: "#7A7A7A", mt: 2 }}>
                    {features.map((feature, index) => (
                      <ListItem key={index}>
                        <ListItemText primary={feature} />
                      </ListItem>
                    ))}
                  </List>

                  <Box
                    sx={{
                      borderRadius: "25px",
                      border: "1px solid #B4B4B4",
                      bgcolor: "#FFF",
                      boxShadow:
                        "4px 4px 25px 0px rgba(0, 0, 0, 0.25), 4px 4px 25px 0px rgba(0, 0, 0, 0.25)",
                      pl: 4,
                      pr: 4,
                      pt: 2,
                      pb: 4,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        borderBottom: "1px solid #BBB",
                        pt: 2,
                        pb: 2,
                      }}
                    >
                      <Typography sx={{ fontWeight: "bold" }}>
                        พื้นที่ใช้งาน
                      </Typography>
                      <Typography>ภายนอก, ภายนอก</Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        borderBottom: "1px solid #BBB",
                        pt: 2,
                        pb: 2,
                      }}
                    >
                      <Typography sx={{ fontWeight: "bold" }}>
                        พื้นผิว
                      </Typography>
                      <Typography>ไม้</Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        borderBottom: "1px solid #BBB",
                        pt: 2,
                        pb: 2,
                      }}
                    >
                      <Typography sx={{ fontWeight: "bold" }}>
                        ฟังก์ชัน
                      </Typography>
                      <Typography>ฟิล์มสีเงาโปร่งแสงโชว์ลายไม้</Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        borderBottom: "1px solid #BBB",
                        pt: 2,
                        pb: 2,
                      }}
                    >
                      <Typography sx={{ fontWeight: "bold" }}>เกรด</Typography>
                      <Typography>มาตรฐาน</Typography>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        borderBottom: "1px solid #BBB",
                        pt: 2,
                        pb: 2,
                      }}
                    >
                      <Typography sx={{ fontWeight: "bold" }}>
                        ขนาดแกลลอน
                      </Typography>
                      <Typography> 1/4 แกลลอน , 1 แกลลอน</Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </ThemeProvider>
    </Homelayout>
  );
}
