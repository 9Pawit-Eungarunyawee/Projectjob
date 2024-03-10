import Homelayout from "@/components/homelayout";
import * as React from "react";
import {
  Box,
  Typography,
  Container,
  Breadcrumbs,
  Grid,
  Button,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Tabs,
  Tab,
  createTheme,
  ThemeProvider,
  MobileStepper,
} from "@mui/material";
import { getCollection } from "@/firebase/getData";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import Link from "next/link";
import Image from "next/image";
import searchUser from "@/firebase/searchData";
import { useRouter } from "next/router";
import { debounce } from "lodash";
import { CatalogContext } from "@/context/CatalogContext";
import roomexample from "../../../../public/img/roomexample.png";
import roomexample2 from "../../../../public/img/roomexample2.png";
import roomexample3 from "../../../../public/img/roomexample3.png";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

const images = [
  {
    label: "ภาพตัวอย่าง1",
    imgPath: roomexample,
  },
  {
    label: "ภาพตัวอย่าง2",
    imgPath: roomexample2,
  },
  {
    label: "ภาพตัวอย่าง3",
    imgPath: roomexample3,
  },
];

export default function Colorfind() {
  const router = useRouter();
  const [value, setValue] = React.useState(0);
  const [valuecolor, setValueColor] = React.useState(0);
  const [catalogID, setCatalogID] = React.useState(null);
  const [documentData, setDocumentData] = React.useState([]);
  const [selectedColorId, setSelectedColorId] = React.useState(null);
  const [colorshadeData, setColorshadeData] = React.useState([]);
  const [activeStep, setActiveStep] = React.useState(0);
  const [selectedColor, setSelectedColor] = React.useState(null);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleColorSelect = (id) => {
    const selectedColorData = documentData.find((color) => color.id === id);
    if (selectedColorData && selectedColorData.code) {
      setSelectedColor(selectedColorData.code);
    }
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleColor = (event, newValue) => {
    setValueColor(newValue);
  };

  const [searchTerm, setSearchTerm] = React.useState("");
  React.useEffect(() => {
    handleSearch("");
  }, []);

  const { catalogData, setCatalogData, fetchcatalogData } =
    React.useContext(CatalogContext);

  React.useEffect(() => {
    fetchcatalogData();
  }, []);

  const debouncedSearchUser = debounce(async (term) => {
    try {
      const collectionName = "catalog";
      const field = "name";
      const results = await searchUser(collectionName, field, term);
      const filteredResults = results.filter((item) => item.delete == null);
      setCatalogData(filteredResults);
    } catch (error) {
      console.error("Error searching data:", error);
    }
  }, 500);

  const handleSearch = (term) => {
    setSearchTerm(term);
    debouncedSearchUser(term);
  };

  const styles = {
    activeTab: {
      width: "200px",
      height: "250px",
      border: "none",
      boxShadow: "4px 0px 4px 0px rgba(0, 0, 0, 0.25)",
      zIndex: "1",
      transition: "width 0.3s, height 0.3s",
    },
    inactiveTab: {
      width: "100px",
      height: "150px",
      border: "none",
      zIndex: "0",
      transition: "width 0.3s, height 0.3s",
    },
    tab: {
      width: "80px",
      height: "90px",
      boxShadow: "none",
      transition: "width 0.2s, height 0.2s, box-shadow 0.2s",
    },
    activeTabcolor: {
      width: "100px",
      height: "110px",
      border: "none",
      boxShadow: "4px 0px 4px 0px rgba(0, 0, 0, 0.25)",
      zIndex: "1",
    },
    tabsContainer: {
      display: "flex",
      justifyContent: "center",
      width: "100%",
      overflowX: "auto",
    },
  };

  const theme = createTheme({
    components: {
      MuiTabs: {
        styleOverrides: {
          flexContainer: {
            alignItems: "center",
          },
        },
        indicator: {
          backgroundColor: "transparent",
          display: "none",
        },
      },
    },
  });

  React.useEffect(() => {
    if (catalogData.length > 0 && !value) {
      setValue(0);
      setCatalogID(catalogData[0].id);
    }
  }, [catalogData, value]);

  React.useEffect(() => {
    if (colorshadeData.length > 0) {
      setValueColor(0);
      setSelectedColorId(colorshadeData[0].id);
    }
  }, [colorshadeData]);

  React.useEffect(() => {}, [documentData, colorshadeData]);

  const fetchColorshadeData = async () => {
    const collection = "colorshade";
    const { result: querySnapshot, error } = await getCollection(collection);

    if (error) {
      console.error("Error fetching collection:", error);
    } else {
      const colorsdata = [];
      querySnapshot.forEach((doc) => {
        colorsdata.push({ id: doc.id, ...doc.data() });
      });
      setColorshadeData(colorsdata);
    }
  };

  React.useEffect(() => {
    fetchAllData();
    fetchColorshadeData();
  }, [catalogID]);

  const fetchAllData = async () => {
    const collection = "colors";

    if (catalogID) {
      const { result: querySnapshot, error } = await getCollection(collection, {
        where: { catalog_id: catalogID },
      });

      if (error) {
        console.error("Error fetching collection:", error);
      } else {
        const data = [];
        querySnapshot.forEach((doc) => {
          const catalogIdFromProduct = doc.data().catalog_id.id;

          if (catalogIdFromProduct === catalogID) {
            const colorData = { id: doc.id, ...doc.data() };

            if (doc.data().colorshade_id) {
              const colorShadeId = doc.data().colorshade_id.id;
              colorData.colorshade_id = colorShadeId;
            }

            data.push(colorData);
          }
        });
        setDocumentData(data);
      }
    }
  };
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box display="flex" justifyContent="center" width="100%">
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="wrapped label tabs example"
              >
                {catalogData.map((item, index) => (
                  <Tab
                    key={index}
                    label={
                      <Card
                        style={
                          value === index
                            ? styles.activeTab
                            : styles.inactiveTab
                        }
                      >
                          <CardMedia
                            component="img"
                            height="200"
                            image={item.img}
                            alt={item.name}
                          />
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h8"
                              component="div"
                            >
                              {item.name}
                            </Typography>
                          </CardContent>
                      </Card>
                    }
                    wrapped
                    onClick={() => {
                      setValue(index);
                      setCatalogID(item.id);
                    }}
                  />
                ))}
              </Tabs>
            </Box>
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
                value={valuecolor}
                onChange={handleColor}
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
                {colorshadeData.map((item, index) => (
                  <Tab
                    key={index}
                    sx={{
                      ...styles.tab,
                      backgroundColor: item.code,
                      ...(valuecolor === index ? styles.activeTabcolor : {}),
                    }}
                    onClick={() => {
                      setValueColor(index);
                      setSelectedColorId(item.id);
                    }}
                  />
                ))}
              </Tabs>
            </Box>
            <Box sx={{ p: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <SwipeableViews
                    axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                    index={activeStep}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents
                  >
                    {images.map((step, index) => (
                      <div key={step.label}>
                        {Math.abs(activeStep - index) <= 2 ? (
                          <Image
                            component="img"
                            style={{
                              backgroundColor: selectedColor,
                              maxWidth: "100%",
                              height: "auto",
                            }}
                            src={step.imgPath}
                            alt={step.label}
                          />
                        ) : null}
                      </div>
                    ))}
                  </SwipeableViews>
                  <MobileStepper
                    steps={maxSteps}
                    position="static"
                    activeStep={activeStep}
                    nextButton={
                      <Button
                        size="small"
                        onClick={handleNext}
                        disabled={activeStep === maxSteps - 1}
                        style={{ color: "#018294" }}
                      >
                        Next
                        {theme.direction === "rtl" ? (
                          <KeyboardArrowLeft />
                        ) : (
                          <KeyboardArrowRight />
                        )}
                      </Button>
                    }
                    backButton={
                      <Button
                        size="small"
                        onClick={handleBack}
                        disabled={activeStep === 0}
                        style={{ color: "#018294" }}
                      >
                        {theme.direction === "rtl" ? (
                          <KeyboardArrowRight />
                        ) : (
                          <KeyboardArrowLeft />
                        )}
                        Back
                      </Button>
                    }
                  />
                </Grid>
                {documentData.map((color) => (
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
                        onClick={() => handleColorSelect(color.id)}
                      >
                        <CardActionArea>
                          {color.code && (
                            <CardContent
                              sx={{
                                backgroundColor: color.code,
                                height: 150,
                              }}
                            ></CardContent>
                          )}
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
          </Grid>
        </Grid>
      </ThemeProvider>
    </React.Fragment>
  );
}
