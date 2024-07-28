/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import Navbar from "@/components/templates/user-panel/Navbar";
import React from "react";
import Header from "@/components/templates/user-panel/Header";

function page({ children }) {
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
