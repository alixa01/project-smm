"use client";

import { AnimatePresence, motion } from "framer-motion";
import LucideIcon from "@/components/ui/LucideIcon";
import { revealVariants } from "@/lib/motion";
import type { FaqItem } from "@/types/landing";

type FaqAccordionItemProps = {
  item: FaqItem;
  index: number;
  isOpen: boolean;
  onToggle: (index: number) => void;
};

export default function FaqAccordionItem({
  item,
  index,
  isOpen,
  onToggle,
}: FaqAccordionItemProps) {
  const isFeatured = item.isFeatured === true;
  const panelId = `faq-panel-${index}`;

  return (
    <motion.div
      className={`neo-border neo-shadow overflow-hidden ${
        isFeatured ? "bg-primary-container" : "bg-white"
      }`}
      variants={revealVariants}>
      <button
        aria-controls={panelId}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 p-6 text-left"
        onClick={() => onToggle(index)}
        type="button">
        <span
          className={`font-headline text-lg font-bold uppercase sm:text-xl ${
            isFeatured ? "text-white" : "text-black"
          }`}>
          {index + 1}. {item.question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          className={isFeatured ? "text-white" : "text-black"}>
          <LucideIcon name="chevron-down" className="text-3xl" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            animate={{ height: "auto", opacity: 1 }}
            className="border-t-[3px] border-black bg-surface-container-low"
            exit={{ height: 0, opacity: 0 }}
            id={panelId}
            initial={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}>
            <p className="px-6 py-5 leading-7 text-on-surface-variant">
              {item.answer}
            </p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.div>
  );
}
