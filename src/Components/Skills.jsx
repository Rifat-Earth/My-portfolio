import React from "react";
import { motion } from "framer-motion";
const Skills = () => {
  return (
    <motion.section id="skills"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.7 }}
      className="py-16 bg-white">
      <div className="max-w-5xl mx-auto  text-center">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-indigo-600 mb-4">
          My Skills
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          I love building modern web applications with clean code and creative UI.
          Here are some of the technologies I work with:
        </p>

        {/* Skill Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          <div className="bg-indigo-50 p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="font-semibold text-gray-800">HTML</h3>
          </div>
          <div className="bg-indigo-50 p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="font-semibold text-gray-800">CSS</h3>
          </div>
          <div className="bg-indigo-50 p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="font-semibold text-gray-800">JavaScript</h3>
          </div>
          <div className="bg-indigo-50 p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="font-semibold text-gray-800">React</h3>
          </div>
          <div className="bg-indigo-50 p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="font-semibold text-gray-800">Tailwind CSS</h3>
          </div>
          <div className="bg-indigo-50 p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="font-semibold text-gray-800">Node.js</h3>
          </div>
          <div className="bg-indigo-50 p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="font-semibold text-gray-800">Express.js</h3>
          </div>
          <div className="bg-indigo-50 p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="font-semibold text-gray-800">MongoDB</h3>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
