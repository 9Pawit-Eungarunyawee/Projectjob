import Layout from "@/components/layout";
import {
  Alert,
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  Snackbar,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { useContext, useEffect, useState } from "react";
import SearchDialog from "./search-dialog";
import { ProductContext } from "@/context/ProductContext";
export default function Add() {
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
  const { productData } = useContext(ProductContext);
  const [products, setProducts] = useState([
    {
      product_name: "",
      product_id: "",
      product_size: [{ amount: "", size: "", cost: "" }],
    },
  ]);
  const handleInputChange = (e, index, property) => {
    const newInputSets = [...products];
    newInputSets[index][property] = e.target.value;
    setProducts(newInputSets);
  };

  const handleInputSizeChange = (e, index, id, property) => {
    const newInputSets = [...products];
    newInputSets[index].product_size[id][property] = e.target.value;
    setProducts(newInputSets);
  };

  const [open, setOpen] = useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const addProduct = () => {
    const newProduct = {
      product_id: "",
      product_size: [{ amount: "", size: "", cost: "" }],
      product_exp: "",
    };
    setProducts([...products, newProduct]);
  };

  const removeInputSet = (index) => {
    if (products.length > 1) {
      const newInputSets = [...products];
      newInputSets.splice(index, 1); // ลบชุดที่มีดัชนี index
      setProducts(newInputSets);
    } else if (products.length <= 1) {
      setAlert(
        <Alert severity="error" onClose={handleClose}>
          ต้องมีสินค้าอย่างน้อย 1 อย่าง
        </Alert>
      );
      setOpen(true);
    }
  };

  const addInputSize = (index) => {
    const newProductSize = { amount: "", size: "" };
    const updatedProduct = {
      ...products[index],
      product_size: [...products[index].product_size, newProductSize],
    };
    const updatedProducts = [...products];
    updatedProducts[index] = updatedProduct;
    setProducts(updatedProducts);
  };

  const removeInputSize = (index, id) => {
    if (products[index].product_size.length > 1) {
      const newProduct = { ...products[index] };
      const newProductSize = [...newProduct.product_size];
      newProductSize.splice(id, 1); // ลบชุดที่มีดัชนี id
      newProduct.product_size = newProductSize;
      const updatedProducts = [...products];
      updatedProducts[index] = newProduct;
      setProducts(updatedProducts);
    } else if (products[index].product_size.length <= 1) {
      setAlert(
        <Alert severity="error" onClose={handleClose}>
          ต้องมีรูปแบบสินค้าอย่างน้อย 1 รูปแบบ
        </Alert>
      );
      setOpen(true);
    }
  };

  const [opendialog, setOpenDialog] = useState(false);
  const handleOpenDialog = (item) => {
    setOpenDialog(true);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  useEffect(() => {
    console.log(products);
  }, [products]);
  const createBuy = () => {};
  return (
    <Layout>
      <ThemeProvider theme={theme}>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          {alert}
        </Snackbar>
        <Typography sx={{ fontSize: "2rem", fontWeight: "600", mt: 4 }}>
          สร้างรายการซื้อ
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
            <Typography sx={{ mt: 1 }}>ข้อมูล:</Typography>
            <TextField
              variant="outlined"
              label="ชื่อรายการ"
              fullWidth
              required
              size="small"
              sx={{ mt: 1, mb: 1 }}
            />
            <Typography sx={{ mt: 1 }}>วันที่:</Typography>
            <TextField
              variant="outlined"
              fullWidth
              required
              size="small"
              sx={{ mt: 1, mb: 1 }}
              type="date"
            />
            <Typography sx={{ mt: 1 }}>สินค้า:</Typography>
            {products.map((product, index) => (
              <Box
                key={index}
                sx={{
                  borderRadius: "10px",
                  mt: 1,
                  mb: 3,
                  p: 2,
                  boxShadow:
                    "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
                }}
              >
                <SearchDialog
                  handleCloseDialog={handleCloseDialog}
                  opendialog={opendialog}
                  productData={productData}
                />
                <TextField
                  variant="outlined"
                  label="ชื่อสินค้า"
                  value={products[index].product_name}
                  onChange={(e) => handleInputChange(e, index, "product_name")}
                  fullWidth
                  size="small"
                  sx={{ mt: 1, mb: 1 }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handleOpenDialog}>
                          <SearchIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <Typography sx={{ mt: 1 }}>รูปแบบสินค้า:</Typography>
                {product.product_size.map((product_size, id) => (
                  <Box sx={{ pr: 3, pl: 3 }} key={id}>
                    <Typography sx={{ mt: 1 }}>รูปแบบที่ {id + 1} :</Typography>
                    <TextField
                      defaultValue={product_size.size}
                      onChange={(e) =>
                        handleInputSizeChange(e, index, id, "size")
                      }
                      variant="outlined"
                      label="ขนาด"
                      fullWidth
                      required
                      size="small"
                      sx={{ mt: 1, mb: 1 }}
                    />
                    <TextField
                      variant="outlined"
                      defaultValue={product_size.amount}
                      onChange={(e) =>
                        handleInputSizeChange(e, index, id, "amount")
                      }
                      label="จำนวน"
                      fullWidth
                      required
                      size="small"
                      sx={{ mt: 1, mb: 1 }}
                    />
                    <TextField
                      defaultValue={product_size.cost}
                      onChange={(e) =>
                        handleInputSizeChange(e, index, id, "cost")
                      }
                      variant="outlined"
                      label="ราคาต่อหน่วย"
                      fullWidth
                      required
                      size="small"
                      sx={{ mt: 1, mb: 1 }}
                    />
                    <Button
                      sx={{ mt: 1, mb: 1 }}
                      variant="outlined"
                      color="error"
                      fullWidth
                      onClick={() => removeInputSize(index, id)}
                    >
                      ลบรูปแบบสินค้า
                    </Button>
                    {id === product.product_size.length - 1 && (
                      <Button
                        sx={{ mt: 1, mb: 1 }}
                        variant="outlined"
                        fullWidth
                        onClick={() => addInputSize(index)}
                      >
                        เพิ่มรูปแบบสินค้า
                      </Button>
                    )}
                  </Box>
                ))}

                <Typography sx={{ mt: 1 }}>วันหมดอายุ:</Typography>
                <TextField
                  variant="outlined"
                  fullWidth
                  required
                  size="small"
                  sx={{ mt: 1, mb: 1 }}
                  type="date"
                />
                <Button
                  sx={{ mt: 1, mb: 1 }}
                  variant="contained"
                  fullWidth
                  color="error"
                  onClick={() => removeInputSet(index)}
                >
                  ลบสินค้า
                </Button>
              </Box>
            ))}
            <Button
              sx={{ mb: 1 }}
              variant="contained"
              fullWidth
              onClick={addProduct}
            >
              เพิ่มสินค้า
            </Button>
            <Typography sx={{ mt: 1 }}>ส่วนลด :</Typography>
            <TextField
              variant="outlined"
              label="ส่วนลด"
              fullWidth
              size="small"
              sx={{ mt: 1, mb: 1 }}
            />
            <Typography sx={{ mt: 1 }}>ค่าส่ง :</Typography>
            <TextField
              variant="outlined"
              label="ค่าส่ง"
              fullWidth
              size="small"
              sx={{ mt: 1, mb: 1 }}
            />
            <Box sx={{ p: 3, bgcolor: "#EAE4E7", mt: 1 }}>
              <Typography sx={{ mt: 1, fontSize: "1.3rem" }}>
                มูลค่ารวมสุทธิ :
              </Typography>
            </Box>
            <Button
              sx={{ mb: 1, mt: 2 }}
              variant="contained"
              color="success"
              onClick={createBuy}
            >
              สร้างรายการซื้อ
            </Button>
          </Grid>
        </Grid>
      </ThemeProvider>
    </Layout>
  );
}
