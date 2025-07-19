import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-400 py-4 mt-10">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-center items-center px-6">
        <p className="text-lg">&copy; {new Date().getFullYear()} Rabeya Bosri. All rights reserved.</p>
        
      </div>
    </footer>
  );
};

export default Footer;

