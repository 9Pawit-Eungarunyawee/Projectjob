import { BuyContext } from "@/context/BuyContext";
import { OrderContext } from "@/context/OrderContext";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
export default function LotDialog({ open, onClose, pid, psize }) {
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
  const { buyData } = useContext(BuyContext);
  const { orderData } = useContext(OrderContext);
  const [documentData, setDocumentData] = useState([]);

  useEffect(() => {
    const filteredData = buyData
      .filter((item) => {
        return item.products.some(
          (product) => product.product_id === pid && item.status !== "ยกเลิก"
        );
      })
      .reverse();
    console.log(
      "filterdata",
      filteredData.map((f) => f.name)
    );

    let sum = orderData.reduce((acc, order) => {
      const orderProductsWithSameId = order.products.filter(
        (product) =>
          product.product_id === pid &&
          product.size === psize &&
          order.status !== "ยกเลิก" &&
          order.status !== "รอยืนยัน"
      );

      const totalAmount = orderProductsWithSameId.reduce((total, product) => {
        return total - parseInt(product.amount);
      }, 0);
      return acc + totalAmount;
    }, 0);

    const updatedFilteredData = filteredData.map((item) => {
      const updatedProducts = item.products.map((product) => {
        if (product.product_id === pid) {
          const updatedSizes = product.product_size.map((sizeItem) => {
            if (sizeItem.size === psize) {
              if (sum < 0) {
                sum += parseInt(sizeItem.amount);
                return {
                  ...sizeItem,
                  newamount: sum,
                };
              } else {
                return {
                  ...sizeItem,
                  newamount: sizeItem.amount,
                };
              }
            } else {
              return { ...sizeItem, newamount: sizeItem.amount };
            }
          });
          return { ...product, product_size: updatedSizes };
        } else {
          return { ...product };
        }
      });
      return { ...item, products: updatedProducts };
    });

    console.log("updatedFilteredData", updatedFilteredData);
    setDocumentData(updatedFilteredData.reverse());
  }, [buyData, orderData, pid, psize]);

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>ล็อตสินค้า</DialogTitle>
      <DialogContent>
        <TableContainer component={Paper} sx={{ borderRadius: "25px" }}>
          <Table sx={{ minWidth: 500 }}>
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">
                  <Typography>ชื่อล็อต</Typography>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Typography>วันที่เพิ่ม</Typography>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Typography>ต้นทุน(บาท)</Typography>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Typography>เหลือ</Typography>
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {documentData.map((item) =>
                item.products.map((product) =>
                  product.product_size.map(
                    (sizeItem, index) =>
                      sizeItem.size === psize &&
                      product.product_id === pid && (
                        <StyledTableRow key={index}>
                          <StyledTableCell align="center">
                            <Typography>{item.name}</Typography>
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            <Typography>
                              {item.createAt.toDate().toLocaleString("th-TH", {
                                dateStyle: "medium",
                              })}
                            </Typography>
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            <Typography>
                              {(sizeItem.amount*sizeItem.cost)
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            </Typography>
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            <Typography>
                              {sizeItem.newamount < 0
                                ? "0"
                                : sizeItem.newamount
                                    .toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            </Typography>
                          </StyledTableCell>
                        </StyledTableRow>
                      )
                  )
                )
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" color="error" onClick={onClose}>
          <Typography>ปิด</Typography>
        </Button>
      </DialogActions>
    </Dialog>
  );
}
