import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Typography, Grid, Pagination } from "@mui/material";
import ProductCard from "../common/Card";
import Loader from "../Loader/Loader";
import ErrorPage from "../ErrorPage/Error";
import { Link } from "react-router-dom";
import { getImageData } from "../../utils";
import { fetchAllProducts } from "../../data/productThunk";

const Favorites = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 18;

  const { user, loading, error } = useSelector((state) => state.auth);
  const { products } = useSelector((state) => state.products);
  const favoriteList = user?.favorites;

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  // Filter favorite products
  const favoriteProducts = products.filter((product) =>
    favoriteList?.includes(product._id)
  );

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = favoriteProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  if (loading) return <Loader />;
  if (error) return <ErrorPage />;

  if (currentProducts?.length === 0) {
    return (
      <div>
        <Typography
          variant="h4"
          component="h2"
          style={{ marginTop: "4rem", marginBottom: "4rem" }}
        >
          My Favorites
        </Typography>
        <Typography
          variant="h5"
          component="h2"
          style={{
            marginTop: "4rem",
            marginBottom: "4rem",
            textAlign: "center",
          }}
        >
          you haven't saved any items to your wishlist yet. Start shopping and
          add your favorite items to your wishlist.
        </Typography>
      </div>
    );
  }

  return (
    <div>
      <Typography
        variant="h4"
        component="h2"
        style={{ marginTop: "4rem", marginBottom: "4rem" }}
      >
        My Favorites
      </Typography>
      <Grid container spacing={2}>
        {currentProducts.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={product._id}>
            <Link to={`/product/${product._id}`}>
              <ProductCard
                product={{
                  ...product,
                  imageURL: getImageData(product?.productImage),
                }}
              />
            </Link>
          </Grid>
        ))}
      </Grid>
      <div className="flex justify-center my-14">
        <Pagination
          count={Math.ceil(favoriteProducts.length / productsPerPage)}
          shape="rounded"
          page={currentPage}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Favorites;
