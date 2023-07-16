import * as React from "react";
import { Container, CssBaseline } from "@mui/material";
import Navbar from "./navbar";
export default function Homelayout({ children }) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar />
      <Container maxWidth="sx" sx={{ padding: 0 }}>
        {children}
      </Container>
    </React.Fragment>
  );
}
