// src/pages/ContactSouthIndia.jsx
import React from "react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
// import MapSection from "../components/MapSection";
import ContactHero from "../components/ContactHero"



const services = [
  { title: "Relocation Services", },
  { title: "Packing Services", },
  { title: "Moving Services", },
  { title: "Transport Services",},
  { title: "Cargo Services",  },
  { title: "Commercial Moving",  },
];

const colors = {
  red: "#C62828",
  blue: "#1D4ED8",
  cream: "#F7F5EE",
  white: "#FFFFFF",
};

const ContactSouthIndia = () => {
  return (
    <>
    <ContactHero/>
      {/* Contact Section */}
      <section
        className="w-full min-h-screen flex flex-col lg:flex-row bg-cream text-[#1C1C1C] mt-1"
        style={{ fontFamily: "'Italiana', 'Zen Dots', 'Orbitron', sans-serif" }}
      >
        {/* Left Panel: Info */}
        <div className="w-full lg:w-1/2 bg-[#F7F5EE] px-10 py-16 shadow-2xl flex flex-col justify-center">
          <h2
            className="text-5xl font-bold mb-6 pb-3 inline-block border-b-4"
            style={{
              borderColor: colors.red,
              color: colors.blue,
            }}
          >
            Let’s Connect
          </h2>
          <p className="text-lg mb-5 font-light leading-relaxed text-[#1C1C1C]">
            At <span style={{ color: colors.red, fontWeight: "600" }}>South India Packers</span>, we deliver
            <span style={{ color: colors.blue, fontWeight: "600" }}> safe</span>, 
            <span style={{ color: colors.red, fontWeight: "600" }}> reliable</span> and 
            <span style={{ color: colors.blue, fontWeight: "600" }}> efficient</span> relocation services. Reach out to us today!
          </p>

          <div className="space-y-6 text-base">
            {/* Phones */}
            <div className="flex font-bold items-start gap-3">
              <FaPhoneAlt size={22} style={{ color: colors.red }} />
              <div>
                <p>+91 9555011308</p>
                <p>+91 9555611308</p>
                <p>+91 9310811307</p>
              </div>
            </div>

            {/* Emails */}
            <div className="flex font-bold items-start gap-3">
              <FaEnvelope size={22} style={{ color: colors.red }} />
              <div>
                <p>southindiapackers0@gmail.com</p>
                <p>care.southindiapackers@gmail.com</p>
                <p>southindialogosticpackers@rediffmail.com</p>
              </div>
            </div>

            {/* Addresses */}
            <div className="flex font-bold items-start gap-3">
              <FaMapMarkerAlt size={22} style={{ color: colors.red }} />
              <div className="leading-relaxed">
                <p>Plot Add: 2971/3, Gali No. 3, Near Banke Bihari Temple, D B Gupta Road, Paharganj, New Delhi - 110055</p>
                <p>Shop No. 7, Qila Road, Near Bus Stand, Hanumangarh Town - 335513</p>
                <p>Office Shop no-422 Near AJ Mart Bhartal Road Sec 26 Dwarka, Delhi 110061</p>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="mt-8 flex space-x-5 text-2xl">
            {[FaLinkedinIn, FaInstagram, FaFacebookF, FaYoutube].map((Icon, i) => (
              <Icon
                key={i}
                className="hover:scale-110 transition transform duration-300 cursor-pointer"
                style={{ color: colors.blue }}
              />
            ))}
          </div>
        </div>

        {/* Right Panel: Form */}
        <div className="w-full lg:w-1/2 relative flex items-center justify-center shadow-2xl">
          <div className="absolute inset-0 bg-black/10" />

          <form
            action="https://formsubmit.co/southindiapackers0@gmail.com"
            method="POST"
            className="relative z-10 w-full max-w-lg px-8 py-12"
          >
            <h3
              className="text-2xl font-bold mb-6 border-b-2 inline-block font-bold"
              style={{
                borderColor: colors.red,
                color: colors.red,
              }}
            >
              Get in Touch
            </h3>

            <div className="grid grid-cols-1 font-bold sm:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="bg-transparent border-b border-gray-400 text-[#1C1C1C] placeholder-gray-500 py-2 focus:border-red-600 outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="bg-transparent border-b border-gray-400 text-[#1C1C1C] placeholder-gray-500 py-2 focus:border-red-600 outline-none"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                required
                className="bg-transparent border-b border-gray-400 text-[#1C1C1C] placeholder-gray-500 py-2 focus:border-red-600 outline-none"
              />
              <input
                type="text"
                name="address"
                placeholder="Your Address"
                required
                className="bg-transparent border-b border-gray-400 text-[#1C1C1C] placeholder-gray-500 py-2 focus:border-red-600 outline-none"
              />

              <select
                name="service"
                required
                className="bg-transparent border-b border-gray-400 text-[#1C1C1C] py-2 focus:border-red-600 outline-none"
              >
                <option value="" disabled selected>
                  Select Service
                </option>
                {services.map((s, i) => (
                  <option key={i} value={s.slug}>
                    {s.title}
                  </option>
                ))}
              </select>

              <textarea
                name="message"
                placeholder="Your Message"
                required
                rows={4}
                className="col-span-full bg-transparent border-b border-gray-400 text-[#1C1C1C] placeholder-gray-500 py-2 focus:border-red-600 outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 cursor-pointer font-semibold rounded-full transition duration-300 shadow-lg hover:scale-105"
              style={{
                backgroundColor: colors.red,
                color: colors.white,
              }}
            >
              Send Message
            </button>

            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_next"
              value="https://www.southindiapackers.in/"
            />
          </form>
        </div>
      </section>

      {/* <MapSection /> */}
    </>
  );
};

export default ContactSouthIndia;
