/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import React from "react";

function TrendsBox({ img, creator, title, price, productID }) {
  return (
    <Link
      href={`productDetails/${productID}`}
      className="w-full sm:w-1/2 md:w-1/3"
      data-aos="fade-up"
      data-aos-duration="500"
    >
      <div className="box_trends flex flex-col justify-center items-center p-4">
        <div className="text-center items-center relative">
          <img src={img} className="rounded-2xl w-64 sm:w-80 2xl:w-96" alt="" />
        </div>

        <div className="bg-gray-custom w-full -mt-16 rounded-xl px-3 pb-8">
          <h5 className="text-white pt-20 text-end 2xl:text-2xl">{title}</h5>
          <div className="text-white 2xl:text-2xl flex justify-between items-center mt-1">
            <div className="flex items-center gap-3">
              <span>{price} ETH</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="34"
                viewBox="0 0 21 34"
                fill="none"
              >
                <g clipPath="url(#clip0_150_155)">
                  <path
                    d="M20.4683 17.115L10.4999 23.205L0.524902 17.115L10.4999 0L20.4683 17.115ZM10.4999 25.1606L0.524902 19.0706L10.4999 33.6L20.4749 19.0706L10.4999 25.1606Z"
                    fill="#FFBF1C"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_150_155">
                    <rect width="21" height="33.6" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="">
              <span className="fs-5 ">By {creator}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default TrendsBox;
