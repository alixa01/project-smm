import LandingPage from "./landing-page";

const fallbackSiteName = "SMM NUSANTARA";

function getSiteName() {
  return process.env.SITE_NAME?.trim() || fallbackSiteName;
}

export default function Home() {
  return <LandingPage siteName={getSiteName()} />;
}
