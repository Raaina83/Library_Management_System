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
        type: Number,
    },
});

const Librarian = mongoose.model("Librarian" ,librarianSchema);
export default Librarian;