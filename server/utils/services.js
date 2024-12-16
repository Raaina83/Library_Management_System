import nodemailer from 'nodemailer';

// Create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,  
        pass: process.env.EMAIL_PASSWORD,
    }
});

// Send email function
const  sendEmail = (to, subject, htmlcontent) => {
    const mailOptions = {
        from: process.env.EMAIL_USER,  // Sender's email
        to: to,  // Recipient's email
        subject: subject,  // Subject line
        html: htmlcontent,
    };

    return transporter.sendMail(mailOptions);
};

export default sendEmail;
