import WalletBox from "@/components/module/WalletBox/WalletBox";
import React from "react";

function AllWallet() {
  return (
    <div className="flex flex-row flex-wrap justify-center sm:justify-between xl:flex-nowrap gap-10">
      <WalletBox title="Meta Mask" img="img/Group 19.png" />
      <WalletBox title="Coinbase" img="img/pngaaa 1.png" />
      <WalletBox title="Exodus" img="img/image 1.png" />
      <WalletBox title="Uniswap" img="img/uniswap-coinuni.png" />
      <WalletBox title="Meta Mask" img="img/Group 25.png" />
      <WalletBox title="Meta Mask" img="img/Group 19.png" />
    </div>
  );
}

export default AllWallet;
