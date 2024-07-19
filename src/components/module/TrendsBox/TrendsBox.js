/* eslint-disable react/no-unescaped-entities */
import React from "react";

function TrendsBox({ img, creator }) {
  return (
    <div
      class="w-full sm:w-1/2 md:w-1/3"
      data-aos="fade-up"
      // data-aos-duration="500"
    >
      <div class="box_trends flex flex-col justify-center items-center p-4">
        <div class="text-center items-center relative">
          <img src={img} class="rounded-2xl w-64 sm:w-80 2xl:w-96" alt="" />
        </div>

        <div class="bg-gray-custom w-full -mt-16 rounded-xl px-3 pb-8">
          <h5 class="text-white pt-20 text-end 2xl:text-2xl">D'EVOLs</h5>
          <div class="text-white 2xl:text-2xl flex justify-between items-center mt-1">
            <div className="flex items-center gap-3">
              <span>2,78 ETH</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="34"
                viewBox="0 0 21 34"
                fill="none"
              >
                <g clip-path="url(#clip0_150_155)">
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
              <span class="fs-5 ">By {creator}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrendsBox;
