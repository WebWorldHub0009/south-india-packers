import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroBg from "../assets/images/main/abg.jpg";
import { FaCouch, FaPalette, FaRegGem } from "react-icons/fa";

// 🎨 ANS Interiors Color Palette
const colors = {
  gold: "#C5A46D",
  darkGray: "#2C2C2C",
  lightGray: "#F5F5F5",
  white: "#FFFFFF",
};

export default function ProductHero() {
  return (
    <section
      className="relative w-full h-screen md:h-[85vh] flex items-center justify-center text-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* ✨ Premium Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#000000]/90 via-[#2C2C2C]/60 to-transparent z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#000000]/60 via-transparent to-transparent z-0"></div>

      {/* 🌟 Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col items-center justify-center px-6 sm:px-10 md:px-16 text-center max-w-4xl"
      >
        {/* 🔹 Icon Trio (Subtle Animated Accent) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex gap-8 text-4xl mb-6 text-[#C5A46D]"
        >
          <FaCouch className="hover:scale-125 transition-all duration-500" />
          <FaPalette className="hover:scale-125 transition-all duration-500" />
          <FaRegGem className="hover:scale-125 transition-all duration-500" />
        </motion.div>

        {/* 💫 Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-5xl sm:text-6xl md:text-7xl font-[Playfair_Display] font-bold mb-4 leading-tight"
          style={{
            color: colors.gold,
            
          }}
        >
          ANS Interiors
        </motion.h1>

        {/* ✨ Subtitle */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-2xl sm:text-2xl font-[Poppins] italic mb-6 tracking-wide text-[#F5F5F5]"
        >
          Redefining Luxury & Lifestyle in Every Corner
        </motion.h3>

        {/* 🪶 Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-lg md:text-xl font-[Poppins] leading-relaxed mb-10 max-w-3xl text-[#F5F5F5]/90"
        >
          Experience a world where{" "}
          <span className="text-[#C5A46D] font-semibold">creativity</span>{" "}
          meets{" "}
          <span className="text-[#C5A46D] font-semibold">craftsmanship</span>.
          From bespoke interiors to timeless decor, every project by{" "}
          <span className="text-[#C5A46D] font-semibold">ANS Interiors</span>{" "}
          embodies sophistication, precision, and luxury.
        </motion.p>

        {/* 🎯 CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
        >
          <Link
            to="/contact"
            className="px-10 py-3 rounded-full text-lg font-[Poppins] font-semibold transition-all duration-300 hover:scale-105"
            style={{
              background: `linear-gradient(90deg, ${colors.gold}, ${colors.lightGray})`,
              color: colors.darkGray,
              
            }}
          >
            Book a Consultation
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
