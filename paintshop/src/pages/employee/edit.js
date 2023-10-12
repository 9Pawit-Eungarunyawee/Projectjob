import Layout from "@/components/layout";
import editData from "@/firebase/editData";
import getDoument from "@/firebase/getData";
import {
  Alert,
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  
} from "@mui/material";

import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function EditEmployee() {
  const router = useRouter();
  const employeeData = JSON.parse(router.query.employeeData);

  const [profileUrl, setProfileUrl] = useState(
    "/../public/default-profile.jpg"
  );
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [address, setaddress] = useState("");
  const [salary, setSalary] = useState("");
  const [email, setEmail] = useState("");
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedAmphure, setSelectedAmphure] = useState("");
  const [selectedTambon, setSelectedTambon] = useState("");

  const [provinces, setProvinces] = useState([]);

  const [alert, setAlert] = useState(null);

  //ดึงข้อมูลuser
  const fetchData = async () => {
    const collectionName = "users";
    const { result, error } = await getDoument(collectionName, employeeData);
    if (error) {
      console.error("Error fetching document:", error);
    } else if (result) {
      
      const userData = result.data();
      setName(userData.name);
      setEmail(userData.email);
      setTel(userData.tel);
      setaddress(userData.address);
      setProfileUrl(userData.profileUrl);
      setSelectedProvince(userData.province);
      setSelectedAmphure(userData.amphure);
      setSelectedTambon(userData.tambon);
      if(userData.salary){
        setSalary(userData.salary)
      }
    }
  };

  //api จังหวัดประเทศไทย
  useEffect(() => {
    fetchData();
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
        // เรียงลำดับจังหวัดตามตัวอักษร
        result.sort((ก, ฮ) => ก.name_th.localeCompare(ฮ.name_th));
        // เรียงลำดับอำเภอในแต่ละจังหวัด
        result.forEach((province) => {
          if (province.amphure) {
            province.amphure.sort((ก, ฮ) => ก.name_th.localeCompare(ฮ.name_th));

            // เรียงลำดับตำบลในแต่ละอำเภอ
            province.amphure.forEach((amphure) => {
              if (amphure.tambon) {
                amphure.tambon.sort((ก, ฮ) =>
                  ก.name_th.localeCompare(ฮ.name_th)
                );
              }
            });
          }
        });
        setProvinces(result);
      })
      .catch((error) => console.log("error", error));
  }, []);

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
    // console.log(profileUrl);
  };

  //แก้ไขพนักงาน
  const handleForm = async (event) => {
    event.preventDefault();
    const employeeUser ={
      email: email,
      name: name,
      address: address,
      province: selectedProvince,
      amphure: selectedAmphure,
      tambon: selectedTambon,
      tel: tel,
      profileUrl: profileUrl,
      salary:salary,
    };
    const result = await editData("users", employeeData, employeeUser);
    if(result){
      setAlert(<Alert severity="success">แก้ไข้ข้อมูลสำเร็จ</Alert>)
    }else{
      setAlert(<Alert severity="error">ผิดพลาด! ไม่สามารถแก้ไข้ข้อมูลได้</Alert>)
    }
  };

  const handleProvinceChange = (event) => {
    setSelectedProvince(event.target.value);
    // รีเซ็ตค่าอำเภอเมื่อเลือกจังหวัดใหม่
    setSelectedAmphure("");
    setSelectedTambon("");
  };

  const handleAmphureChange = (event) => {
    setSelectedAmphure(event.target.value);
    // รีเซ็ตค่าตำบลเมื่อเลือกอำเภอใหม่
    setSelectedTambon("");
  };
  const handleTambonChange = (event) => {
    setSelectedTambon(event.target.value);
  };

  return (
    <Layout>
      <Box>
        {/* <Button>ย้อนกลับ</Button> */}
        <Typography sx={{ fontSize: "2vw", fontWeight: "600", mt: 5 }}>
          แก้ไขข้อมูลพนักงาน
        </Typography>
        {alert}
        <form onSubmit={handleForm} className="form">
          <Box sx={{ m: 2 }}>
            <Grid
              container
              spacing={1}
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
                      แก้ไขรูปโปรไฟล์
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
                  value={String(name)}
                  label="ชื่อ"
                  fullWidth
                  required
                  size="small"
                  sx={{ mt: 1, mb: 1 }}
                  onChange={(e) => setName(e.target.value)}
                />
                <TextField
                  variant="outlined"
                  value={String(email)}
                  label="อีเมล"
                  fullWidth
                  required
                  size="small"
                  sx={{ mt: 1, mb: 1 }}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <TextField
                  variant="outlined"
                  label="เบอร์ติดต่อ"
                  fullWidth
                  required
                  size="small"
                  sx={{ mt: 1, mb: 1 }}
                  onChange={(e) => setTel(e.target.value)}
                  value={String(tel)}
                />
                <TextField
                  variant="outlined"
                  label="ค่าจ้าง"
                  fullWidth
                  required
                  size="small"
                  sx={{ mt: 1, mb: 1 }}
                  onChange={(e) => setSalary(e.target.value)}
                  value={String(salary)}
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
                  onChange={(e) => setaddress(e.target.value)}
                  value={String(address)}
                />
                <FormControl fullWidth>
                  <TextField
                    size="small"
                    label="จังหวัด"
                    select
                    sx={{ mt: 1, mb: 1 }}
                    value={String(selectedProvince)}
                    onChange={handleProvinceChange}
                  >
                    <MenuItem value="">กรุณาเลือกจังหวัด</MenuItem>
                    {provinces.map((province) => (
                      <MenuItem key={province.id} value={String(province.name_th)}>
                        {province.name_th}
                      </MenuItem>
                    ))}
                  </TextField>

                  <TextField
                    size="small"
                    label="อำเภอ"
                    select
                    sx={{ mt: 1, mb: 1 }}
                    value={String(selectedAmphure)}
                    onChange={handleAmphureChange}
                  >
                    <MenuItem value="">กรุณาเลือกอำเภอ</MenuItem>
                    {selectedProvince &&
                      provinces
                        .find(
                          (province) => province.name_th === selectedProvince
                        )
                        ?.amphure.map((amphure) => (
                          <MenuItem key={amphure.id} value={String(amphure.name_th)}>
                            {amphure.name_th}
                          </MenuItem>
                        ))}
                  </TextField>
                  <TextField
                    size="small"
                    label="ตำบล"
                    select
                    value={String(selectedTambon)}
                    onChange={handleTambonChange}
                    sx={{ mt: 1, mb: 1 }}
                  >
                    <MenuItem value="">กรุณาเลือกตำบล</MenuItem>
                    {selectedAmphure &&
                      provinces
                        .find(
                          (province) => province.name_th === selectedProvince
                        )
                        ?.amphure.find(
                          (amphure) => amphure.name_th === selectedAmphure
                        )
                        ?.tambon.map((tambon) => (
                          <MenuItem key={tambon.id} value={String(tambon.name_th)}>
                            {tambon.name_th}
                          </MenuItem>
                        ))}
                  </TextField>
                </FormControl>
              </Grid>
              <Button
                variant="contained"
                sx={{ p: 2, mb: 4 }}
                fullWidth
                type="submit"
              >
                บันทึก
              </Button>
            </Grid>
          </Box>
        </form>
      </Box>
    </Layout>
  );
}
