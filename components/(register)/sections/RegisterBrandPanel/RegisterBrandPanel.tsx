"use client";

import { motion } from "framer-motion";
import LucideIcon from "@/components/ui/LucideIcon";
import { containerVariants, revealVariants } from "@/lib/motion";
import type { LoginBrandContent } from "@/types/auth";

type RegisterBrandPanelProps = {
  siteName: string;
  content: LoginBrandContent;
};

export default function RegisterBrandPanel({
  siteName,
  content,
}: RegisterBrandPanelProps) {
  return (
    <motion.aside
      className="relative hidden flex-1 flex-col justify-between overflow-hidden border-l-[3px] border-black bg-primary-container p-10 md:flex lg:p-14"
      initial="hidden"
      animate="show"
      variants={containerVariants}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(-45deg,rgba(24,28,32,0.08)_0_12px,transparent_12px_28px)]"
      />

      <div className="relative z-10 flex items-start justify-between gap-6">
        <motion.a
          href="/"
          className="neo-border group inline-flex items-center gap-2 bg-white px-3 py-1.5 font-headline text-xs font-bold uppercase tracking-wider text-black shadow-[4px_4px_0_0_#181c20] transition-transform hover:-translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0_0_#181c20]"
          variants={revealVariants}>
          <LucideIcon
            name="arrow-right"
            className="rotate-180 text-base text-black"
          />
          {content.backToSiteLabel}
        </motion.a>

        <motion.a
          href="/"
          className="font-headline text-xl font-black uppercase italic tracking-tighter text-black sm:text-2xl"
          variants={revealVariants}>
          {siteName}
        </motion.a>
      </div>

      <div className="relative z-10 space-y-6">
        <motion.div
          className="neo-border inline-flex items-center gap-2 bg-white px-4 py-2 shadow-[4px_4px_0_0_#181c20]"
          variants={revealVariants}>
          <LucideIcon
            name={content.eyebrowIcon}
            className="text-lg text-black"
          />
          <span className="font-headline text-sm font-bold uppercase tracking-wider text-black sm:text-base">
            {content.eyebrow}
          </span>
        </motion.div>

        <motion.h1
          className="font-headline text-4xl font-black uppercase leading-[0.95] tracking-tight text-black sm:text-5xl lg:text-6xl"
          variants={revealVariants}>
          {content.title}
        </motion.h1>

        <motion.p
          className="max-w-md text-base font-medium leading-relaxed text-black/85 sm:text-lg"
          variants={revealVariants}>
          {content.description}
        </motion.p>
      </div>

      <motion.div
        className="relative z-10 h-60 overflow-hidden border-[3px] border-black bg-white shadow-[6px_6px_0_0_#181c20] lg:h-64"
        variants={revealVariants}>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,#181c20_1px,transparent_0)] bg-[length:18px_18px] opacity-20"
        />

        <motion.div
          aria-hidden="true"
          className="absolute right-8 top-8 h-24 w-24 border-[3px] border-black bg-primary-container shadow-[6px_6px_0_0_#181c20]"
          animate={{ rotate: [6, -2, 6], y: [0, -6, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden="true"
          className="absolute bottom-10 right-16 h-16 w-16 border-[3px] border-black bg-error-container shadow-[4px_4px_0_0_#181c20]"
          animate={{ rotate: [-4, 4, -4] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          aria-hidden="true"
          className="absolute left-8 top-1/2 flex h-28 w-28 -translate-y-1/2 items-center justify-center border-[3px] border-black bg-black text-white shadow-[6px_6px_0_0_#63ad6f]"
          animate={{ rotate: [0, -6, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}>
          <LucideIcon name="rocket" className="text-5xl" />
        </motion.div>

        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 right-0 h-5 border-t-[3px] border-black bg-[repeating-linear-gradient(-45deg,#181c20_0_8px,transparent_8px_16px)]"
        />
      </motion.div>
    </motion.aside>
  );
}
