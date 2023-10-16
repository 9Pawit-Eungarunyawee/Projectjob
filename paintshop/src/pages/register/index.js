import {
  Autocomplete,
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
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

export default function AddEmployee() {
  const [profileUrl, setProfileUrl] = useState(
    "/../public/default-profile.jpg"
  );
  const [name, setName] = useState(null);
  const [tel, setTel] = useState(null);
  const [address, setAddress] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [provinces, setProvinces] = useState([]);
  const [amphures, setAmphures] = useState([]);
  const [tambons, setTambons] = useState([]);
  const [provinceName, setProvinceName] = useState(undefined);
  const [amphureName, setAmphureName] = useState(undefined);
  const [tambonName, setTambonName] = useState(undefined);
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
      setTambonName(nameTambon);
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
    await signUp(
      email,
      password,
      address,
      tel,
      name,
      profileUrl,
      provinceName,
      amphureName,
      tambonName,
    );

    return router.push("/homepage");
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
        <Container maxWidth="sx" style={{ padding: "0px" }}>
          <Box>
            {/* <Button>ย้อนกลับ</Button> */}

            <form
              onSubmit={handleForm}
              className="form"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
              }}
            >
              <Box sx={{ width: "100%" }}>
                <Grid
                  container
                  spacing={2}
                  sx={{
                    backgroundColor: "#fff",
                    p: 1,
                    borderRadius: "10px",
                    boxShadow: "4px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                  }}
                >
                  <Grid item xs={12} sm={12}>
                    <Box sx={{ textAlign: "center" }}>
                      <Box>
                        <Typography sx={{ fontSize: "2vw", fontWeight: "600" }}>
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
                      variant="outlined"
                      label="รหัสผ่าน"
                      fullWidth
                      required
                      size="small"
                      sx={{ mt: 1, mb: 1 }}
                      onChange={(e) => setPassword(e.target.value)}
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
                  </Grid>
                  <Grid item xs={12} sm={6}>
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
          </Box>
        </Container>
      </React.Fragment>
    </ThemeProvider>
  );
}
