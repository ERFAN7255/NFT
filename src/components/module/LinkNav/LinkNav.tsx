"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";

interface LinkNavProps {
  href: string;
  children: ReactNode;
}

function LinkNav({ href, children }: LinkNavProps) {
  const pathname = usePathname();
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