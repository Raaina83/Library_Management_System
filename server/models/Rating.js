import mongoose, { Schema, Types } from "mongoose";
// import User from "./User";
// import Book from "./Book";

const ratingSchema = new Schema({
    rating: {
        type: Number,
        min: 1,
        max: 5,
    },
    owner: {
        type: Types.ObjectId,
        ref: "User"
    },
}, {timestamps: true});

const Rating = mongoose.model("Rating", ratingSchema);
export default Rating;