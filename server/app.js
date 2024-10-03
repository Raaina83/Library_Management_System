import express from 'express'
import connectToDB from './connectionMongoDB/connect.js';
import dotenv from "dotenv";

dotenv.config();

const app = express();

connectToDB(process.env.MONGO_URI);

app.listen(8080, () => {
    console.log("app is listening on port 8080");
})