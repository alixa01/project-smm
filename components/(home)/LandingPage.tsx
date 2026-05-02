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
      <div className="mx-auto max-w-6xl space-y-24 px-4 pb-24 sm:px-6 sm:space-y-32 lg:space-y-40 lg:pb-32">
        <StatsSection />
        <FaqSection siteName={siteName} />
        <PaymentMethodsSection />
        <CallToActionSection />
      </div>
    </MotionConfig>
  );
}
