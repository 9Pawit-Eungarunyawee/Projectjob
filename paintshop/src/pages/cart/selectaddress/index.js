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
} from "@mui/material";
import Link from "next/link";
import Addressdialog from "./dialog";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import searchUser from "@/firebase/searchData";
import { useRouter } from "next/router";
import { debounce } from "lodash";
import { useAuthContext } from "@/context/AuthContext";
import Editaddress from "./editdialog";
function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}
export default function Selectaddress() {
  const [addressData, setAddressData] = React.useState(null);
  const router = useRouter();
  const user = useAuthContext();
 

  const handleClickOpen = () => {
    setOpen(true);
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
  };
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
                                    {data.address} อำเภอ {data.amphure} ตำบล{" "}
                                    {data.tambon} จังหวัด {data.province}
                                  </Typography>
                                </Grid>
                              </Grid>
                            ))}
                        </Box>
                      </CardContent>
                    </Card>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={3}>
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
                      </Box>
                      <Button
                        variant="contained"
                        sx={{ p: 1, bgcolor: "#FE616A" }}
                        fullWidth
                        onClick={handleConfirmOrder}
                      >
                        ยืนยันคำสั่งซื้อ
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
