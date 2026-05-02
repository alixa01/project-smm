"use client";

import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import type { Variants } from "framer-motion";
import { useMemo, useState } from "react";

type LandingPageProps = {
  siteName: string;
};

const heroImageUrl =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDl742lQapuYzMkwkJJgq2rdj2cQ78jz_ZHE6AQdRg_ZKmKU2vg-RwfJVmfuXZ7wznfEf9oZ63loN8VXQUzt1FxcYSdg4p_yyEo9co7Z8p9ce_0npVuT9_fiPRQ0NU3V1Vvaluu5awhn5Obob-XeALgHmaSM8i7Jab9frOmiFfDTIJnIcCO-kVJxYIg1L0oxWbJOWkNXpOMiSzFz-YXtiFNKTwU30_0fXOT7an9siekuBYJMaRlgn8dsTQXRu9Zf6ad-WotdCJqHrQ";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
  { label: "Dashboard", href: "/dashboard" },
];

const stats = [
  { icon: "shopping_cart", value: "10K+", label: "Total Orders", featured: false },
  { icon: "group", value: "5K+", label: "Happy Users", featured: true },
  { icon: "public", value: "99.9%", label: "Uptime Server", featured: false },
];

const paymentMethods = [
  { icon: "qr_code_2", label: "QRIS", featured: false },
  { icon: "account_balance_wallet", label: "E-Wallet (OVO/DANA)", featured: true },
  { icon: "account_balance", label: "BCA Transfer", featured: false },
  { icon: "payments", label: "BRI Transfer", featured: false },
];

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
};

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

function MaterialIcon({
  name,
  className = "",
}: {
  name: string;
  className?: string;
}) {
  return (
    <span aria-hidden="true" className={`material-symbols-outlined ${className}`}>
      {name}
    </span>
  );
}

function NeoButton({
  children,
  href,
  variant = "primary",
  large = false,
}: {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "surface";
  large?: boolean;
}) {
  const variantClass =
    variant === "primary"
      ? "bg-primary-container text-white"
      : "bg-surface text-on-surface";

  return (
    <motion.a
      className={`neo-border neo-shadow font-headline inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-black uppercase sm:px-8 ${variantClass} ${
        large ? "sm:px-12 sm:py-6 sm:text-2xl" : "sm:text-lg"
      }`}
      href={href}
      whileHover={{ x: 3, y: 3, boxShadow: "3px 3px 0 0 #181c20" }}
      whileTap={{ x: 6, y: 6, boxShadow: "0px 0px 0 0 #181c20" }}
    >
      {children}
    </motion.a>
  );
}

export default function LandingPage({ siteName }: LandingPageProps) {
  const [openFaqs, setOpenFaqs] = useState([0, 1]);

  const faqs = useMemo(
    () => [
      {
        question: `Apa keuntungan bergabung/mendaftar di ${siteName}?`,
        answer:
          "Dapatkan akses ke panel SMM terbaik dengan harga termurah, proses otomatis, dan dukungan penuh 24/7 untuk meningkatkan presensi digital Anda dengan cepat.",
        featured: false,
      },
      {
        question: `Apa itu ${siteName}?`,
        answer: `${siteName} adalah platform Social Media Marketing (SMM) nomor 1 yang menyediakan berbagai layanan untuk meningkatkan interaksi dan pengikut di berbagai platform media sosial secara efektif.`,
        featured: true,
      },
      {
        question: `Bagaimana cara bergabung/mendaftar di ${siteName}?`,
        answer:
          "Cukup klik tombol SIGN UP di menu navigasi, isi formulir pendaftaran, dan verifikasi akun Anda untuk mulai menggunakan layanan kami.",
        featured: false,
      },
      {
        question: `Apa layanan di ${siteName} otomatis?`,
        answer:
          "Ya, semua layanan kami terintegrasi dengan sistem API otomatis yang memproses pesanan Anda dalam hitungan detik tanpa perlu menunggu manual.",
        featured: false,
      },
      {
        question: `Apakah layanan di ${siteName} bergaransi?`,
        answer:
          "Kami menyediakan berbagai kategori layanan, termasuk layanan dengan garansi refill jika terjadi penurunan jumlah sesuai dengan deskripsi masing-masing layanan.",
        featured: false,
      },
      {
        question: "Bagaimana jika saya ada kendala?",
        answer:
          "Anda dapat menghubungi tim dukungan pelanggan kami melalui fitur tiket di dashboard atau melalui WhatsApp yang tersedia 24 jam sehari.",
        featured: false,
      },
    ],
    [siteName],
  );

  function toggleFaq(index: number) {
    setOpenFaqs((current) =>
      current.includes(index)
        ? current.filter((item) => item !== index)
        : [...current, index],
    );
  }

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-background text-on-background">
        <motion.nav
          className="fixed left-0 top-0 z-50 flex h-20 w-full items-center justify-between border-b-[3px] border-black bg-white px-4 shadow-[6px_6px_0_0_#181c20] sm:px-6"
          initial={{ y: -96 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <a
            className="font-headline max-w-[52vw] truncate text-xl font-black uppercase text-black sm:max-w-none sm:text-2xl"
            href="#top"
          >
            {siteName}
          </a>

          <div className="hidden items-center space-x-6 md:flex">
            {navItems.map((item, index) => (
              <a
                className={`font-headline px-2 py-1 font-bold uppercase transition-colors duration-100 hover:bg-primary-container hover:text-white ${
                  index === 0 ? "text-primary underline decoration-[3px] underline-offset-4" : "text-black"
                }`}
                href={item.href}
                key={item.label}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <a
              className="font-headline hidden border-[3px] border-transparent px-4 py-2 font-bold uppercase text-black transition-colors duration-100 hover:border-black hover:bg-primary-container hover:text-white sm:block"
              href="#login"
            >
              Login
            </a>
            <motion.a
              className="neo-border neo-shadow font-headline bg-primary-container px-3 py-2 font-bold uppercase text-white sm:px-4"
              href="#signup"
              whileHover={{ x: 3, y: 3, boxShadow: "3px 3px 0 0 #181c20" }}
              whileTap={{ x: 6, y: 6, boxShadow: "0px 0px 0 0 #181c20" }}
            >
              Sign Up
            </motion.a>
          </div>
        </motion.nav>

        <main id="top" className="overflow-hidden pt-20">
          <section className="relative isolate flex min-h-[calc(100svh-9rem)] items-center px-4 py-10 sm:px-6 lg:px-8">
            <motion.img
              alt=""
              aria-hidden="true"
              className="absolute inset-0 -z-20 h-full w-full object-cover"
              initial={{ scale: 1.05, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              src={heroImageUrl}
            />
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#f7f9ff_0%,rgba(247,249,255,0.94)_42%,rgba(247,249,255,0.74)_74%,rgba(247,249,255,0.42)_100%)]" />
            <div className="dot-pattern absolute inset-0 -z-10 opacity-20" />

            <motion.div
              className="mx-auto flex w-full max-w-7xl flex-col gap-8"
              initial="hidden"
              animate="show"
              variants={containerVariants}
            >
              <motion.div
                className="neo-border neo-shadow font-headline inline-flex w-fit bg-primary-container px-4 py-2 text-base font-bold uppercase text-on-primary-container sm:text-lg"
                variants={revealVariants}
              >
                #1 Social Media Growth Platform
              </motion.div>

              <motion.h1
                className="font-headline max-w-5xl text-5xl font-black uppercase leading-none text-on-background sm:text-6xl lg:text-7xl"
                variants={revealVariants}
              >
                Levelling Up Your{" "}
                <span className="text-primary-container text-stroke block sm:inline">
                  Social Presence
                </span>
              </motion.h1>

              <motion.p
                className="max-w-2xl text-lg leading-8 text-on-surface-variant sm:text-xl"
                variants={revealVariants}
              >
                Dominate the digital landscape with {siteName}. We provide
                high-impact, uncompromising social media marketing tools designed
                for brutal efficiency and explosive growth.
              </motion.p>

              <motion.div className="flex flex-wrap gap-4 pt-2" variants={revealVariants}>
                <NeoButton href="#signup">
                  Get Started <MaterialIcon name="arrow_forward" />
                </NeoButton>
                <NeoButton href="#pricing" variant="surface">
                  View Pricing
                </NeoButton>
              </motion.div>

              <motion.div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-8 right-4 hidden h-40 w-40 items-center justify-center border-[3px] border-black bg-secondary-container shadow-[6px_6px_0_0_#181c20] md:flex"
                animate={{ rotate: [-3, 3, -3], y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <MaterialIcon name="trending_up" className="!text-7xl" />
              </motion.div>
              <motion.div
                aria-hidden="true"
                className="pointer-events-none absolute right-10 top-28 hidden h-20 w-20 items-center justify-center rounded-full border-[3px] border-black bg-white shadow-[6px_6px_0_0_#181c20] lg:flex"
                animate={{ rotate: [0, 16, 0], scale: [1, 1.04, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <MaterialIcon name="star" className="!text-4xl" />
              </motion.div>
            </motion.div>
          </section>

          <div className="mx-auto max-w-7xl space-y-20 px-4 pb-20 pt-10 sm:px-6 lg:space-y-24">
            <motion.section
              className="grid grid-cols-1 gap-6 md:grid-cols-3"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={containerVariants}
            >
              {stats.map((stat) => (
                <motion.article
                  className={`neo-border neo-shadow flex flex-col items-center justify-center space-y-4 p-8 text-center ${
                    stat.featured ? "bg-primary-container text-white" : "bg-white"
                  }`}
                  key={stat.label}
                  variants={revealVariants}
                  whileHover={{ y: -4, rotate: stat.featured ? -1 : 1 }}
                >
                  <MaterialIcon
                    name={stat.icon}
                    className={`!text-5xl ${stat.featured ? "text-white" : "text-primary-container"}`}
                  />
                  <h2 className="font-headline text-5xl font-black uppercase">{stat.value}</h2>
                  <p className="font-headline text-lg font-bold uppercase text-inherit">
                    {stat.label}
                  </p>
                </motion.article>
              ))}
            </motion.section>

            <motion.section
              className="space-y-8"
              id="services"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.18 }}
              variants={containerVariants}
            >
              <motion.div
                className="flex items-center justify-between border-b-[3px] border-black pb-4"
                variants={revealVariants}
              >
                <h2 className="font-headline text-3xl font-black uppercase sm:text-4xl">
                  Frequently Asked Questions
                </h2>
              </motion.div>

              <motion.div className="space-y-4" variants={containerVariants}>
                {faqs.map((faq, index) => {
                  const isOpen = openFaqs.includes(index);
                  const panelId = `faq-panel-${index}`;

                  return (
                    <motion.div
                      className={`neo-border neo-shadow overflow-hidden ${
                        faq.featured ? "bg-primary-container" : "bg-white"
                      }`}
                      key={faq.question}
                      variants={revealVariants}
                    >
                      <button
                        aria-controls={panelId}
                        aria-expanded={isOpen}
                        className="flex w-full items-center justify-between gap-4 p-6 text-left"
                        onClick={() => toggleFaq(index)}
                        type="button"
                      >
                        <span
                          className={`font-headline text-lg font-bold uppercase sm:text-xl ${
                            faq.featured ? "text-white" : "text-black"
                          }`}
                        >
                          {index + 1}. {faq.question}
                        </span>
                        <motion.span
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          className={faq.featured ? "text-white" : "text-black"}
                        >
                          <MaterialIcon name="expand_more" className="!text-3xl" />
                        </motion.span>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen ? (
                          <motion.div
                            animate={{ height: "auto", opacity: 1 }}
                            className="border-t-[3px] border-black bg-surface-container-low"
                            exit={{ height: 0, opacity: 0 }}
                            id={panelId}
                            initial={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                          >
                            <p className="px-6 py-5 leading-7 text-on-surface-variant">
                              {faq.answer}
                            </p>
                          </motion.div>
                        ) : null}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.section>

            <motion.section
              className="space-y-8"
              id="pricing"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
            >
              <motion.div
                className="flex items-center justify-between border-b-[3px] border-black pb-4"
                variants={revealVariants}
              >
                <h2 className="font-headline text-3xl font-black uppercase sm:text-4xl">
                  Supported Payment Methods
                </h2>
              </motion.div>

              <motion.div
                className="grid grid-cols-2 gap-6 md:grid-cols-4"
                variants={containerVariants}
              >
                {paymentMethods.map((method) => (
                  <motion.article
                    className={`neo-border neo-shadow flex min-h-40 flex-col items-center justify-center space-y-3 p-5 text-center ${
                      method.featured
                        ? "bg-secondary-container text-on-secondary-container"
                        : "bg-white text-black"
                    }`}
                    key={method.label}
                    variants={revealVariants}
                    whileHover={{ y: -4 }}
                  >
                    <MaterialIcon name={method.icon} className="!text-5xl" />
                    <span className="font-headline text-base font-bold uppercase sm:text-lg">
                      {method.label}
                    </span>
                  </motion.article>
                ))}
              </motion.div>
            </motion.section>

            <motion.section
              className="neo-border neo-shadow relative overflow-hidden bg-white p-8 text-center sm:p-12"
              id="signup"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
            >
              <div className="dot-pattern absolute inset-0 opacity-10" />
              <div className="relative z-10 mx-auto max-w-2xl space-y-6">
                <motion.h2
                  className="font-headline text-4xl font-black uppercase sm:text-5xl"
                  variants={revealVariants}
                >
                  Ready to Dominate?
                </motion.h2>
                <motion.p
                  className="text-lg leading-8 text-on-surface-variant sm:text-xl"
                  variants={revealVariants}
                >
                  Join thousands of users who have already transformed their
                  digital presence. Stop waiting, start growing.
                </motion.p>
                <motion.div className="flex justify-center pt-2" variants={revealVariants}>
                  <NeoButton href="#contact" large>
                    Get Started Now <MaterialIcon name="rocket_launch" className="!text-4xl" />
                  </NeoButton>
                </motion.div>
              </div>
            </motion.section>
          </div>
        </main>

        <footer
          className="flex w-full flex-col items-center justify-between gap-6 border-t-[3px] border-black bg-white px-6 py-12 md:flex-row"
          id="contact"
        >
          <div className="font-headline text-center text-xl font-black uppercase text-black md:text-left">
            &copy; 2026 {siteName}. All Rights Reserved.
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {["Privacy Policy", "Terms of Service", "API Docs", "Support"].map(
              (item, index) => (
                <a
                  className={`font-headline font-bold uppercase transition-colors hover:text-primary ${
                    index === 0 ? "text-primary" : "text-black"
                  }`}
                  href="#"
                  key={item}
                >
                  {item}
                </a>
              ),
            )}
          </div>
        </footer>
      </div>
    </MotionConfig>
  );
}
