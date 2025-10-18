// src/components/CertificatesHeroSouthIndia.jsx
import React from "react";
import { motion } from "framer-motion";
import heroBg from "../assets/hero/truck1.jpg"; // Replace with your hero background

// South India Packers Colors
const COLORS = {
  red: "#C62828",
  blue: "#1D4ED8",
  cream: "#F7F5EE",
  charcoal: "#1C1C1C",
  white: "#FFFFFF",
};

export default function CertificatesHeroSouthIndia() {
  return (
    <section
      className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70 z-0" />

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-6 sm:px-12 max-w-3xl"
      >
        {/* Small Heading */}
        <motion.h4
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg sm:text-xl font-semibold uppercase tracking-wider mb-3 font-accent"
          style={{ color: COLORS.red }}
        >
          Our Achievements
        </motion.h4>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold mb-6"
          style={{ color: COLORS.white }}
        >
          Certified Excellence
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-lg sm:text-xl md:text-2xl text-center max-w-2xl mx-auto font-modern"
          style={{ color: COLORS.cream }}
        >
          At South India Packers, every move is backed by recognized certifications
          ensuring our commitment to safe, reliable, and professional relocation services.
        </motion.p>
      </motion.div>
    </section>
  );
}
