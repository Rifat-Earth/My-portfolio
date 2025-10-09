import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
const Projects = () => {
    return (
        <motion.section id="projects"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="py-16 bg-gray-50">
            <motion.div initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }} className="max-w-6xl mx-auto px-6 text-center">
                {/* Section Title */}
                <h2 className="text-3xl font-bold text-indigo-600 mb-4">My Projects</h2>
                <p className="text-gray-600 max-w-2xl mx-auto mb-12">
                    Here are some of my favorite projects that showcase my skills in
                    frontend development and modern web design.
                </p>

                {/* project grid */}
                <motion.div initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }} className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">


                    {/* Project 1 */}
                    <motion.div initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }} className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
                        <img
                            src="/images/Nika project.png"
                            alt="Project 1"
                            className="w-full h-48 object-cover rounded-2xl"
                        />
                        <div className="p-6 text-left">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                Matrimony Platform
                            </h3>
                            <p className="text-gray-600 mb-4">
                                A full-stack MERN project for biodata matching and contact
                                requests using Stripe payment integration.
                            </p>
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                                <div className="flex flex-wrap justify-center sm:justify-start gap-3">
                                    <a href="https://matrimony-nika-forever.netlify.app/" target="_blank" className="text-purple-600 hover:underline">
                                        Live Site
                                    </a>
                                    <a href="https://github.com/Rifat-Earth/Nika-forever" target="_blank" className="text-purple-600 hover:underline">
                                        GitHub
                                    </a>
                                </div>
                                <Link
                                    to="/projectDetails"
                                    className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700 transition self-center sm:self-auto"
                                >
                                    View Details
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    {/* Project 2 */}
                    <motion.div initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }} className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
                        <img
                            src="/images/parcel Project.png"
                            alt="Project 2"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6 text-left">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                Parcel Delivery Website
                            </h3>
                            <p className="text-gray-600 mb-4">
                                A responsive React-based delivery platform with Leaflet map,
                                region filters, and live tracking.
                            </p>
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                                <div className="flex flex-wrap justify-center sm:justify-start gap-3">
                                    <a href="https://service-system.netlify.app/" target="_blank" className="text-purple-600 hover:underline">
                                        Live Site
                                    </a>
                                    <a href="https://github.com/Rifat-Earth/Sevice-review-client" target="_blank" className="text-purple-600 hover:underline">
                                        GitHub
                                    </a>
                                </div>
                                <Link
                                    to="/projectDetails"
                                    className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700 transition self-center sm:self-auto"
                                >
                                    View Details
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                    {/* Project 3 */}
                    <motion.div initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }} className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
                        <img
                            src="/images/nextJs project.png"
                            alt="Project 3"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6 text-left">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                Next Js Product Project
                            </h3>
                            <p className="text-gray-600 mb-4">
                                A web app for ordering and managing weekly meal boxes built with
                                React and Tailwind CSS.
                            </p>
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                                <div className="flex flex-wrap justify-center sm:justify-start gap-3">
                                    <a href="https://next-js-product-client.vercel.app/" target="_blank" className="text-purple-600 hover:underline">
                                        Live Site
                                    </a>
                                    <a href="https://github.com/Rifat-Earth/next_js_product_client" target="_blank" className="text-purple-600 hover:underline">
                                        GitHub
                                    </a>
                                </div>
                                <Link
                                    to="/projectDetails"
                                    className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700 transition self-center sm:self-auto"
                                >
                                    View Details
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.section>
    );
};

export default Projects;
