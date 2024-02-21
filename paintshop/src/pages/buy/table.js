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
  TableHead,
  TableRow,
  styled,
  tableCellClasses,
} from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function TableLots({ data }) {
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
  function createData(No, name, totalCost, user, createAt, products,status) {
    return { No, name, totalCost, createAt, user, products,status };
  }

  const rows = docuData.map((dataItem, index) => {
    const user = users.find((user) => user.id === dataItem.user_id);
    const name = user ? user.name : dataItem.user_id;
    return createData(
      index + 1,
      dataItem.name,
      dataItem.totalCost,
      name,
      dataItem.createAt,
      dataItem.products,
      dataItem.status
    );
  });

  useEffect(() => {
    console.log(rows);
  }, [rows]);
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
            {rows.map((row) => (
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
                  <Button>ดูรายละเอียด</Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
