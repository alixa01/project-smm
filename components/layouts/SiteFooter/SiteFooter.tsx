import type { FooterLink } from "@/types/landing";

type SiteFooterProps = {
  siteName: string;
  links: FooterLink[];
};

export default function SiteFooter({ siteName, links }: SiteFooterProps) {
  return (
    <footer
      className="flex w-full flex-col items-center justify-between gap-6 border-t-[3px] border-black bg-white px-6 py-12 md:flex-row"
      id="contact">
      <div className="font-headline text-center text-xl font-black uppercase text-black md:text-left">
        &copy; 2026 {siteName}. All Rights Reserved.
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {links.map((link) => (
          <a
            className={`font-headline font-bold uppercase transition-colors hover:text-primary ${
              link.isPrimary ? "text-primary" : "text-black"
            }`}
            href={link.href}
            key={link.label}>
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
