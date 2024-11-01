import mongoose, { Schema, Types } from "mongoose";

const requestSchema = new Schema({
    sender: {
        type: Types.ObjectId,
        ref: "Student",
        required: true,
    },
    // receiver: {
    //     type: Types.ObjectId,
    //     ref: "Librarian",
    //     required: true,
    // },
    status: {
        type: String,
        enum: ["pending", "approved", "rejected"],
        default: "pending",
    },
    bookId: {
        type: Types.ObjectId,
        ref: "Book",
        required: true,
    }
});

const Request = mongoose.model("Request" ,requestSchema);
export default Request;