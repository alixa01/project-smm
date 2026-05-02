import LandingPage from "@/components/(home)/LandingPage";
import MainLayout from "@/components/layouts/MainLayout";
import { footerLinks, navItems } from "@/lib/landing-content";
import { getSiteName } from "@/lib/site";

export default function Home() {
  const siteName = getSiteName();

  return (
    <MainLayout
      siteName={siteName}
      navItems={navItems}
      footerLinks={footerLinks}>
      <LandingPage siteName={siteName} />
    </MainLayout>
  );
}
