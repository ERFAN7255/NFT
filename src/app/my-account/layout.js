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
  const dispatch = useDispatch();
  const router = useRouter();

  const getUserInfo = async () => {
    const res = await fetch("/api/auth/me");
    if (res.status === 200) {
      const data = await res.json();
      dispatch(me(data));
    } else {
      router.replace("/login-register");
    }
  };

  useEffect(() => {
    getUserInfo();
  }, [getUserInfo]);

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
