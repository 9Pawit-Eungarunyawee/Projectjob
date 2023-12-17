import * as React from "react";
import { Container, Grid } from "@mui/material";
import Sidebar from "./sidebar";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
export default function Layout({ children }) {
  const { user, isAdmin } = useAuthContext();
  const router = useRouter();

  React.useEffect(() => {
    if (user == null) {
      router.push("/");
    }
    if (isAdmin == false) {
      router.push("/homepage");
    }
  }, [user]);
  if (!user) {
    return null;
  }
  if (isAdmin == false) {
    return null;
  }
  return (
    <React.Fragment>
      <Container maxWidth="sx" style={{ padding: 0 }}>
        <Grid container spacing={2} sx={{ bgcolor: "#FAF8F1" }}>
          <Grid item xs={2.5}>
            <Sidebar />
          </Grid>
          <Grid item xs={9.5}>
            {children}
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
