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
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/rabeya-bosree/" },
    { icon: <FaGithub />, href: "https://github.com/rabeyabosree" },
    { icon: <BsWhatsapp />, href: "https://wa.me/01927623786" },
    { icon: <FaFacebook />, href: "https://www.facebook.com/00rabeyabosri" },
    { icon: <FaYoutube />, href: "https://www.youtube.com/@rabeyaBosri580" },
  ];

  // cv handledownload
  const handleDownlod = () => {
    const link = document.createElement("a");
    link.href = "/cv.pdf";
    console.log(link.href)
    link.download = "Rabeya_Bosri_cv.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link)
  }

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

            <button onClick={handleDownlod} className="border border-gray-300 px-6 py-3 rounded-full hover:bg-gray-100 transition">
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