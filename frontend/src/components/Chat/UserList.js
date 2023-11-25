import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getConversationsThunk,
  getUsernameByIdThunk,
  getUsersThunk,
} from "../../data/authSlice";
import "./UserList.css";
import { Avatar } from "@mui/material";

const UserList = ({ onUserSelect }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const conversations = useSelector((state) => state.auth.conversations);
  const [usernames, setUsernames] = useState([]); // Array to hold usernames
  const users = useSelector((state) => state.auth.users);

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
            console.log({ username });
            console.log({ users });
            const profile = users?.find((userId) => userId?.id === id);
            console.log({ profile });
            setUsernames((prevUsernames) => {
              console.log({ prevUsernames });
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

  return (
    <div className="userList">
      {usernames.map((username, index) => (
        <div
          key={index}
          onClick={() => onUserSelect(username)}
          className="userListItem"
        >
          <Avatar alt="Profile Picture" sx={{ width: 50, height: 50 }} />
          <span className="userName">{username}</span>
        </div>
      ))}
    </div>
  );
};

export default UserList;
