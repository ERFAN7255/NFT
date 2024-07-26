const mongoose = require("mongoose");
import UserModel from "./User";

const schema = mongoose.Schema({
  name: {
    type: String,
    requierd: true,
  },
  price: {
    type: Number,
    requierd: true,
  },
  img: {
    type: String,
    requierd: true,
  },
});

const model = mongoose.models.Product || mongoose.model("Product", schema);

export default model;
