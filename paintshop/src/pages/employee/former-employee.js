import Layout from "@/components/layout";
import { Box, Button, Grid, Typography } from "@mui/material";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import CardEmployee from "./card";
import { useEffect } from "react";
import { useState } from "react";
import { debounce } from "lodash";
import searchData from "@/firebase/searchData";
export default function FormerEmployee() {
  const goBack = () => {
    window.history.back();
  };
  const [documentData, setDocumentData] = useState([]);
  useEffect(() => {
    debouncedSearchUser("");
  }, []);
  const debouncedSearchUser = debounce(async (term) => {
    try {
      const collectionName = "users";
      const field = "name";
      const results = await searchData(collectionName, field, term);
      const filteredResults = results.filter(
        (doc) => doc.isFormerEmployee == true
      );
      setDocumentData(filteredResults);
      setCount(documentData.length);
    } catch (error) {
      console.error("Error searching data:", error);
    }
  }, 500);
  return (
    <Layout>
      <Box>
        <Typography sx={{ fontSize: "2rem", fontWeight: "600", mt: 5 }}>
          อดีตพนักงาน
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
        <Grid container spacing={2}>
          <Grid item xs={12} sx={{ mt: 2 }}>
            {documentData &&
              documentData.map((item) => (
                <CardEmployee key={item.id} data={item} />
              ))}
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
}
