# CLAUDE.md — Skill Improvement Checklist

## Website: GriyaItNusantara (Jasa Pembuatan Website)

> Stack: Vanilla HTML · CSS · JavaScript (3 file, tidak ada framework/build tool)

---

## 1. HTML — Struktur & Semantik

- [ ] **Meta Open Graph & Twitter Card** — Belum ada tag `og:title`, `og:description`, `og:image`, `twitter:card`. Penting agar link yang dibagikan di media sosial tampil dengan preview yang menarik.
- [ ] **Structured Data (JSON-LD)** — Tambahkan schema `LocalBusiness` dan `WebSite` agar Google bisa menampilkan rich snippet di hasil pencarian.
- [ ] **Canonical URL** — Tidak ada tag `<link rel="canonical">`, risiko duplicate content jika website diakses dari berbagai URL.
- [ ] **Favicon** — Tidak ada favicon sama sekali. Perlu `<link rel="icon">` dan versi Apple Touch Icon.
- [ ] **Social links masih `href="#"`** — Instagram, Facebook, LinkedIn, TikTok di footer belum dihubungkan ke akun nyata.
- [ ] **Footer links fiktif** — Blog, FAQ, Privacy Policy, Terms of Service mengarah ke `#`. Perlu dibuat halaman/section-nya atau dihapus.
- [ ] **Portfolio tanpa link nyata** — Tidak ada tombol "Lihat Project" yang mengarah ke URL demo/live website klien.
- [ ] **Copyright tahun hardcoded** — Footer bertulisan "© 2024" — seharusnya dinamis atau diupdate ke 2025+.
- [ ] **Skip Navigation link** — Tidak ada `<a href="#main" class="skip-link">` untuk aksesibilitas keyboard/screen reader.

---

## 2. CSS — Styling & Responsivitas

- [ ] **`.active-link` tidak terdefinisi di CSS** — Script JS menambahkan class `.active-link` saat scroll, tapi tidak ada style untuk class ini. Nav link aktif tidak terlihat berbeda secara visual.
- [ ] **`prefers-reduced-motion` tidak dihandle** — Animasi float, fade-in, dan pulse-wa jalan terus meskipun user menyalakan opsi "Kurangi Gerakan" di OS. Tambahkan `@media (prefers-reduced-motion: reduce)`.
- [ ] **Dark mode (`prefers-color-scheme`)** — Tidak ada dukungan dark mode. Bisa ditambahkan dengan CSS custom properties yang sudah ada.
- [ ] **CSS spacing tidak konsisten** — Ada `--radius`, `--shadow`, tapi tidak ada spacing variables (padding/margin). Sering menggunakan magic numbers seperti `100px`, `60px`, `48px` secara langsung.
- [ ] **Trusted logos section tidak ada actual image** — Hanya teks + icon FontAwesome. Idealnya ada gambar logo klien yang nyata.
- [ ] **Portfolio hanya placeholder gradient** — Tidak ada screenshot website nyata. Hanya blok warna gradien.

---

## 3. JavaScript — Fungsionalitas

- [ ] **Validasi form lebih dari `required` HTML** — Tidak ada validasi format nomor WhatsApp Indonesia (harus 08xx atau +628xx), panjang pesan minimum, dll.
- [ ] **Counter animasi bisa double-fire** — Jika elemen keluar dan masuk viewport berulang, observer sudah di-unobserve tapi logika internal counter tidak punya guard "sudah jalan".
- [ ] **Smooth scroll duplikasi** — CSS sudah punya `scroll-behavior: smooth`, tapi JS juga menambahkan smooth scroll manual untuk semua `a[href^="#"]`. Ini redundant dan bisa konflik.
- [ ] **Nomor WA hardcoded di banyak tempat** — `6281234567890` muncul di HTML (2 tempat) dan JS (1 tempat). Sebaiknya dijadikan satu konstanta/config di awal script.
- [ ] **Tidak ada error handling** — Jika `window.open()` diblokir popup blocker, tidak ada fallback. Form submit langsung buka tab baru tanpa konfirmasi.
- [ ] **Tidak ada debounce pada scroll event** — `window.addEventListener('scroll', ...)` dipanggil tanpa debounce/throttle. Dua handler scroll berbeda (navbar + active nav) bisa digabung menjadi satu.
- [ ] **Tidak ada analytics** — Meskipun paket Professional menjual "Google Analytics", website sendiri tidak punya GA/tracking apapun.

---

## 4. SEO

- [ ] **Meta description generik** — Tag description masih template placeholder. Perlu dioptimalkan dengan keyword utama.
- [ ] **Tidak ada `sitemap.xml`** — Search engine crawler tidak punya peta halaman.
- [ ] **Tidak ada `robots.txt`** — Tidak ada panduan untuk web crawler.
- [ ] **Heading hierarchy kurang optimal** — Beberapa section memiliki `<h2>` tanpa konteks `<h1>` yang kuat di atasnya untuk SEO.
- [ ] **Alt text gambar** — Saat nanti gambar nyata ditambahkan, semua `<img>` harus punya alt text yang deskriptif.

---

## 5. Aksesibilitas (a11y)

- [ ] **Hamburger button tidak update `aria-expanded`** — Toggle menu mobile tidak mengubah state `aria-expanded="true/false"` saat dibuka/ditutup.
- [ ] **Social links tanpa `aria-label`** — Link ikon sosial di footer tidak punya teks deskriptif untuk screen reader.
- [ ] **Kontras warna** — `var(--gray-500)` (#6b7280) di atas putih perlu dicek apakah memenuhi WCAG AA (minimal 4.5:1 untuk teks normal).
- [ ] **Focus visible** — Tidak ada custom `:focus-visible` style. Default browser focus ring mungkin tidak cukup terlihat.
- [ ] **Form error messages** — Jika form gagal validasi, tidak ada pesan error yang accessible (`aria-describedby`, `role="alert"`).

---

## 6. Performa

- [ ] **Google Fonts blocking render** — Font diload via `<link>` tanpa `font-display: swap`. Bisa menyebabkan FOIT (Flash of Invisible Text).
- [ ] **Font Awesome via CDN** — Loading full icon library (~2MB). Pertimbangkan subset atau SVG icon saja.
- [ ] **Tidak ada lazy loading** — Saat gambar nyata ditambahkan, perlu `loading="lazy"` pada `<img>` di bawah fold.
- [ ] **Tidak ada resource hint** — Bisa tambahkan `<link rel="preload">` untuk font dan `<link rel="dns-prefetch">` untuk CDN.
- [ ] **CSS dan JS tidak diminify** — Untuk production, perlu build step atau minifikasi manual.

---

## 7. Konten & UX

- [ ] **Data kontak placeholder** — Nomor WA, email, dan alamat masih fiktif. Perlu diganti dengan data nyata sebelum live.
- [ ] **Portfolio filter** — Tidak ada filter berdasarkan kategori (E-Commerce, Landing Page, dll). Akan berguna saat portofolio bertambah.
- [ ] **Tidak ada FAQ section** — Calon klien biasanya punya pertanyaan umum. FAQ section (atau halaman terpisah) bisa mengurangi pertanyaan berulang.
- [ ] **Tidak ada cookie consent / GDPR notice** — Jika menggunakan tracking tools, wajib ada notifikasi cookie.
- [ ] **Testimonial hanya 3** — Dengan hanya 3 testimonial, bagian ini terasa sedikit. Perlu slider/carousel atau lebih banyak testimonial.
- [ ] **Pricing toggle** — Tidak ada opsi toggle antara harga bulanan dan tahunan yang umum di landing page SaaS/jasa.

---

## Prioritas Perbaikan

| Prioritas | Item                                                                          |
| --------- | ----------------------------------------------------------------------------- |
| Tinggi    | `.active-link` CSS, nomor WA config, validasi form, `aria-expanded` hamburger |
| Sedang    | Open Graph tags, `prefers-reduced-motion`, debounce scroll, canonical URL     |
| Rendah    | Dark mode, sitemap.xml, FAQ section, portfolio filter                         |
