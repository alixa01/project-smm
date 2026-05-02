"use client";

import { motion } from "framer-motion";
import type { NavItem } from "@/types/landing";

type SiteHeaderProps = {
  siteName: string;
  items: NavItem[];
};

export default function SiteHeader({ siteName, items }: SiteHeaderProps) {
  return (
    <motion.nav
      className="fixed left-0 top-0 z-50 flex h-20 w-full items-center justify-between border-b-[3px] border-black bg-white px-4 shadow-[6px_6px_0_0_#181c20] sm:px-6"
      initial={{ y: -96 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}>
      <a
        className="font-headline max-w-[52vw] truncate text-xl font-black uppercase text-black sm:max-w-none sm:text-2xl"
        href="/">
        {siteName}
      </a>

      <div className="hidden items-center space-x-6 md:flex">
        {items.map((item) => (
          <a
            className={`font-headline px-2 py-1 font-bold uppercase transition-colors duration-100 hover:bg-primary-container hover:text-white ${
              item.isActive
                ? "text-primary underline decoration-[3px] underline-offset-4"
                : "text-black"
            }`}
            href={item.href}
            key={item.label}>
            {item.label}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        <a
          className="font-headline hidden border-[3px] border-transparent px-4 py-2 font-bold uppercase text-black transition-colors duration-100 hover:border-black hover:bg-primary-container hover:text-white sm:block"
          href="/login">
          Login
        </a>
        <motion.a
          className="neo-border neo-shadow font-headline bg-primary-container px-3 py-2 font-bold uppercase text-white sm:px-4"
          href="/register"
          whileHover={{ x: 3, y: 3, boxShadow: "3px 3px 0 0 #181c20" }}
          whileTap={{ x: 6, y: 6, boxShadow: "0px 0px 0 0 #181c20" }}>
          Sign Up
        </motion.a>
      </div>
    </motion.nav>
  );
}
