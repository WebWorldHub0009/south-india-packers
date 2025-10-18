// src/components/ServicesSection.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";

import relocation from "../assets/service/relocation.jpg";
import pack from "../assets/service/packing.jpg";
import move from "../assets/service/movea.jpg";
import car from "../assets/home/car.jpg";
import cargo from "../assets/home/cargoo.jpeg";
import commercial from "../assets/service/cmove.jpg";
import bgOverlay from "../assets/home/abg.jpg";

const services = [
  { title: "Relocation Services", slug: "relocation-services", image: relocation },
  { title: "Packing Services", slug: "packing-services", image: pack },
  { title: "Moving Services", slug: "moving-services", image: move },
  { title: "Transport Services", slug: "transport-services", image: car },
  { title: "Cargo Services", slug: "cargo-services", image: cargo },
  { title: "Commercial Moving", slug: "commercial-moving", image: commercial },
];

export default function ServicesSection() {
  return (
    <section
      className="relative font-[Poppins] py-8 overflow-hidden"
      style={{
        backgroundImage: `url(${bgOverlay})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Section Heading */}
      <div className="relative z-10 mx-auto px-6 text-center mb-8">
        <h2 className="font-Italiana text-5xl md:text-6xl text-blue-700 tracking-wide drop-shadow-lg">
          Our Premium <span className="text-red-800">Services</span>
        </h2>
        <p className="mt-4 font-[Orbitron] text-gray-100 max-w-xl mx-auto text-lg">
          At <span className="text-red-800 font-semibold">South India Packers</span>,
          we provide safe, professional, and reliable moving solutions across South India.
          From packing to relocation, we handle everything with care and precision.
        </p>
      </div>

      {/* Swiper Slider */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <Link to={`/services/${service.slug}`}>
                <div className="relative rounded-2xl overflow-hidden group shadow-2xl bg-black/30 border border-[#FFD700]/30">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy" // ✅ Added lazy loading
                    className="w-full h-[420px] object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent group-hover:via-black/80 transition-all duration-500"></div>

                  <div className="absolute top-6 left-6 font-Italiana text-white text-7xl opacity-15">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="absolute bottom-8 left-8 right-8">
                    <h3 className="font-Italiana text-2xl md:text-3xl text-white drop-shadow-lg">
                      {service.title}
                    </h3>
                    <p className="font-[Orbitron] text-sm text-gray-300 mt-2 opacity-90">
                      Reliable, fast & professional {service.title.toLowerCase()} for all your needs.
                    </p>
                    <button className="mt-4 px-5 py-1 bg-[#FFD700] text-black font-semibold rounded-xl shadow-md hover:bg-yellow-400 transition-all">
                      Explore More
                    </button>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Decorative glowing circles */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-yellow-500/20 rounded-full blur-3xl animate-[floatGlow_6s_infinite_ease-in-out]"></div>
      <div className="absolute bottom-10 right-10 w-52 h-52 bg-[#FFD700]/20 rounded-full blur-3xl animate-[floatGlow_6s_infinite_ease-in-out]"></div>

      <style>
        {`
          @keyframes floatGlow {
            0%, 100% { transform: translateY(0) scale(1); opacity: 0.6; }
            50% { transform: translateY(-12px) scale(1.1); opacity: 1; }
          }
        `}
      </style>
    </section>
  );
}
