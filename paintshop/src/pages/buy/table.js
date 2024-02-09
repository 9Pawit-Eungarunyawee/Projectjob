import {
  Box,
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

  function createData(No, id, cost, createAt, product) {
    return { No, id, cost, createAt, product };
  }

  const rows = docuData.map((dataItem, index) =>
    createData(
      index + 1,
      dataItem.id,
      dataItem.cost,
      dataItem.createAt,
      dataItem.product
    )
  );

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
              <StyledTableCell align="center">รายการ</StyledTableCell>
              <StyledTableCell align="center">ผู้สร้าง</StyledTableCell>
              <StyledTableCell align="center">มูลค่า</StyledTableCell>
              <StyledTableCell align="center">สถานะ</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.No}>
                <StyledTableCell component="th" scope="row">
                  {row.No}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.createAt
                    .toDate()
                    .toLocaleString("th-TH", {
                      dateStyle: "medium",
                      
                    })}
                </StyledTableCell>
                <StyledTableCell>{row.product[0].product_id}</StyledTableCell>
                <StyledTableCell>{row.p_left}</StyledTableCell>
                <StyledTableCell>{row.p_price}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
