import React from "react";
import './IndividualCategory.css';
import bgImage from "../../assets/bg2.png";
import ProductCard from "../common/Card";
import { Typography, Grid, Pagination } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";
import popular1 from "../../assets/popular1.png";
import popular2 from "../../assets/popular2.png";
import popular3 from "../../assets/popular3.png";
import popular4 from "../../assets/popular4.png";

const IndividualCategory = () =>{
    const popularProducts = [
        { id: 1, name: "Sweater", price: "$19.99", imageURL: popular1 },
        { id: 2, name: "Parka", price: "$29.99", imageURL: popular2 },
        { id: 3, name: "Tops", price: "$39.99", imageURL: popular3 },
        { id: 4, name: "Knitwear", price: "$49.99", imageURL: popular4 },
        { id: 5, name: "Sweater", price: "$49.99", imageURL: popular1 },
        { id: 6, name: "Parka", price: "$49.99", imageURL: popular2 },
        { id: 7, name: "Sweater", price: "$19.99", imageURL: popular1 },
        { id: 8, name: "Parka", price: "$29.99", imageURL: popular2 },
        { id: 9, name: "Tops", price: "$39.99", imageURL: popular3 },
        { id: 10, name: "Knitwear", price: "$49.99", imageURL: popular4 },
        { id: 11, name: "Sweater", price: "$49.99", imageURL: popular1 },
        { id: 12, name: "Parka", price: "$49.99", imageURL: popular2 },
      ];
    
    return(
        <div>
            <div className="banner-img">
                <img src={bgImage} alt="Banner" />
                <h1>Fashion</h1>
            </div>
            <div style={{ marginTop: "8rem", marginBottom: "8rem", textAlign: "left" }}>
                <Grid container spacing={2}>
                {popularProducts.map((product) => (
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={product.id}>
                    <ProductCard product={product} />
                </Grid>
                ))}
            </Grid>
            <div className="flex justify-center my-14">
            <Pagination count={10} shape="rounded" />
                
            </div>
            </div>
        </div>
    );
};

export default IndividualCategory;