"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";
import swal from "sweetalert2";
import { RootState } from "@/Redux/store";

interface DeleteOneOrderProps {
  productId: string;
}

const DeleteOneOrder: React.FC<DeleteOneOrderProps> = ({ productId }) => {
  const user = useSelector((state: RootState) => state.user.user);
  const router = useRouter();

  const deleteFromList = async (productID: string) => {
    swal
      .fire({
        title: "آیا از حذف محصول از سبد خرید خود اطمینان دارید؟",
        icon: "warning",
        confirmButtonText: "بله",
        cancelButtonText: "خیر",
        showCancelButton: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          fetch(`/api/orders/${productID}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ userID: user.id }),
          }).then((res) => {
            res.json();
            if (res.status === 201) {
              swal.fire({
                title: "محصول از سبد خرید شما با موفقیت حذف شد",
                icon: "success",
                confirmButtonText: "تایید",
              }).then(() => {
                window.location.reload();
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
};

export default DeleteOneOrder;
