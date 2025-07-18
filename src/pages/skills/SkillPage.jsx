import React from "react";
import { FaReact, FaNodeJs, FaAws, FaGithub } from "react-icons/fa";
import { SiMongodb, SiExpress, SiVercel, SiNetlify, SiFigma } from "react-icons/si";

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React.js", icon: <FaReact className="text-sky-500" /> },
      { name: "Tailwind CSS", icon: <SiFigma className="text-cyan-400" /> },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-800" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    ],
  },
  {
    category: "Hosting",
    items: [
      { name: "Vercel", icon: <SiVercel className="text-black" /> },
      { name: "Netlify", icon: <SiNetlify className="text-green-400" /> },
      { name: "AWS", icon: <FaAws className="text-orange-400" /> },
    ],
  },
  {
    category: "Others",
    items: [
      { name: "GitHub", icon: <FaGithub className="text-black" /> },
      { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
    ],
  },
];

const SkillPage = () => {
  return (
    <div className="px-4 py-16 min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto space-y-14">
        {skills.map((section, index) => (
          <div key={index} className="">
            <h2 className="text-xl sm:text-2xl font-bold mb-6 text-gray-800 border-b pb-2">
              {section.category}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {section.items.map((item, idx) => (
                <div
                  key={idx}
                  className="relative w-full h-24 sm:h-28 md:h-32 bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 flex items-center justify-center"
                >
                  <div className="absolute top-4 left-4 text-2xl">{item.icon}</div>
                  <div className="absolute bottom-4 right-4 text-gray-600 font-medium text-sm sm:text-base">
                    {item.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillPage;







