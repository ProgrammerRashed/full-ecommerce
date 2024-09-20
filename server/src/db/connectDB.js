import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const uri = process.env.DATABASE_LOCAL;
    await mongoose.connect(uri);
    console.log("Database connected");
  } catch (err) {
    console.error("Database connection error:", err);
  }
};
