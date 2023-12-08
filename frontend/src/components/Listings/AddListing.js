import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Button, TextField, FormControl, InputLabel, Select, MenuItem, Typography,Snackbar,
  SnackbarContent,
  IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, fetchCategories, fetchSubcategories } from '../../data/productThunk';
import FileUploadButton from '../common/FileUploadButton';
import {  Close } from "@mui/icons-material";

function AddListing() {
    const dispatch = useDispatch();
    // State for the form fields
    const { user } = useSelector((state) => state.auth);
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [category, setCategory] = useState('');
    const [subcategory, setSubcategory] = useState('');
    const [productImage, setProductImage] = useState(null);
    const [categories, setCategories] = useState([]);
    const [subcategories, setSubcategories] = useState([]);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [errors, setErrors] = useState({});
   const [isError,setIsError] = useState(false);
  
    useEffect(() => {
      // Fetch categories from the database on component mount
      const fetchCategoriesData = async () => {
        const response = await dispatch(fetchCategories()).unwrap();
        setCategories(response);
      };
      
      fetchCategoriesData();
    }, [dispatch]);
  
    useEffect(() => {
      // Fetch subcategories based on the selected category
      const fetchSubcategoriesData = async () => {
        if (category) {
          const response = await dispatch(fetchSubcategories(category)).unwrap();
          setSubcategories(response);
        }
      };
  
      if (category) {
        fetchSubcategoriesData();
      } else {
        setSubcategories([]); // Clear subcategories when no category is selected
      }
    }, [category, dispatch]);

    const validate = () => {
      let tempErrors = {};
      tempErrors.title = title ? "" : "This field is required.";
      tempErrors.price = price ? "" : "This field is required.";
      tempErrors.description = description ? "" : "This field is required.";
      tempErrors.location = location ? "" : "This field is required.";
      tempErrors.category = category ? "" : "This field is required.";
      tempErrors.subcategory = subcategory ? "" : "This field is required.";
      setErrors(tempErrors);
  
      // Return false if any errors exist
      return Object.values(tempErrors).every(x => x === "");
    };
  
    // Handle file change
    const handleFileChange = (file) => {
     // const file = event.target.files[0];
      if (file) {
        setProductImage(file);
      }
    };

    const handleSnackbarOpen = (message) => {
      setSnackbarMessage(message);
      setSnackbarOpen(true);
    };
  
    const handleSnackbarClose = () => {
      setSnackbarOpen(false);
    };
   
  const resetFields = () => {
    // reset state fields
    setTitle('');
    setCategory('');
    setLocation('');
    setPrice('');
    setDescription('');
    setProductImage('');
    setSubcategory('');
  }
  // Handle form submit
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validate()) return;
    const formData = new FormData();
    formData.append('title', title);
    formData.append('price', price);
    formData.append('description', description);
    formData.append('sellerInformation', user.username); // assuming it's a flat string
    formData.append('location', location);
    formData.append('category', category);
    formData.append('subcategory', subcategory);
    formData.append('productImage', productImage);
    
    try {
      const response = await dispatch(addProduct(formData))
      if(response?.payload?.data) {
        setIsError(false)
        handleSnackbarOpen(response?.payload?.message);
        resetFields();
      }

      if(response?.error) {
        setIsError(true)
        handleSnackbarOpen(response?.payload)
        
      }
      
      // Handle success, clear the form, maybe redirect the user or display a success message
    } catch (error) {
      console.error(error.response.data);
      // Handle error, display an error message to the user
    }
  };


  return (
    <Box display="flex" justifyContent="center" p={2} className="listing-upload">
      <Box
      className="file-upload"
        width="50%"
        p={1}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <FileUploadButton onFileSelect={handleFileChange}  />
        {productImage && (
        <Box 
          sx={{
            width: '100%', 
            height: '200px', 
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '4px', 
          }}
        >
    <img
      src={URL.createObjectURL(productImage)}
      alt="Preview"
      style={{
        maxWidth: '100%',
        maxHeight: '100%',
        objectFit: 'cover', 
        borderRadius: '4px',
      }}
    />
  </Box>
)}

      </Box>
      <Box width="50%" p={1} className="file-data">
        <Typography variant="h6">Add New Product</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            label="Product Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            error={!!errors.title}
          helperText={errors.title}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            error={!!errors.price}
            helperText={errors.price}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            error={!!errors.description}
            helperText={errors.description}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            error={!!errors.location}
            helperText={errors.location}
          />

          <FormControl fullWidth margin="normal">
            <InputLabel>Category</InputLabel>
            <Select
              value={category}
              label="Category"
              onChange={(e) => setCategory(e.target.value)}
            >
              {categories.map((cat) => (
                <MenuItem key={cat._id} value={cat._id}>
                  {cat.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth margin="normal">
            <InputLabel>Subcategory</InputLabel>
            <Select
              value={subcategory}
              label="Subcategory"
              onChange={(e) => setSubcategory(e.target.value)}
              disabled={!category}
              
            >
              {subcategories?.map((subcat) => (
                <MenuItem key={subcat._id} value={subcat._id}>
                  {subcat.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Button
            type="submit"
            variant="contained"
            style={{ marginTop: "20px", backgroundColor: "#23B0BE" }}
          >
            Add Listing
          </Button>
        </form>
      </Box>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <SnackbarContent
          message={snackbarMessage}
          className={ !isError ? 'snack-positive' : 'snack-negative'}
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
    </Box>
  );
}

export default AddListing;
