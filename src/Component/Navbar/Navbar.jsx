import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between items-center py-4 res-p font-chillax font-medium">
        <div className="flex items-center w-20 h-20 bg-gray-50 hover:bg-sky-600 rounded-full p-2 transition-colors ease-in-out duration-300">
          <img src="https://i.postimg.cc/XqQHXKkf/ablogo.webp" alt="" className="" />
        </div>
        <div className="flex items-center py-3 gap-8  font-chillax font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex py-2 rounded-lg transition-all ease-in-out duration-300 ${isActive ? "text-gray-50" : "text-gray-400 hover:text-gray-50"}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `flex py-2 rounded-lg transition-all ease-in-out duration-300 ${isActive ? "text-gray-50" : "text-gray-400 hover:text-gray-50"}`
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `flex py-2 rounded-lg transition-all ease-in-out duration-300 ${isActive ? "text-gray-50" : "text-gray-400 hover:text-gray-50"}`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `flex py-2 rounded-lg transition-all ease-in-out duration-300 ${isActive ? "text-gray-50" : "text-gray-400 hover:text-gray-50"}`
            }
          >
            Contact
          </NavLink>
        </div>
        <div>
          <NavLink>
            <button className="btn bg-transparent shadow-none border border-sky-600 text-gray-50 rounded-full px-6 py-2">Hire me</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
