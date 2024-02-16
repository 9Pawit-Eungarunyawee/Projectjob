import { ThemeProvider } from "@emotion/react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  Typography,
  createTheme,
  styled,
  tableCellClasses,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";

export default function SearchDialog({
  handleCloseDialog,
  opendialog,
  productData,
}) {
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
  function createData(No, id, img, p_name, p_sell, p_left,p_price) {
    return { No, id, img, p_name, p_sell, p_left,p_price };
  }
  const rows = productData.map((dataItem, index) =>
    createData(
      index + 1,
      dataItem.id,
      dataItem.img,
      dataItem.name,
      dataItem.p_sell,
      dataItem.p_left,
      dataItem.productSizes
    )
  );

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
      padding:0
    },
  }));
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
    <ThemeProvider theme={theme}>
      <Dialog
        open={opendialog}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>ค้นหาสินค้า</DialogTitle>
        <DialogContent>
          <TableContainer
            component={Paper}
            sx={{ borderRadius: "25px", mb: 5 }}
          >
            <Table sx={{ minWidth: 700 }}>
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center">No.</StyledTableCell>
                  <StyledTableCell align="center">รูปภาพ</StyledTableCell>
                  <StyledTableCell align="center">ชื่อสินค้า</StyledTableCell>
                  <StyledTableCell align="center">ขาย</StyledTableCell>
                  <StyledTableCell align="center">เหลือ</StyledTableCell>
                  <StyledTableCell align="center">ราคา</StyledTableCell>
                  <StyledTableCell align="center"></StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {(rowsPerPage > 0
                  ? rows.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                  : rows
                ).map((row) => (
                  <StyledTableRow key={row.No}>
                    <StyledTableCell component="th" scope="row" align="center">
                      {row.No}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {
                        <Image
                          src={row.img}
                          alt="Product Image"
                          priority
                          height="60"
                          width="60"
                        />
                      }
                    </StyledTableCell>
                    <StyledTableCell align="center">{row.p_name}</StyledTableCell>
                    <StyledTableCell align="center">{row.p_sell}</StyledTableCell>
                    <StyledTableCell align="center">{row.p_left}</StyledTableCell>
                    <StyledTableCell align="center">{row.p_price[0].price}</StyledTableCell>
                    <StyledTableCell align="center"><Button variant="outlined">เลือก</Button></StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
              <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[2, 5, 10, 25, { label: "ทั้งหมด", value: -1 }]}
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
        </DialogContent>
      </Dialog>
    </ThemeProvider>
  );
}
