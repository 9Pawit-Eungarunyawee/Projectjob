import Layout from "@/components/layout";
import { getCollection } from "@/firebase/getData";
import getDoument from "@/firebase/getData";
import {
  Alert,
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  MenuItem,
  Snackbar,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import Image from "next/image";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { Fragment, useEffect, useState } from "react";
import editData from "@/firebase/editData";
import { useRouter } from "next/router";
import CloseIcon from "@mui/icons-material/Close";
export default function EditProduct() {
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
  });
  const [imageUrl, setImageUrl] = useState("");

  const [productSizes, setProductSizes] = useState([
    { size: "", amount: "", price: "", cost: "" },
  ]);
  const [area, setArea] = useState("");
  const [status, setStatus] = useState(false);
  const [name, setName] = useState("");
  const [catalogId, setCatalogId] = useState("");
  const [flim, setFlim] = useState("");
  const [grade, setGrade] = useState("");
  const [detail, setDetail] = useState("");

  const [alert, setAlert] = useState(null);

  const goBack = () => {
    window.history.back();
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.checked);
  };
  const addInputSet = () => {
    setProductSizes([
      ...productSizes,
      { size: "", amount: "", price: "", cost: "" },
    ]);
  };
  useEffect(() => {
    console.log(productSizes);
  }, [productSizes]);
  const handleInputChange = (e, index, property) => {
    const newInputSets = [...productSizes];
    newInputSets[index][property] = e.target.value;
    setProductSizes(newInputSets);
  };

  const removeInputSet = (index) => {
    if (productSizes.length > 1) {
      const newInputSets = [...productSizes];
      newInputSets.splice(index, 1); // ลบชุดที่มีดัชนี index
      setProductSizes(newInputSets);
    } else if (productSizes.length <= 1) {
      setAlert(
        <Alert severity="error" onClose={handleClose}>
          ต้องมีรูปแบบสินค้าอย่างน้อย 1 รูปแบบ
        </Alert>
      );
      setOpen(true);
    }
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

  useEffect(() => {
    fetchDataCatalog();
    fetchProductData();
  }, []);

  const [catalogData, setCatalogData] = useState(null);
  const fetchDataCatalog = async () => {
    const collectionName = "catalog";
    const { result, error } = await getCollection(collectionName);
    if (error) {
      console.error("Error fetching document:", error);
    } else if (result) {
      const catalog = result.docs.map((doc) => ({
        id: doc.id,
        name: doc.data().name,
      }));
      setCatalogData(catalog);
    }
  };
  const router = useRouter();
  const product_id = JSON.parse(router.query.product_id);
  const fetchProductData = async () => {
    const collectionName = "products";
    const { result, error } = await getDoument(collectionName, product_id);
    if (error) {
      console.error("Error fetching document:", error);
    } else if (result) {
      const productData = result.data();
      setName(productData.name);
      setArea(productData.area);
      setFlim(productData.flim);
      setGrade(productData.grade);
      setDetail(productData.detail);
      setProductSizes(productData.productSizes);
      setImageUrl(productData.img);
      setStatus(productData.status);
      setCatalogId(productData.catalog_id.id);
    }
  };
  const handleForm = async (event) => {
    event.preventDefault();

    const product = {
      name: name,
      catalog_id: catalogId,
      detail: detail,
      flim: flim,
      grade: grade,
      area: area,
      status: status,
      img: imageUrl,
      productSizes: productSizes,
    };
    const result = await editData("products", product_id, product);
    if (result) {
      setAlert(
        <Alert severity="success" onClose={handleClose}>
          แก้ไขข้อมูลสำเร็จ{" "}
        </Alert>
      );
      setOpen(true);
    } else {
      setAlert(
        <Alert severity="error" onClose={handleClose}>
          ผิดพลาด! ไม่สามารถแก้ไขข้อมูลได้
        </Alert>
      );
      setOpen(true);
    }
  };
  const [open, setOpen] = useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Layout>
      <ThemeProvider theme={theme}>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          {alert}
        </Snackbar>
        <Typography sx={{ fontSize: "2rem", fontWeight: "600", mt: 4 }}>
          แก้ไขสินค้า
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
        <Grid
          container
          spacing={0}
          sx={{
            mt: 3,
            mb: 5,
            backgroundColor: "#fff",
            p: 2,
            borderRadius: "10px",
            boxShadow: "4px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          }}
        >
          <Grid item xs={12} sm={7}>
            <form onSubmit={handleForm} className="form">
              <FormControl fullWidth>
                <Typography>แคตตาล็อก:</Typography>
                <TextField
                  value={catalogId}
                  onChange={(e) => setCatalogId(e.target.value)}
                  size="small"
                  select
                  label="เลือกแคตตาล็อก"
                  required
                >
                  <MenuItem value="">กรุณาเลือกแคตตาล็อก</MenuItem>
                  {catalogData &&
                    catalogData.map((catalog) => (
                      <MenuItem key={catalog.id} value={catalog.id}>
                        {catalog.name}
                      </MenuItem>
                    ))}
                </TextField>
                <Typography sx={{ mt: 1 }}>ข้อมูลสินค้า:</Typography>
                <TextField
                  variant="outlined"
                  value={name}
                  label="ชื่อสินค้า"
                  fullWidth
                  required
                  size="small"
                  sx={{ mt: 1, mb: 1 }}
                  onChange={(e) => setName(e.target.value)}
                />

                <TextField
                  value={String(area)}
                  onChange={(e) => setArea(e.target.value)}
                  size="small"
                  select
                  label="พื้นที่ใช้งาน"
                  sx={{ mt: 1, mb: 1 }}
                  required
                >
                  <MenuItem value={"สีทาภายนอก"}>สีทาภายนอก</MenuItem>
                  <MenuItem value={"สีทาภายใน"}>สีทาภายใน</MenuItem>
                  <MenuItem value={"สีน้ำมัน"}>สีน้ำมัน</MenuItem>
                  <MenuItem value={"สีย้อมไม้"}>สีย้อมไม้</MenuItem>
                </TextField>
                <TextField
                  value={flim}
                  onChange={(e) => setFlim(e.target.value)}
                  size="small"
                  select
                  label="ฟิล์ม"
                  sx={{ mt: 1, mb: 1 }}
                  required
                >
                  <MenuItem value={"ฟิล์มสีชนิดเงา"}>ฟิล์มสีชนิดเงา</MenuItem>
                  <MenuItem value={"ฟิล์มสีชนิดกึ่งเงา"}>
                    ฟิล์มสีชนิดกึ่งเงา
                  </MenuItem>
                  <MenuItem value={"ฟิล์มสีชนิดเนียน"}>
                    ฟิล์มสีชนิดเนียน{" "}
                  </MenuItem>
                  <MenuItem value={"ฟิล์มสีชนิดด้าน"}>ฟิล์มสีชนิดด้าน</MenuItem>
                </TextField>
                <TextField
                  value={grade}
                  onChange={(e) => setGrade(e.target.value)}
                  size="small"
                  select
                  label="เกรด"
                  sx={{ mt: 1, mb: 1 }}
                  required
                >
                  <MenuItem value={"เกรดอัลตร้าพรีเมี่ยม อายุการใช้งาน 15 ปี"}>
                    เกรดอัลตร้าพรีเมี่ยม อายุการใช้งาน 15 ปี
                  </MenuItem>
                  <MenuItem value={"เกรดพรีเมี่ยม อายุการใช้งาน 10 ปี"}>
                    เกรดพรีเมี่ยม อายุการใช้งาน 10 ปี
                  </MenuItem>
                  <MenuItem value={"เกรดมาตรฐานบน 5-7 ปี"}>
                    เกรดมาตรฐานบน 5-7 ปี
                  </MenuItem>
                  <MenuItem value={"เกรดมาตรฐาน 3-5 ปี"}>
                    เกรดมาตรฐาน 3-5 ปี
                  </MenuItem>
                  <MenuItem value={"เกรดประหยัด 1-3 ปี"}>
                    เกรดประหยัด 1-3 ปี
                  </MenuItem>
                </TextField>

                <TextField
                  value={detail}
                  onChange={(e) => setDetail(e.target.value)}
                  variant="outlined"
                  label="รายละเอียดสินค้า"
                  fullWidth
                  required
                  rows={4}
                  multiline
                  size="small"
                  sx={{ mt: 1, mb: 1 }}
                />
                <Typography> รูปแบบสินค้า: </Typography>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{ mr: 2, mb: 2, mt: 2, width: "200px" }}
                  onClick={addInputSet}
                >
                  เพิ่มรูปแบบสินค้า
                </Button>
                {productSizes.map((productSizes, index) => (
                  <Box
                    key={index}
                    sx={{
                      borderRadius: "10px",
                      mb: 3,
                      p: 2,
                      boxShadow:
                        "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
                    }}
                  >
                    <Typography> รูปแบบที่:{index + 1} </Typography>
                    <TextField
                      value={productSizes.size}
                      onChange={(e) => handleInputChange(e, index, "size")}
                      size="small"
                      select
                      fullWidth
                      label="ขนาด"
                      sx={{ mt: 1, mb: 1 }}
                      required
                    >
                      <MenuItem value={""}>กรุณาเลือกขนาดบรรจุ</MenuItem>
                      <MenuItem value={"1/4 แกลลอน"}>1/4 แกลลอน</MenuItem>
                      <MenuItem value={"1 แกลลอน"}>1 แกลลอน</MenuItem>
                      <MenuItem value={"2.5 แกลลอน"}>2.5 แกลลอน</MenuItem>
                      <MenuItem value={"5 แกลลอน"}>5 แกลลอน</MenuItem>
                    </TextField>

                    {/* <TextField
                      value={productSizes.amount}
                      variant="outlined"
                      onChange={(e) => {
                        const input = e.target.value;
                        // ถ้า input เป็นตัวเลขหรือเป็นสตริงว่าง
                        if (/^\d*$/.test(input) || input === "") {
                          // ถ้า input เป็นสตริงว่างหรือตัวเลขที่มากกว่าหรือเท่ากับ 0
                          if (
                            input === "" ||
                            (parseInt(input) >= 0 && input[0] !== "0")
                          ) {
                            handleInputChange(e, index, "amount");
                          }
                        }
                      }}
                      label="จำนวน"
                      fullWidth
                      required
                      size="small"
                      sx={{ mt: 1, mb: 1 }}
                    /> */}

                    <TextField
                      value={productSizes.price}
                      variant="outlined"
                      onChange={(e) => {
                        const input = e.target.value;
                        if (/^\d*$/.test(input) || input === "") {
                          if (
                            input === "" ||
                            (parseInt(input) >= 0 && input[0] !== "0")
                          ) {
                            handleInputChange(e, index, "price");
                          }
                        }
                      }}
                      label="ราคาขาย"
                      fullWidth
                      required
                      size="small"
                      sx={{ mt: 1, mb: 1 }}
                    />

                    <TextField
                      value={productSizes.cost}
                      variant="outlined"
                      onChange={(e) => {
                        const input = e.target.value;
                        if (/^\d*$/.test(input) || input === "") {
                          if (
                            input === "" ||
                            (parseInt(input) >= 0 && input[0] !== "0")
                          ) {
                            handleInputChange(e, index, "cost");
                          }
                        }
                      }}
                      label="ราคาซื้อ"
                      fullWidth
                      required
                      size="small"
                      sx={{ mt: 1, mb: 1 }}
                    />
                    <Button
                      variant="contained"
                      color="error"
                      fullWidth
                      onClick={() => removeInputSet(index)}
                    >
                      ลบ
                    </Button>
                  </Box>
                ))}

                <Box sx={{ textAlign: "left" }}>
                  <Typography sx={{ mb: 1 }}>รูปภาพสินค้า:</Typography>
                  <Box>
                    {imageUrl && (
                      <Image
                        src={imageUrl}
                        alt="Uploaded Image"
                        priority
                        height="150"
                        width="150"
                        style={{
                          border: "1px solid rgba(0, 0, 0, 0.50)",
                        }}
                      />
                    )}
                  </Box>
                  <label htmlFor="upload-image">
                    <Button variant="contained" component="span">
                      เพิ่มรูปภาพสินค้า
                    </Button>
                    <input
                      id="upload-image"
                      hidden
                      accept="image/*"
                      type="file"
                      onChange={handleFileUpload}
                    />
                  </label>
                </Box>
             
                <Box>
                  <FormControlLabel
                    sx={{ m: 0 }}
                    control={
                      <Checkbox
                        checked={status}
                        onChange={handleStatusChange}
                      />
                    }
                    label="เปิดให้สั่งซื้อ:"
                    labelPlacement="start"
                  />
                </Box>
              </FormControl>
              <Button
                variant="contained"
                color="success"
                sx={{ mr: 2, mb: 2, mt: 2 }}
                type="submit"
              >
                แก้ไขสินค้า
              </Button>
            </form>
          </Grid>
        </Grid>
      </ThemeProvider>
    </Layout>
  );
}
