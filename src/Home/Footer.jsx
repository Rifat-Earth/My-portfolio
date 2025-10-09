import React from "react";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-indigo-50 to-purple-100 text-gray-700 py-8 mt-12">
      <div className="max-w-5xl mx-auto px-4 text-center">
      
        <p className="text-sm mb-6">
          © {new Date().getFullYear()} Rifat. All rights reserved.
        </p>

        <div className="flex justify-center gap-6 mb-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-indigo-600 transition-colors"
          >
            <FaFacebookF size={25} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-indigo-600 transition-colors"
          >
            <FaLinkedinIn size={25} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-indigo-600 transition-colors"
          >
            <FaGithub size={25} />
          </a>
        </div>

        <p className="text-xs text-gray-500">
          Built with Project using React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
