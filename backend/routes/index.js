const express = require('express');
const router = express.Router();
const authRouter = require('./Auth/authRouter')
const categoryRouter = require('./categoryRoutes');
const chatRouter = require('./chatRoutes');

router.use('/auth',authRouter);
router.use('/categories', categoryRouter);
router.use('/chat', chatRouter);

module.exports = router;