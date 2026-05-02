"use client";

import { motion } from "framer-motion";
import LucideIcon from "@/components/ui/LucideIcon";
import { revealVariants } from "@/lib/motion";
import type { ServicePlan, ServiceVariant } from "@/types/services";

type ServiceCardProps = {
  plan: ServicePlan;
};

type VariantStyles = {
  card: string;
  tagline: string;
  priceLabel: string;
  iconHover: string;
};

const variantStyles: Record<ServiceVariant, VariantStyles> = {
  pink: {
    card: "bg-error-container",
    tagline: "text-on-error-container",
    priceLabel: "text-on-error-container",
    iconHover: "group-hover:bg-primary-container",
  },
  grey: {
    card: "bg-surface-container-highest",
    tagline: "text-on-surface-variant",
    priceLabel: "text-on-surface-variant",
    iconHover: "group-hover:bg-secondary-container",
  },
  green: {
    card: "bg-secondary-container",
    tagline: "text-on-secondary-container",
    priceLabel: "text-on-secondary-container",
    iconHover: "group-hover:bg-error-container",
  },
};

export default function ServiceCard({ plan }: ServiceCardProps) {
  const styles = variantStyles[plan.variant];

  return (
    <motion.article
      className={`neo-border neo-shadow group flex h-full flex-col p-6 ${styles.card}`}
      variants={revealVariants}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 280, damping: 20 }}>
      <header className="mb-6 flex items-start justify-between gap-4 border-b-[3px] border-black pb-4">
        <div className="min-w-0">
          <h2 className="font-headline text-4xl font-black uppercase leading-none text-black sm:text-5xl">
            {plan.name}
          </h2>
          <span
            className={`mt-2 block font-headline text-sm font-bold uppercase tracking-wide ${styles.tagline}`}>
            {plan.tagline}
          </span>
        </div>
        <motion.div
          aria-hidden="true"
          className={`flex h-16 w-16 shrink-0 items-center justify-center border-[3px] border-black bg-white shadow-[4px_4px_0_0_#181c20] transition-colors ${styles.iconHover}`}
          whileHover={{ rotate: -6 }}>
          <LucideIcon name={plan.icon} className="text-3xl text-black" />
        </motion.div>
      </header>

      <ul className="mb-8 flex-grow space-y-3">
        {plan.features.map((feature) => (
          <li
            key={feature}
            className="flex items-center gap-3 border-[3px] border-black bg-white px-4 py-3 font-headline text-base font-bold uppercase text-black shadow-[2px_2px_0_0_#181c20] sm:text-lg">
            <LucideIcon
              name="check-square"
              className="text-2xl text-primary-container"
            />
            <span className="truncate">{feature}</span>
          </li>
        ))}
      </ul>

      <div className="space-y-4 border-t-[3px] border-black pt-6">
        <div className="flex items-end justify-between">
          {plan.priceSuffix ? (
            <span
              className={`font-headline text-sm font-bold uppercase ${styles.priceLabel}`}>
              {plan.priceSuffix}
            </span>
          ) : (
            <span aria-hidden="true" />
          )}
          <span className="font-headline text-3xl font-black leading-none text-black sm:text-4xl">
            {plan.startingPrice}
          </span>
        </div>
        <motion.a
          href={plan.ctaHref}
          className="neo-border neo-shadow block bg-primary-container py-4 text-center font-headline text-xl font-black uppercase text-white sm:text-2xl"
          whileHover={{ x: 3, y: 3, boxShadow: "3px 3px 0 0 #181c20" }}
          whileTap={{ x: 6, y: 6, boxShadow: "0px 0px 0 0 #181c20" }}
          aria-label={`${plan.ctaLabel} — ${plan.name}`}>
          {plan.ctaLabel}
        </motion.a>
      </div>
    </motion.article>
  );
}
