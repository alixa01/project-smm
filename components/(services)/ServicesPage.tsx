"use client";

import { MotionConfig } from "framer-motion";
import ServicesGridSection from "@/components/(services)/sections/ServicesGridSection/ServicesGridSection";
import ServicesHeroSection from "@/components/(services)/sections/ServicesHeroSection/ServicesHeroSection";
import { servicesHero } from "@/lib/services-content";

export default function ServicesPage() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="mx-auto max-w-7xl space-y-16 px-4 py-12 sm:px-6 md:py-16 lg:space-y-20 lg:py-20">
        <ServicesHeroSection content={servicesHero} />
        <ServicesGridSection />
      </div>
    </MotionConfig>
  );
}
