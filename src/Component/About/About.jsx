import { ArrowBigDown, ArrowDown } from "lucide-react";
import React from "react";

const About = () => {
  return (
    <div id="about" className="h-full res-pad py-8">
      <div className="about-container w-full flex flex-col lg:flex-row justify-between items-start gap-10 res-pad relative">
        <div className="about-image w-md h-fit lg:sticky inset-0 top-24">
          <div className="bg-neutral-900 p-4 rounded-2xl w-md h-[calc(100vh-80px)]">
            <img
              src="https://i.postimg.cc/Zqfvx2PW/photo-2.jpg"
              alt="about-us-image"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>

        <div className="about-content flex-1 pt-6">
          <div className="main-content">
            <h1 className="about-heading leading-30 tracking-wide text-4xl sm:text-5xl md:text-8xl lg:text-4xl xl:text-8xl 2xl:text-[10rem] font-thin font-chillax py-4">
              <span>Apolo</span> <br />
              <span className="barua tracking-wider">Barua</span> <br />
              <span className="apurbo tracking-widest s-color">Apurbo</span>
            </h1>
            <p className="text-lg barlow w-lg tracking-wider font-normal py-6 ">
              "Passionate about web development, I also bring creativity to
              photography and video editing."
            </p>
            <a
              href="#info"
              className="about-me flex justify-start items-center gap-2 py-6"
            >
              <span className="s-color border rounded-full w-10 h-10 flex justify-center items-center">
                <ArrowDown size={20} />
              </span>{" "}
              About Me
            </a>
          </div>

          <div
            id="info"
            className="detail-content bg-neutral-700 p-4 rounded-2xl p-color w-2xl "
          >
            <h3 className="dl-name text-lg py-2 ">Apolo Barua Apurbo</h3>
            <h2 className="dl-heading text-4xl font-medium tracking-wide leading-12 py-4">
              Your Partner in Bringing Your Web Design Vision to Life
            </h2>
            <p className="dl-para">
              As a freelance web designer and developer, I bring a unique
              combination of creativity and technical expertise to every
              project. With a keen eye for design and a passion for delivering
              user-friendly web experiences, I work closely with clients to
              understand their needs and bring their vision to life.
              <br />
              <br />
              My approach is rooted in collaboration and communication, and I
              take pride in my ability to explain technical concepts in simple
              terms. Whether I'm developing a new website from scratch or
              optimizing an existing site for search engines, I always strive
              for excellence in both form and function. With a dedication to
              quality and a commitment to staying on top of the latest trends
              and technologies, I am confident in my ability to deliver
              exceptional results that exceed my clients' expectations.
            </p>
            <div className="flex rounded-2xl">
              <img
                src="https://i.postimg.cc/xdjbHnmr/photo-1.jpg"
                alt=""
                className="w-full flex py-4 rounded-2xl"
              />
            </div>
            <p className="about-des">
              " I'm a skilled and creative web developer passionate about
              crafting exceptional designs and user experiences. With a keen eye
              for detail, I bring stories to life through photography and
              videography. My expertise in video editing allows me to transform
              raw footage into engaging narratives. I thrive in blending
              technology and artistry to create visually stunning and functional
              projects. Constantly learning and experimenting, I aim to push the
              boundaries of innovation and creativity in every endeavor. "
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
