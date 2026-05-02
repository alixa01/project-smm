# Struktur Project SMM Nusantara

Dokumen ini merangkum struktur project berdasarkan perubahan dan diskusi sebelumnya:
landing page SMM Nusantara dibuat dari HTML neobrutalist yang diberikan, nama website dibuat configurable via env, animasi memakai Framer Motion, styling memakai TailwindCSS, dan icon memakai `lucide-react`.

## Ringkasan Teknis

- Framework: Next.js 16 App Router.
- UI: React 19 + TailwindCSS 4.
- Animasi: `framer-motion`.
- Icon: `lucide-react`, dibungkus lewat komponen internal `LucideIcon`.
- Nama website: dibaca dari env `SITE_NAME`, fallback ke `SMM NUSANTARA`.
- Route utama: `app/(home)/page.tsx`.
- Global layout dan metadata: `app/layout.tsx`.
- Data landing page: `lib/landing-content.ts`.
- Shared types: `types/landing.ts`.

Catatan penting dari `AGENTS.md`: versi Next.js di project ini harus dianggap berbeda dari pengetahuan umum. Sebelum mengubah API, route, layout, metadata, atau convention Next, baca docs lokal di `node_modules/next/dist/docs/`.

## Struktur Folder

```txt
app/
  layout.tsx
  globals.css
  favicon.ico
  (home)/
    page.tsx

components/
  (home)/
    LandingPage.tsx
    sections/
      HeroSection/
        HeroSection.tsx
      StatsSection/
        StatsSection.tsx
      FaqSection/
        FaqSection.tsx
      PaymentMethodsSection/
        PaymentMethodsSection.tsx
      CallToActionSection/
        CallToActionSection.tsx
  layouts/
    MainLayout.tsx
    SiteHeader/
      SiteHeader.tsx
    SiteFooter/
      SiteFooter.tsx
    SectionHeading/
      SectionHeading.tsx
  ui/
    NeoButton.tsx
    LucideIcon.tsx
    StatCard.tsx
    PaymentMethodCard.tsx
    FaqAccordionItem.tsx

hooks/
  useFaqToggle.ts

lib/
  site.ts
  motion.ts
  landing-content.ts

types/
  landing.ts

public/
  *.svg

.agents/
  skills/
    frontend-design/
    structure.md
```

## Alur Render Halaman

1. `app/layout.tsx`
   Root layout global. Mengimport `app/globals.css`, mengambil `siteName` dari `lib/site.ts`, lalu membangun metadata via `buildSiteMetadata(siteName)`.

2. `app/(home)/page.tsx`
   Server Component untuk route `/`. Mengambil `siteName` lewat `getSiteName()`, mengambil `navItems` dan `footerLinks`, lalu membungkus `LandingPage` dengan `MainLayout`.

3. `components/layouts/MainLayout.tsx`
   Layout halaman landing. Menampilkan `SiteHeader`, area `<main id="top">`, dan `SiteFooter`.

4. `components/(home)/LandingPage.tsx`
   Client Component yang membungkus sections dengan `MotionConfig reducedMotion="user"`.

5. Section components
   `HeroSection`, `StatsSection`, `FaqSection`, `PaymentMethodsSection`, dan `CallToActionSection` menyusun isi landing page.

## File Penting

### `lib/site.ts`

Berisi konfigurasi identitas website:

- `getSiteName()`: membaca `process.env.SITE_NAME?.trim()`.
- fallback: `SMM NUSANTARA`.
- `SITE_TAGLINE`: `Levelling Up Your Social Presence`.
- `buildSiteMetadata(siteName)`: membuat metadata Next.

Contoh env:

```env
SITE_NAME="SMM NUSANTARA"
```

### `lib/landing-content.ts`

Pusat data statis landing page:

- `heroImageUrl`
- `navItems`
- `stats`
- `paymentMethods`
- `footerLinks`
- `buildFaqItems(siteName)`

Data icon di file ini memakai nama yang diterima oleh `LucideIconName`, misalnya:

- `shopping-cart`
- `users`
- `globe`
- `qr-code`
- `wallet`
- `landmark`
- `banknote`

### `types/landing.ts`

Berisi tipe data untuk konten landing:

- `NavItem`
- `StatItem`
- `PaymentMethod`
- `FaqItem`
- `FooterLink`

`StatItem.icon` dan `PaymentMethod.icon` diketik sebagai `LucideIconName`, sehingga nama icon salah akan ketangkap TypeScript.

### `components/ui/LucideIcon.tsx`

Wrapper internal untuk `lucide-react`.

Tujuannya:

- menjaga daftar icon tetap eksplisit,
- menghindari import Lucide tersebar di banyak komponen,
- memberi default styling seperti `strokeWidth` dan class `lucide-icon`.

Jika butuh icon baru:

1. Import icon dari `lucide-react`.
2. Tambahkan ke `iconMap`.
3. Gunakan nama key baru di data atau komponen.

### `lib/motion.ts`

Pusat variant Framer Motion:

- `containerVariants`: stagger child animation.
- `revealVariants`: fade + slide up.

Pola ini dipakai oleh section dan card agar animasi konsisten.

### `hooks/useFaqToggle.ts`

Hook client untuk mengelola FAQ accordion:

- menyimpan `openIndexes`,
- menyediakan `toggleIndex(index)`.

## Pola Komponen

- `components/layouts/*`: layout besar yang reusable, seperti header, footer, section heading.
- `components/(home)/sections/*`: section khusus landing page.
- `components/ui/*`: komponen kecil reusable seperti button, card, icon, dan accordion item.
- `lib/*`: data, konfigurasi, helper non-UI.
- `types/*`: TypeScript types shared.
- `hooks/*`: React hooks client-side.

## Catatan Styling

Styling global ada di `app/globals.css`.

Konsep desain:

- neobrutalist,
- border hitam tebal,
- shadow keras via `.neo-shadow`,
- warna utama hijau `#63ad6f`,
- background grid halus,
- headline memakai `Space Grotesk`,
- body memakai `Work Sans`.

Class helper utama:

- `.neo-border`
- `.neo-shadow`
- `.text-stroke`
- `.dot-pattern`
- `.lucide-icon`

## Dependency Relevan

```json
{
  "next": "16.2.4",
  "react": "19.2.4",
  "react-dom": "19.2.4",
  "tailwindcss": "^4.2.4",
  "framer-motion": "^12.38.0",
  "lucide-react": "^1.3.0"
}
```

## Verifikasi

Perubahan sebelumnya sudah diverifikasi dengan:

```bash
npx tsc --noEmit
npm run lint
```

Build pernah gagal di sandbox Windows karena permission/cache `.next`:

```txt
EPERM: operation not permitted, unlink ... .next/...
```

Ini bukan error TypeScript atau import UI. Jika terjadi lagi, bersihkan cache `.next` atau jalankan build di environment yang tidak mengunci file generated Next.

## Riwayat Singkat Perubahan Chat

1. Project awal adalah starter Next.js dengan `app/page.tsx`, `app/layout.tsx`, dan `app/globals.css`.
2. HTML landing page SMM Nusantara dari user diubah menjadi landing page Next.js.
3. Nama website `SMM NUSANTARA` dipindah ke env `SITE_NAME`.
4. Animasi ditambahkan dengan Framer Motion.
5. Struktur kemudian dimodularisasi menjadi route group `(home)`, section components, layout components, `lib`, `hooks`, dan `types`.
6. Icon Material Symbols diganti ke `lucide-react` lewat wrapper `components/ui/LucideIcon.tsx`.
