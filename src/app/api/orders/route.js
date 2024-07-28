import OrderModel from "../../../../models/Order";
import connectToDB from "../../../../configs/db";

export async function POST(req) {
  try {
    connectToDB();
    const body = await req.json();
    const { user, product } = body;

    const order = await OrderModel.findOne({ user, product });

    if (!order) {
      await OrderModel.create({ user, product });
    }

    return Response.json(
      { message: "Product Add to orderlist succesfully" },
      { status: 201 }
    );
  } catch (error) {
    return Response.json({ message: error }, { status: 500 });
  }
}


