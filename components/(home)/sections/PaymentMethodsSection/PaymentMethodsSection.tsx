"use client";

import { motion } from "framer-motion";
import PaymentMethodCard from "@/components/ui/PaymentMethodCard";
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
      <motion.div
        className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"
        variants={revealVariants}>
        <div className="space-y-2">
          <p className="font-headline text-xs font-black uppercase tracking-[0.2em] text-primary-container">
            Payment
          </p>
          <h2 className="font-headline text-3xl font-black leading-[1.05] tracking-tight text-on-background sm:text-4xl">
            Pay the way you already do.
          </h2>
        </div>
        <p className="max-w-sm text-sm text-on-surface-variant sm:text-right sm:text-base">
          Instant, automated checkout across Indonesia&rsquo;s most-used rails.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4"
        variants={containerVariants}>
        {paymentMethods.map((method) => (
          <PaymentMethodCard key={method.label} method={method} />
        ))}
      </motion.div>
    </motion.section>
  );
}
