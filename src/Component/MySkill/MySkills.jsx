import { useState } from "react";
import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiFirebase,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiFigma,
  SiAdobephotoshop,
  SiWondersharefilmora,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import useScrollAnimation from "../../Utility/UseScrollAnm";
import {
  fadeIn,
  slideLeft,
  slideRight,
  slideUp,
} from "../../Utility/Animation";
import { motion } from "framer-motion";

const skillInfo = [
  {
    id: 1,
    type: "mern",
    icon: <SiMongodb className="text-green-600 text-3xl" />,
    title: "MongoDB",
    description: "NoSQL database used for storing application data flexibly.",
  },
  {
    id: 2,
    type: "mern",
    icon: <SiExpress className="text-gray-300 text-3xl" />,
    title: "Express.js",
    description: "Backend framework for Node.js to build APIs.",
  },
  {
    id: 3,
    type: "mern",
    icon: <SiReact className="text-cyan-400 text-3xl" />,
    title: "React.js",
    description: "Frontend library for building interactive UIs.",
  },
  {
    id: 4,
    type: "mern",
    icon: <SiNodedotjs className="text-green-500 text-3xl" />,
    title: "Node.js",
    description: "JavaScript runtime for server-side development.",
  },

  // --- Frontend ---
  {
    id: 5,
    type: "frontend",
    icon: <SiHtml5 className="text-orange-500 text-3xl" />,
    title: "HTML5",
    description: "The foundation for structuring content on the web.",
  },
  {
    id: 6,
    type: "frontend",
    icon: <SiCss3 className="text-blue-500 text-3xl" />,
    title: "CSS3",
    description: "Styling language for designing the web.",
  },
  {
    id: 7,
    type: "frontend",
    icon: <SiTailwindcss className="text-sky-400 text-3xl" />,
    title: "Tailwind CSS",
    description: "Utility-first CSS framework for responsive design.",
  },
  {
    id: 8,
    type: "frontend",
    icon: <SiJavascript className="text-yellow-400 text-3xl" />,
    title: "JavaScript",
    description: "Core language of the web for dynamic features.",
  },

  // --- Backend ---
  {
    id: 9,
    type: "backend",
    icon: <SiNodedotjs className="text-green-500 text-3xl" />,
    title: "Node.js",
    description: "Handles server-side logic and APIs.",
  },
  {
    id: 10,
    type: "backend",
    icon: <SiExpress className="text-gray-300 text-3xl" />,
    title: "Express.js",
    description: "Minimalist backend framework for building REST APIs.",
  },
  {
    id: 11,
    type: "backend",
    icon: <SiFirebase className="text-orange-400 text-3xl" />,
    title: "Firebase",
    description: "Backend-as-a-Service for auth and hosting.",
  },

  // --- Tools ---
  {
    id: 12,
    type: "tools",
    icon: <SiGit className="text-red-500 text-3xl" />,
    title: "Git",
    description: "Version control system for code collaboration.",
  },
  {
    id: 13,
    type: "tools",
    icon: <SiGithub className="text-white text-3xl" />,
    title: "GitHub",
    description: "Cloud-based platform to host and manage Git repos.",
  },
  {
    id: 14,
    type: "tools",
    icon: <VscVscode className="text-blue-400 text-3xl" />,
    title: "VS Code",
    description: "Powerful and customizable code editor.",
  },
  {
    id: 15,
    type: "tools",
    icon: <SiFigma className="text-pink-400 text-3xl" />,
    title: "Figma",
    description: "Collaborative interface design tool.",
  },
  {
    id: 16,
    type: "tools",
    icon: <SiAdobephotoshop className="text-blue-300 text-3xl" />,
    title: "Photoshop",
    description: "Industry-standard image editing tool.",
  },
  {
    id: 17,
    type: "tools",
    icon: <SiWondersharefilmora className="text-green-300 text-3xl" />,
    title: "Filmora",
    description: "User-friendly video editing software.",
  },
];

const categories = ["mern", "frontend", "backend", "tools"];

const Skill = () => {
  const [activeTab, setActiveTab] = useState("mern");

  const { ref: headingRef, controls: headingControls } = useScrollAnimation();

  const filteredSkills = skillInfo.filter((skill) => skill.type === activeTab);

  return (
    <section
      id="skill"
      className="w-full min-h-screen mx-auto lg:mt-20 lg:pt-20 py-10 res-pad flex flex-col-reverse lg:flex-row justify-center gap-4 md:gap-10 overflow-hidden"
    >
      <motion.div
        ref={headingRef}
        initial="initial"
        animate={headingControls}
        exit="exit"
        variants={slideRight(0.3)}
        className="max-w-3xl z-20"
      >
        {/* Menu */}
        <div className="flex justify-center gap-4 flex-wrap lg:mb-6 w-full bg-neutral-800 z-20 md:py-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-4 rounded-2xl barlow text-xs font-medium tracking-wider uppercase transition-all ease-in-out duration-300 cursor-pointer ${
                activeTab === cat
                  ? "bg-emerald-700 p-color"
                  : "bg-gray-700 hover:bg-gray-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Card*/}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 place-items-center w-full py-4 md:py-0 ">
          {filteredSkills.map(({ icon, title, description }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="g-color flex flex-col justify-center items-center p-1 py-3 md:py-0 md:p-4 rounded-2xl border border-gray-700 hover:border-emerald-500 transition-colors ease-in-out duration-500 w-full h-46 md:w-56 md:h-44"
            >
              <div className="flex flex-col justify-center items-center text-center gap-2">
                <p className="flex items-center w-12 h-12 rounded-full border border-emerald-500 p-3">
                  {icon}
                </p>
                <h4 className="text-xl font-medium font-chillax uppercase tracking-wide">
                  {title}
                </h4>
                <p className="text-sm text-gray-300 ">{description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        ref={headingRef}
        initial="initial"
        animate={headingControls}
        exit="exit"
        variants={slideLeft(0.3)}
        className="skill-heading max-w-2xl"
      >
        <motion.h1 className="skill-title text-8xl lg:text-9xl poppins font-bold uppercase leading-24 lg:leading-34 text-gray-200">
          <motion.span
            initial="initial"
            animate="animate"
            exit="exit"
            variants={slideLeft(0.3)}
          >
            My
          </motion.span>{" "}
          <br />
          <motion.span
            initial="initial"
            animate="animate"
            exit="exit"
            variants={slideLeft(0.5)}
          >
            Skill
          </motion.span>{" "}
          <br />
          <motion.span
            initial="initial"
            animate="animate"
            exit="exit"
            variants={slideLeft(0.7)}
            className="g-color"
          >
            Tools
          </motion.span>
        </motion.h1>
        <p className="do-des poppins font-light uppercase tracking-wide lg:w-md py-4">
          "Skilled in full-stack web developer and versatile crafting impactful,
          dynamic websites with modern tools and seamless functionality."
        </p>
      </motion.div>
    </section>
  );
};

export default Skill;
