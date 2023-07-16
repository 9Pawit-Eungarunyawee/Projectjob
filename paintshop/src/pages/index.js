import Link from "next/link";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Homelayout from "@/components/homelayout";
export default function App() {
  return (
    <Homelayout>
      <Box>
        <h1>Home</h1>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/product">Procut</Link>
      </Box>
    </Homelayout>
  );
}
