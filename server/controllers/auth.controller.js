import User from "../models/User.js";
import bcrypt from 'bcryptjs';
import { generateTokenAndCookie } from "../utils/generateTokenAndCookie.js";

const login = async(req, res) => {
    const {name, email, password} = req.body;
    const user = await User.findOne({email});
    const isValidPassword = await bcrypt.compare(password, user?.password);
    if(!user || !isValidPassword) {
        throw new Error("Invalid username or password!");
    }
    generateTokenAndCookie(user._id, res, `Welcome back ${user.name}`);
}

const signUp = async(req, res) => {
    const {userType, name, email, password, confirmPassword, profile, branch, year} = req.body;
    if(password.length < 6) throw new Error("password must have at least 6 digits");

    if(password !== confirmPassword) {
        throw new Error("Passwords does not match");
    }

    const user = await User.findOne({email});
    if(user) {
        throw new Error("User already exists");
    }
    const salt = await bcrypt.genSalt(10);    
    const hashedPassword = await bcrypt.hash(password, salt);
    if(userType === "student") {
        if(!branch || !year) throw new Error("No branch or year");
        const newUser = new User({
            userType,
            name,
            email,
            password: hashedPassword,
            branch,
            year,
            profile
        });

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
}

export {login, signUp};