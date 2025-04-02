import mongoose from "mongoose";

const connectToDB = async (): Promise<boolean | typeof mongoose> => {
  try {
    if (mongoose.connections[0].readyState) {
      return true;
    } else {
      return await mongoose.connect(process.env.MONGO_URL as string);
    }
  } catch (error) {
    console.error("db error =>", error);
    throw new Error("Database connection failed");
  }
};

export default connectToDB;