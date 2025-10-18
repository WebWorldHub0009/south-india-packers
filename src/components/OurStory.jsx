// src/components/OurStory.jsx
import React from "react";
// import imgLeft from "../assets/home/abav.jpg";
import imgRight from "../assets/home/about.jpg";
import { FaTruck, FaBoxOpen, FaClock } from "react-icons/fa";

const OurStory = () => {
  const stats = [
    {
      value: "10+",
      label: "Years of Expertise",
      desc: "Providing reliable logistics and packing services across South India.",
    },
    {
      value: "500+",
      label: "Clients Served",
      desc: "Families, businesses, and corporates trust us for safe relocation.",
    },
    {
      value: "1000+",
      label: "Projects Delivered",
      desc: "From household moves to large-scale corporate relocations.",
    },
  ];

  return (
    <section className="bg-[#F7F5EE] text-[#FFFFFF] px-6 md:px-12 lg:px-20 py-12">
      {/* Top Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Content */}
        <div className="flex flex-col justify-start space-y-5">
          <h2 className="text-3xl md:text-5xl leading-snug tracking-wide" style={{ fontFamily: "'Italiana', serif", color: "#FF0000" }}>
            Transforming Relocations into Seamless Experiences with{" "}
            <span className="bg-gradient-to-r from-[#FF0000] to-[#1D4ED8] bg-clip-text text-transparent font-semibold">
              South India Packers
            </span>
          </h2>

          <p className="text-[#1D4ED8] max-w-lg font-medium" style={{ fontFamily: "'Orbitron', sans-serif" }}>
            Since 2010, South India Packers has been the trusted name in professional packing and relocation. We combine safety, speed, and care to deliver exceptional moving experiences.
          </p>
          <p className="text-[#2C2C2C] max-w-lg   font-bold" >
            From careful household moves to corporate relocations, our services are tailored to ensure your goods reach safely and on time.
          </p>
          <p className="text-[#2C2C2C] max-w-lg font-bold" >
            Every relocation is handled with precision, ensuring a stress-free, smooth, and professional experience.
          </p>

          {/* Mini Service Highlights */}
          <div className="mt-3 flex flex-wrap gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-lg hover:shadow-2xl transition-all" style={{ color: "#FF0000" }}>
              <FaTruck size={20} />
              <span className="font-medium" style={{ fontFamily: "'Orbitron', sans-serif" }}>Fast Delivery</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-lg hover:shadow-2xl transition-all" style={{ color: "#FF0000" }}>
              <FaBoxOpen size={20} />
              <span className="font-medium" style={{ fontFamily: "'Orbitron', sans-serif" }}>Secure Packing</span>
            </div>
           
          </div>
        </div>

        {/* Right Large Image with Caption */}
        <div className="flex flex-col space-y-4">
          <div className="relative rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500">
            <img
              src={imgRight}
              alt="South India Packers Showcase"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
          <p className="text-sm italic text-[#1D4ED8] max-w-md font-medium" style={{ fontFamily: "'Zen Dots', cursive" }}>
            Ensuring each move is safe, reliable, and professional — South India Packers redefines relocation experiences.
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#FF0000]/40 mt-6"></div>

      {/* Bottom Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6 text-center">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="py-6 px-6 flex flex-col items-center rounded-xl bg-white shadow-lg hover:shadow-2xl transition-transform duration-500 transform hover:-translate-y-2"
          >
            <h3 className="text-4xl font-bold text-gradient bg-gradient-to-r from-[#FF0000] to-[#1D4ED8] bg-clip-text text-transparent" style={{ fontFamily: "'Italiana', serif" }}>
              {stat.value}
            </h3>
            <p className="mt-2 font-semibold text-[#1D4ED8]" style={{ fontFamily: "'Orbitron', sans-serif" }}>
              {stat.label}
            </p>
            <p className="mt-1 text-sm text-[#2C2C2C]" style={{ fontFamily: "'Zen Dots', cursive" }}>
              {stat.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurStory;
