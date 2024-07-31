/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { me } from "@/Redux/Slices/userSlice";
import { useRouter } from "next/navigation";

function GetData() {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    fetch("/api/auth/me")
      .then((res) => res.json())
      .then((data) => {
        if (data.data !== null) {
          dispatch(me(data));
        }
      });
  }, []);

  return null;
}

export default GetData;
