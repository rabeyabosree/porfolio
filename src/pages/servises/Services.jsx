import { motion } from "framer-motion";
import React from "react";

const Services = () => {

  const myServices = [
    { name: "Custom Website Development " },
    { name: "E-Commerce Development " },
    { name: "Business Website Development " },
    { name: "Website Redesign and Optimization " },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800 h-screen flex items-center justify-center">
      <div className="max-w-6xl w-full space-x-8 p-10 bg-slate-500">
        <h1 className="text-4xl font-bold mb-4 text-center">Services</h1>
        <p className="text-lg mb-6 text-center">
          I offer a range of web development services to help bring your ideas to life.
        </p>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {myServices.map((service) => {
            return (
              <motion.div key={service.name} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                <div className="p-4 bg-gray-200 rounded shadow-md">
                  {service.name}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Services;

