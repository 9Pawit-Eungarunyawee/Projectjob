import * as React from "react";
import Homelayout from "@/components/homelayout";
import Accordionlayout from "@/components/accordionlayout";
import {
  Typography,
  Container,
  Grid,
  Breadcrumbs,
  Box,
  Button,
} from "@mui/material";
import Link from "next/link";
import { getUser } from "../../../firebase/getData";
import { useRouter } from "next/router";
import { useAuthContext } from "@/context/AuthContext";
function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function Profile() {
  const router = useRouter();
  const user = useAuthContext();
  const [userData, setUserData] = React.useState(null);
  React.useEffect(() => {
    fetchAllData();
  }, []);
  const fetchAllData = async () => {
    const collection = "users";
    const uid = user.user.uid;
    const { result, error } = await getUser(collection, uid);

    if (error) {
      console.error("Error fetching collection:", error);
    } else {
      const user = result.docs.map((doc) => ({
        id: doc.id,
        name: doc.data().name,
        email: doc.data().email,
        tel: doc.data().tel,
      }));
      console.log("ทดสอบรหัสผู้ใช้", uid);
      setUserData(user);
    }
  };
  console.log("ทดสอบผู้ใช้", userData);
  return (
    <>
      <Homelayout>
        <Box sx={{ width: "100%" }}>
          <Container
            maxWidth="false"
            sx={{
              display: "flex",
              justifyContent: "center",
              bgcolor: "#FAF8F1",
            }}
          >
            <Box sx={{ width: "70vw", pt: 2, pb: 2 }}>
              <div role="presentation" onClick={handleClick}>
                <Breadcrumbs aria-label="Beger">
                  <Link
                    style={{ textDecoration: "none", color: "inherit" }}
                    sx={{
                      color: "inherit",
                      "&:hover": { textDecoration: "underline" },
                    }}
                    href="/homepage"
                  >
                    หน้าแรก
                  </Link>
                  <Typography color="text.primary">บัญชีของฉัน</Typography>
                </Breadcrumbs>
              </div>
            </Box>
          </Container>
          <Container
            maxWidth={false}
            sx={{
              display: "flex",
              justifyContent: "center",
              bgcolor: "white",
            }}
          >
            <Box sx={{ p: 3, width: "70vw" }}>
              <Grid container spacing={2}>
                <Grid item sm={3} xs={12}>
                  <Accordionlayout />
                </Grid>
                <Grid item sm={9} xs={12} sx={{ p: 2 ,pl:2}}>
                  <Typography
                    sx={{ fontWeight: "bold", fontSize: "18px", pb: 2 }}
                  >
                    ข้อมูลส่วนตัว
                  </Typography>
                  {userData &&
                    userData.map((item, index) => (
                      <Grid key={index}>
                        <Grid
                          container
                          spacing={2}
                          sx={{ mb: 2, borderBottom: "1px solid #EAEAEA" }}
                        >
                          <Grid item sm={4} xs={9}>
                            <Typography>ชื่อโปรไฟล์</Typography>
                          </Grid>
                          <Grid item sm={5} xs={9}>
                            <Typography>{item.name}</Typography>
                          </Grid>
                          <Grid item sm={3} xs={3}>
                            <Button sx={{ color: "#018294" }}>แก้ไข</Button>
                          </Grid>
                        </Grid>

                        <Grid
                          container
                          spacing={2}
                          sx={{ mb: 2, borderBottom: "1px solid #EAEAEA" }}
                        >
                          <Grid item sm={4} xs={9}>
                            <Typography>เบอร์โทรศัพท์</Typography>
                          </Grid>
                          <Grid item sm={5} xs={9}>
                            <Typography>{item.tel}</Typography>
                          </Grid>
                          <Grid item sm={3} xs={3}>
                            <Button sx={{ color: "#018294" }}>
                              เพิ่มเบอร์โทรศัพท์
                            </Button>
                          </Grid>
                        </Grid>

                        <Grid
                          container
                          spacing={2}
                          sx={{ mb: 2, borderBottom: "1px solid #EAEAEA" }}
                        >
                          <Grid item sm={4} xs={9}>
                            <Typography>อีเมล</Typography>
                          </Grid>
                          <Grid item sm={5} xs={9}>
                            <Typography>{item.email}</Typography>
                          </Grid>
                          <Grid item sm={3} xs={3}>
                            <Button sx={{ color: "#018294" }}>
                              เปลี่ยนอีเมล
                            </Button>
                          </Grid>
                        </Grid>

                        <Grid
                          container
                          spacing={2}
                          sx={{ mb: 2, borderBottom: "1px solid #EAEAEA" }}
                        >
                          <Grid item sm={4} xs={9}>
                            <Typography>รหัสผ่าน</Typography>
                          </Grid>
                          <Grid item sm={5} xs={9}>
                            <Typography>-</Typography>
                          </Grid>
                          <Grid item sm={3} xs={3}>
                            <Button sx={{ color: "#018294" }}>
                              สร้างรหัสผ่าน
                            </Button>
                          </Grid>
                        </Grid>
                      </Grid>
                    ))}
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>
      </Homelayout>
    </>
  );
}
