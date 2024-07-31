"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function LinkNav({ href, children }) {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <Link
      href={href}
      className={`flex gap-2 p-2 rounded-xl text-white ${
        pathname === href ? "bg-purple-600" : ""
      }`}
    >
      {children}
    </Link>
  );
}

export default LinkNav;
