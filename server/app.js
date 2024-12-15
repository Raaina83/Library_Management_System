import express from 'express'
import connectToDB from './connectionMongoDB/connect.js';
import dotenv from "dotenv";
dotenv.config();
import authUser from './routes/auth.route.js';
import librarian from './routes/librarian.route.js';
import userRoutes from './routes/user.route.js';
import emailRoutes from './routes/email.route.js';
import cookieParser from 'cookie-parser';
import cors from 'cors'
import errorMiddleware from './middlewares/error.js';
import {v2 as cloudinary} from 'cloudinary';

const app = express();

connectToDB(process.env.MONGO_URI);

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

app.use(express.json()) //to parse the incoming request with JSON payloads from req.body
app.use(cookieParser());
app.use(cors({
    origin: ["http://localhost:5173", "http://localhost:8080"], 
    credentials: true
}))

app.use("/api/v1/auth/user", authUser);
app.use("/api/v1/librarian", librarian);
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/email", emailRoutes);

app.use(errorMiddleware)

app.listen(8080, () => {
    console.log("app is listening on port 8080");
})