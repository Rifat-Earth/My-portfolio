import React from "react";
import { motion } from "framer-motion";
const Education = () => {
  return (
    <motion.section id="education"
          initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      className="py-16 bg-white">
      <div className="max-w-5xl mx-auto">
        
        <h2 className="text-3xl font-bold text-indigo-600 text-center mb-4">
          Education
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          My academic background has built the foundation for my analytical
          thinking, problem-solving, and continuous learning in web development.
        </p>
        <div className="space-y-8">

          <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-800">
              B.Sc. in Chemical Engineering
            </h3>
            <p className="text-purple-600 font-medium">
              Jashore University of Science and Technology (JUST)
            </p>
            <p className="text-gray-600 mt-2">
              2023 – Present
            </p>
            <p className="text-gray-600 mt-2">
              During my degree, I explored programming, web development, and
              problem-solving alongside my engineering studies.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-800">
              Higher Secondary Certificate (HSC)
            </h3>
            <p className="text-purple-600 font-medium">
              Cantonment Public School & College, Mymensingh
            </p>
            <p className="text-gray-600 mt-2">Year of Passing: 2021</p>
            <p className="text-gray-600 mt-2">
              Completed my HSC in Science group with strong academic performance.
            </p>
          </div>

          {/* SSC */}
          {/* <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-800">
              Secondary School Certificate (SSC)
            </h3>
            <p className="text-indigo-600 font-medium">
              [Your School Name], [City]
            </p>
            <p className="text-gray-600 mt-2">Year of Passing: 2019</p>
            <p className="text-gray-600 mt-2">
              Built my interest in science and technology during this period.
            </p>
          </div> */}
        </div>
      </div>
    </motion.section>
  );
};

export default Education;
