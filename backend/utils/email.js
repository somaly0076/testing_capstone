const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const catchAsync = require("./catchAsync");

dotenv.config();

const sendEmail = catchAsync(async (options) => {
  try {
    // Create a transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Define the email options
    const mailOptions = {
      from: "Your Name <your-email@example.com>",
      to: options.email,
      subject: options.subject,
      text: options.message,
      html: options.html || "",
    };

    // Actually send the email
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error(`Failed to send email: ${error.message}`);
  }
});

module.exports = sendEmail;
