import HotBidBox from "@/components/module/HotBidBox/HotBidBox";
import React from "react";

function HotBids() {
  return (
    <div className="flex flex-col sm:flex-row sm:flex-wrap">
      <HotBidBox title={"Digi Boy"} creator={"Negar"} img={"img/image 5.png"} />
      <HotBidBox
        title={"Angry Ape"}
        creator={"Farshad"}
        img={"img/image 5 (2).png"}
      />
      <HotBidBox
        title={"Virtualland"}
        creator={"Amirhossein"}
        img={"img/image 5 (3).png"}
      />
    </div>
  );
}

export default HotBids;
