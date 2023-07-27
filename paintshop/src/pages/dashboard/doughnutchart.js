import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["รายรับ", "รายจ่าย"],
  datasets: [
    {
      label: "เปอร์เซ็น",
      data: [67, 33],
      backgroundColor: ["#018294", "#FE616A"],
    },
  ],
};

export default function Doughnutchart() {
  return <Doughnut data={data} />;
}
