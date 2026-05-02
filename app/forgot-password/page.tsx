import type { Metadata } from "next";
import ForgotPasswordPage from "@/components/(forgot-password)/ForgotPasswordPage";
import { getSiteName } from "@/lib/site";

export function generateMetadata(): Metadata {
  const siteName = getSiteName();
  return {
    title: `${siteName} - Forgot Password`,
    description: `Request a password reset link for your ${siteName} account.`,
  };
}

export default function ForgotPassword() {
  const siteName = getSiteName();
  return <ForgotPasswordPage siteName={siteName} />;
}
