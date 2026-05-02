"use client";

import { MotionConfig } from "framer-motion";
import LoginForm from "@/components/(login)/sections/LoginForm/LoginForm";
import AuthBrandPanel from "@/components/layouts/AuthBrandPanel/AuthBrandPanel";
import { loginBrand, loginForm } from "@/lib/auth-content";

type LoginPageProps = {
  siteName: string;
};

export default function LoginPage({ siteName }: LoginPageProps) {
  return (
    <MotionConfig reducedMotion="user">
      <div className="flex min-h-screen flex-col bg-background text-on-background md:flex-row">
        <AuthBrandPanel
          siteName={siteName}
          content={loginBrand}
          side="left"
          focalIcon="lock"
        />
        <LoginForm siteName={siteName} content={loginForm} />
      </div>
    </MotionConfig>
  );
}
