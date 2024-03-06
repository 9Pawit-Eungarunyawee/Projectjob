import { getCollection } from "@/firebase/getData";
import { Backdrop, CircularProgress, Typography } from "@mui/material";
import { createContext, useContext, useEffect, useState } from "react";

export const ClaimContext = createContext();

export default function ClaimProvider({ children }) {
  const [claimData, setClaimData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchClaimData();
  }, []);

  const fetchClaimData = async () => {
    const collectionName = "claims";
    const { result, error } = await getCollection(collectionName);
    if (error) {
      console.error("Error fetching document:", error);
    } else if (result) {
      const Data = result.docs
        .map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

      // เรียงลำดับข้อมูลตามวันที่
      const sortedData = Data.sort((a, b) => {
        return b.createAt.toMillis() - a.createAt.toMillis();
      });

      // ตั้งค่าข้อมูลใหม่ที่เรียงลำดับแล้ว
      setClaimData(sortedData);
      setLoading(false);
    }
  };
  return (
    <ClaimContext.Provider
      value={{ claimData, setClaimData, fetchClaimData }}
    >
      {/* {loading ? (
        <div>
          <Backdrop
            sx={{
              color: "#fff",
              zIndex: (theme) => theme.zIndex.drawer + 1,
              backgroundColor: "#018294", // สีฟ้าใส
            }}
            open={true}
          >
            <CircularProgress color="inherit" />
            <Typography sx={{ m: 2 }}>กำลังโหลดสินค้า...</Typography>
          </Backdrop>
        
        </div>
      ) : (
        children
      )} */}
      {children}
    </ClaimContext.Provider>
  );
}
