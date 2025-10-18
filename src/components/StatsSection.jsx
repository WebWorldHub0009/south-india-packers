// src/components/StatsSection.jsx
import React, { useEffect, useState } from "react";
import bgImage from "../assets/hero/3.jpg"; // ✅ Change background if needed

const colors = {
  red: "#DC2626", // primary red
  blue: "#1D4ED8", // blue-700
  cream: "#F7F5EE", // soft background
  white: "#FFFFFF",
};

const statsData = [
  { number: 98, label: "On-Time Deliveries" },
  { number: 95, label: "Happy Customers" },
  { number: 92, label: "Safe Relocations" },
  { number: 89, label: "Corporate Clients" },
  { number: 99, label: "Service Reliability" },
];

const StatsSection = () => {
  const [inView, setInView] = useState(false);
  const [visibleNumbers, setVisibleNumbers] = useState(statsData.map(() => 0));

  useEffect(() => {
    const timer = setTimeout(() => setInView(true), 600);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (inView) {
      statsData.forEach((stat, i) => {
        let start = 0;
        const increment = setInterval(() => {
          start += 1;
          setVisibleNumbers((prev) => {
            const newArr = [...prev];
            newArr[i] = start;
            return newArr;
          });
          if (start >= stat.number) clearInterval(increment);
        }, 20);
      });
    }
  }, [inView]);

  return (
    <section
      className="relative w-full py-20 flex flex-col items-center justify-center text-center overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      <div className="relative z-10 w-full px-6 max-w-6xl">
        {/* Heading */}
        <h2
          className="text-4xl md:text-5xl lg:text-6xl font-[Italiana] text-white font-bold mb-6"
          style={{ textShadow: "0 0 10px rgba(255,255,255,0.15)" }}
        >
          Our <span className="text-red-700">Commitment</span> to Excellence
        </h2>

        <p
          className="text-[#F7F5EE] max-w-3xl mx-auto text-lg md:text-xl mb-16 font-[Orbitron]"
          style={{ letterSpacing: "0.5px" }}
        >
          At <span className="text-red-700 font-semibold">South India Packers</span>, 
          we take pride in offering trusted, efficient, and safe relocation services 
          across South India — backed by our consistent performance and reliability.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          {statsData.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative w-36 h-36 flex items-center justify-center">
                <svg className="absolute w-36 h-36 rotate-[-90deg]">
                  <circle
                    cx="50%"
                    cy="50%"
                    r="55"
                    stroke="#ffffff33"
                    strokeWidth="10"
                    fill="none"
                  />
                  <circle
                    cx="50%"
                    cy="50%"
                    r="55"
                    stroke={colors.red}
                    strokeWidth="10"
                    fill="none"
                    strokeDasharray="345"
                    strokeDashoffset={inView ? 345 - (345 * stat.number) / 100 : 345}
                    style={{
                      transition: "stroke-dashoffset 1.5s ease-in-out",
                      strokeLinecap: "round",
                    }}
                  />
                </svg>

                <span className="absolute text-3xl font-bold text-white font-[Orbitron]">
                  {visibleNumbers[index]}%
                </span>
              </div>

              <p
                className="mt-4 text-lg md:text-xl font-[Zen_Dots] text-[#F7F5EE]"
                style={{ letterSpacing: "0.5px" }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Description */}
        <p
          className="mt-16 text-[#F7F5EE] text-base md:text-lg font-[Orbitron] max-w-4xl mx-auto leading-relaxed"
        >
          Every successful move strengthens our promise — ensuring 
          <span className="text-red-700 font-semibold"> safety</span>, 
          <span className="text-blue-700 font-semibold"> punctuality</span>, 
          and <span className="text-red-700 font-semibold">trust</span> 
          with every delivery we make.
        </p>
      </div>

      {/* Decorative glowing circles */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-blue-700/20 rounded-full blur-3xl animate-[floatGlow_6s_infinite_ease-in-out]"></div>
      <div className="absolute bottom-10 right-10 w-52 h-52 bg-red-700/25 rounded-full blur-3xl animate-[floatGlow_6s_infinite_ease-in-out]"></div>

      <style>
        {`
          @keyframes floatGlow {
            0%, 100% { transform: translateY(0) scale(1); opacity: 0.6; }
            50% { transform: translateY(-15px) scale(1.1); opacity: 1; }
          }
        `}
      </style>
    </section>
  );
};

export default StatsSection;
