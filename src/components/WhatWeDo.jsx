// src/components/WhyChooseUs.jsx
import React from "react";
import { FaShieldAlt, FaTruck, FaHandsHelping } from "react-icons/fa";

// Images
import transportImg from "../assets/home/car.jpg";
import packingImg from "../assets/home/pp.jpg";
import assistanceImg from "../assets/home/acb.jpg";

const colors = {
  primary: "#FF0000", // Red
  secondary: "#1D4ED8", // Blue-700
  neutral: "#F7F5EE", // Soft background
  white: "#FFFFFF",
};

const reasons = [
  {
    icon: <FaTruck size={28} />,
    title: "Reliable Transportation",
    desc: "Safe and timely delivery of your goods across South India, every single time.",
    img: transportImg,
  },
  {
    icon: <FaShieldAlt size={28} />,
    title: "Secure Packing",
    desc: "Professional packing ensures fragile and valuable items reach safely to your destination.",
    img: packingImg,
  },
  {
    icon: <FaHandsHelping size={28} />,
    title: "Expert Assistance",
    desc: "Experienced team providing end-to-end relocation solutions, tailored to your needs.",
    img: assistanceImg,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative py-6 px-6 md:px-12 lg:px-20 bg-[#F7F5EE] overflow-hidden">
      {/* Grid SVG Background */}
      <div className="absolute inset-0 z-0 opacity-10">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M40 0 L0 0 0 40"
                fill="none"
                stroke="#FF0000"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Top Heading */}
      <div className="relative z-10 text-center mb-6 transition-all duration-700">
        <p
          className="text-lg md:text-xl font-semibold uppercase tracking-wider"
          style={{
            fontFamily: "'Orbitron', sans-serif",
            color: colors.secondary,
          }}
        >
          South India Packers
        </p>
        <h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mt-4"
          style={{
            fontFamily: "'Italiana', serif",
            color: colors.primary,
          }}
        >
          Why Choose Us
        </h2>
        <p
          className="mt-4 text-[#2C2C2C] font-medium text-base md:text-lg"
          style={{ fontFamily: "'Zen Dots', cursive" }}
        >
          Trusted by families and businesses across South India for safe, reliable,
          and professional relocation services.
        </p>
      </div>

      {/* Reasons / Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {reasons.map((reason, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center p-6   transition-all duration-500 transform hover:-translate-y-2"
          >
            {/* Image */}
            <div className="w-full h-52 mb-4 rounded-lg overflow-hidden">
              <img
                src={reason.img}
                alt={reason.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Icon */}
            <div className="text-[#FF0000] mb-2 text-2xl">{reason.icon}</div>

            {/* Title */}
            <h3
              className="text-2xl font-bold mb-2"
              style={{
                fontFamily: "'Italiana', serif",
                color: colors.primary,
              }}
            >
              {reason.title}
            </h3>

            {/* Description */}
            <p
              className="text-[#2C2C2C] text-base md:text-sm"
              style={{
                fontFamily: "'Zen Dots', cursive",
              }}
            >
              {reason.desc}
            </p>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="flex justify-center mt-6 relative z-10">
        <a
          href="/contact"
          className="bg-[#FF0000] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#1D4ED8] transition-all duration-500 shadow-lg"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          Get Your Quote
        </a>
      </div>
    </section>
  );
};

export default WhyChooseUs;
