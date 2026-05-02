"use client";

import { motion } from "framer-motion";
import LucideIcon from "@/components/ui/LucideIcon";
import { revealVariants } from "@/lib/motion";
import type { PaymentMethod } from "@/types/landing";

type PaymentMethodCardProps = {
  method: PaymentMethod;
};

export default function PaymentMethodCard({ method }: PaymentMethodCardProps) {
  return (
    <motion.article
      className="neo-border neo-shadow-sm flex items-center gap-3 bg-white px-4 py-3 text-black transition-shadow duration-200 hover:shadow-[6px_6px_0_0_#181c20] sm:gap-4 sm:px-5 sm:py-4"
      variants={revealVariants}
      whileHover={{ y: -2 }}>
      <span className="flex h-10 w-10 shrink-0 items-center justify-center border-[3px] border-black bg-background">
        <LucideIcon name={method.icon} className="text-xl text-black" />
      </span>
      <span className="font-headline text-sm font-bold tracking-wide text-black sm:text-base">
        {method.label}
      </span>
    </motion.article>
  );
}
