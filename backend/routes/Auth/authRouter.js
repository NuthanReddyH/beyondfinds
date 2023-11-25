const express = require('express');
const authRouter = express.Router();
const { login, register,updateUser, getUsers, deleteUser, getUsersCount, addToFavorites, getConversations, getUsernameFromUserId } = require('../../controllers/authController');
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

module.exports = authRouter;
