import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white p-6 shadow-lg">
      <ul className="list-none flex justify-between items-center md:mx-60">
        <li className="flex space-x-4">
          <ul>Sahil</ul>
          <ul>Toggle</ul>
        </li>
        <li className="flex space-x-6">
          <ul>About</ul>
          <ul>Resume</ul>
          <ul>Fun</ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
