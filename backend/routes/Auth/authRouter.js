const express = require('express');
const authRouter = express.Router();
const { login, register,updateUser, getUsers, deleteUser, getUsersCount } = require('../../controllers/authController');
const upload = require('../../upload');

authRouter.post('/login', login);
authRouter.post('/register', register);
authRouter.put('/update', upload.single('avatar'), updateUser);
authRouter.get('/users', getUsers);
authRouter.delete('/user/:id', deleteUser);
authRouter.get('/users/count', getUsersCount);

module.exports = authRouter;
