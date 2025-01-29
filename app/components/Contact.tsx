import React from "react";
import { motion } from "motion/react";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[50vh] bg-white text-black dark:text-white dark:bg-black">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center"
      >
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight">
          INTERESTED IN <br />
          WORKING TOGETHER?{" "}
          <motion.span
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            role="img"
            aria-label="peace"
          >
            ✌️
          </motion.span>
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-6 text-lg sm:text-xl"
        >
          Contact me:
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-2 text-xl sm:text-2xl font-bold"
        >
          <a
            href="mailto:sahil01ambre@gmail.com"
            className="underline hover:text-gray-600"
          >
            sahil01ambre@gmail.com
          </a>
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "mirror" }}
        className="mt-6 text-5xl"
      >
        🖱️
      </motion.div>
    </div>
  );
};

export default Contact;
