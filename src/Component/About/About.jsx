import React from "react";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn, slideDown, slideLeft, slideRight, slideUp } from "../../Utility/Animation";

const About = () => {

  return (
     <div id="about" className="w-full h-full res-pad py-8 ">

      <div className="about-container w-full flex flex-col lg:flex-row justify-between items-start gap-10 res-pad relative">

        <div
          className="about-image w-md h-fit lg:sticky inset-0 top-24 hidden md:flex justify-center items-center"
        >
          <div className="bg-neutral-900 p-4 rounded-2xl w-md h-[calc(100vh-80px)]">
            <img
              src="https://i.postimg.cc/Zqfvx2PW/photo-2.jpg"
              alt="about-us-image"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>

        <div className="about-content w-full flex flex-col  lg:flex-1 pt-6">
          <div className="main-content flex flex-col justify-center items-start">
            <motion.h1 className="about-heading leading-20 lg:leading-30 tracking-wide text-7xl sm:text-5xl md:text-8xl lg:text-4xl xl:text-8xl 2xl:text-[10rem] font-thin font-chillax py-4">
              <motion.span
                initial="initial"
                animate="animate"
                variants={slideRight(0.5)}
              >
                Apolo
              </motion.span>{" "}
              <br />
              <motion.span
                initial="initial"
                animate="animate"
                variants={slideLeft(0.7)}
                className=" tracking-wider"
              >
                Barua
              </motion.span>{" "}
              <br />
              <motion.span
                initial="initial"
                animate="animate"
                variants={slideLeft(0.9)}
                className="tracking-widest s-color"
              >
                Apurbo
              </motion.span>
            </motion.h1>
            <motion.p
              initial="initial"
              animate="animate"
              variants={slideUp(1)}
              className="text-lg poppins font-extralight lg:w-lg tracking-wider py-2 lg:py-6 "
            >
              "Passionate about web development, I also bring creativity to
              photography and video editing."
            </motion.p>
            <motion.a
              initial="initial"
              animate="animate"
              variants={slideUp(1)}
              href="#info"
              className="about-me flex justify-start items-center gap-2 py-6"
            >
              <span className="s-color border rounded-full w-10 h-10 flex justify-center items-center">
                <ArrowDown size={20} />
              </span>{" "}
              About Me
            </motion.a>
          </div>

          <div
            id="info"
            className="detail-content bg-neutral-700 p-4 rounded-2xl p-color w-full lg:w-2xl "
          >
            <h2 className="dl-heading barlow text-3xl text-center font-medium tracking-wide leading-10 py-4">
              “Full-Stack MERN Developer | Crafting High-Performance &
              SEO-Optimized Web Applications”
            </h2>
            <p className="dl-para">
              My programming journey started with a deep curiosity about how
              websites work behind the scenes. That curiosity turned into a
              dedication to learn web technologies step by step — starting from
              HTML, CSS, and JavaScript, to mastering the full MERN stack:
              MongoDB, Express.js, React.js, and Node.js.
            </p>
            <br />
            <p>
              I enjoy building full-stack web applications that are not only
              visually appealing but also fast, scalable, and responsive. From
              creating custom dashboards to dynamic user interfaces — I love
              solving real-world problems through clean and efficient code.
            </p>
            <div className="flex rounded-2xl">
              <img
                src="https://i.postimg.cc/xdjbHnmr/photo-1.jpg"
                alt=""
                className="w-full flex py-4 rounded-2xl"
              />
            </div>
            <p className="about-des">
              Outside of programming, I find inspiration in visual storytelling.
              I'm deeply passionate about photography, videography, and editing
              — these creative hobbies enhance my design sense and attention to
              detail. Whether I'm composing a frame or writing code, I bring
              focus, creativity, and personality to everything I do.
            </p>
            <br />
            <p className="about-des">
              {" "}
              As a lifelong learner, I constantly explore new tools and
              technologies to stay updated. My approach is client-focused,
              communication-friendly, and results-driven — always aiming to turn
              ideas into impactful digital solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
