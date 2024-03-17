import * as React from "react";
import Homelayout from "@/components/homelayout";
import Accordionlayout from "@/components/accordionlayout";
import {
  Typography,
  Container,
  Grid,
  Breadcrumbs,
  Box,
  Tab,
  Tabs,
  Card,
  CardActionArea,
  CardContent,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
const styles = {
  Active: {
    "&.Mui-selected": {
      fontWeight: "bold",
      color: "#018294",
    },
  },
};
export default function Mobilecolor() {
  const [value, setValue] = React.useState(0);
  const router = useRouter();
  const [documentData, setDocumentData] = React.useState(null);
  const [selectedColorId, setSelectedColorId] = React.useState(null);
  const [colorshadeData, setColorshadeData] = React.useState(null);
  const catalogId = JSON.parse(router.query.catalogData);
  const productId = JSON.parse(router.query.productId);

  function handleCard(colorId) {
    router.push({
      pathname: "/productsdetail/",
      query: {
        catalogData: JSON.stringify(catalogId),
        productId: JSON.stringify(productId),
        colorId: JSON.stringify(colorId),
      },
    });
  }
  const goBack = () => {
    window.history.back();
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }
  React.useEffect(() => {
    fetchAllData();
    fetchColorshadeData();
  }, []);
  React.useEffect(() => {
    if (colorshadeData && colorshadeData.length > 0) {
      setValue(0);
      setSelectedColorId(colorshadeData[0].id);
    }
  }, [colorshadeData]);
  React.useEffect(() => {
    console.log(documentData);
    console.log(colorshadeData);
  }, [documentData, colorshadeData]);

  const fetchColorshadeData = async () => {
    const collection = "colorshade";
    const { result: querySnapshot, error } = await getCollection(collection);

    if (error) {
      console.error("Error fetching collection:", error);
    } else {
      const colorsdata = [];
      querySnapshot.forEach((doc) => {
        console.log("Colorshade ID:", doc.id);
        console.log("Colorshade data:", doc.data());
        colorsdata.push({ id: doc.id, ...doc.data() });
      });
      console.log(colorsdata);
      setColorshadeData(colorsdata);
    }
  };

  const fetchAllData = async () => {
    const collection = "colors";

    if (catalogId) {
      console.log("Fetching data for catalogId:", catalogId);
      const { result: querySnapshot, error } = await getCollection(collection, {
        where: { catalog_id: catalogId },
      });

      if (error) {
        console.error("Error fetching collection:", error);
      } else {
        const data = [];
        querySnapshot.forEach((doc) => {
          console.log("Document ID:", doc.id);
          const catalogIdFromProduct = doc.data().catalog_id.id;
          console.log(catalogId);

          if (catalogIdFromProduct === catalogId) {
            console.log("Matching color:", doc.data());
            const colorData = { id: doc.id, ...doc.data() };

            if (doc.data().colorshade_id) {
              const colorShadeId = doc.data().colorshade_id.id;

              colorData.colorshade_id = colorShadeId;
            }

            console.log(colorData);
            data.push(colorData);
          }
        });
        console.log(data);
        setDocumentData(data);
      }
    }
  };
  return (
    <Container
      maxWidth={false}
      sx={{
        display: "flex",
        justifyContent: "center",
        bgcolor: "white",
      }}
    >
      <Box sx={{ p: 3, width: "70vw", minHeight: "35vw" }}>
        <Typography
          variant="h4"
          sx={{
            pb: 2,
            color: "#018294",
            textAlign: "center",
          }}
        >
          เฉดสี
        </Typography>
        <Box display="flex" justifyContent="center" width="100%">
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="basic tabs example"
            sx={{
              p: 2,
              "& .css-1aquho2-MuiTabs-indicator": {
                display: "none",
              },
            }}
          >
            {colorshadeData &&
              colorshadeData.map((item, index) => (
                <Tab
                  key={index}
                  sx={{
                    ...styles.tab,
                    backgroundColor: item.code,
                    ...(value === index ? styles.activeTab : {}),
                  }}
                  onClick={() => {
                    console.log(
                      "Tab Clicked with Index and ID:",
                      index,
                      item.id
                    );
                    setValue(index);
                    setSelectedColorId(item.id);
                  }}
                />
              ))}
          </Tabs>
        </Box>
        <Box sx={{ p: 3 }}>
          <Grid container spacing={2}>
            {documentData &&
              documentData.map((color) => (
                <Grid
                  item
                  key={color.id}
                  xs={12}
                  sm={6}
                  md={2}
                  sx={{
                    display:
                      color.colorshade_id === selectedColorId ? "" : "none",
                  }}
                >
                  {selectedColorId &&
                  color.colorshade_id === selectedColorId ? (
                    <Card
                      sx={{ maxWidth: 300 }}
                      onClick={() => handleCard(color.id)}
                    >
                      <CardActionArea>
                        <CardContent
                          sx={{
                            backgroundColor: color.code,
                            height: 150,
                          }}
                        ></CardContent>
                        <CardContent>
                          <Typography>{color.code_name}</Typography>
                          <Typography>{color.name}</Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  ) : (
                    <Card sx={{ maxWidth: 300, display: "none" }}>
                      <CardActionArea>
                        <CardContent></CardContent>
                      </CardActionArea>
                    </Card>
                  )}
                </Grid>
              ))}
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
