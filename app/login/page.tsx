import type { Metadata } from "next";
import LoginPage from "@/components/(login)/LoginPage";
import { getSiteName } from "@/lib/site";

export function generateMetadata(): Metadata {
  const siteName = getSiteName();
  return {
    title: `${siteName} - Login`,
    description: `Sign in to your ${siteName} dashboard to manage your social growth campaigns.`,
  };
}

export default function Login() {
  const siteName = getSiteName();
  return <LoginPage siteName={siteName} />;
}
