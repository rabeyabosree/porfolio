import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { GoHome } from "react-icons/go";
import { FaRegUser, FaCodepen } from "react-icons/fa6";
import { PiFlipVerticalLight } from "react-icons/pi";
import { GrProjects } from "react-icons/gr";
import { RiServiceLine } from "react-icons/ri";
import Logo from "./Logo";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navbarMenu = [
    { name: "Home", path: "/", icon: <GoHome /> },
    { name: "About", path: "/about", icon: <FaRegUser /> },
    { name: "Services", path: "/service", icon: <RiServiceLine /> },
    { name: "Projects", path: "/project", icon: <GrProjects /> },
    { name: "Skills", path: "/skills", icon: <FaCodepen /> },
    { name: "Contact", path: "/contact", icon: <PiFlipVerticalLight /> }
  ];

  return (
    <header className="bg-white shadow-sm fixed w-full z-50">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center p-4">
        <Logo />

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 font-bold text-black">
          {navbarMenu.map((menu, i) => (
            <Link key={i} to={menu.path} className="hover:text-blue-500 transition">
              {menu.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-800 text-white p-6 mt-2 space-y-4 text-center shadow-lg"
          >
            {navbarMenu.map((menu, i) => (
              <Link
                key={i}
                to={menu.path}
                className="flex items-center justify-center space-x-2 hover:text-yellow-400 transition"
                onClick={() => setIsOpen(false)}
              >
                {menu.icon}
                <span>{menu.name}</span>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;


