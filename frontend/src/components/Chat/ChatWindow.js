import React, { useState } from "react";
import Chat from "./Chat";
import UserList from "./UserList"; 
import './ChatWindow.css'
import { getImageData } from "../../utils";

const ChatWindow = () => {
  const [selectedUser, setSelectedUser] = useState(null);

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
