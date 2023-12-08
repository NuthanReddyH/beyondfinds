import React, { useState,useEffect } from "react";
import Chat from "./Chat";
import UserList from "./UserList"; 
import './ChatWindow.css'
import { getImageData } from "../../utils";
import { getUserByIdThunk } from "../../data/authSlice";
import { useDispatch, useSelector } from "react-redux";

const ChatWindow = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    dispatch(getUserByIdThunk(user?._id))
  },[dispatch])

  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };

  return (
    <div className="chatWindow">
      <div className="userListSection">
        <UserList onUserSelect={handleUserSelect} />
      </div>
      <div className="chatSection">
      {selectedUser ? (
          <Chat receiver={selectedUser} />
        ) : (
          <div className="noChatSelected">
            <img src={getImageData('noChat.png')} alt="No chat selected" />
            <p style={{fontSize: '30px'}}>No chats selected</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatWindow;
