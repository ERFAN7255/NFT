/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import DeleteOneOrder from "@/components/templates/user-panel/DeleteOneOrder";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

function page() {
  const user = useSelector((state) => state.user.user);
  const [products, setProducts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch(`/api/orders/${user.id}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  // connectToDB();
  // const token = cookies().get("token");
  // let user = null;

  // if (token) {
  //   const tokenPayload = verifyAccessToken(token.value);
  //   if (tokenPayload) {
  //     user = await UserModel.findOne(
  //       {
  //         $or: [
  //           { username: tokenPayload.email },
  //           { email: tokenPayload.email },
  //         ],
  //       },
  //       "-__v -password"
  //     );
  //   }
  // }

  // const userID = user?._id;

  // const products = await OrderModel.find({ user: userID }).populate("product");

  return (
    <>
      <h1 className="text-white mt-5 mr-5 mb-2 lg:text-2xl">
        {user?.name} عزیز ؛ خوش اومدی 🙌
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
                        src={product?.img}
                        width={200}
                        height={200}
                        className="w-14 m-auto md:w-20"
                        alt=""
                      />
                    </td>
                    <td className="border-2 lg:text-xl xl:text-2xl border-purple-600 p-2 md:p-3 text-center text-blue-400">
                      {product?.name}
                    </td>
                    <td className="border-2 lg:text-xl xl:text-2xl border-purple-600 px-2 py-6 md:p-3 text-center text-green-400">
                      {product?.price} Eth
                    </td>
                    <td className="border-2 lg:text-xl xl:text-2xl border-purple-600 p-0 text-center">
                      <DeleteOneOrder productId={product?._id} />
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>

          {/* Button */}
          <div className="flex justify-center items-center py-10">
            <button className="icon_footer_instagram px-4 w-1/2 text-nowrap md:w-3/5 lg:w-2/5 2xl:w-1/5 p-4 rounded-2xl text-white animate-pulse">
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
