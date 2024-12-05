import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = useLocation().pathname;

  return (
    <>
      <nav className="bg-orange-600/0 backdrop-blur-sm border-b-2 border-orange-500/75">
        <div className="container mx-auto px-8 lg:px-12">
          <div className="flex items-center justify-between h-24">
            <Link
              to="/"
              className="flex gap-3 text-2xl font-bold bg-gradient-to-r from-orange-600 to-rose-600 bg-clip-text text-transparent hover:scale-105 transition-transform"
            >
              <FaGraduationCap className="text-2xl text-orange-500" />
              Rozan Nouval
              <FaGraduationCap className="text-2xl text-orange-500" />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-12">
              <Link
                to="/"
                className={`group flex gap-3 px-5 pt-3 pb-2 rounded-full transition-all duration-300 ${
                  pathname === "/" ? "bg-rose-300/10" : "hover:bg-rose-300/10"
                }`}
              >
                <FaHome
                  className={`text-orange-500 group-hover:scale-110 transition-transform ${
                    pathname === "/" && "scale-110"
                  }`}
                />
                <span className="text-gray-700 font-medium">Home</span>
              </Link>
              <Link
                to="/about"
                className={`group flex gap-3 px-5 pt-3 pb-2 rounded-full transition-all duration-300 ${
                  pathname === "/about"
                    ? "bg-rose-300/10"
                    : "hover:bg-rose-300/10"
                }`}
              >
                <FaUser
                  className={`text-orange-500 group-hover:scale-110 transition-transform ${
                    pathname === "/about" && "scale-110"
                  }`}
                />
                <span className="text-gray-700 font-medium">About</span>
              </Link>
              <Link
                to="/contact"
                className={`group flex gap-3 px-5 pt-3 pb-2 rounded-full transition-all duration-300 ${
                  pathname === "/contact"
                    ? "bg-rose-300/10"
                    : "hover:bg-rose-300/10"
                }`}
              >
                <FaEnvelope
                  className={`text-orange-500 group-hover:scale-110 transition-transform ${
                    pathname === "/contact" && "scale-110"
                  }`}
                />
                <span className="text-gray-700 font-medium">Contact</span>
              </Link>
              <Link
                to="/projects"
                className={`group flex gap-3 px-5 pt-3 pb-2 rounded-full transition-all duration-300 ${
                  pathname === "/projects"
                    ? "bg-rose-300/10"
                    : "hover:bg-rose-300/10"
                }`}
              >
                <FaBriefcase
                  className={`text-orange-500 group-hover:scale-110 transition-transform ${
                    pathname === "/projects" && "scale-110"
                  }`}
                />
                <span className="text-gray-700 font-medium">Projects</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-3 rounded-full hover:bg-gradient-to-r from-orange-500/10 to-rose-500/10 transition-all"
            >
              <FaBars className="text-2xl text-orange-500" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl w-[80%] max-w-md mx-auto relative">
            <div className="px-8 pt-7 flex items-start justify-between">
              <h4 className="text-orange-500 text-xl font-bold">MENU</h4>
              {/* Close Button */}
              <button onClick={() => setIsOpen(false)}>
                <FaTimes className="text-xl text-orange-500" />
              </button>
            </div>

            <div className="flex flex-col space-y-2 p-6">
              <Link
                to="/"
                className={`flex gap-3 p-4 rounded-xl transition-all ${
                  pathname === "/"
                    ? "bg-rose-300/10"
                    : "hover:bg-rose-300/10"
                }`}
                onClick={() => setIsOpen(false)}
              >
                <FaHome className="text-xl text-orange-500" />
                <span className="text-gray-700 font-medium">Home</span>
              </Link>
              <Link
                to="/about"
                className={`flex gap-3 p-4 rounded-xl transition-all ${
                  pathname === "/about"
                    ? "bg-rose-300/10"
                    : "hover:bg-rose-300/10"
                }`}
                onClick={() => setIsOpen(false)}
              >
                <FaUser className="text-xl text-orange-500" />
                <span className="text-gray-700 font-medium">About</span>
              </Link>

              <Link
                to="/contact"
                className={`flex gap-3 p-4 rounded-xl transition-all ${
                  pathname === "/contact"
                    ? "bg-rose-300/10"
                    : "hover:bg-rose-300/10"
                }`}
                onClick={() => setIsOpen(false)}
              >
                <FaEnvelope className="text-xl text-orange-500" />
                <span className="text-gray-700 font-medium">Contact</span>
              </Link>
              <Link
                to="/projects"
                className={`flex gap-3 p-4 rounded-xl transition-all ${
                  pathname === "/projects"
                    ? "bg-rose-300/10"
                    : "hover:bg-rose-300/10"
                }`}
                onClick={() => setIsOpen(false)}
              >
                <FaBriefcase className="text-xl text-orange-500" />
                <span className="text-gray-700 font-medium">Projects</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
