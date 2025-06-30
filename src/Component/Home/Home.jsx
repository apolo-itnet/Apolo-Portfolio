import React from "react";
import "./Home.css";
import { motion } from "framer-motion";
import { slideLeft, slideRight } from "../../Utility/Animation";
import useScrollAnimation from "../../Utility/UseScrollAnm";

const Home = () => {

  const {ref, controls} = useScrollAnimation(0.4, false)

  return (
    <div
      className="min-h-screen bg-cover bg-center relative res-pad w-full flex"
      style={{
        backgroundImage: `
        repeating-linear-gradient(90deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.2) 1px, transparent 2px, transparent 250px),
        linear-gradient(360deg, rgba(33,33,33,1) 0%, transparent 90%),
        url('https://i.postimg.cc/D0N8WjyT/hero-banner-img-1.webp')
      `,
      }}
    >
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      <div className="relative z-20 w-full h-screen mx-auto flex items-center justify-center px-2">
        <div className="w-full h-screen mx-auto flex flex-col-reverse lg:flex-row- justify-center items-center gap-10 md:gap-16 xl:gap-2 relative res-pad overflow-x-hidden ">

          <motion.div
            ref={ref}
            exit="exit"
            initial="initial"
            animate={controls}
            whileInView="animate"
            variants={slideRight(0.5)}
            className="lg:w-3xl xl:w-full flex flex-col items-center lg:items-start lg:justify-start p-color lg:text-left text-center px-4 md:px-0"
          >
            <p className="text-xl md:text-xl  pb-2 ">
              <span className="text-2xl md:text-2xl s-color"> - </span>{" "}
              Hello
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-8xl lg:text-3xl xl:text-8xl 2xl:text-[10rem] font-medium font-chillax uppercase">
              I'm Apolo
            </h1>
            <h2 className="flex flex-wrap gap-3 text-2xl md:text-6xl lg:text-7xl xl:text-7xl font-chillax font-bold uppercase mt-4 animated-designation justify-center md:justify-start">
              <p className="font-normal">A</p>
              <span style={{ "--i": 4 }} data-text="Web developer">
                Web developer
              </span>
              <span style={{ "--i": 3 }} data-text="Web Designer">
                Web Designer
              </span>
              <span style={{ "--i": 2 }} data-text="Photographer">
                Photographer
              </span>
              <span style={{ "--i": 1 }} data-text="Video Editor">
                Video Editor
              </span>
            </h2>
            <p className="py-3 md:py-6 lg:py-6 w-full md:max-w-xl lg:max-w-2xl xl:max-w-2xl 2xl:max-w-4xl text-sm md:text-base xl:text-base 2xl:text-xl g-color tracking-wide md:leading-6 xl:leading-6 2xl:leading-10 text-center lg:text-left">
              MERN Stack Web Developer focused on building full-stack web apps
              with modern tech. Experienced in MongoDB, Express, React, and
              Node.js. Dedicated to writing clean code and delivering smooth
              user experiences.
            </p>
            <div className="flex flex-wrap gap-6">
              <a href="">
                <button className="btn px-6 py-6 2xl:py-7 btn-outline border-emerald-500 text-white shadow-none hover:bg-emerald-500 transition-color ease-in-out duration-300 2xl:text-lg">
                  Download CV
                </button>
              </a>
              <a href="#contact">
                {" "}
                <button className="btn px-6 py-6 2xl:py-7 bg-emerald-500 text-white border-none shadow-none hover:bg-emerald-600 transition-color ease-in-out duration-300 2xl:text-lg">
                  Let's Talk
                </button>
              </a>
            </div>
          </motion.div>

           <motion.div
            ref={ref}
            exit="exit"
            initial="initial"
            animate={controls}
            whileInView="animate"
            variants={slideLeft(0.5)}
            className=" md:w-xs lg:w-sm xl:w-md 2xl:w-2xl mx-auto flex justify-center items-center lg:absolute lg:right-10 "
          >
            <div className="flex justify-center items-center bg-gray-700 rounded-full p-6">
              <div className="w-70 h-70 md:w-90 md:h-90 lg:w-86 lg:h-86 xl:w-84 xl:h-84 2xl:w-120 2xl:h-120 rounded-full overflow-hidden bg-gray-400">
                <img
                  // src="https://i.postimg.cc/Vk49003B/banner-pic-1.webp"
                  src="https://i.postimg.cc/P5QwPPPz/photo-3.jpg"
                  alt="profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
