import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="flex justify-between items-center h-[calc(100vh-150px)] max-w-5xl mx-auto text-gray-50 gap-10">

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
          <p className="text-2xl">
            {" "}
            <span className="text-4xl text-sky-600"> -</span> I'm
          </p>
          <h1 className="text-5xl font-bold font-chillax py-6">
            Apolo Barua Apurbo
          </h1>
          <p className="text-lg text-gray-400">
            {" "}
            <span>A</span> MERN Stack Web Developer
          </p>
          <p className="py-3">
            MERN Stack Web Developer focused on building full-stack web apps
            with modern tech. Experienced in MongoDB, Express, React, and
            Node.js. Dedicated to writing clean code and delivering smooth user
            experiences.
          </p>
          <div>
            <button>Download CV</button>
            <button>Let's Talk</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
