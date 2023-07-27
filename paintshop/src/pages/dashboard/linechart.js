import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
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
      display: false, // Remove the x-axis
      grid: {
        display: false, // Remove the x-axis grid lines
      },
      ticks: {
        display: false, // Remove the x-axis ticks
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
    line: {
      tension: 0.4,
    },
  },
};

const labels = ["a", "v", "a", "a", "a"];

export const data = {
  labels,
  datasets: [
    {
      data: [1, 5, 3, 6, 5],
      borderColor: "#000",
      backgroundColor: "rgba(255, 99, 132, 1)",
    },
  ],
};

export default function Linechart() {
  return <Line options={options} data={data} />;
}
