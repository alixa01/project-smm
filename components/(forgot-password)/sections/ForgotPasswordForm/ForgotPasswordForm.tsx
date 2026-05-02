"use client";

import { motion } from "framer-motion";
import { type FormEvent, useState } from "react";
import LucideIcon from "@/components/ui/LucideIcon";
import NeoInput from "@/components/ui/NeoInput";
import { containerVariants, revealVariants } from "@/lib/motion";
import type { ForgotPasswordFormContent } from "@/types/auth";

type ForgotPasswordFormProps = {
  siteName: string;
  content: ForgotPasswordFormContent;
};

export default function ForgotPasswordForm({
  siteName,
  content,
}: ForgotPasswordFormProps) {
  const [email, setEmail] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState<string | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Placeholder: wire up to your auth backend.
    // eslint-disable-next-line no-console
    console.log("[forgot-password] submit", { email });
    setSubmittedEmail(email.trim());
  };

  const handleResend = () => {
    setSubmittedEmail(null);
  };

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
            {submittedEmail === null ? (
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
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    label={content.emailLabel}
                    placeholder={content.emailPlaceholder}
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />

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
                    <LucideIcon name="mail" className="text-xl" />
                  </motion.button>
                </form>
              </>
            ) : (
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
                  <p className="inline-flex max-w-full items-center gap-2 truncate font-headline text-sm font-bold text-black">
                    <LucideIcon
                      name="mail"
                      className="shrink-0 text-base text-primary-container"
                    />
                    <span className="truncate">{submittedEmail}</span>
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleResend}
                  className="neo-border font-headline inline-flex w-full items-center justify-center gap-2 bg-white px-4 py-2.5 text-sm font-bold uppercase tracking-wide text-black transition-all duration-150 hover:-translate-y-0.5 hover:bg-primary-container hover:text-white">
                  {content.resendLabel}
                </button>
              </div>
            )}

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
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
