import type {
  AuthBrandContent,
  ForgotPasswordFormContent,
  LoginFormContent,
  RegisterFormContent,
  ResetPasswordFormContent,
} from "@/types/auth";

export const loginBrand: AuthBrandContent = {
  eyebrow: "Authenticated Access",
  eyebrowIcon: "lock",
  title: "Welcome Back to Dominance",
  description:
    "Access your dashboard to command your digital authority. No compromises, just results.",
  backToSiteLabel: "Back to site",
};

export const loginForm: LoginFormContent = {
  heading: "Login",
  subheading: "Enter your credentials to proceed.",
  emailLabel: "Email Address",
  emailPlaceholder: "you@dominance.com",
  passwordLabel: "Password",
  passwordPlaceholder: "••••••••",
  forgotLabel: "Forgot?",
  forgotHref: "/forgot-password",
  rememberLabel: "Remember Me",
  submitLabel: "Login",
  footerText: "Don't have an account?",
  signUpLabel: "Sign Up",
  signUpHref: "/register",
  showPasswordLabel: "Show password",
  hidePasswordLabel: "Hide password",
};

export const registerBrand: AuthBrandContent = {
  eyebrow: "Join the Platform",
  eyebrowIcon: "flame",
  title: "Ignite Your Social Authority",
  description:
    "Create your account in under 60 seconds. Plug into engineered growth across every major platform — no credit card required.",
  backToSiteLabel: "Back to site",
};

export const registerForm: RegisterFormContent = {
  heading: "Create Account",
  subheading: "Set up your account in under a minute.",
  fullNameLabel: "Full Name",
  fullNamePlaceholder: "Jane Dominance",
  emailLabel: "Email Address",
  emailPlaceholder: "you@dominance.com",
  passwordLabel: "Password",
  passwordPlaceholder: "At least 8 characters",
  confirmPasswordLabel: "Confirm Password",
  confirmPasswordPlaceholder: "Repeat your password",
  submitLabel: "Create Account",
  footerText: "Already have an account?",
  loginLabel: "Log In",
  loginHref: "/login",
  showPasswordLabel: "Show password",
  hidePasswordLabel: "Hide password",
  mismatchError: "Passwords don't match.",
  minLengthError: "Password must be at least 8 characters.",
};

export const forgotPasswordBrand: AuthBrandContent = {
  eyebrow: "Recover Access",
  eyebrowIcon: "mail",
  title: "Locked out? We've got you.",
  description:
    "Enter the email on your account and we'll send a secure link to reset your password — usually arrives within a minute.",
  backToSiteLabel: "Back to site",
};

export const forgotPasswordForm: ForgotPasswordFormContent = {
  heading: "Forgot password?",
  subheading: "We'll email you a reset link.",
  emailLabel: "Email Address",
  emailPlaceholder: "you@dominance.com",
  submitLabel: "Send reset link",
  backLabel: "Back to login",
  backHref: "/login",
  successHeading: "Check your email",
  successBody:
    "If an account exists for that address, a reset link is on its way. It expires in 30 minutes.",
  resendLabel: "Send to a different email",
};

export const resetPasswordBrand: AuthBrandContent = {
  eyebrow: "New Credentials",
  eyebrowIcon: "shield-check",
  title: "Set a fresh password.",
  description:
    "Pick something you'll remember — at least 8 characters. You'll be signed in right after.",
  backToSiteLabel: "Back to site",
};

export const resetPasswordForm: ResetPasswordFormContent = {
  heading: "Reset password",
  subheading: "Choose a new password for your account.",
  passwordLabel: "New Password",
  passwordPlaceholder: "At least 8 characters",
  confirmPasswordLabel: "Confirm New Password",
  confirmPasswordPlaceholder: "Repeat your new password",
  submitLabel: "Update password",
  backLabel: "Back to login",
  backHref: "/login",
  showPasswordLabel: "Show password",
  hidePasswordLabel: "Hide password",
  mismatchError: "Passwords don't match.",
  minLengthError: "Password must be at least 8 characters.",
  successHeading: "Password updated",
  successBody: "You can now sign in with your new password.",
  successCtaLabel: "Go to login",
  successCtaHref: "/login",
};
