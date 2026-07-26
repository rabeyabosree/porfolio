import React, { useState } from "react";
import { motion } from "framer-motion";

const ProjectCart = ({ title, desc, tags, img, liveLink, github, index }) => {
  const [expended, setExpended] = useState({});

  // toogle description
  const toogleDescription = (id) => {
    setExpended((prevState) => {
      return {
        ...prevState, [id]: !prevState[id]
      }
    })

  }

  const slideVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <motion.div
      custom={index}
      variants={slideVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -8 }}
      className="bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full p-4 "
    >
      {/* img */}
      <div className="overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full h-52 p-2 rounded-xl object-cover hover:scale-105 hover:rounded-xl transition duration-500"
        />
      </div>

      {/*content */}
      <div className="p-2 md:p-4 flex flex-col flex-1">
        {/* title */}
        <h2 className="text-lg font-semibold text-gray-800 mb-3">
          {title}
        </h2>

        {/* desc */}
        <p className="text-gray-600 text-xs leading-5 min-h-[70px]">
          {expended[index] ? desc : `${desc.substring(0, 130)}...`}
          {/* desc toogle btn */}
          <button onClick={() => toogleDescription(index)} className="pl-1 underline text-green-500 hover:text-green-600">
            {expended[index] ? (
              <span className="text-green-500 hover:text-green-600 text-xs">read less</span>
            ) :
              (
                <span className="text-green-500 hover:text-green-600 text-xs">read more</span>
              )}
          </button>
        </p>



        {/* tech stack */}
        <div className="flex flex-wrap gap-2 mt-4 mb-4">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="flex items-center justify-center w-6 h-6 p-1 rounded-full bg-gray-100 text-lg text-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>

        {/*  btns */}
        <div className="flex gap-3 mt-auto">
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-sm text-center bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg transition"
          >
            Live Demo
          </a>

          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-sm text-center border border-gray-300 hover:bg-gray-100 text-gray-700 py-2 rounded-lg transition"
          >
            GitHub
          </a>
        </div>

      </div>

    </motion.div>
  );
};

export default ProjectCart;


