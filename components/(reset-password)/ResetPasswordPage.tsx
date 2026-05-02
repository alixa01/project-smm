"use client";

import { MotionConfig } from "framer-motion";
import ResetPasswordForm from "@/components/(reset-password)/sections/ResetPasswordForm/ResetPasswordForm";
import AuthBrandPanel from "@/components/layouts/AuthBrandPanel/AuthBrandPanel";
import { resetPasswordBrand, resetPasswordForm } from "@/lib/auth-content";

type ResetPasswordPageProps = {
  siteName: string;
};

export default function ResetPasswordPage({
  siteName,
}: ResetPasswordPageProps) {
  return (
    <MotionConfig reducedMotion="user">
      <div className="flex h-screen max-h-screen flex-col overflow-hidden bg-background text-on-background md:flex-row">
        <ResetPasswordForm siteName={siteName} content={resetPasswordForm} />
        <AuthBrandPanel
          siteName={siteName}
          content={resetPasswordBrand}
          side="right"
          focalIcon="shield-check"
        />
      </div>
    </MotionConfig>
  );
}
