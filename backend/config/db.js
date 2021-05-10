require('dotenv').config();
const mongoose = require('mongoose');


const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://user-123:user-123@cluster0.cts00.mongodb.net/shop?retryWrites=true&w=majority', {
            userNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB connection SUCCESS');
    }catch(error){
        console.error("MongoDB connection FAIL");
        process.exit(1);
    }
}

module.exports = connectDB