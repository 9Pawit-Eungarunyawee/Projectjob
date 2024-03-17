import { BuyContext } from "@/context/BuyContext";
import { OrderContext } from "@/context/OrderContext";
import { Box, Grid, Typography } from "@mui/material";
import { useContext } from "react";
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
    "ธันวาคม"
  ];
export default function Profit() {
  const { buyData } = useContext(BuyContext);
  const { orderData } = useContext(OrderContext);
  // Get today's date
  const today = new Date();

  // Get current month
  const currentMonth = today.getMonth();

  // Get current year
  const currentYear = today.getFullYear();

  const buysToday = buyData.filter((buy) => {
    const buyDate = new Date(buy.createAt.toDate());
    return (
      buyDate.getDate() === today.getDate() &&
      buyDate.getMonth() === currentMonth &&
      buyDate.getFullYear() === currentYear &&
      buy.status === "สำเร็จ"
    );
  });

  const buysThisMonth = buyData.filter((buy) => {
    const buyDate = new Date(buy.createAt.toDate());
    return (
      buyDate.getMonth()=== currentMonth &&
      buyDate.getFullYear() === currentYear &&
      buy.status === "สำเร็จ"
    );
  });

  const buysThisYear = buyData.filter((buy) => {
    const buyDate = new Date(buy.createAt.toDate());
    return (
      buyDate.getFullYear() === currentYear && buy.status === "สำเร็จ"
    );
  });

  const totalBuysToday = buysToday.reduce(
    (total, buy) => total + buy.totalCost,
    0
  );
  const totalBuysThisMonth = buysThisMonth.reduce(
    (total, buy) => total + buy.totalCost,
    0
  );
  const totalBuysThisYear = buysThisYear.reduce(
    (total, buy) => total + buy.totalCost,
    0
  );
  const ordersToday = orderData.filter((order) => {
    const orderDate = new Date(order.createAt.toDate());
    return (
      orderDate.getDate() === today.getDate() &&
      orderDate.getMonth() === currentMonth &&
      orderDate.getFullYear() === currentYear &&
      order.status === "จัดส่งสำเร็จ"
    );
  });

  const ordersThisMonth = orderData.filter((order) => {
    const orderDate = new Date(order.createAt.toDate());
    return (
      orderDate.getMonth() === currentMonth &&
      orderDate.getFullYear() === currentYear &&
      order.status === "จัดส่งสำเร็จ"
    );
  });

  const ordersThisYear = orderData.filter((order) => {
    const orderDate = new Date(order.createAt.toDate());
    return (
      orderDate.getFullYear() === currentYear && order.status === "จัดส่งสำเร็จ"
    );
  });

  const totalSalesToday = ordersToday.reduce(
    (total, order) => total + order.total_price,
    0
  );
  const totalSalesThisMonth = ordersThisMonth.reduce(
    (total, order) => total + order.total_price,
    0
  );
  const totalSalesThisYear = ordersThisYear.reduce(
    (total, order) => total + order.total_price,
    0
  );

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <Box sx={{ bgcolor: "#CFA4D2", borderRadius: "14px", p: 1 ,boxShadow: "rgba(0, 0, 0, 0.18) 0px 2px 4px"}}>
          <Box sx={{ ml: 1 }}>
            <Typography variant="h6">กำไรวันนี้ (บาท) </Typography>
            <Typography variant="h4" sx={{ fontWeight: "600" }}>{(totalSalesToday-totalBuysToday).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={4}>
        <Box sx={{ bgcolor: "#FFB7B2", borderRadius: "14px", p: 1 ,boxShadow: "rgba(0, 0, 0, 0.18) 0px 2px 4px"}}>
          <Box sx={{ ml: 1 }}>
            <Typography variant="h6">กำไรเดือนนี้ (บาท)</Typography>
            <Typography variant="h4" sx={{ fontWeight: "600" }}>{(totalSalesThisMonth-totalBuysThisMonth).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={4}>
        <Box sx={{ bgcolor: "#B5EAD7", borderRadius: "14px", p: 1 ,boxShadow: "rgba(0, 0, 0, 0.18) 0px 2px 4px"}}>
          <Box sx={{ ml: 1 }}>
            <Typography variant="h6">กำไรปีนี้(บาท) </Typography>
            <Typography variant="h4" sx={{ fontWeight: "600" }}>{(totalSalesThisYear-totalBuysThisYear).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
