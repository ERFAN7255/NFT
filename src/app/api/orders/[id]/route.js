import connectToDB from "../../../../../configs/db";
import OrderModel from "../../../../../models/Order";

export async function GET(req, { params }) {
  try {
    connectToDB();
    const userID = params.id;

    const orders = await OrderModel.find({ user: userID }).populate("product");
    console.log("orders =>", orders);
    return Response.json(orders, { status: 200 });
  } catch (error) {
    return Response.json({ message: error }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    connectToDB();
    const body = await req.json();
    const { userID } = body;
    const productID = params.id;

    await OrderModel.findOneAndDelete({
      user: userID,
      product: productID,
    });

    return Response.json(
      { message: "delete product from orderList successfully :))" },
      { status: 201 }
    );
  } catch (error) {
    return Response.json({ message: err }, { status: 500 });
  }
}
