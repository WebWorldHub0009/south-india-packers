// src/components/GallerySouthIndia.jsx
import React from "react";
import { motion } from "framer-motion";
import img1 from "../assets/gallery/1.jpg";
import img2 from "../assets/gallery/2.jpg";
import img3 from "../assets/gallery/3.jpg";
import img4 from "../assets/gallery/4.jpg";
import img5 from "../assets/gallery/5.jpg";
import img6 from "../assets/gallery/6.jpg";
import img8 from "../assets/gallery/8.jpg";
import img9 from "../assets/gallery/9.jpg";
import GalleryHero from "../components/GalleryHero"

// South India Packers Colors
const COLORS = {
  red: "#C62828",
  blue: "#1D4ED8",
  cream: "#F7F5EE",
  charcoal: "#1C1C1C",
  white: "#FFFFFF",
};

const galleryImages = [
  img1, img2, img3, img4, img5, img6, img8, img1, img9
];

const GallerySouthIndia = () => {
  return (
    <>
    <GalleryHero/>
    <div className="relative bg-gradient-to-br from-[#F7F5EE] to-[#FFFFFF] min-h-screen py-10 px-6 md:px-16 overflow-hidden">
      {/* Premium Decorative Background */}
      <div
        className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-20 animate-pulse-slow -z-10"
        style={{ backgroundColor: `${COLORS.red}` }}
      />
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-15 animate-pulse-slow -z-10"
        style={{ backgroundColor: `${COLORS.blue}` }}
      />
      <div
        className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full blur-2xl opacity-10 animate-pulse-slow -z-10"
        style={{ backgroundColor: `${COLORS.cream}` }}
      />

      {/* Top Section */}
      <div className="text-center mb-16 relative z-10">
        <h2
          className="text-4xl md:text-5xl font-heading font-extrabold"
          style={{ color: COLORS.charcoal }}
        >
          Discover <span style={{ color: COLORS.red }}>South India Packers</span>
        </h2>
        <p
          className="mt-4 text-lg text-[#1C1C1C]/80 max-w-2xl mx-auto font-modern"
        >
          Journey of Trust, Excellence & Dedication — <span className="font-accent text-red-600">“हम अपने वादे निभाते हैं”</span>
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {galleryImages.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl shadow-2xl group cursor-pointer border-2 border-red-50"
          >
            <img
              src={src}
              alt={`Gallery ${index + 1}`}
              loading="lazy"
              className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
            />
          
          </motion.div>
        ))}
      </div>
    </div>
    </>
  );
};

export default GallerySouthIndia;
