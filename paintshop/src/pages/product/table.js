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
import Image from "next/image";

export default function TableProduct(documentData) {
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
 
  const [docuData, setDocData] = React.useState([]);
  React.useEffect(() => {
    if (documentData && documentData.data) {
      setDocData(documentData.data);
    }
    console.log("doc มา table: ", docuData);
  }, [documentData, docuData]);
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

  const rows = docuData.map((dataItem, index) =>
    createData(
      index + 1,
      dataItem.img,
      dataItem.id,
      dataItem.name,
      null,
      null,
      dataItem.amount,
      dataItem.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
      null
    )
  );
  return (
    <ThemeProvider theme={CheckboxTheme}>
      <TableContainer component={Paper} sx={{ borderRadius: "25px" }}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>No.</StyledTableCell>
              <StyledTableCell align="center">รูปภาพ</StyledTableCell>
              <StyledTableCell align="">รหัสสินค้า</StyledTableCell>
              <StyledTableCell align="">ชื่อสินค้า</StyledTableCell>
              <StyledTableCell align="">สต๊อก</StyledTableCell>
              <StyledTableCell align="">ขาย</StyledTableCell>
              <StyledTableCell align="">เหลือ</StyledTableCell>
              <StyledTableCell align="">ราคา</StyledTableCell>
              <StyledTableCell align="">สถานะสินค้า</StyledTableCell>
              <StyledTableCell align="">แก้ไข</StyledTableCell>
              <StyledTableCell align=""></StyledTableCell>
              <StyledTableCell align="">
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
                <StyledTableCell align="">
                  {(
                    <Image
                      src={row.img}
                      alt="Product Image"
                      priority
                      height="75"
                      width="75"
                    />
                  )}
                </StyledTableCell>
                <StyledTableCell align="">{row.p_id}</StyledTableCell>
                <StyledTableCell align="">{row.p_name}</StyledTableCell>
                <StyledTableCell align="">{row.p_stock}</StyledTableCell>
                <StyledTableCell align="">{row.p_sell}</StyledTableCell>
                <StyledTableCell align="">{row.p_left}</StyledTableCell>
                <StyledTableCell align="">{row.p_price}</StyledTableCell>
                <StyledTableCell align="">{row.status}</StyledTableCell>
                <StyledTableCell align="">
                  <IconButton color="primary">
                    <EditIcon />
                  </IconButton>
                </StyledTableCell>
                <StyledTableCell align="">
                  <Button variant="contained" size="small">
                    ปรับสต็อก
                  </Button>
                </StyledTableCell>
                <StyledTableCell align="">
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
