import React from "react";
import { motion } from "framer-motion"; // Import motion for animation
import { FaReact, FaNode, FaDatabase, FaPython } from 'react-icons/fa'; // React Icons for skills

const SkillPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800 h-screen">
      <div className="max-w-6xl w-full p-10 rounded-2xl shadow-xl border bg-white">
        <h1 className="text-4xl font-bold mb-8 text-center text-blue-500">My Skills</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Frontend Skill */}
          <div className="p-6 border rounded-lg shadow-md bg-gradient-to-r from-blue-500 to-indigo-500">
            <h2 className="text-2xl font-semibold mb-4 text-white">Frontend Development</h2>
            <div className="flex items-center justify-between mb-4">
              <FaReact className="text-4xl text-white" />
              <motion.div
                className="w-full bg-gray-300 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: '85%' }}
                transition={{ duration: 1 }}
              >
                <div className="h-2 bg-green-500 rounded-full"></div>
              </motion.div>
              <span className="text-white">85%</span>
            </div>
          </div>

          {/* Backend Skill */}
          <div className="p-6 border rounded-lg shadow-md bg-gradient-to-r from-green-500 to-teal-500">
            <h2 className="text-2xl font-semibold mb-4 text-white">Backend Development</h2>
            <div className="flex items-center justify-between mb-4">
              <FaNode className="text-4xl text-white" />
              <motion.div
                className="w-full bg-gray-300 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: '80%' }}
                transition={{ duration: 1 }}
              >
                <div className="h-2 bg-yellow-500 rounded-full"></div>
              </motion.div>
              <span className="text-white">80%</span>
            </div>
          </div>

          {/* Database Skill */}
          <div className="p-6 border rounded-lg shadow-md bg-gradient-to-r from-yellow-500 to-red-500">
            <h2 className="text-2xl font-semibold mb-4 text-white">Database Management</h2>
            <div className="flex items-center justify-between mb-4">
              <FaDatabase className="text-4xl text-white" />
              <motion.div
                className="w-full bg-gray-300 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: '75%' }}
                transition={{ duration: 1 }}
              >
                <div className="h-2 bg-blue-500 rounded-full"></div>
              </motion.div>
              <span className="text-white">75%</span>
            </div>
          </div>

          {/* Python Skill */}
          <div className="p-6 border rounded-lg shadow-md bg-gradient-to-r from-indigo-600 to-purple-600">
            <h2 className="text-2xl font-semibold mb-4 text-white">Python (Advanced)</h2>
            <div className="flex items-center justify-between mb-4">
              <FaPython className="text-4xl text-white" />
              <motion.div
                className="w-full bg-gray-300 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: '90%' }}
                transition={{ duration: 1 }}
              >
                <div className="h-2 bg-red-500 rounded-full"></div>
              </motion.div>
              <span className="text-white">90%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillPage;
