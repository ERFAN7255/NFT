// import fs from "fs";
import { writeFile } from "fs/promises";
import ProductModel from "../../../../models/Product";
import connectToDB from "../../../../configs/db";
import path from "path";

export async function POST(req) {
  try {
    connectToDB();
    const formData = await req.formData();
    const name = formData.get("name");
    const price = formData.get("price");
    const img = formData.get("img");

    const buffer = Buffer.from(await img.arrayBuffer());
    const filename = Date.now() + img.name;
    const imgPath = path.join(process.cwd(), "public/uploads/" + filename);

    await writeFile(imgPath, buffer);

    const product = await ProductModel.create({
      name,
      price,
      img: `http://localhost:3000/uploads/${filename}`,
    });

    console.log("product =>", product);

    return Response.json(
      { message: "Product created successfully :))", data: product },
      { status: 201 }
    );
  } catch (err) {
    return Response.json({ message: err }, { status: 500 });
  }
}

export async function GET() {
  const products = await ProductModel.find({}, "-__v");
  return Response.json(products);
}
