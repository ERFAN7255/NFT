const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    if (mongoose.connections[0].readyState) {
      return true;
    } else {
      return mongoose.connect(process.env.MONGO_URL);
    }
  } catch (error) {
    console.log("db error => ", error);
  }
};

export default connectToDB;
