"use client";

import { motion } from "framer-motion";
import LucideIcon from "@/components/ui/LucideIcon";
import { containerVariants, revealVariants } from "@/lib/motion";

export default function CallToActionSection() {
  return (
    <motion.section
      className="neo-border neo-shadow relative overflow-hidden bg-on-background p-8 text-white sm:p-12 lg:p-16"
      id="signup"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.14)_1px,transparent_0)] bg-[length:22px_22px]"
      />

      <div className="relative z-10 grid grid-cols-1 gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-end lg:gap-16">
        <div className="space-y-5">
          <motion.p
            className="font-headline text-xs font-black uppercase tracking-[0.2em] text-primary-container"
            variants={revealVariants}>
            Ready when you are
          </motion.p>

          <motion.h2
            className="font-headline text-4xl font-black leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl"
            variants={revealVariants}>
            Start dominating your niche today.
          </motion.h2>

          <motion.p
            className="max-w-xl text-base leading-relaxed text-white/75 sm:text-lg"
            variants={revealVariants}>
            Join thousands of creators and brands who stopped waiting and
            started growing. Onboarding takes under 60 seconds.
          </motion.p>
        </div>

        <motion.div
          className="flex items-start lg:justify-end"
          variants={revealVariants}>
          <motion.a
            href="/services"
            className="neo-border font-headline group inline-flex items-center gap-3 bg-primary-container px-6 py-4 text-lg font-black uppercase text-white shadow-[6px_6px_0_0_#ffffff] sm:text-xl"
            whileHover={{ x: 3, y: 3, boxShadow: "3px 3px 0 0 #ffffff" }}
            whileTap={{ x: 6, y: 6, boxShadow: "0px 0px 0 0 #ffffff" }}>
            Get started
            <LucideIcon name="arrow-right" className="text-2xl" />
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}
