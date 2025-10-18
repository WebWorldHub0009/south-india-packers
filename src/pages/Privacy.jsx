// src/pages/PrivacyPolicy.jsx
import React from "react";

const COLORS = {
  red: "#C62828",
  blue: "#1D4ED8",
  cream: "#F7F5EE",
  charcoal: "#1C1C1C",
};

export default function PrivacyPolicy() {
  return (
    <section className="min-h-screen bg-cream text-charcoal py-12 px-6 sm:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h1
          className="text-3xl sm:text-4xl font-bold mb-6"
          style={{ color: COLORS.red }}
        >
          Privacy Policy
        </h1>

        <p className="mb-4" style={{ color: COLORS.charcoal }}>
          At <strong>South India Packers</strong>, your privacy is very important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you use our services or visit our website.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2" style={{ color: COLORS.blue }}>
          1. Information We Collect
        </h2>
        <p className="mb-4" style={{ color: COLORS.charcoal }}>
          We may collect the following information:
        </p>
        <ul className="list-disc ml-6 mb-4" style={{ color: COLORS.charcoal }}>
          <li>Name, email address, phone number, and other contact details.</li>
          <li>Information about your moving requirements, including locations and services.</li>
          <li>Website usage data such as IP address, browser type, and pages visited.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2" style={{ color: COLORS.blue }}>
          2. How We Use Your Information
        </h2>
        <p className="mb-4" style={{ color: COLORS.charcoal }}>
          The information we collect is used for:
        </p>
        <ul className="list-disc ml-6 mb-4" style={{ color: COLORS.charcoal }}>
          <li>Providing accurate moving quotes and services tailored to your needs.</li>
          <li>Communicating with you about your inquiries, bookings, and updates.</li>
          <li>Improving our website, services, and customer experience.</li>
          <li>Compliance with legal and regulatory requirements.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2" style={{ color: COLORS.blue }}>
          3. Sharing Your Information
        </h2>
        <p className="mb-4" style={{ color: COLORS.charcoal }}>
          We do not sell, trade, or rent your personal information. We may share information with:
        </p>
        <ul className="list-disc ml-6 mb-4" style={{ color: COLORS.charcoal }}>
          <li>Our trusted partners and service providers to assist with your move.</li>
          <li>Authorities, when required by law or for legal protection.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2" style={{ color: COLORS.blue }}>
          4. Data Security
        </h2>
        <p className="mb-4" style={{ color: COLORS.charcoal }}>
          We take appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2" style={{ color: COLORS.blue }}>
          5. Cookies
        </h2>
        <p className="mb-4" style={{ color: COLORS.charcoal }}>
          Our website may use cookies to enhance user experience. Cookies help us understand user behavior and improve our services. You can choose to disable cookies in your browser, but some features may not function properly.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2" style={{ color: COLORS.blue }}>
          6. Your Rights
        </h2>
        <p className="mb-4" style={{ color: COLORS.charcoal }}>
          You have the right to:
        </p>
        <ul className="list-disc ml-6 mb-4" style={{ color: COLORS.charcoal }}>
          <li>Access, update, or delete your personal information.</li>
          <li>Withdraw consent for data processing at any time.</li>
          <li>Request information on how your data is used.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2" style={{ color: COLORS.blue }}>
          7. Changes to This Policy
        </h2>
        <p className="mb-4" style={{ color: COLORS.charcoal }}>
          We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2" style={{ color: COLORS.blue }}>
          Contact Us
        </h2>
        <p className="mb-4" style={{ color: COLORS.charcoal }}>
          If you have any questions about this Privacy Policy, please contact us at:
        </p>
        <p className="mb-2" style={{ color: COLORS.charcoal }}>
          <strong>Email:</strong> southindiapackers0@gmail.com
        </p>
        <p className="mb-2" style={{ color: COLORS.charcoal }}>
          <strong>Phone:</strong> +91 9555011308
        </p>
        <p className="mb-2" style={{ color: COLORS.charcoal }}>
          <strong>Address:</strong> South India Packers & Movers, [Plot No. 2971/3, Gali No. 3, Near Banke Bihari Temple,
D B Gupta Road, Paharganj, New Delhi - 110055]
        </p>
      </div>
    </section>
  );
}
