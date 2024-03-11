import * as React from "react";
import Homelayout from "@/components/homelayout";
import Accordionlayout from "@/components/accordionlayout";
import {
  Typography,
  Container,
  Grid,
  Breadcrumbs,
  Box,
  Button,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAuthContext } from "@/context/AuthContext";
import { ProductContext } from "@/context/ProductContext";
import { debounce } from "lodash";
import searchUser from "@/firebase/searchData";
import Refunddetail from "./detail";
function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function Refund() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#018294",
      },
      success: {
        main: "#A9C470",
      },
      edit: {
        main: "#FFC300",
      },
      error: {
        main: "#FE616A",
      },
    },
  });
  const router = useRouter();
  const user = useAuthContext();
  const [userData, setUserData] = React.useState(null);
  const [orderData, setOrderData] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState("");
  const OrderId = JSON.parse(router.query.Order);
  return (
    <ThemeProvider theme={theme}>
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
                <Grid item sm={9} xs={12} sx={{ p: 2, pl: 2 }}>
                  <Grid
                    item
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        fontSize: "18px",
                        pb: 2,
                        pt: 2,
                      }}
                    >
                      คืนสินค้า
                    </Typography>
                  </Grid>
                  <Grid><Refunddetail /></Grid>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>
      </Homelayout>
    </ThemeProvider>
  );
}
