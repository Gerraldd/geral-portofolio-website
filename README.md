# 🌐 Muhammad Geral Herpavy — Portfolio Website

> Website portofolio pribadi yang dibangun dengan **HTML5 semantik**, **CSS kustom**, dan **Vanilla JavaScript** — tanpa framework, tanpa dependensi build.

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/License-All%20Rights%20Reserved-111111?style=flat)](#lisensi)

---

## 📋 Daftar Isi

- [Tentang Proyek](#-tentang-proyek)
- [Tangkapan Layar](#-tangkapan-layar)
- [Fitur](#-fitur)
- [Tech Stack](#-tech-stack)
- [Struktur Proyek](#-struktur-proyek)
- [Instalasi & Penggunaan](#-instalasi--penggunaan)
- [Deployment](#-deployment)
- [Penulis](#-penulis)
- [Lisensi](#-lisensi)

---

## 🎯 Tentang Proyek

Website portofolio ini dirancang untuk menampilkan profil, kemampuan teknis, karya proyek, pencapaian, dan informasi kontak **Muhammad Geral Herpavy** — mahasiswa S1 Teknik Informatika di Universitas Negeri Surabaya (UNESA) dengan latar belakang Rekayasa Perangkat Lunak dan pengalaman magang di PT Universal Big Data.

Website ini menggunakan desain **monokrom premium** dengan estetika teknikal/engineering, dibangun sepenuhnya dengan teknologi web dasar tanpa framework atau library CSS eksternal.

---

## 📸 Tangkapan Layar

<!-- Untuk menambahkan tangkapan layar:
     1. Ambil screenshot website, simpan di root folder (misal: screenshot.png)
     2. Uncomment baris di bawah dan sesuaikan nama filenya
-->
<!-- ![Hero Section](screenshot.png) -->

> **Catatan:** Tangkapan layar akan ditambahkan setelah website di-deploy.

---

## ✨ Fitur

| Fitur | Deskripsi |
|-------|-----------|
| 🎨 **Desain Monokrom Premium** | Palet warna strict monochrome (`#111111` – `#FFFFFF`) dengan aksen teknikal dan corner accents |
| 📱 **Fully Responsive** | Layout responsif menggunakan CSS Grid 12-kolom dan `clamp()` untuk semua breakpoint |
| ⚡ **Performa Tinggi** | Zero dependencies, self-hosted variable fonts (Archivo & JetBrains Mono), dan lazy loading gambar |
| 🧭 **Navigation Spy** | Highlight navigasi otomatis menggunakan Intersection Observer API |
| 🎬 **Scroll Reveal** | Animasi reveal saat elemen memasuki viewport |
| 📋 **Copy Email** | Tombol salin email ke clipboard dengan feedback visual dan fallback `execCommand` |
| ♿ **Aksesibilitas** | Skip-link, `aria-label`, `aria-current`, `role`, semantic HTML, dan `:focus-visible` styling |
| 🔍 **SEO Optimal** | OpenGraph meta tags, JSON-LD structured data (Schema.org), dan semantic markup |
| 🖥️ **Sticky Header** | Header dengan backdrop blur yang responsif terhadap scroll |
| 🎞️ **Infinite Marquee** | Animasi marquee seamless loop untuk keahlian utama, berhenti saat hover |
| 📄 **CV Download** | Tombol unduh dan buka CV dalam format PDF |

---

## 🛠️ Tech Stack

| Teknologi | Penggunaan |
|-----------|------------|
| **HTML5** | Struktur semantik (`section`, `article`, `nav`, `address`, `dl`, dsb.) |
| **CSS3** | Custom properties (design tokens), CSS Grid, Flexbox, `clamp()`, animasi `@keyframes`, `backdrop-filter` |
| **JavaScript (ES6+)** | Intersection Observer, Clipboard API, DOM manipulation, IIFE pattern |
| **Lucide Icons** | Icon library via CDN |
| **Devicon** | Ikon brand teknologi (Python, PostgreSQL, Git, dll.) via CDN |
| **Google Fonts (self-hosted)** | Archivo (variable) & JetBrains Mono (variable) dalam format WOFF2 |

---

## 📁 Struktur Proyek

```
geral-portofolio-web/
├── index.html                              # Halaman utama (single-page)
├── README.md                               # Dokumentasi proyek
├── Guidebook Website.pdf                   # Buku panduan pembuatan website
└── assets/
    ├── css/
    │   └── styles.css                      # Stylesheet utama (~2200 baris)
    ├── js/
    │   └── main.js                         # Script interaksi & animasi
    ├── cv/
    │   └── muhammad-geral-herpavy-cv.pdf   # Berkas CV
    ├── fonts/
    │   ├── archivo-latin-var.woff2         # Font Archivo (variable)
    │   ├── jetbrains-mono-latin-var.woff2  # Font JetBrains Mono (variable)
    │   ├── OFL-Archivo.txt                 # Lisensi font Archivo
    │   └── OFL-JetBrainsMono.txt           # Lisensi font JetBrains Mono
    └── img/
        ├── favicon.svg                     # Favicon SVG
        ├── achievements/
        │   └── dicoding-web-basic-2025.jpg # Sertifikat Dicoding
        └── projects/
            ├── flight-booking.jpg          # Screenshot proyek Flight Booking
            └── library-android.jpg         # Screenshot proyek Library Android
```

---

## 🚀 Instalasi & Penggunaan

### Prasyarat

- Web browser modern (Chrome, Firefox, Edge, Safari)
- (Opsional) Live server untuk development

### Langkah Menjalankan

1. **Clone repositori**

   ```bash
   git clone https://github.com/Gerraldd/geral-portofolio-website.git
   ```

2. **Masuk ke direktori proyek**

   ```bash
   cd geral-portofolio-website
   ```

3. **Buka `index.html`**

   Langsung buka file di browser, atau gunakan live server:

   ```bash
   # Menggunakan VS Code Live Server Extension
   # Klik kanan index.html → "Open with Live Server"

   # Atau menggunakan npx
   npx serve .
   ```

> **Catatan:** Tidak perlu `npm install` atau proses build — proyek ini berjalan langsung tanpa dependensi!

---

## 🌍 Deployment

Website ini bersifat **static** dan dapat di-deploy ke platform hosting statis manapun:

| Platform | Cara Deploy |
|----------|-------------|
| **GitHub Pages** | Settings → Pages → pilih branch `main` → simpan |
| **Netlify** | Drag & drop folder proyek, atau hubungkan repo GitHub |
| **Vercel** | Import repo → deploy otomatis |

---

## 🏗️ Bagian / Seksi Website

| # | Seksi | Deskripsi |
|---|-------|-----------|
| — | **Hero** | Headline nama, tagline, spec box profil teknis, dan CTA buttons |
| — | **Marquee** | Strip animasi infinite loop menampilkan keahlian utama |
| 01 | **About Me** | Biodata, riwayat pendidikan, pengalaman kerja, aktivitas, dan minat |
| 02 | **Capabilities** | Kemampuan teknis: Development, Data & Backend, Tools, QA, Soft Skills |
| + | **Selected Work** | 4 proyek terpilih dengan deskripsi, tech stack, dan link GitHub |
| 03 | **Achievement** | Sertifikasi (Dicoding) dengan gambar dan link verifikasi |
| 04 | **Contact** | Email dengan fitur copy, link GitHub, LinkedIn, dan unduh CV |

---

## 👤 Penulis

**Muhammad Geral Herpavy**

- 🎓 Mahasiswa S1 Teknik Informatika — Universitas Negeri Surabaya (UNESA)
- 📧 Email: [muhmmdgeral@gmail.com](mailto:muhmmdgeral@gmail.com)
- 🐙 GitHub: [github.com/Gerraldd](https://github.com/Gerraldd)
- 💼 LinkedIn: [linkedin.com/in/muhammad-geral](https://www.linkedin.com/in/muhammad-geral)

---

## 📄 Lisensi

© 2026 Muhammad Geral Herpavy. **All rights reserved.**

Kode sumber dan konten dalam repositori ini dilindungi hak cipta. Dilarang menyalin, mendistribusikan, atau menggunakan tanpa izin tertulis dari penulis.

Font yang digunakan berlisensi [SIL Open Font License](https://scripts.sil.org/OFL).
