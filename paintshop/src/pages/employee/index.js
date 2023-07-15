import * as React from "react";
import Box from "@mui/material/Box";
import Layout from "@/components/layout";
import { Typography } from "@mui/material";

export default function Employee() {
  return (
    <>
      <Layout>
        <Box sx={{ height: "100vh", width: "100%" }}>
          <Typography>employee</Typography>
        </Box>
      </Layout>
    </>
  );
}