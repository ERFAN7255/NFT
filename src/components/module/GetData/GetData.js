/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addOrder, getUserInfo, me } from "@/Redux/Slices/userSlice";

function GetData() {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   fetch("/api/auth/me")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data.data !== null) {
  //         dispatch(me(data));
  //       }
  //     });
  // }, []);

  useEffect(() => {
    dispatch(getUserInfo());
  }, []);

  useEffect(() => {
    if (user.id !== null) {
      fetch(`/api/orders/${user.id}`)
        .then((res) => res.json())
        .then((data) => {
          dispatch(addOrder(data));
        });
    }
  }, [user.id]);

  return null;
}

export default GetData;
