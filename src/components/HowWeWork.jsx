// src/components/HowWeWork.jsx
import React from "react";
import { motion } from "framer-motion";

const colors = {
  primary: "#FF0000",    // Red
  secondary: "#1D4ED8",  // Blue
  neutral: "#F7F5EE",    // Light background
  white: "#FFFFFF",
};

export default function HowWeWork() {
  const steps = [
    {
      title: "CONSULTATION",
      desc: "We start by understanding your moving needs, schedule, and location to plan a seamless relocation strategy.",
    },
    {
      title: "PACKING",
      desc: "Our expert team carefully packs your belongings using high-quality materials ensuring maximum protection.",
    },
    {
      title: "TRANSPORTATION",
      desc: "Your goods are safely transported with real-time tracking and dedicated logistics support across South India.",
    },
    {
      title: "DELIVERY & UNPACKING",
      desc: "We deliver on time and help unpack and arrange everything to ensure a stress-free moving experience.",
    },
  ];

  return (
    <section
      className="relative py-8 px-6 md:px-12 lg:px-20 overflow-hidden"
      style={{
        background: `linear-gradient(to bottom right, ${colors.neutral}, #ffffff)`,
      }}
    >
      {/* Optional Subtle Grid BG */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative text-center mb-10 z-10"
      >
        <p
          className="uppercase tracking-wider text-lg md:text-xl font-semibold"
          style={{ color: colors.secondary, fontFamily: "'Orbitron', sans-serif" }}
        >
          South India Packers
        </p>
        <h2
          className="text-4xl md:text-5xl font-bold mt-3"
          style={{ color: colors.primary, fontFamily: "'Italiana', serif" }}
        >
          How We Work
        </h2>
        <p
          className="mt-4 max-w-2xl mx-auto text-gray-700 text-base md:text-lg"
          style={{ fontFamily: "'Zen Dots', cursive" }}
        >
          Delivering a smooth, stress-free moving experience — with precision, care, and expertise at every step.
        </p>
      </motion.div>

      {/* Steps Timeline */}
      <div className="relative mt-12 z-10">
        {/* Connecting Line */}
        <div className="hidden lg:block absolute top-[70px] left-0 right-0 h-[2px] bg-gradient-to-r from-[#FF0000] via-[#1D4ED8] to-[#FF0000]"></div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center relative">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="relative group"
            >
              {/* Dot */}
              <div className="w-4 h-4 rounded-full bg-gradient-to-r from-[#FF0000] to-[#1D4ED8] mx-auto mb-6 shadow-lg shadow-[#FF0000]/30"></div>

              {/* Step Number */}
              <div
                className="absolute -top-10 left-1/2 transform -translate-x-1/2 text-7xl font-bold opacity-10 select-none"
                style={{ color: colors.secondary, fontFamily: "'Italiana', serif" }}
              >
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Title */}
              <h3
                className="text-xl font-semibold mb-3"
                style={{ color: colors.primary, fontFamily: "'Italiana', serif" }}
              >
                {step.title}
              </h3>

              {/* Description */}
              <p
                className="text-gray-800 leading-relaxed text-sm md:text-base"
                style={{ fontFamily: "'Zen Dots', cursive" }}
              >
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Circles */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-[#FF0000]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-52 h-52 bg-[#1D4ED8]/10 rounded-full blur-3xl"></div>
    </section>
  );
}
