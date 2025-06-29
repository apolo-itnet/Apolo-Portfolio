import React from "react";

const Home = () => {
  return (
    <div className=" bg-neutral-800/60 backdrop-blur-[1px] h-screen flex items-center ">
      <div className="flex justify-between items-center w-full max-w-6xl mx-auto text-gray-50 gap-10 px-4">
        <div className="flex justify-center items-center bg-gray-700 rounded-full p-6">
          <div className="w-96 h-96 rounded-full overflow-hidden bg-gray-400">
            <img
              src="https://i.postimg.cc/Vk49003B/banner-pic-1.webp"
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div>
          <p className="text-2xl pb-4">
            <span className="text-4xl text-sky-600"> - </span> Hello
          </p>
          <h1 className="text-8xl font-medium font-chillax uppercase">
            I'm Apolo 
          </h1>
          <h2 className="designation"> a
            <span style={{ "--i": 4 }} data-text="Web developer">Web developer</span>
            <span style={{ "--i": 3 }} data-text="Photographer">Photographer</span>
            <span style={{ "--i": 2 }} data-text="Content Creator">Content Creator</span>
            <span style={{ "--i": 1 }} data-text="Video Editor">Video Editor</span>
          </h2>
          <p className="py-3">
            MERN Stack Web Developer focused on building full-stack web apps
            with modern tech. Experienced in MongoDB, Express, React, and
            Node.js. Dedicated to writing clean code and delivering smooth user
            experiences.
          </p>
          <div className="flex gap-4">
            <button className="btn btn-outline border-sky-500 text-white hover:bg-sky-500 transition">
              Download CV
            </button>
            <button className="btn bg-sky-500 text-white hover:bg-sky-600 transition">
              Let's Talk
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
