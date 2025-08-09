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

const skills = [
  { name: "React.js", icon: <FaReact />, color: "text-sky-500" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-cyan-400" },
  { name: "Node.js", icon: <FaNode />, color: "text-green-600" },
  { name: "Express.js", icon: <SiExpress />, color: "text-gray-800" },
  { name: "MongoDB", icon: <SiMongodb />, color: "text-green-500" },
  { name: "Vercel", icon: <SiVercel />, color: "text-black" },
  { name: "Netlify", icon: <SiNetlify />, color: "text-green-400" },
  { name: "AWS", icon: <FaAws />, color: "text-orange-400" },
  { name: "GitHub", icon: <FaGithub />, color: "text-black" },
  { name: "Figma", icon: <SiFigma />, color: "text-pink-500" },
];

const SkillPage = () => {
  return (
    <div className="py-12 px-4">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10"
      >
        My Skills
      </motion.h1>

      {/* Skills Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="relative bg-white/70 backdrop-blur-lg border border-white/40 shadow-lg rounded-xl p-5 flex flex-col items-center text-center hover:shadow-xl cursor-pointer transition"
          >
            <div
              className={`text-3xl mb-3 ${skill.color}`}
            >
              {skill.icon}
            </div>
            <p className="text-sm font-medium text-gray-700">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillPage;
























