import type { LucideIconName } from "@/components/ui/LucideIcon";

export type ServiceVariant = "pink" | "grey" | "green";

export type ServicePlan = {
  id: string;
  name: string;
  tagline: string;
  icon: LucideIconName;
  features: string[];
  startingPrice: string;
  priceSuffix?: string;
  ctaLabel: string;
  ctaHref: string;
  variant: ServiceVariant;
};

export type ServicesHeroContent = {
  eyebrow: string;
  eyebrowIcon: LucideIconName;
  title: string;
  highlight: string;
  description: string;
};
