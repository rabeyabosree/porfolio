import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNode, FaDatabase, FaPython } from 'react-icons/fa';

const SkillPage = () => {
  const skills = [
    {
      title: "Frontend Development",
      icon: <FaReact className="text-4xl text-blue-500" />,
      color: "bg-blue-500",
      percent: "85%",
      width: "85%",
    },
    {
      title: "Backend Development",
      icon: <FaNode className="text-4xl text-green-500" />,
      color: "bg-green-500",
      percent: "80%",
      width: "80%",
    },
    {
      title: "Database Management",
      icon: <FaDatabase className="text-4xl text-yellow-500" />,
      color: "bg-yellow-500",
      percent: "75%",
      width: "75%",
    },
    {
      title: "Python (Advanced)",
      icon: <FaPython className="text-4xl text-purple-600" />,
      color: "bg-purple-500",
      percent: "90%",
      width: "90%",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 text-gray-800 min-h-screen flex items-center justify-center">
      <div className="w-full p-8 md:p-12">
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-extrabold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
          My Skills
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-xl shadow-md bg-white border hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <h2 className="text-xl font-semibold mb-4 text-gray-700">{skill.title}</h2>
              <div className="flex items-center gap-4">
                {skill.icon}
                <div className="flex-1">
                  <motion.div
                    className="w-full bg-gray-200 h-3 rounded-full overflow-hidden"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1 }}
                  >
                    <div
                      className={`h-3 ${skill.color} rounded-full`}
                      style={{ width: skill.width }}
                    ></div>
                  </motion.div>
                </div>
                <span className="font-bold text-gray-700">{skill.percent}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillPage;




