// src/components/ServicesHero.jsx
import React from "react";
import servicesBg from "../assets/home/mooov.jpeg"; // Replace with your background
import { Link } from "react-router-dom";

export default function ServicesHero() {
  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden font-[Orbitron]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 -z-10">
        <img
          src={servicesBg}
          alt="South India Packers Services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/70"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 sm:px-12 lg:px-24 max-w-5xl">
        <h4 className="text-sm sm:text-lg uppercase tracking-widest mb-3 font-[Zen_Dots] text-[#F7F5EE]">
          South India Packers
        </h4>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-[Italiana] text-white font-bold leading-tight mb-6">
          Premium <span className="text-red-700">Relocation</span> & <span className="text-blue-700">Logistics</span> Services
        </h1>

        <p className="text-[#F7F5EE] text-base sm:text-lg leading-relaxed max-w-3xl mx-auto mb-10">
          We provide safe, professional, and reliable moving solutions across South India.  
          From packing to relocation, every service is handled with <span className="text-red-700 font-semibold">care</span>,  
          <span className="text-blue-700 font-semibold"> speed</span>, and  
          <span className="text-red-700 font-semibold"> security</span>.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
        
          <Link
            to="/contact"
            className="px-8 py-3 rounded-full bg-white text-blue-700 font-semibold hover:bg-red-700 hover:text-white shadow-lg transition-all duration-300"
          >
            Get a Quote
          </Link>
        </div>
      </div>

      {/* Decorative glowing circles */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-blue-700/20 rounded-full blur-3xl animate-[floatGlow_6s_infinite_ease-in-out]"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-red-700/25 rounded-full blur-3xl animate-[floatGlow_6s_infinite_ease-in-out]"></div>

      <style>
        {`
          @keyframes floatGlow {
            0%, 100% { transform: translateY(0) scale(1); opacity: 0.7; }
            50% { transform: translateY(-15px) scale(1.1); opacity: 1; }
          }
        `}
      </style>
    </section>
  );
}
