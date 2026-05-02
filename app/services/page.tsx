import ServicesPage from "@/components/(services)/ServicesPage";
import MainLayout from "@/components/layouts/MainLayout";
import { buildNavItems, footerLinks } from "@/lib/landing-content";
import { getSiteName } from "@/lib/site";

export default function Services() {
  const siteName = getSiteName();
  const navItems = buildNavItems("/services");

  return (
    <MainLayout
      siteName={siteName}
      navItems={navItems}
      footerLinks={footerLinks}>
      <ServicesPage />
    </MainLayout>
  );
}
