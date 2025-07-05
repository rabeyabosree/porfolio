import { motion } from "framer-motion";
import image from "../../assets/portfolioimage.jpg";

const AboutPage = () => {
  return (
    <motion.div
      className="bg-gray-50 text-gray-800 min-h-screen flex justify-center items-center px-6 py-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="max-w-6xl w-full flex flex-col md:flex-row items-center bg-white shadow-lg rounded-2xl p-6 md:p-10 gap-10"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Image Section */}
        <motion.div
          className="w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-blue-500 shadow-md flex-shrink-0"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={image}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            About Me
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
            Hi, I'm a passionate{" "}
            <strong className="text-gray-800">MERN Stack Developer</strong> with expertise in building scalable, high-performance web applications. I specialize in{" "}
            <strong>MongoDB, Express.js, React.js</strong>, and{" "}
            <strong>Node.js</strong>, creating dynamic and user-friendly solutions.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <button
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={() => window.location.href = "/cv"}
            >
              Download CV
            </button>
            <button
              className="bg-gray-800 text-white px-6 py-2 rounded-md hover:bg-gray-900 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-700"
              onClick={() => window.location.href = "https://github.com"}
            >
              GitHub
            </button>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AboutPage;

