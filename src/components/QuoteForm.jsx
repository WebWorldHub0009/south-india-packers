// src/components/QuoteFormSouthIndia.jsx
import React from "react";
import { FaUser, FaEnvelope, FaMapMarkerAlt, FaTruck, FaCalendarAlt } from "react-icons/fa";

export default function QuoteFormSouthIndia() {
  const colors = {
    red: "#C62828",
    cream: "#F7F5EE",
    charcoal: "#1C1C1C",
  };

  return (
    <section
      className="relative bg-cream text-charcoal flex items-center justify-center"
      style={{ height: "40vh" }}
    >
      <div className="w-full max-w-5xl p-4 sm:p-6 bg-white rounded-2xl shadow-lg">
        {/* Top Center Heading */}
        <h2
          className="text-2xl sm:text-3xl font-extrabold text-center mb-4"
          style={{ color: colors.red }}
        >
          Get Your Free Moving Quote
        </h2>

        <form
          action="https://formsubmit.co/southindiapackers0@gmail.com"
          method="POST"
          className="space-y-4"
        >
          {/* Hidden Inputs */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_subject" value="New Quote Request - South India Packers" />
          <input type="hidden" name="_next" value="https://southindiapacker.in/" />

          {/* Row 1: Name, Email, Address, Service */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-4">
            <div className="flex items-center border rounded-lg px-2 bg-gray-100">
              <FaUser className="text-gray-600 mr-1" />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className="w-full p-2 bg-transparent text-charcoal placeholder-gray-500 focus:outline-none"
              />
            </div>
            <div className="flex items-center border rounded-lg px-2 bg-gray-100">
              <FaEnvelope className="text-gray-600 mr-1" />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="w-full p-2 bg-transparent text-charcoal placeholder-gray-500 focus:outline-none"
              />
            </div>
            <div className="flex items-center border rounded-lg px-2 bg-gray-100">
              <FaMapMarkerAlt className="text-gray-600 mr-1" />
              <input
                type="text"
                name="address"
                placeholder="Address"
                required
                className="w-full p-2 bg-transparent text-charcoal placeholder-gray-500 focus:outline-none"
              />
            </div>
            <div className="flex items-center border rounded-lg px-2 bg-gray-100">
              <FaTruck className="text-gray-600 mr-1" />
              <select
                name="service"
                required
                className="w-full p-2 bg-transparent text-charcoal placeholder-gray-500 focus:outline-none"
              >
                <option value="">Select Service</option>
                <option value="Relocation Services">Relocation Services</option>
                <option value="Packing Services">Packing Services</option>
                <option value="Moving Services">Moving Services</option>
                <option value="Transport Services">Transport Services</option>
                <option value="Cargo Services">Cargo Services</option>
                <option value="Commercial Moving">Commercial Moving</option>
              </select>
            </div>
          </div>

          {/* Row 2: Moving From, Moving To, Date, Submit */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-4">
            <div className="flex items-center border rounded-lg px-2 bg-gray-100">
              <FaMapMarkerAlt className="text-gray-600 mr-1" />
              <input
                type="text"
                name="movingFrom"
                placeholder="Moving From"
                required
                className="w-full p-2 bg-transparent text-charcoal placeholder-gray-500 focus:outline-none"
              />
            </div>
            <div className="flex items-center border rounded-lg px-2 bg-gray-100">
              <FaMapMarkerAlt className="text-gray-600 mr-1" />
              <input
                type="text"
                name="movingTo"
                placeholder="Moving To"
                required
                className="w-full p-2 bg-transparent text-charcoal placeholder-gray-500 focus:outline-none"
              />
            </div>
            <div className="flex items-center border rounded-lg px-2 bg-gray-100">
              <FaCalendarAlt className="text-gray-600 mr-1" />
              <input
                type="date"
                name="date"
                required
                className="w-full p-2 bg-transparent text-charcoal placeholder-gray-500 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="bg-red-600 text-white font-semibold rounded-lg shadow-md hover:scale-105 transition transform duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
