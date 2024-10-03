import mongoose from "mongoose";

async function connectToDB(uri) {
    await mongoose
        .connect(uri)
        .then((data) => console.log(data.connection.host))
        .catch(err => {
            console.log(err);
            throw err;
        });
}

export default connectToDB;