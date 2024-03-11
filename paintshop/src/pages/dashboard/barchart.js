import React, { useContext, useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Box, MenuItem, Select, TextField, Typography } from "@mui/material";
import { OrderContext } from "@/context/OrderContext";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  layout: {
    padding: 0,
  },
  plugins: {
    legend: {
      display: false, // Set to false to hide the legend
    },
  },
  scales: {
    x: {
      grid: {
        display: false, // Remove the x-axis grid lines
      },
    },
    y: {
      display: false, // Remove the x-axis
      grid: {
        display: false, // Remove the x-axis grid lines
      },
      ticks: {
        display: false, // Remove the x-axis ticks
      },
    },
  },
  elements: {
    bar: {
      borderRadius: 19,
    },
  },
};

const labels = [
  "ม.ค.",
  "ก.พ.",
  "มี.ค.",
  "เม.ย.",
  "พ.ค.",
  "มิ.ย.",
  "ก.ค.",
  "ส.ค.",
  "ก.ย.",
  "ต.ค.",
  "พ.ย.",
  "ธ.ค.",
];

export default function Barchart() {
  const { orderData, fetchOrderData } = useContext(OrderContext);
  const [monthlySales, setMonthlySales] = useState([]);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const uniqueYears = [
    ...new Set(orderData.map((order) => order.createAt.toDate().getFullYear())),
  ];
  useEffect(() => {
    fetchOrderData();
  }, []);
  useEffect(() => {
    if (orderData && orderData.length > 0) {
      const ordersWithSuccessStatus = orderData.filter(
        (order) => order.status === "จัดส่งสำเร็จ" && new Date(order.createAt.toDate()).getFullYear() === selectedYear
      );
      const salesByMonth = Array(12).fill(0);
      ordersWithSuccessStatus.forEach((order) => {
        const month = new Date(order.createAt.toDate()).getMonth();
        salesByMonth[month] += order.total_price-50;
      });
      setMonthlySales(salesByMonth);
      console.log("salesByMonth", salesByMonth);
    }
  }, [orderData, selectedYear]);

  const data = {
    labels,
    datasets: [
      {
        label: "ยอดขาย(บาท)",
        data: monthlySales,
        backgroundColor: [
          "#D9D9D9",
          "#ED1F24",
          "#F05623",
          "#F7901E",
          "#FBCD09",
          "#F8EF24",
          "#8FC741",
          "#31B451",
          "#1C907F",
          "#3F66B0",
          "#655CA8",
          "#9F4098",
        ],
      },
    ],
  };

  return (
    <Box sx={{ height: "70%" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <Typography variant="subtitle1" sx={{ mr: 2 }}>
          ยอดขายทั้งหมด
        </Typography>
        <TextField
          select
          label="ปี"
          size="small"
          sx={{ width: "100px" }}
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          {uniqueYears.map((year, index) => (
            <MenuItem key={index} value={year}>
              {year}
            </MenuItem>
          ))}
        </TextField>
      </Box>

      <Bar options={options} data={data} />
    </Box>
  );
}

