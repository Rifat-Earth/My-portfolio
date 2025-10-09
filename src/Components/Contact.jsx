import { motion } from "framer-motion";

import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-5xl p-2 mx-auto ">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-2 text-indigo-600">Contact Me</h2>
          <p className="text-gray-600">Let’s get in touch and build something great!</p>
        </motion.div>

        <div className="grid md:grid-cols-2 ">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-4">
              <Mail className="text-blue-600 w-6 h-6" />
              <p className="text-gray-700">rifathasan01915@gmail.com</p>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="text-blue-600 w-6 h-6" />
              <p className="text-gray-700">+880 1915976493</p>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="text-blue-600 w-6 h-6" />
              <p className="text-gray-700">Mymensingh, Bangladesh</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white shadow-md rounded-2xl p-6 space-y-4"
          >
            <div>
              <label className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                placeholder="Your email"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white font-semibold py-3 rounded-lg hover:bg-purple-700 transition"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
