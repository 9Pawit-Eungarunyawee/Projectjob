import Layout from "@/components/layout";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  InputAdornment,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { debounce } from "lodash";
import searchUser from "@/firebase/searchData";
import AddEmployeeDialog from "./addemployee-dialog";
export default function AddEmployee() {
  const style = createTheme({
    palette: {
      primary: {
        main: "#018294",
      },
      success: {
        main: "#A9C470",
      },
      error: {
        main: "#FE616A",
      },
    },
    typography: {
      text: {
        fontSize: "1.2rem",
        padding: "1vw",
        width: "10rem",
      },
      data: {
        fontSize: "1.2rem",
        fontWeight: "600",
        whiteSpace: "pre-line",
      },
    },
  });
  const goBack = () => {
    window.history.back();
  };
  useEffect(()=>{
    debouncedSearchUser("");
  },[])
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [documentData, setDocumentData] = useState([]);
  const debouncedSearchUser = debounce(async (term) => {
    try {
      const collectionName = "users";
      const field = "name";
      const results = await searchUser(collectionName, field, term);
      const filteredResults = results.filter((doc) => doc.role == "user" && !doc.isFormerEmployee);
      setDocumentData(filteredResults);
    } catch (error) {
      console.error("Error searching data:", error);
    }
  }, 100); // กำหนดเวลา debounce ที่คุณต้องการ

  const handleSearch = (term) => {
    setSearchTerm(term);
    debouncedSearchUser(term);
  };
  const [open, setOpen] = useState(false);
  const handleClickOpen = (item) => {
    setOpen(true);
    setData(item);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Layout>
      <ThemeProvider theme={style}>
        <Box>
          <Typography sx={{ fontSize: "2rem", fontWeight: "600", mt: 5 }}>
            เพิ่มพนักงาน
          </Typography>
          <Button
            sx={{
              color: "#018294",
              bgcolor: "white",
              fontWeight: "bold",
              borderRadius: "50px",
              boxShadow: "4px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            }}
            onClick={goBack}
          >
            <ArrowBackOutlinedIcon />
            <Typography> ย้อนกลับ</Typography>
          </Button>
          <Box
            sx={{
              mt: 3,
              mb: 5,
              backgroundColor: "#fff",
              p: 2,
              borderRadius: "10px",
              boxShadow: "4px 4px 4px 0px rgba(0, 0, 0, 0.25)",
              minHeight: "70vh",
            }}
          >
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <TextField
                  label="ค้นหาผู้ใช้งาน"
                  variant="outlined"
                  size="small"
                  fullWidth
                  onChange={(e) => handleSearch(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon sx={{ fontSize: "1.4rem" }} />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              {documentData &&
                documentData.map((item) => (
                  <Grid key={item.id} item xs={12} md={4} lg={3} sx={{ mt: 2 }}>
                    <AddEmployeeDialog
                      item={data}
                      open={open}
                      handleClose={handleClose}
                      style={style}
                      debouncedSearchUser={debouncedSearchUser}
                    />
                    <Card onClick={() => handleClickOpen(item)}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="140"
                          image={item.profileUrl}
                          alt="profile-img"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            {item.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            อีเมล: {item.email}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            เบอร์ติดต่อ: {item.tel}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                ))}
            </Grid>
          </Box>
        </Box>
      </ThemeProvider>
    </Layout>
  );
}
