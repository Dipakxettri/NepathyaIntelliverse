import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="w-100% h-screen bg-black text-white flex items-center"
    >
      <div className="w-full h-full grid md:grid-cols-2 items-center px-6 md:px-12 lg:px-20">

        {/* Left Illustration */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center md:justify-start"
        >
          <img
            // src="/logo.png"
            alt="Logo"
            className="w-[350px] md:w-[450px] lg:w-[550px]"
          />
        </motion.div>

        {/* Right Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-left"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            About <span className="text-blue-500">Our AI Lab</span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-6">
            Welcome to the <span className="text-blue-400 font-semibold">Nepathya AI Lab</span>, 
            where innovation meets intelligence. We explore Machine Learning, Deep Learning, 
            Computer Vision, Data Research, and AI-driven applications through real-world projects.
          </p>

          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            We believe AI should be accessible, practical, and impactful — helping students 
            and developers build the future with new ideas, creativity, and technology.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-10 py-4 text-lg rounded-xl bg-blue-600 hover:bg-blue-700 transition"
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
