import Link from "next/link";
import React from "react";

function HotBidBox({ title, creator, img, price, productID }) {
  return (
    <div
      className="p-4  w-full sm:w-1/2 md:1/3 md:w-1/3"
      data-aos="zoom-in-down"
      data-aos-duration="500"
    >
      <div className="p-3 w-full bg-gray-custom rounded-3xl flex flex-col md:h-full">
        <div className=" flex justify-end relative">
          <Link href={`/productDetails/${productID}`} className="w-full">
            <img src={img} alt="" className="rounded-4 w-full" />
          </Link>
          <div className="absolute flex gap-2 left-5 top-3 justify-center items-center">
            <div className="backdrop-blur-sm bg-black/55 px-4 py-2 text-xs font-bold rounded-full fw-bold gap-2 flex justify-center items-center text-white lg:text-xl">
              <span>8s</span>
              <span>34m</span>
              <span>2h</span>
            </div>
            <div className="hearet_icon_hot_bids rounded-circle">
              <img src="img/heart.png" alt="" />
            </div>
          </div>
        </div>

        <div className="">
          <div className="text-end mt-3">
            <h5 className="text-white font-bold md:text-xs lg:text-xl 2xl:text-2xl">
              {title}
            </h5>
            <p className="text-white my-3 md:text-xs lg:text-xl 2xl:text-2xl">
              By {creator}
            </p>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <span className="text-white md:text-xs 2xl:text-2xl">
                آخرین پیشنهاد
              </span>
            </div>
            <div className="flex gap-2 items-center">
              <span className="text-white md:text-xs lg:text-xl 2xl:text-2xl">
                {price} ETH
              </span>
              <img src="img/Vector (2).png" alt="" />
            </div>
          </div>
          <div className="mt-4">
            <Link
              href={`/productDetails/${productID}`}
              className="bg-gradient-to-r from-purple-700 to-orange-700 text-center py-2 px-4  font-bold rounded-2xl block text-white"
            >
              پیشنهاد سریع
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotBidBox;
