import React from "react";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import useScrollAnimation from "../../Utility/UseScrollAnm";
import { fadeIn, fadeUp, slideLeft, slideRight } from "../../Utility/Animation";

const About = () => {
  const { ref, controls } = useScrollAnimation();

  return (
    <div id="about" className="w-full h-full mx-auto lg:res-pad py-6  lg:">
      <div className="about-container w-full flex flex-col lg:flex-row justify-between items-start gap-10 res-pad relative">
        <div
          data-aos="fade-right"
          data-aos-duration="500"
          data-aos-delay="300"
          data-aos-easing="ease-in-out"
          data-aos-once="false"
          className="about-image w-lg h-full lg:sticky inset-0 top-24 hidden lg:flex justify-center items-center"
        >
          <div className="bg-zinc-700 p-2 rounded-3xl w-full h-[calc(100vh-80px)] z-10">
            <img
              src="https://i.postimg.cc/Zqfvx2PW/photo-2.jpg"
              alt="about-us-image-left"
              className="w-full h-full object-cover rounded-2xl "
            />
          </div>
        </div>

        <div className="about-content w-full flex flex-col  lg:flex-1 lg:pt-10">
          <div className="main-content flex flex-col justify-center items-start w-full pb-8">
            <motion.h1 className="about-heading leading-12 lg:leading-18 tracking-wide text-7xl sm:text-5xl md:text-8xl lg:text-4xl xl:text-8xl 2xl:text-[8rem] font-thin font-chillax py-4">
              <motion.p
                initial="initial"
                animate={controls}
                whileInView="animate"
                variants={slideRight(0.5)}
              >
                Apolo
              </motion.p>{" "}
              <br />
              <motion.p
                initial="initial"
                animate={controls}
                whileInView="animate"
                variants={slideRight(0.5)}
                className=" tracking-wider"
              >
                Barua
              </motion.p>{" "}
              <br />
              <motion.p
                initial="initial"
                animate={controls}
                whileInView="animate"
                variants={slideRight(0.5)}
                className="tracking-widest s-color"
              >
                Apurbo
              </motion.p>
            </motion.h1>
            <motion.p
              initial="initial"
              animate={controls}
              whileInView="animate"
              variants={fadeUp}
              duration={1}
              className="text-lg poppins font-extralight lg:w-lg tracking-wider py-2 lg:py-6 "
            >
              "Passionate about web development, I also bring creativity to
              photography and video editing."
            </motion.p>
            <a
              href="#info"
              className="about-me flex justify-start items-center gap-2 py-6 "
            >
              <span className="s-color border-2 rounded-full w-10 h-10 flex justify-center items-center animate-pulse">
                <ArrowDown size={20} />
              </span>{" "}
              About Me
            </a>
          </div>

          <div
            id="info"
            className="detail-content bg-zinc-700/40 p-4 rounded-2xl p-color w-full overflow-x-hidden"
          >
            <motion.h2
              initial="initial"
              animate={controls}
              whileInView="animate"
              variants={slideLeft(0.5)}
              className="dl-heading barlow text-3xl text-center font-medium tracking-wide leading-10 py-4"
            >
              “Full-Stack MERN Developer | Crafting High-Performance &
              SEO-Optimized Web Applications”
            </motion.h2>
            <div className="dl-para text-lg text-justify">
              <motion.p
                initial="initial"
                animate={controls}
                whileInView="animate"
                variants={slideLeft(0.5)}
              >
                My programming journey started with a deep curiosity about how
                websites work behind the scenes. That curiosity turned into a
                dedication to learn web technologies step by step — starting
                from HTML, CSS, and JavaScript, to mastering the full MERN
                stack: MongoDB, Express.js, React.js, and Node.js.
              </motion.p>
              <br />
              <motion.p
                initial="initial"
                animate={controls}
                whileInView="animate"
                variants={slideLeft(0.5)}
              >
                I enjoy building full-stack web applications that are not only
                visually appealing but also fast, scalable, and responsive. From
                creating custom dashboards to dynamic user interfaces — I love
                solving real-world problems through clean and efficient code.
              </motion.p>
            </div>
            <div
              initial="initial"
              animate={controls}
              variants={fadeIn(0.5)}
              className="flex rounded-2xl overflow-hidden lg:hidden"
            >
              <img
                src="https://i.postimg.cc/xdjbHnmr/photo-1.jpg"
                alt=""
                className="w-full flex py-4 rounded-2xl "
              />
            </div>
            <div className="about-des text-lg text-justify py-4">
              <motion.p
                initial="initial"
                animate={controls}
                whileInView="animate"
                variants={slideLeft(0.5)}
              >
                Outside of programming, I find inspiration in visual
                storytelling. I'm deeply passionate about photography,
                videography, and editing — these creative hobbies enhance my
                design sense and attention to detail. Whether I'm composing a
                frame or writing code, I bring focus, creativity, and
                personality to everything I do.
              </motion.p>
              <br />
              <motion.p
                initial="initial"
                animate={controls}
                whileInView="animate"
                variants={slideLeft(0.5)}
              >
                {" "}
                As a lifelong learner, I constantly explore new tools and
                technologies to stay updated. My approach is client-focused,
                communication-friendly, and results-driven — always aiming to
                turn ideas into impactful digital solutions.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
