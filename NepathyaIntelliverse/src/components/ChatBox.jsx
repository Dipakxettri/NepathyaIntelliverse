import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send } from "lucide-react";

export default function ChatBot() {
  const [show, setShow] = useState(false); // appear on scroll
  const [open, setOpen] = useState(false); // expanded chat

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) setShow(true);
      else setShow(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50"
        >
          {/* Small Chat Icon */}
          {!open && (
            <motion.div
              onClick={() => setOpen(true)}
              className="bg-cyan-500 text-white p-4 rounded-r-xl shadow-lg cursor-pointer hover:bg-cyan-600 transition w-20 text-center"
            >
              AI Chat
            </motion.div>
          )}

          {/* Expanded Chat Panel */}
          {open && (
            <motion.div
              layout
              initial={{ width: 0 }}
              animate={{ width: 320 }}
              exit={{ width: 0 }}
              className="bg-cyan-500 text-white shadow-lg rounded-r-xl p-4 flex flex-col h-96"
            >
              {/* Header with Close Button */}
              <div
                className="flex justify-between items-center mb-2 cursor-pointer"
                onClick={() => setOpen(false)}
              >
                <span className="font-semibold">AI Chat</span>
                <span className="font-bold">✕</span>
              </div>

              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto mb-2 bg-white/10 rounded-lg p-2">
                {/* Placeholder: you can add AI messages later */}
              </div>

              {/* Input Area */}
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="flex-1 p-2 rounded-lg outline-none text-black"
                />
                <button className="bg-blue-600 p-2 rounded-lg hover:bg-blue-700">
                  <Send size={20} />
                </button>
              </div>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
