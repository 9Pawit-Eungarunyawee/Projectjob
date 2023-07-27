import React from "react";
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
    bar:{
        borderRadius:19
    }
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
export const data = {
  labels,
  datasets: [
    {
      label: "ยอดขาย(บาท)",
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
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

export default function Barchart() {
  return <Bar options={options} data={data} />;
}
