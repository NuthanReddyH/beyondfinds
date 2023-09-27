import React from "react";
import { Box, TextField, Typography, Button, Link, createTheme, ThemeProvider } from "@mui/material";
import loginImg from "../../assets/login.png";

const theme = createTheme({
  typography: {
    fontFamily: ['Nunito Sans', 'sans-serif'].join(','),
  },
  palette: {
    primary: {
      main: '#23B0BE',
    },
  },
});

const Login = () => {
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

        <form>
          <Box display="flex" flexDirection="column" maxWidth={400}>
            <Typography variant="h4" style={{ textAlign: "left", marginBottom: "1rem" }}>
              Welcome To BeyondFinds
            </Typography>
            <Typography style={{ textAlign: "left", marginBottom: "1rem" }}>
              Please login to your account
            </Typography>
            <TextField
              id="email"
              label="Email Address"
              variant="outlined"
              margin="normal"
            />
            <TextField
              id="password"
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
            />
            <Typography variant="body2" style={{ textAlign: "left", margin: "0.5rem 0" }}>
              <Link href="#">Forgot password?</Link>
            </Typography>
            <Button variant="contained" color="primary" fullWidth style={{ marginTop: "1rem",color: "white" }}>
              Login
            </Button>
            <Typography variant="body2" style={{ textAlign: "left", marginTop: "1rem" }}>
              Don't have an account? <Link href="#">Register</Link>
            </Typography>
          </Box>
        </form>
      </div>
    </ThemeProvider>
  );
};

export default Login;