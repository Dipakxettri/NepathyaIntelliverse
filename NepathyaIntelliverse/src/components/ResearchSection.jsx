import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Calendar, Tag } from "lucide-react";
import { researchData } from "./researchData";

export default function ResearchSection() {
  return (
    <section className="relative bg-black text-white py-24 px-6 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-purple-500/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-cyan-500/20 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Research & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Insights</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            A collection of our ongoing and published AI research, experiments,
            and technological breakthroughs.
          </p>
        </motion.div>

        {/* Research Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {researchData.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="relative rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 hover:border-cyan-400/40 transition"
            >
              {/* Status Badge */}
              <span
                className={`absolute top-4 right-4 text-xs px-3 py-1 rounded-full ${
                  item.status === "Published"
                    ? "bg-cyan-500/20 text-cyan-400"
                    : "bg-purple-500/20 text-purple-400"
                }`}
              >
                {item.status}
              </span>

              <h3 className="text-xl font-semibold leading-snug">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-400 text-sm">
                {item.summary}
              </p>

              {/* Meta Info */}
              <div className="mt-4 flex items-center gap-4 text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {item.date}
                </span>
                <span className="flex items-center gap-1">
                  <BookOpen className="w-4 h-4" />
                  Research
                </span>
              </div>

              {/* Tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                {item.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 text-xs text-gray-300"
                  >
                    <Tag className="w-3 h-3" />
                    {tag}
                  </span>
                ))}
              </div>

              {/* Read More */}
              <a
                href={item.link}
                className="inline-block mt-6 text-sm text-cyan-400 hover:text-cyan-300 transition"
              >
                Read Full Research →
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
