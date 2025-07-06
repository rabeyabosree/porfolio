import React from "react";
import { GoHome } from "react-icons/go";
import { FaRegUser, FaCodepen } from "react-icons/fa6";
import { PiFlipVerticalLight } from "react-icons/pi";
import { GrProjects } from "react-icons/gr";
import { RiServiceLine } from "react-icons/ri";
import Logo from "./Logo";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navbarMenu = [
    { name: "Home", path: "/", icon: <GoHome size={24} /> },
    { name: "About", path: "/about", icon: <FaRegUser size={24} /> },
    { name: "Projects", path: "/project", icon: <GrProjects size={24} /> },
    { name: "Skills", path: "/skills", icon: <FaCodepen size={24} /> },
    { name: "Contact", path: "/contact", icon: <PiFlipVerticalLight size={24} /> }
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <header className="hidden md:block bg-white shadow-sm fixed w-full z-50">
        <nav className="max-w-[1440px] mx-auto flex justify-between items-center p-4">
          <Logo />
          <div className="flex space-x-6 font-bold text-black">
            {navbarMenu.map((menu, i) => (
              <Link key={i} to={menu.path} className="hover:text-blue-500 transition">
                {menu.name}
              </Link>
            ))}
          </div>
        </nav>
      </header>

      {/* Mobile Bottom Navbar */}
      <div className="md:hidden fixed bottom-0 w-full bg-white shadow-md flex justify-around py-2">
        {navbarMenu.map((menu, i) => (
          <Link
            key={i}
            to={menu.path}
            className="flex flex-col items-center text-gray-700 hover:text-blue-600 transition"
          >
            {menu.icon}
            <span className="text-[10px]">{menu.name}</span>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Navbar;



