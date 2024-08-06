import HotBidBox from "@/components/module/HotBidBox/HotBidBox";
import React from "react";
import ProductModel from "../../../../../models/Product";

async function HotBids() {
  const products = await ProductModel.find({}, "-__v");

  const getRandomProductsFromArray = (arr, randomCount) => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, randomCount);
  };

  return (
    <div className="flex flex-col sm:flex-row sm:flex-wrap">
      {getRandomProductsFromArray(products, 3).map((product) => (
        <>
          <HotBidBox
            title={product.name}
            creator={"ERFAN"}
            price={product.price}
            productID={product._id}
            img={product.img}
          />
        </>
      ))}
    </div>
  );
}

export default HotBids;
