"use client";

import { motion } from "framer-motion";
import PaymentMethodCard from "@/components/ui/PaymentMethodCard";
import SectionHeading from "@/components/layouts/SectionHeading/SectionHeading";
import { paymentMethods } from "@/lib/landing-content";
import { containerVariants, revealVariants } from "@/lib/motion";

export default function PaymentMethodsSection() {
  return (
    <motion.section
      className="space-y-8"
      id="pricing"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}>
      <SectionHeading
        title="Supported Payment Methods"
        variants={revealVariants}
      />

      <motion.div
        className="grid grid-cols-2 gap-6 md:grid-cols-4"
        variants={containerVariants}>
        {paymentMethods.map((method) => (
          <PaymentMethodCard key={method.label} method={method} />
        ))}
      </motion.div>
    </motion.section>
  );
}
