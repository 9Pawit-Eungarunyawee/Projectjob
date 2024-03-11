import Homelayout from "@/components/homelayout";
import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import roomexample from "../../../public/img/roomexample.png";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Breadcrumbs,
  IconButton,
  TextField,
  MenuItem,
  Snackbar,
  Alert,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useRouter } from "next/router";
import { useAuthContext } from "@/context/AuthContext";
import { getCollection } from "../../firebase/getData";
import { debounce } from "lodash";
import { addCartMaterial } from "@/firebase/addCart";
import { Numbers } from "@mui/icons-material";
import searchData from "@/firebase/searchData";
function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function Materialdetail() {
  const [documentData, setDocumentData] = React.useState(null);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [colorData, setColorData] = React.useState(null);
  const [priceData, setPriceData] = React.useState("");
  const [sizeData, setSizeData] = React.useState("");
  const router = useRouter();
  const productId = JSON.parse(router.query.productId);
  const [number, setNumber] = React.useState(1);
  const [selectedPrice, setSelectedPrice] = React.useState(null);
  const [alert, setAlert] = React.useState(null);
  const user = useAuthContext();
  const goBack = () => {
    window.history.back();
  };
  React.useEffect(() => {
    // ตรวจสอบว่ามีไซส์ที่ตรงกับ sizeData หรือไม่
    if (documentData) {
      const matchingSize = documentData[0].productSizes.find(
        (price) => price.size === sizeData
      );

      // ถ้ามีไซส์ที่ตรงกับ sizeData ก็กำหนดราคาให้กับ state
      if (matchingSize) {
        setSelectedPrice(matchingSize.price);
      } else {
        // ถ้าไม่มีไซส์ที่ตรงกับ sizeData ก็กำหนดให้ selectedPrice เป็น null
        setSelectedPrice(null);
      }
    }
  }, [documentData, sizeData]);

  // นำค่าราคาที่เลือกไปใช้ที่ไหนก็ได้
  React.useEffect(() => {
    console.log(selectedPrice);
  }, [selectedPrice]);
  const updatecart = async (product_id) => {
    const cart = {
      product_id: product_id, // ใช้อ้างอิง
      user_id: user.user.uid,
      price: selectedPrice,
      amount: number,
      size: sizeData,
    };
    const result = await addCartMaterial("cart", cart);
    if (result) {
      setAlert(
        <Alert severity="success" onClose={handleClose}>
          เพิ่มสินค้าลงตะกร้าเรียบร้อย
        </Alert>
      );
      setOpen(true);
    } else {
      setAlert(
        <Alert severity="error" onClose={handleClose}>
          ผิดพลาด! ไม่สามารถเพิ่มสินค้าลงตะกร้าได้
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
  const format = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  const handleAdd = () => {
    const count = number + 1;
    // ตรวจสอบว่าจำนวนที่ต้องการเพิ่มเข้าไปไม่เกินจำนวนสินค้าที่มี
    const maxAmount =
      documentData && documentData.length > 0
        ? documentData[0].productSizes[0].amount
        : 0;
    if (count <= maxAmount) {
      setNumber(count);
    } else {
      // แจ้งเตือนหรือจัดการเพิ่มเติมเมื่อมีการเพิ่มจำนวนสินค้าเกินจำนวนที่มีอยู่
      console.log("Cannot add more items, maximum amount reached");
    }
  };
  const handleRemove = () => {
    if (number === 1) {
      return;
    }
    const count = number - 1;
    setNumber(count);
  };
  React.useEffect(() => {
    handleSearch("");
  }, []);
  //ดึงของ
  const debouncedSearchProduct = debounce(async (term) => {
    try {
      const collectionName = "products";
      const field = "name";
      const results = await searchData(collectionName, field, term);
      const filteredResults = results.filter(
        (doc) =>
          doc.id === productId &&
          doc.isMaterial === true &&
          doc.status === true &&
          doc.delete === null
      );

      setDocumentData(filteredResults);
    } catch (error) {
      console.error("Error searching data:", error);
    }
  }, 500);
  const handleSearch = (term) => {
    setSearchTerm(term);
    debouncedSearchProduct(term);
  };
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
  console.log("User:", user.user.uid);
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
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            {alert}
          </Snackbar>
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
                  href="/catalog"
                >
                  แคตตาล็อก
                </Link>
                <Link
                  style={{ textDecoration: "none", color: "inherit" }}
                  sx={{
                    color: "inherit",
                    "&:hover": { textDecoration: "underline" },
                  }}
                  href={`/productpage?catalogData=${router.query.catalogData}`}
                >
                  วัสดุภัณฑ์
                </Link>
                {documentData &&
                  documentData.map((item) => (
                    <Typography key={item.id} color="text.primary">
                      {item.name}
                    </Typography>
                  ))}
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
                <Typography>ย้อนกลับ</Typography>
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
              {documentData &&
                documentData.map((item) => (
                  <Grid item key={item.id} xs={12} sm={12} md={6}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        mb: 2,
                      }}
                    >
                      <Image
                        src={item.img}
                        alt={item.name}
                        width={400}
                        height={400}
                        priority
                        sx={{
                          mt: 2,
                        }}
                      />
                    </Box>
                  </Grid>
                ))}
              {documentData &&
                documentData.map((item, index) => (
                  <Grid item key={index} xs={12} md={6}>
                    <Box sx={{ borderBottom: "1px solid #BBB", pb: 2 }}>
                      <Typography
                        variant="h4"
                        sx={{ mt: 2, color: "#018294", fontWeight: "bold" }}
                      >
                        {item.name}
                      </Typography>

                      <Box
                        sx={{
                          width: "112px",
                          height: "11px",
                          bgcolor: "#FE616A",
                          mt: 2,
                          mb: 2,
                        }}
                      ></Box>

                      <Typography
                        sx={{
                          color: "#7A7A7A",
                          mt: 2,
                          overflowWrap: "break-word",
                        }}
                      >
                        {item.detail}
                      </Typography>
                    </Box>
                    <Typography
                      sx={{
                        display: "flex",
                        mt: 2,
                        mb: 2,
                        fontSize: { xs: "6vw", sm: "4vw", md: "2vw" },
                      }}
                    >
                      ราคา :
                      {item.productSizes.map((price, index) => (
                        <span
                          key={index}
                          style={{
                            fontWeight: "bold",
                            color: "#FE616A",
                            marginLeft: "0.5em",
                            marginRight: "0.5em",
                            display:
                              price.size === sizeData ? "inherit" : "none",
                          }}
                        >
                          {format(price.price)}
                        </span>
                      ))}
                      บาท
                    </Typography>

                    <TextField
                      value={sizeData}
                      onChange={(e) => setSizeData(e.target.value)}
                      fullWidth
                      select
                      label="ขนาด"
                      sx={{ mt: 1, mb: 1 }}
                      required
                    >
                      <MenuItem value="">กรุณาเลือก</MenuItem>
                      {item.productSizes.map((size, index) => (
                        <MenuItem key={index} value={size.size}>
                          {size.size}
                        </MenuItem>
                      ))}
                    </TextField>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        mb: 2,
                      }}
                    >
                      <Typography>จำนวน : </Typography>

                      <IconButton onClick={handleRemove}>
                        <RemoveCircleOutlineIcon
                          sx={{
                            color: "#018294",
                            fontSize: { xs: "6vw", sm: "4vw", md: "2vw" },
                          }}
                        />
                      </IconButton>
                      <Typography sx={{ p: 2 }}>{number}</Typography>
                      <IconButton onClick={handleAdd}>
                        <AddCircleOutlineIcon
                          sx={{
                            color: "#018294",
                            fontSize: { xs: "6vw", sm: "4vw", md: "2vw" },
                          }}
                        />
                      </IconButton>
                      <Typography>สินค้ามีทั้งหมด : </Typography>
                      <Typography>
                        {item.productSizes[0].amount
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      </Typography>
                      <Typography> ชิ้น </Typography>
                    </Box>
                    <Button
                      fullWidth
                      sx={{
                        color: "white",
                        bgcolor: "#018294",
                        p: 1,
                        fontWeight: "bold",
                        boxShadow: "4px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                        ...styles.btnHover,
                        mr: 1,
                      }}
                      onClick={() => updatecart(item.id)}
                    >
                      <ShoppingCartOutlinedIcon />
                      <Typography
                        variant="h4"
                        sx={{
                          p: 2,
                          fontSize: { xs: "3vw", sm: "2vw", md: "1vw" },
                        }}
                      >
                        เพิ่มไปยังรถเข็น
                      </Typography>
                    </Button>
                    <hr />
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
                          mb: 2,
                        }}
                      ></Box>

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
                            ขนาด
                          </Typography>

                          <Typography>
                            {item.productSizes.map((size, index) => (
                              <span key={index}>{size.size} </span>
                            ))}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                ))}
            </Grid>
          </Box>
        </Container>
      </ThemeProvider>
    </Homelayout>
  );
}
