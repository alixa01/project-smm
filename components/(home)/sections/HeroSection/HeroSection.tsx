"use client";

import { motion } from "framer-motion";
import LucideIcon, { type LucideIconName } from "@/components/ui/LucideIcon";
import NeoButton from "@/components/ui/NeoButton";
import { containerVariants, revealVariants } from "@/lib/motion";

type HeroSectionProps = {
  siteName: string;
};

type PlatformChip = {
  label: string;
  icon: LucideIconName;
  href: string;
};

const PLATFORM_CHIPS: PlatformChip[] = [
  { label: "Instagram", icon: "camera", href: "/services#instagram" },
  { label: "TikTok", icon: "play-circle", href: "/services#tiktok" },
  { label: "YouTube", icon: "clapperboard", href: "/services#youtube" },
];

export default function HeroSection({ siteName }: HeroSectionProps) {
  return (
    <section className="relative isolate overflow-hidden">
      <div
        aria-hidden="true"
        className="dot-pattern pointer-events-none absolute inset-0 -z-10 opacity-40"
      />

      <motion.div
        className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-20 sm:gap-8 sm:px-6 sm:py-28 lg:py-40"
        initial="hidden"
        animate="show"
        variants={containerVariants}>
        <motion.span
          className="neo-border neo-shadow-sm font-headline inline-flex items-center gap-2 bg-white px-3 py-1.5 text-xs font-black uppercase tracking-[0.18em] text-black sm:text-sm"
          variants={revealVariants}>
          <span
            aria-hidden="true"
            className="inline-block h-2 w-2 rounded-full bg-primary-container"
          />
          #1 Social Media Growth Platform
        </motion.span>

        <motion.h1
          className="font-headline max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-on-background sm:text-6xl md:text-7xl lg:text-[88px]"
          variants={revealVariants}>
          Level up your{" "}
          <span className="text-primary-container">social presence.</span>
        </motion.h1>

        <motion.p
          className="max-w-2xl text-base leading-relaxed text-on-surface-variant sm:text-lg"
          variants={revealVariants}>
          {siteName} delivers engineered social growth — real followers,
          authentic engagement, and measurable outcomes across Instagram,
          TikTok, and YouTube. No bots. No guesswork.
        </motion.p>

        <motion.div
          className="flex flex-wrap items-center gap-3 pt-2 sm:gap-4"
          variants={revealVariants}>
          <NeoButton href="/services">
            Browse services <LucideIcon name="arrow-right" />
          </NeoButton>
          <NeoButton href="#pricing" variant="surface">
            See pricing
          </NeoButton>
        </motion.div>

        <motion.div
          className="mt-6 flex flex-wrap items-center gap-3 border-t-[3px] border-black pt-6 sm:gap-4"
          variants={revealVariants}>
          <span className="font-headline text-xs font-black uppercase tracking-[0.18em] text-on-surface-variant">
            Built for
          </span>
          {PLATFORM_CHIPS.map((chip) => (
            <a
              key={chip.label}
              href={chip.href}
              className="neo-border font-headline inline-flex items-center gap-2 bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-black transition-all duration-150 hover:-translate-y-0.5 hover:bg-primary-container hover:text-white sm:text-sm">
              <LucideIcon name={chip.icon} className="text-base" />
              {chip.label}
            </a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
