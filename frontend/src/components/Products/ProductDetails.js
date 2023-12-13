import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { addToFavoritesThunk } from "../../data/authSlice";
import { getImageData } from "../../utils";
import { fetchAllProducts } from "../../data/productThunk";
import {
  Snackbar,
  SnackbarContent,
  IconButton,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import Loader from "../Loader/Loader";

const productStyles = {
  breadcrumbs: {
    fontSize: "20px",
    marginBottom: "20px",
    color: "#666",
    textDecoration: "none",
    fontFamily: ["Nunito Sans", "sans-serif"].join(","),
    display: "flex",
    width: "80%",
    margin: "0 auto",
    padding: "20px",
    marginTop: "40px",
  },
  breadcrumbLink: {
    textDecoration: "none",
    color: "#23B0BE",
    marginRight: "5px",
    marginLeft: "5px",
  },
  container: {
    display: "flex",
    width: "80%",
    margin: "0 auto",
    padding: "20px",
    fontFamily: ["Nunito Sans", "sans-serif"].join(","),
  },
  imageContainer: {
    flex: "1",
    marginRight: "20px",
    border: "2px solid black",
    padding: "20px",
  },
  productImage: {
    width: "100%",
    objectFit: "cover",
  },
  content: {
    flex: "2",
    textAlign: "left",
  },
  title: {
    fontSize: "32px",
    margin: "0 0 20px 100px",
  },
  price: {
    color: "#666",
    fontSize: "24px",
    marginBottom: "20px",
    marginLeft: "100px",
  },
  description: {
    fontSize: "16px",
    marginBottom: "20px",
    marginLeft: "100px",
  },
  mapImage: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    marginBottom: "10px",
  },
  location: {
    fontSize: "22px",
    color: "#555",
    marginLeft: "100px",
  },
  sellerInfo: {
    display: "flex",
    marginLeft: "100px",
    marginTop: "20px",
    flexDirection: "column",
  },
  sellerInfoHeader: {
    fontSize: "24px",
    marginBottom: "10px",
    fontWeight: "bold",
  },
  sellerDetails: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
  },
  sellerAvatar: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    marginRight: "20px",
    background: "#e0e0e0", // Default avatar color if no image is provided
  },
  sellerName: {
    fontSize: "18px",
  },
  avatarImg: {
    display: "flex",
    alignItems: "center",
  },
  messageButton: {
    padding: "10px 20px",
    backgroundColor: "#23B0BE",
    color: "#FFFFFF",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

function ProductDetails() {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleSnackbarOpen = (message, error = false) => {
    setSnackbarMessage(message);
    setIsError(error);
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };
  const user = useSelector((state) => state.auth.user);
  const userId = user ? user._id : null;
  const favoriteList = user?.favorites;
  const product = useSelector((state) =>
    state.products.products.find((p) => p._id === productId)
  );

  const isFavoriteAdded = favoriteList?.includes(productId);
  const [isFavorite, setIsFavorite] = useState(isFavoriteAdded);

  const toggleFavorite = async () => {
    setIsFavorite(!isFavorite);
    if (userId) {
      const response = await dispatch(addToFavoritesThunk({ userId, productId }));
      const message = response?.payload?.message
      message && handleSnackbarOpen(message);
    } else {
      // Handle the case where userId is not available (e.g., user is not logged in)
      handleSnackbarOpen(
        "User not logged in. Unable to add to favorites.",
        true
      );
    }
  };
  const isLoading = !product;

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  if (isLoading) {
    return <Loader />;
  }

  if (!product) return <div>Product not found!</div>;

  console.log({isError})
  return (
    <>
      <div style={productStyles.breadcrumbs}>
        <Link to="/" style={productStyles.breadcrumbLink}>
          Home
        </Link>
        /
        <Link to="/products" style={productStyles.breadcrumbLink}>
          Products
        </Link>
        / {product.title}
      </div>
      <div style={productStyles.container} className="flex-content">
        <div style={productStyles.imageContainer} className="flex-content-image">
          <img
            style={productStyles.productImage}
            src={getImageData(product.productImage)}
            alt={product.title}
          />
        </div>
        <div style={productStyles.content} className="flex-content-text">
          <div className="flex items-center justify-between">
            <h2 style={productStyles.title}>{product.title}</h2>
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <FontAwesomeIcon
                icon={faHeart}
                style={{
                  color: isFavorite ? "#ff0000" : "#666", // Change color based on favorite status
                  cursor: "pointer",
                }}
                size="2x"
                onClick={toggleFavorite}
              />
            </div>
          </div>
          <p style={productStyles.price}>${product.price}</p>
          <p style={productStyles.description}>{product.description}</p>

          {/* <img
          style={productStyles.mapImage}
          src={product.mapURL}
          alt="Map location"
        /> */}
          <p style={productStyles.location}>{product.location}</p>

          <div style={productStyles.sellerInfo} className="seller">
            <h3 style={productStyles.sellerInfoHeader}>Seller Information</h3>
            <div style={productStyles.sellerDetails}>
              <div style={productStyles.avatarImg}>
                <div style={productStyles.sellerAvatar}></div>{" "}
                {/* Placeholder for avatar */}
                <span style={productStyles.sellerName}>
                  {product.sellerInformation.name}
                </span>
              </div>
              <Link
                to={`/chat/${product.sellerInformation.name}/${user?.username}`}
              >
                <button style={productStyles.messageButton}>Message</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <SnackbarContent
          message={snackbarMessage}
          className={!isError ? "snack-positive" : "snack-negative"}
          action={
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleSnackbarClose}
            >
              <Close fontSize="small" />
            </IconButton>
          }
        />
      </Snackbar>
    </>
  );
}

export default ProductDetails;
