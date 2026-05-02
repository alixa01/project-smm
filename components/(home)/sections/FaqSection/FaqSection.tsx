"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";
import FaqAccordionItem from "@/components/ui/FaqAccordionItem";
import { useFaqToggle } from "@/hooks/useFaqToggle";
import { buildFaqItems } from "@/lib/landing-content";
import { containerVariants, revealVariants } from "@/lib/motion";

type FaqSectionProps = {
  siteName: string;
};

export default function FaqSection({ siteName }: FaqSectionProps) {
  const faqs = useMemo(() => buildFaqItems(siteName), [siteName]);
  const { openIndexes, toggleIndex } = useFaqToggle([0]);

  return (
    <motion.section
      className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16"
      id="faq"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={containerVariants}>
      <motion.div className="space-y-4 lg:sticky lg:top-28 lg:self-start" variants={revealVariants}>
        <p className="font-headline text-xs font-black uppercase tracking-[0.2em] text-primary-container">
          FAQ
        </p>
        <h2 className="font-headline text-4xl font-black leading-[1.05] tracking-tight text-on-background sm:text-5xl">
          Everything you need to know.
        </h2>
        <p className="max-w-md text-base leading-relaxed text-on-surface-variant sm:text-lg">
          Straight answers about how {siteName} delivers growth, secures your
          account, and keeps you in control.
        </p>
      </motion.div>

      <motion.div className="space-y-3" variants={containerVariants}>
        {faqs.map((faq, index) => (
          <FaqAccordionItem
            key={faq.question}
            item={faq}
            index={index}
            isOpen={openIndexes.includes(index)}
            onToggle={toggleIndex}
          />
        ))}
      </motion.div>
    </motion.section>
  );
}
