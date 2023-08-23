import Homelayout from "@/components/homelayout";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Colorshade from "../colorshade";
import Brands from "../products/brands";
export default function Products() {
  return (
    <Homelayout>
      <Box sx={{ height: "100vh", width: "100%" }}>
        <Colorshade />
        <Brands />
      </Box>
    </Homelayout>
  );
}
