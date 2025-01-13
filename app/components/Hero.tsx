"use client";
import { motion } from "motion/react";
import React from "react";

const Hero = () => {
  return (
    <>
      <div className="px-4 md:px-16 lg:px-24 xl:px-80 py-16 dark:bg-black">
        <div className="flex justify-center">
          <div className="flex flex-col justify-center h-[40vh]">
            <motion.h1
              className="text-gray-400 font-bold text-4xl sm:text-5xl md:text-6xl xl:text-7xl leading-tight"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Sahil Ambre.
            </motion.h1>
            <motion.h1
              className="text-black dark:text-white font-extrabold text-4xl sm:text-5xl md:text-6xl xl:text-7xl leading-tight mt-4"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            >
              Software Developer.
            </motion.h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
