import type { Metadata } from "next";

const FALLBACK_SITE_NAME = "SMM NUSANTARA";

export const SITE_TAGLINE = "Levelling Up Your Social Presence";
export const SITE_DESCRIPTION =
  "High-impact social media marketing platform for fast, automated social growth.";

export function getSiteName(): string {
  const name = process.env.SITE_NAME?.trim();
  return name && name.length > 0 ? name : FALLBACK_SITE_NAME;
}

export function buildSiteMetadata(siteName: string): Metadata {
  return {
    title: `${siteName} - ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
  };
}
