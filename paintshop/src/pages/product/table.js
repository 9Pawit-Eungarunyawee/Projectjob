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
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import Image from "next/image";
import { useRouter } from "next/router";
import { Delete } from "@mui/icons-material";
import { BuyContext } from "@/context/BuyContext";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { OrderContext } from "@/context/OrderContext";
import LotDialog from "./lot-dialog";
export default function TableProduct({ data, onDelete }) {
  const router = useRouter();
  const handleClick = (id, isMaterial) => {
    if (isMaterial) {
      router.push({
        pathname: "/product/editmaterial",
        query: { product_id: JSON.stringify(id) },
      });
    } else {
      router.push({
        pathname: "/product/editproduct",
        query: { product_id: JSON.stringify(id) },
      });
      // console.log("handleClick")
    }
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
  const { orderData } = React.useContext(OrderContext);
  function createData(
    No,
    id,
    img,
    p_name,
    p_sell,
    p_left,
    productSizes,
    status,
    create,
    isMaterial
  ) {
    return {
      No,
      id,
      img,
      p_name,
      p_sell,
      p_left,
      productSizes,
      status,
      create,
      isMaterial,
    };
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
      dataItem.create,
      dataItem.isMaterial
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

  // const getProductTotalSize = (id) => {
  //   const buyProductsWithSameId = buyData.flatMap((buy) =>
  //     buy.products.filter(
  //       (product) => product.product_id === id && buy.status === "สำเร็จ"
  //     )
  //   );

  //   const OrderProductsWithSameId = orderData.flatMap((order) =>
  //     order.products.filter((product) => product.product_id === id)
  //   );

  //   // console.log("buyProductsWithSameId", buyProductsWithSameId);
  //   // console.log("OrderProductsWithSameId", OrderProductsWithSameId);

  //   if (buyProductsWithSameId.length > 0) {
  //     const buyTotalSize = buyProductsWithSameId.reduce(
  //       (acc, product) =>
  //         acc +
  //         product.product_size.reduce(
  //           (accSize, size) => accSize + parseInt(size.amount),
  //           0
  //         ),
  //       0
  //     );
  //     // เพิ่มเงื่อนไขเช็คว่า buyTotalSize เป็น 0 หรือไม่
  //     if (buyTotalSize === 0) {
  //       return 0;
  //     } else {
  //       // หา OrderTotalSize จาก OrderProductsWithSameId
  //       const orderTotalSize = OrderProductsWithSameId.reduce(
  //         (acc, product) => acc + parseInt(product.amount),
  //         0
  //       );

  //       // หาค่าต่างระหว่าง buyTotalSize กับ orderTotalSize
  //       // console.log("buyTotalSize",buyTotalSize)
  //       // console.log("orderTotalSize",orderTotalSize)
  //       const difference = buyTotalSize - orderTotalSize;

  //       return difference;
  //     }
  //   } else {
  //     return 0;
  //   }
  // };

  // const getProductTotalSameSize = (id, sizeName) => {
  //   const buyTotalSize = buyData.reduce((acc, buy) => {
  //     const productsWithSameId = buy.products.filter(
  //       (product) =>
  //         product.product_id === id && buy.status === "สำเร็จ" &&
  //         product.product_size.some((size) => size.size === sizeName)
  //     );

  //     const totalAmount = productsWithSameId.reduce((total, product) => {
  //       const size = product.product_size.find(
  //         (size) => size.size === sizeName
  //       );
  //       return total + parseInt(size.amount);
  //     }, 0);

  //     return acc + totalAmount;
  //   }, 0);
  const getProductTotalSize = (id) => {
    const orderTotalSize = orderData.reduce((acc, order) => {
      const orderProductsWithSameId = order.products.filter(
        (product) =>
          product.product_id === id &&
          order.status !== "ยกเลิก" &&
          order.status !== "รอยืนยัน"
      );

      const totalAmount = orderProductsWithSameId.reduce((total, product) => {
        return total + parseInt(product.amount);
      }, 0);
      return acc + totalAmount;
    }, 0);

    // console.log("orderTotalSize", orderTotalSize);
    return orderTotalSize.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const getProductTotalSameSize = (id, sizeName) => {
    const orderTotalSize = orderData.reduce((acc, order) => {
      const orderProductsWithSameId = order.products.filter(
        (product) =>
          product.product_id === id &&
          product.size === sizeName &&
          order.status !== "ยกเลิก" &&
          order.status !== "รอยืนยัน"
      );

      const totalAmount = orderProductsWithSameId.reduce((total, product) => {
        return total + parseInt(product.amount);
      }, 0);
      return acc + totalAmount;
    }, 0);

    // console.log(" orderTotalSize", orderTotalSize);
    return orderTotalSize.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const [openRows, setOpenRows] = React.useState([]);
  const [pid, setPId] = React.useState("");
  const [psize, setPsize] = React.useState("");
  const handleRowToggle = (rowNo) => {
    setOpenRows((prevOpenRows) => ({
      ...prevOpenRows,
      [rowNo]: !prevOpenRows[rowNo],
    }));
  };
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = (id, size) => {
    setOpen(true);
    setPId(id);
    setPsize(size);
  };
  const handleClose = () => {
    setOpen(false);
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
      <LotDialog open={open} onClose={handleClose} pid={pid} psize={psize} />
      <TableContainer component={Paper} sx={{ borderRadius: "25px", mb: 5 }}>
        <Table sx={{ minWidth: 700 }}>
          <TableHead>
            <TableRow>
              <StyledTableCell align="center"></StyledTableCell>
              <StyledTableCell align="center">
                <Typography>No.</Typography>
              </StyledTableCell>
              <StyledTableCell align="center">
                <Typography>รูปภาพ</Typography>
              </StyledTableCell>
              <StyledTableCell align="center">
                <Typography>ชื่อสินค้า</Typography>
              </StyledTableCell>
              <StyledTableCell align="center">
                <Typography>ขาย</Typography>
              </StyledTableCell>
              <StyledTableCell align="center">
                <Typography>เหลือ</Typography>
              </StyledTableCell>
              <StyledTableCell align="center">
                <Typography>สถานะสินค้า</Typography>
              </StyledTableCell>
              <StyledTableCell align="center">
                <Typography>แก้ไข</Typography>
              </StyledTableCell>
              {/* <StyledTableCell align="center"></StyledTableCell> */}
              <StyledTableCell align="center">
                <Typography>ลบ</Typography>
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
            ).map((row) => (
              <React.Fragment key={row.id}>
                <StyledTableRow key={row.id}>
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
                    <Typography>{row.No}</Typography>
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
                    <Typography>{row.p_name}</Typography>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Typography>{getProductTotalSize(row.id)}</Typography>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {/* {getProductTotalSize(row.id)} */}
                    <Typography>
                      {row.productSizes.reduce(
                        (total, size) => total + size.amount,
                        0
                      ).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </Typography>
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
                      <Typography>{row.status}</Typography>
                    </Box>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <IconButton
                      color="primary"
                      onClick={() => handleClick(row.id, row.isMaterial)}
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
                            <TableCell align="center">
                              <Typography>รูปแบบสินค้า</Typography>
                            </TableCell>
                            <TableCell align="center">
                              <Typography>ขาย</Typography>
                            </TableCell>
                            <TableCell align="center">
                              <Typography>เหลือ</Typography>
                            </TableCell>
                            <TableCell align="center">
                              <Typography>ราคาขาย</Typography>
                            </TableCell>
                            <TableCell align="center">
                              <Typography>ล็อต</Typography>
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {row.productSizes &&
                            row.productSizes.map((size, i) => (
                              <TableRow key={i}>
                                <TableCell align="center">
                                  <Typography>{size.size}</Typography>
                                </TableCell>
                                <TableCell align="center">
                                  <Typography>
                                    {getProductTotalSameSize(row.id, size.size)}
                                  </Typography>
                                </TableCell>
                                <TableCell align="center">
                                  {/* {getProductTotalSameSize(row.id, size.size)} */}

                                  <Typography>
                                    {(size.amount !== "" ? size.amount : 0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                  </Typography>
                                </TableCell>
                                <TableCell align="center">
                                  <Typography>{size.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Typography>
                                </TableCell>
                                <TableCell align="center">
                                  <Button
                                    onClick={() =>
                                      handleClickOpen(row.id, size.size)
                                    }
                                  >
                                    <Typography>ล็อต</Typography>
                                  </Button>
                                </TableCell>
                              </TableRow>
                            ))}
                        </TableBody>
                      </Table>
                    </Collapse>
                  </TableCell>
                </TableRow>
              </React.Fragment>
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
