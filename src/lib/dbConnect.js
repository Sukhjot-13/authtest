import mongoose from "mongoose";

const connectDB = async () => {
  if (mongoose.connections[0].readyState) {
    console.log("db already connected");
    return;
  }
  await mongoose.connect(process.env.MONGO_URI, {});
  console.log("db connected");
};

module.exports = connectDB;
