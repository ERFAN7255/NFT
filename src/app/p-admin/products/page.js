"use client";
import Image from "next/image";
import React from "react";
import swal from "sweetalert";

function page() {
  return (
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
    </div>
  );
}

export default page;
