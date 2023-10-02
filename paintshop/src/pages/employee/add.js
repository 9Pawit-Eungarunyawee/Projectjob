import Layout from "@/components/layout";
import {
  Autocomplete,
  Box,
  Button,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import signUp from "@/firebase/auth/signup";
import addData from "@/firebase/addData";
const districts = [
  { key: "1", label: "ตำบล 1" },
  { key: "2", label: "ตำบล 2" },
  { key: "3", label: "ตำบล 3" },
];

export default function AddEmployee() {
  const [profileUrl, setProfileUrl] = useState(
    "/../public/default-profile.jpg"
  );
  const [name, setName] = useState(null);
  const [tel, setTel] = useState(null);
  const [salary, setSalary] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) {
      console.error('No file selected.');
      setProfileUrl("/../public/default-profile.jpg")
      return;
    }
    const reader = new FileReader();

    reader.onloadend = () => {
      
      setProfileUrl(reader.result);
    };

    reader.readAsDataURL(file);
    console.log(profileUrl);
  };

  const handleForm = async (event) => {
    event.preventDefault();
    console.log(email, password);
    const { result, error } = await signUp(email, password);
    if(result)console.log(result)
    // if (result) {
    //   console.log(result)
    //   const newUser = {
    //     uid: result.uid,
    //     email: result.email,
    //   };
    //   const userRef = await addData('users', result.uid, newUser)
    //   try {
    //     await userRef.set(newUser);
    //     console.log('เพิ่มข้อมูลผู้ใช้สำเร็จ');
    //   } catch (error) {
    //     console.error('เกิดข้อผิดพลาดในการเพิ่มข้อมูลผู้ใช้:', error);
    //   }
    // }
  };


  return (
    <Layout>
      <Box>
        {/* <Button>ย้อนกลับ</Button> */}
        <Typography sx={{ fontSize: "2vw", fontWeight: "600", mt: 5 }}>
          เพิ่มพนักงาน
        </Typography>

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
                />
                <TextField
                  variant="outlined"
                  label="ค่าจ้าง"
                  fullWidth
                  required
                  size="small"
                  sx={{ mt: 1, mb: 1 }}
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
                />
                <Autocomplete
                  disablePortal
                  options={districts}
                  getOptionLabel={(option) => option.label}
                  fullWidth
                  size="small"
                  sx={{ mt: 1, mb: 1 }}
                  renderInput={(params) => (
                    <TextField {...params} label="จังหวัด" />
                  )}
                />
                <Autocomplete
                  disablePortal
                  options={districts}
                  getOptionLabel={(option) => option.label}
                  fullWidth
                  size="small"
                  sx={{ mt: 2, mb: 1 }}
                  renderInput={(params) => (
                    <TextField {...params} label="อำเภอ" />
                  )}
                />
                <Autocomplete
                  disablePortal
                  options={districts}
                  getOptionLabel={(option) => option.label}
                  fullWidth
                  size="small"
                  sx={{ mt: 2, mb: 1 }}
                  renderInput={(params) => (
                    <TextField {...params} label="ตำบล" />
                  )}
                />
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
