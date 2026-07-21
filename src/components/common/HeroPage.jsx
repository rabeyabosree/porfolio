// import { motion } from "framer-motion";
// import { FaLinkedin, FaGithub, FaFacebook, FaYoutube } from "react-icons/fa";
// import { BsWhatsapp } from "react-icons/bs";
// import image from "../../assets/home-bg.jpg";
// import { HiDownload } from "react-icons/hi";
// import { Link } from "react-router-dom";
// import { IoIosArrowDropright } from "react-icons/io";


// function HeroPage() {
//   const socialIcons = [
//     { icon: <FaLinkedin />, href: "https://www.linkedin.com/feed/" },
//     { icon: <FaGithub />, href: "https://github.com/" },
//     { icon: <BsWhatsapp />, href: "https://wa.me/your_number" },
//     { icon: <FaFacebook />, href: "https://www.facebook.com/" },
//     { icon: <FaYoutube />, href: "https://www.youtube.com/" },
//   ];

//   return (
//     <div className="min-h-[90vh] flex items-center justify-center px-8 md:px-36 sm:px-4 relative">


//       <div className="">
//         {/* Main content */}
//         <div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.8 }}
//           className="flex flex-col-reverse md:flex-row items-center gap-12 bg-white"
//         >

//           <div>

//             {/* Name & Info */}
//             <div className="p-6 md:p-15 flex flex-col justify-center ">
//               <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-2 tracking-tight">
//                 Rabeya Bosri
//               </h2>
//               <h3 className="text-lg text-gray-600 font-medium mb-4">
//                 Full Stack Web Developer
//               </h3>
//               <p className="text-gray- max-w-[700px] text-base md:text-lg leading-relaxed tracking-wide mb-6">
//                 I'm a <span className="font-semibold text-gray-900">MERN Stack Developer</span> specializing in creating fast, scalable, and visually stunning web applications. I love bringing ideas to life using <span className="font-medium text-gray-800">MongoDB, Express.js, React.js, and Node.js</span>.
//               </p>


//               {/* action btn */}

//               <div className="mb-4 mt-2">
//                 <Link to="/project" className="border-2 border-green-300 animate-glow text-sm md:text-[16px] mb-4 px-5 md:px-7 py-3 md:py-3 bg-green-400 rounded-3xl text-gray-900 tracking-wide">View My Work</Link>
//                 <IoIosArrowDropright />
//               </div>


//               {/* Optional: Mobile Social Icons */}
//               <motion.div
//                 className="flex gap-6 mt-8 "
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.8, delay: 0.7 }}
//               >
//                 {socialIcons.map((social, i) => (
//                   <a
//                     key={i}
//                     href={social.href}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-gray-600 hover:text-blue-500 transition transform hover:scale-125 text-xl"
//                   >
//                     {social.icon}
//                   </a>
//                 ))}
//               </motion.div>



//             </div>

//           </div>




//           {/* Profile Image */}
//           <div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8 }}
//             className="relative"
//           >
//             <div className="border-2 border-green-600 p-3 rounded-full relative ">
//               {/* <span className="absolute left-0 -bottom-5 w-2 h-2 text-green-800">.</span> */}
//               <div className="w-[200px] h-[200px] sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-full overflow-hidden shadow-lg ">

//                 <img
//                   src={image}
//                   alt="Profile"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             </div>
//           <div>


//         </div>
//       </div>
//     </div>
//   );
// }

// export default HeroPage;







// {/**
//       <div className="h-screen flex justify-center items-center p-2 text-gray-900">
//             <div className="w-full flex flex-col items-center justify-between space-x-20 p-10 rounded-2xl">
                
//                 <div className="flex-1 mt-10 md:mt-0 relative w-full flex flex-col justify-center items-center bg-slate-300">
//                     <div className="absolute inset-0 bg-slate-300"></div>
//                     <div className="relative w-full h-[50%]">
//                         <img
//                             src={image}
//                             alt="Portfolio"
//                             className="w-32 absolute -bottom-16 left-0 right-0 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-64 lg:h-64 object-cover rounded-full shadow-lg"
//                         />
//                     </div>
//                 </div>
//                 <div className="flex-1 text-center md:text-left mt-4 flex justify-center items-center">
//                     <motion.h1
//                         className="text-xl sm:text-lg md:text-4xl lg:text-5xl font-bold mb-4"
//                         initial={{ opacity: 0, y: -50 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.5 }}
//                     >
//                         Welcome to My Portfolio
//                     </motion.h1>

//                     <motion.p
//                         className="text-sm md:text-xl lg:text-2xl text-gray-600 mb-6"
//                         initial={{ opacity: 0, y: 50 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.5, delay: 0.2 }}
//                     >
//                         I'm a Full Stack MERN Developer passionate about building high-performance web applications with great user experiences.
//                     </motion.p>

             
//                     <div className="mt-6 flex justify-center md:justify-start space-x-6">
//                         <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">
//                             <motion.div
//                                 whileHover={{ scale: 1.1 }}
//                                 whileTap={{ scale: 0.95 }}
//                                 className="text-3xl md:text-4xl lg:text-5xl text-blue-600 hover:text-blue-800"
//                             >
//                                 <FaLinkedin />
//                             </motion.div>
//                         </a>
//                         <a href="https://www.fiverr.com/s/P2LQBlo" target="_blank" rel="noopener noreferrer">
//                             <motion.div
//                                 whileHover={{ scale: 1.1 }}
//                                 whileTap={{ scale: 0.95 }}
//                                 className="text-3xl md:text-4xl lg:text-5xl text-green-600 hover:text-green-800"
//                             >
//                                 <TbBrandFiverr />
//                             </motion.div>
//                         </a>
//                         <a href="https://www.upwork.com/services/product/development-it-front-end-developer-of-your-website-1805245645717619763?ref=project_share" target="_blank" rel="noopener noreferrer">
//                             <motion.div
//                                 whileHover={{ scale: 1.1 }}
//                                 whileTap={{ scale: 0.95 }}
//                                 className="text-3xl md:text-4xl lg:text-5xl text-green-500 hover:text-green-700"
//                             >
//                                 <FaUpwork />
//                             </motion.div>
//                         </a>
//                         <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
//                             <motion.div
//                                 whileHover={{ scale: 1.1 }}
//                                 whileTap={{ scale: 0.95 }}
//                                 className="text-3xl md:text-4xl lg:text-5xl text-black hover:text-gray-700"
//                             >
//                                 <BsTwitterX />
//                             </motion.div>
//                         </a>
//                         <a onClick={handleClick} className="text-black text-3xl hover:text-blue-600 transition">
//                             <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
//                                 <BsSend />
//                             </motion.div>
//                         </a>
//                     </div>
//                 </div>
//             </div>
//         </div>
//  */}


import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";
import { IoIosArrowDropright } from "react-icons/io";
import image from "../../assets/home-bg.jpg";

function HeroPage() {
  const socialIcons = [
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/" },
    { icon: <FaGithub />, href: "https://github.com/" },
    { icon: <BsWhatsapp />, href: "https://wa.me/your_number" },
    { icon: <FaFacebook />, href: "https://facebook.com/" },
    { icon: <FaYoutube />, href: "https://youtube.com/" },
  ];

  return (
    <section className="min-h-screen flex items-center px-6 md:px-20 lg:px-36">

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="w-full flex flex-col-reverse md:flex-row items-center justify-between gap-14"
      >

        {/*left */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-green-500 font-medium mb-2">
            Hello, I'm
          </p>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
            Rabeya Bosri
          </h1>

          <h2 className="text-xl md:text-2xl mt-3 text-gray-600 font-medium">
            MERN Stack Developer
          </h2>

          <p className="mt-6 text-gray-600 leading-8 max-w-xl">
            I'm a MERN Stack Developer specializing in building fast,
            scalable and modern web applications using MongoDB,
            Express.js, React.js and Node.js.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 mt-8">
            <Link
              to="/project"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full transition"
            >
              View My Work
              <IoIosArrowDropright className="text-xl" />
            </Link>

            <button className="border border-gray-300 px-6 py-3 rounded-full hover:bg-gray-100 transition">
              Download CV
            </button>
          </div>

          {/* Social */}
          <div className="flex justify-center md:justify-start gap-5 mt-8">
            {socialIcons.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border flex items-center justify-center text-xl hover:bg-green-500 hover:text-white hover:border-green-500 transition"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center"
        >
          <div className="relative">
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-green-100 absolute blur-3xl"></div>

            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-green-500 shadow-2xl">
              <img
                src={image}
                alt="Rabeya Bosri"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

      </motion.div>
      
    </section>
  );
}

export default HeroPage;