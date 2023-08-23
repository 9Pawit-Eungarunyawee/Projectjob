import * as React from "react";
import { Box, Typography } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Image from "next/image";
import Link from "next/link"; // Import Link from Next.js

export default function Brands() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
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

  const enlargedSize = 250; // Adjust this value as needed

  const styles = {
    tabImage: {
      borderRadius: "50%",
      objectFit: "cover",
      width: "100%",
      height: "100%",
      transition: "opacity 0.3s, transform 0.3s",
    },
    enlargedImage: {
      opacity: 1,
      transform: `scale(${enlargedSize / 202})`, // Adjust the scaling factor
    },
  };

  const brands = [
    {
      name: "Beger",
      logoSrc: "https://www.beger.co.th/assets/images/logo-beger.jpg",
      slug: "beger",
    },
    {
      name: "Jotun",
      logoSrc: "https://www.jotun.com/siteassetsjot03/logo.svg",
      slug: "jotun",
    },
    {
      name: "Captain Paint",
      logoSrc:
        "https://www.captaincoating.com/wp-content/uploads/2021/04/logo@2x-1.svg",
      slug: "captain",
    },
    {
      name: "Dulux",
      logoSrc:
        "https://images.akzonobel.com/akzonobel-flourish/dulux/logo/dulux-logo_2x.png",
      slug: "dulux",
    },
    {
      name: "Nippon",
      logoSrc:
        "https://aircare.nipponpaintdecor.com/assets/images/logo/logo.svg",
      slug: "nippon",
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: "100%", height: "40vh" }}>
        <Box sx={{ p: 8 }}>
          <Typography
            variant="h4"
            sx={{
              pb: 2,
              color: "#018294",
              textAlign: "center",
            }}
          >
            ยี่ห้อ
          </Typography>
          <Tabs
            value={value}
            onChange={handleChange}
            centered
            sx={{
              "& .css-1aquho2-MuiTabs-indicator": {
                display: "none",
              },
            }}
          >
            {brands.map((brand, index) => (
              <Tab
                key={index}
                label={
                  <Link href={`/products/${brand.slug}`} passHref>
                    <Box
                      sx={{
                        ...styles.tabImage,
                        ...(value === index ? styles.enlargedImage : {}),
                      }}
                    >
                      <Image
                        src={brand.logoSrc}
                        alt={`${brand.name} Logo`}
                        width={202}
                        height={202}
                        layout="responsive"
                        objectFit="contain"
                        priority
                      />
                    </Box>
                  </Link>
                }
              />
            ))}
          </Tabs>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
