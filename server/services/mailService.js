const nodemailer = require('nodemailer');
require('dotenv').config();

const sendEmail = async (data) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL,
        pass: 'qfdizmkpufoffwxg'
    }
  });

  const mailOptions = {
    from: data.email,  // Sender's email
    to: 'thesmgroups@gmail.com',  // Recipient's email
    subject: 'New Message from Contact Form',
    html: `
      <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              background-color: #f4f4f4;
              margin: 0;
              padding: 0;
            }
            .email-container {
              width: 100%;
              max-width: 600px;
              margin: 0 auto;
              background-color: #ffffff;
              border-radius: 8px;
              overflow: hidden;
            }
            .email-header {
              background-color: #007bff;
              color: #ffffff;
              padding: 20px;
              text-align: center;
            }
            .email-content {
              padding: 20px;
            }
            .email-content h2 {
              color: #333333;
            }
            .email-content p {
              font-size: 14px;
              line-height: 1.6;
              color: #333333;
            }
            .email-footer {
              background-color: #f8f8f8;
              text-align: center;
              padding: 10px;
              font-size: 12px;
              color: #777777;
            }
            .email-content .detail {
              margin-bottom: 10px;
              padding: 10px;
              background-color: #f9f9f9;
              border-radius: 4px;
              border: 1px solid #dddddd;
            }
            .email-content .detail strong {
              color: #333333;
            }
          </style>
        </head>
        <body>
          <div class="email-container">
            <div class="email-header">
              <h1>New Contact Form Submission</h1>
            </div>
            <div class="email-content">
              <h2>Message Details</h2>
              <div class="detail">
                <strong>Name:</strong> ${data.name}
              </div>
              <div class="detail">
                <strong>Mobile:</strong> ${data.mobile}
              </div>
              <div class="detail">
                <strong>Email:</strong> ${data.email}
              </div>
              <div class="detail">
                <strong>City:</strong> ${data.city}
              </div>
              <div class="detail">
                <strong>Pincode:</strong> ${data.pincode}
              </div>
              <div class="detail">
                <strong>Message:</strong>
                <p>${data.message}</p> <!-- Ensure message is treated as regular text, not a quote -->
              </div>
            </div>
            <div class="email-footer">
              <p>Thank you for contacting us. We will get back to you shortly.</p>
            </div>
          </div>
        </body>
      </html>
    `,
  };
  

  try {
    await transporter.sendMail(mailOptions);
  } catch (err) {
    console.error('Error sending email:', err);
    throw err;
  }
};

module.exports = { sendEmail };
