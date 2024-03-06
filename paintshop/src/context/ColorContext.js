import { getCollection } from "@/firebase/getData";
import { Backdrop, CircularProgress, Typography } from "@mui/material";
import { createContext, useEffect, useState } from "react";

export const ColorContext = createContext();

export default function ColorProvider({ children }) {
  const [colorData, setColorData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchColorData();
  }, []);

  const fetchColorData = async () => {
    const collectionName = "colors";
    const { result, error } = await getCollection(collectionName);
    if (error) {
      console.error("Error fetching document:", error);
    } else if (result) {
      const Data = result.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        
      }));
      setColorData(Data);
      setLoading(false);
    }
  };
  return (
    <ColorContext.Provider
      value={{ colorData, setColorData, fetchColorData }}
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
            <Typography sx={{ m: 2 }}>กำลังโหลดแคตตาล็อก...</Typography>
          </Backdrop>
       
        </div>
      ) : (
        children
      )} */}
      {children}
    </ColorContext.Provider>
  );
}
