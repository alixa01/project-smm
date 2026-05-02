import type { ReactNode } from "react";
import SiteFooter from "@/components/layouts/SiteFooter/SiteFooter";
import SiteHeader from "@/components/layouts/SiteHeader/SiteHeader";
import type { FooterLink, NavItem } from "@/types/landing";

type MainLayoutProps = {
  siteName: string;
  navItems: NavItem[];
  footerLinks: FooterLink[];
  children: ReactNode;
};

export default function MainLayout({
  siteName,
  navItems,
  footerLinks,
  children,
}: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-on-background">
      <SiteHeader siteName={siteName} items={navItems} />
      <main className="overflow-hidden pt-20" id="top">
        {children}
      </main>
      <SiteFooter siteName={siteName} links={footerLinks} />
    </div>
  );
}
