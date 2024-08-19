/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addOrder,
  getUserInfo,
  me,
  UserOrders,
} from "@/Redux/Slices/userSlice";

function GetData() {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserInfo());
  }, []);

  useEffect(() => {
    dispatch(UserOrders(user.id));
  }, []);

  return null;
}

export default GetData;
