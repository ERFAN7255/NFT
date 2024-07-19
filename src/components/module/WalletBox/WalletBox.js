import React from "react";

function WalletBox({title,img}) {
  return (
    <div class="w-2/5 sm:w-1/4 flex justify-center h-48 items-center flex-col p-5 gap-7 border-purple-900 border-2 rounded-br-3xl">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <span class="text-gray-300">{title}</span>
      </div>
    </div>
  );
}

export default WalletBox;
