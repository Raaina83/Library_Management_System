import mongoose, { Schema, Types } from "mongoose";

const userSchema = new Schema({
    userType: {
        type: String,
        enum: ["student", "staff", "librarian"],
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
        type: String,
        min: 6,
    },
    profile:{
        public_id: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
    },
    branch: {
        type: String,
    },
    year: {
        type: Number,
    },
    currentBookIssued: [
        {
            type: Types.ObjectId,
            ref: "BookIssue",
        },
    ],
    previousBookIssued: [
        {
            type: Types.ObjectId,
            ref: "BookIssue",
        }
    ],
    phone: {
        type: Number
    }
},
{timestamps: true});

const User = mongoose.model("User" ,userSchema);
export default User;