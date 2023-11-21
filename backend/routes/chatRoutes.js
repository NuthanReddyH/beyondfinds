const express = require('express');
const chatRouter = express.Router();
const chatController = require('../controllers/messageController');
const { getUserIdByUsername } = require('../controllers/authController');

chatRouter.post('/sendMessage', chatController.saveMessageToDB);

chatRouter.get('/getMessages/:senderId/:receiverId', async (req, res) => {
    const { senderId, receiverId } = req.params;
    const sender = await getUserIdByUsername(senderId);
    const receiver = await getUserIdByUsername(receiverId);
  
    try {
      const conversation = await chatController.getConversationByParticipants(sender, receiver);
  
      if (conversation) {
        const messageIds = conversation.messages; 
        const messages = await chatController.getMessagesByIds(messageIds);// Assuming conversation.messages is an array of message IDs
        // const messages = await Promise.all(messageIds.map(async messageId => {
        //   const message = await chatController.getMessagesByIds(messageId);
        //   console.log({message})
        //   return message;
        // }));
        console.log({messages})
        return res.status(200).json(messages);
      } else {
        return res.status(404).json({ error: "Conversation not found." });
      }
    } catch (error) {
      console.error('Error fetching messages:', error);
      return res.status(500).json({ error: "Server error while fetching messages." });
    }
  });
  
module.exports = chatRouter;
