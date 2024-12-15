import Book from "../models/Book.js";
import BookIssue from "../models/BookIssue.js";
import Request from "../models/Request.js";
import User from "../models/User.js";
import { ErrorHandler } from "../utils/utility.js";

const addNewBook = async(req, res, next) => {
    const {title, author, image, available} = req.body;
    if(req.user.userTpe != "librarian") {
        return next(new ErrorHandler("You are not authorized for the process", 401));
    } 

    const book = await Book.find({title});
    if(book.length > 0) return next(new ErrorHandler("Book with same title already exists.", 401));

    const newBook = new Book({
        title,
        author,
        image,
        available
    });
    await newBook.save();

    return res  
            .status(200)
            .json({
                success: true,
                message: "New Book added!",
            });
}

const getAllRequest = async(req, res) => {
    const pendingRequests = await Request
                                        .find({status: "pending"})
                                        .populate("sender", 'name branch year email')
                                        .populate("bookId", 'title')

    return res
            .status(200)
            .json({
                success: true,
                requests: pendingRequests
            }) 
}

const approveRequest = async(req, res, next) => {
    const {accept, requestId, userId} = req.body;
    console.log(accept, requestId, userId);
    const request = await Request.findById(requestId).populate("bookId");
    const user = await User.findById(userId);

    if(!request) return next(new ErrorHandler("Request does not exist"));

    if(!accept) {
        await request.deleteOne();

        return res
            .status(200)
            .json({
                success: true,
                message: "Book Issue Rejected",
            });
    }
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 14);
    const newBookIssued = await BookIssue.create({
        bookId: request.bookId,
        borrower: request.sender,
        from : new Date(),
        till: endDate,
    });

    await user.updateOne({
        $push: { currentBookIssued: newBookIssued._id },
    });

    await request.deleteOne();


    // await Promise.all([
    //     BookIssue.create({
    //         bookId: request.bookId,
    //         borrower: request.sender,
    //         from : new Date(),
    //         till: endDate,
    //     }),
    //     request.deleteOne(),
    // ]);

    return res
        .status(200)
        .json({
            success: true,
            message: "Book Issue Request Approved",
            sender: request.sender,
        });
}

const returnBook = async(req, res, next) => {
    const {bookIssueId, userId} = req.body;
    const authUser = req.user;
    console.log(userId);
    const book = await BookIssue.findById(bookIssueId);
    if(authUser.userType != "librarian") {
        return next (new ErrorHandler("Unauthorized access(not a librarian!)", 401));
    }

    await User.updateOne(
        { _id: userId }, // Find the user by ID
        {
          $pull: { currentBookIssued: bookIssueId }, // Remove the book from currentBookIssued
          $push: { previousBookIssued: bookIssueId }, // Add the book to previousBookIssued (optional)
        }
      )

      await book.deleteOne();
      res.status(200)
        .json({
            success: true,
            message: "Book returned!"
        })
}

export {getAllRequest, approveRequest, addNewBook, returnBook};