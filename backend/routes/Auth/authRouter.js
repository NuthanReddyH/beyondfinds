const express = require('express');
const authRouter = express.Router();
const { login, register,updateUser } = require('../../controllers/authController');

authRouter.post('/login', login);
authRouter.post('/register', register);
authRouter.put('/update', updateUser); 

module.exports = authRouter;
