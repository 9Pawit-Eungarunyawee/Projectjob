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
  const [colorData, setColorData] = React.useState(null);
  const [total, setTotal] = React.useState(0);
  const [producttotal, setProducttotal] = React.useState(0);
  const [totalQuantity, setTotalQuantity] = React.useState(0);
  const user = useAuthContext();
  const handleConfirmOrder = () => {
    router.push({
      pathname: "/cart/selectaddress",
    });
  };
  const format = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  const [groupedProductData, setGroupedProductData] = React.useState(null);

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
      const productIds = filteredResults.map((doc) => doc.product_id.id);
      const colorIds = filteredResults.map((doc) => doc.color_id.id);
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
      let total = 0;
      let producttotal = 0;
      groupedProductData.forEach((item) => {
        totalQuantity += item.amount;
        producttotal += item.amount * item.price;
      });
      total += producttotal + shippingCost;
      setTotalQuantity(totalQuantity);
      setProducttotal(producttotal);
      setTotal(total);
    }
  }, [groupedProductData]);
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
                <Typography> ยอดรวมสินค้า ({totalQuantity} ชิ้น)</Typography>
                <Typography sx={{ fontWeight: "bold" }}>
                  ฿{format(producttotal)}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography> ค่าจัดส่ง </Typography>
                <Typography sx={{fontWeight:"bold"}}>฿{shippingCost}</Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Box>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  ฿{format(total)}
                </Typography>
                <Typography> ยอดสุทธิ </Typography>
              </Box>
              <Button
                variant="contained"
                sx={{ p: 1, bgcolor: "#FE616A" }}
                onClick={handleConfirmOrder}
              >
                ยืนยันคำสั่งซื้อ
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