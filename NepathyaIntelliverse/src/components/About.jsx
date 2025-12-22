import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Float } from "@react-three/drei";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { Brain, Sparkles, Globe } from "lucide-react";
import * as THREE from "three";

/* ---------------- AI HEAD ---------------- */
function AIHead() {
  return (
    <group rotation={[0, Math.PI / 4, 0]}>
      {/* Main Sphere */}
      <mesh>
        <sphereGeometry args={[2.5, 64, 64]} />
        <meshStandardMaterial
          color="#00ffff"
          metalness={0.7}
          roughness={0.2}
          emissive="#00ffff"
          emissiveIntensity={0.6}
        />
      </mesh>

      {/* Wireframe */}
      <lineSegments>
        <wireframeGeometry args={[new THREE.SphereGeometry(2.55, 32, 32)]} />
        <lineBasicMaterial color="#a855f7" transparent opacity={0.45} />
      </lineSegments>

      {/* Floating Cubes */}
      {Array.from({ length: 25 }).map((_, i) => (
        <mesh
          key={i}
          position={[
            (Math.random() - 0.5) * 5,
            (Math.random() - 0.5) * 5,
            (Math.random() - 0.5) * 5,
          ]}
        >
          <boxGeometry args={[0.12, 0.12, 0.12]} />
          <meshStandardMaterial
            color="#22d3ee"
            emissive="#22d3ee"
            emissiveIntensity={0.8}
          />
        </mesh>
      ))}
    </group>
  );
}

/* ---------------- MAIN COMPONENT ---------------- */
export default function AboutNepathyaAI() {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <section className="relative overflow-hidden bg-black text-white py-24 px-6">

      {/* 🎥 BACKGROUND VIDEO (DESKTOP ONLY) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-40"
      >
        <source src="/videos/ai-bg.mp4" type="video/mp4" />
      </video>


      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 -z-25 hidden md:block" />

      {/* 🌌 PARTICLES */}
      <Particles
        init={particlesInit}
        className="absolute inset-0 -z-10"
        options={{
          fullScreen: false,
          particles: {
            number: { value: 80, density: { enable: true, area: 900 } },
            color: { value: ["#22d3ee", "#a855f7"] },
            links: {
              enable: true,
              distance: 140,
              color: "#22d3ee",
              opacity: 0.25,
            },
            move: { enable: true, speed: 1.2 },
            opacity: { value: 0.4 },
            size: { value: { min: 1, max: 3 } },
          },
        }}
      />

      {/* 🤖 3D AI HEAD */}
      <Canvas className="absolute inset-0 -z-20">
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Suspense fallback={null}>
          <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.8}>
            <AIHead />
          </Float>
          <Environment preset="city" />
        </Suspense>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.25}
        />
      </Canvas>

      {/* ✨ CONTENT */}
      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-sm uppercase tracking-widest text-cyan-400">
            About Nepathya Interlliverse
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Building the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Future of AI
            </span>
          </h2>

          <p className="mt-6 text-gray-300">
            Nepathya Interlliverse is an innovation-driven AI ecosystem focused on
            intelligence, creativity, and real-world problem solving.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid gap-6"
        >
          {features.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600">
                  <item.icon className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </div>
              <p className="mt-3 text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- FEATURES ---------------- */
const features = [
  {
    title: "AI Intelligence Core",
    desc: "Advanced AI research powered by Nepathya College.",
    icon: Brain,
  },
  {
    title: "Innovation & Creativity",
    desc: "Where imagination meets computation.",
    icon: Sparkles,
  },
  {
    title: "Global Vision",
    desc: "AI solutions that transcend borders.",
    icon: Globe,
  },
];
