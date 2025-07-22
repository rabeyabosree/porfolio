import React from 'react'
import { motion } from 'framer-motion'

const ProjectCart = ({ title, tags, img, liveLink, github, index }) => {
  // Animation variant for sliding in from left
  const slideVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  }

  return (
    <motion.div
      custom={index}
      variants={slideVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="bg-white/70 backdrop-blur-md border border-gray-200 rounded-xl 
                 p-6 shadow-md flex flex-col items-center w-full max-w-[280px] mx-auto"
    >
      {/* Title */}
      <h1 className="text-[16px] font-semibold text-gray-700 mb-3 text-center">
        {title}
      </h1>

      {/* Tags */}
      <div className="flex flex-wrap gap-1 mb-3 justify-center">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="text-xs bg-gray-200 text-gray-700 px-2 py-[2px] rounded"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Image */}
      <div className="w-full rounded-md overflow-hidden mb-4">
        <img
          src={img}
          alt={title}
          className="object-cover h-32 w-full"
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-3 text-sm">
        {/* Live Demo Button */}
        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-600 hover:bg-green-700 text-white px-3 py-1.5 
                     rounded-md transition duration-300"
        >
          Live Demo
        </a>

        {/* Glassy GitHub Button */}
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1.5 rounded-md text-gray-700 text-sm font-medium
                     bg-white/20 border border-white/40 shadow-md backdrop-blur-md
                     hover:bg-white/30 hover:shadow-lg transition duration-300"
        >
          Github Repo
        </a>
      </div>
    </motion.div>
  )
}

export default ProjectCart




