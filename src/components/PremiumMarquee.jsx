// src/components/PremiumMarquee.jsx
import React from "react";
// import { FaBed, FaCouch, FaUtensils, FaLayerGroup, FaPaintRoller, FaCurtains,  FaHouseDamage, FaCrosshairs } from "react-icons/fa";
import { FaBed, FaCouch, FaUtensils, FaLayerGroup, FaPaintRoller, FaChair, FaHome, FaCouch as FaFurniture } from "react-icons/fa";

const marqueeItems = [
  { icon: <FaBed className="text-2xl text-blue-400" />, text: "Bedroom Design" },
  { icon: <FaCouch className="text-2xl text-green-400" />, text: "Living Room Design" },
  { icon: <FaUtensils className="text-2xl text-yellow-400" />, text: "Luxury Kitchen" },
  { icon: <FaLayerGroup className="text-2xl text-purple-400" />, text: "False Ceiling / POP Ceiling" },
  { icon: <FaPaintRoller className="text-2xl text-pink-400" />, text: "Wallpaper Design" },
  { icon: <FaChair className="text-2xl text-indigo-400" />, text: "Premium Curtains" }, // Use Chair as Curtains icon
  { icon: <FaHome className="text-2xl text-red-400" />, text: "Smart Homes" },
  { icon: <FaFurniture className="text-2xl text-teal-400" />, text: "Custom Furniture" }, // Reuse Couch as Furniture
];


const PremiumMarquee = () => {
  return (
    <div className="w-full overflow-hidden bg-black text-white py-2 relative">
      <div className="flex whitespace-nowrap animate-marquee">
        {marqueeItems.concat(marqueeItems).map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-4 mx-10 text-md font-cursive1 hover:scale-110 transition-transform duration-300"
          >
            <span>{item.icon}</span>
            <span>{item.text}</span>
          </div>
        ))}
      </div>

      {/* Gradient fade effect on edges */}
      <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
      <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-black to-transparent pointer-events-none"></div>
    </div>
  );
};

export default PremiumMarquee;
