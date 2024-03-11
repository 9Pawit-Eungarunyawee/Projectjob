import { useContext } from "react";
import { OrderContext } from "@/context/OrderContext";
import { Box, Grid, Typography } from "@mui/material";

export default function Overall() {
  const { orderData } = useContext(OrderContext);

  // Get today's date
  const today = new Date();

  // Get current month
  const currentMonth = today.getMonth() + 1;

  // Get current year
  const currentYear = today.getFullYear();

  const ordersToday = orderData.filter((order) => {
    const orderDate = new Date(order.createAt.toDate());
    return (
      orderDate.getDate() === today.getDate() &&
      orderDate.getMonth() + 1 === currentMonth &&
      orderDate.getFullYear() === currentYear &&
      order.status === "จัดส่งสำเร็จ"
    );
  });

  const ordersThisMonth = orderData.filter((order) => {
    const orderDate = new Date(order.createAt.toDate());
    return (
      orderDate.getMonth() + 1 === currentMonth &&
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
        <Box
          sx={{
            bgcolor: "#A9C470",
            borderRadius: "14px",
            p: 1,
            boxShadow: "rgba(0, 0, 0, 0.18) 0px 2px 4px",
          }}
        >
          <Box sx={{ ml: 1 }}>
            <Typography variant="h6">ยอดขายวันนี้ (บาท)</Typography>
            <Typography variant="h4" sx={{ fontWeight: "600" }}>
              {totalSalesToday}
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
          <Typography variant="h6">ยอดขายเดือนนี้ (บาท)</Typography>
          <Typography variant="h4" sx={{ fontWeight: "600" }}>
            {totalSalesThisMonth}
          </Typography>
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
          <Typography variant="h6">ยอดขายปีนี้ (บาท)</Typography>
          <Typography variant="h4" sx={{ fontWeight: "600" }}>
            {totalSalesThisYear}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
