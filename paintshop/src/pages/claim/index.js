import Box from "@mui/material/Box";
import Layout from "@/components/layout";
import { ThemeProvider, Typography, createTheme } from "@mui/material";
import TableClaim from "./table";
import { ClaimContext } from "@/context/ClaimContext";
import { useContext, useEffect } from "react";
import { UserContext } from "@/context/UserContext";
export default function Claim() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#018294",
      },
      success: {
        main: "#A9C470",
      },
      error: {
        main: "#FE616A",
      },
    },
  });
  const { claimData, fetchClaimData } = useContext(ClaimContext);
  const {userData,fetchUserData} = useContext(UserContext);
  useEffect(() => {
    fetchClaimData();
    fetchUserData();
  }, []);
  return (
    <Layout>
      <ThemeProvider theme={theme}>
        <Box>
          <Box sx={{ height: "100%", width: "100%", mt: 5 }}>
            <Typography sx={{ fontSize: "2rem", fontWeight: "600" }}>
              การเคลมสินค้า
            </Typography>
            <TableClaim documentData={claimData} userData={userData}/>
          </Box>
        </Box>
      </ThemeProvider>
    </Layout>
  );
}
