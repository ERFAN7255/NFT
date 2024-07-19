import React from "react";

function Header() {
  return (
    <div className="flex flex-row justify-between items-center p-5 lg:justify-evenly lg:p-10">
      <button className="md:hidden">
        <img src="img/navbar-toggler-icon.png" alt="" />
      </button>

      <a href="#" className="text-3xl md:text-4xl font-bold text-white">
        Iran NFT
      </a>

      <div class="hidden md:flex  justify-between gap-24 lg:gap-56 h-15 items-center">
        <ul class="flex gap-5  lg:gap-10">
          <li class="md:text-xs lg:text-xl font-bold text-gray-400">
            <a href="#" class="">
              صفحه اصلی
            </a>
          </li>
          <li class="md:text-xs lg:text-xl font-bold text-gray-400">
            <a href="#" class="">
              آموزش NFT{" "}
            </a>
          </li>
          <li class="md:text-xs lg:text-xl font-bold text-gray-400">
            <a href="#" class="">
              گالری NFT ایرانی
            </a>
          </li>
          <li class="md:text-xs lg:text-xl font-bold text-gray-400">
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
          <img src="img/search.png" alt="" />
        </a>
        <a href="#">
          <img src="img/user.png" alt="" />
        </a>
      </div>
    </div>
  );
}

export default Header;
