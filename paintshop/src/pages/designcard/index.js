import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
export default function designcard() {
  const styles = {
    designbtnHover: {
      "&:hover": {
        backgroundColor: "#FE616A",
        transition: "0.5s",
        color: "white",
      },
    },
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#535353",
        p: 3,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "white",
        }}
      >
        <Image
          sx={{ objectFit: "cover" }}
          src="/Design.png"
          alt="ผลิตภัณฑ์ที่แนะนำ"
          width={350}
          height={300}
          priority
        />
        <Box sx={{ p: 2 }}>
          <Typography variant="h4" sx={{ color: "#018294" }}>
            ออกแบบสีบ้าน
          </Typography>
          <Box
            sx={{ bgcolor: "#FE616A", width: "62px", height: "2px", mb: 2 }}
          ></Box>
          <Typography
            sx={{
              width: "598px",
              fontStyle: "normal",
              color: "#7A7A7A",
              pb: 2,
            }}
          >
            แนวคิดใหม่ในการออกแบบสีบ้านด้วยตัวคุณเอง เพียง 2 ขั้นตอนง่ายๆ
            ส่งรูปบ้าน และเลือกสีที่ชอบ
          </Typography>
          <Button
            sx={{
              border: "2px solid #FE616A",
              color: "#FE616A",
              ...styles.designbtnHover,
            }}
          >
            <Typography>ดูทั้งหมด</Typography>
            <ArrowForwardIcon />
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
