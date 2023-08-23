import * as React from "react";
import Homelayout from "@/components/homelayout";
import { Box, Typography } from "@mui/material";

export default function Designs() {
  return (
    <>
      <Homelayout>
        <Box sx={{ height: "100vh", width: "100%" }}>
          <Typography>ออกแบบ</Typography>
        </Box>
      </Homelayout>
    </>
  );
}
