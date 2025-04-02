import mongoose, { Schema, Document, Model } from "mongoose";
import { ObjectId } from "mongodb";

interface IOrder extends Document {
  user: ObjectId;
  product: ObjectId;
}

const OrderSchema: Schema<IOrder> = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const OrderModel: Model<IOrder> = mongoose.models.Order || mongoose.model<IOrder>("Order", OrderSchema);

export default OrderModel;