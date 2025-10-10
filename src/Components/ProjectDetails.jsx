import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { FaPuzzlePiece, FaRocket } from "react-icons/fa";

export default function ProjectDetails() {
  const projects = [
    {
      id: 1,
      title: "Matrimony Platform – Nika Forever",
      description:
        "A full-featured Matrimony web application that allows users to create biodata, filter profiles, request contact info, and complete payments through Stripe. Includes user and admin dashboards, premium memberships, and success stories.",
      techStack: [
        "React",
        "Tailwind CSS",
        "Firebase Auth",
        "Express.js",
        "MongoDB",
        "Stripe",
      ],
      liveLink: "https://matrimony-nika-forever.netlify.app/",
      github: "https://github.com/Rifat-Earth/Nika-forever",
      challenges: [
        "Integrating Stripe payment and handling real-time approval logic.",
        "Creating role-based authentication and secure routes.",
        "Managing dynamic biodata filtering with division, age, and type.",
      ],
      improvements: [
        "Add real-time chat system between users.",
        "Implement advanced match suggestions with AI filtering.",
      ],
    },
    {
      id: 2,
      title: "Service System Website",
      description:
        "A responsive service platform where users can view service details, add reviews, and rate services. Admins can manage services, and user authentication is handled via Firebase.",
      techStack: ["React", "Tailwind CSS", "DaisyUI", "Node.js", "MongoDB"],
      liveLink: "https://service-system.netlify.app/",
      github: "https://github.com/Rifat-Earth/Sevice-review-client",
      challenges: [
        "Building a secure review system with authentication.",
        "Handling dynamic routing for service details.",
        "Implementing a clean and consistent UI across devices.",
      ],
      improvements: [
        "Add admin dashboard for analytics.",
        "Integrate notifications for review approval.",
      ],
    },
    {
      id: 3,
      title: "Next.js Product Management System",
      description:
        "A modern Next.js product management web app with authentication using NextAuth and a fully responsive layout. Built for managing products efficiently and deployed on Vercel.",
      techStack: ["Next.js", "Tailwind CSS", "NextAuth", "Vercel"],
      liveLink: "https://next-js-product-client.vercel.app/",
      github: "https://github.com/Rifat-Earth/next_js_product_client",
      challenges: [
        "Setting up NextAuth authentication with Google provider.",
        "Deploying and configuring environment variables in Vercel.",
        "Ensuring smooth routing and performance optimization.",
      ],
      improvements: [
        "Add product filtering and search features.",
        "Implement backend API for full CRUD functionality.",
      ],
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white"
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-2 text-indigo-400">
            Project Details
          </h2>
          <p className="text-gray-400">
            Showcasing my real-world web development projects
          </p>
        </motion.div>

        <div className="space-y-16">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="bg-gray-800 rounded-2xl shadow-lg p-8 hover:shadow-indigo-600/30 transition"
            >
              <h3 className="text-2xl font-semibold text-indigo-300 mb-4">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>

              {/* Tech Stack */}
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-indigo-400 flex items-center gap-2">
                  <FaPuzzlePiece /> Tech Stack:
                </h4>
                <ul className="flex flex-wrap gap-2 mt-2">
                  {project.techStack.map((tech, index) => (
                    <li
                      key={index}
                      className="bg-indigo-600/20 border border-indigo-500/30 px-3 py-1 rounded-lg text-sm"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-4 my-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg transition"
                >
                  <ExternalLink size={18} /> Live Project
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border border-indigo-500 px-4 py-2 rounded-lg hover:bg-indigo-600/30 transition"
                >
                  <Github size={18} /> GitHub Repo
                </a>
              </div>

              {/* Challenges */}
              <div className="mt-6">
                <h4 className="text-lg font-semibold text-indigo-400 flex items-center gap-2">
                  <FaPuzzlePiece /> Challenges Faced:
                </h4>
                <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                  {project.challenges.map((ch, index) => (
                    <li key={index}>{ch}</li>
                  ))}
                </ul>
              </div>

              {/* Future Improvements */}
              <div className="mt-6">
                <h4 className="text-lg font-semibold text-indigo-400 flex items-center gap-2">
                  <FaRocket /> Future Improvements:
                </h4>
                <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                  {project.improvements.map((im, index) => (
                    <li key={index}>{im}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
