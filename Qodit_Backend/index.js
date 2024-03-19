const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv'); // Load dotenv package
const cors = require('cors'); // Import the cors middleware
const multer = require('multer'); // Import multer for handling file uploads
const upload = multer(); // Create multer instance

const app = express();
const port = 5000;

// Load environment variables from .env file
dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors()); // Use cors middleware
app.use(upload.single('attachment')); // Handle single file upload with field name 'attachment'

app.post('/send-email-with-attachments', async (req, res) => {
    const { name, message, email, phoneNumber, technology } = req.body;
    const attachment = req.file; // Get uploaded file from request

    try {
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false, // Set to false if you're using TLS
            auth: {
                user: process.env.EMAIL_USER, // Use environment variables for email credentials
                pass: 'pytn qjih ujpa vvfo' // Use environment variables for email password
            }
        });

        let mailOptions = {
            from: email, // Use sender's email address
            to: process.env.EMAIL_USER, // Replace with the recipient's email address
            subject: 'New Contact Form Submission',
            text: `Name: ${name}\nMessage: ${message}\nEmail: ${email}\nPhoneNumber: ${phoneNumber}\nTechnology: ${technology}\n`,
            attachments: attachment ? [{ filename: attachment.originalname, content: attachment.buffer }] : []
        };

        try {
            // Send email
            let info = await transporter.sendMail(mailOptions);
            console.log('Email sent:', info.response);
            res.send('Email sent successfully!');
        } catch (error) {
            console.error('Error sending email:', error);
            res.status(500).send('Error sending email');
        }
    } catch (error) {
        console.error('Transporter Error:', error);
        res.status(500).send('Error creating transporter');
    }
});

app.post('/send-email', async (req, res) => {
    const { name, email, message } = req.body;

    try {
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false, // Set to false if you're using TLS
            auth: {
                user: process.env.EMAIL_USER, // Use environment variables for email credentials
                pass: 'pytn qjih ujpa vvfo' // Use environment variables for email password
            }
        });

        let mailOptions = {
            from: email, // Use sender's email address
            to: process.env.EMAIL_USER, // Replace with the recipient's email address
            subject: 'New Contact Form Submission',
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
        };

        try {
            // Send email
            let info = await transporter.sendMail(mailOptions);
            console.log('Email sent:', info.response);
            res.send('Email sent successfully!');
        } catch (error) {
            console.error('Error sending email:', error);
            res.status(500).send('Error sending email');
        }
    } catch (error) {
        console.error('Transporter Error:', error);
        res.status(500).send('Error creating transporter');
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
