"use client";

import { MotionConfig } from "framer-motion";
import CallToActionSection from "@/components/(home)/sections/CallToActionSection/CallToActionSection";
import FaqSection from "@/components/(home)/sections/FaqSection/FaqSection";
import HeroSection from "@/components/(home)/sections/HeroSection/HeroSection";
import PaymentMethodsSection from "@/components/(home)/sections/PaymentMethodsSection/PaymentMethodsSection";
import StatsSection from "@/components/(home)/sections/StatsSection/StatsSection";

type LandingPageProps = {
  siteName: string;
};

export default function LandingPage({ siteName }: LandingPageProps) {
  return (
    <MotionConfig reducedMotion="user">
      <HeroSection siteName={siteName} />
      <div className="mx-auto max-w-7xl space-y-20 px-4 pb-20 pt-10 sm:px-6 lg:space-y-24">
        <StatsSection />
        <FaqSection siteName={siteName} />
        <PaymentMethodsSection />
        <CallToActionSection />
      </div>
    </MotionConfig>
  );
}
