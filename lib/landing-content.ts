import type {
  FaqItem,
  FooterLink,
  NavItem,
  PaymentMethod,
  StatItem,
} from "@/types/landing";

export const navItems: NavItem[] = [
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/#contact" },
  { label: "Dashboard", href: "/dashboard" },
];

export function buildNavItems(activePath: string): NavItem[] {
  return navItems.map((item) => ({
    ...item,
    isActive: item.href === activePath,
  }));
}

export const stats: StatItem[] = [
  { icon: "shopping-cart", value: "10K+", label: "Orders fulfilled" },
  { icon: "users", value: "5K+", label: "Active operators" },
  { icon: "globe", value: "99.9%", label: "API uptime" },
];

export const paymentMethods: PaymentMethod[] = [
  { icon: "qr-code", label: "QRIS" },
  { icon: "wallet", label: "E-Wallet" },
  { icon: "landmark", label: "BCA Transfer" },
  { icon: "banknote", label: "BRI Transfer" },
];

export const footerLinks: FooterLink[] = [
  { label: "Privacy Policy", href: "#", isPrimary: true },
  { label: "Terms of Service", href: "#" },
  { label: "API Docs", href: "#" },
  { label: "Support", href: "#" },
];

export function buildFaqItems(siteName: string): FaqItem[] {
  return [
    {
      question: `Apa keuntungan bergabung/mendaftar di ${siteName}?`,
      answer:
        "Dapatkan akses ke panel SMM terbaik dengan harga termurah, proses otomatis, dan dukungan penuh 24/7 untuk meningkatkan presensi digital Anda dengan cepat.",
    },
    {
      question: `Apa itu ${siteName}?`,
      answer: `${siteName} adalah platform Social Media Marketing (SMM) nomor 1 yang menyediakan berbagai layanan untuk meningkatkan interaksi dan pengikut di berbagai platform media sosial secara efektif.`,
    },
    {
      question: `Bagaimana cara bergabung/mendaftar di ${siteName}?`,
      answer:
        "Cukup klik tombol SIGN UP di menu navigasi, isi formulir pendaftaran, dan verifikasi akun Anda untuk mulai menggunakan layanan kami.",
    },
    {
      question: `Apa layanan di ${siteName} otomatis?`,
      answer:
        "Ya, semua layanan kami terintegrasi dengan sistem API otomatis yang memproses pesanan Anda dalam hitungan detik tanpa perlu menunggu manual.",
    },
    {
      question: `Apakah layanan di ${siteName} bergaransi?`,
      answer:
        "Kami menyediakan berbagai kategori layanan, termasuk layanan dengan garansi refill jika terjadi penurunan jumlah sesuai dengan deskripsi masing-masing layanan.",
    },
    {
      question: "Bagaimana jika saya ada kendala?",
      answer:
        "Anda dapat menghubungi tim dukungan pelanggan kami melalui fitur tiket di dashboard atau melalui WhatsApp yang tersedia 24 jam sehari.",
    },
  ];
}
