// Navbar.jsx
import React, { useState } from "react";

const Navbar = () => {
  const [isNavActive, setIsNavActive] = useState(false);

  const handleMenuClick = () => {
    setIsNavActive(!isNavActive);
  };

  return (
    <>
      <header className="header bg-white fixed top-0 left-0 w-full py-5 px-10 flex justify-between items-center border-b-2 border-white">
        <a
          href="#"
          className="logo text-black text-2xl font-semibold cursor-default"
        >
          Logo
        </a>
        <i
          className={`bx ${
            isNavActive ? "bx-x" : "bx-menu"
          } text-black text-3xl`}
          id="menu-icon"
          onClick={handleMenuClick}
        ></i>
        <nav
          className={`navbar ${
            isNavActive ? "block" : "hidden"
          } absolute top-full left-0 w-full py-2 px-4`}
        >
          <a href="#" className="block text-black text-xl no-underline mb-6">
            Home
          </a>
          <a href="#" className="block text-black text-xl no-underline mb-6">
            About
          </a>
          <a href="#" className="block text-black text-xl no-underline mb-6">
            Portfolio
          </a>
          <a href="#" className="block text-black text-xl no-underline mb-6">
            Services
          </a>
          <a href="#" className="block text-black text-xl no-underline mb-6">
            Contact
          </a>
        </nav>
      </header>
      {isNavActive && (
        <div className="nav-bg absolute top-16 left-0 w-full h-72 bg-white border-b-2 border-white"></div>
      )}
    </>
  );
};

export default Navbar;
