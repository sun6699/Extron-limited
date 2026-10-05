const express = require("express");
const path = require("path");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();

// Middleware
app.use(express.static(__dirname));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

// Configure nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER || "morak6@yahoo.co.uk",
    pass: process.env.EMAIL_PASSWORD, // Use app password for Gmail
  },
});

// Route to serve index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Contact form submission endpoint
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Please provide name, email, and message.",
      });
    }

    // Email to site owner
    const mailOptions = {
      from: process.env.EMAIL_USER || "morak6@yahoo.co.uk",
      to: process.env.CONTACT_EMAIL || "morak6@yahoo.co.uk",
      subject: `New Contact Form Submission: ${subject || "No Subject"}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject || "No Subject"}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
      replyTo: email,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Optional: Send confirmation email to visitor
    const confirmationEmail = {
      from: process.env.EMAIL_USER || "morak6@yahoo.co.uk",
      to: email,
      subject: "Thank you for contacting Extron Nigeria Limited",
      html: `
        <h2>Thank You!</h2>
        <p>Dear ${name},</p>
        <p>We have received your message and will get back to you shortly.</p>
        <p><strong>Your Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
        <p>Best regards,<br>Extron Nigeria Limited Team</p>
      `,
    };

    await transporter.sendMail(confirmationEmail);

    res.json({
      success: true,
      message: "Your message has been sent successfully. Thank you!",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({
      success: false,
      message: "Failed to send message. Please try again later.",
    });
  }
});

// Newsletter subscription endpoint
app.post("/api/newsletter", async (req, res) => {
  try {
    const { newsletterEmail } = req.body;

    if (!newsletterEmail) {
      return res.status(400).json({
        success: false,
        message: "Please provide an email address.",
      });
    }

    // Email notification to owner
    const mailOptions = {
      from: process.env.EMAIL_USER || "morak6@yahoo.co.uk",
      to: process.env.CONTACT_EMAIL || "morak6@yahoo.co.uk",
      subject: "New Newsletter Subscription",
      html: `
        <h2>New Newsletter Subscriber</h2>
        <p><strong>Email:</strong> ${newsletterEmail}</p>
        <p>Date: ${new Date().toLocaleString()}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.json({
      success: true,
      message: "Thank you for subscribing to our newsletter!",
    });
  } catch (error) {
    console.error("Error with newsletter subscription:", error);
    res.status(500).json({
      success: false,
      message: "Failed to subscribe. Please try again later.",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
