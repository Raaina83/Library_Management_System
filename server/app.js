import express from 'express'
import connectToDB from './connectionMongoDB/connect.js';
import dotenv from "dotenv";
dotenv.config();
import authUser from './routes/auth.route.js';
import cookieParser from 'cookie-parser';

const app = express();

connectToDB(process.env.MONGO_URI);

app.use(express.json()) //to parse the incoming request with JSON payloads from req.body
app.use(cookieParser());

app.use("/api/v1/auth/user", authUser);


app.listen(8080, () => {
    console.log("app is listening on port 8080");
})