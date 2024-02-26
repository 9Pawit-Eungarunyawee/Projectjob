import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import searchUser from "@/firebase/searchData";
import { debounce } from "lodash";

const steps = [
  {
    label: "ได้รับคำสั่งซื้อแล้ว",
    description: `ขอบคุณที่ซื้อสินค้าจากทางร้านเรา เราได้รับคำสั่งซื้อเรียบร้อยแล้ว`,
  },
  {
    label: "กำลังจัดเตรียมสินค้า",
    description: "กำลังตรวจสอบรายการจ่ายเงินและดำเนินการจัดเตรียมสินค้า",
  },
  {
    label: "มอบสินค้าให้ขนส่งแล้ว",
    description: "กำลังตรวจสอบรายการจ่ายเงินและดำเนินการจัดเตรียมสินค้า",
  },
  {
    label: "จัดส่งสำเร็จ",
    description: "กำลังตรวจสอบรายการจ่ายเงินและดำเนินการจัดเตรียมสินค้า",
  },
];

export default function Stepperdetail() {
  const [activeStep, setActiveStep] = React.useState(0);
  const router = useRouter();
  const OrderId = JSON.parse(router.query.Order);
  const [orderData, setOrderData] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState("");

  const formatTimestamp = (timestamp) => {
    const date = timestamp.toDate();
    return date.toLocaleString("th-TH", {
      dateStyle: "medium",
      timeStyle: "short",
    });
  };

  React.useEffect(() => {
    handleSearch("");
  }, []);

  React.useEffect(() => {
    handleSearch(searchTerm);
  }, [searchTerm]);

  const debouncedSearchOrder = debounce(async (term) => {
    try {
      const collectionName = "orders";
      const field = "status";
      const results = await searchUser(collectionName, field, term);
      const filteredResults = results.filter((doc) => doc.id === OrderId);
      setOrderData(filteredResults);
    } catch (error) {
      console.error("Error searching data:", error);
    }
  }, 200);

  const handleSearch = (term) => {
    setSearchTerm(term);
    debouncedSearchOrder(term);
  };
  React.useEffect(() => {
    // อัพเดตขั้นตอนเมื่อ orderData เปลี่ยนแปลง
    const status = orderData.length > 0 ? orderData[0].status : null;
    let active;
    switch (status) {
      case "รอยืนยัน":
        active = 0;
        break;
      case "จัดเตรียมสินค้า":
        active = 1;
        break;
      case "อยู่ระหว่างจัดส่ง":
        active = 2;
        break;
      case "จัดส่งสำเร็จ":
        active = 3;
        break;
      default:
        active = 0;
    }
    setActiveStep(active);
  }, [orderData]);
  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              StepIconProps={{
                style: {
                  color: index === activeStep ? "#018294" : "#ccc",
                },
              }}
            >
              <Typography sx={{ fontWeight: "bold" }}>{step.label}</Typography>
            </StepLabel>
            <StepContent>
              <Typography variant="text.secondary">
                {step.description}
              </Typography>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
