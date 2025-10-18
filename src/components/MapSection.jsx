import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const colors = {
  gold: "#C5A46D",
  darkGray: "#2C2C2C",
  lightGray: "#F5F5F5",
  white: "#FFFFFF",
};

export default function MapSection() {
  return (
    <section className="relative w-full bg-gradient-to-br from-[#F5F5F5] to-[#EAEAEA] py-16 px-6 lg:px-20 overflow-hidden">
      {/* Decorative Gradient Shapes */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-[#C5A46D]/20 blur-3xl rounded-full animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-0 w-52 h-52 bg-[#2C2C2C]/20 blur-3xl rounded-full animate-pulse-slow"></div>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
        
        {/* Left Section - Contact Info */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h2
            className="text-5xl font-[Playfair_Display] font-semibold tracking-wide"
            style={{
              color: colors.darkGray,
              borderBottom: `3px solid ${colors.gold}`,
              display: "inline-block",
              paddingBottom: "10px",
            }}
          >
            Visit Us
          </h2>

          <p
            className="text-lg leading-relaxed font-[Poppins]"
            style={{ color: colors.darkGray }}
          >
            Experience the elegance of{" "}
            <span className="text-[#C5A46D] font-semibold">ANS Interior</span> — 
            where luxury meets creativity. Step into our showroom to explore 
            bespoke furniture, modern designs, and curated interiors that 
            redefine sophistication.
          </p>

        
        </div>

        {/* Right Section - Map */}
        <div className="w-full lg:w-1/2 relative h-[450px] rounded-3xl overflow-hidden shadow-[0_0_35px_rgba(0,0,0,0.1)] border border-[#C5A46D]/40 backdrop-blur-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.634500193535!2d77.25622299999999!3d28.5206424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce143a781fbcd%3A0xa61e961403bf0132!2sANS%20Interiors!5e0!3m2!1sen!2sin!4v1760619437786!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-3xl"
            title="ANS Interior Location"
          ></iframe>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/30 rounded-3xl pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}
