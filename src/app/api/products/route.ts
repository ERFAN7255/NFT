import { writeFile } from "fs/promises";
import ProductModel from "../../../../models/Product";
import connectToDB from "../../../../configs/db";
import path from "path";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    await connectToDB();
    const formData = await req.formData();
    const name = formData.get("name") as string;
    const price = formData.get("price") as string;
    const img = formData.get("img") as File;

    if (!name || !price || !img) {
      return NextResponse.json(
        { message: "All fields are required!" },
        { status: 400 }
      );
    }

    const buffer = Buffer.from(await img.arrayBuffer());
    const filename = Date.now() + "-" + img.name;
    const imgPath = path.join(process.cwd(), "public/uploads/" + filename);

    await writeFile(imgPath, buffer);

    const product = await ProductModel.create({
      name,
      price: parseFloat(price),
      img: `/uploads/${filename}`,
    });

    return NextResponse.json(
      { message: "Product created successfully :))", data: product },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json(
      { message: "An error occurred", error: String(err) },
      { status: 500 }
    );
  }
}

export async function GET(): Promise<NextResponse> {
  try {
    await connectToDB();
    const products = await ProductModel.find({}, "-__v");
    return NextResponse.json(products, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { message: "An error occurred", error: String(err) },
      { status: 500 }
    );
  }
}