import Navbar from "@/components/templates/user-panel/Navbar";
import React, { ReactNode } from "react";
import Header from "@/components/templates/user-panel/Header";
import GetData from "@/components/module/GetData/GetData";

interface LayoutProps {
  children: ReactNode;
}

const Page: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="md:flex md:justify-end">
        <div className="md:flex md:flex-col md:w-2/3 xl:w-4/5">
          <Header />
          {children}
        </div>
      </div>
    </div>
  );
};

export default Page;
