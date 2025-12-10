import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const isMobile = window.innerWidth < 768;
    const neuronCount = isMobile ? 150 : 600;
    const maxDistance = isMobile ? 120 : 200;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const neurons = [];
    for (let i = 0; i < neuronCount; i++) {
      neurons.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 0.5 + 1,
        dx: (Math.random() - 0.5) * 10,
        dy: (Math.random() - 0.5) * 10,
      });
    }

    function animate() {
      ctx.fillStyle = "rgba(0,0,0,0.2)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      neurons.forEach((n, index) => {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = "#0ff";
        ctx.fill();

        for (let j = index + 1; j < neurons.length; j++) {
          const other = neurons[j];
          const dist = Math.hypot(n.x - other.x, n.y - other.y);
          if (dist < maxDistance) {
            ctx.strokeStyle = `rgba(0, 255, 255, ${1 - dist / maxDistance})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        }

        n.x += n.dx;
        n.y += n.dy;

        if (n.x < 0 || n.x > canvas.width) n.dx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.dy *= -1;
      });

      animationFrameId = requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center px-4">
      {/* Canvas Background */}
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0" />

      {/* Top-left text */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="
    fixed z-50 text-cyan-400 font-medium
    text-lg top-4 left-4         /* mobile */
    md:text-3xl md:top-40 md:left-10  /* laptop/desktop */
  "
      >
        Powered by Nepathya College
      </motion.div>





      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 text-center max-w-2xl"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-cyan-300 drop-shadow-2xl">
          Nepathya Intelliverse
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed">
          Explore the fascinating world of AI and ML!
        </p>

        <p className="mt-3 text-gray-400 text-sm max-w-xl mx-auto">
          Discover our innovative ideas and team members.
        </p>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          href="#explore"
          className="inline-block mt-8 px-6 py-3 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-400 text-black font-medium shadow-xl"
        >
          Sign up
        </motion.a>
      </motion.div>
    </div>
  );
}
