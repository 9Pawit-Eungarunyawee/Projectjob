import Layout from "@/components/layout";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Image from "next/image";
import { ThemeProvider, createTheme, styled } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { getCollection } from "@/firebase/getData";
import { Alert, Box, Button, Snackbar, Typography } from "@mui/material";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { deleteData, restoreData } from "@/firebase/addData";
import { ProductContext } from "@/context/ProductContext";
import { useContext } from "react";

export default function History() {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#018294",
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));
  const goBack = () => {
    window.history.back();
  };
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
  const [documentData, setDocumentData] = useState([]);
  const { productData, fetchProductData } = useContext(ProductContext);
  useEffect(() => {
    fetchProductData();
  }, []);
  const fetchData = async () => {
    const collectionName = "products";
    const { result, error } = await getCollection(collectionName);
    if (error) {
      console.error("Error fetching document:", error);
    } else if (result) {
      const productData = result.docs
        .filter((doc) => doc.data().delete)
        .map((doc) => ({
          id: doc.id,
          name: doc.data().name,
          productSizes: doc.data().productSizes,
          img: doc.data().img,
          deleteAt: doc.data().delete.deleteAt,
          deleteBy: doc.data().delete.deleteBy,
        }));
      setDocumentData(productData);
    }
  };

  const handleRestoreData = async (id) => {
    const result = await restoreData("products", id);
    if (result) {
      setAlert(
        <Alert severity="success" onClose={handleClose}>
          กู้คืนข้อมูลสำเร็จ
        </Alert>
      );
      setOpen(true);
    } else {
      setAlert(
        <Alert severity="error" onClose={handleClose}>
          ผิดพลาด! ไม่สามารถกู้คืนข้อมูลได้
        </Alert>
      );
      setOpen(true);
    }
  };

  const handleDelete = async (id) => {
    const result = await deleteData("products", id);
    if (result) {
      setAlert(
        <Alert severity="success" onClose={handleClose}>
          ลบข้อมูลถาวรสำเร็จ
        </Alert>
      );
      setOpen(true);
    } else {
      setAlert(
        <Alert severity="error" onClose={handleClose}>
          ผิดพลาด! ไม่สามารถลบข้อมูลถาวรได้
        </Alert>
      );
      setOpen(true);
    }
  };
  const [alert, setAlert] = useState(null);
  const [open, setOpen] = useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  function createData(No, id, img, p_name, pdelete) {
    return { No, id, img, p_name, pdelete };
  }
  const rows = productData
    .filter((p) => p.delete)
    .map((dataItem, index) => {
      const timestamp = dataItem.deleteAt
        ? dataItem.deleteAt
            .toDate()
            .toLocaleString("th-TH", { dateStyle: "full", timeStyle: "medium" })
        : "";
      return createData(
        index + 1,
        dataItem.id,
        dataItem.img,
        dataItem.name,
        dataItem.delete
      );
    });

  return (
    <Layout>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        {alert}
      </Snackbar>
      <ThemeProvider theme={theme}>
        <Box>
          <Box sx={{ height: "100%", width: "100%", mt: 5 }}>
            <Typography sx={{ fontSize: "2rem", fontWeight: "600" }}>
              ประวัติการลบสินค้า
            </Typography>
            <Button
              sx={{
                color: "#018294",
                bgcolor: "white",
                fontWeight: "bold",
                borderRadius: "50px",
                boxShadow: "4px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                mb: 2,
              }}
              onClick={goBack}
            >
              <ArrowBackOutlinedIcon />
              <Typography> ย้อนกลับ</Typography>
            </Button>
            <TableContainer component={Paper} sx={{ borderRadius: "25px" }}>
              <Table sx={{ minWidth: 700 }}>
                <TableHead>
                  <TableRow>
                    <StyledTableCell align="center"><Typography>No.</Typography></StyledTableCell>
                    <StyledTableCell align="center"><Typography>รูปภาพ</Typography></StyledTableCell>
                    <StyledTableCell align="center"><Typography>ชื่อสินค้า</Typography></StyledTableCell>
                    <StyledTableCell align="center"><Typography>วันที่ลบ</Typography></StyledTableCell>
                    <StyledTableCell align="center"><Typography>ผู้ลบ</Typography></StyledTableCell>
                    <StyledTableCell align="center"></StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <StyledTableRow key={row.No}>
                      <StyledTableCell
                        component="th"
                        scope="row"
                        align="center"
                      >
                        <Typography>{row.No}</Typography>
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {
                          <Image
                            src={row.img}
                            alt="Product Image"
                            priority
                            height="75"
                            width="75"
                          />
                        }
                      </StyledTableCell>
                      <StyledTableCell align="center"><Typography>{row.p_name}</Typography></StyledTableCell>
                      <StyledTableCell align="center">
                        <Typography>{row.pdelete.deleteAt
                          ? row.pdelete.deleteAt
                              .toDate()
                              .toLocaleString("th-TH", {
                                dateStyle: "full",
                                timeStyle: "medium",
                              })
                          : ""}</Typography>
                      </StyledTableCell>
                      <StyledTableCell align="center"><Typography>{row.pdelete.deleteBy}</Typography></StyledTableCell>
                      <StyledTableCell align="center">
                        <Button
                          color="primary"
                          onClick={() => handleRestoreData(row.id)}
                        >
                          <Typography>กู้คืน</Typography>
                        </Button>
                      </StyledTableCell>
                      {/* <StyledTableCell align="center">
                        <Button
                          color="primary"
                          onClick={() => handleDelete(row.id)}
                        >
                          ลบถาวร
                        </Button>
                      </StyledTableCell> */}
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </ThemeProvider>
    </Layout>
  );
}
