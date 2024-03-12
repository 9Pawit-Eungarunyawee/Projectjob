import Layout from "@/components/layout";
import { ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
import {
  Alert,
  Box,
  Button,
  Paper,
  Snackbar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  createTheme,
  tableCellClasses,
} from "@mui/material";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { useContext, useEffect, useState } from "react";
import { CatalogContext } from "@/context/CatalogContext";
import Image from "next/image";
import { getCollection } from "@/firebase/getData";
import { restoreCatalog } from "@/firebase/addCatalog";
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

  const [alert, setAlert] = useState(null);
  const [open, setOpen] = useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const [documentData, setDocumentData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const collectionName = "catalog";
    const { result, error } = await getCollection(collectionName);
    if (error) {
      console.error("Error fetching document:", error);
    } else if (result) {
      const Data = result.docs
        .filter((doc) => doc.data().delete)
        .map((doc) => ({
          id: doc.id,
          name: doc.data().name,
          img: doc.data().img,
          deleteAt: doc.data().delete.deleteAt,
          deleteBy: doc.data().delete.deleteBy,
        }));
      setDocumentData(Data);
    }
  };

  function createData(No, id, img, c_name, deleteAt, deleteBy) {
    return { No, id, img, c_name, deleteAt, deleteBy };
  }

  const rows = documentData.map((dataItem, index) => {
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
      timestamp,
      dataItem.deleteBy
    );
  });

  const handleRestoreData = async (id) => {
    const result = await restoreCatalog("catalog", id);
    fetchData();
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
  return (
    <Layout>
      <ThemeProvider theme={theme}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        {alert}
      </Snackbar>
        <Box>
          <Box sx={{ height: "100%", width: "100%", mt: 5 }}>
            <Typography sx={{ fontSize: "2rem", fontWeight: "600" }}>
              ประวัติการลบแคตตาล็อก
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
                    <StyledTableCell align="center">No.</StyledTableCell>
                    <StyledTableCell align="center">รูปภาพ</StyledTableCell>
                    <StyledTableCell align="center">
                      ชื่อแคตตาล็อก
                    </StyledTableCell>
                    <StyledTableCell align="center">วันที่ลบ</StyledTableCell>
                    <StyledTableCell align="center">ผู้ลบ</StyledTableCell>
                    <StyledTableCell align="center"></StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <StyledTableRow key={row.id}>
                      <StyledTableCell align="center">{row.No}</StyledTableCell>
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
                      <StyledTableCell align="center">
                        {row.c_name}
                      </StyledTableCell>
                      <StyledTableCell align="center">{row.deleteAt}</StyledTableCell>
                      <StyledTableCell align="center">{row.deleteBy}</StyledTableCell>
                      <StyledTableCell align="center">
                      <Button
                          color="primary"
                          onClick={() => handleRestoreData(row.id)}
                        >
                          กู้คืน
                        </Button>
                      </StyledTableCell>
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
