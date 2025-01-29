import React from "react";
import { motion } from "motion/react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer
      className="bg-black text-white py-8 px-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto flex flex-col items-center space-y-6 text-center">
        <motion.div
          className="flex space-x-6 text-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <a
            href="https://github.com/sahilambre"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/sahilambre"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/yourtwitter"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaTwitter />
          </a>
          <a
            href="mailto:sahil01ambre@gmail.com"
            className="hover:text-red-400 transition"
          >
            <FaEnvelope />
          </a>
        </motion.div>

        <motion.p
          className="text-sm text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          © {new Date().getFullYear()} Sahil Mukesh Ambre 🚀 All Rights
          Reserved.
        </motion.p>
      </div>
    </motion.footer>
  );
};

export default Footer;
