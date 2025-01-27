// controllers/messageController.js
// const Message = require('../model/Message');
const { sendEmail } = require('../services/mailService.js');

const sendMessage = async (req, res) => {
  const { name, mobile, email, city, pincode, message } = req.body;

  // Check if all required fields are provided
  if (!name || !mobile || !email || !city || !pincode || !message) {
    return res.status(400).json({
      success: false,
      message: 'All fields are required.',
    });
  }

  try {
    // Save the message data to the database
    // const newMessage = new Message({ name, mobile, email, city, pincode, message });
    // await newMessage.save();

    // Send the email with the message details
    await sendEmail({ name, mobile, email, city, pincode, message });

    res.status(200).json({
      success: true,
      message: 'Message sent successfully and saved to database.',
    });
  } catch (error) {
    console.error('Error in sendMessage:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again later.',
    });
  }
};

module.exports = { sendMessage };
