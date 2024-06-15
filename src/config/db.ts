// src/config/db.ts
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI!, {
            // useNewUrlParser and useUnifiedTopology are not needed anymore
            // You can specify other options if needed, for example:
            serverSelectionTimeoutMS: 5000, 
            socketTimeoutMS: 45000, 
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

export default connectDB;
