import { useRef } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import Swal from "sweetalert2";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5esu0yp",
        "template_d6ep8sb",
        form.current,
        "fj18APFJIjfv4Jdam"
      )
      .then(
        () => {
          Swal.fire({
            title: " Message Sent!",
            text: "Thank you for reaching out. I'll get back to you soon!",
            icon: "success",
            confirmButtonColor: "#6B46C1",
          });
          e.target.reset(); 
        },
        (error) => {
          Swal.fire({
            title: " Failed to send",
            text: "Something went wrong. Please try again later.",
            icon: "error",
            confirmButtonColor: "#EF4444",
          });
          console.error("EmailJS Error:", error);
        }
      );
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-5xl mx-auto p-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-2 text-indigo-600">Contact Me</h2>
          <p className="text-gray-600">
            Let’s get in touch and build something great!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
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
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white shadow-md rounded-2xl p-6 space-y-4"
          >
            <div>
              <label className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                name="from_name"
                placeholder="Your name"
                required
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="from_email"
                placeholder="Your email"
                required
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea
                name="message"
                rows="4"
                placeholder="Write your message..."
                required
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full cursor-pointer bg-purple-600 text-white font-semibold py-3 rounded-lg hover:bg-purple-700 transition"
            >
              Send Message
            </button>
          </motion.form>
         
        </div>
      </div>
    </section>
  );
}
