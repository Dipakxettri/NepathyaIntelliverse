import React from "react";

export default function Popup({ show, onClose }) {
  if (!show) return null;

  return (
    <div
      className="fixed inset-0 flex justify-center items-center z-50"
    >
      {/* Background overlay */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      ></div>

      {/* Popup Card */}
      <div
        className="relative bg-gray-900 text-white rounded-xl shadow-2xl p-6
                   w-[70vw] h-[70vh] max-w-[1000px] max-h-[800px]
                   flex flex-col justify-center items-center
                   animate-slideDownFade"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-gray-400"
        >
          &times;
        </button>

        <h1 className="text-4xl font-bold mb-4">Welcome to our Website!</h1>
        <p className="text-lg text-center">
          The website is still under developement.
        </p>
      </div>

      {/* Inline keyframes */}
      <style>
        {`
          @keyframes slideDownFade {
            0% {
              opacity: 0;
              transform: translateY(-50px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-slideDownFade {
            animation: slideDownFade 0.5s ease forwards;
          }
        `}
      </style>
    </div>
  );
}
