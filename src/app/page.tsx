import Header from "@/components/module/Header/Header";
import Article from "@/components/templates/Index/Article/Article";
import Main from "@/components/templates/Index/Main";
import React, { FC } from "react";

const Home: FC = () => {
  return (
    <>
      <Header />
      <Main />
      <Article />
    </>
  );
};

export default Home;