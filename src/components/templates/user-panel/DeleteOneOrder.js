"use client";
import apiRequest from "@/Services/Axios/Configs/config";
import { useRouter } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";
import swal from "sweetalert";

function DeleteOneOrder({ productId }) {
  const user = useSelector((state) => state.user.user);
  const router = useRouter();

  const deleteFromList = async (productID) => {
    swal({
      title: "آیا از حذف محصول از سبد خرید خود اطمینان دارید؟",
      icon: "warning",
      buttons: ["خیر", "بله"],
    }).then((result) => {
      if (result) {
        fetch(`/api/orders/${productID}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userID: user.id }),
        }).then((res) => {
          res.json();
          if (res.status === 201) {
            swal({
              title: "محصول از سبد خرید شما با موفقیت حذف شد",
              icon: "success",
              buttons: "تایید",
            }).then(() => {
              router.refresh();
            });
          }
        });
      }
    });
  };
  return (
    <button
      className="btn-danger text-white p-2 md:p-3 md:px-3 lg:px-5 lg:p-3"
      onClick={() => deleteFromList(productId)}
    >
      حذف
    </button>
  );
}

export default DeleteOneOrder;
