import addData from "@/firebase/addData";
import { useAuthContext } from "@/context/AuthContext";
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
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { CatalogContext } from "@/context/CatalogContext";
import { ProductContext } from "@/context/ProductContext";
import Layout from "@/components/layout";
import addMaterial, { editMaterial } from "@/firebase/addMeterial";
import { useRouter } from "next/router";
import getDoument from "@/firebase/getData";
export default function EditMaterial() {
  const { user } = useAuthContext();
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
  useEffect(()=>{fetchProductData()},[])
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
      setDetail(productData.detail);
      setProductSizes(productData.productSizes);
      setImageUrl(productData.img);
      setStatus(productData.status);
    }
  };
  const handleForm = async (event) => {
    event.preventDefault();
    const product = {
      name: name,
      detail: detail,
      status: status,
      img: imageUrl,
      productSizes: productSizes,
      user_id: user.uid,
    };
    const result = await editMaterial("products",product_id ,product);
    if (result) {
      setAlert(
        <Alert severity="success" onClose={handleClose}>
          เพิ่มข้อมูลสำเร็จ
        </Alert>
      );
      setOpen(true);
      fetchProductData();
      setTimeout(() => {
        goBack();
      }, 500);
    } else {
      setAlert(
        <Alert severity="error" onClose={handleClose}>
          ผิดพลาด! ไม่สามารถเพิ่มข้อมูลได้
        </Alert>
      );
      setOpen(true);
      fetchProductData();
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
          แก้ไข(วัสดุ)
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
                      fullWidth
                      label="ขนาด"
                      sx={{ mt: 1, mb: 1 }}
                      required
                    />

                    {/* <TextField
                      value={productSizes.amount}
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
                      variant="outlined"
                      label="จำนวน"
                      fullWidth
                      required
                      size="small"
                      sx={{ mt: 1, mb: 1 }}
                    /> */}

                    <TextField
                      value={productSizes.price}
                      variant="outlined"
                      label="ราคาขาย"
                      onChange={(e) => {
                        const input = e.target.value;
                        // ถ้า input เป็นตัวเลขหรือเป็นสตริงว่าง
                        if (/^\d*$/.test(input) || input === "") {
                          // ถ้า input เป็นสตริงว่างหรือตัวเลขที่มากกว่าหรือเท่ากับ 0
                          if (
                            input === "" ||
                            (parseInt(input) >= 0 && input[0] !== "0")
                          ) {
                            handleInputChange(e, index, "price");
                          }
                        }
                      }}
                      fullWidth
                      required
                      size="small"
                      sx={{ mt: 1, mb: 1 }}
                    />

                    <TextField
                      value={productSizes.cost}
                      onChange={(e) => {
                        const input = e.target.value;
                        // ถ้า input เป็นตัวเลขหรือเป็นสตริงว่าง
                        if (/^\d*$/.test(input) || input === "") {
                          // ถ้า input เป็นสตริงว่างหรือตัวเลขที่มากกว่าหรือเท่ากับ 0
                          if (
                            input === "" ||
                            (parseInt(input) >= 0 && input[0] !== "0")
                          ) {
                            handleInputChange(e, index, "cost");
                          }
                        }
                      }}
                      variant="outlined"
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
                <Button
                  variant="contained"
                  fullWidth
                  sx={{ mr: 2, mb: 2, mt: 2, width: "200px" }}
                  onClick={addInputSet}
                >
                  เพิ่มรูปแบบสินค้า
                </Button>
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
                {/* <Typography sx={{ mt: 1 }}>ล๊อตสินค้า:</Typography>
                <TextField
                  value={lot}
                  onChange={(e) => setLot(e.target.value)}
                  variant="outlined"
                  fullWidth
                  required
                  size="small"
                  sx={{ mt: 1, mb: 1 }}
                  type="date"
                /> */}
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
                เพิ่มสินค้า
              </Button>
            </form>
          </Grid>
        </Grid>
      </ThemeProvider>
    </Layout>
  );
}
