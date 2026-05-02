"use client";

import { motion } from "framer-motion";
import LucideIcon from "@/components/ui/LucideIcon";
import { containerVariants, revealVariants } from "@/lib/motion";
import type { ServicesHeroContent } from "@/types/services";

type ServicesHeroSectionProps = {
  content: ServicesHeroContent;
};

export default function ServicesHeroSection({
  content,
}: ServicesHeroSectionProps) {
  return (
    <motion.section
      className="neo-border neo-shadow relative overflow-hidden bg-surface-container-highest p-8 md:p-14 lg:p-16"
      initial="hidden"
      animate="show"
      variants={containerVariants}>
      <div className="dot-pattern absolute inset-0 opacity-10" aria-hidden="true" />

      <div className="relative z-10 max-w-3xl">
        <motion.div
          className="neo-border mb-6 inline-flex items-center gap-2 bg-secondary-container px-4 py-2 shadow-[4px_4px_0_0_#181c20]"
          variants={revealVariants}>
          <LucideIcon
            name={content.eyebrowIcon}
            className="text-xl text-black"
          />
          <span className="font-headline text-base font-bold uppercase tracking-wider text-black sm:text-lg">
            {content.eyebrow}
          </span>
        </motion.div>

        <motion.h1
          className="font-headline text-5xl font-black uppercase leading-[0.95] tracking-tight text-black sm:text-6xl lg:text-7xl"
          variants={revealVariants}>
          {content.title}{" "}
          <span className="text-stroke block text-primary-container sm:inline">
            {content.highlight}
          </span>
        </motion.h1>

        <motion.p
          className="mt-6 max-w-xl text-base font-semibold leading-relaxed text-on-surface-variant sm:text-lg"
          variants={revealVariants}>
          {content.description}
        </motion.p>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[38%] border-l-[3px] border-black md:block">
        <div className="relative h-full w-full overflow-hidden">
          <motion.div
            className="absolute left-8 top-10 h-28 w-28 border-[3px] border-black bg-error-container shadow-[6px_6px_0_0_#181c20]"
            animate={{ rotate: [-8, -2, -8], y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute right-10 top-24 h-32 w-32 border-[3px] border-black bg-primary-container shadow-[6px_6px_0_0_#181c20]"
            animate={{ rotate: [6, 12, 6], y: [0, -14, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-16 left-14 flex h-28 w-28 items-center justify-center border-[3px] border-black bg-white shadow-[6px_6px_0_0_#181c20]"
            animate={{ rotate: [0, -6, 0], scale: [1, 1.04, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
            <LucideIcon name="target" className="text-5xl text-black" />
          </motion.div>
          <motion.div
            className="absolute bottom-10 right-8 flex h-24 w-24 items-center justify-center border-[3px] border-black bg-secondary-container shadow-[6px_6px_0_0_#181c20]"
            animate={{ rotate: [4, -4, 4] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}>
            <LucideIcon name="zap" className="text-4xl text-black" />
          </motion.div>

          <div
            aria-hidden="true"
            className="absolute bottom-0 left-0 right-0 h-12 border-t-[3px] border-black bg-[repeating-linear-gradient(45deg,#181c20_0_10px,transparent_10px_20px)]"
          />
        </div>
      </div>
    </motion.section>
  );
}
