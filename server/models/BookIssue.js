import mongoose, { Schema, Types } from "mongoose";

const bookIssueSchema = new Schema({
    bookId: {
        type: Types.ObjectId,
        ref: "Book",
    },
    borrower: {
        type: Types.ObjectId,
        ref: "User",
        required: true,
    },
    from: {
        type: Date,
        require: true
    },
    till: {
        type: Date,
        require: true,
    },
    returnDate: {
        type: Date,
    },
});

const BookIssue = mongoose.model("BookIssue" ,bookIssueSchema);
export default BookIssue;