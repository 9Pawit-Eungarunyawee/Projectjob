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
  Snackbar,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";

import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ProfileDiaLog from "./profile-dialog";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
export default function Profile() {
  const router = useRouter();
  const employeeData = JSON.parse(router.query.employeeData);
  const [profileUrl, setProfileUrl] = useState(
    "/../public/default-profile.jpg"
  );

  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [addresses, setaddresses] = useState([]);
  const [salary, setSalary] = useState("");
  const [position, setPosition] = useState("");
  const [email, setEmail] = useState("");
  const [showSalary, setShowSalary] = useState("");
  const [showPosition, setShowPosition] = useState("");
  const [alert, setAlert] = useState(null);

  const formattedInt = showSalary.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const style = createTheme({
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
    typography: {
      text: {
        fontSize: "1.2rem",
        padding: "1vw",
        width: "10rem",
      },
      data: {
        fontSize: "1.2rem",
        fontWeight: "600",
        whiteSpace: "pre-line",
      },
    },
  });

   const goBack = () => {
    window.history.back();
  };
  useEffect(() => {
    fetchData();
  }, []);
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
      setaddresses(userData.addresses[0]);
      setProfileUrl(userData.profileUrl);
      if (userData.salary) {
        setSalary(userData.salary);
        setShowSalary(userData.salary);
      }
      if (userData.position) {
        setPosition(userData.position);
        setShowPosition(userData.position);
      }
    }
  };

  //แก้ไขพนักงาน
  const handleForm = async (salary, position) => {
    const employeeUser = {
      position: position,
      salary: salary,
    };
    const result = await editData("users", employeeData, employeeUser);
    if (result) {
      fetchData();
      setAlert(
        <Alert severity="success" onClose={handleSnackbarClose}>
          แก้ไข้ข้อมูลสำเร็จ
        </Alert>
      );
      setSnackbarOpen(true);
    } else {
      setAlert(
        <Alert severity="error" onClose={handleSnackbarClose}>
          ผิดพลาด! ไม่สามารถแก้ไข้ข้อมูลได้
        </Alert>
      );
      setSnackbarOpen(true);
    }
  };

  const [open, setOpen] = useState(false);
  const [snackbaropen, setSnackbarOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbarOpen(false);
  };
  return (
    <Layout>
      <Snackbar
        open={snackbaropen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        {alert}
      </Snackbar>
      <ProfileDiaLog
        handleClose={handleClose}
        open={open}
        handleForm={handleForm}
        style={style}
        salary={salary}
        position={position}
        setSalary={setSalary}
        setPosition={setPosition}
      />

      <Box>
        {/* <Button>ย้อนกลับ</Button> */}
        <Typography sx={{ fontSize: "2rem", fontWeight: "600", mt: 5 }}>
          ข้อมูลพนักงาน
        </Typography>
        <Button
          sx={{
            color: "#018294",
            bgcolor: "white",
            fontWeight: "bold",
            borderRadius: "50px",
            boxShadow: "4px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          }}
          onClick={goBack}
        >
          <ArrowBackOutlinedIcon />
          <Typography> ย้อนกลับ</Typography>
        </Button>
        <ThemeProvider theme={style}>
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
            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Image
                src={profileUrl}
                priority
                alt="profile"
                width={120}
                height={120}
                style={{ borderRadius: "100px",objectFit:"cover" }}
              ></Image>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                display: { md: "flex" },
                borderBottom: "1px solid #ccc",
                p: 1,
              }}
            >
              <Box sx={{ width: "15rem" }}>
                <Typography variant="text">ชื่อ:</Typography>
              </Box>
              <Box>
                <Typography variant="data">{name}</Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                display: { md: "flex" },
                borderBottom: "1px solid #ccc",
                p: 1,
              }}
            >
              <Box sx={{ width: "15rem" }}>
                <Typography variant="text">เบอร์ติดต่อ:</Typography>
              </Box>
              <Box>
                <Typography variant="data">{tel}</Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                display: { md: "flex" },
                borderBottom: "1px solid #ccc",
                p: 1,
              }}
            >
              <Box sx={{ width: "15rem" }}>
                <Typography variant="text">อีเมล:</Typography>
              </Box>
              <Box>
                <Typography variant="data">{email}</Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                display: { md: "flex" },
                borderBottom: "1px solid #ccc",
                p: 1,
              }}
            >
              <Box sx={{ width: "15rem" }}>
                <Typography variant="text">ที่อยู่:</Typography>
              </Box>
              <Box>
                <Typography variant="data">
                  {addresses.address +
                    " ตำบล " +
                    addresses.tambon +
                    " อำเภอ " +
                    addresses.amphure +
                    " จังหวัด " +
                    addresses.province}
                </Typography>
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              sx={{
                display: { md: "flex" },
                borderBottom: "1px solid #ccc",
                p: 1,
              }}
            >
              <Box sx={{ width: "15rem" }}>
                <Typography variant="text">ตำแหน่ง:</Typography>
              </Box>
              <Box>
                <Typography variant="data">{showPosition===""? "ยังไม่กำหนด":showPosition}</Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                display: { md: "flex" },
                borderBottom: "1px solid #ccc",
                p: 1,
              }}
            >
              <Box sx={{ width: "15rem" }}>
                <Typography variant="text">เงินเดือน:</Typography>
              </Box>
              <Box>
                <Typography variant="data">{showSalary===""? "ยังไม่กำหนด" :formattedInt}</Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                display: { md: "flex" },
                mt: 2,
                p: 1,
              }}
            >
              <Button
                variant="contained"
                color="success"
                onClick={handleClickOpen}
              >
                แก้ไข
              </Button>
            </Grid>
          </Grid>
        </ThemeProvider>
      </Box>
    </Layout>
  );
}
