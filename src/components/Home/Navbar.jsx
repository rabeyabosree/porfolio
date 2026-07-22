// // import React, { useState } from "react";
// // import { GoHome } from "react-icons/go";
// // import { FaRegUser, FaCodepen } from "react-icons/fa6";
// // import { PiFlipVerticalLight } from "react-icons/pi";
// // import { GrProjects } from "react-icons/gr";
// // import { RiServiceLine } from "react-icons/ri";
// // import Logo from "./Logo";
// // import { Link, useLocation } from "react-router-dom";
// // import { CgMenuRight } from "react-icons/cg";
// // import { VscClose } from "react-icons/vsc";

// // const Navbar = () => {
// //   const location = useLocation();
// //   const [isMenu, setisMenu] = useState(false)

// //   // const navbarMenu = [
// //   //   { name: "Home", path: "/", icon: <GoHome size={20} /> },
// //   //   { name: "About", path: "/about", icon: <FaRegUser size={20} /> },
// //   //   { name: "Projects", path: "/project", icon: <GrProjects size={20} /> },
// //   //   { name: "Skills", path: "/skills", icon: <FaCodepen size={20} /> },
// //   //   { name: "Contact", path: "/contact", icon: <PiFlipVerticalLight size={20} /> },
// //   // ];

// //   const navbarMenu = [
// //     { name: "Home", path: "/" },
// //     { name: "About", path: "/about" },
// //     { name: "Projects", path: "/project" },
// //     { name: "Skills", path: "/skills" },
// //     { name: "Contact", path: "/contact" },
// //   ];


// //   return (

// //     <header className="fixed top-0 left-0 w-full z-50 mx-12 my-4">
// //       <div className="max-w-4xl mx-auto rounded-3xl flex justify-center items-center p-4">
// //         {/* menu */}
// //         <nav className="text-white bg-black py-3 px-12  rounded-3xl flex items-center justify-between gap-9 md:gap-8 font-medium text-[16px] md:text-base">
// //           {navbarMenu.map((nav) => (
// //             <Link
// //               to={nav.path}
// //               key={nav.name}
// //             >
// //               <span>{nav.name}</span>
// //             </Link>
// //           ))}

// //         </nav>

// //         {/* mobile menu */}
// //         <div>
// //           <button className="md:hidden">
// //             {isMenu ? <CgMenuRight /> : <VscClose />}
// //           </button>
// //         </div>

// //       </div>

// //     </header>
// //   );
// // };

// // export default Navbar;


import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { CgMenuRight } from "react-icons/cg";
import { VscClose } from "react-icons/vsc";

const Navbar = () => {
  const location = useLocation();
  const [isMenu, setIsMenu] = useState(false);

  const navbarMenu = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/project" },
    { name: "Skills", path: "/skills" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 py-4 md:py-6">
      <div className="max-w-2xl mx-auto">

        {/* Desktop Menu */}
        <nav className="hidden bg-black/70 rounded-full px-6 py-3 md:flex items-center justify-around gap-8 text-white font-normal">
          {navbarMenu.map((nav) => (
            <Link
              key={nav.name}
              to={nav.path}
              className={`transition duration-300 text-[16px] ${location.pathname === nav.path
                ? "text-green-400"
                : "hover:text-green-400"
                }`}
            >
              {nav.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Button
        <button
          onClick={() => setIsMenu(!isMenu)}
          className="md:hidden text-right text-green-600 text-3xl"
        >
          {isMenu ? <VscClose /> : <CgMenuRight />}
        </button> */}

          {/* mobile header*/}
         <div className="flex justify-end text-green-400 md:hidden">
           <button
             onClick={() => setIsMenu(!isMenu)}
            className="text-3xl text-green-500"
          >            {isMenu ? <VscClose /> : <CgMenuRight />}

          </button>
        </div>




        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${isMenu ? "max-h-96 mt-3" : "max-h-0"
            }`}
        >
          <div className="bg-black rounded-2xl py-4 flex flex-col">
            {navbarMenu.map((nav) => (
              <Link
                key={nav.name}
                to={nav.path}
                onClick={() => setIsMenu(false)}
                className={`px-6 py-3 text-white transition ${location.pathname === nav.path
                  ? "text-cyan-400"
                  : "hover:text-cyan-400"
                  }`}
              >
                {nav.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;



// import { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { CgMenuRight } from "react-icons/cg";
// import { VscClose } from "react-icons/vsc";

// const Navbar = () => {
//   const location = useLocation();
//   const [isMenu, setIsMenu] = useState(false);

//   const navbarMenu = [
//     { name: "Home", path: "/" },
//     { name: "About", path: "/about" },
//     { name: "Projects", path: "/project" },
//     { name: "Skills", path: "/skills" },
//     { name: "Contact", path: "/contact" },
//   ];

//   return (
//     <header className="fixed top-0 left-0 w-full z-50 px-4 py-5">
//       <div className="max-w-2xl mx-auto">

//         {/* dekstop nav */}
//         <nav className="hidden md:flex items-center justify-around gap-10 px-8 py-4 rounded-full border border-white/10 bg-black/60 backdrop-blur-xl shadow-lg">
//           {navbarMenu.map((nav) => (
//             <Link
//               key={nav.name}
//               to={nav.path}
//               className={`relative group text-[16px] font-medium transition-colors duration-300 ${location.pathname === nav.path
//                 ? "text-green-400"
//                 : "text-white hover:text-green-400"
//                 }`}
//             >
//               {nav.name}

//               <span
//                 className={`absolute left-0 -bottom-1 h-[2px] bg-green-400 transition-all duration-300 ${location.pathname === nav.path
//                   ? "w-full"
//                   : "w-0 group-hover:w-full"
//                   }`}
//               ></span>
//             </Link>
//           ))}
//         </nav>


//         {/* mobile header*/}
//         <div className="flex justify-end text-green-400 md:hidden">
//           <button
//             onClick={() => setIsMenu(!isMenu)}
//             className="text-3xl text-green-500"
//           >
//             {isMenu ? <VscClose /> : <CgMenuRight />}

//           </button>
//         </div>


//         {/* mobile nav menu */}
//         <div
//           className={`md:hidden origin-top transition-all duration-300 ease-in-out ${isMenu
//             ? "scale-y-100 opacity-100 mt-4"
//             : "scale-y-0 opacity-0 h-0 pointer-events-none"
//             }`}
//         >
//           <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/80 backdrop-blur-xl shadow-xl">
//             {navbarMenu.map((nav) => (
//               <Link
//                 key={nav.name}
//                 to={nav.path}
//                 onClick={() => setIsMenu(false)}
//                 className={`block px-6 py-4 transition-colors duration-300 ${location.pathname === nav.path
//                   ? "bg-green-500/20 text-green-400"
//                   : "text-white hover:bg-white/10 hover:text-green-400"
//                   }`}
//               >
//                 {nav.name}
//               </Link>
//             ))}
//           </div>
//         </div>


//       </div>
//     </header>
//   );
// };

// export default Navbar;



