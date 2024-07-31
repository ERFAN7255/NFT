/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addOrder, me } from "@/Redux/Slices/userSlice";

function GetData() {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("/api/auth/me")
      .then((res) => res.json())
      .then((data) => {
        if (data.data !== null) {
          dispatch(me(data));
        }
      });
  }, []);

  useEffect(() => {
    fetch(`/api/orders/${user.id}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch(addOrder(data));
      });
  }, [user.id]);

  return <></>;
}

export default GetData;
