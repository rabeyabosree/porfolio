import { motion } from "framer-motion";
import image from "../../assets/profile.jpg";

const AboutPage = () => {
  return (
    <motion.div
      className="flex items-center justify-center px-6 py-16 "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="max-w-5xl w-full overflow-hidden flex flex-col md:flex-row"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Left - Image */}
        <div className="md:w-1/2 relative  flex items-center justify-center p-8">
          <img
            src={image}
            alt="Profile"
            className="rounded-full shadow-lg w-40 h-40 object-cover transform hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Right - Text */}
        <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
           Rabeya Bosri
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
            I'm a MERN Stack Developer specializing in creating fast, scalable, and visually stunning web applications. I love bringing ideas to life using MongoDB, Express.js, React.js, and Node.js.
          </p>
          <div className="flex flex-col px-7 sm:flex-row gap-4 justify-center md:justify-start">
            <button
              onClick={() => window.location.href = "/cv"}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full shadow-md hover:scale-105 transition-transform duration-300"
            >
              Download CV
            </button>
            <button
              onClick={() => window.location.href = "https://github.com"}
              className="border border-gray-800 text-gray-800 px-6 py-2 rounded-full hover:bg-gray-800 hover:text-white transition-all duration-300"
            >
              View GitHub
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AboutPage;



