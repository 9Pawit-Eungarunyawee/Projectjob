
import Box from "@mui/material/Box";
import Layout from "@/components/layout";
import {
  Button,
  InputAdornment,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
  styled,
  tableCellClasses,
} from "@mui/material";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import Image from "next/image";
import { useContext, useEffect } from "react";
import { useState } from "react";
import { getCollection } from "@/firebase/getData";
import { ProductContext } from "@/context/ProductContext";
import { UserContext } from "@/context/UserContext";
import { useRouter } from "next/router";
import SearchIcon from "@mui/icons-material/Search";
import searchData from "@/firebase/searchData";
import { debounce } from "lodash";
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
  const router = useRouter();
  const {productData,fetchProductData} = useContext(ProductContext);
  const {userData,fetchUserData} = useContext(UserContext);
  const [documentData, setDocumentData] = useState([]);
  const [users,setUsers]= useState([]);
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

  // const [searchTerm, setSearchTerm] = useState("");

  // const debouncedSearch = debounce(async (term) => {
  //   try {
  //     const collectionName = "sell";
  //     const field = "name";
  //     const results = await searchData(collectionName, field, term);
  //     const sortedData = results.sort((a, b) => {
  //       return b.date.toMillis() - a.date.toMillis();
  //     });

  //     // ตั้งค่าข้อมูลใหม่ที่เรียงลำดับแล้ว
  //     setBuyData(sortedData);
  //   } catch (error) {
  //     console.error("Error searching data:", error);
  //   }
  // }, 500);

  // const handleSearch = (term) => {
  //   setSearchTerm(term);
  //   debouncedSearch(term);
  // };
  
  function createData(No, date,time, name, id, total_price, img, status) {
    return { No, date,time, name, id, total_price, img, status };
  }
  const rows = documentData.map((dataItem, index) => {
    const date = dataItem.createAt
      ? dataItem.createAt
          .toDate()
          .toLocaleString("th-TH", { dateStyle: "medium"})
      : "";
    const time = dataItem.createAt
      ? dataItem.createAt
          .toDate()
          .toLocaleString("th-TH", {timeStyle: "short" })
      : "";
      const user = userData.find(user => user.id === dataItem.user_id);
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

  function handleCard(id) {
    router.push({
      pathname: "sell/detail",
      query: { id: JSON.stringify(id) },
    });
  }
  return (
    <Layout>
      <ThemeProvider theme={theme}>
        <Box>
          <Box sx={{ height: "100%", width: "100%", mt: 5 }}>
            <Typography sx={{ fontSize: "2rem", fontWeight: "600" }}>
              รายการขาย
            </Typography>
            {/* <Box sx={{ mt: 1 }}>
            <TextField
              label="ค้นหา"
              variant="outlined"
              size="small"
              onChange={(e) => handleSearch(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ fontSize: "1.4rem" }} />
                  </InputAdornment>
                ),
              }}
            />
          </Box> */}
            <TableContainer component={Paper} sx={{ borderRadius: "25px",mt:5 }}>
              <Table sx={{ minWidth: 700 }}>
                <TableHead>
                  <TableRow>
                    <StyledTableCell align="center">No.</StyledTableCell>
                    <StyledTableCell align="center">วันที่</StyledTableCell>
                    <StyledTableCell align="center">เวลา</StyledTableCell>
                    <StyledTableCell align="center">ชื่อลูกค้า</StyledTableCell>
                    <StyledTableCell align="center">รายการคำสั่งซื้อ</StyledTableCell>
                    <StyledTableCell align="center">ยอดรวม</StyledTableCell>
                    <StyledTableCell align="center">หลักฐานการชำระเงิน</StyledTableCell>
                    <StyledTableCell align="center">สถานะคำสั่งซื้อ</StyledTableCell>
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
                      <StyledTableCell align="center">{row.date}</StyledTableCell>
                      <StyledTableCell align="center">{row.time}</StyledTableCell>
                      <StyledTableCell align="center">{row.name}</StyledTableCell>
                      <StyledTableCell align="center">{row.id}</StyledTableCell>
                      <StyledTableCell align="center">{row.total_price}</StyledTableCell>
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
                      <StyledTableCell align="center">{row.status}</StyledTableCell>
                      <StyledTableCell align="center">
                        <Button
                          color="primary"
                          onClick={() => handleCard(row.id)}
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
