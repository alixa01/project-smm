"use client";

import { MotionConfig } from "framer-motion";
import RegisterForm from "@/components/(register)/sections/RegisterForm/RegisterForm";
import AuthBrandPanel from "@/components/layouts/AuthBrandPanel/AuthBrandPanel";
import { registerBrand, registerForm } from "@/lib/auth-content";

type RegisterPageProps = {
  siteName: string;
};

export default function RegisterPage({ siteName }: RegisterPageProps) {
  return (
    <MotionConfig reducedMotion="user">
      <div className="flex h-screen max-h-screen flex-col overflow-hidden bg-background text-on-background md:flex-row">
        <RegisterForm siteName={siteName} content={registerForm} />
        <AuthBrandPanel
          siteName={siteName}
          content={registerBrand}
          side="right"
          focalIcon="rocket"
        />
      </div>
    </MotionConfig>
  );
}
