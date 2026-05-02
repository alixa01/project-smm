"use client";

import { motion } from "framer-motion";
import { type FormEvent, useState } from "react";
import LucideIcon from "@/components/ui/LucideIcon";
import NeoCheckbox from "@/components/ui/NeoCheckbox";
import NeoInput from "@/components/ui/NeoInput";
import { containerVariants, revealVariants } from "@/lib/motion";
import type { LoginFormContent } from "@/types/auth";

type LoginFormProps = {
  siteName: string;
  content: LoginFormContent;
};

export default function LoginForm({ siteName, content }: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Placeholder: wire up to your auth backend.
    // eslint-disable-next-line no-console
    console.log("[login] submit", { email, remember });
  };

  return (
    <motion.section
      className="flex flex-1 items-center justify-center p-6 sm:p-10 lg:p-14"
      initial="hidden"
      animate="show"
      variants={containerVariants}>
      <div className="w-full max-w-md space-y-8">
        <motion.div
          className="text-center md:hidden"
          variants={revealVariants}>
          <a
            href="/"
            className="font-headline text-2xl font-black uppercase italic tracking-tighter text-black">
            {siteName}
          </a>
        </motion.div>

        <motion.div
          className="neo-border neo-shadow space-y-7 bg-white p-6 sm:p-8"
          variants={revealVariants}>
          <div className="space-y-2 text-center">
            <h2 className="font-headline text-3xl font-black uppercase leading-none text-black sm:text-4xl">
              {content.heading}
            </h2>
            <p className="text-sm font-medium text-on-surface-variant sm:text-base">
              {content.subheading}
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
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

            <NeoInput
              name="password"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              required
              label={content.passwordLabel}
              placeholder={content.passwordPlaceholder}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              labelAction={
                <a
                  href={content.forgotHref}
                  className="font-headline text-xs font-bold uppercase tracking-wider text-primary underline decoration-[3px] underline-offset-4 hover:text-primary-container">
                  {content.forgotLabel}
                </a>
              }
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

            <div className="pt-1">
              <NeoCheckbox
                name="remember"
                label={content.rememberLabel}
                checked={remember}
                onChange={setRemember}
              />
            </div>

            <motion.button
              type="submit"
              className="neo-border neo-shadow font-headline mt-2 flex w-full items-center justify-center gap-3 bg-primary-container px-6 py-4 text-xl font-black uppercase text-white sm:text-2xl"
              whileHover={{ x: 3, y: 3, boxShadow: "3px 3px 0 0 #181c20" }}
              whileTap={{ x: 6, y: 6, boxShadow: "0px 0px 0 0 #181c20" }}>
              {content.submitLabel}
              <LucideIcon name="log-in" className="text-2xl" />
            </motion.button>
          </form>

          <div className="border-t-[3px] border-black pt-5 text-center">
            <p className="text-sm font-medium text-on-surface sm:text-base">
              {content.footerText}{" "}
              <a
                href={content.signUpHref}
                className="font-headline text-base font-black uppercase tracking-wide text-primary underline decoration-[3px] underline-offset-4 hover:text-primary-container sm:text-lg">
                {content.signUpLabel}
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
