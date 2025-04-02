import connectToDB from "../../../../../configs/db";
import ProductModel from "../../../../../models/Product";
import { NextRequest, NextResponse } from "next/server";

interface Params {
  params: {
    id: string;
  };
}

export async function GET(req: NextRequest, { params }: Params): Promise<NextResponse> {
  try {
    await connectToDB();
    const productID = params.id;

    const product = await ProductModel.findOne({ _id: productID });

    if (!product) {
      return NextResponse.json({ message: "Product not found" }, { status: 404 });
    }

    return NextResponse.json(product, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: String(error) }, { status: 500 });
  }
}