/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useState } from "react";
import Header from "@/components/module/Header/Header";
import Footer from "@/components/module/Footer/Footer";
import swal from "sweetalert";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import apiRequest from "@/Services/Axios/Configs/config";

function page() {
  const user = useSelector((state) => state.user.user);
  const router = useRouter();

  if (user.isLogin) {
    router.replace("/");
  }

  //login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //register
  const [nameRegister, setNameRegister] = useState("");
  const [usernameRegister, setUsernameRegister] = useState("");
  const [emailRegister, setEmailRegister] = useState("");
  const [phoneRegister, setPhoneRegister] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");

  const login = async (e) => {
    e.preventDefault();

    const user = { email, username: email, password };

    const res = await apiRequest.post("/auth/login", user);

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
        buttons: "صفحه اصلی",
      }).then(() => {
        window.location.replace("/");
        // router.replace("/");
        // router.refresh();
      });
    }
  };

  const register = async (e) => {
    e.preventDefault();
    const newUser = {
      name: nameRegister,
      username: usernameRegister,
      email: emailRegister,
      phone: phoneRegister,
      password: passwordRegister,
    };

    if (
      !nameRegister.trim() ||
      !usernameRegister.trim() ||
      !emailRegister.trim() ||
      !passwordRegister.trim()
    ) {
      swal({
        title: "لطفا همه مقادیر را به درستی کامل کنید",
        icon: "error",
        buttons: "تلاش مجدد",
      });
    } else if (phoneRegister.length > 11 || phoneRegister.length < 1) {
      swal({
        title: "فیلد شماره تلفن را به درستی  وارد کنید !!",
        text: "مثال : 09123456789",
        icon: "warning",
        buttons: "تلاش مجدد",
      });
    }

    const res = await apiRequest.post("/auth/register", newUser);

    if (res.status === 404) {
      swal({
        title:
          "کاربری با این نام کاربری , شماره موبایل , نام یا ایمیل وجود دارد !!",
        icon: "error",
        text: "لطفا از طریق فرم ورود اقدام کنید",
        buttons: "تلاش مجدد",
      });
    }

    if (res.status === 201) {
      swal({
        title: "با موفقیت انجام شدید",
        icon: "success",
        buttons: "صفحه اصلی",
      }).then(() => {
        window.location.replace("/");
        // router.replace("/");
        // router.refresh();
      });
    }
  };

  return (
    <>
      <Header />
      <div className="p-4 flex justify-center">
        <div className="main mt-0 mb-14 w-96" data-aos="zoom-in-up">
          <input type="checkbox" id="chk" aria-hidden="true" />

          <div className="login">
            <form className="form">
              <label
                htmlFor="chk"
                aria-hidden="true"
                className="animate-bounce"
              >
                ورود
              </label>
              <input
                className="input text-center"
                type="text"
                name="email"
                placeholder="ایمیل یا نام کاربری"
                required={true}
                minLength={2}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="input text-center"
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

          <div className="register mt-6">
            <form className="form">
              <label htmlFor="chk" aria-hidden="true" className="animate-pulse">
                ثبت نام
              </label>
              <input
                className="input"
                type="text"
                name="txt"
                placeholder="نام کاربری"
                minLength={2}
                maxLength={14}
                required={true}
                value={usernameRegister}
                onChange={(e) => setUsernameRegister(e.target.value)}
              />
              <input
                className="input"
                type="text"
                name="txt"
                placeholder="نام و نام خانوداگی"
                minLength={2}
                maxLength={20}
                required={true}
                value={nameRegister}
                onChange={(e) => setNameRegister(e.target.value)}
              />
              <input
                className="input"
                type="number"
                name="phone"
                placeholder="شماره تلفن"
                minLength={0}
                maxLength={11}
                required={true}
                value={phoneRegister}
                onChange={(e) => setPhoneRegister(e.target.value)}
              />
              <input
                className="input"
                type="email"
                name="email"
                placeholder="ایمیل"
                required={true}
                value={emailRegister}
                onChange={(e) => setEmailRegister(e.target.value)}
              />
              <input
                className="input"
                type="text"
                name="pswd"
                placeholder="رمز عبور"
                minLength={2}
                maxLength={18}
                required={true}
                value={passwordRegister}
                onChange={(e) => setPasswordRegister(e.target.value)}
              />
              <button onClick={register}>ثبت نام</button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default page;
