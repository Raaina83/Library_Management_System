import User from "../models/User.js";
import bcrypt from 'bcryptjs';
import { cookieOptions, generateTokenAndCookie } from "../utils/generateTokenAndCookie.js";
import Librarian from "../models/Librarian.js";
import { ErrorHandler } from "../utils/utility.js";
import { uploadFilesToCloudinary } from "../utils/features.js";

const login = async(req, res, next) => {
    const {name, email, password} = req.body;
    const user = await User.findOne({email});
    const isValidPassword = await bcrypt.compare(password, user?.password);
    if(!user || !isValidPassword) {
        return next(new ErrorHandler("Invalid username or password!", 401));
    }
    generateTokenAndCookie(user, res, `Welcome back ${user.name}`);
}

const signUp = async(req, res, next) => {
    const {userType, name, email, password, confirmPassword, branch, year} = req.body;

    if(password !== confirmPassword) {
        return next(new ErrorHandler("Passwords does not match", 400));
    }

    const file = req.file;

    if(!file) return next(new ErrorHandler("Please upload profile"))

    const result = await uploadFilesToCloudinary([file]);
    const profile = {
        public_id: result[0].public_id,
        url: result[0].url
    }

    const user = await User.findOne({email});
    if(user) {
        throw new Error("User already exists");
    }
    const salt = await bcrypt.genSalt(10);    
    const hashedPassword = await bcrypt.hash(password, salt);
    if(userType === "student") {
        if(!branch || !year) return next(new ErrorHandler("No branch or year", 401));
        const newUser = new User({
            userType,
            name,
            email,
            password: hashedPassword,
            branch,
            year,
            profile
        });
        console.log(newUser)

        await newUser.save();
        generateTokenAndCookie(newUser._id, res, "User created");
    }
    else if(userType === "staff") {
        const newUser = new User({
            userType,
            name,
            email,
            password:hashedPassword,
            profile
        });
        await newUser.save();
        generateTokenAndCookie(newUser._id, res, "User created");
    }
    else if(userType == "librarian") {
        const newUser = new User({
            userType,
            name: name,
            email: email,
            password: hashedPassword
        });
        await newUser.save();
        generateTokenAndCookie(newUser._id, res, "User created");
    }
}

const logout = async(req, res) => {
    return res
        .cookie("jwt", "" ,  {...cookieOptions, maxAge: 0})
        .status(200)
        .json({
            success: true,
            message: "Logged out successfully!"
        })
}

export {login, signUp, logout};