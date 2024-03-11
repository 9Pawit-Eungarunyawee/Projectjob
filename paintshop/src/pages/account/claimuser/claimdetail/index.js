import * as React from "react";
import Homelayout from "@/components/homelayout";
import Accordionlayout from "@/components/accordionlayout";
import {
  Typography,
  Container,
  Grid,
  Breadcrumbs,
  Box,
  Tab,
  Tabs,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import Refunddetail from "../refund/detail";
const styles = {
  Active: {
    "&.Mui-selected": {
      fontWeight: "bold",
      color: "#018294",
    },
  },
};
function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}
// ฟังก์ชั่นควบคุม Tab
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
export default function Claimdetail() {
  const router = useRouter();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Homelayout>
        <Box sx={{ width: "100%" }}>
          <Container
            maxWidth="false"
            sx={{
              display: "flex",
              justifyContent: "center",
              bgcolor: "#FAF8F1",
            }}
          >
            <Box sx={{ width: "70vw", pt: 2, pb: 2 }}>
              <div role="presentation" onClick={handleClick}>
                <Breadcrumbs aria-label="Beger">
                  <Link
                    style={{ textDecoration: "none", color: "inherit" }}
                    sx={{
                      color: "inherit",
                      "&:hover": { textDecoration: "underline" },
                    }}
                    href="/homepage"
                  >
                    หน้าแรก
                  </Link>
                  <Typography color="text.primary">บัญชีของฉัน</Typography>
                </Breadcrumbs>
              </div>
            </Box>
          </Container>
          <Container
            maxWidth={false}
            sx={{
              display: "flex",
              justifyContent: "center",
              bgcolor: "white",
            }}
          >
            <Box sx={{ p: 3, width: "70vw" }}>
              <Grid container spacing={2}>
                <Grid item sm={3} xs={12}>
                  <Accordionlayout />
                </Grid>
                <Grid item sm={9} xs={12}>
                  <Refunddetail />
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>
      </Homelayout>
    </>
  );
}
