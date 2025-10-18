// src/components/FAQAns.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTruck, FaHeadset, FaBoxes, FaPlus } from "react-icons/fa";

const colors = {
  red: "#C62828",
  blue: "#1D4ED8",
  white: "#FFFFFF",
  beige: "#F7F5EE",
};

const faqCategories = {
  "Moving & Packing": {
    icon: <FaTruck className="text-2xl" style={{ color: colors.red }} />,
    faqs: [
      {
        question: "Do you provide both local and long-distance moving?",
        answer:
          "Yes, South India Packers offers professional moving solutions across India — local, domestic, and long-distance — with secure transport and expert handling.",
      },
      {
        question: "Are my items insured during transit?",
        answer:
          "Absolutely. Every move includes optional insurance coverage to ensure your goods are fully protected throughout the journey.",
      },
      {
        question: "Do you handle fragile items?",
        answer:
          "Yes, our team uses special cushioning, wrapping, and labeling to safely pack fragile and high-value items.",
      },
    ],
  },
  "Packaging & Storage": {
    icon: <FaBoxes className="text-2xl" style={{ color: colors.blue }} />,
    faqs: [
      {
        question: "What packing materials do you use?",
        answer:
          "We use premium bubble wraps, corrugated boxes, and foam sheets to ensure every item stays safe and intact.",
      },
      {
        question: "Do you offer temporary storage options?",
        answer:
          "Yes, we provide clean, secure, and temperature-controlled storage spaces for short or long durations.",
      },
      {
        question: "Can I get customized packing for specific goods?",
        answer:
          "Definitely. Our experts tailor packaging solutions based on your item’s type, size, and sensitivity.",
      },
    ],
  },
  "Customer Support": {
    icon: <FaHeadset className="text-2xl" style={{ color: colors.red }} />,
    faqs: [
      {
        question: "How can I contact your support team?",
        answer:
          "You can reach us 24×7 via phone, WhatsApp, or email for assistance and real-time shipment tracking.",
      },
      {
        question: "Do you offer on-site inspection before quotation?",
        answer:
          "Yes, our representatives can visit your location to assess and provide an accurate moving cost estimate.",
      },
      {
        question: "How can I track my shipment?",
        answer:
          "Once dispatched, you’ll receive a live tracking link or direct support updates until safe delivery.",
      },
    ],
  },
};

export default function FAQAns() {
  const [activeTab, setActiveTab] = useState("Moving & Packing");
  const [openIndex, setOpenIndex] = useState(null);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setOpenIndex(null);
  };

  return (
    <section
      className="relative w-full py-6 px-6 md:px-12 font-[Italiana] overflow-hidden"
      style={{ backgroundColor: colors.beige }}
    >
       {/* Title Section */}
      <div className="relative text-center mb-6 z-10">
        <h2
          className="text-5xl md:text-6xl font-[Zen_Dots] mb-4"
          style={{ color: colors.red }}
        >
          Frequently Asked Questions
        </h2>
        <p
          className="max-w-2xl mx-auto text-lg md:text-xl font-[Orbitron] tracking-wide"
          style={{ color: colors.blue }}
        >
          Clear your doubts about{" "}
          <span className="font-semibold text-red-600">
            South India Packers & Movers
          </span>{" "}
          — Safe, Trusted, and Professional.
        </p>
      </div>

      {/* FAQ Box */}
      <div className="relative z-10 flex flex-col md:flex-row max-w-6xl mx-auto shadow-2xl rounded-3xl overflow-hidden border border-blue-100 bg-white/95 backdrop-blur-xl">
        {/* Sidebar */}
        <div className="md:w-1/3 bg-[#F7F5EE] p-6 flex flex-col gap-5 border-r border-blue-100">
          {Object.entries(faqCategories).map(([category, data], idx) => (
            <motion.button
              key={idx}
              onClick={() => handleTabChange(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className={`w-full text-left px-5 py-4 rounded-xl flex items-center gap-3 text-base font-[Orbitron] transition-all duration-300 ${
                activeTab === category
                  ? "bg-blue-700 text-white shadow-lg"
                  : "bg-white text-blue-700 hover:bg-blue-50"
              }`}
            >
              {data.icon}
              <span>{category}</span>
            </motion.button>
          ))}
        </div>

        {/* FAQ Content */}
        <div className="md:w-2/3 p-8 bg-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
            >
              {faqCategories[activeTab].faqs.map((faq, index) => (
                <div key={index} className="border-b border-blue-100 py-5">
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    className="w-full flex justify-between items-center text-left px-3 py-2 rounded-md hover:bg-[#F7F5EE] transition-all"
                  >
                    <span
                      className="text-lg md:text-xl font-[Italiana]"
                      style={{ color: colors.blue }}
                    >
                      {faq.question}
                    </span>
                    <motion.span
                      animate={{ rotate: openIndex === index ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-lg font-bold"
                      style={{ color: colors.red }}
                    >
                      <FaPlus />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {openIndex === index && (
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3 }}
                        className="text-base mt-3 leading-relaxed px-3 font-[Orbitron]"
                        style={{ color: colors.blue }}
                      >
                        {faq.answer}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
