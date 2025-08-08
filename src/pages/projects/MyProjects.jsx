import { useState } from "react";
import { motion } from "framer-motion";
import image1 from "../../assets/mernstack1.png";
import image2 from "../../assets/mernsstack2.jpg";
import image3 from "../../assets/mernstack3.png";
import image4 from "../../assets/mernstack4.png";
import image5 from "../../assets/mernstack5.webp";
import image6 from "../../assets/mernstack6.webp";
import image7 from "../../assets/mernstack7.png";
import image8 from "../../assets/mernstack8.jpeg";
import ProjectCart from "./ProjectCart";
import { GrNode, GrReactjs } from "react-icons/gr";
import { SiExpress } from "react-icons/si";
import { TbBrandMongodb } from "react-icons/tb";

const MyProjects = () => {
  const allProjects = [
    {
      title: "Online Learning Project",
      img: image1,
      liveLink: "https://mern-stack-project-liart.vercel.app/",
      github: "https://github.com/rabeyabosree/mern-Stack-Project",
    },
    {
      title: "Quiz App",
      img: image2,
      liveLink: "https://quiz-app-e86m.vercel.app/",
      github: "https://github.com/rabeyabosree/quizApp",
    },
    {
      title: "Course Platform",
      img: image3,
      liveLink: "https://onlinelearning-c39p.vercel.app/",
      github: "https://github.com/rabeyabosree/onlinelearning",
    },
    { title: "Project 4", img: image4, liveLink: "https://new-project-orpin-gamma.vercel.app/", github: "https://github.com/rabeyabosree/newProject" },
   
  ];

  const techTags = [<GrReactjs />, <GrNode />, <SiExpress />, <TbBrandMongodb />];

  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? allProjects : allProjects.slice(0, 3);

  return (
    <div className="py-16 px-4 bg-white flex flex-col items-center justify-center">
      <motion.h1
        className="text-2xl text-gray-800 md:text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gray-600 mb-10 mt-16 text-center"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        My Projects
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9 w-full max-w-5xl px-5">
        {displayedProjects.map((proj, index) => (
          <ProjectCart
            key={index}
            title={proj.title}
            tags={techTags}
            img={proj.img}
            liveLink={proj.liveLink}
            github={proj.github}
          />
        ))}
      </div>

      {allProjects.length > 3 && (
        <button
          onClick={() => setShowAll((prev) => !prev)}
          className="mt-8 px-6 py-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition"
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      )}
    </div>
  );
};

export default MyProjects;









