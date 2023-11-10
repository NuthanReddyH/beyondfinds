import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllProducts, fetchProductsByUser } from "../../data/productThunk";
import { Typography, Grid, Pagination } from "@mui/material";
import ProductCard from "../common/Card";
import Loader from "../Loader/Loader";
import ErrorPage from "../ErrorPage/Error";
import { Link } from "react-router-dom";
import { getImageData } from "../../utils";

const MyListings = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 18;
  // Accessing the state from the Redux store
  const { user } = useSelector((state) => state.auth);
  const sellerName = user?.username;
  const { userProducts, loading, error } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(fetchProductsByUser(sellerName));
    dispatch(fetchAllProducts());
  }, [dispatch, sellerName]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = userProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  if (loading) return <Loader />;
  if (error) return <ErrorPage />;

  return (
    <div>
      <Typography
        variant="h4"
        component="h2"
        style={{ marginTop: "4rem", marginBottom: "4rem", }}
      >
        My Listings
      </Typography>
      <Grid container spacing={2}>
        {currentProducts?.map((product) => (
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
          count={Math.ceil(userProducts.length / productsPerPage)}
          shape="rounded"
          page={currentPage}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default MyListings;
