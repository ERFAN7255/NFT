/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import swal from "sweetalert";

function page() {
  const user = useSelector((state) => state.user.user);
  

  return (
    <>
      <h1 className="text-white mt-5 mr-5 mb-2 lg:text-2xl">
        {user.name} عزیز ؛ خوش اومدی 🙌
      </h1>
      <div className="p-6 xl:px-40 w-full flex flex-col justify-center">
        <table className="border-2 border-black">
          <thead>
            <tr>
              <th className="border-2 lg:text-xl xl:text-2xl border-purple-600 text-center text-orange-500">
                عکس
              </th>
              <th className="border-2 lg:text-xl xl:text-2xl border-purple-600 p-4 md:p-3 text-center text-blue-200">
                نام
              </th>
              <th className="border-2 lg:text-xl xl:text-2xl border-purple-600 p-4 md:p-3 text-center text-green-300">
                قیمت
              </th>
              <th className="border-2 lg:text-xl xl:text-2xl border-purple-600 p-4 md:p-3 text-center text-red-500">
                حذف
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-2  border-purple-600 p-2 md:p-2">
                <Image
                  src="/img/image 5 (3).png"
                  width={200}
                  height={200}
                  className="w-14 m-auto md:w-20"
                  alt=""
                />
              </td>
              <td className="border-2 lg:text-xl xl:text-2xl border-purple-600 p-2 md:p-3 text-center text-blue-400">
                Peter
              </td>
              <td className="border-2 lg:text-xl xl:text-2xl border-purple-600 px-2 py-6 md:p-3 text-center text-green-400">
                100,000 تومان
              </td>
              <td className="border-2 lg:text-xl xl:text-2xl border-purple-600 p-0 text-center">
                <button
                  className="btn-danger text-white p-2 md:p-3 md:px-3 lg:px-5 lg:p-3"
                  onClick={() =>
                    swal({
                      title: "صبر کن بچه جان سایت هنوز کامل نشده 🤨",
                      icon: "warning",
                      buttons: "چشم",
                    })
                  }
                >
                  حذف
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        {/* Button */}
        <div className="flex justify-center items-center py-10">
          <button
            onClick={() =>
              swal({
                title: "آخه تو پول داری بدبخت؟",
                icon: "warning",
                buttons: "نه ببخشید مزاحم شدم 😔",
              })
            }
            className="icon_footer_instagram px-4 w-1/2 text-nowrap md:w-3/5 lg:w-2/5 2xl:w-1/5 p-4 rounded-2xl text-white animate-pulse"
          >
            نهایی کردن سفارشات
          </button>
        </div>

        {/* no product */}
        {/* <div className="flex justify-center items-center bg-yellow-600 p-4 rounded-xl border-4 border-yellow-300">
        محصولی در سبد خرید شما موجود نمیباشد !!
      </div> */}
      </div>
    </>
  );
}

export default page;
