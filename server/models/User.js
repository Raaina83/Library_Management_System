import mongoose, { Schema, Types } from "mongoose";

const userSchema = new Schema({
    userType: {
        type: String,
        enum: ["student", "staff"],
        require: true
    },
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    password: {
        type: Number,
        min: 6,
    },
    profile: {
        type: String,
    },
    branch: {
        type: String,
    },
    year: {
        type: Number,
    },
    currentBookIssued: {
        type: Types.ObjectId,
        ref: "BookIssue",
    },
    previousBookIssued: {
        type: Types.ObjectId,
        ref: "BookIssue",
    }
},
{timestamps: true});

const User = mongoose.model("User" ,userSchema);
export default User;