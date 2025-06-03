// src/pages/Experience.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import SEO from '../components/SEO';
import { SiNextdotjs } from "react-icons/si";
import '../styles/Experience.css';

function Experience() {
  const siteUrl = 'https://agitrahadian.my.id';

  // BreadcrumbList JSON-LD
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Beranda", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Pengalaman", item: `${siteUrl}/experience` }
    ]
  };

  // WebPage JSON-LD
  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteUrl}/experience`,
    url: `${siteUrl}/experience`,
    name: "Pengalaman Kerja – Agit Rahadian",
    description: "Lihat pengalaman kerja Agit Rahadian sebagai Full-Stack Web Developer, mulai dari pengembangan website sekolah hingga solusi digital pendidikan."
  };

  // Person JSON-LD
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Agit Rahadian",
    url: siteUrl,
    image: `${siteUrl}/android-chrome-512x512.png`,
    jobTitle: "Full-Stack Web Developer",
    sameAs: [
      "https://github.com/agitrahadian-22110006",
      "https://www.instagram.com/agitrhdn",
      "https://www.tiktok.com/@agitrahadian",
      "https://www.facebook.com/share/16HuZskNh5/",
      "https://wa.me/6287758263820"
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "STMIK Mardira Indonesia",
      department: "Teknik Informatika – Sistem Informasi"
    },
    description: "Full-Stack Web Developer dari Garut yang berpengalaman membangun aplikasi web untuk pendidikan dan solusi digital praktis.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Garut",
      addressRegion: "Jawa Barat",
      addressCountry: "Indonesia"
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/experience`
    }
  };

  // Organization JSON-LD
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Agit Rahadian",
    url: siteUrl,
    logo: `${siteUrl}/android-chrome-512x512.png`,
    sameAs: personSchema.sameAs
  };

  // WebSite JSON-LD
  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Agit Rahadian",
    url: siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/?s={search_term_string}`,
      "query-input": "required name=search_term_string"
    },
    publisher: {
      "@type": "Person",
      name: "Agit Rahadian"
    },
    logo: `${siteUrl}/android-chrome-512x512.png`
  };

  const structuredData = [
    breadcrumbSchema,
    webpageSchema,
    personSchema,
    organizationSchema,
    webSiteSchema
  ];

  return (
    <>
      <SEO
        title="Pengalaman Kerja – Agit Rahadian"
        description="Lihat pengalaman kerja Agit Rahadian sebagai Full-Stack Web Developer: pengembangan website sekolah, aplikasi internal madrasah, hingga solusi digital pendidikan."
        keywords="Agit Rahadian, pengalaman kerja, Full-Stack Web Developer, React, Laravel, PHP, solusi pendidikan"
        canonical={`${siteUrl}/experience`}
        structuredData={structuredData}
      />

      <Navbar />

      <main className="experience-wrapper" role="main" aria-label="Pengalaman Kerja Agit Rahadian">
        <h1 className="experience-title">Pengalaman Kerja</h1>

        <section className="timeline" aria-label="Timeline Pengalaman Kerja">
          <article className="timeline-element" tabIndex={0}>
            <time className="date" dateTime="2024-2025">2024 – 2025</time>
            <h3 className="role">
              <SiNextdotjs className="timeline-icon" aria-label="Next.js Icon" />
              Web Developer (Tim UI/UX) – MA AS-SIROJI
            </h3>
            <h4 className="company">Website MA-AS-SIROJI (maassiroji.sch.id)</h4>
            <p className="description">
              Membangun dan mengembangkan website profil sekolah, aplikasi internal madrasah, serta sistem informasi akademik. 
              Fokus pada clean code, performa optimal, dan desain responsif. Berpengalaman menggunakan React, Laravel, PHP, dan MySQL.
            </p>
            <ul className="details-list">
              <li>Website Profil Madrasah Aliyah AS-SIROJI (maassiroji.sch.id)</li>
              <li>Aplikasi PPDB Online & Sistem Informasi Akademik</li>
              <li>Landing page edukasi dan fitur interaktif</li>
            </ul>
          </article>

          <article className="timeline-element" tabIndex={0}>
            <time className="date" dateTime="2025">2025 – Sekarang</time>
            <h3 className="role">
              <SiNextdotjs className="timeline-icon" aria-label="Next.js Icon" />
              Web Developer – Project Agit NutriKids
            </h3>
            <h4 className="company">Agit NutriKids (agit-nutri-kids.vercel.app)</h4>
            <p className="description">
              Membangun aplikasi web interaktif Agit NutriKids untuk memantau status gizi anak berdasarkan Z-score WHO. Dibuat dengan React + Vite, 
              terintegrasi data LMS WHO, dan menampilkan hasil analisis gizi secara real-time.
            </p>
            <ul className="details-list">
              <li>UI/UX responsif menggunakan Tailwind CSS dan animasi ringan</li>
              <li>Form input data anak (nama, usia, berat, tinggi) dengan validasi langsung</li>
              <li>Kalkulasi Z-score WHO (HAZ & WHZ) berbasis data JSON standar WHO</li>
              <li>Halaman hasil interpretasi status gizi + rekomendasi nutrisi</li>
              <li>Panduan nutrisi lengkap (imunisasi, aktivitas, menu harian, dll.)</li>
              <li>Optimasi performa & deployment di Vercel dengan domain publik</li>
            </ul>
          </article>

          <h2 className="subsection-title">Pengalaman Kerja Lainnya</h2>

          <article className="timeline-element" tabIndex={0}>
            <time className="date" dateTime="2021">2021</time>
            <h3 className="role">
              <SiNextdotjs
                style={{ verticalAlign: 'middle', marginRight: 6, color: '#00adb5' }}
                aria-label="Game Farming Icon"
              />
              Game Farmer (World of Warcraft)
            </h3>
            <h4 className="company">Farming House Gaming, Cimahi</h4>
            <p className="description">
              Bekerja sebagai “Game Farmer” untuk proyek World of Warcraft di Farming House Gaming, Cimahi. 
              Bertugas mengumpulkan dan memproduksi item langka untuk pemain, memastikan suplai sumber daya terpenuhi, 
              dan membantu menjaga ekonomi in-game dengan mekanisme farming yang efisien.
            </p>
            <ul className="details-list">
              <li>Mengeksploitasi spawn point terbaik untuk bahan crafting (herbs, ores, kulit) di berbagai zona.</li>
              <li>Mengelola rotasi farming harian dan mingguan untuk mengumpulkan item langka seperti Arcane Crystal dan Black Lotus.</li>
              <li>Menjual hasil farming di auction house dengan strategi harga sesuai permintaan pasar in-game.</li>
              <li>Berkoordinasi dengan tim crafting untuk memproduksi consumable (potions, flasks, elixirs) bagi raid guild.</li>
              <li>Test dan optimasi addons (GatherMate2, Auctioneer) untuk mempercepat proses farming.</li>
              <li>Mendokumentasikan rute farming paling efisien dan berbagi melalui forum serta grup Discord.</li>
            </ul>
          </article>

          <article className="timeline-element" tabIndex={0}>
            <time className="date" dateTime="2021">2021</time>
            <h3 className="role">
              <SiNextdotjs className="timeline-icon" aria-label="Factory Icon" />
              Production & Finishing Operator – CV Mandala Logam
            </h3>
            <h4 className="company">
              CV Mandala Logam<br />
              Jl. Raya Leles No.15, Salamnunggal, Kec. Leles,<br />
              Kabupaten Garut, Jawa Barat 44152
            </h4>
            <p className="description">
              Bertugas sebagai operator produksi dan finishing di pabrik karet. 
              Memproses karet semi-jadi hingga menjadi produk akhir yang rata dan bersih, 
              sesuai standar kualitas perusahaan.
            </p>
            <ul className="details-list">
              <li>Menyiapkan cetak dan mesin pengepresan karet semi-jadi.</li>
              <li>Mengoperasikan mesin bubut karet untuk tampilan akhir yang halus.</li>
              <li>Memeriksa hasil produksi per batch: ketebalan, kebersihan, dan bentuk sesuai spesifikasi.</li>
              <li>Melaporkan kerusakan mesin atau cacat produk kepada supervisor untuk tindakan korektif.</li>
              <li>Mengepak produk karet akhir: menumpuk, menimbang, dan melabeli sebelum dikirim.</li>
              <li>Mematuhi standar keselamatan kerja (APD lengkap) dan menjaga area produksi rapi.</li>
            </ul>
          </article>

          <article className="timeline-element" tabIndex={0}>
            <time className="date" dateTime="2021-2022">2021 – 2022</time>
            <h3 className="role">
              <SiNextdotjs className="timeline-icon" aria-label="Factory Icon" />
              Production/Operator Mesin – Sampul Ijazah
            </h3>
            <h4 className="company">
              CV Al-Karomah<br />
              Jl. H. Hasan Arif, Bagendit, Kec. Banyuresmi,<br />
              Kabupaten Garut, Jawa Barat 44191
            </h4>
            <p className="description">
              Mengelola produksi sampul ijazah SD, SMP, dan SMA/SMK: mulai dari memotong bahan hingga pengepakan akhir.
            </p>
            <ul className="details-list">
              <li>Memotong dan mengukur bahan dasar (karton, kain, kertas) sesuai ukuran ijazah.</li>
              <li>Mengoperasikan mesin emboss untuk mencetak nama sekolah dan logo.</li>
              <li>Memastikan hasil cetakan tajam, simetris, dan bebas cacat.</li>
              <li>Menambahkan lapisan plastik pelindung dan melipat sampul secara presisi.</li>
              <li>Memeriksa kualitas setiap sampul: memastikan tidak ada cacat cetak atau lipatan salah.</li>
              <li>Mengepak sampul jadi, menata dalam kardus sesuai jumlah, siap dikirim ke instansi.</li>
              <li>Bekerja sesuai standar keselamatan kerja: menggunakan APD dan menjaga kebersihan area.</li>
            </ul>
          </article>

          <article className="timeline-element" tabIndex={0}>
            <time className="date" dateTime="2023-2025">2023 – Sekarang</time>
            <h3 className="role">
              <SiNextdotjs className="timeline-icon" aria-label="Store Icon" />
              Admin Online Shop – Istana Tas Anak 99
            </h3>
            <h4 className="company">
              VXV3+2WR, Sindangsari, Kec. Leuwigoong,<br />
              Kabupaten Garut, Jawa Barat 44192
            </h4>
            <p className="description">
              Bertanggung jawab sebagai admin e-commerce di berbagai platform (Lazada, TikTok Shop, Shopee, Tokopedia). 
              Mengatur listing produk, memproses pesanan, packing, dan manajemen stok tas anak & dewasa.
            </p>
            <ul className="details-list">
              <li>Mengunggah foto & deskripsi produk (tas anak SD, TK, PAUD, ransel dewasa) dengan optimasi SEO.</li>
              <li>Memantau pesanan masuk, mencetak resi, dan koordinasi dengan kurir.</li>
              <li>Mempersiapkan & mengepak pesanan, memastikan produk sesuai pesanan sebelum dikirim.</li>
              <li>Mengelola stok harian: mencatat barang masuk & keluar, memperbarui sistem inventaris.</li>
              <li>Mengatur promo, diskon, dan harga di setiap marketplace sesuai tren pasar.</li>
              <li>Menangani pertanyaan & keluhan pelanggan melalui chat, memberikan informasi detail.</li>
              <li>Bekerja sama dengan tim gudang untuk memastikan ketersediaan barang.</li>
            </ul>
          </article>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Experience;
