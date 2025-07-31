import React from "react";
import { SiFacebook, SiGithub, SiLinkedin } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="flex justify-between items-center  res-pad border-t border-gray-500 py-4">
      <aside className="flex items-center gap-4">
        <p className="text-sm barlow">
          Copyright © {new Date().getFullYear()} - All right reserved by Apolo
          Barua Apurbo{" "}
        </p>
      </aside>

      <nav className="flex justify-between items-center gap-4">
        <a
          href="https://github.com/apolo-itnet"
          target="_blank"
          className="bg-emerald-700 p-2 rounded-full hover:bg-emerald-800 transition-colors duration-300 ease-in-out"
        >
          <SiGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/apolo-itnet-bd"
          target="_blank"
          className="bg-emerald-700 p-2 rounded-full hover:bg-emerald-800 transition-colors duration-300 ease-in-out"
        >
          <SiLinkedin />
        </a>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          className="bg-emerald-700 p-2 rounded-full hover:bg-emerald-800 transition-colors duration-300 ease-in-out"
        >
          <SiFacebook />
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
