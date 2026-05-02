"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

type SectionHeadingProps = {
  title: string;
  variants?: Variants;
};

export default function SectionHeading({
  title,
  variants,
}: SectionHeadingProps) {
  return (
    <motion.div
      className="flex items-center justify-between border-b-[3px] border-black pb-4"
      variants={variants}>
      <h2 className="font-headline text-3xl font-black uppercase sm:text-4xl">
        {title}
      </h2>
    </motion.div>
  );
}
