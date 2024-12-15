// const { default: sendEmail } = require("../utils/services");
import  sendEmail  from "../utils/services.js";

export const reminder =  async (req, res) => {
    const { email, bookTitle, dueDate } = req.body;

    const subject = 'Library Book Due Date Reminder';
    const text = `Dear User,\n\nThis is a reminder that the book "${bookTitle}" is due for return on ${dueDate}. Please return it on time to avoid any fines.\n\nThank you for using our library services.`;

    try {
        await sendEmail(email, subject, text);
        res.status(200).send('Reminder sent successfully');
    } catch (err) {
        res.status(500).send('Error sending email: ' + err.message);
    }
};

// Example route to send an overdue notice
export const lateReminder =  async (req, res) => {
    const { email, book, dueDate} = req.body;

    const subject = 'Library Book Overdue Notice';
    const text = `Dear User,\n\nThe book "${book}" was due on ${dueDate}, and a fine of 10 rupees will be applied to your account every day until return date.  Please return the book at the earliest to avoid further penalties.\n\nThank you for using our library services.`;

    try {
        await sendEmail(email, subject, text);
        res.status(200).send('Overdue notice sent successfully');
    } catch (err) {
        console.log(err);
        res.status(500).send('Error sending email: ' + err.message);
    }
};
