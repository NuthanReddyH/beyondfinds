const express = require('express');
const authRouter = express.Router();
const { login, register,updateUser } = require('../../controllers/authController');
const upload = require('../../upload');

authRouter.post('/login', login);
authRouter.post('/register', register);
authRouter.put('/update', upload.single('avatar'), updateUser);

module.exports = authRouter;
