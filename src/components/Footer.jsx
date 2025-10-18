// src/components/FooterSouthIndiaPackers.jsx
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
  FaHome,
  FaInfoCircle,
  FaLayerGroup,
  FaTruckMoving,
  FaClipboardList,
  FaMapMarkedAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import VisitorCounter from "./VisitorCounter";
import Translator from "./Translator";
import footerBg from "../assets/hero/fbg.jpg"; // ✅ replace with real background image

const colors = {
  red: "#B91C1C", // Tailwind red-700
  blue: "#1E3A8A", // Tailwind blue-700
  cream: "#F7F5EE",
  white: "#FFFFFF",
};

const services = [
  { title: "Relocation Services", slug: "relocation-services", },
  { title: "Packing Services", slug: "packing-services", },
  { title: "Moving Services", slug: "moving-services",  },
  { title: "Transport Services", slug: "transport-services",  },
  { title: "Cargo Services", slug: "cargo-services",  },
  { title: "Commercial Moving", slug: "commercial-moving",  },
];

export default function FooterSouthIndiaPackers() {
  return (
    <footer
      className="relative pt-14 pb-2 px-6 md:px-16 overflow-hidden"
      style={{ fontFamily: "'Italiana', sans-serif" }}
    >
      {/* 🔹 Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${footerBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-black/30 z-0" />

      {/* 🔹 Content Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-white">
        {/* About Section */}
        <div>
          <h3
            className="text-4xl md:text-3xl font-bold tracking-wider"
            style={{ fontFamily: "'Orbitron', sans-serif", color: colors.cream }}
          >
            SOUTH INDIA PACKERS
          </h3>
          <p className="mt-3 text-sm text-gray-100 leading-relaxed">
            India’s trusted relocation partner delivering secure, fast, and professional packing & moving services across India with excellence and care.
          </p>

          {/* Social Icons */}
          <div className="mt-6 flex space-x-4">
            {[
              ["https://www.instagram.com", FaInstagram],
              ["https://www.facebook.com", FaFacebookF],
              ["https://api.whatsapp.com/send/?phone=919555011308&text=Hello%20South%20India%20Packers", FaWhatsapp],
            ].map(([url, Icon], i) => (
              <a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#B91C1C] text-white hover:text-white transition duration-300 shadow-lg"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          {/* Email CTA */}
          <div className="mt-4">
            <a
              href="mailto:southindiapackers0@gmail.com"
              className="inline-flex items-center gap-2 bg-[#B91C1C] text-white px-5 py-2 rounded-lg font-semibold hover:bg-[#DC2626] transition duration-300 shadow-md"
            >
              <FaEnvelope /> Mail Us
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4
            className="text-2xl font-semibold mb-3 tracking-wide"
            style={{ fontFamily: "'Zen Dots', sans-serif", color: colors.cream }}
          >
            Quick Links
          </h4>
          <ul className="space-y-3 text-sm">
            {[
              ["Home", "/", <FaHome />],
              ["About Us", "/about", <FaInfoCircle />],
              ["Services", "/services", <FaLayerGroup />],
              ["Contact", "/contact", <FaMapMarkedAlt />],
              ["Certificates", "/certificates", <FaTruckMoving />],
              ["Privacy Policy", "/privacy", <FaClipboardList />],
            ].map(([text, link, icon], i) => (
              <li key={i}>
                <Link
                  to={link}
                  className="flex items-center gap-2 hover:text-[#B91C1C] transition duration-300"
                >
                  {icon} {text}
                </Link>
              </li>
            ))}
          </ul>

          {/* Emails */}
          <div className="mt-6">
            <h4
              className="text-2xl font-semibold mb-2"
              style={{ fontFamily: "'Zen Dots', sans-serif", color: colors.cream }}
            >
              Email
            </h4>
            <a href="mailto:southindiapackers0@gmail.com" className="block hover:text-[#B91C1C]">
              southindiapackers0@gmail.com
            </a>
            <a href="mailto:care.southindiapackers@gmail.com" className="block mt-1 hover:text-[#B91C1C]">
              care.southindiapackers@gmail.com
            </a>
            <a href="mailto:southindialogosticpackers@rediffmail.com" className="block mt-1 hover:text-[#B91C1C]">
              southindialogosticpackers@rediffmail.com
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4
            className="text-2xl font-semibold mb-4"
            style={{ fontFamily: "'Zen Dots', sans-serif", color: colors.cream }}
          >
            Services
          </h4>
             <ul className="space-y-3 text-sm">
      {services.map((service, i) => (
        <li key={i}>
          <Link
            to={`/services/${service.slug}`}
            className="hover:text-[#B91C1C] cursor-pointer transition duration-300"
          >
            {service.title}
          </Link>
        </li>
      ))}
    </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4
            className="text-2xl font-semibold mb-2"
            style={{ fontFamily: "'Zen Dots', sans-serif", color: colors.cream }}
          >
            Contact Info
          </h4>
          <address className="not-italic leading-relaxed mb-4 text-sm text-gray-100">
            <strong>Main Office:</strong> <br />
            Plot No. 2971/3, Gali No. 3, Near Banke Bihari Temple, <br />
            D B Gupta Road, Paharganj, New Delhi - 110055 <br /><br />
            <strong>Branch Office:</strong> <br />
            Shop No. 7, Qila Road, Near Bus Stand, Hanumangarh Town - 335513 <br /><br />
            <strong>Regional Office:</strong> <br />
            Shop No. 422, Near AJ Mart, Bhartal Road, Sec 26, Dwarka, Delhi - 110061
          </address>

          {["+91 9555011308", "+91 9555611308", "+91 9310811307"].map((num, i) => (
            <p key={i} className="text-sm mb-2 flex items-center gap-2 text-gray-100">
              <FaPhoneAlt style={{ color: colors.cream }} />
              <a href={`tel:${num}`} className="hover:text-[#B91C1C] transition duration-300">
                {num}
              </a>
            </p>
          ))}

          <div className="mt-4">
            <Translator />
          </div>
        </div>
      </div>

      {/* 🔹 Footer Bottom */}
      <div className="mt-5 text-center border-t border-white/10 pt-6 text-sm relative z-10 text-gray-200 space-y-2">
        <VisitorCounter />
        <p>© {new Date().getFullYear()} South India Packers. All Rights Reserved.</p>
        <p>
          Designed by{" "}
          <a
            href="https://webworldhub.co.in"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#B91C1C] hover:text-white transition duration-300"
          >
            Web World Hub
          </a>
        </p>
      </div>
    </footer>
  );
}
