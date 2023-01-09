const mongoose = require('mongoose')

const dotenv = require('dotenv')
dotenv.config()

const url = process.env.MONGODB_URL

const db = async () => {
    try{
        await mongoose.connect(url)
        console.log('DB Connection established');
    } catch (err) {
        console.log("DB error", err);
    }
}

module.exports = db;
