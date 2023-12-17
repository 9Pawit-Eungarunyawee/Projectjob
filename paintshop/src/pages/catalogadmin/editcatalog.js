import Layout from "@/components/layout";
import addCatalog from "@/firebase/addCatalog";
import { getCollection } from "@/firebase/getData";
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
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { CirclePicker } from "react-color";

export default function EditCatalog() {
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
  const router = useRouter();
  const catalog_id = JSON.parse(router.query.catalog_id);
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [open, setOpen] = useState(false);
  const [alert, setAlert] = useState(null);
  const [background, setBackground] = useState("#ff3");
  const [colorShade, setColorShade] = useState([]);
  const [colorShadeID, setColorShadeID] = useState("");
  useEffect(() => {
    fetchAllColorShade();
  }, []);

  const fetchAllColorShade = async () => {
    const collectionName = "colorshade";
    const { result, error } = await getCollection(collectionName);
    if (error) {
      console.error("Error fetching document:", error);
    } else if (result) {
      const colorShade = result.docs.map((doc) => ({
        id: doc.id,
        name: doc.data().name,
        code: doc.data().code,
      }));
      setColorShade(colorShade);
      // console.log(colorShade);
    }
  };

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
      setAlert(
        <Alert severity="success" onClose={handleClose}>
          เพิ่มข้อมูลสำเร็จ
        </Alert>
      );
      setOpen(true);
    } else {
      setAlert(
        <Alert severity="error" onClose={handleClose}>
          ผิดพลาด! ไม่สามารถเพิ่มข้อมูลได้
        </Alert>
      );
      setOpen(true);
    }
  };
  const [isPressed, setIsPressed] = useState(false);
  const handleColorShade = (id, code) => {
    setColorShadeID(id);
    setBackground(code);
    console.log(colorShadeID);
  };
  return (
    <Layout>
      <ThemeProvider theme={theme}>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          {alert}
        </Snackbar>
        <Box sx={{ height: "100%", width: "100%", mt: 5 }}>
          <Typography sx={{ fontSize: "2vw", fontWeight: "600" }}>
            แก้ไขแคตตาล็อก
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
                <Typography sx={{ mt: 1 }}>ชื่อแคตตาล็อก:</Typography>
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

                <Typography sx={{ mt: 1 }}>สี:</Typography>
                <Box sx={{ ml: 2 }}>
                  <Box>
                    <Typography sx={{ mt: 1 }}>เฉดสี:</Typography>
                    <Box
                      sx={{
                        width: "10vw",
                        height: "3vw",
                        bgcolor: background,
                        transition: "0.2s",
                        boxShadow: "4px 4px 4px 0px rgba(0, 0, 0, 0.20)",
                        mb: 2,
                        borderRadius: "5px",
                      }}
                    />
                    <Box sx={{ display: "flex", height: "4.5vw" }}>
                      {colorShade &&
                        colorShade.map((shade) => (
                          <Box
                            key={shade.id}
                            onClick={() =>
                              handleColorShade(shade.id, shade.code)
                            }
                            sx={{
                              bgcolor: shade.code,
                              width: "3vw",
                              height: shade.id == colorShadeID ? "4vw" : "3vw",
                              cursor: "pointer",
                              borderRadius: "100px",
                              transition: "background-color 0.2s, height 0.3s",
                              boxShadow: "4px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                              m: 1,
                              ":hover": {
                                width: "3vw",
                                height: "4vw",
                              },
                            }}
                          />
                        ))}
                    </Box>
                  </Box>
                  <hr />
                  <Typography sx={{ mt: 1 }}>เพิ่มสี:</Typography>
                  <Box
                    sx={{
                      "& .MuiTextField-root": { m: 1, width: "25ch" },
                    }}
                  >
                    <TextField
                      variant="outlined"
                      value={name}
                      label="โค้ดสี"
                      required
                      size="small"
                      sx={{ mt: 1, mb: 1 }}
                      onChange={(e) => setName(e.target.value)}
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
                    <TextField
                      variant="outlined"
                      value={name}
                      label="โค้ดเนม"
                      required
                      size="small"
                      sx={{ mt: 1, mb: 1 }}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <Button
                    
                      variant="contained"
                      sx={{ mt: 1, mb: 1 ,width: "34ch",m: 1}     }
                     
                    >
                      เพิ่มสี
                    </Button>
                  </Box>
                </Box>
                <Button
                  variant="contained"
                  color="success"
                  sx={{ mr: 2, mb: 2, mt: 2 ,}}
                  type="submit"
                >
                  แก้ไขแค็ตตาล็อก
                </Button>
              </form>
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </Layout>
  );
}
