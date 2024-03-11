import { OrderContext } from "@/context/OrderContext";
import { ProductContext } from "@/context/ProductContext";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Pagination,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";

export default function Topsale() {
  const styles = {
    pagination: {
      "& .MuiPagination-ul": {
        justifyContent: "center",
      },
      "& .MuiPaginationItem-root": {
        fontSize: "1rem",
      },
    },
  };

  const { productData, fetchProductData } = useContext(ProductContext);
  const { orderData, fetchOrderData } = useContext(OrderContext);
  const [show, setShow] = useState(false);
  const [page, setPage] = useState(1); // ระบุหน้าปัจจุบัน
  const [rowsPerPage, setRowsPerPage] = useState(1); // จำนวนรายการต่อหน้า
  const [topSales, setTopSales] = useState([]);

  useEffect(() => {
    fetchProductData();
    fetchOrderData();
  }, []);
  useEffect(() => {
    if (orderData.length > 0) {
      const productSales = orderData.reduce((sales, order) => {
        if (order.status === "จัดส่งสำเร็จ") {
          order.products.forEach((product) => {
            const { product_id, amount } = product;
            sales[product_id] = (sales[product_id] || 0) + amount;
          });
        }
        return sales;
      }, {});

      // Convert productSales object to an array of objects
      const topSalesArray = Object.entries(productSales).map(
        ([product_id, amount]) => ({
          product_id,
          amount,
        })
      );

      // Sort the array by amount in descending order
      topSalesArray.sort((a, b) => b.amount - a.amount);

      // Set the top sales state
      setTopSales(topSalesArray);
    }
    setShow(true);
  }, [orderData]);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const isMdScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));
  return (
    <>
      {show ? (
        <Stack spacing={1}>
          {topSales
            .slice((page - 1) * rowsPerPage, page * rowsPerPage) // ใช้ slice เพื่อจำกัดจำนวนรายการตามหน้าปัจจุบัน
            .map((sale, index) => (
              <Box key={index} sx={{ textAlign: "center" }}>
                <Image
                  alt={
                    productData &&
                    productData.find((p) => p.id === sale.product_id) &&
                    productData.find((p) => p.id === sale.product_id).name
                  }
                  height={isMdScreen ? 200 : 150}
                  width={isMdScreen ? 200 : 150}
                  src={
                    productData &&
                    productData.find((p) => p.id === sale.product_id) &&
                    productData.find((p) => p.id === sale.product_id).img
                  }
                />

                <Typography variant="h6">
                  {productData &&
                    productData.find((p) => p.id === sale.product_id) &&
                    productData.find((p) => p.id === sale.product_id).name}
                </Typography>
                <Typography component="div">
                  ขายได้: {sale.amount} ชิ้น
                </Typography>
              </Box>
            ))}

          <Pagination
            count={Math.min(Math.ceil(topSales.length / rowsPerPage), 5)}
            page={page}
            onChange={handleChangePage}
            sx={styles.pagination}
            color="primary"
            size={isMdScreen ? "medium" : "small"}
          />
        </Stack>
      ) : (
        <></>
      )}
    </>
  );
}
