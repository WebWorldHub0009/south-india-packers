// src/components/GalleryHeroSouthIndia.jsx
import React from "react";
import { motion } from "framer-motion";
import heroBg from "../assets/service/cmove.jpg"; // Replace with your South India Packers hero background

// South India Packers Colors
const COLORS = {
  red: "#C62828",
  blue: "#1D4ED8",
  cream: "#F7F5EE",
  charcoal: "#1C1C1C",
  white: "#FFFFFF",
};

export default function GalleryHeroSouthIndia() {
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
      
      {/* 🔹 Background with Overlay */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroBg}
          alt="South India Packers Gallery"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70"></div>
      </div>

      {/* 🔹 Floating Glows */}
      <div
        className="absolute top-12 left-16 w-40 h-40 rounded-full blur-3xl animate-pulse-slow"
        style={{ backgroundColor: `${COLORS.red}/25` }}
      ></div>
      <div
        className="absolute bottom-24 right-24 w-48 h-48 rounded-full blur-3xl animate-pulse-slow delay-500"
        style={{ backgroundColor: `${COLORS.cream}/15` }}
      ></div>
      <div
        className="absolute top-1/2 right-1/3 w-32 h-32 rounded-full blur-2xl animate-pulse-slow delay-700"
        style={{ backgroundColor: `${COLORS.red}/20` }}
      ></div>

      {/* 🔹 Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-6 sm:px-12 lg:px-24 max-w-5xl"
      >
        <h2
          className="text-sm sm:text-base uppercase tracking-[6px] mb-4 font-accent"
          style={{ color: COLORS.red }}
        >
          Our Premium Gallery
        </h2>

        <h1
          className="text-4xl sm:text-5xl lg:text-5xl font-heading font-extrabold leading-tight"
          style={{ color: COLORS.white }}
        >
          Explore the{" "}
          <span style={{ color: COLORS.red }}>Art of Professional Relocation</span>
        </h1>

        <p
          className="mt-6 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto font-modern"
          style={{ color: COLORS.cream }}
        >
          Experience the <span className="font-accent">{`reliability and precision`}</span> 
          of our relocation services. Each move we handle demonstrates{" "}
          <span className="font-bold" style={{ color: COLORS.red }}>
            safety, trust
          </span>{" "}and{" "}
          <span className="font-bold" style={{ color: COLORS.white }}>
            professionalism
          </span>.
        </p>

        {/* 🔹 CTA Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-6">
          <motion.a
            href="/contact"
            whileHover={{
              scale: 1.05,
              boxShadow: `0 0 25px rgba(198,40,40,0.6)`,
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full bg-red-600 text-white font-modern font-semibold tracking-wide shadow-lg transition-all duration-300"
          >
            Book a Move
          </motion.a>

          <motion.a
            href="/services"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(255,255,255,0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full border border-red-600 text-red-600 font-modern font-semibold tracking-wide shadow-md transition-all duration-300"
          >
            View Services
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
