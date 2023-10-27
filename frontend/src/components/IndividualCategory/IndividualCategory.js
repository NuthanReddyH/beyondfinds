import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSubcategories,
  fetchProductsByCategory,
  fetchProductsBySubcategory
} from "../../data/productThunk";
import ProductCard from "../common/Card";
import {
  Typography,
  Grid,
  Pagination,
  MenuItem,
  InputLabel,
  Select,
} from "@mui/material";
import bgImage from "../../assets/bg2.png";
import "./IndividualCategory.css";
import { getImage } from "../../utils";
import Loader from "../Loader/Loader";
import ErrorPage from "../ErrorPage/Error";

const IndividualCategory = () => {
  const { categoryName,categoryId } = useParams();
  const dispatch = useDispatch();
  const [sortValue, setSortValue] = useState("recommend");
  const [currentPage, setCurrentPage] = useState(1);
  const [shuffledProducts, setShuffledProducts] = useState([]);

  const { subcategories, products, loading, error } = useSelector(
    (state) => state.products
  );
  console.log({ products });

  const productsPerPage = 18;

  const shuffleArray = (array) => {
    let shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };
  useEffect(() => {
    if (categoryId) {
      // Dispatch action to load subcategories based on category ID
      dispatch(fetchSubcategories(categoryId));
      // Dispatch action to load products based on category ID
      dispatch(fetchProductsByCategory(categoryId));
    }
  }, [categoryId, dispatch]);

  useEffect(() => {
    if (products) {
      let updatedProducts;

      switch (sortValue) {
        case "priceLowToHigh":
          updatedProducts = [...products].sort((a, b) => a.price - b.price);
          break;
        case "priceHighToLow":
          updatedProducts = [...products].sort((a, b) => b.price - a.price);
          break;
        case "recommend":
          updatedProducts = shuffleArray(products);
          break;
        default:
          updatedProducts = products;
          break;
      }

      setShuffledProducts(updatedProducts);
    }
  }, [products, sortValue]);

  console.log({ shuffledProducts });

  const updatedProducts = shuffledProducts.map((p) => {
    return {
      id: p._id,
      name: p.title,
      price: p.price,
      imageURL: p.productImage,
    };
  });

  // Get current products to display based on currentPage
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = updatedProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Handling loading and error states
  if (loading) return   <Loader />; 
  if (error) return <ErrorPage />;

  const handleSubcategoryClick = (subcategoryId) => {
    console.log({subcategories})
    dispatch(fetchProductsBySubcategory(subcategoryId));
  };
  
  const renderSubcategories = () => {
    return subcategories.map((sub) => (
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        lg={3}
        key={sub.id}
        className="no-shadow"
      >
        <div className="subcategory-item" onClick={() => handleSubcategoryClick(sub._id)}>
          <div className="icon">
            <img src={getImage(sub.imageUrl)} alt={sub.name} />
          </div>
          <Typography variant="h6">{sub.name}</Typography>
        </div>
      </Grid>
    ));
  };

  const handleSortChange = (event) => {
    const selectedSortValue = event.target.value;
    setSortValue(selectedSortValue);

    let sortedProducts;
    switch (selectedSortValue) {
      case "priceLowToHigh":
        sortedProducts = [...products].sort((a, b) => a.price - b.price);
        break;
      case "priceHighToLow":
        sortedProducts = [...products].sort((a, b) => b.price - a.price);
        break;
      case "recommend":
        sortedProducts = shuffleArray(products);
        break;
      default:
        sortedProducts = products;
        break;
    }

    setShuffledProducts(sortedProducts);
  };

  return (
    <div>
      <div className="banner-img">
        <img src={bgImage} alt="Banner" />
        <h1>{categoryName}</h1>
      </div>

      <div className="subcategories-section">
        <Typography
          variant="h4"
          component="h2"
          style={{ marginBottom: "16px" }}
        >
          Subcategories
        </Typography>
        <Grid container spacing={2} justifyContent="space-evenly">
          {renderSubcategories()}
        </Grid>
      </div>

      <div
        style={{ marginTop: "8rem", marginBottom: "8rem", textAlign: "left" }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <Typography variant="h4" component="h2">
            Products
          </Typography>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <InputLabel id="sort-products-label">Sort By:</InputLabel>
            <Select
              labelId="sort-products-label"
              id="sort-products"
              value={sortValue}
              onChange={handleSortChange}
              style={{ marginLeft: "8px" }}
            >
              <MenuItem value="recommend">Recommend</MenuItem>
              <MenuItem value="priceLowToHigh">Price: Low to High</MenuItem>
              <MenuItem value="priceHighToLow">Price: High to Low</MenuItem>
            </Select>
          </div>
        </div>
        <Grid container spacing={2}>
          {currentProducts?.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={product.id}>
              <ProductCard
                product={{
                  ...product,
                  imageURL: getImage(product.imageURL),
                }}
              />
            </Grid>
          ))}
        </Grid>
        <div className="flex justify-center my-14">
          <Pagination
            count={Math.ceil(shuffledProducts.length / productsPerPage)}
            shape="rounded"
            page={currentPage}
            onChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default IndividualCategory;
