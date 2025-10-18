import React, { Suspense, lazy } from "react";

// Lazy load components
const HeroSection = lazy(() => import("../components/HeroSection"));
const OurStory = lazy(() => import("../components/OurStory"));
const WhatWeDo = lazy(() => import("../components/WhatWeDo"));
const ServicesSection = lazy(() => import("../components/ServiceSection"));
const HowWeWork = lazy(() => import("../components/HowWeWork"));
const Faq = lazy(() => import("../components/Faq"));
const QuoteForm = lazy(() => import("../components/QuoteForm"));
const RatesChargesPremium = lazy(() => import("../components/RateChargesPremium"));

const Home = () => {
  return (
    <>
      <Suspense fallback={<div className="text-center py-20 text-xl">Loading...</div>}>
        <HeroSection />
      </Suspense>

      <Suspense fallback={<div className="text-center py-20 text-xl">Loading...</div>}>
        <OurStory />
      </Suspense>

      <Suspense fallback={<div className="text-center py-20 text-xl">Loading...</div>}>
        <WhatWeDo />
      </Suspense>

      <Suspense fallback={<div className="text-center py-20 text-xl">Loading...</div>}>
        <ServicesSection />
      </Suspense>

      <Suspense fallback={<div className="text-center py-20 text-xl">Loading...</div>}>
        <QuoteForm />
      </Suspense>

      <Suspense fallback={<div className="text-center py-20 text-xl">Loading...</div>}>
        <HowWeWork />
      </Suspense>

      <Suspense fallback={<div className="text-center py-20 text-xl">Loading...</div>}>
        <RatesChargesPremium />
      </Suspense>

      <Suspense fallback={<div className="text-center py-20 text-xl">Loading...</div>}>
        <Faq />
      </Suspense>
    </>
  );
};

export default Home;
