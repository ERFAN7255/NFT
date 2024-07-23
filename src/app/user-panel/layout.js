"use client";
import Navbar from "@/components/templates/user-panel/Navbar";
import React, { useEffect, useState } from "react";
import Header from "@/components/templates/user-panel/Header";
import { Provider } from "react-redux";
import { store } from "@/Redux/store";

function page({ children }) {
  return (
    <Provider store={store}>
      <div className="md:flex">
        <Navbar />
        <div className="md:flex md:flex-col md:w-2/3 xl:w-4/5">
          <Header />
          {children}
        </div>
      </div>
    </Provider>
  );
}

export default page;
