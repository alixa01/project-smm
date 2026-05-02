import type { Metadata } from "next";
import ResetPasswordPage from "@/components/(reset-password)/ResetPasswordPage";
import { getSiteName } from "@/lib/site";

export function generateMetadata(): Metadata {
  const siteName = getSiteName();
  return {
    title: `${siteName} - Reset Password`,
    description: `Set a new password for your ${siteName} account.`,
  };
}

export default function ResetPassword() {
  const siteName = getSiteName();
  return <ResetPasswordPage siteName={siteName} />;
}
