import React, { useState } from "react";
import { Github, Facebook, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export default function ContactFooter() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Opens default email client
    window.location.href = `mailto:yourmail@example.com?subject=Message from ${formData.name}&body=${formData.message} (${formData.email})`;
  };

  return (
    <footer className="bg-black text-white px-6 py-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">

        {/* --- LEFT SIDE: INFO & SOCIAL --- */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Contact Us
          </h2>
          <p className="text-gray-400 max-w-md">
            We’re always excited to collaborate! Reach out through social media
            or send us a message directly.
          </p>

          {/* Contact Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <MapPin className="text-cyan-400" /> 
              <span>Kathmandu, Nepal</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-purple-400" /> 
              <span>yourmail@example.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-pink-400" /> 
              <span>+977-9800000000</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 mt-4">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition">
              <Github size={24} />
            </a>
            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
              <Facebook size={24} />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
              <Linkedin size={24} />
            </a>
          </div>
        </div>

        {/* --- RIGHT SIDE: CONTACT FORM --- */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Send us a message</h3>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 max-w-md"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="bg-gray-900 rounded-xl px-4 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="bg-gray-900 rounded-xl px-4 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              rows={4}
              className="bg-gray-900 rounded-xl px-4 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
            ></textarea>
            <button
              type="submit"
              className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-xl py-3 font-semibold hover:scale-105 transform transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Nepathya Interlliverse. All rights reserved.
      </div>
    </footer>
  );
}
