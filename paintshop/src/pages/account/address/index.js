import * as React from "react";
import Homelayout from "@/components/homelayout";
import Accordionlayout from "@/components/accordionlayout";
import {
  Typography,
  Container,
  Grid,
  Breadcrumbs,
  Box,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Button,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAuthContext } from "@/context/AuthContext";
import { getUser } from "@/firebase/getData";
function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function Address() {
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
        address: doc.data().address,
        amphure: doc.data().amphure,
        province: doc.data().province,
        tambon: doc.data().tambon,
        tel: doc.data().tel,
      }));
      console.log("ทดสอบรหัสผู้ใช้", uid);
      console.log("ทดสอบuser", user);
      setUserData(user);
    }
  };
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
                <Grid item sm={9} xs={12}>
                  {" "}
                  <Grid
                    item
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        fontSize: "18px",
                        pb: 2,
                        pt: 2,
                      }}
                    >
                      ที่อยู่จัดส่งสินค้า
                    </Typography>
                  </Grid>
                  <TableContainer component={Paper}>
                    <Table  aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell>ชื่อ</TableCell>
                          <TableCell>เบอร์โทรศัพท์</TableCell>
                          <TableCell>ที่อยู่</TableCell>
                          <TableCell></TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {userData &&
                          userData.map((item, index) => (
                            <TableRow
                              key={index}
                              sx={{
                                "&:last-child td, &:last-child th": {
                                  border: 0,
                                },
                              }}
                            >
                              <TableCell
                                component="th"
                                scope="row"
                                sx={{ fontWeight: "bold" }}
                              >
                                {item.name}
                              </TableCell>
                              <TableCell>{item.tel}</TableCell>
                              <TableCell>
                                {item.address} อำเภอ
                                {item.amphure} ตำบล
                                {item.tambon} จังหวัด
                                {item.province}
                              </TableCell>
                              <TableCell>
                                <Button sx={{ color: "#018294" }}>แก้ไข</Button><Button sx={{ color: "#018294" }}>ลบ</Button>
                              </TableCell>
                             
                            </TableRow>
                          ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>
      </Homelayout>
    </>
  );
}
