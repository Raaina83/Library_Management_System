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
        type: String,
        require: true
    },
    till: {
        type: String,
        require: true,
    },
    returnDate: {
        type: String,
    },
});

const BookIssue = mongoose.model("BookIssue" ,bookIssueSchema);
export default BookIssue;