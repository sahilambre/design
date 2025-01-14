import Link from "next/link";
import React from "react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="bg-white text-black  p-6 shadow-lg dark:shadow-white-lg dark:bg-black dark:text-white ">
      {" "}
      {/* //dark:bg-black dark:text-white */}
      <ul className="list-none flex justify-between items-center md:mx-60">
        <li className="flex space-x-4">
          <ul className="text-xl md:text-3xl font-[poppins]">
            <Link href="/">Sahil.</Link>
          </ul>
          <ul>
            <ThemeToggle />{" "}
          </ul>
        </li>
        <li className="flex space-x-6">
          <ul className="font-[poppins]">
            <Link href="/about">About</Link>
          </ul>
          <ul className="font-[poppins]">
            <Link href="/resume">Resume</Link>
          </ul>
          <ul className="font-[poppins]">
            <Link href="/fun">Fun</Link>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
