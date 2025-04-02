"use client";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const AOSInit: React.FC = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return null;
};

export default AOSInit;