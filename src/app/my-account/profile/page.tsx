"use client";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/Redux/store";

const Page: React.FC = () => {
  const user = useSelector((state: RootState) => state.user.user);

  return (
    <>
      <h1 className="text-white mt-5 mr-5 mb-2 lg:text-2xl">
        {user.name} عزیز ؛ خوش اومدی 🙌
      </h1>
      <div className="p-6 xl:px-40 2xl:h-screen">
        <div className="bg-gray-custom p-6 rounded-2xl">
          <div className="border-b-2 border-gray-600 pb-4">
            <h1 className="text-white">جزییات حساب کاربری</h1>
          </div>
          <div className="p-4 flex flex-col justify-center items-center gap-6 mt-4">
            <div className="w-full flex flex-col gap-3">
              <h1 className="text-white flex justify-start">شماره موبایل</h1>
              <input
                type="text"
                className="bg-gray-600 rounded-xl p-2 text-white text-end overflow-hidden scroll-m-0 px-5 focus-within:outline-none"
                value={user.phone!}
              />
            </div>
            <div className="w-full flex flex-col gap-3 mb-4">
              <h1 className="text-white flex justify-start">نام و نام خانوادگی</h1>
              <input
                type="text"
                className="bg-gray-600 rounded-xl p-2 text-white text-start overflow-hidden scroll-m-0 px-5 focus-within:outline-none"
                value={user.name!}
              />
            </div>
            <div className="w-full flex flex-col gap-3 mb-4">
              <h1 className="text-white flex justify-start">نام کاربری</h1>
              <input
                type="text"
                className="bg-gray-600 rounded-xl p-2 text-white text-start overflow-hidden scroll-m-0 px-5 focus-within:outline-none"
                value={user.username!}
              />
            </div>
            <div className="w-full flex flex-col gap-3 mb-4">
              <h1 className="text-white flex justify-start">ایمیل</h1>
              <input
                type="email"
                className="bg-gray-600 rounded-xl p-2 text-white text-start overflow-hidden scroll-m-0 px-5 focus-within:outline-none"
                value={user.email!}
              />
            </div>
            <button className="bg-purple-700 py-3 text-xl rounded-xl w-full text-white">
              ثبت اطلاعات
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;