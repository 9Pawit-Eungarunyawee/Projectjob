import * as React from "react";
import { Box, Container, Grid } from "@mui/material";
import Sidebar from "./sidebar";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import NavbarAdmin from "./navbaradmin";
export default function Layout({ children }) {
  const { user, role } = useAuthContext();
  const router = useRouter();

  React.useEffect(() => {
    if (user == null) {
      router.push("/");
    }
    if (role == "user") {
      router.push("/homepage");
    }
  }, [user]);
  if (!user){
    return null;
  }
  if (role == "user") {
    return null;
  }
  return (
    <React.Fragment>
      <Container maxWidth="sx" style={{ padding: 0 }}>
        <Grid container spacing={2} sx={{ bgcolor: "#FAF8F1" }}>
          <Grid item xs={0} lg={2.5} sx={{ display: { xs: 'none', lg: 'block' } }}>
            <Sidebar />
          </Grid>
          <Grid item xs={0} lg={2.5} sx={{ display: { xs: 'block', lg: 'none' } }}>
            <NavbarAdmin />
          </Grid>
          <Grid item xs={12} lg={9.5}>
            <Box sx={{pl:2,pr:2}}>{children}</Box>

          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
