const mongoose = require("mongoose");

const connectDatabase = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/test')
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.log(`Unable to connect Database ${error.message}`);
    }
}

module.exports = connectDatabase;