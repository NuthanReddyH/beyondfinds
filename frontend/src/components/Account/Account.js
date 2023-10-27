import React, { useState } from 'react';
import { Avatar, Button, TextField, Container, Grid, Typography } from '@mui/material';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

const userData = {
    username: 'JohnDoe',
    email: 'johndoe@example.com',
    phoneNumber: '123-456-7890',
  };

function Profile() {
  const [profilePicture, setProfilePicture] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setProfilePicture(file);
  };

  return (
    <Container maxWidth="sm">
      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <label htmlFor="profile-picture-input">
            <input
              type="file"
              accept="image/*"
              id="profile-picture-input"
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
            <Button
              variant="outlined"
              component="span"
              startIcon={<PhotoCameraIcon />}
            >
              Upload Profile Picture
            </Button>
          </label>
        </Grid>
        <Grid item>
          <Avatar
            alt="Profile Picture"
            src={profilePicture ? URL.createObjectURL(profilePicture) : ''}
            sx={{ width: 120, height: 120 }}
          />
        </Grid>
      </Grid>
      <TextField
        fullWidth
        margin="normal"
        label="Username"
        value={userData.username}
        InputProps={{
          readOnly: !isEditing,
        }}
      />
      <TextField
        fullWidth
        margin="normal"
        label="Email Address"
        value={userData.email}
        InputProps={{
          readOnly: !isEditing,
        }}
      />
      <TextField
        fullWidth
        margin="normal"
        label="Phone Number"
        value={userData.phoneNumber}
        InputProps={{
          readOnly: !isEditing,
        }}
      />
      <Button
        variant="contained"
        color="primary"
        disabled={!isEditing}
        onClick={() => setIsEditing(false)}
      >
        Save Changes
      </Button>
    </Container>
  );
}

export default Profile;
