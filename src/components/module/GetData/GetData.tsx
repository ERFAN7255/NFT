/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  getUserInfo, UserOrders } from "@/Redux/Slices/userSlice";
import { RootState, AppDispatch } from "@/Redux/store";

const GetData: React.FC = () => {
  const user = useSelector((state: RootState) => state.user.user);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserInfo());
  }, [dispatch]);

  useEffect(() => {
    if (user?.id) {
      dispatch(UserOrders(user.id));
    }
  }, [user?.id, dispatch]);

  return null;
};

export default GetData;