import React, { useState } from "react";
import { Link } from "react-router";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md shadow-md">
      <div className="max-w-5xl mx-auto flex justify-between items-center px-6 py-4">
        
        <Link to="/" className="text-2xl font-bold text-indigo-600">
          Rifat
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex  space-x-6 font-medium">
         
          <li>
            <Link to="/#about">About</Link>
          </li>
          <li>
            <Link to="/#skills">Skills</Link>
          </li>
            <li>
            <Link to="/#projects">Projects</Link>
          </li>
          <li>
            <Link to="/#education">Education</Link>
          </li>
        
          <li>
            <Link to="/#contact">Contact</Link>
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
            <Link to="/#about" onClick={() => setNavOpen(false)}>About</Link>
          </li>
          <li>
            <Link to="/#skills" onClick={() => setNavOpen(false)}>Skills</Link>
          </li>
          <li>
            <Link to="/#projects" onClick={() => setNavOpen(false)}>Projects</Link>
          </li>
          <li>
            <Link to="/#education" onClick={() => setNavOpen(false)}>Education</Link>
          </li>
          
          <li>
            <Link to="/#contact" onClick={() => setNavOpen(false)}>Contact</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
