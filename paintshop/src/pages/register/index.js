import {
  Autocomplete,
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import signUp from "@/firebase/auth/signup";
import { useRouter } from "next/router";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
export default function AddEmployee() {
  const [profileUrl, setProfileUrl] = useState("default-profile.jpg");
  const [name, setName] = useState(null);
  const [tel, setTel] = useState(null);
  const [address, setAddress] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [conpassword, setConpassword] = useState(null);
  const [provinces, setProvinces] = useState([]);
  const [amphures, setAmphures] = useState([]);
  const [tambons, setTambons] = useState([]);
  const [provinceName, setProvinceName] = useState(undefined);
  const [amphureName, setAmphureName] = useState(undefined);
  const [tambonName, setTambonName] = useState(undefined);
  const [zipCode, setZipCode] = useState(undefined);
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [selected, setSelected] = useState({
    province_id: undefined,
    amphure_id: undefined,
    tambon_id: undefined,
  });
  useEffect(() => {
    console.log(selected);
    if (provinces) {
      const allAmphures = provinces.find(
        (province) => province.id === selected.province_id
      )?.amphure;
      setAmphures(allAmphures);
      const nameProvince = provinces.find(
        (province) => province.id === selected.province_id
      )?.name_th;
      setProvinceName(nameProvince);
    }
    if (amphures) {
      const allTambons = amphures.find(
        (amphure) => amphure.id === selected.amphure_id
      )?.tambon;
      setTambons(allTambons);
      const nameAmphure = amphures.find(
        (amphure) => amphure.id === selected.amphure_id
      )?.name_th;
      setAmphureName(nameAmphure);
    }
    if (tambons) {
      const nameTambon = tambons.find(
        (tambon) => tambon.id === selected.tambon_id
      )?.name_th;
      const zipcode = tambons.find(
        (tambon) => tambon.id === selected.tambon_id
      )?.zip_code;
      setTambonName(nameTambon);
      setZipCode(zipcode);
    }
  }, [selected, provinces, amphures, tambons]);

  const router = useRouter();
  //อ่านไฟล์ภาพ
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) {
      console.error("No file selected.");
      setProfileUrl("/../public/default-profile.jpg");
      return;
    }
    const reader = new FileReader();

    reader.onloadend = () => {
      setProfileUrl(reader.result);
    };

    reader.readAsDataURL(file);
    console.log(profileUrl);
  };
  //api ประเทศไทย
  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://raw.githubusercontent.com/kongvut/thai-province-data/master/api_province_with_amphure_tambon.json",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setProvinces(result);
      })
      .catch((error) => console.log("error", error));
  }, []);

  //กดสมัคร
  const handleForm = async (event) => {
    event.preventDefault();
    if (password == conpassword) {
      setPasswordsMatch(true);
      const { result, error } = await signUp(
        email,
        password,
        address,
        tel,
        name,
        profileUrl,
        provinceName,
        amphureName,
        tambonName,
        zipCode
      );
      if (error) {
        window.alert("ไม่สามารถสร้างบัญชีได้");
      } else {
        return router.push("/homepage");
      }
    } else {
      setPasswordsMatch(false);
    }
  };
  const [showPassword, setShowPassword] = useState(false);
  const [showConPassword, setConShowPassword] = useState(false);
  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const handleToggleConPasswordVisibility = () => {
    setConShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const theme = createTheme({
    palette: {
      primary: {
        main: "#FE616A",
      },
    },
  });
  const goBack = () => {
    window.history.back();
  };
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <CssBaseline />

        <form onSubmit={handleForm} className="form">
          <Box sx={{ m: 5 }}>
            <Grid
              container
              spacing={0}
              sx={{
                backgroundColor: "#fff",
                p: 2,
                borderRadius: "10px",
                boxShadow: "4px 4px 4px 0px rgba(0, 0, 0, 0.25)",
              }}
            >
              <Grid item xs={12}>
                <Button
                  sx={{
                    color: "#018294",
                    bgcolor: "white",
                    fontWeight: "bold",
                    borderRadius: "50px",
                    boxShadow: "4px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                    mb: 3,
                  }}
                  onClick={goBack}
                >
                  <ArrowBackOutlinedIcon />
                  <Typography>ย้อนกลับ</Typography>
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Box sx={{ textAlign: "center" }}>
                  <Box>
                    <Typography sx={{ fontSize: "1.5rem", fontWeight: "600" }}>
                      สร้างบัญชี
                    </Typography>
                    {profileUrl && (
                      <Image
                        src={profileUrl}
                        alt="Uploaded Image"
                        priority
                        height="150"
                        width="150"
                        style={{
                          borderRadius: "100px",
                          border: "1px solid rgba(0, 0, 0, 0.50)",
                        }}
                      />
                    )}
                  </Box>
                  <label htmlFor="upload-image">
                    <Button variant="contained" component="span">
                      เพิ่มรูปโปรไฟล์
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
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box sx={{ p: 1 }}>
                  <Typography>ข้อมูล:</Typography>
                  <TextField
                    variant="outlined"
                    label="ชื่อ"
                    fullWidth
                    required
                    size="small"
                    sx={{ mt: 1, mb: 1 }}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <TextField
                    variant="outlined"
                    label="อีเมล"
                    fullWidth
                    required
                    size="small"
                    sx={{ mt: 1, mb: 1 }}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <TextField
                    color={passwordsMatch ? "" : "error"}
                    variant="outlined"
                    type={showPassword ? "text" : "password"}
                    label="รหัสผ่าน"
                    fullWidth
                    required
                    size="small"
                    sx={{
                      mt: 1,
                      mb: 1,
                    }}
                    error={passwordsMatch ? false : true}
                    helperText={passwordsMatch ? "" : "รหัสผ่านไม่ตรงกัน"}
                    onChange={(e) => setPassword(e.target.value)}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={handleTogglePasswordVisibility}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                  <TextField
                    variant="outlined"
                    type={showConPassword ? "text" : "password"}
                    label="ยืนยันรหัสผ่าน"
                    fullWidth
                    error={passwordsMatch ? false : true}
                    required
                    size="small"
                    sx={{
                      mt: 1,
                      mb: 1,
                    }}
                    helperText={passwordsMatch ? "" : "รหัสผ่านไม่ตรงกัน"}
                    onChange={(e) => setConpassword(e.target.value)}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={handleToggleConPasswordVisibility}
                            edge="end"
                          >
                            {showConPassword ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                  <TextField
                    variant="outlined"
                    label="เบอร์ติดต่อ"
                    fullWidth
                    required
                    size="small"
                    sx={{ mt: 1, mb: 1 }}
                    onChange={(e) => setTel(e.target.value)}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box sx={{ p: 1 }}>
                  <Typography>ที่อยู่:</Typography>
                  <TextField
                    variant="outlined"
                    label="บ้านเลขที่"
                    fullWidth
                    required
                    size="small"
                    sx={{ mt: 1, mb: 1 }}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  <Autocomplete
                    disablePortal
                    options={provinces}
                    getOptionLabel={(option) => option.name_th}
                    onChange={(e, newValue) => {
                      setSelected((prevState) => ({
                        ...prevState,
                        province_id: newValue ? newValue.id : undefined,
                        amphure_id: undefined,
                        tambon_id: undefined,
                      }));
                    }}
                    fullWidth
                    required
                    size="small"
                    sx={{ mt: 1, mb: 1 }}
                    renderInput={(params) => (
                      <TextField {...params} label="จังหวัด" />
                    )}
                  />
                  <Autocomplete
                    disablePortal
                    options={amphures || []}
                    getOptionLabel={(option) => option.name_th}
                    onChange={(e, newValue) => {
                      setSelected((prevState) => ({
                        ...prevState,
                        amphure_id: newValue ? newValue.id : undefined,
                        tambon_id: undefined,
                      }));
                    }}
                    fullWidth
                    size="small"
                    sx={{ mt: 2, mb: 1 }}
                    renderInput={(params) => (
                      <TextField {...params} label="อำเภอ" />
                    )}
                  />
                  <Autocomplete
                    disablePortal
                    options={tambons || []}
                    getOptionLabel={(option) => option.name_th}
                    onChange={(e, newValue) => {
                      setSelected((prevState) => ({
                        ...prevState,
                        tambon_id: newValue ? newValue.id : undefined,
                      }));
                    }}
                    fullWidth
                    size="small"
                    sx={{ mt: 2, mb: 1 }}
                    renderInput={(params) => (
                      <TextField {...params} label="ตำบล" />
                    )}
                  />
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Button variant="contained" sx={{ mb: 2 }} type="submit">
                  สร้างบัญชี
                </Button>
              </Grid>
            </Grid>
          </Box>
        </form>
      </React.Fragment>
    </ThemeProvider>
  );
}
