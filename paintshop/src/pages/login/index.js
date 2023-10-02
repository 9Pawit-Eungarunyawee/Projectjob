import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import getDocument from "../../firebase/getData";
import signIn from "@/firebase/auth/signin";
import {
  Button,
  Grid,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import Image from "next/image";
import { getCollection } from "../../firebase/getData";
import { useRouter } from 'next/navigation'
export default function Login() {
  const [documentData, setDocumentData] = React.useState(null);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();

  React.useEffect(() => {
    fetchData();
    fetchAllData();
    console.log(documentData);
  }, []);  
  const handleForm = async (event) => {
    event.preventDefault();

    const { result, error } = await signIn(email, password);

    if (error) {
      return window.alert("รหัสผ่านไม่ถูกต้อง");
    }

    // else successful
    console.log(result);
    return router.push("/homepage");
  };
  const fetchData = async () => {
    const collection = "admin"; // แก้เป็นชื่อคอลเล็กชันที่คุณต้องการ
    const documentId = "1"; // แก้เป็น ID เอกสารที่คุณต้องการ

    const { result, error } = await getDocument(collection, documentId);

    if (error) {
      console.error("Error fetching document:", error);
    } else {
      setDocumentData(result.data());
      // console.log('Document data:', result.data());
    }
  };

  const fetchAllData = async () => {
    const collection = "admin";

    const { result: querySnapshot, error } = await getCollection(collection);

    if (error) {
      console.error("Error fetching collection:", error);
    } else {
      querySnapshot.forEach((doc) => {
        console.log("Document ID:", doc.id);
        console.log("Document data:", doc.data());
      });
    }
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#FE616A",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sx" style={{padding:"0px"}}>
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
                    src="/../public/logo2.png"
                    width={300}
                    height={300}
                    alt="loginbanner"
                  />
                </Grid>
                <Grid item xs={12} xl={6} sm={6} >
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
                          type="password"
                          onChange={(e) => setPassword(e.target.value)}
                          required
                          fullWidth
                        />
                      </Box>
                      <Typography sx={{ mb: 4 }}>ลืมรหัสผ่าน?</Typography>
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
