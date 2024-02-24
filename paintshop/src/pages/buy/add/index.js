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
import { useAuthContext } from "@/context/AuthContext";
import addBuy from "@/firebase/addBuy";
import { Timestamp } from "firebase/firestore";
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
  const { user } = useAuthContext();
  const { productData } = useContext(ProductContext);
  const [name, setName] = useState("");
  const [createAt, setCreateAt] = useState("");
  const [discount, setDiscount] = useState(0);
  const [shippingCost, setShippingCost] = useState(0);
  const [products, setProducts] = useState([
    {
      product_name: "",
      product_id: "",
      product_exp: "",
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
      newProductSize.splice(0, 1); // ลบชุดที่มีดัชนี id
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

  const [totalCost, setTotalCost] = useState(0);
  useEffect(() => {
    let sum = 0;
    products.forEach((product) => {
      product.product_size.forEach((size) => {
        const amount = parseFloat(size.amount);
        const cost = parseFloat(size.cost);
        if (amount && cost) {
          sum += amount * cost;
        }
      });
    });
    if (discount) {
      sum -= parseFloat(discount);
    }
    if (shippingCost) {
      sum += parseFloat(shippingCost);
    }

    setTotalCost(sum);
  }, [products, discount, shippingCost]);

  // useEffect(() => {
  //   console.log(products);
  const handleForm = async (event) => {
    event.preventDefault();
    const buy = {
      name: name,
      createAt: createAt,
      products: products,
      discount: discount,
      shippingCost: shippingCost,
      user_id: user.uid,
      totalCost: totalCost,
    };
    const result = await addBuy("buy", buy);
    if (result) {
      setAlert(
        <Alert severity="success" onClose={handleClose}>
          เพิ่มข้อมูลสำเร็จ
        </Alert>
      );
      setOpen(true);
    } else {
      setAlert(
        <Alert severity="error" onClose={handleClose}>
          ผิดพลาด! ไม่สามารถเพิ่มข้อมูลได้
        </Alert>
      );
      setOpen(true);
    }
  };
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
            <form onSubmit={handleForm} className="form">
              <Typography sx={{ mt: 1 }}>ข้อมูล:</Typography>
              <TextField
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                value={createAt}
                onChange={(e) => setCreateAt(e.target.value)}
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
                    index={index}
                    setProducts={setProducts}
                  />
                  <TextField
                    variant="outlined"
                    label="ชื่อสินค้า"
                    id="product-name"
                    name="product_name"
                    disabled
                    value={product.product_name}
                    onChange={(e) =>
                      handleInputChange(e, index, "product_name")
                    }
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
                    InputLabelProps={{
                      shrink: true,
                      floating: true,
                    }}
                  />
                  <Typography sx={{ mt: 1 }}>รูปแบบสินค้า:</Typography>
                  {product.product_size.map((product_size, id) => (
                    <Box
                      sx={{
                        m: 1,
                        p: 2,
                        mb: 2,
                        borderRadius: "10px",
                        boxShadow:
                          "rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px",
                      }}
                      key={id}
                    >
                      <Typography sx={{ mt: 1 }}>
                        รูปแบบที่ {id + 1} :
                      </Typography>
                      <TextField
                        value={product_size.size}
                        onChange={(e) =>
                          handleInputSizeChange(e, index, id, "size")
                        }
                        variant="outlined"
                        label="ขนาดสินค้า"
                        fullWidth
                        required
                        size="small"
                        sx={{ mt: 1, mb: 1 }}
                      />
                      <TextField
                        value={product_size.cost}
                        onChange={(e) => {
                          const input = e.target.value;
                          // ถ้า input เป็นตัวเลขหรือเป็นสตริงว่าง
                          if (/^\d*$/.test(input) || input === "") {
                            // ถ้า input เป็นสตริงว่างหรือตัวเลขที่มากกว่าหรือเท่ากับ 0
                            if (
                              input === "" ||
                              (parseInt(input) >= 0 && input[0] !== "0")
                            ) {
                              handleInputSizeChange(e, index, id, "cost");
                            }
                          }
                        }}
                        variant="outlined"
                        label="ราคาต่อหน่วย"
                        fullWidth
                        required
                        size="small"
                        sx={{ mt: 1, mb: 1 }}
                      />
                      <TextField
                        variant="outlined"
                        value={product_size.amount}
                        onChange={(e) => {
                          const input = e.target.value;
                          // ถ้า input เป็นตัวเลขหรือเป็นสตริงว่าง
                          if (/^\d*$/.test(input) || input === "") {
                            // ถ้า input เป็นสตริงว่างหรือตัวเลขที่มากกว่าหรือเท่ากับ 0
                            if (
                              input === "" ||
                              (parseInt(input) >= 0 && input[0] !== "0")
                            ) {
                              handleInputSizeChange(e, index, id, "amount");
                            }
                          }
                        }}
                        label="จำนวน"
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
                      {/* {id === product.product_size.length - 1 && (
                        <Button
                          sx={{ mt: 1, mb: 1 }}
                          variant="outlined"
                          fullWidth
                          onClick={() => addInputSize(index)}
                        >
                          เพิ่มรูปแบบสินค้า
                        </Button>
                      )} */}
                    </Box>
                  ))}

                  <Typography sx={{ mt: 1 }}>วันหมดอายุ:</Typography>
                  <TextField
                    variant="outlined"
                    fullWidth
                    value={product.product_exp}
                    onChange={(e) => handleInputChange(e, index, "product_exp")}
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
                value={discount}
                onChange={(e) => {
                  const input = e.target.value;
                  // ถ้า input เป็นตัวเลขหรือเป็นสตริงว่าง
                  if (/^\d*$/.test(input) || input === "") {
                    // ถ้า input เป็นสตริงว่างหรือตัวเลขที่มากกว่าหรือเท่ากับ 0
                    if (input === "" || parseInt(input) >= -1) {
                      setDiscount(e.target.value);
                    }
                  }
                }}
                label="ส่วนลด"
                fullWidth
                size="small"
                sx={{ mt: 1, mb: 1 }}
              />
              <Typography sx={{ mt: 1 }}>ค่าส่ง :</Typography>
              <TextField
                variant="outlined"
                value={shippingCost}
                onChange={(e) => {
                  const input = e.target.value;
                  // ถ้า input เป็นตัวเลขหรือเป็นสตริงว่าง
                  if (/^\d*$/.test(input) || input === "") {
                    // ถ้า input เป็นสตริงว่างหรือตัวเลขที่มากกว่าหรือเท่ากับ 0
                    if (
                      input === "" ||
                      (parseInt(input) >= 0 && input[0] !== "0")
                    ) {
                      setShippingCost(e.target.value);
                    }
                  }
                }}
                label="ค่าส่ง"
                fullWidth
                size="small"
                sx={{ mt: 1, mb: 1 }}
              />

              <Box sx={{ p: 3, bgcolor: "#EAE4E7", mt: 1 }}>
                <Typography sx={{ mt: 1, fontSize: "1.3rem" }}>
                  มูลค่ารวมสุทธิ : {isNaN(totalCost) ? "" : totalCost}
                </Typography>
              </Box>
              <Button
                sx={{ mb: 1, mt: 2 }}
                variant="contained"
                color="success"
                type="submit"
              >
                สร้างรายการซื้อ
              </Button>
            </form>
          </Grid>
        </Grid>
      </ThemeProvider>
    </Layout>
  );
}
