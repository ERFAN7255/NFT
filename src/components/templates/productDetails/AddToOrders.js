"use client";
import apiRequest from "@/Services/Axios/Configs/config";
import { useRouter } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";
import swal from "sweetalert";

function AddToOrders({ productID }) {
  const { user, isLogin, isloading } = useSelector((state) => state.user);
  const router = useRouter();

  const addToOrders = async () => {
    if (!isLogin) {
      swal({
        title: "ابتدا ثبت نام یا ورود کنید.",
        icon: "warning",
        buttons: ["تایید", "صفحه ورود / ثبت نام"],
      }).then((result) => {
        if (result) {
          router.push("/login-register");
        }
      });
    } else {
      const res = await apiRequest.post("/orders", {
        user: user.id,
        product: productID,
      });

      if (res.status === 201) {
        swal({
          title: "با موفقیت به سبد خرید شما اضافه شد",
          icon: "success",
          buttons: ["تایید", "سبد خرید"],
        }).then((result) => {
          if (result) {
            router.push("/my-account/orders");
          }
        });
      }
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
