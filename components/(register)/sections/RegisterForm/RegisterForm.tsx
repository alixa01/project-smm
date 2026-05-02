"use client";

import { motion } from "framer-motion";
import { type FormEvent, useState } from "react";
import LucideIcon from "@/components/ui/LucideIcon";
import NeoInput from "@/components/ui/NeoInput";
import { containerVariants, revealVariants } from "@/lib/motion";
import type { RegisterFormContent } from "@/types/auth";

type RegisterFormProps = {
  siteName: string;
  content: RegisterFormContent;
};

export default function RegisterForm({ siteName, content }: RegisterFormProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password.length < 8) {
      setError(content.minLengthError);
      return;
    }
    if (password !== confirmPassword) {
      setError(content.mismatchError);
      return;
    }
    setError(null);
    // Placeholder: wire up to your auth backend.
    // eslint-disable-next-line no-console
    console.log("[register] submit", { fullName, email });
  };

  const confirmInvalid =
    error === content.mismatchError ||
    (confirmPassword.length > 0 && confirmPassword !== password);

  return (
    <motion.section
      className="flex flex-1 overflow-y-auto"
      initial="hidden"
      animate="show"
      variants={containerVariants}>
      <div className="flex min-h-full w-full items-center justify-center p-4 sm:p-8 lg:p-10">
        <div className="w-full max-w-md space-y-4">
          <motion.div
            className="text-center md:hidden"
            variants={revealVariants}>
            <a
              href="/"
              className="font-headline text-lg font-black uppercase italic tracking-tighter text-black">
              {siteName}
            </a>
          </motion.div>

          <motion.div
            className="neo-border neo-shadow space-y-5 bg-white p-5 sm:p-6"
            variants={revealVariants}>
            <div className="space-y-1 text-center">
              <h2 className="font-headline text-2xl font-black uppercase leading-tight text-black sm:text-3xl">
                {content.heading}
              </h2>
              <p className="text-sm font-medium text-on-surface-variant">
                {content.subheading}
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-4"
              aria-label={content.heading}>
            <NeoInput
              name="fullName"
              type="text"
              autoComplete="name"
              required
              label={content.fullNameLabel}
              placeholder={content.fullNamePlaceholder}
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
            />

            <NeoInput
              name="email"
              type="email"
              autoComplete="email"
              required
              label={content.emailLabel}
              placeholder={content.emailPlaceholder}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />

            <NeoInput
              name="password"
              type={showPassword ? "text" : "password"}
              autoComplete="new-password"
              required
              minLength={8}
              label={content.passwordLabel}
              placeholder={content.passwordPlaceholder}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              trailing={
                <button
                  type="button"
                  aria-pressed={showPassword}
                  aria-label={
                    showPassword
                      ? content.hidePasswordLabel
                      : content.showPasswordLabel
                  }
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="flex h-full w-12 items-center justify-center bg-white text-black transition-colors hover:bg-primary-container hover:text-white">
                  <LucideIcon
                    name={showPassword ? "eye-off" : "eye"}
                    className="text-xl"
                  />
                </button>
              }
            />

            <NeoInput
              name="confirmPassword"
              type={showConfirm ? "text" : "password"}
              autoComplete="new-password"
              required
              minLength={8}
              aria-invalid={confirmInvalid || undefined}
              label={content.confirmPasswordLabel}
              placeholder={content.confirmPasswordPlaceholder}
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              trailing={
                <button
                  type="button"
                  aria-pressed={showConfirm}
                  aria-label={
                    showConfirm
                      ? content.hidePasswordLabel
                      : content.showPasswordLabel
                  }
                  onClick={() => setShowConfirm((prev) => !prev)}
                  className="flex h-full w-12 items-center justify-center bg-white text-black transition-colors hover:bg-primary-container hover:text-white">
                  <LucideIcon
                    name={showConfirm ? "eye-off" : "eye"}
                    className="text-xl"
                  />
                </button>
              }
            />

            {error ? (
              <p
                role="alert"
                className="neo-border bg-error-container px-4 py-3 text-sm font-semibold text-on-error-container">
                {error}
              </p>
            ) : null}

              <motion.button
                type="submit"
                className="neo-border neo-shadow font-headline mt-1 flex w-full items-center justify-center gap-3 bg-primary-container px-6 py-3 text-lg font-black uppercase text-white sm:text-xl"
                whileHover={{ x: 3, y: 3, boxShadow: "3px 3px 0 0 #181c20" }}
                whileTap={{ x: 6, y: 6, boxShadow: "0px 0px 0 0 #181c20" }}>
                {content.submitLabel}
                <LucideIcon name="arrow-right" className="text-xl" />
              </motion.button>
            </form>

            <div className="border-t-[3px] border-black pt-4 text-center">
              <p className="text-sm font-medium text-on-surface">
                {content.footerText}{" "}
                <a
                  href={content.loginHref}
                  className="font-headline text-sm font-black uppercase tracking-wide text-primary underline decoration-[3px] underline-offset-4 hover:text-primary-container sm:text-base">
                  {content.loginLabel}
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
