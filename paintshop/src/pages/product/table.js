import * as React from "react";
import { ThemeProvider, createTheme, styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Checkbox, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

export default function TableProduct() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const CheckboxTheme = createTheme({
    palette: {
      success: {
        main: "#fff",
      },
      primary: {
        main: "#018294",
      },
    },
  });
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

  function createData(
    No,
    img,
    p_id,
    p_name,
    p_stock,
    p_sell,
    p_left,
    p_price,
    status
  ) {
    return { No, img, p_id, p_name, p_stock, p_sell, p_left, p_price, status };
  }

  const rows = [
    createData(
      1,
      "img",
      "T001",
      "TOA Supermatex",
      "30",
      "20",
      "10",
      "1000",
      "raedy"
    ),
    createData(
      1,
      "img",
      "T001",
      "TOA Supermatex",
      "30",
      "20",
      "10",
      "1000",
      "raedy"
    ),
    createData(
      1,
      "img",
      "T001",
      "TOA Supermatex",
      "30",
      "20",
      "10",
      "1000",
      "raedy"
    ),
    createData(
      1,
      "img",
      "T001",
      "TOA Supermatex",
      "30",
      "20",
      "10",
      "1000",
      "raedy"
    ),
  ];
  return (
    <ThemeProvider theme={CheckboxTheme}>
      <TableContainer component={Paper} sx={{ borderRadius: "25px" }}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>No.</StyledTableCell>
              <StyledTableCell align="right">รูปภาพ</StyledTableCell>
              <StyledTableCell align="right">รหัสสินค้า</StyledTableCell>
              <StyledTableCell align="right">ชื่อสินค้า</StyledTableCell>
              <StyledTableCell align="right">สต๊อก</StyledTableCell>
              <StyledTableCell align="right">ขาย</StyledTableCell>
              <StyledTableCell align="right">เหลือ</StyledTableCell>
              <StyledTableCell align="right">ราคา</StyledTableCell>
              <StyledTableCell align="right">สถานะสินค้า</StyledTableCell>
              <StyledTableCell align="right">แก้ไข</StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="right">
                <Checkbox {...label} color="success" sx={{ color: "#fff" }} />
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.No}>
                <StyledTableCell component="th" scope="row">
                  {row.No}
                </StyledTableCell>
                <StyledTableCell align="right">{row.img}</StyledTableCell>
                <StyledTableCell align="right">{row.p_id}</StyledTableCell>
                <StyledTableCell align="right">{row.p_name}</StyledTableCell>
                <StyledTableCell align="right">{row.p_stock}</StyledTableCell>
                <StyledTableCell align="right">{row.p_sell}</StyledTableCell>
                <StyledTableCell align="right">{row.p_left}</StyledTableCell>
                <StyledTableCell align="right">{row.p_price}</StyledTableCell>
                <StyledTableCell align="right">{row.status}</StyledTableCell>
                <StyledTableCell align="right">
                  <IconButton color="primary">
                    <EditIcon />
                  </IconButton>
                </StyledTableCell>
                <StyledTableCell align="right"><Button variant="contained" size="small">ปรับสต็อก</Button></StyledTableCell>
                <StyledTableCell align="right">
                  <Checkbox {...label} />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ThemeProvider>
  );
}
