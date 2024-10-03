import mongoose, { Schema } from "mongoose";

const bookSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String
    },
    available: {
        type: Number,
    },
    image: {
        type: String,
        set: (v) => v === "" ? "https://m.media-amazon.com/images/I/81wu+7LCCzL._AC_UF1000,1000_QL80_.jpg" : v,
    }
});

const Book = mongoose.model("Book" ,bookSchema);
export default Book;