import express from 'express';
import { getAllBooks, getAllIssuedBooks, sendRequest, getUserProfile, getBookDetails } from '../controllers/User.controller.js';
import { protectRoute } from '../middlewares/protectRoute.js';

const router = express.Router();

router.use(protectRoute);
router.get("/books", getAllBooks); // Get all books
router.get("/books/issued", getAllIssuedBooks); // Get all issued books by user
router.get("/books/:id", getBookDetails);
router.post("/request", sendRequest); // Send book issue request
router.get("/profile/", getUserProfile); // Get user profile with image and book limit

export default router;
