import React, { useState } from "react";
import "./Account.css";
import {
  Button,
  TextField,
  Box,
  Tabs,
  Tab,
  Snackbar,
  SnackbarContent,
  IconButton,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import ProfileComponent from "./ProfileComponent";
import UpdatePassword from "./UpdatePassword";

function Profile() {
  const user = JSON.parse(localStorage.getItem("userInfo"));
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [selectedTab, setSelectedTab] = useState(0);
  const [isError,setIsError] = useState(false);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleSnackbarOpen = (message, isError) => {
    console.log("open");
    setSnackbarMessage(message);
    setSnackbarOpen(true);
    setIsError(!!isError)
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
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
      </Tabs>

      <TabPanel value={selectedTab} index={0} className="tabpanel">
        <ProfileComponent user={user} handleSnackBarOpen={handleSnackbarOpen} />
      </TabPanel>
      <TabPanel
        value={selectedTab}
        index={1}
        className="tabpanel"
        style={{ width: "50%" }}
      >
        <UpdatePassword user={user} handleSnackBarOpen={handleSnackbarOpen} />
      </TabPanel>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <SnackbarContent
          message={snackbarMessage}
          style={{ backgroundColor: `${isError ? 'red': 'green'}` }}
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

export default Profile;
