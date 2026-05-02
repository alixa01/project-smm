import type { ServicePlan, ServicesHeroContent } from "@/types/services";

export const servicesHero: ServicesHeroContent = {
  eyebrow: "Explosive Growth",
  eyebrowIcon: "flame",
  title: "Dominate Your",
  highlight: "Social Niche.",
  description:
    "No soft metrics. Just raw numbers, brutal engagement, and absolute authority across all major platforms. Pick your battlefield below.",
};

export const servicePlans: ServicePlan[] = [
  {
    id: "instagram",
    name: "Instagram",
    tagline: "Visual Authority",
    icon: "camera",
    features: ["Real Followers", "High-Impact Likes", "Reel Views"],
    startingPrice: "Rp2.000",
    priceSuffix: "Starting at",
    ctaLabel: "Buy Now",
    ctaHref: "/#signup",
    variant: "pink",
  },
  {
    id: "tiktok",
    name: "TikTok",
    tagline: "Viral Velocity",
    icon: "play-circle",
    features: ["Massive Views", "Organic Shares", "Active Followers"],
    startingPrice: "Rp1.000",
    priceSuffix: "Starting at",
    ctaLabel: "Buy Now",
    ctaHref: "/#signup",
    variant: "grey",
  },
  {
    id: "youtube",
    name: "YouTube",
    tagline: "Long-form Dominance",
    icon: "clapperboard",
    features: ["High-Retention Views", "Permanent Subs", "Watch Time Hours"],
    startingPrice: "Rp2.000",
    priceSuffix: "Starting at",
    ctaLabel: "Buy Now",
    ctaHref: "/#signup",
    variant: "green",
  },
];
