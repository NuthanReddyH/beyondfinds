import React, {useState,useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'
import { Card, CardContent, Typography, Grid, Box } from '@mui/material';
import { blue, red } from '@mui/material/colors';
import { getUsersCountThunk } from '../../data/authSlice';

const InfoCard = ({ title, value, icon,onClick }) => {
  return (
    <Card sx={{ minWidth: 275, marginBottom: 2, backgroundColor: 'rgb(33, 33, 33)', color: 'white' }} onClick={onClick}>
      <CardContent>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            {icon}
          </Grid>
          <Grid item xs>
            <Typography variant="h5" component="div">
              {value}
            </Typography>
            <Typography variant="subtitle1">
              {title}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

const Dashboard = () => {
  const dispatch = useDispatch();
  const userCount = useSelector((state) => state.auth.usersCount);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getUsersCountThunk());
}, [dispatch]);

  const navigateToUsersDashboard = () => {
    navigate('/users'); // Update to the path of your users dashboard
  };
  return (
    <Box sx={{ flexGrow: 1, padding: 3 }}> {/* Add padding to the overall container */}
      <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ color: 'black',marginTop: "20px" }}>
        Dashboard
      </Typography>
      <Grid container spacing={2} justifyContent="center" style={{margin: '40px'}}> {/* Center the grid items */}
        <Grid item xs={12} sm={6} lg={4}> {/* Adjust size for large screens if needed */}
          <InfoCard
            title="Listings"
            value="26,789"
            icon={<Typography variant="h5" sx={{ color: blue[500] }}>💰</Typography>} // Replace with actual icon component
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}> {/* Adjust size for large screens if needed */}
          <InfoCard
            title="Users"
            value={userCount.toLocaleString()}
            onClick={navigateToUsersDashboard} 
            icon={<Typography variant="h5" sx={{ color: red[500] }}>👤</Typography>} // Replace with actual icon component
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
