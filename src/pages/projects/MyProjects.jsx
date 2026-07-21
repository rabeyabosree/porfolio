import { useState } from "react";
import { motion } from "framer-motion";
import image1 from "../../assets/mernstack1.png";
import image2 from "../../assets/mernsstack2.jpg";
import image3 from "../../assets/mernstack3.png";
import image4 from "../../assets/mernstack4.png";
import ProjectCart from "./ProjectCart";
import { GrNode, GrReactjs } from "react-icons/gr";
import { SiExpress } from "react-icons/si";
import { TbBrandMongodb } from "react-icons/tb";

const MyProjects = () => {
  const allProjects = [
    {
      title: "Learning Platform",
      desc: "A full-stack MERN learning platform where users can browse courses, enroll, manage lessons, and enjoy a modern responsive interface.",
      img: image1,
      liveLink: "https://mern-stack-project-liart.vercel.app/",
      github: "https://github.com/rabeyabosree/mern-Stack-Project",
    },
    {
      title: "Quiz Application",
      desc: "An interactive quiz application with multiple-choice questions, score tracking, instant results, and a clean responsive React interface.",
      img: image2,
      liveLink: "https://quiz-app-e86m.vercel.app/",
      github: "https://github.com/rabeyabosree/quizApp",
    },
    {
      title: "Course Platform",
      desc: "A responsive educational platform where users can discover online courses with a modern UI and smooth user experience.",
      img: image3,
      liveLink: "https://onlinelearning-c39p.vercel.app/",
      github: "https://github.com/rabeyabosree/onlinelearning",
    },
    {
      title: "Modern MERN Website",
      desc: "A modern full-stack web application featuring reusable components, responsive layouts, REST APIs, authentication, and optimized performance.",
      img: image4,
      liveLink: "https://new-project-orpin-gamma.vercel.app/",
      github: "https://github.com/rabeyabosree/newProject",
    },
  ];

  const techTags = [
    <GrReactjs />,
    <GrNode />,
    <SiExpress />,
    <TbBrandMongodb />,
  ];

  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? allProjects : allProjects.slice(0, 3);

  return (
    <section className="py-20 px-7 md:mx-12">
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

        {/* show more btn */}
        {allProjects.length > 3 && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 rounded-full bg-green-500 text-white font-medium hover:bg-green-600 transition duration-300"
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default MyProjects;









