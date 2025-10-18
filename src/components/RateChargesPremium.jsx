// src/components/SouthIndiaRates.jsx
import React from "react";
import { motion } from "framer-motion";
import { Info, Truck } from "lucide-react";

// South India Packers Colors
const COLORS = {
  red: "#C62828",       // Brand Red
  blue: "#1D4ED8",      // Brand Blue
  cream: "#F7F5EE",     // Light Background
  charcoal: "#1C1C1C",  // Text Color
  gray: "#D9D9D9",      // Border / Neutral
};

const localLongDistanceRates = [
  { type: "1 BHK", local: "₹3,500-₹11,000", long: "₹6,000-₹30,000" },
  { type: "2 BHK", local: "₹6,000-₹18,000", long: "₹7,000-₹37,000" },
  { type: "3 or above", local: "₹9,000-₹25,000", long: "₹8,000-₹70,000" },
  { type: "Some Items Only", local: "₹1,000-₹7,000", long: "₹4,000-₹20,000" },
];

const movingTypesRates = [
  {
    type: "1 BHK",
    "0-400": "₹7,900-₹15,750",
    "400-850": "₹9,800-₹20,500",
    "850-1300": "₹11,600-₹21,500",
    "1300-1800": "₹14,000-₹21,500",
  },
  {
    type: "2 BHK",
    "0-400": "₹10,500-₹23,400",
    "400-850": "₹11,200-₹22,700",
    "850-1300": "₹16,000-₹26,000",
    "1300-1800": "₹16,700-₹29,200",
  },
  {
    type: "3 BHK",
    "0-400": "₹13,400-₹23,300",
    "400-850": "₹15,000-₹26,800",
    "850-1300": "₹17,600-₹33,550",
    "1300-1800": "₹21,500-₹32,500",
  },
  {
    type: "4 BHK / Villa",
    "0-400": "₹23,200-₹33,700",
    "400-850": "₹17,000-₹32,100",
    "850-1300": "₹21,400-₹35,500",
    "1300-1800": "₹26,400-₹41,500",
  },
  {
    type: "Two Wheeler",
    "0-400": "₹2,000-₹3,000",
    "400-850": "₹1,800-₹5,500",
    "850-1300": "₹3,000-₹5,400",
    "1300-1800": "₹4,000-₹7,800",
  },
  {
    type: "Four Wheeler",
    "0-400": "₹3,800-₹5,200",
    "400-850": "₹5,000-₹10,600",
    "850-1300": "₹6,400-₹15,200",
    "1300-1800": "₹6,400-₹16,000",
  },
];

export default function SouthIndiaRates() {
  return (
    <section className="relative w-full bg-cream py-12 overflow-hidden">
      {/* Gradient Background Accents */}
      <div
        className="absolute -top-32 -left-32 h-96 w-96 rounded-full blur-[120px] opacity-20 pointer-events-none"
        style={{ background: COLORS.red }}
      />
      <div
        className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full blur-[120px] opacity-25 pointer-events-none"
        style={{ background: COLORS.blue }}
      />

      <div className="mx-auto max-w-7xl px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
            <span className="mr-2" style={{ color: COLORS.charcoal }}>Local & Long Distance</span>
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: `linear-gradient(90deg, ${COLORS.red}, ${COLORS.blue})` }}
            >
              Shifting Prices
            </span>
          </h2>
          <p className="mt-3 text-base md:text-lg font-medium" style={{ color: COLORS.charcoal }}>
            Transparent rates for all types of shifting – Local & Long Distance.
          </p>
        </motion.div>

        {/* Local & Long Distance Table */}
        <div className="overflow-x-auto rounded-2xl shadow-md mb-10">
          <table className="min-w-full bg-white rounded-lg">
            <thead>
              <tr>
                <th className="px-4 py-3 text-left font-semibold bg-red-600 text-white">Type of Service</th>
                <th className="px-4 py-3 text-left font-semibold bg-red-500 text-white">Local Shifting (under 50 KM)</th>
                <th className="px-4 py-3 text-left font-semibold bg-red-500 text-white">Long Distance Shifting (under 1200 KM)</th>
              </tr>
            </thead>
            <tbody>
              {localLongDistanceRates.map((row, idx) => (
                <tr key={row.type} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                  <td className="px-4 py-3 font-medium text-charcoal">{row.type}</td>
                  <td className="px-4 py-3 text-charcoal">{row.local}</td>
                  <td className="px-4 py-3 text-charcoal">{row.long}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Distance-wise Moving Types Table */}
        <div className="overflow-x-auto rounded-2xl shadow-md">
          <table className="min-w-full bg-white rounded-lg">
            <thead>
              <tr>
                <th className="px-4 py-3 text-left font-semibold bg-blue-600 text-white">Moving Type / Distance</th>
                <th className="px-4 py-3 text-left font-semibold bg-blue-500 text-white">Up to 400 KM</th>
                <th className="px-4 py-3 text-left font-semibold bg-blue-500 text-white">400-850 KM</th>
                <th className="px-4 py-3 text-left font-semibold bg-blue-500 text-white">850-1300 KM</th>
                <th className="px-4 py-3 text-left font-semibold bg-blue-500 text-white">1300-1800 KM</th>
              </tr>
            </thead>
            <tbody>
              {movingTypesRates.map((row, idx) => (
                <tr key={row.type} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                  <td className="px-4 py-3 font-medium text-charcoal">{row.type}</td>
                  <td className="px-4 py-3 text-charcoal">{row["0-400"]}</td>
                  <td className="px-4 py-3 text-charcoal">{row["400-850"]}</td>
                  <td className="px-4 py-3 text-charcoal">{row["850-1300"]}</td>
                  <td className="px-4 py-3 text-charcoal">{row["1300-1800"]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Note */}
        <div className="mt-6 flex items-center gap-2 text-sm text-center justify-center max-w-3xl mx-auto">
          <Info className="h-4 w-4" color={COLORS.red} />
          <p style={{ color: COLORS.charcoal }}>
            <span className="font-semibold">Note:</span> Prices are approximate and may vary depending on distance, volume of goods, packing quality, and additional services.
          </p>
        </div>
      </div>
    </section>
  );
}
