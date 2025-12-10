import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [animate, setAnimate] = useState(false);

  const location = useLocation(); // Get current path
  const isOnSignupPage = location.pathname === "/signup";

  useEffect(() => {
    setTimeout(() => setAnimate(true), 200);
  }, []);

  const menuItems = ["Home", "About", "Research", "Projects", "Team"];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO + BRAND */}
        <div className="flex items-center space-x-3">
          <img
            src={Logo}
            alt="Logo"
            className={`w-14 h-14 object-cover rounded-full transform transition-all duration-1000 ${
              animate ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"
            }`}
          />
          <h1
            className={`text-2xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(0,255,255,0.4)] transform transition-all duration-1000 ${
              animate ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"
            }`}
          >
            Nepathya Intelliverse
          </h1>
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center space-x-8 text-white text-lg">
          {menuItems.map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="relative group">
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}

          {/* Contact Button */}
          <li>
            <a
              href="#contact"
              className="px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-md text-black font-semibold shadow-md hover:scale-105 active:scale-95 transition"
            >
              Contact
            </a>
          </li>

          {/* Signup Button */}
          <li>
            <Link
              to={isOnSignupPage ? "/" : "/signup"} // redirect to homepage if on signup page
              className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-md text-white font-semibold shadow-md hover:scale-105 active:scale-95 transition"
            >
              Signup
            </Link>
          </li>
        </ul>

        {/* MOBILE BURGER ICON */}
        <button
          className="md:hidden flex flex-col space-y-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`block w-7 h-[3px] bg-white transition duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-7 h-[3px] bg-white transition duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-7 h-[3px] bg-white transition duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden bg-black/90 backdrop-blur-lg border-t border-white/10 overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-120 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col px-6 py-6 space-y-5 text-white text-lg">
          {menuItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="block py-2 hover:text-cyan-400 transition"
              >
                {item}
              </a>
            </li>
          ))}

          <Link
            to={isOnSignupPage ? "/" : "/signup"}
            onClick={() => setIsOpen(false)}
            className="py-3 text-center bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-md font-semibold"
          >
            Signup
          </Link>

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="py-3 text-center bg-gradient-to-r from-cyan-400 to-blue-500 text-black rounded-md font-semibold"
          >
            Contact
          </a>
        </ul>
      </div>
    </nav>
  );
}
