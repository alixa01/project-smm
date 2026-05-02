"use client";

import { motion } from "framer-motion";
import StatCard from "@/components/ui/StatCard";
import { stats } from "@/lib/landing-content";
import { containerVariants } from "@/lib/motion";

export default function StatsSection() {
  return (
    <motion.section
      className="grid grid-cols-1 gap-6 md:grid-cols-3"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={containerVariants}>
      {stats.map((stat) => (
        <StatCard key={stat.label} stat={stat} />
      ))}
    </motion.section>
  );
}
