import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaFacebook, FaYoutube } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import image from "../../assets/profile2.jpg";

function HeroPage() {
 

  return (
    <div className="h-screen flex flex-col justify-center items-center text-gray-900">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="bg-gray-50 backdrop-blur-sm right-0 h-72 w-full relative flex justify-center items-center">
          <img
            src={image}
            alt="Profile"
            className="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 object-cover rounded-full shadow-lg absolute -bottom-20"
          />
        </div>

        {/* Text Section */}
        <div className="text-center px-6 sm:px-12 md:px-20 max-w-5xl mt-24">
          <motion.h1
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Welcome to My Portfolio
          </motion.h1>

          <motion.p
            className="text-sm md:text-base lg:text-xl text-gray-400 mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I'm a Full Stack MERN Developer passionate about building high-performance web applications with great user experiences.
          </motion.p>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-6 mt-8">
            <a
              href="https://www.linkedin.com/feed/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-3xl md:text-4xl lg:text-5xl text-blue-600 hover:text-blue-800"
              >
                <FaLinkedin />
              </motion.div>
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-3xl md:text-4xl lg:text-5xl text-gray-800 hover:text-black"
              >
                <FaGithub />
              </motion.div>
            </a>

            <a
              href="https://wa.me/your_number" // Replace with your actual WhatsApp link
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-3xl md:text-4xl lg:text-5xl text-green-500 hover:text-green-700"
              >
                <BsWhatsapp />
              </motion.div>
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-3xl md:text-4xl lg:text-5xl text-blue-700 hover:text-blue-900"
              >
                <FaFacebook />
              </motion.div>
            </a>

            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-3xl md:text-4xl lg:text-5xl text-red-600 hover:text-red-800"
              >
                <FaYoutube />
              </motion.div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroPage;


{/**
      <div className="h-screen flex justify-center items-center p-2 text-gray-900">
            <div className="w-full flex flex-col items-center justify-between space-x-20 p-10 rounded-2xl">
                
                <div className="flex-1 mt-10 md:mt-0 relative w-full flex flex-col justify-center items-center bg-slate-300">
                    <div className="absolute inset-0 bg-slate-300"></div>
                    <div className="relative w-full h-[50%]">
                        <img
                            src={image}
                            alt="Portfolio"
                            className="w-32 absolute -bottom-16 left-0 right-0 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-64 lg:h-64 object-cover rounded-full shadow-lg"
                        />
                    </div>
                </div>
                <div className="flex-1 text-center md:text-left mt-4 flex justify-center items-center">
                    <motion.h1
                        className="text-xl sm:text-lg md:text-4xl lg:text-5xl font-bold mb-4"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Welcome to My Portfolio
                    </motion.h1>

                    <motion.p
                        className="text-sm md:text-xl lg:text-2xl text-gray-600 mb-6"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        I'm a Full Stack MERN Developer passionate about building high-performance web applications with great user experiences.
                    </motion.p>

             
                    <div className="mt-6 flex justify-center md:justify-start space-x-6">
                        <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="text-3xl md:text-4xl lg:text-5xl text-blue-600 hover:text-blue-800"
                            >
                                <FaLinkedin />
                            </motion.div>
                        </a>
                        <a href="https://www.fiverr.com/s/P2LQBlo" target="_blank" rel="noopener noreferrer">
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="text-3xl md:text-4xl lg:text-5xl text-green-600 hover:text-green-800"
                            >
                                <TbBrandFiverr />
                            </motion.div>
                        </a>
                        <a href="https://www.upwork.com/services/product/development-it-front-end-developer-of-your-website-1805245645717619763?ref=project_share" target="_blank" rel="noopener noreferrer">
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="text-3xl md:text-4xl lg:text-5xl text-green-500 hover:text-green-700"
                            >
                                <FaUpwork />
                            </motion.div>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="text-3xl md:text-4xl lg:text-5xl text-black hover:text-gray-700"
                            >
                                <BsTwitterX />
                            </motion.div>
                        </a>
                        <a onClick={handleClick} className="text-black text-3xl hover:text-blue-600 transition">
                            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                                <BsSend />
                            </motion.div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
 */}