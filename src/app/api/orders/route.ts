import OrderModel from "../../../../models/Order";
import connectToDB from "../../../../configs/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    await connectToDB();
    const body = await req.json();
    const { user, product }: { user: string; product: string } = body;

    const order = await OrderModel.findOne({ user, product });

    if (!order) {
      await OrderModel.create({ user, product });
    }

    return NextResponse.json(
      { message: "Product added to order list successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred", error: String(error) },
      { status: 500 }
    );
  }
}