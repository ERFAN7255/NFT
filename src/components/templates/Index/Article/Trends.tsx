import TrendsBox from "@/components/module/TrendsBox/TrendsBox";
import React from "react";
import ProductModel from "../../../../../models/Product";

interface Product {
  _id: string;
  name: string;
  price: number;
  img: string;
}

async function Trends() {
  const products: Product[] = await ProductModel.find({}, "-__v");

  return (
    <div className="flex flex-col gap-10 sm:flex-row sm:flex-wrap sm:gap-0">
      {products.slice(3, 6).map((product) => (
        <TrendsBox
          key={product._id}
          creator={"ERFAN"}
          img={product.img}
          title={product.name}
          price={product.price}
          productID={product._id}
        />
      ))}
    </div>
  );
}

export default Trends;