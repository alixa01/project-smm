"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type NeoButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "surface";
  size?: "default" | "large";
  className?: string;
};

export default function NeoButton({
  children,
  href,
  variant = "primary",
  size = "default",
  className = "",
}: NeoButtonProps) {
  const variantClass =
    variant === "primary"
      ? "bg-primary-container text-white"
      : "bg-surface text-on-surface";
  const sizeClass =
    size === "large" ? "sm:px-12 sm:py-6 sm:text-2xl" : "sm:text-lg";
  const classes = [
    "neo-border",
    "neo-shadow",
    "font-headline",
    "inline-flex",
    "items-center",
    "justify-center",
    "gap-2",
    "px-7",
    "py-4",
    "text-base",
    "font-black",
    "uppercase",
    "sm:px-8",
    variantClass,
    sizeClass,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <motion.a
      className={classes}
      href={href}
      whileHover={{ x: 3, y: 3, boxShadow: "3px 3px 0 0 #181c20" }}
      whileTap={{ x: 6, y: 6, boxShadow: "0px 0px 0 0 #181c20" }}>
      {children}
    </motion.a>
  );
}
