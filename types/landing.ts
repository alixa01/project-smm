import type { LucideIconName } from "@/components/ui/LucideIcon";

export type NavItem = {
  label: string;
  href: string;
  isActive?: boolean;
};

export type StatItem = {
  icon: LucideIconName;
  value: string;
  label: string;
  isFeatured?: boolean;
};

export type PaymentMethod = {
  icon: LucideIconName;
  label: string;
  isFeatured?: boolean;
};

export type FaqItem = {
  question: string;
  answer: string;
  isFeatured?: boolean;
};

export type FooterLink = {
  label: string;
  href: string;
  isPrimary?: boolean;
};
