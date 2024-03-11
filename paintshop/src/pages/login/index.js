import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import signIn from "@/firebase/auth/signin";
import {
  Button,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Visibility, VisibilityOff } from "@mui/icons-material";
export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error,setError] = React.useState("")
  const router = useRouter();

  const handleForm = async (event) => {
    event.preventDefault();

    const { result, error } = await signIn(email, password);

    if (error) {
      return setError("รหัสผ่านไม่ถูกต้อง");
  }
    // else successful
    console.log(result);
    return router.push("/homepage");
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#FE616A",
      },
    },
  });
  const [showPassword, setShowPassword] = React.useState(false);
  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  return (
    <ThemeProvider theme={theme}>
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
                      เข้าสู่ระบบ
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
                        <TextField
                        
                          id="password"
                          label="รหัสผ่าน"
                          variant="outlined"
                          error={!!error} // ตรวจสอบว่ามีข้อผิดพลาดหรือไม่
                          helperText={error && "รหัสผ่านไม่ถูกต้อง"} // แสดงข้อความผิดพลาดเมื่อมีข้อผิดพลาด
                          type={showPassword ? "text" : "password"}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                          fullWidth
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <IconButton
                                  onClick={handleTogglePasswordVisibility}
                                  edge="end"
                                >
                                  {showPassword ? (
                                    <VisibilityOff />
                                  ) : (
                                    <Visibility />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            ),
                          }}
                        />
                      </Box>
                      <Box sx={{ display: "flex" }}>
                        <Link href={"/forget"}>
                          <Typography sx={{ mb: 4 }}>ลืมรหัสผ่าน?</Typography>
                        </Link>
                        <Link href={"/register"}>
                          <Typography sx={{ mb: 4, ml: 2 }}>
                            สมัครสมาชิก
                          </Typography>
                        </Link>
                      </Box>

                      <Box>
                        <Button
                          variant="contained"
                          sx={{ p: 2, mb: 4 }}
                          fullWidth
                          type="submit"
                        >
                          เข้าสู่ระบบ
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
