import type { LucideIconName } from "@/components/ui/LucideIcon";

export type AuthBrandContent = {
  eyebrow: string;
  eyebrowIcon: LucideIconName;
  title: string;
  description: string;
  backToSiteLabel: string;
};

/**
 * @deprecated Use `AuthBrandContent` instead. Kept as an alias for back-compat.
 */
export type LoginBrandContent = AuthBrandContent;

export type LoginFormContent = {
  heading: string;
  subheading: string;
  emailLabel: string;
  emailPlaceholder: string;
  passwordLabel: string;
  passwordPlaceholder: string;
  forgotLabel: string;
  forgotHref: string;
  rememberLabel: string;
  submitLabel: string;
  footerText: string;
  signUpLabel: string;
  signUpHref: string;
  showPasswordLabel: string;
  hidePasswordLabel: string;
};

export type RegisterFormContent = {
  heading: string;
  subheading: string;
  fullNameLabel: string;
  fullNamePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  passwordLabel: string;
  passwordPlaceholder: string;
  confirmPasswordLabel: string;
  confirmPasswordPlaceholder: string;
  submitLabel: string;
  footerText: string;
  loginLabel: string;
  loginHref: string;
  showPasswordLabel: string;
  hidePasswordLabel: string;
  mismatchError: string;
  minLengthError: string;
};

export type ForgotPasswordFormContent = {
  heading: string;
  subheading: string;
  emailLabel: string;
  emailPlaceholder: string;
  submitLabel: string;
  backLabel: string;
  backHref: string;
  successHeading: string;
  successBody: string;
  resendLabel: string;
};

export type ResetPasswordFormContent = {
  heading: string;
  subheading: string;
  passwordLabel: string;
  passwordPlaceholder: string;
  confirmPasswordLabel: string;
  confirmPasswordPlaceholder: string;
  submitLabel: string;
  backLabel: string;
  backHref: string;
  showPasswordLabel: string;
  hidePasswordLabel: string;
  mismatchError: string;
  minLengthError: string;
  successHeading: string;
  successBody: string;
  successCtaLabel: string;
  successCtaHref: string;
};
