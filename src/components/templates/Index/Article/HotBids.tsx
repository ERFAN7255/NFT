import HotBidBox from "@/components/module/HotBidBox/HotBidBox";
import React from "react";
import ProductModel from "../../../../../models/Product";

interface Product {
  _id: string;
  name: string;
  price: number;
  img: string;
}

async function HotBids() {
  const products: Product[] = await ProductModel.find({}, "-__v");

  const getRandomProductsFromArray = (arr: Product[], randomCount: number): Product[] => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, randomCount);
  };

  return (
    <div className="flex flex-col sm:flex-row sm:flex-wrap">
      {getRandomProductsFromArray(products, 3).map((product) => (
        <HotBidBox
          key={product._id}
          title={product.name}
          creator={"ERFAN"}
          price={product.price}
          productID={product._id}
          img={product.img}
        />
      ))}
    </div>
  );
}

export default HotBids;