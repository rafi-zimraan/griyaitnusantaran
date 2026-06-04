# GriyaItNusantara — Jasa Pembuatan Website Profesional

Landing page modern untuk bisnis jasa pembuatan website, dibangun dengan HTML, CSS, dan JavaScript murni tanpa framework atau build tool.

---

## Tampilan

| Section      | Keterangan                                                       |
| ------------ | ---------------------------------------------------------------- |
| Hero         | Headline utama, statistik klien, mockup browser animasi          |
| Layanan      | 6 kartu layanan (Company Profile, E-Commerce, Landing Page, dll) |
| Keunggulan   | 6 poin diferensiasi dengan ikon dan nomor                        |
| Proses Kerja | Timeline 4 langkah dari konsultasi hingga launch                 |
| Portfolio    | Grid 6 karya dengan overlay hover                                |
| Harga        | 3 paket (Starter, Professional, Enterprise)                      |
| Testimoni    | 3 ulasan klien dengan avatar                                     |
| Kontak       | Form terintegrasi WhatsApp + info kontak                         |

---

## Teknologi

- **HTML5** — Semantik, aksesibel, SEO-friendly
- **CSS3** — Custom properties, CSS Grid, Flexbox, animasi keyframe
- **Vanilla JavaScript** — IntersectionObserver, counter animasi, mobile menu
- **Font:** [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) via Google Fonts
- **Icon:** [Font Awesome 6.5](https://fontawesome.com/) via CDN

---

## Struktur File

```
griyaitnusantara/
├── index.html       # Markup utama, semua section
├── style.css        # Semua style (variabel, komponen, responsive)
├── script.js        # Interaksi: navbar, form, animasi, counter
├── CLAUDE.md        # Checklist skill & area perbaikan
└── README.md        # Dokumentasi ini
```

---

## Fitur

- **Responsive** — Mobile-first, breakpoint di 1024px, 768px, dan 480px
- **Navbar sticky** — Background blur + shadow saat scroll
- **Counter animasi** — Angka statistik berjalan saat masuk viewport (IntersectionObserver)
- **Fade-in on scroll** — Elemen muncul saat masuk viewport
- **Mobile menu** — Hamburger dengan animasi slide dari kanan
- **Active nav highlight** — Nav link aktif mengikuti posisi scroll
- **Form → WhatsApp** — Submit form langsung membuka chat WhatsApp dengan pesan terformat
- **Back to Top button** — Muncul setelah scroll 500px
- **Floating WhatsApp button** — Tombol kontak cepat di pojok kanan bawah

---

## Cara Menjalankan

Tidak butuh instalasi apapun. Cukup buka langsung di browser:

```bash
# Opsi 1 — Buka langsung
open index.html

# Opsi 2 — Live server (VS Code extension: Live Server)
# Klik kanan index.html → "Open with Live Server"

# Opsi 3 — Python HTTP server
python3 -m http.server 3000
# Lalu buka http://localhost:3000
```

---

## Konfigurasi

Sebelum deploy ke production, update nilai berikut:

**`index.html`**

```html
<!-- Ganti nomor WA di 2 tempat -->
<a href="https://wa.me/62XXXXXXXXXX" ...>
  <!-- Ganti info kontak -->
  <p>+62 8XX-XXXX-XXXX</p>
  <p>email@domain.com</p>
  <p>Kota, Indonesia</p></a
>
```

**`script.js`**

```js
// Baris 115 — ganti nomor WA
const waUrl = `https://wa.me/62XXXXXXXXXX?text=${waMessage}`;
```

---

## Pengembangan Lanjutan

Lihat [CLAUDE.md](CLAUDE.md) untuk daftar lengkap area yang perlu ditingkatkan, mencakup:

- SEO (Open Graph, structured data, sitemap)
- Aksesibilitas (aria attributes, focus visible)
- Performa (font loading, lazy loading)
- UX (FAQ section, portfolio filter, cookie consent)

---

## Lisensi

Proyek ini bersifat privat. Seluruh konten dan desain adalah milik pemilik proyek.
