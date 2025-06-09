"use client";
import apiRequest from "@/Services/Axios/Configs/config";
import { useRouter } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";
import swal from "sweetalert2";
import { RootState } from "@/Redux/store";

interface AddToOrdersProps {
  productID: string;
}

const AddToOrders: React.FC<AddToOrdersProps> = ({ productID }) => {
  const { user, isLogin } = useSelector((state: RootState) => state.user);
  const router = useRouter();

  const addToOrders = async () => {
    if (!isLogin) {
      swal
        .fire({
          title: "ابتدا ثبت نام یا ورود کنید.",
          icon: "warning",
          confirmButtonText: "صفحه ورود / ثبت نام",
          cancelButtonText: "تایید",
          showCancelButton: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            router.push("/login-register");
          }
        });
    } else {
      const res = await apiRequest.post("/orders", {
        user: user.id,
        product: productID,
      });

      if (res.status === 201) {
        swal
          .fire({
            title: "با موفقیت به سبد خرید شما اضافه شد",
            icon: "success",
            cancelButtonText: "تایید",
            showCancelButton: true,
            confirmButtonText: "سبد خرید",
          })
          .then((result) => {
            if (result.isConfirmed) {
              router.push("/my-account/orders");
            } else {
              window.location.reload();
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
};

export default AddToOrders;
