"use client";

import { motion } from "framer-motion";
import LucideIcon from "@/components/ui/LucideIcon";
import { revealVariants } from "@/lib/motion";
import type { PaymentMethod } from "@/types/landing";

type PaymentMethodCardProps = {
  method: PaymentMethod;
};

export default function PaymentMethodCard({ method }: PaymentMethodCardProps) {
  const isFeatured = method.isFeatured === true;

  return (
    <motion.article
      className={`neo-border neo-shadow flex min-h-40 flex-col items-center justify-center space-y-3 p-5 text-center ${
        isFeatured
          ? "bg-secondary-container text-on-secondary-container"
          : "bg-white text-black"
      }`}
      variants={revealVariants}
      whileHover={{ y: -4 }}>
      <LucideIcon name={method.icon} className="text-5xl" />
      <span className="font-headline text-base font-bold uppercase sm:text-lg">
        {method.label}
      </span>
    </motion.article>
  );
}
