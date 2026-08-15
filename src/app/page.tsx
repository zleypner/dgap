"use client";

import {
  Hero,
  Pillars,
  Rehabilitation,
  Cardiometabolic,
  Cardiology,
  Services,
  About,
  Testimonials,
  FAQ,
  Location,
  CTA,
} from "@/components/sections";

export default function HomePage() {
  return (
    <>
      {/* Hero - Above the fold conversion-focused section */}
      <Hero />

      {/* Pillars - Three main areas overview with navigation */}
      <Pillars />

      {/* Rehabilitation - Cardiopulmonary rehabilitation details */}
      <Rehabilitation />

      {/* Cardiometabolic - Prevention and cardiometabolic health */}
      <Cardiometabolic />

      {/* Cardiology - Non-invasive cardiology studies */}
      <Cardiology />

      {/* Services - Full service catalog */}
      <Services />

      {/* About - Doctor biography and credentials */}
      <About />

      {/* Testimonials - Patient testimonials (placeholder) */}
      <Testimonials />

      {/* FAQ - Frequently asked questions */}
      <FAQ />

      {/* Location - Contact and map */}
      <Location />

      {/* CTA - Final call to action */}
      <CTA />
    </>
  );
}
