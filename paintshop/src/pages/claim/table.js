import styled from "@emotion/styled";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  tableCellClasses,
} from "@mui/material";
import { useRouter } from "next/router";

export default function TableClaim({ documentData, userData }) {
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
  function createData(No, id, date, time, order_id, user_id, product_id) {
    return { No, id, date, time, order_id, user_id, product_id };
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
      dataItem.id,
      date,
      time,
      dataItem.order_id,
      name,
      dataItem.product_id
    );
  });
  
  const router = useRouter();
  function handleCard(id) {
    router.push({
      pathname: "claim/detail",
      query: { id: JSON.stringify(id) },
    });
  }

  return (
    <TableContainer component={Paper} sx={{ borderRadius: "25px", mt: 5 }}>
      <Table sx={{ minWidth: 700 }}>
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">No.</StyledTableCell>
            <StyledTableCell align="center">วันที่</StyledTableCell>
            <StyledTableCell align="center">เวลา</StyledTableCell>
            <StyledTableCell align="center">ชื่อลูกค้า</StyledTableCell>
            <StyledTableCell align="center">รายการคำสั่งซื้อ</StyledTableCell>
           
            <StyledTableCell align="center"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.No}>
              <StyledTableCell component="th" scope="row" align="center">
                {row.No}
              </StyledTableCell>
              <StyledTableCell align="center">{row.date}</StyledTableCell>
              <StyledTableCell align="center">{row.time}</StyledTableCell>
              <StyledTableCell align="center">{row.user_id}</StyledTableCell>
              <StyledTableCell align="center">{row.order_id}</StyledTableCell>
              <StyledTableCell align="center">
                <Button color="primary" onClick={() => handleCard(row.id)}>
                  ดูรายละเอียด
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
