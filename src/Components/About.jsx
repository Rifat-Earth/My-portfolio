import React from "react";
import { motion } from "framer-motion";
const About = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
      className="max-w-5xl mx-auto"
    >

      <div className="flex flex-col md:flex-row items-center mb-5">

        <div className="flex-1 text-gray-700 text-lg md:text-xl ">
          <p>
            Hi, I’m <strong>Rifat</strong>, a passionate Frontend Developer with a focus on React and Tailwind CSS. I love building clean, modern, and responsive web applications.
          </p>
          <p>
            I started my programming journey as a chemical engineering student and gradually fell in love with web development. I enjoy creating interactive interfaces and solving real-world problems with code.
          </p>
          <p>
            Outside of programming, I enjoy hobbies like sports, and exploring new technologies. I believe in continuous learning and constantly improving my skills.
          </p>
        </div>


      </div>
    </motion.section>
  );
};

export default About;
