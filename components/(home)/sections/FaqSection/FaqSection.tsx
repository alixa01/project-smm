"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";
import FaqAccordionItem from "@/components/ui/FaqAccordionItem";
import SectionHeading from "@/components/layouts/SectionHeading/SectionHeading";
import { useFaqToggle } from "@/hooks/useFaqToggle";
import { buildFaqItems } from "@/lib/landing-content";
import { containerVariants, revealVariants } from "@/lib/motion";

type FaqSectionProps = {
  siteName: string;
};

export default function FaqSection({ siteName }: FaqSectionProps) {
  const faqs = useMemo(() => buildFaqItems(siteName), [siteName]);
  const { openIndexes, toggleIndex } = useFaqToggle([0, 1]);

  return (
    <motion.section
      className="space-y-8"
      id="services"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.18 }}
      variants={containerVariants}>
      <SectionHeading
        title="Frequently Asked Questions"
        variants={revealVariants}
      />

      <motion.div className="space-y-4" variants={containerVariants}>
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
