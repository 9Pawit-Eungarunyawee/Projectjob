import * as React from "react";
import Homelayout from "@/components/homelayout";
import { Box, Typography, Container, Grid, IconButton } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
export default function Beger() {
  const styles = {
    cardHover: {
      transition: "box-shadow 0.3s",
      "&:hover": {
        cursor: "pointer",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      },
    },
    filterHover: {
      "&:hover": {
        color: "red",
        transition: "0.2s",
      },
    },
  };
  return (
    <>
      <Homelayout>
        <Container
          maxWidth="false"
          sx={{
            display: "flex",
            justifyContent: "center",
            bgcolor: "#ABABAB",
          }}
        >
          <Box
            sx={{
              p: 3,
              width: "70vw",
            }}
          >
            <Link
              href="/"
              style={{
                textDecoration: "none",
                paddingRight: "1vw",
                color: "black",
              }}
              passHref
            >
              สีน้ำทาอาคาร
            </Link>
            <Link
              href="/"
              style={{
                textDecoration: "none",
                paddingRight: "1vw",
                color: "black",
              }}
              passHref
            >
              สีงานเหล็กและไม้
            </Link>
            <Link
              href="/"
              style={{
                textDecoration: "none",
                paddingRight: "1vw",
                color: "black",
              }}
              passHref
            >
              สีตกแต่งพิเศษ
            </Link>
            <Link
              href="/"
              style={{
                textDecoration: "none",
                paddingRight: "1vw",
                color: "black",
              }}
              passHref
            >
              เคมีภัณฑ์ก่อสร้าง
            </Link>
          </Box>
        </Container>

        <Container
          maxWidth={false}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box sx={{ p: 3, width: "70vw" }}>
            <Grid container spacing={2}>
              <Grid item xs={6} md={3}>
                <Box
                  sx={{
                    p: 2,
                    bgcolor: "white",
                    border: "1px solid #7a7a7a",
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: "bold",
                      pb: 2,
                      color: "#7A7A7A",
                      fontSize: "20px",
                    }}
                  >
                    เลือกยี่ห้อ
                  </Typography>
                  <Box
                    sx={{
                      borderTop: "1px solid #7a7a7a",
                      pt: 2,
                    }}
                  >
                    <Link
                      href="/"
                      style={{
                        display: "block",
                        textDecoration: "none",
                        color: "#7A7A7A",
                        paddingTop: "0.5vw",
                        fontSize: "18px",
                      }}
                      sx={{ ...styles.filterHover }}
                      passHref
                    >
                      สีเบเยอร์
                    </Link>
                    <Link
                      href="/"
                      style={{
                        display: "block",
                        textDecoration: "none",
                        color: "#7A7A7A",
                        paddingTop: "1vw",
                        fontSize: "18px",
                      }}
                      passHref
                    >
                      สีทีโอเอ
                    </Link>
                    <Link
                      href="/"
                      style={{
                        display: "block",
                        textDecoration: "none",
                        color: "#7A7A7A",
                        paddingTop: "1vw",
                        fontSize: "18px",
                      }}
                      passHref
                    >
                      สีโจตัน
                    </Link>
                    <Link
                      href="/"
                      style={{
                        display: "block",
                        textDecoration: "none",
                        color: "#7A7A7A",
                        paddingTop: "1vw",
                        fontSize: "18px",
                      }}
                      passHref
                    >
                      สีกัปตัน
                    </Link>
                  </Box>
                </Box>

                <Box
                  sx={{
                    mt: 2,
                    p: 2,
                    bgcolor: "white",
                    border: "1px solid #7a7a7a",
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: "bold",
                      pb: 2,
                      color: "#7A7A7A",
                      fontSize: "20px",
                    }}
                  >
                    เลือกพื้นที่ใช้งาน
                  </Typography>
                  <Box sx={{ borderTop: "1px solid #7a7a7a", pt: 2 }}>
                    <Link
                      href="/"
                      style={{
                        display: "block",
                        textDecoration: "none",
                        color: "#7A7A7A",
                        paddingTop: "0.5vw",
                        fontSize: "18px",
                      }}
                      passHref
                    >
                      ภายใน
                    </Link>
                    <Link
                      href="/"
                      style={{
                        display: "block",
                        textDecoration: "none",
                        color: "#7A7A7A",
                        paddingTop: "1vw",
                        fontSize: "18px",
                      }}
                      passHref
                    >
                      ภายนอก
                    </Link>
                    <Link
                      href="/"
                      style={{
                        display: "block",
                        textDecoration: "none",
                        color: "#7A7A7A",
                        paddingTop: "1vw",
                        fontSize: "18px",
                      }}
                      passHref
                    >
                      ฝ้าเพดาน
                    </Link>
                  </Box>
                </Box>

                <Box
                  sx={{
                    mt: 2,
                    p: 2,
                    bgcolor: "white",
                    border: "1px solid #7a7a7a",
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: "bold",
                      pb: 2,
                      color: "#7A7A7A",
                      fontSize: "20px",
                    }}
                  >
                    ฟังก์ชัน
                  </Typography>
                  <Box sx={{ borderTop: "1px solid #7a7a7a", pt: 2 }}>
                    <Link
                      href="/"
                      style={{
                        display: "block",
                        textDecoration: "none",
                        color: "#7A7A7A",
                        paddingTop: "0.5vw",
                        fontSize: "18px",
                      }}
                      passHref
                    >
                      สีทับหน้า
                    </Link>
                    <Link
                      href="/"
                      style={{
                        display: "block",
                        textDecoration: "none",
                        color: "#7A7A7A",
                        paddingTop: "1vw",
                        fontSize: "18px",
                      }}
                      passHref
                    >
                      สีรองพื้น
                    </Link>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={6} md={9}>
                <Box sx={{ p: 2 }}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: "bold",
                      pb: 2,
                      color: "#018294",
                      fontSize: "30px",
                    }}
                  >
                    ผลิตภัณฑ์
                  </Typography>

                  <Box
                    sx={{ width: "58px", height: "3px", bgcolor: "#FE616A" }}
                  ></Box>

                  <Box sx={{ display: "flex", mt: 2 }}>
                    <Box
                      sx={{
                        backgroundColor: "#FFFFFF",
                        borderRadius: "10px",
                        p: 2,
                        display: "flex",
                        flexDirection: "column",
                        width: "20vw",
                        border: "1px solid #7A7A7A",
                        mr: 2,
                        ...styles.cardHover,
                      }}
                    >
                      <IconButton
                        sx={{
                          alignSelf: "flex-end",
                        }}
                      >
                        <ShoppingBagOutlinedIcon />
                      </IconButton>

                      <Link href="/productsdetail" passHref>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <Image
                            src="https://static.wixstatic.com/media/04a779_91bec2b9e8dd4d0f8663d83b3c9e2d4c~mv2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/04a779_91bec2b9e8dd4d0f8663d83b3c9e2d4c~mv2.jpg"
                            alt="beger"
                            width={200}
                            height={200}
                            priority
                            sx={{
                              mt: 2,
                            }}
                          />
                        </Box>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: "bold",
                            pb: 2,
                            color: "#018294",
                            fontSize: "19px",
                            textAlign: "left",
                          }}
                        >
                          Beger Woodstain Gloss
                        </Typography>
                        <Box
                          sx={{
                            width: "58px",
                            height: "3px",
                            bgcolor: "#FE616A",
                            ml: 0,
                          }}
                        ></Box>
                        <Typography
                          sx={{
                            color: "#FE616A",
                            fontWeight: "bold",
                            textAlign: "left",
                            mt: 1,
                          }}
                        >
                          ฿1,970
                        </Typography>
                      </Link>
                    </Box>

                    <Box
                      sx={{
                        backgroundColor: "#FFFFFF",
                        borderRadius: "10px",
                        p: 2,
                        display: "flex",
                        flexDirection: "column",
                        width: "20vw",
                        border: "1px solid #7A7A7A",
                        mr: 2,
                        ...styles.cardHover,
                      }}
                    >
                      <IconButton
                        sx={{
                          alignSelf: "flex-end",
                        }}
                      >
                        <ShoppingBagOutlinedIcon />
                      </IconButton>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <Image
                          src="https://static.wixstatic.com/media/04a779_91bec2b9e8dd4d0f8663d83b3c9e2d4c~mv2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/04a779_91bec2b9e8dd4d0f8663d83b3c9e2d4c~mv2.jpg"
                          alt="beger"
                          width={200}
                          height={200}
                          priority
                          sx={{
                            mt: 2,
                          }}
                        />
                      </Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: "bold",
                          pb: 2,
                          color: "#018294",
                          fontSize: "19px",
                          textAlign: "left",
                        }}
                      >
                        Beger Woodstain Gloss
                      </Typography>
                      <Box
                        sx={{
                          width: "58px",
                          height: "3px",
                          bgcolor: "#FE616A",
                          ml: 0,
                        }}
                      ></Box>
                      <Typography
                        sx={{
                          color: "#FE616A",
                          fontWeight: "bold",
                          textAlign: "left",
                          mt: 1,
                        }}
                      >
                        ฿1,970
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        backgroundColor: "#FFFFFF",
                        borderRadius: "10px",
                        p: 2,
                        display: "flex",
                        flexDirection: "column",
                        width: "20vw",
                        border: "1px solid #7A7A7A",
                        mr: 1,
                        ...styles.cardHover,
                      }}
                    >
                      <IconButton
                        sx={{
                          alignSelf: "flex-end",
                        }}
                      >
                        <ShoppingBagOutlinedIcon />
                      </IconButton>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <Image
                          src="https://static.wixstatic.com/media/04a779_91bec2b9e8dd4d0f8663d83b3c9e2d4c~mv2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/04a779_91bec2b9e8dd4d0f8663d83b3c9e2d4c~mv2.jpg"
                          alt="beger"
                          width={200}
                          height={200}
                          priority
                          sx={{
                            mt: 2,
                          }}
                        />
                      </Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: "bold",
                          pb: 2,
                          color: "#018294",
                          fontSize: "19px",
                          textAlign: "left",
                        }}
                      >
                        Beger Woodstain Gloss
                      </Typography>
                      <Box
                        sx={{
                          width: "58px",
                          height: "3px",
                          bgcolor: "#FE616A",
                          ml: 0,
                        }}
                      ></Box>
                      <Typography
                        sx={{
                          color: "#FE616A",
                          fontWeight: "bold",
                          textAlign: "left",
                          mt: 1,
                        }}
                      >
                        ฿1,970
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Homelayout>
    </>
  );
}
