import styled from "@emotion/styled";
import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  tableCellClasses,
} from "@mui/material";

export default function TableDashboard() {
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
  return (
    <TableContainer component={Paper} sx={{ borderRadius: "25px", mb: 5 }}>
      <Table sx={{ minWidth: 700 }}>
        <TableHead>
          <TableRow>
            <StyledTableCell align="center"></StyledTableCell>
            <StyledTableCell align="center">No.</StyledTableCell>
            <StyledTableCell align="center">รูปภาพ</StyledTableCell>
            <StyledTableCell align="center">ชื่อสินค้า</StyledTableCell>
            <StyledTableCell align="center">ขาย</StyledTableCell>
            <StyledTableCell align="center">เหลือ</StyledTableCell>
            <StyledTableCell align="center">สถานะสินค้า</StyledTableCell>
            <StyledTableCell align="center">แก้ไข</StyledTableCell>
            {/* <StyledTableCell align="center"></StyledTableCell> */}
            <StyledTableCell align="center">ลบ</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody></TableBody>
      </Table>
    </TableContainer>
  );
}
