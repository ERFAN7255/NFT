import { showNavbar } from "@/Redux/Slices/iShowUserPanelNavbar";
import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";

function Header() {
  const dispatch = useDispatch();
  console.log(dispatch(showNavbar()));
  return (
    <div className="flex justify-between items-center border-b-2 border-gray-700 p-2 px-4 ">
      <div className="flex gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="size-8 md:hidden"
          onClick={() => dispatch(showNavbar(true))}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
          />
        </svg>
        <h1 className="font-bold md:text-xl lg:text-2xl text-white">
          پنل ادمین
        </h1>
      </div>
      <div className="">
        <Image
          src="/img/header_img.png"
          width={70}
          height={70}
          quality={100}
          alt=""
        />
      </div>
    </div>
  );
}

export default Header;
