import React from "react";
import { GoHome } from "react-icons/go";
import { FaRegUser, FaCodepen } from "react-icons/fa6";
import { PiFlipVerticalLight } from "react-icons/pi";
import { GrProjects } from "react-icons/gr";
import { RiServiceLine } from "react-icons/ri";
import Logo from "./Logo";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const navbarMenu = [
    { name: "Home", path: "/", icon: <GoHome size={20} /> },
    { name: "About", path: "/about", icon: <FaRegUser size={20} /> },
    { name: "Projects", path: "/project", icon: <GrProjects size={20} /> },
    { name: "Skills", path: "/skills", icon: <FaCodepen size={20} /> },
    { name: "Contact", path: "/contact", icon: <PiFlipVerticalLight size={20} /> },
  ];

  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 w-full z-50">
      <nav className="max-w-[1440px] mx-auto flex justify-center items-center p-4">
       

       {/* Menu */}
        <div className="flex items-center justify-center gap-9 md:gap-8 font-medium text-sm sm:text-base text-black">
          {navbarMenu.map((menu, i) => (
            <Link
              key={i}
              to={menu.path}
              className={`flex items-center gap-1 hover:text-blue-600 transition ${
                location.pathname === menu.path ? "text-blue-600 font-semibold" : ""
              }`}
            >
              <span className="md:hidden text-gray-800">{menu.icon}</span>
              <span className="hidden sm:inline">{menu.name}</span>
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;




