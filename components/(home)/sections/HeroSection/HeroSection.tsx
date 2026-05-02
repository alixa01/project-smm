"use client";

import { motion } from "framer-motion";
import LucideIcon from "@/components/ui/LucideIcon";
import NeoButton from "@/components/ui/NeoButton";
import { heroImageUrl } from "@/lib/landing-content";
import { containerVariants, revealVariants } from "@/lib/motion";

type HeroSectionProps = {
  siteName: string;
};

export default function HeroSection({ siteName }: HeroSectionProps) {
  return (
    <section className="relative isolate flex min-h-[calc(100svh-9rem)] items-center px-4 py-10 sm:px-6 lg:px-8">
      <motion.img
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        src={heroImageUrl}
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#f7f9ff_0%,rgba(247,249,255,0.94)_42%,rgba(247,249,255,0.74)_74%,rgba(247,249,255,0.42)_100%)]" />
      <div className="dot-pattern absolute inset-0 -z-10 opacity-20" />

      <motion.div
        className="mx-auto flex w-full max-w-7xl flex-col gap-8"
        initial="hidden"
        animate="show"
        variants={containerVariants}>
        <motion.div
          className="neo-border neo-shadow font-headline inline-flex w-fit bg-primary-container px-4 py-2 text-base font-bold uppercase text-on-primary-container sm:text-lg"
          variants={revealVariants}>
          #1 Social Media Growth Platform
        </motion.div>

        <motion.h1
          className="font-headline max-w-5xl text-5xl font-black uppercase leading-none text-on-background sm:text-6xl lg:text-7xl"
          variants={revealVariants}>
          Levelling Up Your{" "}
          <span className="text-primary-container text-stroke block sm:inline">
            Social Presence
          </span>
        </motion.h1>

        <motion.p
          className="max-w-2xl text-lg leading-8 text-on-surface-variant sm:text-xl"
          variants={revealVariants}>
          Dominate the digital landscape with {siteName}. We provide
          high-impact, uncompromising social media marketing tools designed for
          brutal efficiency and explosive growth.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4 pt-2"
          variants={revealVariants}>
          <NeoButton href="#signup">
            Get Started <LucideIcon name="arrow-right" />
          </NeoButton>
          <NeoButton href="#pricing" variant="surface">
            View Pricing
          </NeoButton>
        </motion.div>

        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-8 right-4 hidden h-40 w-40 items-center justify-center border-[3px] border-black bg-secondary-container shadow-[6px_6px_0_0_#181c20] md:flex"
          animate={{ rotate: [-3, 3, -3], y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
          <LucideIcon name="trending-up" className="text-7xl" />
        </motion.div>
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute right-10 top-28 hidden h-20 w-20 items-center justify-center rounded-full border-[3px] border-black bg-white shadow-[6px_6px_0_0_#181c20] lg:flex"
          animate={{ rotate: [0, 16, 0], scale: [1, 1.04, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
          <LucideIcon name="star" className="text-4xl" />
        </motion.div>
      </motion.div>
    </section>
  );
}
