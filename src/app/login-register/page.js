/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useState } from "react";
import Header from "@/components/module/Header/Header";
import Footer from "@/components/module/Footer/Footer";
import swal from "sweetalert";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

function page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const login = async (e) => {
    e.preventDefault();

    const user = { email, username: email, password };

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (res.status === 422 || res.status === 401) {
      swal({
        title: "نام کاربری یا رمز عبور اشتباه میباشد !!",
        icon: "error",
        buttons: "تلاش مجدد",
      });
    }

    if (res.status === 201) {
      swal({
        title: "با موفقیت وارد شدید",
        icon: "success",
        buttons: "ورود به پنل کاربری",
      }).then(() => {
        router.replace("/my-account");
      });
    }
  };

  return (
    <>
      <Header />
      <div className="p-4 flex justify-center">
        <div class="main my-10 mb-14 w-96" data-aos="zoom-in-up">
          <input type="checkbox" id="chk" aria-hidden="true" />

          <div class="login">
            <form class="form">
              <label for="chk" aria-hidden="true" className="animate-bounce">
                ورود
              </label>
              <input
                class="input text-center"
                type="text"
                name="email"
                placeholder="ایمیل یا نام کاربری"
                required={true}
                minLength={2}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                class="input text-center"
                type="password"
                name="password"
                placeholder="رمز عبور"
                minLength={2}
                maxLength={18}
                required={true}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button onClick={login}>ورود</button>
            </form>
          </div>

          <div class="register mt-6">
            <form class="form">
              <label for="chk" aria-hidden="true" className="animate-pulse">
                ثبت نام
              </label>
              <input
                class="input"
                type="text"
                name="txt"
                placeholder="نام کاربری"
                minLength={2}
                maxLength={14}
                required={true}
              />
              <input
                class="input"
                type="text"
                name="txt"
                placeholder="نام و نام خانوداگی"
                minLength={2}
                maxLength={20}
                required={true}
              />
              <input
                class="input"
                type="email"
                name="email"
                placeholder="ایمیل"
                required={true}
              />
              <input
                class="input"
                type="text"
                name="pswd"
                placeholder="رمز عبور"
                minLength={2}
                maxLength={18}
                required={true}
              />
              <button>ثبت نام</button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default page;
