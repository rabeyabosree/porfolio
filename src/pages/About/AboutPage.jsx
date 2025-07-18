import { motion } from "framer-motion";
import image from "../../assets/profile.jpg";
import { FaGithub } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

const AboutPage = () => {
  return (
    <motion.div
      className="flex items-center justify-center px-4 py-[120px] bg-gradient-to-b from-white to-gray-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="flex flex-col md:flex-row items-center max-w-5xl w-full"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Left - Image */}
        <div className="relative flex items-center justify-center p-8">
          <div className="absolute w-44 h-44 rounded-full bg-gradient-to-tr from-blue-400 to-purple-500 blur-2xl opacity-30"></div>
          <img
            src={image}
            alt="Profile"
            className="relative rounded-full shadow-lg w-40 h-40 aspect-square object-cover transform hover:scale-105 transition-transform duration-500"
          />
        </div>


        {/* Right - Text */}
        <div className="p-6 md:p-12 flex flex-col justify-center text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2 tracking-tight">
            Rabeya Bosri
          </h2>
          <h3 className="text-lg text-blue-600 font-medium mb-4">
            Full Stack Web Developer
          </h3>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed tracking-wide mb-6">
            I'm a <span className="font-semibold text-blue-600">MERN Stack Developer</span> specializing in creating fast, scalable, and visually stunning web applications. I love bringing ideas to life using <span className="font-medium text-purple-600">MongoDB, Express.js, React.js, and Node.js</span>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button
              onClick={() => window.location.href = "/cv"}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full shadow-md flex items-center gap-2 justify-center hover:scale-105 transition-transform duration-300"
            >
              <HiDownload /> Download CV
            </button>
            <button
              onClick={() => window.location.href = "https://github.com"}
              className="border border-gray-800 text-gray-800 px-6 py-2 rounded-full flex items-center gap-2 justify-center hover:bg-gray-800 hover:text-white transition-all duration-300"
            >
              <FaGithub /> View GitHub
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AboutPage;




