// routes/messageRoutes.js
const express = require('express');
const { sendMessage } = require('../controllers/messageController.js');
const router = express.Router();

router.post('/send-message', sendMessage);

module.exports = router;
