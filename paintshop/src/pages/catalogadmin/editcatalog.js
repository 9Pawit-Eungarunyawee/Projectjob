import Layout from "@/components/layout";
import addCatalog from "@/firebase/addCatalog";
import addColor from "@/firebase/addColor";
import editCatalog from "@/firebase/editCatalog";
import getDoument, { getCollection, getColors } from "@/firebase/getData";
import {
  Alert,
  Box,
  Button,
  Grid,
  Snackbar,
  TextField,
  ThemeProvider,
  Tooltip,
  Typography,
  createTheme,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
import { BlockPicker, CirclePicker } from "react-color";

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
  const [detail, setDetail] = useState("");
  const [colorname, setColorName] = useState("");
  const [code, setCode] = useState("");
  const [codename, setCodeName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [open, setOpen] = useState(false);
  const [alert, setAlert] = useState(null);
  const [background, setBackground] = useState("#fff");
  const [colorShade, setColorShade] = useState([]);
  const [allcolor, setAllColor] = useState([]);
  const [colorShadeID, setColorShadeID] = useState("");
  useEffect(() => {
    fetchAllColorShade();
    fetchCatalog();
    fetchAllColor();
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
      setBackground(colorShade[0].code);
      // console.log(colorShade);
    }
  };
  const fetchCatalog = async () => {
    const collectionName = "catalog";
    const { result, error } = await getDoument(collectionName, catalog_id);
    if (error) {
      console.error("Error fetching document:", error);
    } else if (result) {
      const catalog = result.data();
      setName(catalog.name);
      setImageUrl(catalog.img);
      setDetail(catalog.detail);
    }
  };

  const fetchAllColor = async () => {
    const collectionName = "colors";
    const { result, error } = await getColors(collectionName, catalog_id);
    if (error) {
      console.error("Error fetching colors:", error);
    } else if (result) {
      const colors = result.docs.map((doc) => ({
        id: doc.id,
        name: doc.data().name,
        code: doc.data().code,
        codename: doc.data().code_name,
        catalog_id: doc.data().catalog_id.id,
      }));
      // console.log(colors);
      setAllColor(colors);
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

    const result = await editCatalog("catalog", catalog_id, catalog);
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

  const handleColorShade = (id, code) => {
    setColorShadeID(id);
    setBackground(code);
    console.log(colorShadeID);
  };
  const handleAddColor = async (event) => {
    event.preventDefault();
    console.log("colordata:", name, code, codename, catalog_id, colorShadeID);
    if (colorShadeID === "") {
      setAlert(
        <Alert severity="error" onClose={handleClose}>
          กรุณาเลือกเฉดสีก่อนเพิ่มสี
        </Alert>
      );
      setOpen(true);
      return;
    }
    //เช็ค hex
    const isValidHexColor = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(code);
    if (!isValidHexColor) {
      setAlert(
        <Alert severity="error" onClose={handleClose}>
          กรุณากรอกโค้ดสีให้ถูกต้อง
        </Alert>
      );
      setOpen(true);
      return;
    }
    if (
      colorname !== "" &&
      code !== "" &&
      codename !== "" &&
      catalog_id &&
      colorShadeID
    ) {
      const color = {
        catalog_id: catalog_id,
        code: code,
        codename: codename,
        colorshade_id: colorShadeID,
        name: colorname,
      };
      const result = await addColor("colors", color);
      setCode("");
      setCodeName("");
      setColorName("");
      if (result) {
        setAlert(
          <Alert severity="success" onClose={handleClose}>
            เพิ่มสีสำเร็จ
          </Alert>
        );
        setOpen(true);
        fetchAllColor();
      } else {
        setAlert(
          <Alert severity="error" onClose={handleClose}>
            ผิดพลาด! ไม่สามารถเพิ่มสีได้
          </Alert>
        );
        setOpen(true);
      }
    }
  };
  return (
    <Layout>
      <ThemeProvider theme={theme}>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          {alert}
        </Snackbar>
        <Box sx={{ height: "100%", width: "100%", mt: 5 }}>
          <Typography sx={{ fontSize: "2rem", fontWeight: "600" }}>
            แก้ไขแคตตาล็อก
          </Typography>
          <form onSubmit={handleForm} className="form">
            <Grid
              container
              spacing={0}
              sx={{
                mt: 3,
                mb: 5,
                backgroundColor: "#fff",
                p: 2,
                borderRadius: "10px",
                boxShadow: "4px 4px 4px 0px rgba(0, 0, 0, 0.25)",
              }}
            >
              <Grid item xs={12} sm={7}>
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
                <Typography sx={{ mt: 1 }}>รายละเอียดแค็ตตาล็อก:</Typography>
                <TextField
                  value={detail}
                  onChange={(e) => setDetail(e.target.value)}
                  variant="outlined"
                  label="รายละเอียดแค็ตตาล็อก"
                  fullWidth
                  required
                  rows={4}
                  multiline
                  size="small"
                  sx={{ mt: 1, mb: 1 }}
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
                      เปลี่ยนรูปภาพแคตตาล็อก
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

                <Typography sx={{ mt: 1 }}>เพิ่มสี:</Typography>
                <Box sx={{ ml: 2 }}>
                  <Box>
                    <Typography sx={{ mt: 1 }}>เฉดสี:</Typography>
                    <Box
                      sx={{
                        width: "10rem",
                        height: "3rem",
                        bgcolor: background,
                        transition: "0.2s",
                        boxShadow: "4px 4px 4px 0px rgba(0, 0, 0, 0.20)",
                        mb: 2,
                        borderRadius: "5px",
                      }}
                    />
                    <Box sx={{ display: "flex" }}>
                      {colorShade &&
                        colorShade.map((shade) => (
                          <Box
                            key={shade.id}
                            onClick={() =>
                              handleColorShade(shade.id, shade.code)
                            }
                            sx={{
                              bgcolor: shade.code,
                              width: "2rem",
                              height: "3rem",
                              transform:
                                shade.id == colorShadeID
                                  ? "scale(1.2)"
                                  : "scale(1)",
                              cursor: "pointer",
                              borderRadius: "100px",
                              transition: "0.2s",
                              boxShadow: "4px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                              m: 1,
                              ":hover": {
                                transform: "scale(1.2)",
                              },
                            }}
                          />
                        ))}
                    </Box>
                  </Box>
                  <hr />
                  <Typography sx={{ mt: 1 }}>สี:</Typography>
                  <Box
                    sx={{
                      "& .MuiTextField-root": { m: 1, width: "25ch" },
                    }}
                  >
                    <Box
                      sx={{
                        width: "10rem",
                        height: "3rem",
                        bgcolor: code,
                        transition: "0.2s",
                        boxShadow: "4px 4px 4px 0px rgba(0, 0, 0, 0.20)",
                        mb: 2,
                        borderRadius: "5px",
                      }}
                    />
                    <TextField
                      variant="outlined"
                      value={code}
                      label="โค้ดสี"
                      size="small"
                      sx={{ mt: 1, mb: 1 }}
                      onChange={(e) => setCode(e.target.value)}
                      placeholder="#RRGGBB หรือ #RGB"
                    />
                    <TextField
                      variant="outlined"
                      value={colorname}
                      label="ชื่อสี"
                      size="small"
                      sx={{ mt: 1, mb: 1 }}
                      onChange={(e) => setColorName(e.target.value)}
                    />
                    <TextField
                      variant="outlined"
                      value={codename}
                      label="โค้ดเนม"
                      size="small"
                      sx={{ mt: 1, mb: 1 }}
                      onChange={(e) => setCodeName(e.target.value)}
                    />
                    <Button
                      variant="contained"
                      sx={{ mt: 1, mb: 1, width: "34ch", m: 1 }}
                      onClick={handleAddColor}
                    >
                      เพิ่ม
                    </Button>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={5}>
                <Typography sx={{ mt: 1 }}>สีที่มีในแคตตาล็อก:</Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                  {allcolor &&
                    allcolor.map((color, index) => (
                      <Tooltip
                        key={index}
                        arrow
                        title={
                          <Fragment>
                            <Typography color="inherit">
                              โค้ดสี: {color.code}
                            </Typography>
                            <Typography color="inherit">
                              ชื่อสี: {color.name}
                            </Typography>
                            <Typography color="inherit">
                              โค้ดเนม: {color.codename}
                            </Typography>
                          </Fragment>
                        }
                      >
                        <Box
                          sx={{
                            bgcolor: color.code,
                            width: "2rem",
                            height: "3rem",
                            cursor: "pointer",
                            borderRadius: "100px",
                            transition: "0.1s",
                            boxShadow: "4px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                            m: 1,
                            ":hover": {
                              transform: "scale(1.2)",
                            },
                          }}
                        />
                      </Tooltip>
                    ))}
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="success"
                  sx={{ mr: 2, mb: 2, mt: 2 }}
                  type="submit"
                >
                  แก้ไขแค็ตตาล็อก
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </ThemeProvider>
    </Layout>
  );
}
