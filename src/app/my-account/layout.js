/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import Navbar from "@/components/templates/user-panel/Navbar";
import React from "react";
import Header from "@/components/templates/user-panel/Header";
import GetData from "@/components/module/GetData/GetData";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

function page({ children }) {
  const { user, isLogin, isloading } = useSelector((state) => state.user);
  const router = useRouter();

  if (isloading) {
    return <loading />;
  }
  
  if (!isLogin) {
    router.replace("/");
  }

  return (
    <>
      <Navbar />
      <div className="md:flex md:justify-end">
        <div className="md:flex md:flex-col md:w-2/3 xl:w-4/5">
          <Header />
          <GetData />
          {children}
        </div>
      </div>
    </>
  );
}

export default page;
