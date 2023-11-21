import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { io } from "socket.io-client";
import "./Chat.css";
import { useSelector } from "react-redux";

const Chat = () => {
  const { sellerName, username } = useParams();
  const user = useSelector((state) => state.auth.user);
  console.log({ user });
  const userId = user?._id;
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState(null);
  const scrollRef = useRef();

  useEffect(() => {
    // Connect to Socket.io server
    const newSocket = io("http://localhost:8080"); // Replace with your server URL

    setSocket(newSocket);

    // Clean up on component unmount
    return () => {
      if (newSocket) {
        newSocket.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    // Connect to Socket.io server
    const newSocket = io("http://localhost:8080"); // Replace with your server URL

    setSocket(newSocket);

    // Clean up on component unmount
    return () => {
      if (newSocket) {
        newSocket.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch chat history from the server
        const response = await fetch(
          `http://localhost:8080/api/chat/getMessages/${username}/${sellerName}`
        );
        console.log({ response });
        const data = await response.json();
        console.log({ data });
        if (data.error) {
          setMessages([]);
        } else {
          // Update the messages state with the fetched chat history
          setMessages(data);
        }
      } catch (error) {
        console.error("Error fetching chat history:", error);
      }
    };

    // Ensure the socket is connected
    if (socket && sellerName && username) {
      // Join a room based on the sellerName and username
      socket.emit("join", { senderId: username, receiverId: sellerName });

      // Listen for received messages
      socket.on("receiveMessage", (data) => {
        setMessages((prevMessages) => [...prevMessages, data.message]);
      });

      // Fetch chat history when the component mounts
      fetchData();
    }

    // Clean up socket on component unmount
    return () => {
      if (socket) {
        socket.disconnect();
      }
    };
  }, [socket, sellerName, username]);

  const sendMessage = () => {
    if (socket && message.trim() !== "") {
      // Emit the message to the server
      socket.emit("sendMessage", {
        senderId: username,
        receiverId: sellerName,
        message: { text: message },
      });

      // Add the sent message to the local state
      // setMessages((prevMessages) => [
      //   ...prevMessages,
      //   { sender: username, content: message },
      // ]);

      // Clear the input field
      setMessage("");
    }
  };

  const isSender = (sender) => sender === username;

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  console.log({ messages });
  return (
    <div className="messenger">
      <div className="chatBoxTop">
        {messages?.map((msg, index) => (
          <div
            key={index}
            ref={scrollRef}
            className={
              isSender(msg.sender === userId ? user?.username : msg.sender)
                ? "messageSender"
                : "messageReceiver"
            }
          >
            <strong>
              {msg.sender === userId ? user?.username : msg.sender}:{" "}
            </strong>
            {msg.content}
          </div>
        ))}
      </div>
      <div className="chatBoxBottom">
        <textarea
          className="chatMessageInput"
          placeholder="Type your message..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <button className="chatSubmitButton" onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
