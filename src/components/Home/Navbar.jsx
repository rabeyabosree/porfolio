import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white p-4 shadow-sm fixed w-full z-50">
      <nav className="container mx-auto flex justify-between items-center">
        <Logo />
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 font-bold text-black">
          <a href="/" className="hover:text-gray-600">Home</a>
          <a href="/about" className="hover:text-gray-600">About</a>
          <a href="/service" className="hover:text-gray-600">Services</a>
          <a href="/contact" className="hover:text-gray-600">Contact</a>
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
            className="md:hidden bg-basecolor text-white p-4 mt-4 space-y-2 text-center shadow-lg"
          >
            <a href="#" className="block py-2 hover:bg-blue-800 ">Home</a>
            <a href="#" className="block py-2 hover:bg-blue-800">About</a>
            <a href="#" className="block py-2 hover:bg-blue-800">Services</a>
            <a href="#" className="block py-2 hover:bg-blue-800">Contact</a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

