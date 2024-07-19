import React from "react";
import "./../styles/globals.css";
import AOSInit from "@/utils/aos";
import { Metadata } from "next";

// export const metadata = {
//   title: "NFT by ERFAN",
//   description: "NFT Project created by ERFAN.NB",
// };

export const metadata = {
  title: "NFT by ERFAN",
  openGraph: {
    title: "NFT",
    description: "NFT Project created by ERFAN.NB",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <head>
        <link rel="shortcut icon" href="img/header_img.png" />
      </head>
      <body>
        <AOSInit />
        {children}
      </body>
    </html>
  );
}
