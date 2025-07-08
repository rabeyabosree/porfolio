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

      <motion.div
        className="h-1 w-24 bg-blue-500 rounded-full mb-12"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1 }}
        style={{ transformOrigin: "left" }}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl w-full">
        {myProject.map((project, index) => (
          <motion.div
            key={index}
            className="group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl bg-white transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <img
              src={project.project}
              alt={`Project ${index + 1}`}
              className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MyProjects;







