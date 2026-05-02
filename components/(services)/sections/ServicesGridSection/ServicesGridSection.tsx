"use client";

import { motion } from "framer-motion";
import ServiceCard from "@/components/ui/ServiceCard";
import { servicePlans } from "@/lib/services-content";
import { containerVariants } from "@/lib/motion";

export default function ServicesGridSection() {
  return (
    <motion.section
      className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={containerVariants}
      aria-label="Service plans">
      {servicePlans.map((plan) => (
        <ServiceCard key={plan.id} plan={plan} />
      ))}
    </motion.section>
  );
}
