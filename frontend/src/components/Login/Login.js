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
import { loginUser } from "../../api/auth";

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

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSnackbarOpen = (message) => {
    setSnackbarMessage(message);
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
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

    try {
      await loginUser(formData.username, formData.password);
      navigate("/");
    } catch (error) {
      handleSnackbarOpen("Login failed. Please check your credentials.");
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
              <Link to="#">Forgot password?</Link>
            </Typography>
      
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
          style={{ backgroundColor: "#FF3D00" }}
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
