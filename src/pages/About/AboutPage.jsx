import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center px-4 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Title with animation */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h2>

      <motion.div
        className="flex flex-col md:flex-row items-center max-w-5xl w-full"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Text Section */}
        <div className="p-6 md:p-12 flex flex-col justify-center text-center md:text-left">
          <p className="text-gray-700 text-base md:text-lg leading-relaxed tracking-wide mb-6">
            I'm a <span className="font-semibold text-gray-600">MERN Stack Developer</span> specializing in creating fast, scalable, and visually stunning web applications. I love bringing ideas to life using <span className="font-medium text-gray-600">MongoDB, Express.js, React.js, and Node.js</span>.
          </p>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed tracking-wide mb-6">
            I completed my graduation from a <span className="font-semibold text-gray-600">Mohila Madrasa</span>. After that, I began my career by working in a Madrasa as a teacher. Teaching gave me discipline and patience, but I was always eager to explore the world of technology.
          </p>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed tracking-wide">
            In <span className="font-semibold text-gray-600">2023</span>, I discovered my passion for programming. Since then, I’ve been fully focused on learning and building projects with modern web technologies. My goal is to grow as a developer and create meaningful digital solutions that make a difference.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AboutPage;







