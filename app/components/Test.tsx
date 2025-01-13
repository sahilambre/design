import React from "react";
import { motion } from "motion/react";

const Test = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1>Test Component</h1>
    </motion.div>
  );
};

export default Test;
