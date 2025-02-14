import mongoose from "mongoose";

const connectToMongoDB = async(uri) =>{
    try {
        await mongoose.connect(uri);
        console.log("connected to mongodb")
    } catch (error) {
        console.log("Error connecting to mongodb-->", error);
    }
}

export {connectToMongoDB};