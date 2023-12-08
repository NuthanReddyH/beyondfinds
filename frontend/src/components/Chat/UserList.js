import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getConversationsThunk, getUserByIdThunk, getUsernameByIdThunk, getUsersThunk } from "../../data/authSlice";
import "./UserList.css";
import { Avatar, IconButton, Menu, MenuItem } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert'; // Icon for the menu

const UserList = ({ onUserSelect }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const conversations = useSelector((state) => state.auth.conversations);
  const [usernames, setUsernames] = useState([]);
  const users = useSelector((state) => state.auth.users);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  useEffect(() => {
    dispatch(getUsersThunk());
  }, [dispatch]);

  useEffect(() => {
    user.chatHistory.forEach((conversationId) => {
      dispatch(getConversationsThunk(conversationId));
    });
  }, [dispatch, user]);

  useEffect(() => {
    if (conversations && conversations.participants) {
      const participantIds = conversations?.participants?.filter(
        (p) => p !== user._id
      );
      participantIds.forEach((id) => {
        dispatch(getUsernameByIdThunk(id))
          .unwrap()
          .then((username) => {
            const profile = users?.find((userId) => userId?.id === id);
            setUsernames((prevUsernames) => {
              if (!prevUsernames.includes(username)) {
                return [...prevUsernames, username];
              }
              return prevUsernames;
            });
          })
          .catch((error) => console.error("Error fetching username:", error));
      });
    }
  }, [conversations, dispatch, user]);

  const handleMenuOpen = (event, username) => {
    setAnchorEl(event.currentTarget);
    setSelectedUser(username);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDeleteChats = async () => {
    console.log("Delete chats for", selectedUser);
  
    try {
      // Replace with the actual URL and endpoint
      const response = await fetch(`http://localhost:8080/api/auth/user/${selectedUser}`);
      if (!response.ok) {
        throw new Error('Failed to fetch user ID');
      }
      const data = await response.json();
      const participant1Id = data?.userId;
      const participant2Id = user?._id
      // Now use this userId to delete chats
      // Replace with your API endpoint to delete chats
      const deleteResponse = await fetch(`http://localhost:8080/api/chat/deleteChat/${participant1Id}/${participant2Id}`, {
        method: 'DELETE',
      });
      if (!deleteResponse.ok) {
        throw new Error('Failed to delete chats');
      }
      setUsernames(usernames.filter(username => username !== selectedUser));
      handleMenuClose();
      
    } catch (error) {
      console.error('Error deleting chats:', error);
      // Handle the error appropriately
    }
  };
  

  return (
    <div className="userList">
      {usernames.map((username, index) => (
        <div key={index} className="userListItem">
          <div className="user-container" onClick={() => onUserSelect(username)}>
            <Avatar alt="Profile Picture" sx={{ width: 50, height: 50 }} />
            <span className="userName">{username}</span>
          </div>
          <IconButton onClick={(e) => handleMenuOpen(e, username)}>
            <MoreVertIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl) && selectedUser === username}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleDeleteChats}>Delete Chat</MenuItem>
          </Menu>
        </div>
      ))}
    </div>
  );
};

export default UserList;
