import { useState } from "react";
import { motion } from "framer-motion";
import { UserPlus, LogIn } from "lucide-react";

export default function SignUp() {
  const [activeTab, setActiveTab] = useState("signup");

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gray-900 shadow-2xl rounded-2xl p-6 w-full max-w-md"
      >
        {/* Tabs */}
        <div className="flex justify-center gap-6 mb-6">
          <button
            onClick={() => setActiveTab("signup")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
              activeTab === "signup"
                ? "bg-blue-600 text-white shadow"
                : "bg-gray-800 text-gray-300"
            }`}
          >
            <UserPlus size={18} /> Signup
          </button>

          <button
            onClick={() => setActiveTab("login")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
              activeTab === "login"
                ? "bg-blue-600 text-white shadow"
                : "bg-gray-800 text-gray-300"
            }`}
          >
            <LogIn size={18} /> Login
          </button>
        </div>

        {/* Signup Form */}
        {activeTab === "signup" && (
          <motion.div
            key="signup"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <h2 className="text-xl font-bold text-center text-white">
              Create Account
            </h2>

            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 border border-gray-700 bg-gray-800 text-white rounded-xl focus:ring focus:ring-blue-200 outline-none"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-700 bg-gray-800 text-white rounded-xl focus:ring focus:ring-blue-200 outline-none"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border border-gray-700 bg-gray-800 text-white rounded-xl focus:ring focus:ring-blue-200 outline-none"
            />

            <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold shadow hover:bg-blue-700 transition">
              Sign Up
            </button>
          </motion.div>
        )}

        {/* Login Form */}
        {activeTab === "login" && (
          <motion.div
            key="login"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <h2 className="text-xl font-bold text-center text-white">
              Welcome Back
            </h2>

            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-700 bg-gray-800 text-white rounded-xl focus:ring focus:ring-blue-200 outline-none"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border border-gray-700 bg-gray-800 text-white rounded-xl focus:ring focus:ring-blue-200 outline-none"
            />

            <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold shadow hover:bg-blue-700 transition">
              Login
            </button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
