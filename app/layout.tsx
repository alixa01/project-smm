import type { Metadata } from "next";
import "./globals.css";
import { buildSiteMetadata, getSiteName } from "@/lib/site";

const siteName = getSiteName();

export const metadata: Metadata = buildSiteMetadata(siteName);

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
