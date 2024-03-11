import React, { useContext } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { OrderContext } from "@/context/OrderContext";
import { BuyContext } from "@/context/BuyContext";
ChartJS.register(ArcElement, Tooltip, Legend);
export const options = {
  plugins: {
    legend: {
      display: false, 
    },
  },
}

export default function Doughnutchart() {
  const {orderData} = useContext(OrderContext);
  const {buyData} = useContext(BuyContext);
  
  

  const data = {
    labels: ["รายรับ", "รายจ่าย"],
    datasets: [
      {
        label: "บาท",
        data: [67, 33],
        backgroundColor: ["#018294", "#FE616A"],
      },
    ],
  };
  
  return <Doughnut data={data} />;
}
