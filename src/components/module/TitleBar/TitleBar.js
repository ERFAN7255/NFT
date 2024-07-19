import React from "react";

function TitleBar({ titleFA, titleEN, icon }) {
  return (
    <div class="flex items-center justify-between my-10" data-aos="fade-left">
      <div class="flex gap-2 flex-1 items-center p-2 gap-x-4">
        <div class="bg-gradient-to-r from-purple-700 to-orange-700 p-2 rounded-full">
          <img className="w-10 md:w-16 p-2 sm:p-4" src={icon} alt="Wallet" />
        </div>

        <div class="flex flex-col gap-2">
          <h5 class="text-white text-nowrap sm:text-2xl md:text-3xl">
            {titleFA}
          </h5>
          <span class="text-gray-600 sm:text-xl md:text-2xl">{titleEN}</span>
        </div>
      </div>

      <div class="flex-1 p-2">
        <a href="#" className="flex justify-end items-center gap-1 ">
          <span class="text-white">مشاهده همه</span>
          <img src="img/arrowleft.png" class="w-6" alt="" />
        </a>
      </div>
    </div>
  );
}

export default TitleBar;
