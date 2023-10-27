const express = require('express');
const router = express.Router();
const authRouter = require('./Auth/authRouter')
const categoryRouter = require('./categoryRoutes')

router.use('/auth',authRouter);
router.use('/categories', categoryRouter);

module.exports = router;