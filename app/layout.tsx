import type { Metadata } from "next";
import "./globals.css";

const siteName = process.env.SITE_NAME?.trim() || "SSM.exe";

export const metadata: Metadata = {
  title: `${siteName} - Levelling Up Your Social Presence`,
  description:
    "High-impact social media marketing platform for fast, automated social growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
