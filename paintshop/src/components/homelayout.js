import * as React from "react";
import { Container, CssBaseline } from "@mui/material";
import Navbar from "./navbar";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
export default function Homelayout({ children }) {
  const { user, isAdmin } = useAuthContext();
  const router = useRouter();

  React.useEffect(() => {
    if (user == null) router.push("/");
  }, [user]);
  if (!user) {
    return null;
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        maxWidth="sx"
        sx={{ bgcolor: "#FAF8F1" }}
        style={{ padding: "0px" }}
      >
        <Navbar />
        {children}
      </Container>
    </React.Fragment>
  );
}
