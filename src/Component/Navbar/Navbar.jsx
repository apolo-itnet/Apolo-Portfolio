import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router";
import { AnimatePresence, motion } from "framer-motion";
import { slideDown } from "../../Utility/Animation";
import menuAnimation from "../../assets/json/animation/menuAnimation.json";
import Lottie from "lottie-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const lottieRef = useRef();
  const navLinks = ["home", "about", "skill", "projects", "contact"];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const handleMenuToggle = () => {
    if (!mobileMenuOpen) {
      lottieRef.current?.playSegments([0, 95], true);
    } else {
      lottieRef.current?.playSegments([96, 190], true);
    }
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavClick = () => {
    if (mobileMenuOpen) {
      lottieRef.current?.playSegments([96, 190], true);
      setMobileMenuOpen(false);
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 z-50 w-full lg:h-20 py-2 border-b border-gray-500 transition-all duration-300 flex flex-col lg:flex-row justify-between items-center ${
        scrolled
          ? "bg-neutral-800/80 backdrop-blur-[2px]"
          : "bg-neutral-800/60 backdrop-blur-[1px]"
      }`}
    >
      {/* Dektop Menu */}
      <motion.div
        variants={slideDown(0.3)}
        initial="initial"
        whileInView="animate"
        animate="animate"
        className="flex justify-between items-center font-medium res-pad w-full h-full"
      >
        {/* Logo */}
        <div className="hidden flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16 bg-white/80 hover:bg-emerald-500 rounded-full p-1 transition duration-300 ease-in-out">
          <img
            // src="https://i.postimg.cc/26TpcFxM/ablogo.webp"
            src="https://i.postimg.cc/J46jXyYP/AB-white.webp"
            loading="lazy"
            decoding="async"
            alt="Logo"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="flex items-center justify-center w-14 h-14 border border-emerald-700/50 rounded-full p-2 hover:border-emerald-700 duration-300 ease-in-out transition-colors ">
          <img
            // src="https://i.postimg.cc/26TpcFxM/ablogo.webp"
            src="https://i.postimg.cc/J46jXyYP/AB-white.webp"
            loading="lazy"
            decoding="async"
            alt="Logo"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-8 z-50">
            {navLinks.map((section) => (
              <li key={section} >
                <a
                  href={`#${section}`}
                  className={`text-xs tracking-widest transition-colors duration-300 barlow uppercase ${
                    activeSection === section
                      ? "text-emerald-500 font-bold"
                      : "text-white hover:text-emerald-500"
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Hire Me Button (desktop only) */}
        <div className="hidden md:block">
          <a href="https://www.upwork.com" target="_blank">
            <button className="barlow text-xs tracking-wider font-medium uppercase btn px-4 py-4 btn-outline border-emerald-700 text-white shadow-none hover:bg-emerald-700 transition">
              Hire me
            </button>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={handleMenuToggle} className="w-10 h-10">
            <Lottie
              lottieRef={lottieRef}
              animationData={menuAnimation}
              loop={false}
              autoplay={false}
              className="w-full h-full"
            />
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-neutral-900 border-t border-gray-700 px-6 py-4 space-y-4 w-full"
          >
            {navLinks.map((section, index) => (
              <a
                key={section}
                href={`#${section}`}
                onClick={handleNavClick}
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                className={`block text-sm transition duration-300 barlow uppercase ${
                  activeSection === section
                    ? "text-emerald-500"
                    : "text-white hover:text-emerald-500"
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
            <a href="https://www.upwork.com" target="_blank">
              <button className="w-full mt-4 btn btn-outline border-emerald-500 text-white hover:bg-emerald-500">
                Hire me
              </button>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
