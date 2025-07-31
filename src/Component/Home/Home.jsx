import React from "react";
import "./Home.css";
import { motion } from "framer-motion";
import { slideLeft, slideRight } from "../../Utility/Animation";
import useScrollAnimation from "../../Utility/UseScrollAnm";

const Home = () => {
  const { ref, controls } = useScrollAnimation(0.4, false);

  return (
    <div
      className="min-h-screen bg-no-repeat bg-cover bg-center relative res-pad w-full"
      style={{
        backgroundImage: `
        repeating-linear-gradient(90deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.2) 1px, transparent 2px, transparent 250px),
        linear-gradient(360deg, rgba(33,33,33,1) 0%, transparent 90%),
        url('https://i.postimg.cc/D0N8WjyT/hero-banner-img-1.webp')
      `,
      }}
    >
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      <div className="relative z-20 w-full h-full mx-auto flex items-center justify-center">
        <div className="w-full min-h-screen mx-auto  xl:pt-10 xl:min-h-[calc(100vh+50px)] 2xl:min-h-screen  flex flex-col justify-center items-center gap-4 lg:gap-0 2xl:gap-2   relative overflow-hidden">
          {/* Image */}
          <motion.div
            ref={ref}
            exit="exit"
            initial="initial"
            animate={controls}
            whileInView="animate"
            variants={slideLeft(0.5)}
            className="hidden w-full mx-auto flex justify-center items-center "
          >
            <div className="flex justify-center items-center bg-gray-700 rounded-full p-4">
              <div className="w-54 h-54 2xl:w-70 2xl:h-70  rounded-full overflow-hidden bg-gray-400">
                <img
                  src="https://i.postimg.cc/P5QwPPPz/photo-3.jpg"
                  alt="profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Text Description */}
          <motion.div
            ref={ref}
            exit="exit"
            initial="initial"
            animate={controls}
            whileInView="animate"
            variants={slideRight(0.5)}
            className="lg:w-3xl xl:w-full flex flex-col items-center  p-color lg:text-left text-center md:px-0"
          >
            <div>
              <p className="text-xl md:text-3xl pb-2 text-center barlow">
                <span className="text-2xl md:text-3xl s-color"> - </span> Hello
              </p>
              <h1 className="text-5xl sm:text-5xl md:text-8xl lg:text-3xl xl:text-8xl 2xl:text-[8rem]  font-medium font-chillax uppercase py-6 md:py-2 ">
                I'm Apolo
              </h1>
            </div>
            <h2 className="flex flex-wrap gap-3 text-3xl md:text-6xl lg:text-7xl xl:text-5xl 2xl:text-7xl font-chillax font-bold uppercase animated-designation justify-center md:justify-start">
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
            <p className="py-6 w-full md:max-w-2xl text-sm md:text-base  text-zinc-300 tracking-wide md:leading-6 2xl:leading-8 text-center barlow">
              MERN Stack Web Developer focused on building full-stack web apps
              with modern tech. Experienced in MongoDB, Express, React, and
              Node.js. Dedicated to writing clean code and delivering smooth
              user experiences.
            </p>
            <div className="flex flex-wrap gap-6 barlow tracking-wider ">
              <a href="">
                <button className="text-xs uppercase btn px-4 py-4 btn-outline border-emerald-700 text-white shadow-none hover:bg-emerald-700 transition-color ease-in-out duration-300 ">
                  Download CV
                </button>
              </a>
              <a href="#contact">
                {" "}
                <button className="text-xs uppercase btn px-4 py-4 bg-emerald-700 text-white border-none shadow-none hover:bg-emerald-600 transition-color ease-in-out duration-300">
                  Let's Talk
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
