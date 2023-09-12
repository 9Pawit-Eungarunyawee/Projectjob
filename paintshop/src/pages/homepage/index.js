import Link from "next/link";
import * as React from "react";
import {
  Box,
  Container,
  Typography,
  Tab,
  Tabs,
  TabPanel,
  ThemeProvider,
  createTheme,
  TabContext,
  TabList,
  Grid,
  Button,
} from "@mui/material";
import PropTypes from "prop-types";
import Image from "next/image";
import ImagesearchRollerOutlinedIcon from "@mui/icons-material/ImagesearchRollerOutlined";
import CabinOutlinedIcon from "@mui/icons-material/CabinOutlined";
import HouseOutlinedIcon from "@mui/icons-material/HouseOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import BrushOutlinedIcon from "@mui/icons-material/BrushOutlined";
import SensorDoorOutlinedIcon from "@mui/icons-material/SensorDoorOutlined";
import Homelayout from "@/components/homelayout";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Designcard from "../designcard";
import Colorshade from "../colorshade";


function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          sx={{
            p: 3,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            bgcolor: "#fff",
            boxShadow: "0px 3px 4px 0px rgba(0, 0, 0, 0.25)",
          }}
        >
          {children}
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
export default function Homepage() {
 
  const theme = createTheme({
    palette: {
      primary: {
        main: "#fffff",
      },
    },
  });
  const styles = {
    imgHover: {
      transition: "transform 0.3s",
      "&:hover": {
        transform: "scale(1.1)",
        transition: "0.5s",
        cursor: "pointer",
      },
    },
    buttonHover: {
      "&:hover": {
        backgroundColor: "#018294",
        transition: "0.5s",
        color: "white",
      },
    },
    activeTab: {
      backgroundColor: "#018294",
      color: "white",
      "&:hover": {
        backgroundColor: "#018294",
        transition: "0.5s",
        color: "white",
        cursor: "pointer",
      },
      "&::before": {
        content: "''",
        position: "absolute",
        bottom: "-20px",
        left: 0,
        right: 0,
        height: "20px",
        borderBottomLeftRadius: "25px",
        borderBottomRightRadius: "25px",
        border: "2px solid #ffffff",
      },
      minWidth: "120px",
    },
    inactiveTab: {
      color: "white",
      "&:hover": {
        backgroundColor: "#018294",
        transition: "0.5s",
        color: "white",
        cursor: "pointer",
      },
      "&::before": {
        content: "''",
        position: "absolute",
        bottom: "-20px",
        left: 0,
        right: 0,
        height: "20px",
        borderBottomLeftRadius: "25px",
        borderBottomRightRadius: "25px",
        border: "2px solid #ffffff",
      },
      minWidth: "120px",
    },
  };
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Homelayout>
      <Container maxWidth="false">
        <ThemeProvider theme={theme}>
          <Box sx={{ width: "100%" }}>
            <Box
              sx={{
                bgcolor: "#ABABAB",
                borderRadius: "0px 0px 25px 25px",
              }}
            >
              <Tabs value={value} onChange={handleChange} centered>
                <Tab
                  icon={<HouseOutlinedIcon />}
                  label="สีทาบ้าน"
                  sx={{
                    ...(value === 0 ? styles.activeTab : styles.inactiveTab),
                    py: 2,
                  }}
                  {...a11yProps(0)}
                />
                <Tab
                  icon={<ListOutlinedIcon />}
                  label="ยี่ห้อ"
                  sx={{
                    ...(value === 1 ? styles.activeTab : styles.inactiveTab),
                    py: 2,
                  }}
                  {...a11yProps(1)}
                />
                <Tab
                  icon={<ImagesearchRollerOutlinedIcon />}
                  label="สีทาภายใน"
                  sx={{
                    ...(value === 2 ? styles.activeTab : styles.inactiveTab),
                    py: 2,
                  }}
                  {...a11yProps(2)}
                />
                <Tab
                  icon={<BrushOutlinedIcon />}
                  label="สีทาเหล็ก"
                  sx={{
                    ...(value === 3 ? styles.activeTab : styles.inactiveTab),
                    py: 2,
                  }}
                  {...a11yProps(3)}
                />
                <Tab
                  icon={<CabinOutlinedIcon />}
                  label="สีทาไม้"
                  sx={{
                    ...(value === 4 ? styles.activeTab : styles.inactiveTab),
                    py: 2,
                  }}
                  {...a11yProps(4)}
                />{" "}
                <Tab
                  icon={<SensorDoorOutlinedIcon />}
                  label="วัสดุภัณฑ์"
                  sx={{
                    ...(value === 5 ? styles.activeTab : styles.inactiveTab),
                    py: 2,
                  }}
                  {...a11yProps(5)}
                />
              </Tabs>
            </Box>

            <CustomTabPanel value={value} index={0}>
              <Box sx={{ p: 2 }}>
                <Typography variant="h4" sx={{ pb: 2, color: "#018294" }}>
                  สีทาบ้าน
                </Typography>
                <Typography
                  sx={{
                    width: "598px",
                    fontStyle: "normal",
                    color: "#7a7a7a",
                    pb: 2,
                  }}
                >
                  สีสำหรับทาปูนโดยเฉพาะ ใช้สำหรับงานคอนกรีต ทาเคลือบพื้นปูน
                  ผนังปูน ฝ้าเพดาน และกระเบื้องแผ่นเรียบ เป็นสีประเภทสีน้ำ
                  (พลาสติกหรืออะคริลิค) ให้สีสด คงทน ยึดเกาะดี
                  เพราะผลิตมาจากกาวชนิดพิเศษ โดยสีทาปูนก็จะมี 2
                  ประเภทที่ต้องใช้ร่วมกัน ได้แก่ สีทารองพื้นและสีทับหน้า
                </Typography>
                <Button
                  sx={{
                    border: "2px solid #018294",
                    color: "#018294",
                    ...styles.buttonHover,
                  }}
                >
                  <Typography>ดูทั้งหมด</Typography>
                  <ArrowForwardIcon />
                </Button>
              </Box>
              <Box
                sx={{ width: "1px", height: "300px", bgcolor: "#DDD" }}
              ></Box>
              <Box sx={{ p: 2 }}>
                <Typography>ผลิตภัณฑ์ที่แนะนำ</Typography>
                <Box sx={{ display: "flex", gap: "16px", p: 2 }}>
                  <Image
                    style={{ borderRadius: "50%" }}
                    src="https://static.wixstatic.com/media/04a779_aefe03121b7d4012b4a5b53b4bb3a80b~mv2.jpg"
                    alt="ผลิตภัณฑ์ที่แนะนำ"
                    width={202}
                    height={202}
                    priority
                  />
                  <Image
                    style={{ borderRadius: "50%" }}
                    src="https://static.wixstatic.com/media/04a779_aefe03121b7d4012b4a5b53b4bb3a80b~mv2.jpg"
                    alt="ผลิตภัณฑ์ที่แนะนำ"
                    width={202}
                    height={202}
                    priority
                  />
                  <Image
                    style={{ borderRadius: "50%" }}
                    src="https://static.wixstatic.com/media/04a779_aefe03121b7d4012b4a5b53b4bb3a80b~mv2.jpg"
                    alt="ผลิตภัณฑ์ที่แนะนำ"
                    width={202}
                    height={202}
                    priority
                  />
                </Box>
              </Box>
            </CustomTabPanel>

            <CustomTabPanel value={value} index={1}>
              <Box sx={{ p: 2 }}>
                <Typography variant="h4" sx={{ pb: 2, color: "#018294" }}>
                  ยี่ห้อ
                </Typography>
                <Typography
                  sx={{
                    width: "598px",
                    fontStyle: "normal",
                    color: "#7a7a7a",
                    pb: 2,
                  }}
                >
                  สีทาบ้านนั้นมีหลายยี่ห้อให้เลือกบางแบรนด์ก็จะมีจุดเด่นที่แตกต่างกันไปของแต่ละแบรนด์
                  หรือสีที่แตกต่างกันไปอีกด้วย
                </Typography>
                <Button
                  sx={{
                    border: "2px solid #018294",
                    color: "#018294",
                    ...styles.buttonHover,
                  }}
                >
                  <Typography>ดูทั้งหมด</Typography>
                  <ArrowForwardIcon />
                </Button>
              </Box>
              <Box
                sx={{ width: "1px", height: "300px", bgcolor: "#DDD" }}
              ></Box>
              <Box sx={{ p: 2 }}>
                <Typography>ยี่ห้อที่แนะนำ</Typography>
                <Box sx={{ display: "flex", gap: "16px", p: 2 }}>
                  <Image
                    style={{ borderRadius: "50%", objectFit: "none" }}
                    src="https://www.beger.co.th/assets/images/logo-beger.jpg"
                    alt="ผลิตภัณฑ์ที่แนะนำ"
                    width={202}
                    height={202}
                    priority
                  />
                  <Image
                    style={{ borderRadius: "50%", objectFit: "none" }}
                    src="https://www.toagroup.com/themes/default/assets/static/images/logo.svg"
                    alt="ผลิตภัณฑ์ที่แนะนำ"
                    width={202}
                    height={202}
                    priority
                  />
                  <Image
                    style={{ borderRadius: "50%", objectFit: "none" }}
                    src="https://www.jotun.com/siteassetsjot03/logo.svg"
                    alt="ผลิตภัณฑ์ที่แนะนำ"
                    width={202}
                    height={202}
                    priority
                  />
                </Box>
              </Box>
            </CustomTabPanel>

            <CustomTabPanel value={value} index={2}>
              <Box sx={{ p: 2 }}>
                <Typography variant="h4" sx={{ pb: 2, color: "#018294" }}>
                  สีทาภายใน
                </Typography>
                <Typography
                  sx={{
                    width: "598px",
                    fontStyle: "normal",
                    color: "#7a7a7a",
                    pb: 2,
                  }}
                >
                  สีทับหน้าที่ใช้สำหรับการทาพื้นผิวปูนในอาคาร เช่น ผนังห้อง,
                  ฝ้าเพดาน โดยจะมีความเข้มข้นของเนื้อสีอะคริลิคที่เยอะ
                  ทำให้มีฟิล์มสีมีความนุ่มนวล เงางาม และเรียบเนียน
                  มีคุณสมบัติที่ทนทานต่อการทำความสะอาด เช็ดถู สิ่งสกปรกต่างๆ
                </Typography>
                <Button
                  sx={{
                    border: "2px solid #018294",
                    color: "#018294",
                    ...styles.buttonHover,
                  }}
                >
                  <Typography>ดูทั้งหมด</Typography>
                  <ArrowForwardIcon />
                </Button>
              </Box>
              <Box
                sx={{ width: "1px", height: "300px", bgcolor: "#DDD" }}
              ></Box>
              <Box sx={{ p: 2 }}>
                <Typography>ผลิตภัณฑ์ที่แนะนำ</Typography>
                <Box sx={{ display: "flex", gap: "16px", p: 2 }}>
                  <Image
                    style={{ borderRadius: "50%", objectFit: "contain" }}
                    src="https://www.beger.co.th/upload_file/product/8_1_5.png"
                    alt="ผลิตภัณฑ์ที่แนะนำ"
                    width={202}
                    height={202}
                    priority
                  />
                  <Image
                    style={{ borderRadius: "50%", objectFit: "contain" }}
                    src="https://www.beger.co.th/upload_file/product/begershield-easy-clean-and-care_4.png"
                    alt="ผลิตภัณฑ์ที่แนะนำ"
                    width={202}
                    height={202}
                    priority
                  />
                  <Image
                    style={{ borderRadius: "50%", objectFit: "contain" }}
                    src="https://www.beger.co.th/upload_file/product/airclean.png"
                    alt="ผลิตภัณฑ์ที่แนะนำ"
                    width={202}
                    height={202}
                    priority
                  />
                </Box>
              </Box>
            </CustomTabPanel>

            <CustomTabPanel value={value} index={3}>
              <Box sx={{ p: 2 }}>
                <Typography variant="h4" sx={{ pb: 2, color: "#018294" }}>
                  สีทาเหล็ก
                </Typography>
                <Typography
                  sx={{
                    width: "598px",
                    fontStyle: "normal",
                    color: "#7a7a7a",
                    pb: 2,
                  }}
                >
                  สีทาเหล็กที่ถูกทาเป็นชั้นรองพื้น โดยชื่อเรียกเต็มๆ นั้น
                  เราจะเรียกกันว่า สีรองพื้นกันสนิม
                  มีหน้าที่ปกป้องพื้นผิวเหล็กจากสภาพอากาศภายนอกไม่ให้เข้ามาทำปฏิกริยาจนเหล็กเกิดเป็นสนิม
                </Typography>
                <Button
                  sx={{
                    border: "2px solid #018294",
                    color: "#018294",
                    ...styles.buttonHover,
                  }}
                >
                  <Typography>ดูทั้งหมด</Typography>
                  <ArrowForwardIcon />
                </Button>
              </Box>
              <Box
                sx={{ width: "1px", height: "300px", bgcolor: "#DDD" }}
              ></Box>
              <Box sx={{ p: 2 }}>
                <Typography>ผลิตภัณฑ์ที่แนะนำ</Typography>
                <Box sx={{ display: "flex", gap: "16px", p: 2 }}>
                  <Image
                    style={{ borderRadius: "50%", objectFit: "none" }}
                    src="https://d1an7elaqzcblb.cloudfront.net/SANTAMARIA-PROD/athdlx/PACKSHOTS/f5e524763a28a1d507322e042b6d94eb.png"
                    alt="ผลิตภัณฑ์ที่แนะนำ"
                    width={202}
                    height={202}
                    priority
                  />
                  <Image
                    style={{ borderRadius: "50%", objectFit: "none" }}
                    src="https://d1an7elaqzcblb.cloudfront.net/SANTAMARIA-PROD/athdlx/PACKSHOTS/b5abd38ffa0788693aa080daf881d8fe.png"
                    alt="ผลิตภัณฑ์ที่แนะนำ"
                    width={202}
                    height={202}
                    priority
                  />
                  <Image
                    style={{ borderRadius: "50%", objectFit: "none" }}
                    src="https://d1an7elaqzcblb.cloudfront.net/SANTAMARIA-PROD/athdlx/PACKSHOTS/292cc5c9cd324fe64f0959c42a159482.png"
                    alt="ผลิตภัณฑ์ที่แนะนำ"
                    width={202}
                    height={202}
                    priority
                  />
                </Box>
              </Box>
            </CustomTabPanel>

            <CustomTabPanel value={value} index={4}>
              <Box sx={{ p: 2 }}>
                <Typography variant="h4" sx={{ pb: 2, color: "#018294" }}>
                  สีทาไม้
                </Typography>
                <Typography
                  sx={{
                    width: "598px",
                    fontStyle: "normal",
                    color: "#7a7a7a",
                    pb: 2,
                  }}
                >
                  สีที่ใช้สำหรับทาไม้ เพื่อช่วยรักษาพื้นผิวจากสภาพอากาศ
                  และการใช้งาน หรือใช้เพื่อความสวยงาม
                  ช่วยคืนความสดใหม่ให้กับไม้เก่า
                  และย้อมสีของไม้ให้กลายเป็นเฉดสีต่างๆ ตามความต้องการ
                  โดยเนื้อสีจะมีความโปร่งใส ทำให้ยังคงเห็นลวดลายของไม้ที่ถูกทา
                  สามารถปรับความเข้มของเฉดสีได้ตามจำนวนครั้งที่ทาทับ
                  และยังสามารถซึมเข้าไปในเนื้อไม้ได้ดี
                </Typography>
                <Button
                  sx={{
                    border: "2px solid #018294",
                    color: "#018294",
                    ...styles.buttonHover,
                  }}
                >
                  <Typography>ดูทั้งหมด</Typography>
                  <ArrowForwardIcon />
                </Button>
              </Box>
              <Box
                sx={{ width: "1px", height: "300px", bgcolor: "#DDD" }}
              ></Box>
              <Box sx={{ p: 2 }}>
                <Typography>ผลิตภัณฑ์ที่แนะนำ</Typography>
                <Box sx={{ display: "flex", gap: "16px", p: 2 }}>
                  <Image
                    style={{ borderRadius: "50%", objectFit: "contain" }}
                    src="https://www.beger.co.th/upload_file/product/56_1.jpg"
                    alt="ผลิตภัณฑ์ที่แนะนำ"
                    width={202}
                    height={202}
                    priority
                  />
                  <Image
                    style={{ borderRadius: "50%", objectFit: "contain" }}
                    src="https://www.beger.co.th/upload_file/product/23_1_1.jpg"
                    alt="ผลิตภัณฑ์ที่แนะนำ"
                    width={202}
                    height={202}
                    priority
                  />
                  <Image
                    style={{ borderRadius: "50%", objectFit: "contain" }}
                    src="https://www.beger.co.th/upload_file/product/301_1.png"
                    alt="ผลิตภัณฑ์ที่แนะนำ"
                    width={202}
                    height={202}
                    priority
                  />
                </Box>
              </Box>
            </CustomTabPanel>

            <CustomTabPanel value={value} index={5}>
              <Box sx={{ p: 2 }}>
                <Typography variant="h4" sx={{ pb: 2, color: "#018294" }}>
                  วัสดุภัณฑ์
                </Typography>
                <Typography
                  sx={{
                    width: "598px",
                    fontStyle: "normal",
                    color: "#7a7a7a",
                    pb: 2,
                  }}
                >
                  อุปกรณ์เสริมเอาไว้สำหรับทาสี เช่นพวกแปรง
                </Typography>
                <Button
                  sx={{
                    border: "2px solid #018294",
                    color: "#018294",
                    ...styles.buttonHover,
                  }}
                >
                  <Typography>ดูทั้งหมด</Typography>
                  <ArrowForwardIcon />
                </Button>
              </Box>
              <Box
                sx={{ width: "1px", height: "300px", bgcolor: "#DDD" }}
              ></Box>
              <Box sx={{ p: 2 }}>
                <Typography>ผลิตภัณฑ์ที่แนะนำ</Typography>
                <Box sx={{ display: "flex", gap: "16px", p: 2 }}>
                  <Image
                    style={{ borderRadius: "50%", objectFit: "contain" }}
                    src="https://www.dohome.co.th/media/catalog/product/1/0/10051050_ea_1200_1_9.jpg"
                    alt="ผลิตภัณฑ์ที่แนะนำ"
                    width={202}
                    height={202}
                    priority
                  />
                  <Image
                    style={{ borderRadius: "50%", objectFit: "contain" }}
                    src="https://www.dohome.co.th/media/catalog/product/cache/e4dbc73298941f97ea19919769d5842d/1/0/10125203_ea_1200_1_1.jpg"
                    alt="ผลิตภัณฑ์ที่แนะนำ"
                    width={202}
                    height={202}
                    priority
                  />
                </Box>
              </Box>
            </CustomTabPanel>
          </Box>
          <Colorshade />
          <Designcard />
        </ThemeProvider>
      </Container>
    </Homelayout>
  );
}