import React, { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  Button,
  createTheme,
  ThemeProvider,
  IconButton,
  InputAdornment,
  Alert,
  Snackbar,
  SnackbarContent,
} from "@mui/material";
import { Visibility, VisibilityOff, Close } from "@mui/icons-material";
import loginImg from "../../assets/login.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginThunk, sendOtpThunk } from "../../data/authSlice";
import EmailModal from "../common/ForgotPassword";

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

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [isError,setIsError] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  
  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleSnackbarOpen = (message) => {
    setSnackbarMessage(message);
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleSendOTP = (email) => {
    // Logic to send OTP to the email
    console.log('Sending OTP to:', email);
    dispatch(sendOtpThunk(email));
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors({});
  
    const newErrors = {};
  
    if (!formData.username) {
      newErrors.username = "Username is required";
    }
  
    if (!formData.password) {
      newErrors.password = "Password is required";
    }
  
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
  
    const result = await dispatch(
      loginThunk({ username: formData.username, password: formData.password })
    );
    if (result?.error) {
      const errorMessage = result?.payload;
      setIsError(true)
      handleSnackbarOpen(errorMessage);
    } else {
      setIsError(false)
      handleSnackbarOpen("User logged in successfully");
      setTimeout(() => {
        const isAdmin = parseInt(localStorage.getItem('isAdmin'), 10);
        if(isAdmin) {
          navigate("/admin");
        } else {
          navigate("/");
        }
      }, 600);
    }
  };
  

  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={loginImg}
          alt="Login Image"
          style={{ maxWidth: "50%", marginRight: "2rem" }}
        />

        <form onSubmit={handleSubmit}>
          <Box display="flex" flexDirection="column" maxWidth={400}>
            <Typography
              variant="h4"
              style={{ textAlign: "left", marginBottom: "1rem" }}
            >
              Welcome To BeyondFinds
            </Typography>
            <Typography style={{ textAlign: "left", marginBottom: "1rem" }}>
              Please login to your account
            </Typography>
            <TextField
              id="username"
              label="Username"
              variant="outlined"
              margin="normal"
              value={formData.username}
              onChange={handleChange}
              error={!!errors.username}
              helperText={errors.username || ""}
            />
            <TextField
              id="password"
              label="Password"
              type={showPassword ? "text" : "password"}
              variant="outlined"
              margin="normal"
              value={formData.password}
              onChange={handleChange}
              error={!!errors.password}
              helperText={errors.password || ""}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={toggleShowPassword}>
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Typography
              variant="body2"
              style={{ textAlign: "left", margin: "0.5rem 0" }}
            >
              <Link onClick={handleOpenModal} to="#">Forgot password?</Link>
            </Typography>
            <EmailModal open={modalOpen} handleClose={handleCloseModal} handleSendOTP={handleSendOTP} />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              style={{ marginTop: "1rem", color: "white" }}
              type="submit"
            >
              Login
            </Button>
            <Typography
              variant="body2"
              style={{ textAlign: "left", marginTop: "1rem" }}
            >
              Don't have an account?{" "}
              <Link className="auth-link" to="/register">
                Register
              </Link>
            </Typography>
          </Box>
        </form>
      </div>
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
    </ThemeProvider>
  );
};

export default Login;
