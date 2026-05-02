"use client";

import { motion } from "framer-motion";
import LucideIcon from "@/components/ui/LucideIcon";
import NeoButton from "@/components/ui/NeoButton";
import { containerVariants, revealVariants } from "@/lib/motion";

export default function CallToActionSection() {
  return (
    <motion.section
      className="neo-border neo-shadow relative overflow-hidden bg-white p-8 text-center sm:p-12"
      id="signup"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}>
      <div className="dot-pattern absolute inset-0 opacity-10" />
      <div className="relative z-10 mx-auto max-w-2xl space-y-6">
        <motion.h2
          className="font-headline text-4xl font-black uppercase sm:text-5xl"
          variants={revealVariants}>
          Ready to Dominate?
        </motion.h2>
        <motion.p
          className="text-lg leading-8 text-on-surface-variant sm:text-xl"
          variants={revealVariants}>
          Join thousands of users who have already transformed their digital
          presence. Stop waiting, start growing.
        </motion.p>
        <motion.div
          className="flex justify-center pt-2"
          variants={revealVariants}>
          <NeoButton href="#contact" size="large">
            Get Started Now{" "}
            <LucideIcon name="rocket" className="text-4xl" />
          </NeoButton>
        </motion.div>
      </div>
    </motion.section>
  );
}
