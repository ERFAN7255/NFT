/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { addOrder } from "@/Redux/Slices/userSlice";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";

function page() {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch(`/api/orders/${user.id}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        dispatch(addOrder(data));
      });
  }, [user.id]);

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
    <>
      <h1 className="text-white mt-5 mr-5 mb-2 lg:text-2xl">
        {user.name} عزیز ؛ خوش اومدی 🙌
      </h1>
      {products.length > 0 ? (
        <div className="p-6 xl:px-40 w-full flex flex-col justify-center">
          <table className="border-2 border-black">
            <thead>
              <tr>
                <th className="border-2 lg:text-xl xl:text-2xl border-purple-600 text-center text-orange-500">
                  عکس
                </th>
                <th className="border-2 lg:text-xl xl:text-2xl border-purple-600 p-4 md:p-3 text-center text-blue-200">
                  نام
                </th>
                <th className="border-2 lg:text-xl xl:text-2xl border-purple-600 p-4 md:p-3 text-center text-green-300">
                  قیمت
                </th>
                <th className="border-2 lg:text-xl xl:text-2xl border-purple-600 p-4 md:p-3 text-center text-red-500">
                  حذف
                </th>
              </tr>
            </thead>
            <tbody>
              {products?.map(({ product }) => (
                <>
                  <tr>
                    <td className="border-2  border-purple-600 p-2 md:p-2">
                      <Image
                        src={product.img}
                        width={200}
                        height={200}
                        className="w-14 m-auto md:w-20"
                        alt=""
                      />
                    </td>
                    <td className="border-2 lg:text-xl xl:text-2xl border-purple-600 p-2 md:p-3 text-center text-blue-400">
                      {product.name}
                    </td>
                    <td className="border-2 lg:text-xl xl:text-2xl border-purple-600 px-2 py-6 md:p-3 text-center text-green-400">
                      {product.price} Eth
                    </td>
                    <td className="border-2 lg:text-xl xl:text-2xl border-purple-600 p-0 text-center">
                      <button
                        className="btn-danger text-white p-2 md:p-3 md:px-3 lg:px-5 lg:p-3"
                        onClick={() => deleteFromList(product._id)}
                      >
                        حذف
                      </button>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>

          {/* Button */}
          <div className="flex justify-center items-center py-10">
            <button
              onClick={() =>
                swal({
                  title: "آخه تو پول داری بدبخت؟",
                  icon: "warning",
                  buttons: "نه ببخشید مزاحم شدم 😔",
                })
              }
              className="icon_footer_instagram px-4 w-1/2 text-nowrap md:w-3/5 lg:w-2/5 2xl:w-1/5 p-4 rounded-2xl text-white animate-pulse"
            >
              نهایی کردن سفارشات
            </button>
          </div>
        </div>
      ) : (
        <div className="p-8">
          <div className="flex justify-center items-center w-1/2 bg-yellow-600 p-4 rounded-xl w-full text-center border-4 border-yellow-300">
            محصولی در سبد خرید شما موجود نمیباشد !!
          </div>
        </div>
      )}
    </>
  );
}

export default page;
