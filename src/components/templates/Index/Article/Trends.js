import TrendsBox from "@/components/module/TrendsBox/TrendsBox";
import React from "react";

function Trends() {
  return (
    <div className="flex flex-col gap-10 sm:flex-row sm:flex-wrap sm:gap-0">
      <TrendsBox creator={"Mahsa"} img={"img/image 6.png"} />
      <TrendsBox creator={"Amir"} img={"img/image 6 (2).png"} />
      <TrendsBox creator={"Reza"} img={"img/image 6 (3).png"} />
    </div>
  );
}

export default Trends;
