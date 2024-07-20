import React from "react";

function Main() {
  return (
    <div
      className="flex flex-col justify-center items-center gap-20 mt-3 p-3
    "
    >
      <p class="text-gray-400 tracking-wider sm:text-xl  lg:relative md:left-96">
        بازار جهانی توکن‌های غیرمثلی بر بستر بلاکچین پلیگان
      </p>
      {/* lg: */}

      <div className="lg:flex md:justify-between lg:w-5/6 lg:-mt-16">
        <h1
          class="w-full flex justify-center gap-2 
          lg:gap-1 lg:justify-start lg:p-10 
        "
          data-aos-duration="500"
          data-aos="fade-up"
        >
          <span class="text-2xl text-white font-bold sm:text-5xl lg:text-5xl lg:text-nowrap">
            دنیای NFT های
          </span>
          <span class="text-2xl text-orange-600 font-bold sm:text-6xl lg:text-5xl lg:text-nowrap">
            شگفت انگیز
          </span>
        </h1>

        <div class="flex justify-center flex-col items-center">
          <img
            src="img/header_img.png"
            class="relative"
            alt=""
            data-aos="fade-down"
            data-aos-duration="500"
          />
          <div
            class="backdrop-blur-sm bg-white/5 p-2 flex justify-around items-center rounded-xl w-3/4 absolute bottom-10 my-10
            md:bottom-36
          lg:bottom-32 lg:right-auto lg:ml-32 lg:w-1/6 
          "
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <img src="img/Group 117.png" alt="" />
            <div class="text-light fw-bold">
              <span class="fs-5 text-white font-bold">+500</span>
              <span class="fs-5 text-white font-bold">هنرمند</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center flex-col gap-10 lg:w-1/2 lg:absolute mt-20 sm:mt-5 lg:mt-48 lg:right-16 lg:gap-20 ">
        <p
          class="text-gray-500 tracking-wider m-1 sm:text-xl text-center sm:font-bold sm:m-1 sm:-mt-24 lg:hidden xl:block"
          data-aos-duration="500"
          data-aos="fade-up"
        >
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است
        </p>
        <div className="lg:flex items-center gap-5">
          <div
            className="hidden lg:flex border-2 border-red-500 text-white font-bold   rounded-full text-xl items-center p-4 -mt-5"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <button className="w-10">
              <img src="img/searchnormal1.png" alt="" />
            </button>
            <input
              type="text"
              placeholder="جستجو NFT ها و هنرمندان"
              className="bg-transparent focus-visible:outline-none"
            />
          </div>
          <button
            className="bg-gradient-to-r from-purple-700 to-orange-700 p-4 rounded-lg text-white font-bold sm:px-20 sm:text-xl sm:-mt-5 lg:rounded-full lg:text-nowrap"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            دریافت مشاوره رایگان
          </button>
        </div>
      </div>
    </div>
  );
}

export default Main;
