import { redirect } from "next/navigation";
import React from "react";

function page() {
  return (
    <div className="w-full p-6 flex flex-col lg:flex-row lg:flex-wrap gap-5">
      <div className="xl:w-1/4 bg-green-600 flex justify-start items-center gap-5 py-6 px-4 rounded-2xl">
        <div className="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="size-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
        </div>
        <div className="text flex flex-col items-start gap-2">
          <h3 className=" text-white">کاربران</h3>
          <h3 className="text-2xl text-white">10 کاربر</h3>
        </div>
      </div>
      <div className="xl:w-1/4 bg-blue-500 flex justify-start items-center gap-5 py-6 px-4 rounded-2xl">
        <div className="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="size-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
            />
          </svg>
        </div>
        <div className="text flex flex-col items-start gap-2">
          <h3 className=" text-white">ادمین ها</h3>
          <h3 className="text-2xl text-white">0 ادمین</h3>
        </div>
      </div>
      <div className="xl:w-1/4 bg-pink-700 flex justify-start items-center gap-5 py-6 px-4 rounded-2xl">
        <div className="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="size-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z"
            />
          </svg>
        </div>
        <div className="text flex flex-col items-start gap-2">
          <h3 className=" text-white">مجموع تیکت ها</h3>
          <h3 className="text-2xl text-white">6 تیکت</h3>
        </div>
      </div>
    </div>
  );
}

export default page;
