import * as React from "react";
import Box from "@mui/material/Box";
import Layout from "@/components/layout";
import {
  Button,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import CardEmployee from "./card";
import { useRouter } from "next/router";
import { getCollection } from "../../firebase/getData";
import { useAuthContext } from "@/context/AuthContext";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import searchUser from "@/firebase/searchData";
import { debounce } from "lodash";
export default function Employee() {
  const { role } = useAuthContext();
  const [documentData, setDocumentData] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [count, setCount] = React.useState(0);
  const router = useRouter();
  function handleAdd() {
    router.push("/employee/edit");
  }

  React.useEffect(() => {
    // ทำสิ่งที่คุณต้องการกับ searchResults ที่ได้
    handleSearch("");
  }, []);
  React.useEffect(() => {
    // ทำสิ่งที่คุณต้องการกับ searchResults ที่ได้
    console.log(documentData);
  }, [documentData]);

  const debouncedSearchUser = debounce(async (term) => {
    try {
      const collectionName = "users";
      const field = "name";
      const results = await searchUser(collectionName, field, term);
      const filteredResults = results.filter((doc) => doc.role == "employee");
      setDocumentData(filteredResults);
      setCount(documentData.length);
    } catch (error) {
      console.error("Error searching data:", error);
    }
  }, 500); // กำหนดเวลา debounce ที่คุณต้องการ

  const handleSearch = (term) => {
    setSearchTerm(term);
    debouncedSearchUser(term);
  };

  //เงินเดือนรวม
  let total = 0;
  if (documentData) {
    documentData.map((data) => {
      if (data.salary) {
        total += parseInt(data.salary);
      }
    });
  }
  const formattedInt = total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  // console.log("employee:::", role);
  if (role == "employee") {
    return null;
  } else if (role == "admin") {
    return (
      <>
        <Layout>
          <Box>
            <Grid
              container
              columnSpacing={2}
              rowSpacing={0}
              sx={{ height: "100%", width: "100%", pt: 1 }}
            >
              <Grid item xs={12} sx={{ mt: 5 }}>
                <Typography sx={{ fontSize: "2vw", fontWeight: "600" }}>
                  จัดการพนักงาน
                </Typography>
                <Box sx={{ mt: 1 }}>
                  <TextField
                    label="ค้นหา"
                    variant="outlined"
                    size="small"
                    onChange={(e) => handleSearch(e.target.value)}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon sx={{ fontSize: "1.4rem" }} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="success"
                  sx={{ mr: 2, mb: 2, mt: 2 }}
                  onClick={handleAdd}
                >
                  เพิ่มพนักงาน
                </Button>
              </Grid>
              <Grid item sm={8} xs={12}>
                {documentData &&
                  documentData.map((item) => (
                    <CardEmployee key={item.id} data={item} />
                  ))}
              </Grid>
              <Grid item sm={4} xs={12}>
                <Box
                  sx={{
                    backgroundColor: "#fff",
                    boxShadow: " 4px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                    p: 2,
                    borderRadius: "20px",
                  }}
                >
                  <Typography sx={{ fontSize: "1.4vw", fontWeight: "600" }}>
                    ยอดค่าจ้าง
                  </Typography>
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Box
                      sx={{
                        backgroundColor: "#80C1CA",
                        m: 1,
                        p: 2,
                        borderRadius: "5px",
                      }}
                    >
                      <Typography sx={{ color: "#FFFFFF", fontSize: "1vw" }}>
                        จำนวนลูกจ้าง
                      </Typography>
                      <Typography sx={{ color: "#FFFFFF" }}>
                        <span
                          style={{
                            fontSize: "2vw",
                            fontWeight: 500,
                            color: "#FE616A",
                          }}
                        >
                          {documentData.length}
                        </span>
                        คน
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        backgroundColor: "#80C1CA",
                        m: 1,
                        p: 2,
                        borderRadius: "5px",
                      }}
                    >
                      <Typography sx={{ color: "#FFFFFF", fontSize: "1vw" }}>
                        จำนวนเงินที่ต้องจ่าย
                      </Typography>
                      <Typography sx={{ color: "#FFFFFF" }}>
                        <span
                          style={{
                            fontSize: "2vw",
                            fontWeight: 500,
                            color: "#FE616A",
                          }}
                        >
                          {formattedInt}
                        </span>
                        บาท
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Layout>
      </>
    );
  }
}
