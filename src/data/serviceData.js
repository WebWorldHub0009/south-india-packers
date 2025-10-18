// src/data/servicesData.js
import relocation from "../assets/service/relocation.jpg";
import pack from "../assets/service/packing.jpg";
import move from "../assets/service/movea.jpg";
import car from "../assets/home/car.jpg";
import cargo from "../assets/home/cargoo.jpeg";
import commercial from "../assets/service/cmove.jpg";

const servicesData = [
  {
    title: "Relocation Services",
    route: "/services/relocation-services",
    img: relocation,
    subtitle: "Safe & Hassle-Free Moves",
    quote: "Your belongings, moved with utmost care and professionalism.",
    overview: "South India Packers provides comprehensive relocation services across South India. We manage packing, loading, transport, and unloading with precision. Our team ensures that fragile and valuable items are handled carefully, delivering a seamless and stress-free moving experience. Every move is planned meticulously, prioritizing safety, punctuality, and customer satisfaction to ensure your belongings arrive intact and on time, making relocation efficient and worry-free.",
    whyUs: "Expert handling, safe transport, and timely execution ensure a smooth, reliable relocation experience.",
    features: [
      "Professional packing and unpacking",
      "Secure transport for all items",
      "Timely and reliable service",
      "Special care for fragile items",
      "Comprehensive relocation solutions"
    ],
    cta: "Book Relocation"
  },
  {
    title: "Packing Services",
    route: "/services/packing-services",
    img: pack,
    subtitle: "Secure & Organized Packing",
    quote: "Packing done right, for a worry-free move.",
    overview: "Our Packing Services provide safe and efficient packing for households and businesses. Using premium materials, we ensure fragile, bulky, and valuable items are packed securely. Our team organizes and labels boxes systematically to optimize space and protect belongings. With careful attention to detail, we deliver high-quality, professional packing that saves time, prevents damage, and ensures smooth transportation to the destination, giving you peace of mind during your move.",
    whyUs: "Professional materials, careful handling, and organized packing make every move stress-free and safe.",
    features: [
      "High-quality packing materials",
      "Fragile item protection",
      "Organized and labeled boxes",
      "Furniture and appliance wrapping",
      "Custom packing solutions"
    ],
    cta: "Book Packing"
  },
  {
    title: "Moving Services",
    route: "/services/moving-services",
    img: move,
    subtitle: "Efficient & Reliable Transportation",
    quote: "Moving your belongings swiftly and safely.",
    overview: "South India Packers offers reliable moving services for homes, offices, and commercial spaces. We ensure safe handling of all items, from fragile belongings to heavy furniture. Our team plans each move carefully, providing timely updates and efficient transport solutions. Personalized moving plans guarantee security, punctuality, and convenience, making every relocation smooth and hassle-free. Trust us to manage every detail, ensuring your possessions arrive intact and on schedule.",
    whyUs: "Skilled movers, reliable transport, and customized plans ensure seamless and stress-free moves.",
    features: [
      "Residential and commercial moves",
      "Safe handling of all items",
      "Timely delivery and updates",
      "Customized moving plans",
      "Experienced staff"
    ],
    cta: "Book Moving"
  },
  {
    title: "Transport Services",
    route: "/services/transport-services",
    img: car,
    subtitle: "Flexible & Dependable Transport",
    quote: "Efficient transportation solutions for any requirement.",
    overview: "Our Transport Services provide flexible vehicle and goods transportation tailored for individuals and businesses. We ensure timely deliveries using modern vehicles with professional handling. Every transport plan is customized to suit your schedule, offering safety and efficiency. Whether it’s cars, equipment, or other goods, our experienced team manages logistics carefully, delivering secure and reliable transportation while maintaining high standards of service.",
    whyUs: "Modern fleet, safe handling, and flexible scheduling for dependable transport solutions.",
    features: [
      "Vehicle transport",
      "Goods and equipment transport",
      "Flexible scheduling options",
      "Safe and insured transport",
      "Experienced drivers"
    ],
    cta: "Book Transport"
  },
  {
    title: "Cargo Services",
    route: "/services/cargo-services",
    img: cargo,
    subtitle: "Secure Cargo Handling",
    quote: "Transporting your cargo with care and efficiency.",
    overview: "South India Packers offers specialized cargo services for domestic and commercial shipments. We handle packaging, documentation, and transportation with precision. Our team ensures that each parcel, small or large, is safely transported and delivered on time. Every cargo move is tracked and managed to prevent damage or delays. Our professional handling guarantees secure and reliable delivery, providing peace of mind for all types of cargo.",
    whyUs: "Professional handling, secure packaging, and timely delivery for all cargo shipments.",
    features: [
      "Domestic cargo transport",
      "Secure packaging and handling",
      "Timely and tracked delivery",
      "Flexible cargo sizes and volumes",
      "Custom solutions for special cargo"
    ],
    cta: "Book Cargo Service"
  },
  {
    title: "Commercial Moving",
    route: "/services/commercial-moving",
    img: commercial,
    subtitle: "Business Relocation Experts",
    quote: "Seamless moves for your business without downtime.",
    overview: "We provide commercial moving services for offices, warehouses, and industrial facilities. Our team carefully plans each relocation, handling equipment, documents, and furniture efficiently. Every step is executed to minimize downtime, ensuring businesses resume operations quickly. With professional management and experienced movers, we guarantee a smooth transition while maintaining safety, organization, and productivity during the relocation process.",
    whyUs: "Efficient planning, careful execution, and minimal downtime make business moves seamless.",
    features: [
      "Office and warehouse relocation",
      "Equipment and document handling",
      "Scheduled and efficient moves",
      "Minimal downtime for businesses",
      "Custom commercial moving solutions"
    ],
    cta: "Book Commercial Move"
  }
];

export default servicesData;
