"use client";

import { motion } from "framer-motion";
import StatCard from "@/components/ui/StatCard";
import { stats } from "@/lib/landing-content";
import { containerVariants, revealVariants } from "@/lib/motion";

export default function StatsSection() {
  return (
    <motion.section
      className="space-y-8"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}>
      <motion.div
        className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"
        variants={revealVariants}>
        <div className="space-y-2">
          <p className="font-headline text-xs font-black uppercase tracking-[0.2em] text-primary-container">
            By the numbers
          </p>
          <h2 className="font-headline text-3xl font-black leading-[1.05] tracking-tight text-on-background sm:text-4xl">
            Scale, measured.
          </h2>
        </div>
        <p className="max-w-sm text-sm text-on-surface-variant sm:text-right sm:text-base">
          Live metrics from the platform powering thousands of growth
          campaigns daily.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 gap-5 md:grid-cols-3"
        variants={containerVariants}>
        {stats.map((stat) => (
          <StatCard key={stat.label} stat={stat} />
        ))}
      </motion.div>
    </motion.section>
  );
}
