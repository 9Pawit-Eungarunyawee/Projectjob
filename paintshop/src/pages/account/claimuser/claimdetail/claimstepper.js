import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Check from "@mui/icons-material/Check";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import searchUser from "@/firebase/searchData";
import { useRouter } from "next/router";
import { debounce } from "lodash";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";

const QontoStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  color: theme.palette.mode === "dark" ? theme.palette.grey[700] : "#eaeaf0",
  display: "flex",
  height: 22,
  alignItems: "center",
  ...(ownerState.active && {
    color: "#784af4",
  }),
  "& .QontoStepIcon-completedIcon": {
    color: "#784af4",
    zIndex: 1,
    fontSize: 18,
  },
  "& .QontoStepIcon-circle": {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "currentColor",
  },
}));

function QontoStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
};

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: "#018294",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: "#018294",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
  zIndex: 1,
  color: "#fff",
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    backgroundColor: "#018294",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  }),
  ...(ownerState.completed && {
    backgroundColor: "#018294",
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <ArticleOutlinedIcon />,
    2: <PaymentOutlinedIcon />,
    3: <ArchiveOutlinedIcon />,
    4: <LocalShippingOutlinedIcon />,
    5: <Check />,
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const steps = [
  "ได้รับคำสั่งซื้อ",
  "ยืนยันการชำระเงิน",
  "จัดเตรียมสินค้า",
  "อยู่ระหว่างจัดส่ง",
  "จัดส่งสำเร็จ",
];

export default function Claimsteppers() {
  const router = useRouter();
  const OrderId = JSON.parse(router.query.Order);
  const [orderData, setOrderData] = React.useState([]); // เพิ่ม state เก็บข้อมูล order
  const [searchTerm, setSearchTerm] = React.useState("");
  React.useEffect(() => {
    // ทำสิ่งที่คุณต้องการกับ searchResults ที่ได้
    handleSearch("");
  }, []);

  React.useEffect(() => {}, [orderData]);
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
  }, 200); // กำหนดเวลา debounce ที่คุณต้องการ
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
      case "ยืนยัน":
        active = 1;
        break;
      case "จัดเตรียมสินค้า":
        active = 2;
        break;
      case "อยู่ระหว่างจัดส่ง":
        active = 3;
        break;
      case "จัดส่งสำเร็จ":
        active = 4;
        break;
      default:
        active = 0;
    }
    setActiveStep(active);
  }, [orderData]);

  const [activeStep, setActiveStep] = React.useState(0);

  return (
    <Stack sx={{ width: "100%" }} spacing={4}>
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={<ColorlibConnector />}
      >
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Stack>
  );
}
