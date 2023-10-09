import * as React from "react";
import Box from "@mui/material/Box";
import Layout from "@/components/layout";
import { Button, Grid, Typography } from "@mui/material";
import CardEmployee from "./card";
import { useRouter } from "next/router";
import { getCollection } from "../../firebase/getData";
export default function Employee() {
  const [documentData, setDocumentData] = React.useState(null);
  const [count, setCount] = React.useState(0);
  const router = useRouter();
  function handleAdd() {
    router.push("/employee/edit");
  }

  React.useEffect(() => {
    fetchData();
  }, []);
  React.useEffect(() => {
    console.log(documentData);
  }, [documentData]);
  const fetchData = async () => {
    const collectionName = "users";
    const { result, error } = await getCollection(collectionName);
    if (error) {
      console.error("Error fetching document:", error);
    } else if (result) {
      const userData = result.docs.map((doc) => ({
        id: doc.id,
        name: doc.data().name, // ปรับให้เป็นชื่อฟิลด์ของคุณ
        profileUrl: doc.data().profileUrl,
        tel: doc.data().tel,
        province: doc.data().province,
        amphure: doc.data().amphure,
        tambon: doc.data().tambon,
        address: doc.data().address,
        email: doc.data().email,
        selected: doc.data().selected,
        salary: doc.data().salary,
      }));
      setDocumentData(userData);
      setCount(result.docs.length);
    }
  };
  //เงินเดือนรวม
  let total = 0;
  if(documentData){
    documentData.map((data) => {
      if(data.salary){
        total += parseInt(data.salary);
      }  
    });
  }
  const formattedInt = total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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
                        {count}
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
