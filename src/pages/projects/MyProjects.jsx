import { useState } from "react";
import { motion } from "framer-motion";
import image1 from "../../assets/project1.jpeg";
import image2 from "../../assets/project2.jpeg";
import image3 from "../../assets/project3.jpeg";
import image4 from "../../assets/grocery.jpeg";
import image5 from "../../assets/clothing.jpeg";
import image6 from "../../assets/jewelery.jpeg";
import image7 from "../../assets/beauty.jpeg";
import image8 from "../../assets/quiz.jpeg";
import ProjectCart from "./ProjectCart";
import { GrNode, GrReactjs } from "react-icons/gr";
import { SiExpress } from "react-icons/si";
import { TbBrandMongodb } from "react-icons/tb";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";



const MyProjects = () => {
  const [showProject, setShowProject] = useState(false)

  const allProjects = [
    {
      title: "Secure E-Commerce Order Management System",
      desc: "A full-stack e-commerce order management system featuring OTP-based order verification, fraud detection, risk scoring, order tracking, and anti-spam protection to minimize fake orders and enhance platform security.",
      img: image1,
      liveLink: "https://smart-cod-ten.vercel.app",
      github: "https://github.com/rabeyabosree/SmartCOD/tree/main",
    },
    {
      title: "Service Marketplace Platform",
      desc: "A full-stack service marketplace connecting customers with service providers through service listings, advanced search & filters, booking management, role-based dashboards, ratings & reviews, and a responsive, user-friendly interface.",
      img: image2,
      liveLink: "https://local-service-finder-nine.vercel.app/",
      github: "https://github.com/rabeyabosree/local_service_finder",
    },
    {
      title: "Hostel Booking Platform",
      desc: "A full-stack hostel booking platform with secure JWT authentication, role-based access, hostel management, Cloudinary image uploads, real-time chat, booking status tracking, and a RESTful API for a seamless booking experience.",
      img: image3,
      liveLink: "https://hostelbooking-beqy.vercel.app",
      github: "https://github.com/rabeyabosree/hostelbooking",
    },
    {
      title: "Grocery E-Commerce Website",
      desc: "A responsive grocery shopping platform with categorized products, a clean UI, secure checkout, and real-time order tracking for a fast and seamless shopping experience.",
      img: image4,
      liveLink: "https://grocery-website-nu.vercel.app/",
      github: "https://github.com/rabeyabosree/groceryWebsite",
    },

    {
      title: "Jewelry E-Commerce Website",
      desc: "A modern jewelry e-commerce platform featuring elegant product browsing, secure authentication, online payments, wishlist, order tracking, customer reviews, and a responsive design for a seamless shopping experience.",
      img: image5,
      liveLink: "https://jewelery-webite.vercel.app/",
      github: "https://github.com/rabeyabosree/jeweleryWebite",
    },
    {
      title: "Clothing E-Commerce Website",
      desc: "A modern clothing e-commerce platform with secure authentication, online payment integration, customer accounts, order tracking, product reviews, an admin dashboard, and all essential features for a seamless fashion shopping experience.",
      img: image6,
      liveLink: "https://clothingwebsite-two.vercel.app/",
      github: "https://github.com/rabeyabosree/clothingwebsite",
    },
    {
      title: "Beauty E-Commerce Website",
      desc: "A responsive beauty e-commerce website featuring product listings, product details, a shopping cart, cash-on-delivery checkout, and an easy-to-manage admin panel for seamless product management.",
      img: image7,
      liveLink: "https://beauty-website-rho.vercel.app/",
      github: "https://github.com/rabeyabosree/beautyWebsite",
    },
    {
      title: "Quiz App",
      desc: "A simple quiz application with secure user login, interactive quizzes, real-time score calculation, and a clean, responsive interface for an engaging learning experience.",
      img: image8,
      liveLink: "https://quiz-app-e86m.vercel.app/",
      github: "https://github.com/rabeyabosree/quizApp",
    },

  ];

  const techTags = [
    <GrReactjs />,
    <GrNode />,
    <SiExpress />,
    <TbBrandMongodb />,
  ];

  const displayedProjects = showProject ? allProjects : allProjects.slice(0, 4);

  return (
    <section className="pt-20 px-7 md:mx-12">
      <div className="max-w-6xl mx-auto">

        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >

          <p className="text-green-500 uppercase tracking-[4px] font-semibold mb-3">
            Portfolio
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            My Projects
          </h2>

          <p className="max-w-2xl mx-auto mt-5 text-gray-500 leading-8">
            Here are some of my recent MERN stack projects showcasing
            responsive UI, clean architecture, REST APIs, authentication,
            and modern web development practices.
          </p>

        </motion.div>

        {/* projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
            >

              {/* project card */}
              <ProjectCart
                title={project.title}
                desc={project.desc}
                img={project.img}
                tags={techTags}
                liveLink={project.liveLink}
                github={project.github}
              />

            </motion.div>
          ))}
        </div>

        {/* see all projects btn */}
        {/* <div className="text-right flex ">
          <Link to={"/project"}
            className="flex items-center justify-between gap-1 mx-auto mt-8 px-6 py-3 text-green-600 hover:text-green-600 underline font-semibold rounded-lg transition">
            See all <IoIosArrowRoundForward />
          </Link>
        </div> */}

        <button
          onClick={() => setShowProject(!showProject)}
          className="inline-flex items-center  gap-2 pt-4 px-2 underline text-green-500 font-medium hover:text-green-600 transition-all duration-300"
        >
          <span>{showProject ? "See Less" : "See More"}</span>

          {showProject ? (
            <IoIosArrowUp className="text-lg" />
          ) : (
            <IoIosArrowDown className="text-lg" />
          )}
        </button>

      </div>
    </section>
  );
};

export default MyProjects;









