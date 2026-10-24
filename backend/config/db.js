const mongoose = require("mongoose")

const connectingMongo = async (req, res) => {
    
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/NOTATODO");
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.log("FAILED TO CONNECT MONOGdb");
        process.exit(1);
    }

}

module.exports = connectingMongo;