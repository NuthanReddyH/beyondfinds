const express = require('express');
const authRouter = express.Router();
const { login, getUserById,register,updateUser, getUsers, deleteUser, getUsersCount, addToFavorites, getConversations, getUsernameFromUserId, checkUserPassword, sendOtp, getUsernameFromEmail, getUserIdFromUsername } = require('../../controllers/authController');
const upload = require('../../upload');

authRouter.post('/login', login);
authRouter.post('/register', register);
authRouter.put('/update', upload.single('avatar'), updateUser);
authRouter.get('/users', getUsers);
authRouter.delete('/user/:id', deleteUser);
authRouter.get('/users/count', getUsersCount);
authRouter.put('/addfavorites', addToFavorites);
authRouter.get('/conversations/:conversationId', getConversations);
authRouter.get('/username/:userId', getUsernameFromUserId);
authRouter.get('/user/:username', getUserIdFromUsername);
authRouter.post('/username', getUsernameFromEmail);
authRouter.post('/checkpassword', checkUserPassword);
authRouter.post('/send-otp', sendOtp);
authRouter.get('/user/id/:userId', getUserById);

module.exports = authRouter;
