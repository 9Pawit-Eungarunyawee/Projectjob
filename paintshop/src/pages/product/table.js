import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import Image from "next/image";
import { useRouter } from "next/router";
import { Delete } from "@mui/icons-material";
export default function TableProduct({ data, onDelete }) {
  const router = useRouter();
  const handleClick = (id) => {
    router.push({
      pathname: "/product/editproduct",
      query: { product_id: JSON.stringify(id) },
    });
    // console.log("handleClick")
  };

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
    if (data && data.data) {
      setDocData(data.data);
    }
    console.log("doc มา table: ", data);
  }, [data]);
  function createData(No, id, img, p_name, p_sell, p_left, p_price, status) {
    return { No, id, img, p_name, p_sell, p_left, p_price, status };
  }

  const rows = docuData.map((dataItem, index) =>
    createData(
      index + 1,
      dataItem.id,
      dataItem.img,
      dataItem.name,
      null,
      dataItem.productSizes[0].quantity,
      dataItem.productSizes[0].price
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
      dataItem.status === true ? "พร้อมขาย" : "ไม่พร้อมขาย"
    )
  );
  const [dialogopen, setDialogOpen] = React.useState(false);
  const [deleteID, setDeleteID] = React.useState(null);
  const handleDialogOpen = (id) => {
    setDialogOpen(true);
    setDeleteID(id);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };
  const handleDialogDelete = () => {
    onDelete(deleteID);
    setDialogOpen(false);
  };
  return (
    <>
      <Dialog
        open={dialogopen}
        onClose={handleDialogClose}
      >
        <DialogTitle>
          {"ยืนยันที่จะลบหรือไม่?"}
        </DialogTitle>
        {/* <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent> */}
        <DialogActions>
          <Button onClick={handleDialogClose}>ยกเลิก</Button>
          <Button onClick={handleDialogDelete} autoFocus>
            ยืนยัน
          </Button>
        </DialogActions>
      </Dialog>
      <TableContainer component={Paper} sx={{ borderRadius: "25px" }}>
        <Table sx={{ minWidth: 700 }}>
          <TableHead>
            <TableRow>
              <StyledTableCell>No.</StyledTableCell>
              <StyledTableCell align="center">รูปภาพ</StyledTableCell>
              <StyledTableCell>ชื่อสินค้า</StyledTableCell>
              <StyledTableCell>ขาย</StyledTableCell>
              <StyledTableCell>เหลือ</StyledTableCell>
              <StyledTableCell>ราคา</StyledTableCell>
              <StyledTableCell align="center">สถานะสินค้า</StyledTableCell>
              <StyledTableCell align="center">แก้ไข</StyledTableCell>
              <StyledTableCell></StyledTableCell>
              <StyledTableCell align="center">ลบ</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.No}>
                <StyledTableCell component="th" scope="row">
                  {row.No}
                </StyledTableCell>
                <StyledTableCell>
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

                <StyledTableCell>{row.p_name}</StyledTableCell>
                <StyledTableCell>{row.p_sell}</StyledTableCell>
                <StyledTableCell>{row.p_left}</StyledTableCell>
                <StyledTableCell>{row.p_price}</StyledTableCell>

                <StyledTableCell align="center">
                  <Box
                    sx={{
                      backgroundColor:
                        row.status === "พร้อมขาย"
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
                  <IconButton
                    color="primary"
                    onClick={() => handleClick(row.id)}
                  >
                    <EditIcon />
                  </IconButton>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Button variant="contained" size="small">
                    ปรับสต็อก
                  </Button>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <IconButton
                    color="primary"
                    onClick={() => handleDialogOpen(row.id)}
                  >
                    <Delete />
                  </IconButton>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
