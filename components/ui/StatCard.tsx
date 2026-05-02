"use client";

import { motion } from "framer-motion";
import LucideIcon from "@/components/ui/LucideIcon";
import { revealVariants } from "@/lib/motion";
import type { StatItem } from "@/types/landing";

type StatCardProps = {
  stat: StatItem;
};

export default function StatCard({ stat }: StatCardProps) {
  return (
    <motion.article
      className="neo-border neo-shadow-sm relative flex flex-col items-start overflow-hidden bg-white p-8 transition-shadow duration-200 hover:shadow-[6px_6px_0_0_#181c20]"
      variants={revealVariants}
      whileHover={{ y: -4 }}>
      <LucideIcon
        name={stat.icon}
        aria-hidden="true"
        className="pointer-events-none absolute right-5 top-5 text-3xl text-on-surface-variant opacity-20"
      />

      <p className="font-headline text-5xl font-black leading-none tracking-tight text-black sm:text-6xl">
        {stat.value}
      </p>

      <div
        aria-hidden="true"
        className="mt-5 h-[3px] w-12 bg-primary-container"
      />

      <p className="mt-4 text-sm font-medium text-on-surface-variant sm:text-base">
        {stat.label}
      </p>
    </motion.article>
  );
}
