"use client";
import React, { useState } from "react";
import { TiHomeOutline } from "react-icons/ti";

function Header() {
  const [isShowModal, setIsShowModal] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      <div className="flex flex-row justify-between items-center p-5 lg:justify-evenly lg:p-10 relative">
        {isShowModal ? (
          <button
            className="md:hidden animate-bounce"
            onClick={() => setIsShowModal(false)}
            data-aos="fade-down"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        ) : (
          <button
            className="md:hidden animate-pulse"
            data-aos="fade-down"
            onClick={() => setIsShowModal(true)}
          >
            <img src="img/navbar-toggler-icon.png" alt="" />
          </button>
        )}

        <a href="#" className="text-3xl md:text-4xl font-bold text-white">
          Iran NFT
        </a>

        <div class="hidden md:flex  justify-between gap-24 lg:gap-10 xl:gap-40 h-15 items-center">
          <ul class="flex gap-5  lg:gap-10">
            <li class="md:text-nowrap lg:text-nowrap lg:text-xl font-bold text-gray-400">
              <a href="#" class="">
                صفحه اصلی
              </a>
            </li>
            <li class="md:text-nowrap lg:text-nowrap lg:text-xl font-bold text-gray-400">
              <a href="#" class="">
                آموزش NFT{" "}
              </a>
            </li>
            <li class="md:text-nowrap lg:text-nowrap lg:text-xl font-bold text-gray-400">
              <a href="#" class="">
                گالری NFT ایرانی
              </a>
            </li>
            <li class="md:text-nowrap lg:text-nowrap lg:text-xl font-bold text-gray-400">
              <a href="#" class="">
                تبلیغ NFT{" "}
              </a>
            </li>
          </ul>
          <div className="flex items-center gap-3">
            <a href="#">
              <img src="img/shoppingcart.png" alt="" />
            </a>
            <a
              href="#"
              class="flex justify-between bg-orange-500 p-2 text-xs lg:text-sm lg:p-4 rounded gap-1 font-bold text-white items-center"
            >
              <img src="img/user.png" alt="" />
              ورود / ثبت نام
            </a>
          </div>
        </div>

        <div class="flex items-center md:hidden">
          <a href="#" class="me-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="size-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </a>
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="size-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          </a>
        </div>
      </div>
      {isShowModal && (
        <div
          class="md:hidden bg-gray-custom rounded-xl  p-2 top-16 flex flex-col gap-5 transition-all ease-linear duration-200 m-3"
          data-aos="fade-down"
          id="navbarNav"
        >
          <ul class="flex flex-col w-72 justify-center gap-5">
            {isLogin ? (
              <li class="nav-item">
                <a
                  href="#"
                  class="flex gap-3 items-center text-orange-500 font-bold"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-8  animate-bounce"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                    />
                  </svg>
                  سبد خرید
                </a>
              </li>
            ) : (
              <li class="">
                <a
                  href="#"
                  class="flex gap-3 items-center font-bold text-green-500 animate-pulse"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  </svg>
                  ورود / ثبت نام
                </a>
              </li>
            )}

            <li class="flex gap-3 items-center">
              <a
                href="#"
                class="flex gap-3 items-center text-blue-600 font-bold"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
                صفحه اصلی
              </a>
            </li>

            {/* start LogOut */}
            {isLogin && (
              <li class="flex gap-3 items-center animate-pulse">
                <a
                  href="#"
                  class="flex gap-3 items-center text-red-600 font-bold"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
                    />
                  </svg>
                  خروج{" "}
                </a>
              </li>
            )}
            {/* end LogOut */}
          </ul>
        </div>
      )}
    </>
  );
}

export default Header;
