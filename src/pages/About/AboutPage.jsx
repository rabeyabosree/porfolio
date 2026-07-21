import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <section className="py-20 px-8 md:px-12 bg-black/80 text-white">
      <div className="max-w-6xl mx-auto">

        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-green-400 uppercase tracking-[4px] mb-3">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Passionate MERN Stack Developer
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-5 leading-8">
            I enjoy building clean, scalable and user-friendly web
            applications while continuously improving my skills.
          </p>

        </motion.div>

        {/* content */}
        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="leading-8 text-gray-300 mb-6">
              I'm a <span className="text-green-400 font-semibold">MERN Stack Developer</span>
              specializing in creating fast, scalable and responsive web
              applications using MongoDB, Express.js, React.js and Node.js.
            </p>

            <p className="leading-8 text-gray-300 mb-6">
              I completed my education at a women's madrasa and started my
              career as a teacher. Teaching strengthened my communication,
              patience and problem-solving skills.
            </p>

            <p className="leading-8 text-gray-300">
              Since 2023, I have been dedicated to web development. My goal is
              to contribute to international teams, build meaningful products
              and continuously improve as a software developer.
            </p>
          </motion.div>

          {/* right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-lg"
          >
            <div className="space-y-5">

              <div className="flex justify-between border-b border-white/10 pb-3">
                <span className="text-gray-400">Name</span>
                <span>Rabeya Bosri</span>
              </div>

              <div className="flex justify-between border-b border-white/10 pb-3">
                <span className="text-gray-400">Role</span>
                <span>MERN Stack Developer</span>
              </div>

              <div className="flex justify-between border-b border-white/10 pb-3">
                <span className="text-gray-400">Experience</span>
                <span>Building MERN Projects</span>
              </div>

              <div className="flex justify-between border-b border-white/10 pb-3">
                <span className="text-gray-400">Focus</span>
                <span>Frontend & Backend</span>
              </div>

              <div className="flex justify-between border-b border-white/10 pb-3">
                <span className="text-gray-400">Location</span>
                <span>Bangladesh</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-400">Availability</span>
                <span className="text-green-400">Open to Work</span>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default AboutPage;





