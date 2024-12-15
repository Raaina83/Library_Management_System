import Book from '../models/Book.js';
import BookIssue from '../models/BookIssue.js';
import User from '../models/User.js';
import Request from '../models/Request.js';
import { ErrorHandler } from '../utils/utility.js';

export const getAllBooks = async (req, res) => {
    try {
        if(req.query.search) {
            console.log(req.query);
            const { search } = req.query;
            const books = await Book.find({
                title: {$regex: ".*" + search + ".*", $options: "i"}
            });
            res.status(200).json({ success: true, books });
        }
        else {
            const books = await Book.find();
            res.status(200).json({
                success: true,
                books
            });            
        }

    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: error.message });
    }
};

export const getBookDetails = async(req, res, next) => {
    try {
        const bookId = req.params.id;
        const book = await Book.findById(bookId);
        if(!book) {
            return next(new ErrorHandler("Book does not exist", 401));
        }

        res.status(200).json({
            success: true,
            book
        })
    } catch (error) {
        console.log(error)
    }
}

export const getAllIssuedBooks = async (req, res) => {
    try {
        const userType = req.user.userType;
        console.log(userType);
        if(userType == "student" || userType == "staff") {
            const userId = req.user._id;
            const issuedBooks = await BookIssue.find({ borrower: userId })
                                                .populate("bookId")
                                                .populate("borrower", "name email branch year");

            return res.status(200).json({
                    success: true,
                    issuedBooks
            });
        }
        else {
            const issuedBooks  =await BookIssue.find()
                                                .populate("bookId")
                                                .populate("borrower", "name email branch year");
            return res.status(200).json({
                success: true,
                issuedBooks
        });
        }

    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export const sendRequest = async (req, res, next) => {
    try {
        const { bookId } = req.body;
        const userId = req.user;

        const alreadyIssued = await Request.find({sender: userId, bookId})
        console.log(alreadyIssued);
        if(alreadyIssued.length > 0) {
            return next(new ErrorHandler("Book is already issued", 401));
        }
        const issuedBooksCount = await BookIssue.countDocuments({ borrower: userId });
        if (issuedBooksCount >= 2) {
            return res.status(400).json({ success: false, message: "User cannot issue more than 2 books." });
        }

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

export const getUserProfile = async (req, res) => {
    try {
        const userA  = req.user;
        // console.log("userId",user)
        const user = await User.findById(userA._id).populate('currentBookIssued previousBookIssued');

        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        // const issuedBooksCount = await BookIssue.countDocuments({ borrower: userA._id });

        res.status(200).json({
            success: true,
            profile: {
                name: user.name,
                email: user.email,
                userType: user.userType,
                profileImage: user.profile,
                branch: user.branch,
                year: user.year
            }
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
