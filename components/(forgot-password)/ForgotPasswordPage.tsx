"use client";

import { MotionConfig } from "framer-motion";
import ForgotPasswordForm from "@/components/(forgot-password)/sections/ForgotPasswordForm/ForgotPasswordForm";
import AuthBrandPanel from "@/components/layouts/AuthBrandPanel/AuthBrandPanel";
import { forgotPasswordBrand, forgotPasswordForm } from "@/lib/auth-content";

type ForgotPasswordPageProps = {
  siteName: string;
};

export default function ForgotPasswordPage({
  siteName,
}: ForgotPasswordPageProps) {
  return (
    <MotionConfig reducedMotion="user">
      <div className="flex h-screen max-h-screen flex-col overflow-hidden bg-background text-on-background md:flex-row">
        <AuthBrandPanel
          siteName={siteName}
          content={forgotPasswordBrand}
          side="left"
          focalIcon="mail"
        />
        <ForgotPasswordForm siteName={siteName} content={forgotPasswordForm} />
      </div>
    </MotionConfig>
  );
}
