import nodemailer from 'nodemailer';

// Create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
    host: mailhog,
    port: 1025,
    secure: false,
    // auth: {
    //     user: process.env.EMAIL_USER,  
    //     pass: process.env.EMAIL_PASSWORD,
    // }
});

// Send email function
const  sendEmail = (to, subject, text) => {
    const mailOptions = {
        from: process.env.EMAIL_USER,  // Sender's email
        to: to,  // Recipient's email
        subject: subject,  // Subject line
        text: text  // Plain text body
    };

    return transporter.sendMail(mailOptions);
};

export default sendEmail;
