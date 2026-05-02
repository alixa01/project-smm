"use client";

import { motion } from "framer-motion";
import { type FormEvent, useState } from "react";
import LucideIcon from "@/components/ui/LucideIcon";
import NeoInput from "@/components/ui/NeoInput";
import { containerVariants, revealVariants } from "@/lib/motion";
import type { ResetPasswordFormContent } from "@/types/auth";

type ResetPasswordFormProps = {
  siteName: string;
  content: ResetPasswordFormContent;
};

export default function ResetPasswordForm({
  siteName,
  content,
}: ResetPasswordFormProps) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [succeeded, setSucceeded] = useState(false);

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
    console.log("[reset-password] submit");
    setSucceeded(true);
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
            {succeeded ? (
              <div className="space-y-5 text-center" aria-live="polite">
                <div
                  aria-hidden="true"
                  className="mx-auto flex h-16 w-16 items-center justify-center border-[3px] border-black bg-secondary-container shadow-[4px_4px_0_0_#181c20]">
                  <LucideIcon
                    name="check-circle-2"
                    className="text-3xl text-on-secondary-container"
                  />
                </div>

                <div className="space-y-2">
                  <h2 className="font-headline text-2xl font-black uppercase leading-tight text-black sm:text-3xl">
                    {content.successHeading}
                  </h2>
                  <p className="text-sm font-medium leading-relaxed text-on-surface-variant">
                    {content.successBody}
                  </p>
                </div>

                <motion.a
                  href={content.successCtaHref}
                  className="neo-border neo-shadow font-headline flex w-full items-center justify-center gap-3 bg-primary-container px-6 py-3 text-lg font-black uppercase text-white sm:text-xl"
                  whileHover={{
                    x: 3,
                    y: 3,
                    boxShadow: "3px 3px 0 0 #181c20",
                  }}
                  whileTap={{
                    x: 6,
                    y: 6,
                    boxShadow: "0px 0px 0 0 #181c20",
                  }}>
                  {content.successCtaLabel}
                  <LucideIcon name="log-in" className="text-xl" />
                </motion.a>
              </div>
            ) : (
              <>
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
                    onChange={(event) =>
                      setConfirmPassword(event.target.value)
                    }
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
                    whileHover={{
                      x: 3,
                      y: 3,
                      boxShadow: "3px 3px 0 0 #181c20",
                    }}
                    whileTap={{
                      x: 6,
                      y: 6,
                      boxShadow: "0px 0px 0 0 #181c20",
                    }}>
                    {content.submitLabel}
                    <LucideIcon name="shield-check" className="text-xl" />
                  </motion.button>
                </form>
              </>
            )}

            {!succeeded ? (
              <div className="border-t-[3px] border-black pt-4 text-center">
                <a
                  href={content.backHref}
                  className="font-headline inline-flex items-center gap-2 text-sm font-black uppercase tracking-wide text-primary underline decoration-[3px] underline-offset-4 hover:text-primary-container sm:text-base">
                  <LucideIcon
                    name="arrow-right"
                    className="rotate-180 text-base"
                  />
                  {content.backLabel}
                </a>
              </div>
            ) : null}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
