const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const MONGO_URI = process.env.MONGO_URI;

const dbConnect = async ()=>{
    try {
        await mongoose.connect(MONGO_URI);
        console.log("MONGODB connected");
    } catch (error) {
        console.log("Database connection failed:", error.message);
    }
}  





module.exports=dbConnect;