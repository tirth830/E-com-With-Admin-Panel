import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('MongoDB connected successfully ✅');
  } catch (err) {
    console.error('MongoDB Connection Failed ❌:', err);
    process.exit(1);
  }
};

export default connectDB;
