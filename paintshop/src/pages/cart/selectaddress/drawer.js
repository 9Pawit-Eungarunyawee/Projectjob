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
  const { productPrice, totalAllPrice, totalShippingCost ,groupedCartArray,addressData,selectedAddressIndex} = props;
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
    // รวบรวมข้อมูลสินค้าและวัสดุเข้าไปใน productDetails
    const productDetails = [];

    // เก็บข้อมูลสินค้า
    if (groupedCartArray) {
      groupedCartArray.forEach((item) => {
        productDetails.push({
          product_id: item.product_id?.id,
          amount: item.amount,
          size: item.size,
          price: item.price,
          color_id: item.color_id?.id || null,
        });
      });
    }
    const cartID = [];
    if (cartData) {
      cartData
        .filter((c) => c.user_id === user.user.uid)
        .map((item) => cartID.push(item.id));
    }

    const addressDetails = addressData.map((item) => ({
      address: item.addresses[selectedAddressIndex].address,
      amphure: item.addresses[selectedAddressIndex].amphure,
      tambon: item.addresses[selectedAddressIndex].tambon,
      province: item.addresses[selectedAddressIndex].province,
      zipcode: item.addresses[selectedAddressIndex].zipcode,
      tel: item.addresses[selectedAddressIndex].tel,
    }));

    router.push({
      pathname: "/cart/QR",
      query: {
        totalAllPrice,
        productDetails: JSON.stringify(productDetails),
        cartId: JSON.stringify(cartID),
        addressDetails: JSON.stringify(addressDetails),
      },
    });
  };
  const format = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

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
                <Typography> ยอดรวมสินค้า </Typography>
                <Typography sx={{ fontWeight: "bold" }}>
                  ฿{format(productPrice)}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography> ค่าจัดส่ง </Typography>
                <Typography sx={{ fontWeight: "bold" }}>
                  ฿{totalShippingCost}
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
