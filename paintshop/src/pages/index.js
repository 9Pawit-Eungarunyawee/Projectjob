import Link from "next/link";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function App() {
  return (
   
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sx" sx={{padding:0}}>
        <Box>
          <h1>Home</h1>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/product">Procut</Link>
        </Box>
      </Container>
    </React.Fragment>
    
  );
}
