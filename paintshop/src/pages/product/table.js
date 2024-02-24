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
  Collapse,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  TableFooter,
  TablePagination,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import Image from "next/image";
import { useRouter } from "next/router";
import { Delete } from "@mui/icons-material";
import { BuyContext } from "@/context/BuyContext";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
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
      setDocData(
        data.data.sort(
          (a, b) => new Date(b.create.createAt) - new Date(a.create.createAt)
        )
      );
    }
    console.log("doc มา table: ", data);
  }, [data]);
  const { buyData } = React.useContext(BuyContext);
  function createData(
    No,
    id,
    img,
    p_name,
    p_sell,
    p_left,
    productSizes,
    status,
    create
  ) {
    return { No, id, img, p_name, p_sell, p_left, productSizes, status, create };
  }

  const rows = docuData.map((dataItem, index) => {
    return createData(
      index + 1,
      dataItem.id,
      dataItem.img,
      dataItem.name,
      null,
      null,
      dataItem.productSizes,
      dataItem.status === true ? "พร้อมขาย" : "ไม่พร้อมขาย",
      dataItem.create
    );
  });
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // const emptyRows =
  //   page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

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

  const getProductTotalSize = (buyData, id) => {
    const productsWithSameId = buyData
      .flatMap((buy) => buy.products)
      .filter((product) => product.product_id === id);

    if (productsWithSameId.length > 0) {
      const totalSize = productsWithSameId.reduce(
        (acc, product) =>
          acc +
          product.product_size.reduce(
            (accSize, size) => accSize + parseInt(size.amount),
            0
          ),
        0
      );
      return totalSize;
    } else {
      return "ไม่มีสินค้า";
    }
  };

  const getProductTotalSameSize = (buyData, id, sizeName) => {
    const productsWithSameId = buyData
      .flatMap((buy) => buy.products)
      .filter((product) => product.product_id === id);
  
    if (productsWithSameId.length > 0) {
      const totalSize = productsWithSameId.reduce((acc, product) => {
        // รวบรวมและรวมจำนวนของขนาดที่มีชื่อเหมือนกัน
        const totalAmount = product.product_size
          .filter((size) => size.size === sizeName)
          .reduce((total, size) => total + parseInt(size.amount), 0);
  
        acc += totalAmount;
        return acc;
      }, 0);
  
      return totalSize;
    } else {
      return "ไม่มีสินค้า";
    }
  };

  const [openRows, setOpenRows] = React.useState([]);
  const handleRowToggle = (rowNo) => {
    setOpenRows((prevOpenRows) => ({
      ...prevOpenRows,
      [rowNo]: !prevOpenRows[rowNo],
    }));
  };
  
  return (
    <>
      <Dialog open={dialogopen} onClose={handleDialogClose}>
        <DialogTitle>{"ยืนยันที่จะลบหรือไม่?"}</DialogTitle>
        <DialogActions>
          <Button onClick={handleDialogClose}>ยกเลิก</Button>
          <Button onClick={handleDialogDelete} autoFocus>
            ยืนยัน
          </Button>
        </DialogActions>
      </Dialog>
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
          <TableBody>
            {(rowsPerPage > 0
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
            ).map((row) => (
              <>
                <StyledTableRow key={row.No}>
                  <StyledTableCell>
                    <IconButton
                      aria-label="expand row"
                      size="small"
                      onClick={() => handleRowToggle(row.No)}
                    >
                      {openRows[row.No] ? (
                        <KeyboardArrowUpIcon />
                      ) : (
                        <KeyboardArrowDownIcon />
                      )}
                    </IconButton>
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row" align="center">
                    {row.No}
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

                  <StyledTableCell align="center">{row.p_name}</StyledTableCell>
                  <StyledTableCell align="center"></StyledTableCell>
                  <StyledTableCell align="center">
                    {getProductTotalSize(buyData, row.id)}
                  </StyledTableCell>

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
                  {/* <StyledTableCell align="center">
                    <Button variant="contained" size="small">
                      ดูรายละเอียด
                    </Button>
                  </StyledTableCell> */}
                  <StyledTableCell align="center">
                    <IconButton
                      color="primary"
                      onClick={() => handleDialogOpen(row.id)}
                    >
                      <Delete />
                    </IconButton>
                  </StyledTableCell>
                </StyledTableRow>

                <TableRow>
                  <TableCell
                    style={{ paddingBottom: 0, paddingTop: 0 }}
                    colSpan={10}
                  >
                    <Collapse
                      in={openRows[row.No]}
                      timeout="auto"
                      unmountOnExit
                    >
                      <Table>
                        <TableHead>
                          <TableRow>
                            <TableCell align="center">รูปแบบสินค้า</TableCell>
                            <TableCell align="center">ขาย</TableCell>
                            <TableCell align="center">เหลือ</TableCell>
                            <TableCell align="center">ราคาขาย</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {row.productSizes && row.productSizes.map((size,i)=>(
                            <TableRow key={i}>
                              <TableCell align="center">{size.size}</TableCell>
                              <TableCell align="center"></TableCell>
                              <TableCell align="center">{getProductTotalSameSize(buyData, row.id,size.size)}</TableCell>
                              <TableCell align="center">{size.price}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </Collapse>
                  </TableCell>
                </TableRow>
              </>
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
                labelRowsPerPage="รายการสินค้าต่อหน้า"
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </>
  );
}
