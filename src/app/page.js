import Header from "@/components/module/Header/Header";
import Article from "@/components/templates/Index/Article/Article";
import Main from "@/components/templates/Index/Main";
import React from "react";
import { useSelector } from "react-redux";

export default function Home() {
  return (
    <>
      <Header />
      <Main />
      <Article />
    </>
  );
}
