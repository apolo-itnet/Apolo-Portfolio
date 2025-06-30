import React from "react";
import { SiFacebook, SiGithub, SiLinkedin } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="flex justify-between items-center  res-pad border-t border-gray-500 py-4">
      <aside className="flex items-center gap-4">
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>

      <nav className="flex justify-between items-center gap-4">
        <a href="https://github.com/" target="_blank">
          <SiGithub />
        </a>
        <a href="https://www.linkedin.com/" target="_blank">
          <SiLinkedin />
        </a>
        <a href="https://www.facebook.com/" target="_blank">
          <SiFacebook />
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
