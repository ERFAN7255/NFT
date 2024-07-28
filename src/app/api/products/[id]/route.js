import connectToDB from "../../../../../configs/db";
import ProductModel from "../../../../../models/Product";

export async function GET(req, { params }) {
  try {
    connectToDB();
    const productID = params.id;

    const product = await ProductModel.findOne({ _id: productID });

    return Response.json(product, { status: 200 });
  } catch (error) {
    return Response.json({ message: error }, { status: 500 });
  }
}
