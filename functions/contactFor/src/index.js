const { Client } = require('appwrite');
const nodemailer = require('nodemailer');

module.exports = async function (req, res) {
  const { firstName, lastName, email, message } = req.body;

  // Set up Nodemailer transporter using Appwrite SMTP settings
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',  // Appwrite's SMTP host
    port: 587,  // Use 587 for TLS
    secure: false,  // Set to true if using SSL
    auth: {
      user: 'dellasaymen@gmail.com',  // Your email address
      pass: 'Aymen172006@',     // Your email password or app password
    },
  });

  // Set up the email content
  const mailOptions = {
    from: 'dellasaymen@gmail.com',  // Your email address
    to: 'dellasaymen@gmail.com',  // Your receiving email
    subject: 'New Contact Form Submission',
    text: `First Name: ${firstName}
           Last Name: ${lastName}
           Email: ${email}
           Message: ${message}`,
  };

  // Send the email
  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send({ success: false, error: 'Failed to send email' });
  }
};
