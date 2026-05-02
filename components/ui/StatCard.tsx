"use client";

import { motion } from "framer-motion";
import LucideIcon from "@/components/ui/LucideIcon";
import { revealVariants } from "@/lib/motion";
import type { StatItem } from "@/types/landing";

type StatCardProps = {
  stat: StatItem;
};

export default function StatCard({ stat }: StatCardProps) {
  const isFeatured = stat.isFeatured === true;

  return (
    <motion.article
      className={`neo-border neo-shadow flex flex-col items-center justify-center space-y-4 p-8 text-center ${
        isFeatured ? "bg-primary-container text-white" : "bg-white"
      }`}
      variants={revealVariants}
      whileHover={{ y: -4, rotate: isFeatured ? -1 : 1 }}>
      <LucideIcon
        name={stat.icon}
        className={`text-5xl ${
          isFeatured ? "text-white" : "text-primary-container"
        }`}
      />
      <h2 className="font-headline text-5xl font-black uppercase">
        {stat.value}
      </h2>
      <p className="font-headline text-lg font-bold uppercase text-inherit">
        {stat.label}
      </p>
    </motion.article>
  );
}
