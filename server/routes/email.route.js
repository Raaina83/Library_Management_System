import express from 'express';
import { lateReminder, reminder } from "../controllers/email.controller.js";

const router = express.Router();

router.post('/send-due-date-reminder', reminder);
router.post('/send-overdue-notice', lateReminder);

export default router;