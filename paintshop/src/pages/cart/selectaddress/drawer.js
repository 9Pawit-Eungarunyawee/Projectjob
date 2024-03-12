import * as React from "react";
import PropTypes from "prop-types";
import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { grey } from "@mui/material/colors";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { Grid } from "@mui/material";
import { useRouter } from "next/router";
import { useAuthContext } from "@/context/AuthContext";
import searchUser from "@/firebase/searchData";
import { debounce } from "lodash";
import { getColorDetails, getProductDetails } from "@/firebase/getData";

const drawerBleeding = 56;

const Root = styled("div")(({ theme }) => ({
  height: "100%",
  backgroundColor: "transparent",
}));

const StyledBox = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "#fff" : grey[800],
}));

const Puller = styled("div")(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === "light" ? grey[300] : grey[900],
  borderRadius: 3,
  position: "absolute",
  top: 8,
  left: "calc(50% - 15px)",
}));

function SwipeableEdgeDrawer(props) {
  const shippingCost = 50;
  const router = useRouter();
  const [documentData, setDocumentData] = React.useState(null);
  const [cartData, setCartData] = React.useState(null);
  const [productData, setProductData] = React.useState(null);
  const [productData2, setProductData2] = React.useState(null);
  const [colorData, setColorData] = React.useState(null);
  const [total, setTotal] = React.useState(0);
  const [producttotal, setProducttotal] = React.useState(0);
  const [totalQuantity1, setTotalQuantity1] = React.useState(0);
  const [totalQuantity2, setTotalQuantity2] = React.useState(0);
  const [totalMaterialPrice, setTotalMaterialPrice] = React.useState(0);
  const [totalProductPrice, setTotalProductPrice] = React.useState(0);
  const [materialData, setMaterialData] = React.useState(null);
  const [materialTotal, setMaterialTotal] = React.useState(0);
  const user = useAuthContext();
  const handleConfirmOrder = () => {
    const productIDs = groupedProductData.map((item) => item.product_id?.id);
    const cartID = documentData.map((item) => item.id);
    router.push({
      pathname: "/cart/QR",
      query: {
        total,
        productIDs: JSON.stringify(productIDs),
        cartId: JSON.stringify(cartID),
      },
    });
  };
  const format = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  const [groupedProductData, setGroupedProductData] = React.useState(null);
  const [groupedMaterialData, setGroupedMaterialData] = React.useState(null);
  //ดึงข้อมูล
  const [searchTerm, setSearchTerm] = React.useState("");
  React.useEffect(() => {
    // ทำสิ่งที่คุณต้องการกับ searchResults ที่ได้
    handleSearch("");
  }, []);
  React.useEffect(() => {
    // ทำสิ่งที่คุณต้องการกับ searchResults ที่ได้
    // console.log(documentData);
  }, [documentData]);
  const debouncedSearchMaterial = debounce(async (term) => {
    const uid = user.user.uid;
    try {
      const collectionName = "cart";
      const field = "user_id";
      const results = await searchUser(collectionName, field, term);
      const filteredResults = results.filter(
        (doc) => doc.user_id === uid && doc.isMaterial === true
      );
      const productIds = filteredResults.map((doc) => doc.product_id?.id);
      const productDetails = await getProductDetails(productIds);
      setProductData2(productDetails);
      setMaterialData(filteredResults);
      const groupedMaterials = {};
      filteredResults.forEach((doc) => {
        const key = `${doc.product_id.id}_${doc.price}`;
        if (!groupedMaterials[key]) {
          groupedMaterials[key] = {
            ...doc,
          };
        } else {
          groupedMaterials[key].amount += 1;
        }
      });

      setGroupedMaterialData(Object.values(groupedMaterials));
    } catch (error) {
      console.error("Error searching data:", error);
    }
  }, 500);
  const debouncedSearchUser = debounce(async (term) => {
    const uid = user.user.uid;
    console.log("Fetched data:", {
      documentData,
      productData,
      colorData,
      groupedProductData,
    });
    try {
      const collectionName = "cart";
      const field = "user_id";
      const results = await searchUser(collectionName, field, term);
      const filteredResults = results.filter((doc) => doc.user_id == uid);
      const productIds = filteredResults.map((doc) => doc.product_id?.id);
      const colorIds = filteredResults.map((doc) => doc.color_id?.id);
      console.log("Product IDs:", productIds);
      console.log("Color IDs:", colorIds);
      const productDetails = await getProductDetails(productIds);
      const colorDetails = await getColorDetails(colorIds);
      setColorData(colorDetails);
      setProductData(productDetails);
      setDocumentData(filteredResults);

      const groupedProducts = {};
      filteredResults.forEach((doc) => {
        const key = `${doc.color_id.id}_${doc.product_id.id}_${doc.price}`;
        if (!groupedProducts[key]) {
          groupedProducts[key] = {
            ...doc,
            amount: 1,
          };
        } else {
          groupedProducts[key].amount += 1;
        }
      });

      setGroupedProductData(Object.values(groupedProducts));
    } catch (error) {
      console.error("Error searching data:", error);
    }
  }, 500);

  // กำหนดเวลา debounce ที่คุณต้องการ
  const handleSearch = (term) => {
    setSearchTerm(term);
    debouncedSearchUser(term);
    debouncedSearchMaterial(term);
  };
  //ดึงสี

  // บวก ลบ
  const [amount, setAmount] = React.useState(0);

  React.useEffect(() => {
    if (cartData) {
      const totalAmount = cartData.reduce((acc, item) => acc + item.amount, 0);
      setAmount(totalAmount);
    }
  }, [cartData]);

  React.useEffect(() => {
    if (groupedProductData && groupedProductData.length > 0) {
      let totalQuantity = 0;
      let producttotal = 0;
      groupedProductData.forEach((item) => {
        totalQuantity += item.amount;
        producttotal += item.amount * item.price;
      });
      const total = producttotal + shippingCost;
      setTotalQuantity1(totalQuantity);
      setProducttotal(producttotal);
      setTotalProductPrice(producttotal);
      setTotal(total);
    }
  }, [groupedProductData]);

  React.useEffect(() => {
    if (groupedMaterialData && groupedMaterialData.length > 0) {
      let totalQuantity = 0;
      let materialtotal = 0;
      groupedMaterialData.forEach((item) => {
        totalQuantity += item.amount;
        materialtotal += item.amount * item.price;
      });
      const total = materialtotal + shippingCost;
      setTotalQuantity2(totalQuantity);
      setMaterialTotal(materialtotal);
      setTotalMaterialPrice(materialtotal);
      setTotal(total);
    }
  }, [groupedMaterialData]);
  const productPrice = totalMaterialPrice + totalProductPrice;
  const totalAllPrice = totalMaterialPrice + totalProductPrice + shippingCost;
  const totalAllquan = totalQuantity1 + totalQuantity2;
  const { window } = props;
  const [open, setOpen] = React.useState(true);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  // This is used only for the example
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Root>
      <CssBaseline />
      <Global
        styles={{
          ".MuiDrawer-root > .MuiPaper-root": {
            overflow: "visible",
            backgroundColor: "#fff",
          },
          ".MuiBackdrop-root": {
            backgroundColor: "transparent !important",
          },
          ".MuiDrawer-root": {
            backgroundColor: "transparent !important",
          },
        }}
      />
      <SwipeableDrawer
        container={container}
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <StyledBox
          sx={{
            position: "absolute",
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: "visible",
            right: 0,
            left: 0,
          }}
        >
          <Puller />
          <Typography sx={{ p: 2, color: "#018294", fontWeight: "bold" }}>
            สรุปรายการสั่งซื้อ
          </Typography>
        </StyledBox>
        <StyledBox
          sx={{
            px: 2,
            pb: 2,
            overflow: "auto",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography> ยอดรวมสินค้า ({totalAllquan} ชิ้น)</Typography>
                <Typography sx={{ fontWeight: "bold" }}>
                  ฿{format(productPrice)}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography> ค่าจัดส่ง </Typography>
                <Typography sx={{ fontWeight: "bold" }}>
                  ฿{shippingCost}
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Box>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  ฿{format(totalAllPrice)}
                </Typography>
                <Typography> ยอดสุทธิ </Typography>
              </Box>
              <Button
                variant="contained"
                sx={{ p: 1, bgcolor: "#FE616A" }}
                onClick={handleConfirmOrder}
              >
                ชำระเงิน
              </Button>
            </Grid>
          </Grid>
        </StyledBox>
      </SwipeableDrawer>
    </Root>
  );
}

SwipeableEdgeDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default SwipeableEdgeDrawer;
