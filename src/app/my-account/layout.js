/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import Navbar from "@/components/templates/user-panel/Navbar";
import React, { useEffect } from "react";
import Header from "@/components/templates/user-panel/Header";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { me } from "@/Redux/Slices/userSlice";

function page({ children }) {
  const user = useSelector((state) => state.user.user);
  if (user.isLogin) {
    router.replace("/");
  }

  return (
    <>
      <Navbar />
      <div className="md:flex md:justify-end">
        <div className="md:flex md:flex-col md:w-2/3 xl:w-4/5">
          <Header />
          {children}
        </div>
      </div>
    </>
  );
}

export default page;
