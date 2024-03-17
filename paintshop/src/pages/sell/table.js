import styled from "@emotion/styled";
import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  tableCellClasses,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

export default function TableSell({ documentData, userData }) {
  const router = useRouter();
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

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const [openRows, setOpenRows] = useState([]);
  const handleRowToggle = (rowNo) => {
    setOpenRows((prevOpenRows) => ({
      ...prevOpenRows,
      [rowNo]: !prevOpenRows[rowNo],
    }));
  };
  function createData(No, date, time, name, id, total_price, img, status) {
    return { No, date, time, name, id, total_price, img, status };
  }
  const rows = documentData.map((dataItem, index) => {
    const date = dataItem.createAt
      ? dataItem.createAt
          .toDate()
          .toLocaleString("th-TH", { dateStyle: "medium" })
      : "";
    const time = dataItem.createAt
      ? dataItem.createAt
          .toDate()
          .toLocaleString("th-TH", { timeStyle: "short" })
      : "";
    const user = userData.find((user) => user.id === dataItem.user_id);
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
    <TableContainer component={Paper} sx={{ borderRadius: "25px" }}>
      <Table sx={{ minWidth: 700 }}>
        <TableHead>
          <TableRow>
            <StyledTableCell align="center"><Typography>No.</Typography> </StyledTableCell>
            <StyledTableCell align="center"><Typography>วันที่</Typography></StyledTableCell>
            <StyledTableCell align="center"><Typography>เวลา</Typography></StyledTableCell>
            <StyledTableCell align="center"><Typography>ชื่อลูกค้า</Typography></StyledTableCell>
          
            <StyledTableCell align="center"><Typography>ยอดรวม</Typography></StyledTableCell>
            <StyledTableCell align="center"><Typography>หลักฐานการชำระเงิน</Typography></StyledTableCell>
            <StyledTableCell align="center"><Typography>สถานะคำสั่งซื้อ</Typography></StyledTableCell>
            <StyledTableCell align="center"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <StyledTableRow key={row.No}>
              <StyledTableCell component="th" scope="row" align="center">
                <Typography>{row.No}</Typography>
              </StyledTableCell>
              <StyledTableCell align="center"><Typography>{row.date}</Typography></StyledTableCell>
              <StyledTableCell align="center"><Typography>{row.time}</Typography></StyledTableCell>
              <StyledTableCell align="center"><Typography>{row.name}</Typography></StyledTableCell>
              
              <StyledTableCell align="center">
                <Typography>{row.total_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Typography>
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
              <StyledTableCell align="center">
                <Box
                  sx={{
                    backgroundColor:
                    row.status === "ยกเลิก"
                      ? "rgba(254, 97, 106, 0.50)"
                      : row.status === "จัดส่งสำเร็จ"
                      ? "rgba(169, 196, 112, 0.61)" // เปลี่ยนเป็นสีที่ต้องการ
                      : "#FFA50080",
                    p: 1,
                    borderRadius: "10px",
                  }}
                >
                  <Typography>{row.status}</Typography>
                </Box>
              </StyledTableCell>
              <StyledTableCell align="center">
                <Button color="primary" onClick={() => handleCard(row.id)}>
                  <Typography>ดูรายละเอียด</Typography>
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
              labelRowsPerPage="รายการต่อหน้า"
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
