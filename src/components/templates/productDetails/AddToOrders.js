"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";
import swal from "sweetalert";

function AddToOrders({ productID }) {
  const user = useSelector((state) => state.user.user);
  const router = useRouter();

  const addToOrders = async () => {
    const res = await fetch(`/api/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: "66a3a41324ada018fbaf5396",
        product: productID,
      }),
    });

    if (res.status === 201) {
      swal({
        title: "با موفقیت به سبد خرید شما اضافه شد",
        icon: "success",
        buttons: ["تایید", "سبد خرید"],
      }).then((result) => {
        if (result) {
          router.push("/my-account");
        }
      });
    }
  };

  return (
    <button
      className="icon_footer_instagram border-2 text-white p-4 w-1/2 sm:w-4/5 lg:w-1/2 rounded-xl transition-all duration-500 hover:w-full lg:text-xl"
      onClick={addToOrders}
    >
      افزودن به سبد خرید
    </button>
  );
}

export default AddToOrders;
