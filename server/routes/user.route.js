import express from 'express';
import { getAllBooks, getAllIssuedBooks, sendRequest, getUserProfile } from '../controllers/User.controller.js';

const router = express.Router();

router.get("/books", getAllBooks); // Get all books
router.get("/books/issued", getAllIssuedBooks); // Get all issued books by user
router.post("/request", sendRequest); // Send book issue request
router.get("/profile/:userId", getUserProfile); // Get user profile with image and book limit

export default router;
