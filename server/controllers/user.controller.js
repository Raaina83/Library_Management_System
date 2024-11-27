import Book from '../models/Book.js';
import BookIssue from '../models/BookIssue.js';
import User from '../models/User.js';
import Request from '../models/Request.js';

// Get all books
export const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json({
            success: true,
            books
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get all issued books for a user
export const getAllIssuedBooks = async (req, res) => {
    try {
        const userId = req.user._id; // Assuming `req.user._id` is set by authentication middleware
        const issuedBooks = await BookIssue.find({ borrower: userId }).populate("bookId");

        res.status(200).json({
            success: true,
            issuedBooks
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Send book issue request
export const sendRequest = async (req, res) => {
    try {
        const { bookId } = req.body;
        const userId = req.user._id;

        // Check if the user already has 2 books issued
        const issuedBooksCount = await BookIssue.countDocuments({ borrower: userId });
        if (issuedBooksCount >= 2) {
            return res.status(400).json({ success: false, message: "User cannot issue more than 2 books." });
        }

        // Create request
        const newRequest = new Request({
            sender: userId,
            bookId
        });
        await newRequest.save();

        res.status(200).json({
            success: true,
            message: "Book issue request sent successfully!"
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get user profile
export const getUserProfile = async (req, res) => {
    try {
        const { userId } = req.params;
        const user = await User.findById(userId).populate('currentBookIssued previousBookIssued');

        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        const issuedBooksCount = await BookIssue.countDocuments({ borrower: userId });

        res.status(200).json({
            success: true,
            profile: {
                name: user.name,
                email: user.email,
                profileImage: user.profile,
                issuedBooksCount,
                maxBookLimit: 2,
            }
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
