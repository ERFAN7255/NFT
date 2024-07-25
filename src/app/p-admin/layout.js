"use client";
import Navbar from "@/components/templates/admin-panel/Navbar";
import React, { useEffect, useState } from "react";
import Header from "@/components/templates/admin-panel/Header";
import { Provider } from "react-redux";
import { store } from "@/Redux/store";

function page({ children }) {
  return (
    <Provider store={store}>
      <Navbar />
      <div className="md:flex md:justify-end">
        <div className="md:flex md:flex-col md:w-2/3 xl:w-4/5">
          <Header />
          <h1 className="text-white mt-5 mr-5 mb-2 lg:text-2xl">
            عرفان نبوره عزیز؛ خوش اومدی 🙌
          </h1>
          {children}
        </div>
      </div>
    </Provider>
  );
}

export default page;
