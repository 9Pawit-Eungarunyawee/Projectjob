import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

export default function CardEmployee(props) {
  const { data } = props;
  let salary = "ยังไม่เพิ่มเงินเดือน";
  if (data.salary) {
    salary = data.salary;
  }
  //แปลงเงิน
  const formattedInt = salary.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const router = useRouter();
  function handleCard() {
    router.push({
      pathname: "/employee/profile",
      query: { employeeData: JSON.stringify(data.id) },
    });
  }
  React.useEffect(() => {
    console.log(data);
  }, []);
  return (
    <Card sx={{ borderRadius: "20px", mb: 2 ,boxShadow:
    "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",}} onClick={handleCard}>
      <CardActionArea>
        <CardContent>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Image
                src={data.profileUrl}
                priority
                alt="profile"
                width={60}
                height={60}
                style={{ borderRadius: "100px",objectFit:"cover" }}
              ></Image>
              <Typography sx={{ pl: 2, fontWeight: 600, fontSize: "1.2vw" }}>
                {data.name}
              </Typography>
            </Box>
            <Box>
              {console.log(salary)}
              <Typography sx={{ color: "#7A7A7A" }}>
                เงินเดือน: {formattedInt}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ mt: 5 }}>
            <hr />
            <Box>
              <Typography>เบอร์ติดต่อ: {data.tel}</Typography>
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
