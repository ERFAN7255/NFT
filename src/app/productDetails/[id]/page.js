/* eslint-disable @next/next/no-img-element */
import Footer from "@/components/module/Footer/Footer";
import Header from "@/components/module/Header/Header";
import Image from "next/image";
import React from "react";

function page() {
  return (
    <>
      <Header />

      <div className="bg-gray-custom w-full flex flex-col p-4 gap-8 sm:flex-row md:justify-around">
        <div className="">
          <Image
            className="rounded-none w-full"
            src={"/img/image 5 (3).png"}
            width={500}
            height={500}
          />
        </div>

        <div className="flex flex-col gap-10 sm:gap-0 sm:w-1/2 justify-around items-center">
          <div className="details flex flex-col gap-5 w-full lg:items-center">
            <div className="flex items-center w-1/2 sm:w-4/5 justify-between">
              <div className="flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="red"
                  className="size-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z"
                  />
                </svg>
                <h1 className="text-red-600 lg:text-2xl">نام :</h1>
              </div>
              <h1 className="text-red-600 lg:text-2xl">Angry Ape</h1>
            </div>
            <div className="flex items-center w-1/2 sm:w-4/5 justify-between">
              <div className="flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="skyBlue"
                  className="size-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
                  />
                </svg>

                <h1 className="text-blue-200 lg:text-2xl">سازنده :</h1>
              </div>
              <h1 className="text-blue-200 lg:text-2xl">Farshad</h1>
            </div>
            <div className="flex items-center w-1/2 sm:w-4/5 justify-between">
              <div className="flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="green"
                  className="size-7 animate-pulse"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <h1 className="text-green-500 lg:text-2xl">قیمت :</h1>
              </div>
              <h1 className="text-green-500 lg:text-2xl">2,78 ETH</h1>
            </div>
          </div>

          <div className="flex animate-pulse justify-center w-full sm:w-4/5 lg:w-full xl:w-3/4">
            <button className="icon_footer_instagram border-2 text-white p-4 w-1/2 sm:w-4/5 lg:w-1/2 rounded-xl transition-all duration-500 hover:w-full lg:text-xl">
              افزودن به سبد خرید
            </button>
            {/* you own this car */}
            <h1 className="hidden p-4 bg-purple-950 text-purple-200 text-center border-2 border-purple-500 w-1/2 sm:w-4/5 lg:w-1/2 rounded-xl transition-all duration-500 hover:w-full">
              در سبد خرید شما موجود است.
            </h1>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default page;
