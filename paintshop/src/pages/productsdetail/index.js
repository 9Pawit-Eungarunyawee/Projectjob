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
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { useRouter } from "next/router";
import { getCollection } from "../../firebase/getData";
import { Numbers } from "@mui/icons-material";
function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function Productsdetail() {
  const [documentData, setDocumentData] = React.useState(null);
  const [colorData, setColorData] = React.useState(null);
  const [sizeData, setSizeData] = React.useState("");
  const router = useRouter();
  const catalogId = JSON.parse(router.query.catalogData);
  const productId = JSON.parse(router.query.productId);
  const colorId = JSON.parse(router.query.colorId);
  const [number, setNumber] = React.useState(1);
  const format = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  const handleAdd = () => {
    const count = number + 1;
    setNumber(count);
  };
  const handleRemove = () => {
    if (number === 1) {
      return;
    }
    const count = number - 1;
    setNumber(count);
  };
  React.useEffect(() => {
    fetchAllData();
    fetchColorData();
  }, [productId, colorId]);
  const fetchColorData = async () => {
    const collection = "colors";

    if (colorId) {
      console.log("Fetching data for colorId:", colorId);

      try {
        const { result: querySnapshot, error } = await getCollection(
          collection,
          {
            where: [{ field: "color_id", value: colorId }],
          }
        );
        if (error) {
          console.error("Error fetching collection:", error);
        } else {
          const data = [];
          querySnapshot.forEach((doc) => {
            console.log("Color ID:", doc.id);
            const catalogIdFromProduct = doc.data().catalog_id.id;

            if (catalogIdFromProduct === catalogId) {
              console.log("Matching color found:", doc.data());
              if (doc.id === colorId) {
                data.push({ id: doc.id, ...doc.data() });
              }
            }
          });
          setColorData(data);
          console.log("test:", data);
        }
      } catch (error) {
        console.error("Error fetching collection:", error);
      }
    }
  };
  const fetchAllData = async () => {
    const collection = "products";

    if (catalogId && productId && colorId) {
      console.log("Fetching data for catalogId:", catalogId);
      console.log("Fetching data for productId:", productId);
      console.log("Fetching data for colorId:", colorId);

      try {
        const { result: querySnapshot, error } = await getCollection(
          collection,
          {
            where: [
              { field: "catalog_id", value: catalogId },
              { field: "id", value: productId },
              { field: "color_id", value: colorId },
            ],
          }
        );

        if (error) {
          console.error("Error fetching collection:", error);
        } else {
          const data = [];
          querySnapshot.forEach((doc) => {
            console.log("Document ID:", doc.id);
            const catalogIdFromProduct = doc.data().catalog_id.id;
            if (catalogIdFromProduct === catalogId) {
              console.log("Matching product found:", doc.data());
              setSizeData(doc.data().productSizes[0].size);
              if (doc.id === productId) {
                data.push({ id: doc.id, ...doc.data() });
              }
            }
          });
          setDocumentData(data);
          console.log(data);
        }
      } catch (error) {
        console.error("Error fetching collection:", error);
      }
    }
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
                  ผลิตภัณฑ์
                </Link>
                <Link
                  style={{ textDecoration: "none", color: "inherit" }}
                  sx={{
                    color: "inherit",
                    "&:hover": { textDecoration: "underline" },
                  }}
                  href={`/colorselect?catalogData=${router.query.catalogData}&productId=${router.query.productId}`}
                >
                  เลือกสี
                </Link>
                {documentData &&
                  documentData.map((item) => (
                    <Typography key={item.id} color="text.primary">
                      {item.name}
                    </Typography>
                  ))}
              </Breadcrumbs>
            </div>
            <Link
              style={{ textDecoration: "none" }}
              sx={{
                color: "inherit",
                "&:hover": { textDecoration: "underline" },
              }}
              href={`/colorselect?catalogData=${router.query.catalogData}&productId=${router.query.productId}`}
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
                  <Typography>ย้อนกลับ</Typography>
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

                    <Box
                      sx={{ display: "flex", justifyContent: "space-evenly" }}
                    >
                      <Button
                        sx={{
                          color: "white",
                          bgcolor: "#018294",
                          p: 1,
                          fontWeight: "bold",
                          borderRadius: "50px",
                          boxShadow: "4px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                          ...styles.btnHover,
                          mr: 1,
                        }}
                      >
                        <Typography
                          variant="h4"
                          sx={{
                            pl: 2,
                            pr: 2,
                            fontSize: { xs: "4vw", sm: "3vw", md: "2vw" },
                          }}
                        >
                          ออกแบบกับผนัง
                        </Typography>
                      </Button>
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
                      variant="h4"
                      sx={{
                        mt: 2,
                        color: "#018294",
                        fontWeight: "bold",
                      }}
                    >
                      ภาพตัวอย่าง
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
                    {colorData &&
                      colorData.map((colors, index) => (
                        <Box
                          key={index}
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            mb: 2,
                          }}
                        >
                          <Box>
                            <Image
                              src={roomexample}
                              alt="ภาพตัวอย่าง"
                              priority
                              width={400}
                              height={250}
                              style={{ backgroundColor: colors.code }}
                            ></Image>
                          </Box>
                        </Box>
                      ))}

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
                        {item.productSizes[0].quantity
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
                    >
                      <ShoppingBagOutlinedIcon />
                      <Typography
                        variant="h4"
                        sx={{
                          p: 2,
                          fontSize: { xs: "3vw", sm: "2vw", md: "1vw" },
                        }}
                      >
                        เพิ่มไปยังตะกร้า
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
                            พื้นที่ใช้งาน
                          </Typography>
                          <Typography>{item.area}</Typography>
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
                            เกรด
                          </Typography>
                          <Typography>{item.grade}</Typography>
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
                            ฟิล์มสี
                          </Typography>
                          <Typography>{item.flim}</Typography>
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
