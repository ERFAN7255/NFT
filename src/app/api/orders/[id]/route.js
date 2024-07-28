import connectToDB from "../../../../../configs/db";
import OrderModel from "../../../../../models/Order";

export async function GET(req, { params }) {
  try {
    connectToDB();
    const userID = params.id;
    console.log("params =>", params.id);

    const orders = await OrderModel.find({ user: userID }).populate("product");

    return Response.json(orders, { status: 200 });
  } catch (error) {
    return Response.json({ message: error }, { status: 500 });
  }
}
