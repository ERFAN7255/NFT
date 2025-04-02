"use client";
import React from "react";
import swal from "sweetalert2";

function page() {
  return (
    <div className="p-6 xl:px-40 w-full flex flex-col justify-center">
      <table className="border-2 border-black">
        <thead>
          <tr>
            <th className="border-2 lg:text-xl xl:text-2xl border-purple-600 text-center p-2 md:p-2 text-purple-400">
              تعداد
            </th>
            <th className="border-2 lg:text-xl xl:text-2xl border-purple-600 text-center text-purple-400">
              نام
            </th>
            <th className="border-2 lg:text-xl xl:text-2xl border-purple-600 p-4 md:p-2 text-center text-blue-400">
              پیام
            </th>
            <th className="border-2 lg:text-xl xl:text-2xl border-purple-600 p-4 md:p-2 text-center text-red-500">
              حذف
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-2 lg:text-xl xl:text-2xl border-purple-600 md:p-2 text-center text-white">
              1
            </td>
            <td className="border-2 lg:text-xl xl:text-2xl border-purple-600 p-2 md:p-2 text-center text-white">
              ERFAN725
            </td>
            <td className="border-2 lg:text-xl xl:text-2xl border-purple-600 p-3 md:p-2 text-center text-white">
              <button
                className="bg-blue-500 rounded-md text-white p-2 md:p-3 md:px-3 lg:px-5 lg:p-2"
                onClick={() =>
                  swal.fire({
                    title: "صبر کن بچه جان سایت هنوز کامل نشده 🤨",
                    icon: "warning",
                    confirmButtonText: "چشم",
                  })
                }
              >
                دیدن پیام
              </button>
            </td>
            <td className="border-2 lg:text-xl xl:text-2xl border-purple-600 p-2 md:p-2 text-center">
              <button
                className="btn-danger text-white p-2 md:p-3 md:px-3 lg:px-5 lg:p-2"
                onClick={() =>
                  swal.fire({
                    title: "صبر کن بچه جان سایت هنوز کامل نشده 🤨",
                    icon: "warning",
                    confirmButtonText: "چشم",
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
