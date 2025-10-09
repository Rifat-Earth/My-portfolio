import React from "react";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import About from "./About";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      id="hero"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="flex flex-col-reverse md:flex-row items-center justify-between max-w-5xl mx-auto px-6 py-12 md:py-20 gap-10"
    >
      {/* Left side: Text */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-indigo-600 mb-4">
          Hi, I’m Rifat
        </h1>

        <h1 className="text-4xl text-bold">Frontend Developer </h1>

        <p className="text-3xl text-gray-700 mb-4">
          I craft responsive and{" "}
          <TypeAnimation
            sequence={[
              "user-friendly web applications ",
              2000,
              "interactive UI designs ",
              2000,
              "modern React projects ",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-indigo-600 font-semibold"
          />
        </p>
        <div>
          <About />
        </div>
        {/* Resume Button */}
        <a
          href="https://drive.google.com/file/d/177-FAEtPRzLTxtGmNpY0R3p-NOlzi4gO/view?usp=sharing"
          
          className="inline-block px-6 py-3  bg-purple-700 text-white font-medium rounded-lg shadow-md hover:bg-purple-500 transition mb-6"
        >
          Download Resume
        </a>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-start space-x-4 mt-4 text-3xl text-Purple-700">
          <a href="https://www.linkedin.com/in/mahmudhul-hasan-rifat/" target="_blank" rel="noreferrer">
            <FaLinkedin className="hover:text-blue-600" />
          </a>
          <a href="https://github.com/Rifat-Earth" target="_blank" rel="noreferrer">
            <FaGithub className="hover:text-blue-800" />
          </a>
          <a href="https://facebook.com/" target="_blank" rel="noreferrer">
            <FaFacebook className="hover:text-blue-700" />
          </a>
        </div>
      </div>

      {/* Right side: Photo */}
      <div className="flex-1 flex justify-center md:justify-end">
        <img
          src="/images/Hero.png"
          alt="Rifat's image"
          className="w-64 mb-12 p-1 h-64 md:w-96 md:h-96 rounded-full object-cover  border-2 border-purple-700 shadow-2xl"
        />
      </div>
    </motion.section>
  );
};

export default Hero;
