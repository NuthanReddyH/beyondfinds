const Message = require('../models/Message');
const Conversation = require('../models/Conversations');
const User = require('../models/User');
const { getUserIdByUsername } = require('./authController');

const getConversationByParticipants = async (participant1, participant2) => {
  try {
    // Find the conversation by participants
    console.log({participant1})
    console.log({participant2})
    const conversation = await Conversation.findOne({
      participants: { $all: [participant1, participant2] },
    });
    console.log({conversation})
    return conversation;
  } catch (error) {
    console.error('Error fetching conversation:', error);
    throw error;
  }
};

const getMessagesByIds = async (messageIds) => {
  try {
    // Find the messages by their IDs
    const messages = await Message.find({ _id: { $in: messageIds } });
    return messages;
  } catch (error) {
    console.error('Error fetching messages by IDs:', error);
    throw error;
  }
};


const saveMessageToDB = async ({ senderId, receiverId, content }) => {
  try {
    const sender = await getUserIdByUsername(senderId);
    const receiver = await getUserIdByUsername(receiverId);

    // Get existing or create a new conversation
    let conversation = await getConversationByParticipants(sender, receiver);

    if (!conversation) {
      conversation = new Conversation({
        participants: [sender, receiver],
      });
    }

    // Create a new message
    const message = new Message({
      sender: sender,
      content: content,
      conversation: conversation,
    });

    await message.save();

    // Save the message to the conversation
    conversation.messages.push(message);

    // Save the conversation
    await conversation.save();

    // Save the conversation reference to both users' chat history
    await User.updateMany(
      { _id: { $in: [sender, receiver] } },
      { $addToSet: { chatHistory: conversation._id } }
    );

    return message;
  } catch (error) {
    console.error('Error saving message to database:', error);
    throw error;
  }
};

module.exports = {
  saveMessageToDB,
  getConversationByParticipants,
  getMessagesByIds,
};
