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
  createTheme,
  ThemeProvider,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAuthContext } from "@/context/AuthContext";
import { getUser } from "@/firebase/getData";
import Addressdialog from "./dialog";
function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function Address() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#018294",
      },
      success: {
        main: "#A9C470",
      },
      edit: {
        main: "#FFC300",
      },
      error: {
        main: "#FE616A",
      },
    },
  });
  const router = useRouter();
  const user = useAuthContext();
  const [userData, setUserData] = React.useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };
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
        tel: doc.data().tel,
        addresses: doc.data().addresses || [],
      }));
      console.log("ทดสอบรหัสผู้ใช้", uid);
      console.log("ทดสอบuser", user);
      setUserData(user);
    }
  };
  const handleFormSubmitSuccess = () => {
    fetchAllData();
  };
  return (
    <ThemeProvider theme={theme}>
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
                    <Addressdialog
                      handleClickOpen={handleClickOpen}
                      onFormSubmitSuccess={handleFormSubmitSuccess}
                    />
                  </Grid>
                  <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                      <TableHead>
                        <TableRow style={{ backgroundColor: "#018294" }}>
                          <TableCell sx={{ color: "white" }}>ชื่อ</TableCell>
                          <TableCell
                            sx={{ color: "white", whiteSpace: "nowrap" }}
                          >
                            เบอร์โทรศัพท์
                          </TableCell>
                          <TableCell sx={{ color: "white" }}>ที่อยู่</TableCell>
                          <TableCell></TableCell>
                          <TableCell></TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {userData &&
                          userData.map((item, index) => (
                            <React.Fragment key={index}>
                              {item.addresses &&
                                item.addresses.map((address, addressIndex) => (
                                  <TableRow
                                    key={addressIndex}
                                    sx={{
                                      "&:last-child td, &:last-child th": {
                                        border: 0,
                                      },
                                      "&:hover": {
                                        bgcolor: "#EEEDEB",
                                      },
                                    }}
                                  >
                                    <TableCell
                                      component="th"
                                      scope="row"
                                      sx={{
                                        fontWeight: "bold",
                                        whiteSpace: "nowrap",
                                      }}
                                    >
                                      {item.name}
                                    </TableCell>
                                    <TableCell>{item.tel}</TableCell>
                                    <TableCell>
                                      {address.address} อำเภอ {address.amphure}{" "}
                                      ตำบล {address.tambon} จังหวัด{" "}
                                      {address.province} {address.zipcode}
                                    </TableCell>
                                    <TableCell>
                                      <Button variant="contained" color="edit">
                                        แก้ไข
                                      </Button>
                                    </TableCell>
                                    <TableCell>
                                      <Button variant="contained" color="error">
                                        ลบ
                                      </Button>
                                    </TableCell>
                                  </TableRow>
                                ))}
                            </React.Fragment>
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
    </ThemeProvider>
  );
}
