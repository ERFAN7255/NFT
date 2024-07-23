import { hideNavbar, showNavbar } from "@/Redux/Slices/iShowUserPanelNavbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Navbar() {
  const dispatch = useDispatch();
  const isShowNavbar = useSelector(
    (state) => state.isShowUserPanelNavbar.isShowNavbar
  );

  console.log(isShowNavbar);

  return (
    <>
      {isShowNavbar && (
        <div
          className={`bg-blue-950 w-3/5 fixed h-screen z-50 top-0 bottom-0`}
          data-aos="fade-left"
        >
          <div className="flex gap-4 items-center pt-5">
            <div className="">
              <Image
                src="/img/header_img.png"
                width={100}
                height={100}
                alt=""
              />
            </div>
            <div className="flex items-center gap-3 flex-col">
              <h1 className="text-xl font-bold text-white">IRAN NFT</h1>
              <h4 className="text-xs text-white">Create By ERFAN.NB</h4>
            </div>
          </div>

          <div className="pt-10">
            <ul className="flex flex-col gap-6 p-4">
              <li className="flex gap-2 p-2 rounded-xl text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
                پیشخوان
              </li>
              <li className="flex gap-2 p-2 justify-between rounded-xl text-white">
                <div className="flex gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 relative"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    />
                  </svg>
                  سبد خرید
                </div>
                <span className=" bg-red-600 flex items-center justify-center text-center w-4 h-4 rounded-full text-white p-3">
                  0
                </span>
              </li>
              <Link
                href={"/user-panel/UserDetails"}
                className="flex gap-2 p-2 rounded-xl text-white bg-purple-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
                جزییات حساب
              </Link>
              <li className="flex gap-2 border-2 border-red-600 p-2 rounded-xl text-red-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
                  />
                </svg>
                خروج
              </li>
            </ul>
          </div>

          <div className="flex justify-end mt-28 items-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="size-16 bg-purple-900 rounded-r-full p-2"
              onClick={() => dispatch(hideNavbar(false))}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>
      )}

      {/* MD : */}

      <div
        className={`hidden md:block bg-blue-950 w-3/5 md:w-1/3 xl:w-1/5`}
        data-aos="fade-left"
      >
        <div className="flex justify-center gap-4 items-center pt-5 lg:gap-6">
          <div>
            <Image src="/img/header_img.png" width={120} height={120} />
          </div>
          <div className="flex justify-center items-center gap-3 flex-col">
            <h1 className="text-xl font-bold text-white">IRAN NFT</h1>
            <h4 className="text-xs text-white">Create By ERFAN.NB</h4>
          </div>
        </div>

        <div className="pt-10">
          <ul className="flex flex-col gap-6 p-4">
            <li className="flex gap-2 p-2 rounded-xl text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              پیشخوان
            </li>
            <li className="flex gap-2 p-2 justify-between rounded-xl text-white">
              <div className="flex gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 relative"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
                سبد خرید
              </div>
              <span className=" bg-red-600 flex items-center justify-center text-center w-4 h-4 rounded-full text-white p-3">
                0
              </span>
            </li>
            <Link
              href={"/user-panel/UserDetails"}
              className="flex gap-2 p-2 rounded-xl bg-purple-600 text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
              جزییات حساب
            </Link>
            <li className="flex gap-2 border-2 border-red-600 p-2 rounded-xl text-red-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
                />
              </svg>
              خروج
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
