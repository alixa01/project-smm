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
  const panelId = `faq-panel-${index}`;

  return (
    <motion.div
      className={`neo-border overflow-hidden bg-white transition-shadow duration-200 ${
        isOpen ? "neo-shadow" : "neo-shadow-sm"
      }`}
      variants={revealVariants}>
      <button
        aria-controls={panelId}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
        onClick={() => onToggle(index)}
        type="button">
        <span className="font-headline text-base font-bold leading-snug text-black sm:text-lg">
          {item.question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          className={`flex h-9 w-9 shrink-0 items-center justify-center border-[3px] border-black transition-colors ${
            isOpen ? "bg-primary-container text-white" : "bg-white text-black"
          }`}>
          <LucideIcon name="chevron-down" className="text-xl" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            animate={{ height: "auto", opacity: 1 }}
            className="border-t-[3px] border-black"
            exit={{ height: 0, opacity: 0 }}
            id={panelId}
            initial={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}>
            <p className="px-5 py-4 text-base leading-7 text-on-surface-variant sm:px-6 sm:py-5">
              {item.answer}
            </p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.div>
  );
}
