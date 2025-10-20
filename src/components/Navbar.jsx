// src/components/ModernNavbar.jsx
import React, { useState, useRef, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaHome,
  FaCouch,
  FaInfoCircle,
  FaPhoneAlt,
  FaAward,
  FaWhatsapp,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/sipm.png"

// South India Packers Color Palette
const colors = {
  primary: "#800000",   // Deep Maroon
  text: "#FFFFFF",      // White
  neutral: "#F4F4F4",   // Light Gray
  highlight: "#1C1C1C", // Charcoal Black
};

// Navigation items
const navItems = [
  { name: "Home", path: "/", icon: <FaHome /> },
  { name: "About", path: "/about", icon: <FaInfoCircle /> },
  { name: "Services", path: "/services", icon: <FaCouch /> },
  { name: "Gallery", path: "/gallery", icon: <FaAward /> },
  { name: "Contact", path: "/contact", icon: <FaPhoneAlt /> },
];

// Social links
const socialLinks = {
  facebook: "https://www.facebook.com/",
  instagram: "https://www.instagram.com/",
  linkedin: "https://www.linkedin.com/",
};

const ModernNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const panelRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) document.addEventListener("mousedown", handleClickOutside);
    else document.removeEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <>
      {/* Top Info Bar */}
      <div
        className="hidden md:block"
        style={{
          background: colors.highlight,
          color: colors.text,
          fontFamily: "'Poppins', sans-serif",
          fontSize: "14px",
          borderBottom: `1px solid ${colors.primary}`,
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-4 py-2">
          <div className="flex flex-col md:flex-row md:items-center md:gap-6 gap-1">
            <p className="flex items-center gap-2">
              <MdEmail style={{ color: colors.primary }} />
              <a
                href="mailto:southindiapackers0@gmail.com"
                className="hover:text-[#800000] transition"
              >
                southindiapackers0@gmail.com
              </a>
            </p>
            <p className="flex items-center gap-2">
              <FaPhoneAlt style={{ color: colors.primary }} />
              <a href="tel:+919555611308" className="hover:text-[#800000] transition">
                +91 9555611308
              </a>
            </p>
            <p className="flex items-center gap-2">
              <FaPhoneAlt style={{ color: colors.primary }} />
              <a href="tel:+919310811307" className="hover:text-[#800000] transition">
                +91 9310811307
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav
        style={{
          backgroundColor: colors.text, // White
          color: colors.highlight,       // Charcoal Black
          zIndex: 50,
          boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
        }}
        className="w-full px-4 py-2 md:px-12 transition-shadow duration-300"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src={logo} // Add your South India Packers logo
              alt="South India Packers Logo"
              className="w-full h-14 md:h-14 object-contain"
            />
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex gap-3 text-sm uppercase">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "6px 10px",
                    cursor: "pointer",
                    fontFamily: "'Poppins', sans-serif",
                    color: pathname === item.path ? colors.primary : colors.highlight,
                    fontWeight: pathname === item.path ? "600" : "400",
                    transition: "all 0.3s ease",
                  }}
                >
                  {item.icon}
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Social Icons */}
          <div className="hidden md:flex items-center gap-3">
            {Object.entries(socialLinks).map(([k, url]) => {
              const Icon =
                k === "facebook"
                  ? FaFacebookF
                  : k === "instagram"
                  ? FaInstagram
                  : FaLinkedinIn;
              return (
                <a
                  key={k}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: "34px",
                    height: "34px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                    backgroundColor: colors.text,
                    color: colors.highlight,
                    border: `1px solid ${colors.primary}`,
                    transition: "all 0.3s ease",
                  }}
                  className="hover:bg-[#800000] hover:text-white"
                >
                  <Icon size={14} />
                </a>
              );
            })}
          </div>

          {/* Mobile Hamburger */}
          <div style={{ color: colors.highlight }} className="md:hidden">
            <FaBars onClick={toggleMenu} className="cursor-pointer text-2xl" />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-50 flex justify-end">
            <div
              ref={panelRef}
              style={{
                width: "75vw",
                maxWidth: "20rem",
                background: colors.text,
                color: colors.highlight,
                boxShadow: "-2px 0 12px rgba(0,0,0,0.25)",
              }}
              className="h-full px-6 py-4 flex flex-col transition-all duration-300"
            >
              {/* Mobile Header */}
              <div className="flex justify-between items-center">
                <Link to="/" className="flex items-center gap-2">
                  <img
                    src={logo} // Add logo
                    alt="South India Packers Logo"
                    className="w-full h-12 md:h-14 object-contain"
                  />
                </Link>
                <FaTimes
                  style={{ color: colors.highlight }}
                  className="text-xl cursor-pointer"
                  onClick={toggleMenu}
                />
              </div>

              <hr className="my-4 border-gray-300" />

              {/* Mobile Nav Links */}
              <nav className="flex flex-col gap-3 text-sm">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      color: pathname === item.path ? colors.primary : colors.highlight,
                      fontWeight: pathname === item.path ? "600" : "400",
                      fontFamily: "'Poppins', sans-serif",
                    }}
                    onClick={toggleMenu}
                  >
                    {item.icon}
                    {item.name}
                  </Link>
                ))}
              </nav>

              {/* WhatsApp Button */}
              <div className="mt-6">
                <a
                  href="https://wa.me/+919555611308"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: "100%",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    borderRadius: "9999px",
                    backgroundColor: colors.primary,
                    color: colors.text,
                    fontWeight: "600",
                    padding: "10px",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
                  }}
                  className="hover:opacity-90 transition"
                >
                  <FaWhatsapp /> WhatsApp Us
                </a>
              </div>
            </div>

            {/* Overlay */}
            <div
              className="flex-1"
              style={{
                background: "rgba(0,0,0,0.4)",
                backdropFilter: "blur(6px)",
              }}
              onClick={() => setIsMenuOpen(false)}
            />
          </div>
        )}
      </nav>
    </>
  );
};

export default ModernNavbar;
