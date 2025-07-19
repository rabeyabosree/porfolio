import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNode, FaGithub, FaPython, FaAws } from "react-icons/fa";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiVercel,
  SiPostman,
  SiFigma,
  SiNetlify,
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
    <div className="min-h-screen flex flex-col items-center bg-white py-16 px-4">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl mt-16 md:text-3xl lg:text-4xl font-bold text-center mb-7 text-transparent bg-clip-text bg-gray-500"
      >
        My Skills
      </motion.h1>

      <section className="mx-auto px-4 py-4 space-y-16">
        {toolsSkills.map((section, i) => (
          <motion.div
            key={section.category}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center gap-9"
          >
           

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-7">
              {section.items.map((skill, index) => (
                <motion.div
                  key={`${skill.name}-${index}`}
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center justify-center w-[130px] bg-green-50 border border-green-100 rounded-xl px-2 py-3 shadow hover:shadow-lg transition-all duration-300 relative"
                >
                  <div
                    className={`text-2xl mb-2 p-2 rounded-full text-white absolute -left-4 -top-4 ${skill.color} bg-green-400`}
                  >
                    {skill.icon}
                  </div>
                  <p className="text-sm font-semibold text-center text-gray-800 ">
                    {skill.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
};

export default SkillPage;



















