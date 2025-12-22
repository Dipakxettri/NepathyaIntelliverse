import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/gallery/img2.jpg",
  "/gallery/img3.jpg",
  "/gallery/img4.jpg",
  "/gallery/img4.jpg",
];

export default function GallerySectionUltraColor() {
  const [activeIndex, setActiveIndex] = useState(null);

  const next = () => setActiveIndex((prev) => (prev + 1) % images.length);
  const prev = () =>
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  return (
    <section className="relative bg-black text-white px-6 py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Accent Line */}
          <div className="w-16 h-[2px] bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mb-6" />

          {/* Gradient Heading */}
          <h2
            className="text-4xl md:text-5xl font-bold tracking-tight 
                       bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 
                       bg-clip-text text-transparent animate-gradient"
          >
            Moments & Milestones
          </h2>

          {/* Colorful Paragraph */}
          <p className="mt-6 max-w-md leading-relaxed text-base
                        bg-gradient-to-r from-gray-300 via-gray-200 to-gray-400 
                        bg-clip-text text-transparent">
            Explore our <span className="text-cyan-400 font-medium">AI lab</span> and
            journey through <span className="text-purple-400 font-medium">key moments</span> 
            captured in time — innovation, creativity, and progress visualized.
          </p>

          {/* Subtle Hint */}
          <p className="mt-4 text-sm text-gray-400">
            Click a card or use the arrows to browse →
          </p>
        </motion.div>

        {/* RIGHT STACKED GALLERY */}
        <div className="relative h-[460px] perspective-[1200px]">
          {images.map((src, i) => (
            <motion.div
              key={i}
              onClick={() => setActiveIndex(i)}
              whileHover={{ y: -10, rotateX: 6, rotateY: -6 }}
              transition={{ type: "spring", stiffness: 180, damping: 18 }}
              className="absolute cursor-pointer rounded-xl overflow-hidden bg-white shadow-2xl"
              style={{
                width: "300px",
                height: "380px",
                left: i * 24,
                top: i * 18,
                zIndex: images.length - i,
                transformStyle: "preserve-3d",
                rotate: i % 2 === 0 ? "-4deg" : "4deg",
              }}
            >
              <img
                src={src}
                alt="Gallery"
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* FULLSCREEN SLIDER */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* LEFT ARROW */}
            <button
              onClick={prev}
              className="absolute left-6 md:left-12 text-white/70 hover:text-white transition"
            >
              <ChevronLeft size={42} />
            </button>

            {/* IMAGE */}
            <motion.img
              key={activeIndex}
              src={images[activeIndex]}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0.9 }}
              transition={{ duration: 0.35 }}
              className="max-w-[90%] max-h-[90%] rounded-2xl shadow-2xl"
            />

            {/* RIGHT ARROW */}
            <button
              onClick={next}
              className="absolute right-6 md:right-12 text-white/70 hover:text-white transition"
            >
              <ChevronRight size={42} />
            </button>

            {/* CLOSE */}
            <button
              onClick={() => setActiveIndex(null)}
              className="absolute top-6 right-6 text-white hover:text-gray-300"
            >
              <X size={28} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
