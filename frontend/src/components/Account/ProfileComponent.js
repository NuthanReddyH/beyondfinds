import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Avatar, Button, TextField, Box } from "@mui/material";
import { updateUserThunk } from "../../data/authSlice";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import { getImageUrl } from "../../utils";

const ProfileComponent = ({ user, handleSnackBarOpen }) => {
  const dispatch = useDispatch();
  const [profilePicture, setProfilePicture] = useState(
    user?.profile?.avatar || null
  );

  const [username, setUsername] = useState(user?.username || "");
  const [email, setEmail] = useState(user?.email || "");
  const [firstName, setFirstName] = useState(user?.profile?.firstName || "");
  const [lastName, setLastName] = useState(user?.profile?.lastName || "");
  const [phoneNumber, setPhoneNumber] = useState(user?.profile?.phone || "");
  const [phoneNumberError, setPhoneNumberError] = useState("");

  const validatePhoneNumber = (number) => {
    const regex = /^\d{3}-\d{3}-\d{4}$/;
    return regex.test(number);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setProfilePicture(file);
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
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    const result = await dispatch(updateUserThunk(formData));
    if (result?.payload) {
      console.log("here", result.payload);
      handleSnackBarOpen(result?.payload?.message);
    }
  };

  return (
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
        label="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <TextField
        fullWidth
        margin="normal"
        label="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
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
  );
};

export default ProfileComponent;
