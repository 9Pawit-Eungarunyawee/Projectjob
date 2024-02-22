import { getCollection } from "@/firebase/getData";
import { Backdrop, CircularProgress, Typography } from "@mui/material";
import { createContext, useEffect, useState } from "react";

export const CatalogContext = createContext();

export default function CatalogProvider({ children }) {
  const [catalogData, setCatalogData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchcatalogData();
  }, []);

  const fetchcatalogData = async () => {
    const collectionName = "catalog";
    const { result, error } = await getCollection(collectionName);
    if (error) {
      console.error("Error fetching document:", error);
    } else if (result) {
      const Data = result.docs
        .filter((doc) => !doc.data().delete)
        .map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
      setCatalogData(Data);
      setLoading(false);
    }
  };
  return (
    <CatalogContext.Provider
      value={{ catalogData, setCatalogData, fetchcatalogData }}
    >
      {loading ? (
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
      )}
    </CatalogContext.Provider>
  );
}
