import mongoose, { Schema } from "mongoose";

const librarianSchema = new Schema({
    role: {
        type: String,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String
    },
    password: {
        type: String,
    },
}, {timestamps: true});

const Librarian = mongoose.model("Librarian" ,librarianSchema);
export default Librarian;