import React from "react";
import './Home.css';
import bannerImage from "../../assets/banner.png";
import { Typography, Grid } from "@mui/material";
import ProductCard from "../common/Card";
import popular1 from "../../assets/popular1.png";
import popular2 from "../../assets/popular2.png";
import popular3 from "../../assets/popular3.png";
import popular4 from "../../assets/popular4.png";
import sell1 from "../../assets/sell1.png";
import sell2 from "../../assets/sell2.png";
import sell3 from "../../assets/sell3.png";
import { createTheme, ThemeProvider } from "@mui/material";
import CardGroup from "../common/CardGroup";
import { CardSlider } from "../common/CardSlider";
import { motion } from "framer-motion"; 

const theme = createTheme({
  typography: {
    fontFamily: ["Nunito Sans", "sans-serif"].join(","),
  },
  palette: {
    primary: {
      main: "#23B0BE",
    },
  },
});

const Home = () => {
  const popularProducts = [
    { id: 1, name: "Sweater", price: "$19.99", imageURL: popular1 },
    { id: 2, name: "Parka", price: "$29.99", imageURL: popular2 },
    { id: 3, name: "Tops", price: "$39.99", imageURL: popular3 },
    { id: 4, name: "Knitwear", price: "$49.99", imageURL: popular4 },
  ];

  const sellProducts = [
    {
      id: 1,
      name: "List the item",
      price:
        "Take photos of your item, describe it, and set your price. Tap “Upload” and your listing is live.",
      imageURL: sell1,
    },
    {
      id: 2,
      name: "Sell it ",
      price:
        "Sold! Box your item, meet the buyer at the destination or ship it.",
      imageURL: sell2,
    },
    {
      id: 3,
      name: "Get Paid",
      price:
        "There are zero selling fees, so what you earn is yours to keep. You’ll be paid as soon as the buyer confirms everything’s OK.",
      imageURL: sell3,
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <div>
        <div className="banner-img">
            <img src={bannerImage} alt="Banner" />
            <motion.h1 initial={{ marginTop:-100 }}
            animate={{ marginTop:0 }} transition={{
                duration: 0.6,  
                ease: "easeOut", }}>Shop Smart, Sell Smarter</motion.h1>
        </div>
        <div
          style={{ marginTop: "8rem", marginBottom: "8rem", textAlign: "left" }}
        >
          <Typography variant="h4" gutterBottom>
            Popular Products
          </Typography>
          <Grid container spacing={2}>
            {popularProducts.map((product) => (
              <Grid item xs={12} sm={6} md={3} key={product.id}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        </div>
        <div>
          <CardGroup />
        </div>
        <div
          style={{ marginTop: "8rem", marginBottom: "8rem", textAlign: "left" }}
        >
          <Typography variant="h4" gutterBottom>
            Start Selling
          </Typography>
          <Grid
            container
            spacing={8}
            style={{ justifyContent: "space-between" }}
          >
            {sellProducts.map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <ProductCard product={product} height={"100%"} />
              </Grid>
            ))}
          </Grid>
        </div>
        <div
          style={{ marginTop: "8rem", marginBottom: "7rem", textAlign: "left" }}
        >
          <Typography variant="h4" gutterBottom>
            You Might Also Like
          </Typography>
          <Grid
            container
            spacing={2}
            style={{ marginTop: "1rem", marginBottom: "1rem" }}
          >
            <CardSlider />
          </Grid>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Home;
