import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { ArrowUpRight, MoveUpRight } from "lucide-react";

const Projects = () => {
  return (
    <div id="projects" className="h-full res-pad py-16">
      <h1 className="text-6xl text-center poppins font-bold py-6">Projects</h1>

      {/* projects-1 */}
      <div className="flex flex-col md:flex-row gap-4 lg:max-w-6xl mx-auto border border-neutral-600 p-6 rounded-2xl">
        <Swiper
          modules={[EffectFade, Autoplay]}
          effect="fade"
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          speed={1000}
          fadeEffect={{ crossFade: true }}
          className="rounded-2xl overflow-hidden w-full lg:w-3/2"
        >
          <SwiperSlide>
            <img
              src="https://i.postimg.cc/VN7zQ9vT/Project-5.png"
              alt="Project 3"
              className="w-full h-auto object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.postimg.cc/4dmsJKh3/Project-6.png"
              alt="Project 4"
              className="w-full h-auto object-cover"
            />
          </SwiperSlide>
        </Swiper>

        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold ">Project Name : Lost & Trace</h1>
          <p className="barlow text-justify">
            Lost Trace is a full-stack Lost & Found web application where users can report, search, and recover lost or found items. It offers secure authentication, protected routes, recovery workflow, and real-time feedback through a responsive modern UI.
          </p>
          <div className="w-full flex flex-wrap items-center gap-3">
            {[
              "nodejs", "mongodb", "react-router", "reactjs", "expressjs", "firebase-auth", "tailwindcss", "framer-motion", "axios-react", 
            ].map((item, index) => (
              <p
                className="p-1 g-color border border-gray-500 rounded-md  "
                key={index}
              >
                {item}
              </p>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <a href="https://lost-trace.web.app/" target="_blank">
              <button className="btn font-chillax font-normal tracking-wide  px-6 py-6 2xl:py-7 btn-outline border-emerald-500 text-white shadow-none hover:bg-emerald-500 transition-color ease-in-out duration-300 2xl:text-lg group">
                Live Link <span><ArrowUpRight className="group-hover:translate-x-1 transition-all ease-in-out duration-300"/></span>
              </button>
            </a>
            <a href="https://github.com/apolo-itnet/LostTrace-Client" target="_blank">
              {" "}
              <button className="btn font-chillax font-normal tracking-wide  px-6 py-6 2xl:py-7 bg-emerald-500 text-white border-none shadow-none hover:bg-emerald-600 transition-color ease-in-out duration-300 2xl:text-lg">
                Client Code
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* projects-2 */}
      <div className="flex flex-col md:flex-row gap-4 lg:max-w-6xl mx-auto border border-neutral-600 p-6 rounded-2xl">
        <Swiper
          modules={[EffectFade, Autoplay]}
          effect="fade"
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          speed={1000}
          fadeEffect={{ crossFade: true }}
          className="rounded-2xl overflow-hidden w-full lg:w-3/2"
        >
          <SwiperSlide>
            <img
              src="https://i.postimg.cc/RVr4BZCM/Project-1.png"
              alt="Project 3"
              className="w-full h-auto object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.postimg.cc/L5PS1rDK/Project-2.png"
              alt="Project 4"
              className="w-full h-auto object-cover"
            />
          </SwiperSlide>
        </Swiper>

        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold ">Project Name : Nest Buddy (Roommate Finder)</h1>
          <p className="barlow text-justify">
            Roommate Finder is a full-stack web application that helps users find compatible roommates based on location, budget, and lifestyle preferences. It features authentication, post creation, liking to reveal contact info, and a responsive UI with modern animations.
          </p>
          <div className="w-full flex flex-wrap items-center gap-3">
            {[
             "nodejs", " mongodb",  "react-router", " reactjs", "expressjs", "firebase-auth", "tailwindcss", "framer-motion", "axios-react" 
            ].map((item, index) => (
              <p
                className="p-1 g-color border border-gray-500 rounded-md  "
                key={index}
              >
                {item}
              </p>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <a href="https://roommate-finder-8c107.web.app" target="_blank">
              <button className="btn font-chillax font-normal tracking-wide  px-6 py-6 2xl:py-7 btn-outline border-emerald-500 text-white shadow-none hover:bg-emerald-500 transition-color ease-in-out duration-300 2xl:text-lg group">
                Live Link <span><ArrowUpRight className="group-hover:translate-x-1 transition-all ease-in-out duration-300"/></span>
              </button>
            </a>
            <a href="https://github.com/apolo-itnet/Evently-Client" target="_blank">
              {" "}
              <button className="btn font-chillax font-normal tracking-wide  px-6 py-6 2xl:py-7 bg-emerald-500 text-white border-none shadow-none hover:bg-emerald-600 transition-color ease-in-out duration-300 2xl:text-lg">
                Client Code
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* projects-3 */}
      <div className="flex flex-col md:flex-row gap-4 lg:max-w-6xl mx-auto border border-neutral-600 p-6 rounded-2xl">

        <Swiper
          modules={[EffectFade, Autoplay]}
          effect="fade"
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          speed={1000}
          fadeEffect={{ crossFade: true }}
          className="rounded-2xl overflow-hidden w-full lg:w-3/2"
        >
          <SwiperSlide>
            <img
              src="https://i.postimg.cc/gcLmQZWS/Project-3.png"
              alt="Project 3"
              className="w-full h-auto object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.postimg.cc/859Ds1hm/Project-4.png"
              alt="Project 4"
              className="w-full h-auto object-cover"
            />
          </SwiperSlide>
        </Swiper>

        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold ">Project Name : Evently</h1>
          <p className="barlow text-justify">
            Evently is a frontend-only event discovery web app where users can
            browse local events by category, view event details, and experience
            smooth UI animations. Includes protected routes, Firebase Auth, and
            a responsive design.
          </p>
          <div className="w-full flex flex-wrap items-center gap-3">
            {[
              "react-router",
              "reactjs",
              "firebase-auth",
              "tailwindcss",
              "daisyui",
              "aos-animation",
            ].map((item, index) => (
              <p
                className="p-1 g-color border border-gray-500 rounded-md  "
                key={index}
              >
                {item}
              </p>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <a href="">
              <button className="btn font-chillax font-normal tracking-wide  px-6 py-6 2xl:py-7 btn-outline border-emerald-500 text-white shadow-none hover:bg-emerald-500 transition-color ease-in-out duration-300 2xl:text-lg group">
                Live Link <span><ArrowUpRight className="group-hover:translate-x-1 transition-all ease-in-out duration-300"/></span>
              </button>
            </a>
            <a href="https://github.com/apolo-itnet/Evently-Client" target="_blank">
              {" "}
              <button className="btn font-chillax font-normal tracking-wide  px-6 py-6 2xl:py-7 bg-emerald-500 text-white border-none shadow-none hover:bg-emerald-600 transition-color ease-in-out duration-300 2xl:text-lg">
                Client Code
              </button>
            </a>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Projects;
