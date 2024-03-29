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
    const { name, email, message } = req.body;

    try {
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: 'gklz ugpn gfvw tpid'
            },
            pool: true
        });

        let mailOptions = {
            from: `${email}`,
            to: 'amityadav497421@gmail.com',
            subject: 'Contact Us Form Submission',
            text: `\n\nDear ${name}, has shown interest in joining our team by filling the contact us form on our official company website.\n\n Following are the details of applicants:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}\n`,
        };

        try {
            let info = await transporter.sendMail(mailOptions);
            console.log('Email sent:', info.response);
             res.send('Email sent successfully!');
            let feedbackOptions = {
                from: 'Qodit <amityadav497421@gmail.com>',
                to: email,
                subject: 'Thank You for Applying',
                text: `\n\nDear ${name},\n\nThank you for applying. We have received your message and will get back to you soon.\n\nHere are your application details:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}\n`,
            };
            await transporter.sendMail(feedbackOptions);

           
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
                pass: 'gklz ugpn gfvw tpid'
            },
            pool : true
        });

        let mailOptions = {
            from: `${email}`,
            to: 'amityadav497421@gmail.com', 
            subject: 'Career Form  Submission',
            text: `\n\nDear ${name},has shown interest in joining our team by filling the contact us form on our official company website.\n\n Following are the details of applicants:\n\nName:${name}\nMessage:${message}\nEmail: ${email}\nMobile Number: ${phoneNumber}\nJob Role: ${jobrole}\nTechnology: ${technology}\n`,
            attachments: attachment ? [{ filename: attachment.originalname, content: attachment.buffer }] : []
        };

        try {
            let info = await transporter.sendMail(mailOptions);
            console.log('Email sent:', info.response);
             res.send('Email sent successfully!');
            let feedbackOptions = {
                from: 'Qodit <amityadav497421@gmail.com>',
                to: email,
                subject: 'Thank You for Applying',
                text: `\n\nDear ${name},\n\nThank you for applying. We have received your message and will get back to you soon.\n\nHere are your application details:\n\nName: ${name}\nMessage: ${message}\nEmail: ${email}\nMobile Number: ${phoneNumber}\nJob Role: ${jobrole}\nTechnology: ${technology}\n`,
            };
            await transporter.sendMail(feedbackOptions);
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
