import styled from "@emotion/styled";
import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
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
  function createData(No, id, date, time, order_id, user_id, status) {
    return { No, id, date, time, order_id, user_id, status };
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
      dataItem.status
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
    <TableContainer component={Paper} sx={{ borderRadius: "25px" }}>
      <Table sx={{ minWidth: 700 }}>
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">
              <Typography>No.</Typography>
            </StyledTableCell>
            <StyledTableCell align="center">
              <Typography>วันที่</Typography>
            </StyledTableCell>
            <StyledTableCell align="center">
              <Typography>เวลา</Typography>
            </StyledTableCell>
            <StyledTableCell align="center">
              <Typography>ชื่อลูกค้า</Typography>
            </StyledTableCell>
            <StyledTableCell align="center">
              <Typography>รายการคำสั่งซื้อ</Typography>
            </StyledTableCell>
            <StyledTableCell align="center">
              <Typography>สถานะ</Typography>
            </StyledTableCell>
            <StyledTableCell align="center"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.No}>
              <StyledTableCell component="th" scope="row" align="center">
                <Typography>{row.No}</Typography>
              </StyledTableCell>
              <StyledTableCell align="center">
                <Typography>{row.date}</Typography>
              </StyledTableCell>
              <StyledTableCell align="center">
                <Typography>{row.time}</Typography>
              </StyledTableCell>
              <StyledTableCell align="center">
                <Typography>{row.user_id}</Typography>
              </StyledTableCell>
              <StyledTableCell align="center">
                <Typography>{row.order_id}</Typography>
              </StyledTableCell>
              <StyledTableCell align="center">
                {" "}
                <Box
                  sx={{
                    backgroundColor:
                      row.status === "ยกเลิกการเคลม"
                        ? "rgba(254, 97, 106, 0.50)"
                        : row.status === "ยืนยันการเคลม"
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
      </Table>
    </TableContainer>
  );
}
