import connectToDB from "../../../../../configs/db";
import OrderModel from "../../../../../models/Order";
import ProductModel from "../../../../../models/Product";
import { NextRequest, NextResponse } from "next/server";

interface Params {
  params: {
    id: string;
  };
}

export async function GET(
  req: NextRequest,
  { params }: Params
): Promise<NextResponse> {
  try {
    await connectToDB();
    const userID = params.id;

    const orders = await OrderModel.find({ user: userID }).populate("product");
    return NextResponse.json(orders, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: String(error) }, { status: 500 });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: Params
): Promise<NextResponse> {
  try {
    await connectToDB();
    const body = await req.json();
    const { userID }: { userID: string } = body;
    const productID = params.id;

    await OrderModel.findOneAndDelete({
      user: userID,
      product: productID,
    });

    return NextResponse.json(
      { message: "Deleted product from order list successfully :))" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: String(error) }, { status: 500 });
  }
}
