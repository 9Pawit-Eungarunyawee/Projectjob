import forgetPassword from "@/firebase/auth/forget";
import { ThemeProvider } from "@emotion/react";
import {
  Box,
  Button,
  Container,
  CssBaseline,
  Dialog,
  DialogActions,
  DialogTitle,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  createTheme,
} from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";

export default function Forget() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#FE616A",
      },
    },
  });
  const [email, setEmail] = useState("");
  const handleForm = async (event) => {
    event.preventDefault();
    const { result, error } = await forgetPassword(email);
    if (!error) {
        setOpen(true);
    }
  };
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <ThemeProvider theme={theme}>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle >
          <Typography variant="h6">ส่งลิงค์รีเซ็ตรหัสผ่านไปยังอีเมลแล้ว</Typography>
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose}>รับทราบ</Button>
        </DialogActions>
      </Dialog>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sx" style={{ padding: "0px" }}>
          <Box
            sx={{
              bgcolor: "#FAF8F1",
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <Grid
                container
                spacing={0}
                sx={{
                  bgcolor: "#fff",
                  width: "90vw",
                  minHeight: "80%",
                  borderRadius: "15px",
                  boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                }}
              >
                <Grid
                  item
                  xs={12}
                  xl={6}
                  sm={6}
                  style={{
                    backgroundImage: "url('/img/bannerlogo.jpg')",
                    backgroundSize: "cover",
                    borderRadius: "15px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    src="/logo2.png"
                    width={300}
                    height={300}
                    alt="loginbanner"
                    priority
                  />
                </Grid>
                <Grid item xs={12} xl={6} sm={6}>
                  <Box sx={{ padding: "5vw" }}>
                    <Typography
                      sx={{
                        textShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)",
                        fontSize: "2.5rem",
                        mb: 4,
                      }}
                    >
                      ลืมรหัสผ่าน
                    </Typography>
                    <form onSubmit={handleForm} className="form">
                      <Box sx={{ mb: 4 }}>
                        <TextField
                          id="email"
                          label="อีเมล"
                          variant="outlined"
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          fullWidth
                        />
                      </Box>

                      <Box>
                        <Button
                          variant="contained"
                          sx={{ p: 2,mb:2}}
                          fullWidth
                          type="submit"
                        >
                          ส่งลิงค์รีเซ็ตรหัสผ่าน
                        </Button>
                        <Button
                          variant="outlined"
                          sx={{ p: 2, mb: 4 }}
                          fullWidth
                          onClick={()=>window.history.back()}
                        >
                          กลับไปยังเข้าสู่ระบบ
                        </Button>
                      </Box>
                    </form>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </React.Fragment>
    </ThemeProvider>
  );
}
