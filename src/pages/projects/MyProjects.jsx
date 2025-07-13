import React from "react";
import { motion } from "framer-motion";
import image1 from "../../assets/mernstack1.png";
import image2 from "../../assets/mernsstack2.jpg";
import image3 from "../../assets/mernstack3.png";
import image4 from "../../assets/mernstack4.png";
import image5 from "../../assets/mernstack5.webp";
import image6 from "../../assets/mernstack6.webp";
import image7 from "../../assets/mernstack7.png";
import image8 from "../../assets/mernstack8.jpeg";
import ProjectCart from './ProjectCart';

const MyProjects = () => {
  const myProject = [
    { project: image1 },
    { project: image2 },
    { project: image3 },
    { project: image4 },
    { project: image5 },
    { project: image6 },
    { project: image7 },
    { project: image8 },
  ];

  return (
    <div className="py-16 px-4 bg-gradient-to-b from-white to-gray-50 text-gray-800 flex flex-col items-center justify-center">
      <motion.h1
        className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-4 text-center"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        My Projects
      </motion.h1>

     <ProjectCart
      title={"Online Learning Project"}
      description={"a comprehensive online learning platform"}
      tags={["React", "Node", "express", "mongodb"]}
      img={image1}
      liveLink={"https<lkaslfdk"}
      github={"httpsakfj"}

      />
    </div>
  );
};

export default MyProjects;







