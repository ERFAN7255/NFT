import React from "react";
import TitleBar from "../../../module/TitleBar/TitleBar";
import AllWallet from "./AllWallet";
import HotBids from "./HotBids";
import SectionProperty from "./SectionProperty";
import Trends from "./Trends";
import Propertys from "./Propertys";
import TopCreators from "./TopCreators";
import NewsLetters from "./NewsLetters";
import Footer from "@/components/module/Footer/Footer";

function Article() {
  return (
    <div className="px-2 sm:px-10 xl:px-32">
      <TitleBar
        titleFA={"کیف پول"}
        titleEN={"Wallet"}
        icon={"img/wallet2.png"}
      />
      <AllWallet />
      <TitleBar
        titleFA={"پیشنهادهای داغ"}
        titleEN={"Hot Bids"}
        icon={"img/Vector (4).png"}
      />
      <HotBids />
      <Propertys />
      <TitleBar
        titleFA={"پر بازدیدترین ها"}
        titleEN={"Trends"}
        icon={"img/trends.png"}
      />
      <Trends />
      <TitleBar
        titleFA={"هنرمندان برتر"}
        titleEN={"Top Creators"}
        icon={"img/arrowleft.png"}
      />
      <TopCreators />
      <NewsLetters />
      <Footer />
    </div>
  );
}

export default Article;
