import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="bg-gradient-to-r from-logoone to-logotwo p-2 rounded-lg">
        <span className="text-white text-2xl font-extrabold tracking-wide">AI</span>
      </div>
      <span className="text-black text-2xl font-bold tracking-wider">Forge</span>
    </div>
  );
};

export default Logo;
