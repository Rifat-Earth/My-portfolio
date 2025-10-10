import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-scroll";
import { Link as RouterLink  } from "react-router";


const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="fixed  w-full z-50 bg-white/80 backdrop-blur-md shadow-md">
      <div className="max-w-5xl mx-auto flex justify-between items-center px-6 py-4">

        <RouterLink to="/" className="text-2xl font-bold text-indigo-600">
          Rifat
        </RouterLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex  space-x-6 font-medium">

          <li>
            <Link
              to="hero"
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer  hover:text-purple-600"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer hover:text-purple-600"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer hover:text-purple-600"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="education"
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer hover:text-purple-600"
            >
              Education
            </Link>
          </li>

          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer hover:text-purple-600"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setNavOpen(!navOpen)}
            className="text-2xl text-primary focus:outline-none"
          >
            {navOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {navOpen && (
        <ul className="md:hidden bg-white/95 backdrop-blur-md px-6 py-4 flex flex-col space-y-4 font-medium">

          <li>
            <Link to="about" smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer hover:text-purple-600" onClick={() => setNavOpen(false)}>About</Link>
          </li>
          <li>
            <Link to="skills" smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer hover:text-purple-600" onClick={() => setNavOpen(false)}>Skills</Link>
          </li>
          <li>
            <Link to="projects" smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer hover:text-purple-600" onClick={() => setNavOpen(false)}>Projects</Link>
          </li>
          <li>
            <Link to="education" smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer hover:text-purple-600" onClick={() => setNavOpen(false)}>Education</Link>
          </li>

          <li>
            <Link to="contact" smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer hover:text-purple-600" onClick={() => setNavOpen(false)}>Contact</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
