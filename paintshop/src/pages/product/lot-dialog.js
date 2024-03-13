import { BuyContext } from "@/context/BuyContext";
import { OrderContext } from "@/context/OrderContext";
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";

export default function LotDialog({ open, onClose, pid, psize }) {
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
                  amount: sum,
                };
              } else {
                return {
                  ...sizeItem,amount:sizeItem.amount,
                };
              }
            } else {
              return { ...sizeItem,amount:sizeItem.amount };
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
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle>ล็อตสินค้า</DialogTitle>
      <DialogContent>
        {documentData.map((item, index) => (
          <Box key={index}>
            {item.products.map((product) =>
              product.product_size.map(
                (sizeItem) =>
                  sizeItem.size === psize &&
                  product.product_id === pid && (
                    <Box key={sizeItem.size} sx={{display:"flex"}}>
                      <Typography>
                        ชื่อล็อต: {item.name}, ขนาด: {sizeItem.size} เหลือ:
                        {sizeItem.amount < 0 ?"0":sizeItem.amount}
                      </Typography>
                      
                    </Box>
                  )
              )
            )}
          </Box>
        ))}
      </DialogContent>
    </Dialog>
  );
}
