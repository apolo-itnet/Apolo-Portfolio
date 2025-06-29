import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {

  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`sticky overflow-hidden top-0 left-0 !w-full h-auto  ${scrolled ? 'bg-neutral-800/80 backdrop-blur-[2px]' : 'bg-transparent'}`}>

      <div className="flex justify-between items-center py-2 font-chillax font-medium border-b border-gray-500 res-p">

        <div className="flex items-center w-18 h-18 bg-gray-50 hover:bg-sky-600 rounded-full p-3 transition-colors ease-in-out duration-300">
          <img
            src="https://i.postimg.cc/XqQHXKkf/ablogo.webp"
            alt="Logo"
            className="w-full h-full object-cover"
          />
        </div>

        <nav>
          <ul className="flex items-center space-x-8 font-chillax font-medium z-50">
            {['home', 'about', 'projects', 'contact'].map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  className="text-gray-50 hover:text-emerald-500 active:text-emerald-400 transition-colors duration-300"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <Link to="#hire">
            <button className="btn bg-transparent shadow-none border border-sky-600 text-gray-50 rounded-full px-6 py-2">
              Hire me
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
