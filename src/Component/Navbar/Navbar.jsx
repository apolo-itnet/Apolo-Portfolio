import React from "react";
import { Link, NavLink } from "react-router";
import {motion} from "framer-motion";
import { slideDown } from "../../Utility/Animation";

const Navbar = () => {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`sticky overflow-hidden top-0 left-0 !w-full h-20 border-b border-gray-500  ${
        scrolled
          ? "bg-neutral-800/80 backdrop-blur-[2px]"
          : "bg-neutral-800/60 backdrop-blur-[1px]"
      }`}
    >
      <motion.div
        variants={slideDown(0.3)}
        initial="initial"
        whileInView="animate"
        animate="animate"
        className="flex justify-between items-center py-2 poppins font-medium  res-pad"
      >
        <div className="flex items-center justify-center w-16 h-16 bg-white hover:bg-emerald-500 rounded-full p-1 transition duration-300 ease-in-out">
          <img
            src="https://i.postimg.cc/XqQHXKkf/ablogo.webp"
            alt="Logo"
            className="w-full h-full object-contain"
          />
        </div>

        <nav>
          <ul className="flex items-center space-x-8 poppins font-medium z-50">
            {["home", "about", "projects", "contact"].map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  className="text-sm tracking-wide p-color hover:text-emerald-500 active:text-emerald-400 transition-colors duration-300"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <a href="https://www.upwork.com" target="_blank">
            <button className="btn px-6 py-6 btn-outline border-emerald-500 text-white shadow-none hover:bg-emerald-500 transition-color ease-in-out duration-300">
              Hire me
            </button>
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
