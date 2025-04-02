"use client";
import Navbar from "@/components/templates/user-panel/Navbar";
import React, { ReactNode } from "react";
import Header from "@/components/templates/user-panel/Header";
import GetData from "@/components/module/GetData/GetData";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/Redux/store";
import Loading from "../loading";

interface LayoutProps {
  children: ReactNode;
}

const Page: React.FC<LayoutProps> = ({ children }) => {
  const { isLogin, isLoading } = useSelector(
    (state: RootState) => state.user
  );
  const router = useRouter();

  // if (isLoading) {
  //   return <Loading />;
  // }

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
};

export default Page;
