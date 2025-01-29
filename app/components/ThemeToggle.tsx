"use client";
import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";
// import { motion } from "framer-motion";
import { motion } from "motion/react";
import React from "react";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div
      className="relative w-16 h-8 flex items-center bg-black dark:bg-white cursor-pointer rounded-full p-1"
      onClick={() => setDarkMode(!darkMode)}
    >
      {/* Moon Icon */}
      <FaMoon className="text-white" size={18} />

      {/* Toggle Button with Animation */}
      <motion.div
        className="absolute bg-white dark:bg-black w-6 h-6 rounded-full shadow-md"
        layout
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
        initial={false}
        style={darkMode ? { left: "2px" } : { right: "2px" }}
      ></motion.div>

      {/* Sun Icon */}
      <BsSunFill className="ml-auto text-yellow-400" size={22} />
    </div>
  );
};

export default ThemeToggle;
