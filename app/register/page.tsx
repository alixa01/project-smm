import type { Metadata } from "next";
import RegisterPage from "@/components/(register)/RegisterPage";
import { getSiteName } from "@/lib/site";

export function generateMetadata(): Metadata {
  const siteName = getSiteName();
  return {
    title: `${siteName} - Register`,
    description: `Create your ${siteName} account and start engineering social growth in under 60 seconds.`,
  };
}

export default function Register() {
  const siteName = getSiteName();
  return <RegisterPage siteName={siteName} />;
}
