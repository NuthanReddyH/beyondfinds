import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
  ThemeProvider,
  createTheme,
  styled,
} from "@mui/material";
import card1 from '../../assets/card1.png';
import card2 from '../../assets/card2.png';

const theme = createTheme({
  palette: {
    primary: {
      main: "#23B0BE",
    },
  },
});

const CustomCard = styled(Card)(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  "& .image-overlay": {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "#fff",
    transition: "opacity 0.3s ease-in-out",
    opacity: 0,
  },
  "&:hover .image-overlay": {
    opacity: 1,
  },
  "& .MuiCardContent-root": {
    backgroundColor: "transparent",
    position: "relative",
    zIndex: 1,
  },
  "& .MuiTypography-gutterBottom": {
    marginBottom: "1rem",
  },
  "& .MuiButton-root": {
    marginTop: "1rem",
  },
}));

const ImageCard = ({ image, title, buttonText }) => {
  return (
    <ThemeProvider theme={theme}>
      <CustomCard>
        <CardMedia component="img" height="100"  width="auto" image={image} alt={title} />
        <div className="image-overlay">
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Button variant="contained"  style={{ marginTop: "1rem", color: "white" }}>
            {buttonText}
          </Button>
        </div>
      </CustomCard>
    </ThemeProvider>
  );
};

const CardGroup = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <ImageCard
          image={card1}
          title="Find Deals Under $20"
          buttonText="Shop Now"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <ImageCard
          image={card2}
          title="Shop Safely & Securely"
          buttonText="Start Buying"
        />
      </Grid>
    </Grid>
  );
};

export default CardGroup;
