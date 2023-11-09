import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import { updateUserThunk } from '../../data/authSlice';
import './Account.css';
import {
  Avatar,
  Button,
  TextField,
  Box,
  Tabs,
  Tab,
  Typography
} from '@mui/material';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

function Profile() {
  const dispatch = useDispatch();
  //const { user } = useSelector((state) => state.auth);
  const user = JSON.parse(localStorage.getItem('userInfo'));
  
  const [profilePicture, setProfilePicture] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);
  
  
  const [username, setUsername] = useState(user?.username || '');
  const [email, setEmail] = useState(user?.email || '');
  const [phoneNumber, setPhoneNumber] = useState(user?.phoneNumber || '');


  useEffect(() => {
    if(user) {
      setUsername(user.username);
      setEmail(user.email);
      setPhoneNumber(user.phoneNumber);
    }
  }, [user]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setProfilePicture(file);
  };

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleSaveChanges = async () => {
    const updatedData = {
      username,
      email,
      phoneNumber,
    };


    dispatch(updateUserThunk(updatedData));
    setIsEditing(false);
  };

  const TabPanel = (props) => {
    const { children, value, index, ...other } = props;
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            {children}
          </Box>
        )}
      </div>
    );
  };

  return (
    <Box sx={{ flexGrow: 1, display: 'flex', height: '100%', marginTop: '20px' }}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={selectedTab}
        onChange={handleTabChange}
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Edit Profile" />
        <Tab label="Change Password" />
        <Tab label="Manage Membership" />
      </Tabs>

      <TabPanel value={selectedTab} index={0} className="tabpanel">
        <Box sx={{ p: 3 }}>
          <div className='flex items-center'>
          <Avatar
            alt="Profile Picture"
            src={profilePicture ? URL.createObjectURL(profilePicture) : ''}
            sx={{ width: 100, height: 100 }}
          />
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
              Upload
            </Button>
          </label>
          </div>
          <TextField
            fullWidth
            margin="normal"
            label="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Email Address"
            value={email}
            onChange={e => setEmail(e.target.value)}
            
          />
          <TextField
            fullWidth
            margin="normal"
            label="Phone Number"
            value={phoneNumber}
            onChange={e => setPhoneNumber(e.target.value)}
            
          />
          
            <Button
              variant="contained"
              className='btn-save'
              onClick={handleSaveChanges}
            >
              Save Changes
            </Button>
          
        </Box>
      </TabPanel>
      <TabPanel value={selectedTab} index={1} className="tabpanel"style={{ width:'50%'}}>
        <TextField
              fullWidth
              margin="normal"
              label="Current Password"            
              
            />
            <TextField
              fullWidth
              margin="normal"
              label="New Password"            
              
            />
            <TextField
              fullWidth
              margin="normal"
              label="Re-Type Password"            
              
            />
            <Button
              variant="contained"
              className='btn-save'
              onClick={handleSaveChanges}
            >
              Save Changes
            </Button>
      </TabPanel>
      {/* ... other TabPanels for Change Password, My Listing, Manage Membership ... */}
      
    </Box>
  );
}

export default Profile;
