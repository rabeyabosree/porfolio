import React from "react";
import { motion } from "framer-motion";
import image from "../../assets/portfolioimage.jpg";

const AboutPage = () => {
  return (
    <motion.div
    className="mx-auto bg-gray-100 text-gray-800 min-h-screen flex justify-center items-center px-6"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <motion.div
      className="max-w-6xl w-full flex items-center justify-between"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="flex-1 relative  w-1/2 rounded-full"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={image}
          alt="Profile"
          className="w-72 h-72 object-contain mx-auto rounded-full"
        />
     
       
      </motion.div>

      <motion.div
          className="flex-1  max-w-4xl rounded-2xl p-4 md:p-6"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[16px] text-gray-700 leading-relaxed">
            Hi, I'm a passionate{" "}
            <strong className="text-gray-600">MERN Stack Developer</strong> with
            expertise in building scalable, high-performance web applications. I
            specialize in working with{" "}
            <strong className="text-green-600">MongoDB, Express.js, React.js,</strong>{" "}
            and <strong className="text-yellow-500">Node.js</strong>, creating
            dynamic and user-friendly solutions.
          </p>

          <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex space-x-4 mt-6 "
        >
          <button
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={() => window.location.href = "/cv"} // link to CV download or a modal
          >
            Download CV
          </button>
          <button
            className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-900 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-700"
            onClick={() => window.location.href = "https://github.com"} // replace with your GitHub profile link
          >
            GitHub
          </button>
        </motion.div>
        </motion.div>
       
    </motion.div>
  </motion.div>
  );
};

export default AboutPage;
