"use client";

import React, { useEffect, useLayoutEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import { useTheme } from "@/context/theme-context";

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button
      className="fixed bottom-5 right-5 bg-dark w-[3rem] h-[3rem] bg-opacity-80 
      bacckdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full 
      flex justify-center items-center hover:scale-[1.15] active:scale-105 transition-all
       dark:bg-light dark:text-dark"
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
};

export default ThemeSwitch;
