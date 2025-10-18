// src/components/TestimonialSliderSouthIndia.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const colors = {
  red: "#C62828",
  blue: "#1D4ED8",
  white: "#FFFFFF",
  cream: "#F7F5EE",
};

const testimonials = [
  { name: "Ravi Kumar", title: "Client, Bangalore", text: "South India Packers handled my entire house relocation flawlessly. Professional, careful, and punctual service!" },
  { name: "Meena Nair", title: "Business Owner, Chennai", text: "Their packing quality and staff behavior are top-notch. My office items arrived safely without a scratch!" },
  { name: "Arjun Singh", title: "Engineer, Hyderabad", text: "Affordable yet premium service. Every box was well labeled and delivered right on time." },
  { name: "Divya Sharma", title: "Teacher, Coimbatore", text: "Super impressed by the smooth process and professional team. Best packers I’ve hired!" },
  { name: "Rahul Das", title: "Homeowner, Kochi", text: "The team was polite and efficient. They took great care of fragile items. Highly recommend!" },
  { name: "Sneha Iyer", title: "Architect, Mysore", text: "The most reliable movers I’ve used! Excellent communication and hassle-free relocation experience." },
];

export default function TestimonialSliderSouthIndia() {
  return (
    <section
      className="relative w-full py-10 px-6 md:px-10 overflow-hidden"
      style={{ backgroundColor: colors.cream, fontFamily: "'Italiana', 'Zen Dots', 'Orbitron', sans-serif" }}
    >
      {/* Glowing Background Circles */}
      <div className="absolute top-10 right-20 w-72 h-72 bg-blue-700/20 blur-3xl rounded-full animate-pulse" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-red-600/20 blur-3xl rounded-full animate-pulse" />

      {/* Heading */}
      <div className="relative max-w-6xl mx-auto text-center mb-12 z-10">
        <h2
          className="text-4xl md:text-5xl font-bold mb-3 tracking-wide"
          style={{ color: colors.blue, fontFamily: "'Zen Dots', sans-serif" }}
        >
          What Our{" "}
          <span style={{ color: colors.red, fontFamily: "'Italiana', serif" }}>
            Clients Say
          </span>
        </h2>
        <p
          className="mt-4 text-lg md:text-xl italic font-light max-w-3xl mx-auto"
          style={{ color: "#333" }}
        >
          “Trusted by thousands across South India for safe, on-time, and stress-free relocations.”
        </p>
      </div>

      {/* Swiper Testimonials */}
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        spaceBetween={40}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-6xl mx-auto relative z-10"
      >
        {testimonials.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="relative backdrop-blur-md p-10 rounded-3xl border hover:-translate-y-3 transition-all duration-500 shadow-lg hover:shadow-[0_10px_40px_rgba(0,0,0,0.2)]"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.85)",
                borderColor: colors.red,
              }}
            >
              {/* Badge */}
              <span
                className="absolute -top-5 right-5 text-xs font-semibold px-4 py-1 rounded-full shadow-md"
                style={{
                  backgroundColor: colors.blue,
                  color: colors.white,
                }}
              >
                ★ Verified Client
              </span>

              {/* Quote Icon */}
              <div
                className="flex justify-center items-center mb-6"
                style={{ color: colors.red }}
              >
                <FaQuoteLeft className="text-5xl opacity-70" />
              </div>

              {/* Testimonial Text */}
              <p
                className="text-lg italic leading-relaxed mb-6 text-center"
                style={{ color: "#222" }}
              >
                {item.text}
              </p>

              {/* Author */}
              <div className="text-center">
                <p
                  className="font-bold text-xl"
                  style={{
                    color: colors.blue,
                    fontFamily: "'Orbitron', sans-serif",
                  }}
                >
                  {item.name}
                </p>
                <p
                  className="text-sm font-light"
                  style={{ color: colors.red, opacity: 0.85 }}
                >
                  {item.title}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Decorative Wave Bottom */}
      <svg
        className="absolute bottom-0 left-0 w-full opacity-25"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill={colors.blue}
          fillOpacity="1"
          d="M0,288L60,272C120,256,240,224,360,197.3C480,171,600,149,720,154.7C840,160,960,192,1080,208C1200,224,1320,224,1380,224L1440,224V320H0Z"
        ></path>
      </svg>
    </section>
  );
}
