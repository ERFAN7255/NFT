import TopCreatorsBox from "@/components/module/TopCreatorsBox/TopCreatorsBox";
import React from "react";

function TopCreators() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row flex-wrap sm:gap-0">
      <TopCreatorsBox />
      <TopCreatorsBox />
      <TopCreatorsBox />
      <TopCreatorsBox />
      <TopCreatorsBox />
      <TopCreatorsBox />
    </div>
  );
}

export default TopCreators;
