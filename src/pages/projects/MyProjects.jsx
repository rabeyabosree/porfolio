import { motion } from "framer-motion";
import image1 from "../../assets/mernstack1.png";
import image2 from "../../assets/mernsstack2.jpg";
import image3 from "../../assets/mernstack3.png";
import image4 from "../../assets/mernstack4.png";
import image5 from "../../assets/mernstack5.webp";
import image6 from "../../assets/mernstack6.webp";
import image7 from "../../assets/mernstack7.png";
import image8 from "../../assets/mernstack8.jpeg";
import ProjectCart from "./ProjectCart";
import { GrNode } from "react-icons/gr";
import { SiExpress } from "react-icons/si";
import { TbBrandMongodb } from "react-icons/tb";

import { GrReactjs } from "react-icons/gr";

const MyProjects = () => {
  const myProject = [
    { project: image1 },
    { project: image2 },
    { project: image3 },
    { project: image4 },
    { project: image5 },
    { project: image6 },
    { project: image7 },
    { project: image8 },
  ];

  

  return (
    <div className="py-16 px-4 bg-white flex flex-col items-center justify-center">
      <motion.h1
        className="text-2xl text-gray-800 md:text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gray-600 mb-10 mt-16 text-center"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        My Projects
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 w-full max-w-4xl px-4">
        <ProjectCart
          title={"Online Learning Project"}
          tags={[<GrReactjs />, <GrNode />, <SiExpress />,<TbBrandMongodb />]}
          img={image1}
          liveLink={"https://mern-stack-project-liart.vercel.app/"}
          github={"https://github.com/rabeyabosree/mern-Stack-Project"}
        />

        <ProjectCart
          title={"Quiz App"}
          
           tags={[<GrReactjs />, <GrNode />, <SiExpress />,<TbBrandMongodb />]}
          img={image2}
          liveLink={"https://quiz-app-e86m.vercel.app/"}
          github={"https://github.com/rabeyabosree/quizApp"}
        />

        <ProjectCart
          title={"Course Platform"}
          
           tags={[<GrReactjs />, <GrNode />, <SiExpress />,<TbBrandMongodb />]}
          img={image3}
          liveLink={"https://onlinelearning-c39p.vercel.app/"}
          github={"https://github.com/rabeyabosree/onlinelearning"}
        />

        {/* Optional: add more ProjectCart entries using myProject array */}
        {/* Example:
        {myProject.map((item, index) => (
          <ProjectCart
            key={index}
            title={`Project ${index + 1}`}
            description={"Short description here"}
            tags={["React", "MongoDB"]}
            img={item.project}
            liveLink={"#"}
            github={"#"}
          />
        ))}
        */}
      </div>
    </div>
  );
};

export default MyProjects;








