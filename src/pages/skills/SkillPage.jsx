import { motion } from "framer-motion";
import { FaReact, FaNode, FaGithub, } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress, SiVercel, SiNetlify, } from "react-icons/si";

const skills = [
  { name: "React.js", icon: <FaReact />, type: "Frontend", color: "text-sky-500" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, type: "UI Design", color: "text-cyan-400" },
  { name: "Node.js", icon: <FaNode />, type: "Backend", color: "text-green-600" },
  { name: "Express.js", icon: <SiExpress />, type: "Backend", color: "text-gray-800" },
  { name: "MongoDB", icon: <SiMongodb />, type: "Database", color: "text-green-500" },
  { name: "Vercel", icon: <SiVercel />, type: "Deployment", color: "text-black" },
  { name: "Netlify", icon: <SiNetlify />, type: "Deployment", color: "text-teal-500" },
  { name: "GitHub", icon: <FaGithub />, type: "Version Control", color: "text-black" },
];

const SkillPage = () => {
  return (
    <section className="pt-20 px-5 md:px-10">
      <div className="max-w-6xl mx-auto">

        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-green-500 font-semibold uppercase tracking-[4px] mb-3">
            Skills
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            My Technical Skills
          </h2>

          <p className="max-w-2xl mx-auto mt-5 text-gray-500 leading-8">
            I specialize in building modern, responsive, and scalable MERN
            stack applications using the latest frontend and backend
            technologies.
          </p>
        </motion.div>

        {/* skill card grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-12 mx-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              transition={{
                duration: 0.3,
                delay: index * 0.05,
              }}
              viewport={{ once: true }}
              className="bg-gray-50/70 backdrop-blur-lg rounded-2xl shadow-md hover:shadow-xl border border-gray-100 p-6 md:p-8 flex flex-col items-center text-center transition-all"
            >
              <div className={`text-5xl md:text-6xl mb-5 ${skill.color}`}>
                {skill.icon}
              </div>

              <h3 className="text-lg  font-semibold text-gray-800">
                {skill.name}
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                {skill.type}
              </p>

              <div className="mt-6 w-full h-2 rounded-full bg-gray-200 overflow-hidden">
                <div className="h-full w-full bg-green-500 rounded-full animate-progress"></div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SkillPage;
























