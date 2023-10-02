import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import Image from "next/image";

export default function CardEmployee() {
  return (
    <Card sx={{ borderRadius: "20px",mb:2 }}>
      <CardActionArea>
        <CardContent>
          <Box sx={{ display: "flex", alignItems: "center",justifyContent:"space-between" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Image
                src="/profile2.jpg"
                alt="profile"
                width={60}
                height={60}
                style={{ borderRadius: "100px"}}
              ></Image>
              <Typography  sx={{pl:2,fontWeight:600,fontSize:"1.2vw"}}>
              นายสายรุ้ง สีฟ้า
              </Typography>
            </Box>
            <Box>
              <Typography  sx={{color:"#7A7A7A"}}>
              ฿15,000
              </Typography>
            </Box>
          </Box>
          <Box sx={{mt:5}}>
            <hr/>
            <Box>
                <Typography>14 มิถุนายน 2566</Typography>
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
