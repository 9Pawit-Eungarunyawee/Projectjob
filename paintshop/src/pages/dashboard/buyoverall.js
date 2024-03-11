import { BuyContext } from "@/context/BuyContext";
import { Box, Grid, Typography } from "@mui/material";
import { useContext } from "react";

export default function BuyOverall() {
  const { buyData } = useContext(BuyContext);

  // Get today's date
  const today = new Date();

  // Get current month
  const currentMonth = today.getMonth() + 1;

  // Get current year
  const currentYear = today.getFullYear();

  const buysToday = buyData.filter((buy) => {
    const buyDate = new Date(buy.createAt.toDate());
    return (
      buyDate.getDate() === today.getDate() &&
      buyDate.getMonth() + 1 === currentMonth &&
      buyDate.getFullYear() === currentYear &&
      buy.status === "สำเร็จ"
    );
  });

  const buysThisMonth = buyData.filter((buy) => {
    const buyDate = new Date(buy.createAt.toDate());
    return (
      buyDate.getMonth() + 1 === currentMonth &&
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
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <Box sx={{ bgcolor: "#CFA4D2", borderRadius: "14px", p: 1 ,boxShadow: "rgba(0, 0, 0, 0.18) 0px 2px 4px"}}>
          <Box sx={{ ml: 1 }}>
            <Typography variant="h6">ยอดซื้อวันนี้ (บาท)</Typography>
            <Typography variant="h4" sx={{ fontWeight: "600" }}>{totalBuysToday}</Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={4}>
        <Box sx={{ bgcolor: "#FFB7B2", borderRadius: "14px", p: 1 ,boxShadow: "rgba(0, 0, 0, 0.18) 0px 2px 4px"}}>
          <Box sx={{ ml: 1 }}>
            <Typography variant="h6">ยอดซื้อเดือนนี้ (บาท)</Typography>
            <Typography variant="h4" sx={{ fontWeight: "600" }}>{totalBuysThisMonth}</Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={4}>
        <Box sx={{ bgcolor: "#B5EAD7", borderRadius: "14px", p: 1 ,boxShadow: "rgba(0, 0, 0, 0.18) 0px 2px 4px"}}>
          <Box sx={{ ml: 1 }}>
            <Typography variant="h6">ยอดซื้อปีนี้ (บาท)</Typography>
            <Typography variant="h4" sx={{ fontWeight: "600" }}>{totalBuysThisYear}</Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
