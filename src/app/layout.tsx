import React, { ReactNode } from "react";
import "./../styles/globals.css";
import AOSInit from "@/utils/aos";
import ReduxProvider from "@/Redux/Provider/ReduxProvider";
import GetData from "@/components/module/GetData/GetData";

export const metadata = {
  title: "NFT by ERFAN",
  openGraph: {
    title: "NFT",
    description: "NFT Project created by ERFAN.NB",
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <ReduxProvider>
      <html lang="en" dir="rtl">
        <head>
          <link rel="shortcut icon" href="img/header_img.png" />
        </head>
        <body>
          <AOSInit />
          <GetData />
          {children}
        </body>
      </html>
    </ReduxProvider>
  );
}
