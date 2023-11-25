import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUserThunk } from "../../data/authSlice";
import { Visibility, VisibilityOff, Close } from "@mui/icons-material";
import "./Account.css";
import {
  Avatar,
  Button,
  TextField,
  Box,
  Tabs,
  Tab,
  Typography,
  Snackbar,
  SnackbarContent,
  IconButton,
} from "@mui/material";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import { getImageUrl } from "../../utils";

function Profile() {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("userInfo"));
  const [profilePicture, setProfilePicture] = useState(
    user?.profile?.avatar || null
  );
  const [isEditing, setIsEditing] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);

  const [username, setUsername] = useState(user?.username || "");
  const [email, setEmail] = useState(user?.email || "");
  const [phoneNumber, setPhoneNumber] = useState(user?.profile?.phone || "");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const validatePhoneNumber = (number) => {
    const regex = /^\d{3}-\d{3}-\d{4}$/;
    return regex.test(number);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setProfilePicture(file);
  };

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleSnackbarOpen = (message) => {
    setSnackbarMessage(message);
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handlePhoneNumChange = (event) => {
    const { value } = event.target;
    setPhoneNumber(value);
  };

  const handleSaveChanges = async () => {
    if (!validatePhoneNumber(phoneNumber)) {
      setPhoneNumberError("Phone number must be in the format xxx-xxx-xxxx.");
      return;
    }
    setPhoneNumberError("");
    const formData = new FormData();
    formData.append("avatar", profilePicture);
    formData.append("email", email);
    formData.append("username", username);
    formData.append("phone", phoneNumber);
    const result = await dispatch(updateUserThunk(formData));
    if (result?.payload) {
      handleSnackbarOpen(result?.payload?.message);
    }
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
        {value === index && <Box>{children}</Box>}
      </div>
    );
  };
  return (
    <Box
      sx={{ flexGrow: 1, display: "flex", height: "100%", marginTop: "20px" }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={selectedTab}
        onChange={handleTabChange}
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <Tab label="Edit Profile" />
        <Tab label="Change Password" />
        <Tab label="Manage Membership" />
      </Tabs>

      <TabPanel value={selectedTab} index={0} className="tabpanel">
        <Box sx={{ p: 3 }}>
          <div className="flex items-center">
            <Avatar
              alt="Profile Picture"
              src={
                profilePicture &&
                (typeof profilePicture === "string"
                  ? getImageUrl(profilePicture)
                  : URL.createObjectURL(profilePicture))
              }
              sx={{ width: 100, height: 100 }}
            />
            <label htmlFor="profile-picture-input">
              <input
                type="file"
                accept="image/*"
                id="profile-picture-input"
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
              <Button
                variant="outlined"
                component="span"
                className="btn-upload"
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
            onChange={(e) => setUsername(e.target.value)}
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            fullWidth
            id="phone"
            margin="normal"
            label="Phone Number"
            value={phoneNumber}
            onChange={handlePhoneNumChange}
            error={!!phoneNumberError}
            helperText={phoneNumberError}
          />

          <Button
            variant="contained"
            className="btn-save"
            onClick={handleSaveChanges}
          >
            Save Changes
          </Button>
        </Box>
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={6000}
          onClose={handleSnackbarClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        >
          <SnackbarContent
            message={snackbarMessage}
            style={{ backgroundColor: "green" }}
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
      </TabPanel>
      <TabPanel
        value={selectedTab}
        index={1}
        className="tabpanel"
        style={{ width: "50%" }}
      >
        <TextField fullWidth margin="normal" label="Current Password" />
        <TextField fullWidth margin="normal" label="New Password" />
        <TextField fullWidth margin="normal" label="Re-Type Password" />
        <Button
          variant="contained"
          className="btn-save"
          onClick={handleSaveChanges}
        >
          Save Changes
        </Button>
      </TabPanel>

    </Box>
  );
}

export default Profile;
