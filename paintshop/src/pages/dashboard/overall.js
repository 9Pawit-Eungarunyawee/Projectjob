import { useContext, useEffect, useState } from "react";
import { OrderContext } from "@/context/OrderContext";
import { Box, Grid, Typography } from "@mui/material";
import { BuyContext } from "@/context/BuyContext";
const months = [
  "มกราคม",
  "กุมภาพันธ์",
  "มีนาคม",
  "เมษายน",
  "พฤษภาคม",
  "มิถุนายน",
  "กรกฎาคม",
  "สิงหาคม",
  "กันยายน",
  "ตุลาคม",
  "พฤศจิกายน",
  "ธันวาคม",
];
export default function Overall({ overallDateEnd, overallDateStart }) {
  const { orderData } = useContext(OrderContext);
  const { buyData } = useContext(BuyContext);

  const [totalSale, setTotalSale] = useState(0);
  const [totalBuy, setTotalBuy] = useState(0);
  useEffect(() => {
    const ordersToday = orderData.filter((order) => {
      const orderDate = new Date(order.createAt.toDate());
      return (
        orderDate >= new Date(overallDateStart) &&
        orderDate <= new Date(overallDateEnd) &&
        order.status === "จัดส่งสำเร็จ"
      );
    });
    const totalSales = ordersToday.reduce(
      (total, order) => total + order.total_price,
      0
    );
    setTotalSale(totalSales);

    const buysToday = buyData.filter((buy) => {
      const buyDate = new Date(buy.createAt.toDate());
      return (
        buyDate >= new Date(overallDateStart) &&
        buyDate<= new Date(overallDateEnd) && 
        buy.status === "สำเร็จ"
      );
    });
    const totalBuys = buysToday.reduce(
      (total, buy) => total + buy.totalCost,
      0
    );
    setTotalBuy(totalBuys)
  }, [overallDateEnd, overallDateStart, orderData, buyData]);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <Box
          sx={{
            bgcolor: "#A9C470",
            borderRadius: "14px",
            p: 1,
            boxShadow: "rgba(0, 0, 0, 0.18) 0px 2px 4px",
          }}
        >
          <Box sx={{ ml: 1 }}>
            <Typography variant="h6">ยอดขาย (บาท)</Typography>
            <Typography variant="h4" sx={{ fontWeight: "600" }}>
              {totalSale.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={4}>
        <Box
          sx={{
            bgcolor: "#FFB34E",
            borderRadius: "14px",
            p: 1,
            boxShadow: "rgba(0, 0, 0, 0.18) 0px 2px 4px",
          }}
        >
          <Typography variant="h6">ยอดซื้อ (บาท) </Typography>
          <Typography variant="h4" sx={{ fontWeight: "600" }}>{totalBuy.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={4}>
        <Box
          sx={{
            bgcolor: "#FE616A",
            borderRadius: "14px",
            p: 1,
            boxShadow: "rgba(0, 0, 0, 0.18) 0px 2px 4px",
          }}
        >
          <Typography variant="h6">กำไร (บาท)</Typography>
          <Typography variant="h4" sx={{ fontWeight: "600" }}>{(totalSale-totalBuy).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
