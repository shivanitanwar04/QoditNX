const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
require('dotenv').config(); 
const cors = require('cors'); 
const multer = require('multer'); 
const upload = multer(); 
const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors()); 
app.use(upload.single('attachment')); 

app.post('/send-email', async (req, res) => {
    const { name,email,message } = req.body; 

    try {
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true, 
            auth: {
                user: process.env.EMAIL_USER, 
                pass: 'zyie szct epye gpuo'
            }
        });

        let mailOptions = {
    from: `${name} <${email}>`,
    to: 'amityadav497421@gmail.com', 
    subject: 'Contact Us Form Submission',
    text: `\n\nDear ${name},\n\nThank you for your interest in joining our team. We have received your career form submission with the following details:\nName: ${name}\nEmail: ${email}\nMessage:${message}\nOur team will review your information and contact you soon. If you have any further questions or updates regarding your application, please feel free to reach out to us.\n\nBest regards,\n[Your Company Name] Team\n`,
};


        try {
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
app.post('/send-email-with-attachments', async (req, res) => {
    const { name, message, email, phoneNumber, jobrole, technology } = req.body;
    const attachment = req.file; 

    try {
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true, 
            auth: {
                user: process.env.EMAIL_USER, 
                pass: 'zyie szct epye gpuo'
            }
        });

        let mailOptions = {
            from: `${name} <${email}>`,
            to: 'amityadav497421@gmail.com', 
            subject: 'Career Form  Submission',
            text: `\n\nDear ${name},\n\nThank you for your interest in joining our team. We have received your career form submission with the following details:\nName: ${name}\nMessage:${message}\n\nEmail: ${email}\nMobile Number: ${phoneNumber}\nJob Role: ${jobrole}\nTechnology: ${technology}\nOur team will review your information and contact you soon. If you have any further questions or updates regarding your application, please feel free to reach out to us.\n\nBest regards,\n[Your Company Name] Team\n`,
            attachments: attachment ? [{ filename: attachment.originalname, content: attachment.buffer }] : []
        };

        try {
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
