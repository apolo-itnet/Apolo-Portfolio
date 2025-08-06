import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { ArrowUpRight, MoveUpRight } from "lucide-react";
import { SiGithub } from "react-icons/si";

const projectInfo = [
  {
    id: 1,
    images: [
      "https://i.postimg.cc/x15dQNzp/home-page.png",
      "https://i.postimg.cc/MZfXBGCX/organizer-dashboard.png",
      "https://i.postimg.cc/mDJDqxHb/payment.png",
    ],
    title: "Medi Rally",
    description:
      "Medi Rally is a full-stack web application designed to facilitate the organization, registration, and management of medical camps. It serves as a platform for healthcare organizers to promote their services and for participants to discover and join impactful health camps.",
    techUses: [
      "Nodejs",
      "ReactJS",
      "Mongodb",
      "ExpressJS",
      "multer",
      "Firebase-auth",
      "Firebase-SDK",
      "Tailwindcss",
      "Framer-motion",
      "React-router",
      "Axios-react",
      "React-Toastify",
    ],
    liveLink: "https://medi-rally.web.app/",
    githubLink:
      "https://github.com/apolo-itnet/MediRally-Client",
  },
  {
    id: 2,
    images: [
      "https://i.postimg.cc/65QFd0w5/Lost-Trace-1.webp",
      "https://i.postimg.cc/gcsfX7CT/Lost-Trace-2.webp",
    ],
    title: "Lost & Trace",
    description:
      "Lost & Trace is a full-stack Lost & Found web application where users can report, search, and recover lost or found items. It offers            secure authentication, protected routes, recovery workflow, and real-time feedback through a responsive modern UI",
    techUses: [
      "Nodejs",
      "ReactJS",
      "Mongodb",
      "ExpressJS",
      "Firebase-auth",
      "Tailwindcss",
      "Framer-motion",
      "React-router",
      "Axios-react",
      "React-Toastify",
    ],
    liveLink: "https://lost-trace.web.app/",
    githubLink: "https://github.com/apolo-itnet/LostTrace-Client",
  },
  {
    id: 3,
    images: [
      "https://i.postimg.cc/0NSTzyvY/Nest-Buddy-1.webp",
      "https://i.postimg.cc/W36x7Yht/Nest-Buddy-2.webp",
    ],
    title: "Nest Buddy (Roommate Finder)",
    description:
      "Roommate Finder is a full-stack web application that helps users find compatible roommates based on location, budget, and lifestyle            preferences. It features authentication, post creation, liking toggle, and user profile with reveal contact info, and a responsive UI with modern animations.",
    techUses: [
      "Nodejs",
      "ReactJS",
      "Mongodb",
      "ExpressJS",
      "Firebase-auth",
      "Tailwindcss",
      "Framer-motion",
      "React-router",
      "Axios-react",
      "React-Toastify",
    ],
    liveLink: "https://roommate-finder-8c107.web.app",
    githubLink: "https://github.com/apolo-itnet/Nest-Buddy-Client",
  },
  {
    id: 4,
    images: [
      "https://i.postimg.cc/Y0rZDNWR/Evently-1.webp",
      "https://i.postimg.cc/63NDnx6D/Evently-2.webp",
    ],
    title: "Evently (Event Discovery)",
    description:
      "Evently is a frontend-only event discovery web app where users can    browse local events by category, view event details, and experience     smooth UI animations. Includes protected routes, Firebase Auth, and a responsive design.",
    techUses: [
      "ReactJS",
      "React-router",
      "Firebase-auth",
      "Tailwindcss",
      "React-Toastify",
      "Aos",
    ],
    liveLink: "https://bdevents.netlify.app",
    githubLink: "https://github.com/apolo-itnet/Evently-Client",
  },
];

const Projects = () => {
  return (
    <div
      id="projects"
      className="w-full h-full  res-pad py-6 flex flex-col items-center justify-start gap-6 overflow-hidden"
    >
      <h1 className="text-3xl md:text-6xl text-center poppins font-bold py-2 md:py-6 uppercase">
        Recent Projects
      </h1>

      {projectInfo.map((project, index) => (
        <div
          key={index}
          className=" w-full flex flex-col lg:flex-row gap-4 lg:max-w-6xl  justify-center items-center mx-auto border border-transparent lg:hover:border-emerald-500 transition-colors ease-in-out duration-500 lg:p-6 rounded-2xl "
        >
          {/* Project Image */}
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="w-full h-full mx-auto flex justify-center items-center"
          >
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
              className="rounded-2xl overflow-hidden lg:w-md h-md mx-auto "
            >
              {project.images.map((img, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={img}
                    alt="Project pic"
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Project Info */}
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="flex flex-col gap-4 bg-zinc-700 p-6 rounded-2xl"
          >
            <h1 className="text-3xl font-bold text-center ">{project.title}</h1>
            <p className="barlow text-justify line-clamp-3">
              {project.description}
            </p>
            <div className="w-full hidden md:flex flex-wrap justify-center items-center gap-2">
              {project.techUses.map((tech, index) => (
                <span
                  key={index}
                  className="text-sm px-2 g-color border rounded-lg border-zinc-600 hover:border-zinc-400 transition-colors ease-in-out duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-center items-center gap-4 py-2">
              <a href={project.liveLink} target="_blank">
                <button className="btn font-chillax font-normal tracking-wide p-4 hover:border-emerald-500 bg-transparent  shadow-none p-color 2xl:text-lg group">
                  {project.liveLink ? "Live Site" : ""}
                  <span>
                    <ArrowUpRight
                      size={18}
                      className=" group-hover:translate-x-1 text-white group-hover:text-emerald-500 transition-all ease-in-out duration-700"
                    />
                  </span>
                </button>
              </a>
              <a href={project.githubLink} target="_blank">
                {" "}
                <button className="btn font-chillax font-normal tracking-wide  p-4 bg-emerald-700 text-white border-none shadow-none hover:bg-emerald-600 transition-color ease-in-out duration-300 2xl:text-lg">
                  <SiGithub size={20} /> {project.githubLink ? "Github" : ""}
                </button>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
