import Link from "next/link";
import React from "react";

function HotBidBox({ title, creator, img, price, productID }) {
  return (
    <div
      class="p-4  w-full sm:w-1/2 md:1/3 md:w-1/3"
      data-aos="zoom-in-down"
      data-aos-duration="500"
    >
      <div className="p-3 w-full bg-gray-custom rounded-3xl flex flex-col md:h-full">
        <div class=" flex justify-end relative">
          <Link href={`/productDetails/${productID}`}>
            <img src={img} alt="" class="rounded-4 md:w-96" />
          </Link>
          <div class="absolute flex gap-2 left-5 top-3 justify-center items-center">
            <div class="backdrop-blur-sm bg-black/55 px-4 py-2 text-xs font-bold rounded-full fw-bold gap-2 flex justify-center items-center text-white lg:text-xl">
              <span>8s</span>
              <span>34m</span>
              <span>2h</span>
            </div>
            <div class="d-flex align-items-center justify-content-center hearet_icon_hot_bids rounded-circle">
              <img src="img/heart.png" alt="" />
            </div>
          </div>
        </div>

        <div class="">
          <div class="text-end mt-3">
            <h5 class="text-white font-bold md:text-xs lg:text-xl 2xl:text-2xl">
              {title}
            </h5>
            <p class="text-white my-3 md:text-xs lg:text-xl 2xl:text-2xl">
              By {creator}
            </p>
          </div>
          <div class="flex justify-between items-center">
            <div>
              <span class="text-white md:text-xs 2xl:text-2xl">
                آخرین پیشنهاد
              </span>
            </div>
            <div className="flex gap-2 items-center">
              <span class="text-white md:text-xs lg:text-xl 2xl:text-2xl">
                {price} ETH
              </span>
              <img src="img/Vector (2).png" alt="" />
            </div>
          </div>
          <div class="mt-4">
            <Link
              href={`/productDetails/${productID}`}
              class="bg-gradient-to-r from-purple-700 to-orange-700 text-center py-2 px-4  font-bold rounded-2xl block text-white"
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
