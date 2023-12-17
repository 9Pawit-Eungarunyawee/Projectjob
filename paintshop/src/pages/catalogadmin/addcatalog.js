import Layout from "@/components/layout";
import addCatalog from "@/firebase/addCatalog";
import {
  Alert,
  Box,
  Button,
  Grid,
  Snackbar,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";

export default function AddCatalog() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#018294",
      },
      success: {
        main: "#A9C470",
      },
      error: {
        main: "#FE616A",
      },
    },
  });


  const [ name, setName ]= useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [open, setOpen] = useState(false);
  const [alert, setAlert] = useState(null);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) {
      console.error("No file selected.");
      setImageUrl("");
      return;
    }
    const reader = new FileReader();

    reader.onloadend = () => {
      setImageUrl(reader.result);
    };

    reader.readAsDataURL(file);
    // console.log(imageUrl);
  };
  const handleForm = async (event) => {
    event.preventDefault();
    const catalog = {
      name: name,
      img: imageUrl,

    };
    const result = await addCatalog("catalog", catalog);
    if (result) {
      setAlert(<Alert severity="success" onClose={handleClose}>เพิ่มข้อมูลสำเร็จ</Alert>);
      setOpen(true);
    } else {
      setAlert(
        <Alert severity="error" onClose={handleClose}>ผิดพลาด! ไม่สามารถเพิ่มข้อมูลได้</Alert>
      );
      setOpen(true);
    }
  };
  return (
    <Layout>
      <ThemeProvider theme={theme}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        {alert}
      </Snackbar>
        <Box sx={{ height: "100%", width: "100%", mt: 5 }}>
          <Typography sx={{ fontSize: "2vw", fontWeight: "600" }}>
            เพิ่มแค็ตตาล็อก
          </Typography>
          <Grid
            container
            spacing={1}
            sx={{
              width: "100%",
              mt: 3,
              mb: 5,
              backgroundColor: "#fff",
              p: 1,
              borderRadius: "10px",
              boxShadow: "4px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            }}
          >
            <Grid item xs={12} sm={7}>
              <form onSubmit={handleForm} className="form">
                <Typography sx={{ mt: 1 }}>ชื่อแค็ตตาล็อก:</Typography>
                <TextField
                  variant="outlined"
                  value={name}
                  label="ชื่อแคตตาล็อก"
                  fullWidth
                  required
                  size="small"
                  sx={{ mt: 1, mb: 1 }}
                  onChange={(e) => setName(e.target.value)}
                />

                <Box sx={{ textAlign: "left" }}>
                  <Typography sx={{ mb: 1 }}>รูปแค็ตตาล็อก:</Typography>
                  <Box>
                    {imageUrl && (
                      <Image
                        src={imageUrl}
                        alt="Uploaded Image"
                        priority
                        height="200"
                        width="260"
                        style={{
                          border: "1px solid rgba(0, 0, 0, 0.50)",
                          objectFit: "cover",
                        }}
                      />
                    )}
                  </Box>
                  <label htmlFor="upload-image">
                    <Button variant="contained" component="span">
                      เพิ่มรูปภาพสินค้า
                    </Button>
                    <input
                      id="upload-image"
                      hidden
                      accept="image/*"
                      type="file"
                      onChange={handleFileUpload}
                    />
                  </label>
                </Box>
                <Button
                  variant="contained"
                  color="success"
                  sx={{ mr: 2, mb: 2, mt: 2 }}
                  type="submit"
                >
                  เพิ่มแค็ตตาล็อก
                </Button>
                {/* <Typography sx={{ mt: 1 }}>สี:</Typography>
                <Box
                  sx={{
                    "& .MuiTextField-root": { m: 1, width: "25ch" },
                  }}
                >
                  <TextField
                    variant="outlined"
                    value={code}
                    label="โค้ดสี"
                    required
                    size="small"
                    sx={{ mt: 1, mb: 1 }}
                    onChange={(e) => setCode(e.target.value)}
                  />
                  <TextField
                    variant="outlined"
                    value={name}
                    label="ชื่อสี"
                    required
                    size="small"
                    sx={{ mt: 1, mb: 1 }}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Box> */}
              </form>
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </Layout>
  );
}
