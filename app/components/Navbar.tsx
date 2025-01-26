import Link from "next/link";
import React from "react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="bg-white text-black p-6 shadow-lg dark:shadow-lg dark:bg-black dark:text-white">
      <ul className="list-none flex justify-between items-center md:mx-60">
        {/* Left Section */}
        <li className="flex space-x-4">
          <ul className="text-xl md:text-3xl font-[poppins]">
            <Link href="/">Sahil.</Link>
          </ul>
          <ul>
            <ThemeToggle />
          </ul>
        </li>

        {/* Right Section */}
        <li className="flex space-x-6">
          {["About", "Resume", "Fun"].map((text) => (
            <ul className="font-[poppins]" key={text}>
              <div className="relative overflow-hidden group">
                <span className="invisible">{text}</span>
                <span className="absolute top-0 left-0 group-hover:-translate-y-full transition-transform ease-in-out duration-500 hover:duration-300">
                  {text}
                </span>
                <span className="absolute top-0 left-0 translate-y-full group-hover:translate-y-0 transition-transform ease-in-out duration-500 hover:duration-300">
                  {text}
                </span>
                <Link
                  href={`/${text.toLowerCase()}`}
                  className="absolute inset-0"
                ></Link>
              </div>
            </ul>
          ))}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
