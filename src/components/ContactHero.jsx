// src/components/ContactHeroSouthIndia.jsx
import React from "react";
import { motion } from "framer-motion";
import heroBg from "../assets/hero/2.jpg"; // Replace with a S.I. Packers background if needed

const colors = {
  red: "#C62828",
  blue: "#1D4ED8",
  cream: "#F7F5EE",
  white: "#FFFFFF",
};

export default function ContactHeroSouthIndia() {
  return (
    <section
      className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden"
      style={{  fontFamily: "'Italiana', 'Zen Dots', 'Orbitron', sans-serif" }}
    >
      {/* 🔹 Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroBg}
          alt="South India Packers Background"
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* 🔹 Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center px-6 sm:px-12 lg:px-24 z-10 max-w-5xl"
      >
        <h2
          className="text-sm sm:text-base uppercase tracking-[3px] mb-5 font-[Orbitron] font-semibold"
          style={{ color: colors.blue, letterSpacing: "3px" }}
        >
          Get in Touch
        </h2>

        <h1
          className="text-4xl sm:text-5xl lg:text-5xl font-bold mb-6"
          style={{ color: colors.red, fontFamily: "'Zen Dots', sans-serif" }}
        >
          Let’s Make Your <span style={{ color: colors.blue }}>Move</span>
          <br />
          Smooth with <span style={{ color: colors.white }}>South India Packers</span>
        </h1>

        <p
          className="text-gray-800 sm:text-lg mb-10 max-w-3xl mx-auto leading-relaxed font-[Italiana]"
        >
          Experience <span style={{ color: colors.red, fontWeight: "600" }}>premium relocation services</span> 
          with reliability and professionalism. Every move is handled with 
          <span style={{ color: colors.blue, fontWeight: "600" }}> care</span> and 
          <span style={{ color: colors.red, fontWeight: "600" }}> efficiency</span>, ensuring complete peace of mind.
        </p>

        {/* 🔹 Buttons */}
        <div className="flex flex-wrap justify-center gap-6 font-[Orbitron]">
          <motion.a
            href="tel:+919555611308"
            whileHover={{ scale: 1.05, boxShadow: `0 0 25px ${colors.red}/50` }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full bg-blue-700 text-white border border-red-600 font-semibold tracking-wide shadow-md transition-all duration-300"
          >
            📞 Call Now
          </motion.a>

          <motion.a
            href="mailto:southindiapackers0@gmail.com"
            whileHover={{ scale: 1.05, boxShadow: `0 0 25px ${colors.red}/60` }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full bg-red-600 text-white font-semibold tracking-wide shadow-lg transition-all duration-300"
          >
            ✉️ Email Us
          </motion.a>
        </div>

        {/* 🔹 Glow effects */}
        <div className="absolute top-16 left-12 w-28 h-28 bg-red-600/15 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-16 w-36 h-36 bg-blue-700/10 rounded-full blur-3xl animate-pulse-slow delay-700"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-red-600/10 rounded-full blur-2xl animate-pulse-slow delay-1000"></div>
      </motion.div>
    </section>
  );
}
