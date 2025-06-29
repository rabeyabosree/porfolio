import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
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
    <div className="p-8 text-gray-800 flex flex-col items-center justify-center">
      <div className="mx-6 max-w-4xl sm:mx-8 md:mx-12 lg:mx-20 w-full ">
        {/* Animated title */}
        <motion.h1
          className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -50 }} // Start off-screen and transparent
          animate={{ opacity: 1, y: 0 }} // Fade in and move to its final position
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h1>

        {/* Animated row below title */}
        <motion.div
          className="mb-8 bg-blue-500 w-16 h-1 rounded-full mx-auto"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1 }}
        />

        {/* Project Grid */}
        <div className="grid grid-cols-2  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-4 md:gap-6 lg:gap-8 w-full justify-center">
          {myProject.map((project, index) => {
            return (
              <motion.div
                key={index}
                className="w-52 lg:w-full group" // Add the "group" class for hover effect
                initial={{ opacity: 0, y: 50 }} // Start with fade and move-up effect
                animate={{ opacity: 1, y: 0 }} // Fade-in and move to the final position
                transition={{ delay: index * 0.2, duration: 0.5 }} // Stagger delay for each project
              >
                {/* Image with hover effect */}
                <img
                  src={project.project}
                  alt={`Project ${index + 1}`}
                  className="w-48 h-52 md:w-full object-cover rounded-lg shadow-md transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-xl"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MyProjects;






