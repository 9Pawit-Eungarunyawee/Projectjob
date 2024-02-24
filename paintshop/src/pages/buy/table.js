import { getCollection } from "@/firebase/getData";
import {
  Box,
  Button,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  styled,
  tableCellClasses,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function TableLots({ data }) {
  const router = useRouter();
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
  const [docuData, setDocData] = useState([]);
  useEffect(() => {
    if (data && data.data) {
      setDocData(data.data);
    }
    console.log("doc มา table: ", data);
  }, [data]);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchUserData();
  }, []);
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
  function createData(
    No,
    id,
    name,
    totalCost,
    user,
    createAt,
    products,
    status
  ) {
    return { No, id, name, totalCost, createAt, user, products, status };
  }

  const rows = docuData.map((dataItem, index) => {
    const user = users.find((user) => user.id === dataItem.user_id);
    const name = user ? user.name : "";
    return createData(
      index + 1,
      dataItem.id,
      dataItem.name,
      dataItem.totalCost,
      name,
      dataItem.createAt,
      dataItem.products,
      dataItem.status
    );
  });

  function handleCard(id) {
    router.push({
      pathname: "buy/detail",
      query: { id: JSON.stringify(id) },
    });
  }

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // const emptyRows =
  //   page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <TableContainer component={Paper} sx={{ borderRadius: "25px" }}>
        <Table sx={{ minWidth: 700 }}>
          <TableHead>
            <TableRow>
              <StyledTableCell>No.</StyledTableCell>
              <StyledTableCell align="center">วันที่</StyledTableCell>
              <StyledTableCell align="center">ชื่อรายการ</StyledTableCell>
              <StyledTableCell align="center">ผู้สร้าง</StyledTableCell>
              <StyledTableCell align="center">มูลค่า(บาท)</StyledTableCell>
              <StyledTableCell align="center">สถานะ</StyledTableCell>
              <StyledTableCell align="center"></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
            ).map((row) => (
              <StyledTableRow key={row.No}>
                <StyledTableCell component="th" scope="row">
                  {row.No}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.createAt.toDate().toLocaleString("th-TH", {
                    dateStyle: "medium",
                  })}
                </StyledTableCell>
                <StyledTableCell align="center">{row.name}</StyledTableCell>
                <StyledTableCell align="center">{row.user}</StyledTableCell>
                <StyledTableCell align="center">
                  {row.totalCost}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Box
                    sx={{
                      backgroundColor:
                        row.status === "สำเร็จ"
                          ? "rgba(169, 196, 112, 0.61)"
                          : "rgba(254, 97, 106, 0.50)",
                      p: 1,
                      borderRadius: "10px",
                    }}
                  >
                    {row.status}
                  </Box>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Button onClick={() => handleCard(row.id)}>
                    ดูรายละเอียด
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[
                  2,
                  5,
                  10,
                  25,
                  { label: "ทั้งหมด", value: -1 },
                ]}
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                labelRowsPerPage="รายการสินค้าต่อหน้า"
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </>
  );
}
