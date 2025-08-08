import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNode, FaGithub, FaAws } from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiVercel,
  SiNetlify,
  SiFigma,
} from "react-icons/si";

const SkillPage = () => {
  const toolsSkills = [
    {
      category: "Frontend",
      items: [
        { name: "React.js", icon: <FaReact />, color: "text-sky-500" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-cyan-400" },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", icon: <FaNode />, color: "text-green-600" },
        { name: "Express.js", icon: <SiExpress />, color: "text-gray-800" },
        { name: "MongoDB", icon: <SiMongodb />, color: "text-green-500" },
      ],
    },
    {
      category: "Hosting",
      items: [
        { name: "Vercel", icon: <SiVercel />, color: "text-black" },
        { name: "Netlify", icon: <SiNetlify />, color: "text-green-400" },
        { name: "AWS", icon: <FaAws />, color: "text-orange-400" },
      ],
    },
    {
      category: "Others",
      items: [
        { name: "GitHub", icon: <FaGithub />, color: "text-black" },
        { name: "Figma", icon: <SiFigma />, color: "text-pink-500" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white py-10 px-4">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-xl md:text-2xl font-bold text-center text-gray-700 mb-10"
      >
        My Skills
      </motion.h1>

      {/* Skills Grid */}
      <div className="max-w-4xl mx-auto space-y-12">
        {toolsSkills.map((section, i) => (
          <motion.div
            key={section.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Category Title */}
            <h2 className="text-base font-semibold text-gray-600 mb-4">{section.category}</h2>

            {/* Skill Items */}
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
              {section.items.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center p-2 bg-gray-50 rounded-md border border-gray-100 hover:shadow-sm transition"
                >
                  <div className={`text-xl mb-1 ${skill.color}`}>{skill.icon}</div>
                  <p className="text-xs text-gray-700">{skill.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillPage;





















