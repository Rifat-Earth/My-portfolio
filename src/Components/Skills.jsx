import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiExpress, SiMongodb } from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-4xl" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-4xl" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-500 text-4xl" /> },
    { name: "React", icon: <FaReact className="text-sky-500 text-4xl" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500 text-4xl" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-4xl" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-700 text-4xl" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-700 text-4xl" /> },
  ];

  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.7 }}
      className="py-16 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-indigo-600 mb-4">
          My Skills
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          I specialize in building modern, responsive, and high-performance web applications using the latest technologies.
        </p>

        {/* Skill Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-2"
            >
              <div className="flex flex-col items-center space-y-2">
                {skill.icon}
                <h3 className="font-semibold text-gray-800">{skill.name}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;
