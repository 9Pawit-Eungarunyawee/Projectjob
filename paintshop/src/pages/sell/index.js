import * as React from "react";
import Box from "@mui/material/Box";
import Layout from "@/components/layout";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  ThemeProvider,
  Typography,
  createTheme,
  styled,
  tableCellClasses,
} from "@mui/material";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import Image from "next/image";
import { useEffect } from "react";
import { useState } from "react";
import { getCollection } from "@/firebase/getData";
export default function Order() {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#018294",
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
      maxWidth: "200px",
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
  const [users,setUsers]= useState([]);
  const [products,setProducts]= useState([]);
  useEffect(() => {
    fetchUserData();
    fetchProductData();
    fetchData();
    
  }, []);
  const fetchData = async () => {
    const collectionName = "orders";
    const { result, error } = await getCollection(collectionName);
    if (error) {
      console.error("Error fetching document:", error);
    } else if (result) {
      const orderData = result.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setDocumentData(orderData);
    }
  };

  const fetchUserData = async () => {
    const collectionName = "users";
    const { result, error } = await getCollection(collectionName);
    if (error) {
      console.error("Error fetching document:", error);
    } else if (result) {
      const Data = result.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUsers(Data);
    }
  };

  const fetchProductData = async () => {
    const collectionName = "products";
    const { result, error } = await getCollection(collectionName);
    if (error) {
      console.error("Error fetching document:", error);
    } else if (result) {
      const Data = result.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(Data);
    }
  };
  
  function createData(No, date,time, name, id, total_price, img, status) {
    return { No, date,time, name, id, total_price, img, status };
  }
  const rows = documentData.map((dataItem, index) => {
    const date = dataItem.date
      ? dataItem.date
          .toDate()
          .toLocaleString("th-TH", { dateStyle: "medium"})
      : "";
    const time = dataItem.date
      ? dataItem.date
          .toDate()
          .toLocaleString("th-TH", {timeStyle: "short" })
      : "";
      const user = users.find(user => user.id === dataItem.user_id);
      const name = user ? user.name : dataItem.user_id;
      
 
    return createData(
      index + 1,
      date,
      time,
      name,
      dataItem.id,
      dataItem.total_price,
      dataItem.img,
      dataItem.status
    );
  });
  return (
    <Layout>
      <ThemeProvider theme={theme}>
        <Box>
          <Box sx={{ height: "100%", width: "100%", mt: 5 }}>
            <Typography sx={{ fontSize: "2rem", fontWeight: "600" }}>
              จัดการคำสั่งซื้อ
            </Typography>
            
           
            <TableContainer component={Paper} sx={{ borderRadius: "25px" }}>
              <Table sx={{ minWidth: 700 }}>
                <TableHead>
                  <TableRow>
                    <StyledTableCell align="center">No.</StyledTableCell>
                    <StyledTableCell align="center">วันที่</StyledTableCell>
                    <StyledTableCell align="center">เวลา</StyledTableCell>
                    <StyledTableCell>ชื่อลูกค้า</StyledTableCell>
                    <StyledTableCell>รายการคำสั่งซื้อ</StyledTableCell>
                    <StyledTableCell>ยอดรวม</StyledTableCell>
                    <StyledTableCell>หลักฐานการชำระเงิน</StyledTableCell>
                    <StyledTableCell>สถานะคำสั่งซื้อ</StyledTableCell>
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
                        {row.No}
                      </StyledTableCell>
                      <StyledTableCell>{row.date}</StyledTableCell>
                      <StyledTableCell>{row.time}</StyledTableCell>
                      <StyledTableCell>{row.name}</StyledTableCell>
                      <StyledTableCell>{row.id}</StyledTableCell>
                      <StyledTableCell>{row.total_price}</StyledTableCell>
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
                      <StyledTableCell>{row.status}</StyledTableCell>

                      <StyledTableCell align="center">
                        <Button
                          color="primary"
                         
                        >
                          ดูรายละเอียด
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
