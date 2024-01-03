import * as React from "react";
import { Typography, Container, Grid, Breadcrumbs, Box } from "@mui/material";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { styled } from "@mui/material/styles";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import AnnouncementOutlinedIcon from "@mui/icons-material/AnnouncementOutlined";
import Link from "next/link";
import { useRouter } from "next/router";
//ฟังก์ชั่น Accordion
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  flexDirection: "row",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderBottom: "1px solid rgba(0, 0, 0, .125)",
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));
export default function Accordionlayout() {
  const [expanded, setExpanded] = React.useState("panel1");
  const router = useRouter();
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <PersonOutlineIcon sx={{ color: "grey" }} />
          <Typography sx={{ pl: 2, fontWeight: "bold" }}>
            บัญชีของฉัน
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{ pl: 8, display: "flex", flexDirection: "column" }}
        >
          <Link
            style={{
              textDecoration: "none",
              color:
                router.pathname === "/account/profile" ? "#018294" : "inherit",
              fontWeight:
                router.pathname === "/account/profile" ? "bold" : "normal",
            }}
            href="/account/profile"
          >
            ข้อมูลส่วนตัว
          </Link>
          <Link
            style={{
              textDecoration: "none",
              color:
                router.pathname === "/account/address" ? "#018294" : "inherit",
              fontWeight:
                router.pathname === "/account/address" ? "bold" : "normal",
            }}
            href="/account/address"
          >
            ที่อยู่
          </Link>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          aria-controls="panel2d-content"
          id="panel2d-header"
          expandIcon={null}
        >
          <DescriptionOutlinedIcon sx={{ color: "grey" }} />
          <Typography sx={{ pl: 2 }}>
            <Link
              style={{
                textDecoration: "none",
                color:
                  router.pathname === "/account/orderhistory"
                    ? "#018294"
                    : "inherit",
                fontWeight: "bold",
              }}
              href="/account/orderhistory"
            >
              รายการคำสั่งซื้อ
            </Link>
          </Typography>
        </AccordionSummary>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          aria-controls="panel3d-content"
          id="panel3d-header"
          expandIcon={null}
        >
          <AnnouncementOutlinedIcon sx={{ color: "grey" }} />
          <Typography sx={{ pl: 2 }}>
            <Link
              style={{
                textDecoration: "none",
                color:
                  router.pathname === "/account/claim" ? "#018294" : "inherit",
                fontWeight: "bold",
              }}
              href="/account/claim"
            >
              การเคลมสินค้า
            </Link>
          </Typography>
        </AccordionSummary>
      </Accordion>
    </>
  );
}
