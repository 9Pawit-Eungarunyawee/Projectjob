import * as React from "react";
import { Container, CssBaseline, Grid } from "@mui/material";
import Navbar from "./navbar";
import Footer from "./footer";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
export default function Homelayout({ children }) {
  const { user, isAdmin } = useAuthContext();
  const router = useRouter();

  React.useEffect(() => {
    if (user == null) router.push("/");
  }, [user]);
  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        maxWidth="sx"
        sx={{
          display: "grid",
          gridTemplateRows: "auto 1fr auto",
          minHeight: "100vh",
          bgcolor: "#FAF8F1",
        }}
        style={{ padding: "0px" }}
      >
        <Navbar />
        <Grid item >
          {children}
        </Grid>
        <Footer />
      </Container>
    </React.Fragment>
  );
}
