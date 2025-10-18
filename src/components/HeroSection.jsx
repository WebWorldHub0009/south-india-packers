import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowDown, FaFacebookF, FaLinkedinIn, FaInstagram, FaTruck, FaBoxOpen, FaClock } from "react-icons/fa";
import img1 from "../assets/hero/1.jpg";
import img2 from "../assets/hero/2.jpg";
import img3 from "../assets/hero/3.jpg";

const slides = [
  {
    title: "South India Packers",
    subtitle: "Efficient, Safe & Reliable",
    tagline: "Your trusted logistics partner",
    image: img1,
  },
  {
    title: "Professional Packing",
    subtitle: "Careful Handling & Timely Delivery",
    tagline: "We treat your goods like our own",
    image: img2,
  },
  {
    title: "Modern Moving Solutions",
    subtitle: "Stress-Free Relocation",
    tagline: "Experience moving, redefined",
    image: img3,
  },
];

const colors = {
  primary: "#FF0000",   // Red
  secondary: "#1D4ED8", // Blue-700
  text: "#FFFFFF",      // White
  neutral: "#F7F5EE",   // Soft background
};

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden" style={{ backgroundColor: colors.neutral }}>
      {/* Background Slider */}
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-[4000ms]"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          {/* Floating gradient circle */}
          <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full bg-red-500/20 blur-3xl animate-pulse-slow"></div>
          <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-blue-700/20 blur-3xl animate-pulse-slow"></div>
        </motion.div>
      ))}

      {/* Center Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 z-10">
        <motion.h1
          key={slides[current].title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl md:text-7xl tracking-wide"
          style={{ fontFamily: "'Italiana', serif", color: colors.primary }}
        >
          {slides[current].title}
        </motion.h1>

        {/* Primary Line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "120px" }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-[3px] mt-4 rounded-full"
          style={{ backgroundColor: colors.primary }}
        ></motion.div>

        <motion.h2
          key={slides[current].subtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-4 text-lg sm:text-xl md:text-2xl tracking-wide"
          style={{ fontFamily: "'Orbitron', sans-serif", color: colors.text }}
        >
          {slides[current].subtitle}
        </motion.h2>

        <motion.p
          key={slides[current].tagline}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="mt-4 px-6 py-3 rounded-xl shadow-lg text-xl italic max-w-2xl"
          style={{
            fontFamily: "'Zen Dots', cursive",
            color: colors.secondary,
            backgroundColor: "rgba(255,255,255,0.2)",
          }}
        >
          {slides[current].tagline}
        </motion.p>

        {/* Mini Service Highlights */}
        <motion.div
          className="mt-6 flex flex-wrap justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          <div className="flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full shadow-lg">
            <FaTruck size={20} style={{ color: colors.primary }} />
            <span className="text-white font-medium" style={{ fontFamily: "'Orbitron', sans-serif" }}>Fast Delivery</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full shadow-lg">
            <FaBoxOpen size={20} style={{ color: colors.primary }} />
            <span className="text-white font-medium" style={{ fontFamily: "'Orbitron', sans-serif" }}>Secure Packing</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full shadow-lg">
            <FaClock size={20} style={{ color: colors.primary }} />
            <span className="text-white font-medium" style={{ fontFamily: "'Orbitron', sans-serif" }}>Timely Service</span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8 }}
          className="mt-8 flex gap-4"
        >
          <a
            href="/services"
            className="px-6 sm:px-8 py-3 sm:py-3 cursor-pointer rounded-full text-sm font-medium tracking-wide transition-all"
            style={{
              border: `2px solid ${colors.primary}`,
              color: colors.primary,
              fontFamily: "'Orbitron', sans-serif",
            }}
          >
            Explore Services
          </a>
          <a
            href="/contact"
            className="px-6 sm:px-8 py-3 sm:py-3 cursor-pointer rounded-full text-sm font-medium tracking-wide transition-all"
            style={{
              backgroundColor: colors.primary,
              color: colors.text,
              fontFamily: "'Orbitron', sans-serif",
            }}
          >
            Get Consultation
          </a>
        </motion.div>

        {/* Scroll Cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-4 flex flex-col items-center"
          style={{ color: colors.primary }}
        >
          <FaArrowDown size={18} />
          <span className="text-xs mt-1" style={{ color: colors.text }}>Scroll</span>
        </motion.div>
      </div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute right-4 sm:right-8 top-1/2 transform -translate-y-1/2 flex flex-col items-center gap-4"
        style={{ color: colors.primary }}
      >
        <motion.div
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ repeat: Infinity, duration: 6 }}
          className="rotate-90 tracking-widest text-sm mb-8"
          style={{ fontFamily: "'Zen Dots', cursive", color: colors.text }}
        >
          South India Packers
        </motion.div>
        <div className="w-px h-20 mb-4" style={{ backgroundColor: `${colors.primary}40` }}></div>
        <div className="flex flex-col gap-3">
          <a href="#"><FaFacebookF size={18} className="hover:text-white transition" /></a>
          <a href="#"><FaInstagram size={18} className="hover:text-white transition" /></a>
          <a href="#"><FaLinkedinIn size={18} className="hover:text-white transition" /></a>
        </div>
      </motion.div>
    </section>
  );
}
