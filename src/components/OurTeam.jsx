// src/components/OurTeamSouthIndia.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaUserCircle } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const colors = {
  red: "#C62828",
  blue: "#1D4ED8",
  white: "#FFFFFF",
  cream: "#F7F5EE",
};

const teamMembers = [
  {
    name: "Devendra Kapoor",
    role: "Head of Operations",
    linkedin: "#",
  },
  {
    name: "Mohan Pal",
    role: "Director of Client Relations",
    linkedin: "#",
  },
  {
    name: "Pooja Srivastav",
    role: "Finance & Coordination Lead",
    linkedin: "#",
  },
  {
    name: "Rajendra Kumar",
    role: "Logistics and Field Supervisor",
    linkedin: "#",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const floatAnimation = {
  animate: { y: [0, -8, 0] },
  transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
};

export default function OurTeamSouthIndia() {
  return (
    <section
      className="py-20 px-6 md:px-20 relative overflow-hidden"
      style={{
        backgroundColor: colors.cream,
        fontFamily: "'Italiana', 'Zen Dots', 'Orbitron', sans-serif",
      }}
    >
      {/* Background Glow Effects */}
      <div className="absolute top-20 right-10 w-80 h-80 bg-blue-700/20 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-red-600/20 blur-3xl rounded-full animate-pulse"></div>

      {/* Section Heading */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="relative z-10 text-center mb-14"
      >
        <motion.h4
          variants={itemVariants}
          className="uppercase tracking-widest text-sm md:text-base mb-3"
          style={{ color: colors.blue, letterSpacing: "3px" }}
        >
          Our Dedicated Experts
        </motion.h4>

        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-6xl font-bold mb-6"
          style={{ color: colors.red, fontFamily: "'Zen Dots', sans-serif" }}
        >
          Meet Our Team
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="max-w-3xl mx-auto text-lg text-gray-800 leading-relaxed"
        >
          The South India Packers & Movers team brings decades of experience,
          precision, and dedication — ensuring every relocation is handled with
          care, safety, and professionalism.
        </motion.p>
      </motion.div>

      {/* Mobile Slider */}
      <div className="md:hidden relative z-10">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          loop
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          modules={[Autoplay]}
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <ProfileCard member={member} colors={colors} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:flex flex-wrap justify-center gap-12 relative z-10">
        {teamMembers.map((member, index) => (
          <ProfileCard key={index} member={member} colors={colors} />
        ))}
      </div>
    </section>
  );
}

function ProfileCard({ member, colors }) {
  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.3 },
      }}
      className="flex flex-col items-center p-6 bg-white rounded-3xl shadow-xl hover:shadow-[0_10px_40px_rgba(0,0,0,0.2)] border border-blue-700/30 relative transition-all duration-500"
    >
      <motion.div
        {...floatAnimation}
        className="w-36 h-36 rounded-full flex items-center justify-center bg-gray-100 border-[5px] border-[#C62828] shadow-lg mb-4"
      >
        <FaUserCircle size={100} color={colors.red} />
      </motion.div>

      <h4
        className="font-semibold text-2xl mb-1"
        style={{
          color: colors.blue,
          fontFamily: "'Orbitron', sans-serif",
        }}
      >
        {member.name}
      </h4>

      <p
        className="text-base font-light mb-3"
        style={{ color: colors.red, fontFamily: "'Italiana', serif" }}
      >
        {member.role}
      </p>

      <div className="flex justify-center gap-3">
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:text-red-600 transition duration-300"
        >
          <FaLinkedin size={22} />
        </a>
      </div>
    </motion.div>
  );
}
