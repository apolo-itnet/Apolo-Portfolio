import React from "react";

const About = () => {
  return (
    <div id="about" className="h-full res-pad py-8">
      <div className="about-container w-full mx-auto flex justify-between items-center gap-10">
        <div className="about-image w-md sticky top-10">
          <div className="bg-neutral-900 p-4 rounded-2xl w-md h-[calc(100vh-80px)]">
            <img
              src="https://i.postimg.cc/nLz44cx8/banner-pic-2.webp"
              alt="about-us-image"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
        <div className="about-content flex-1">
          <div className="main-content">
            <h1 className="about-heading text-4xl sm:text-5xl md:text-8xl lg:text-3xl xl:text-8xl 2xl:text-[10rem] font-thin font-chillax">
              <span>Apolo</span> <br />
              <span className="barua">Barua</span> <br />
              <span className="apurbo">Apurbo</span>
            </h1>
            <p className="sub-desc">
              "Passionate about web development, I also bring creativity to
              photography and video editing."
            </p>
            <a href="#info" className="about-me">
              <i className="bx bx-down-arrow-alt"></i> About Me
            </a>
          </div>

          <div id="info" className="detail-content">
            <h3 className="dl-name">Apolo Barua Apurbo</h3>
            <h2 className="dl-heading">
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
            <img src="images/about/sub-pic.webp" alt="" />
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
