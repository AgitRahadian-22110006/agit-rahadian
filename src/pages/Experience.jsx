import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import SEO from '../components/SEO';
import { SiNextdotjs } from "react-icons/si";
import '../styles/Experience.css';

function Experience() {
  const siteUrl = 'https://agitrahadian.my.id';

  // Schema: Breadcrumb
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Beranda",
        item: siteUrl
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Pengalaman",
        item: `${siteUrl}/experience`
      }
    ]
  };

  // Schema: WebPage
  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteUrl}/experience`,
    url: `${siteUrl}/experience`,
    name: "Pengalaman Kerja – Agit Rahadian",
    description: "Lihat pengalaman kerja Agit Rahadian sebagai Full-Stack Web Developer, termasuk pengembangan website sekolah, aplikasi internal, dan kontribusi pada solusi digital pendidikan."
  };

  // Schema: Person
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Agit Rahadian",
    url: siteUrl,
    logo: `${siteUrl}/android-chrome-512x512.png`,
    image: `${siteUrl}/android-chrome-512x512.png`,
    sameAs: [
      "https://github.com/agitrahadian-22110006",
      "https://www.instagram.com/agitrhdn",
      "https://www.tiktok.com/@agitrahadian",
      "https://www.facebook.com/share/16HuZskNh5/",
      "https://wa.me/6287758263820"
    ],
    jobTitle: "Full-Stack Web Developer",
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "STMIK Mardira Indonesia",
      department: "Teknik Informatika - Prodi Sistem Informasi"
    },
    description: "Full-Stack Web Developer dari Garut yang berspesialisasi dalam pengembangan website sekolah, aplikasi pendidikan, dan solusi digital praktis.",
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

  // Schema: Organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Agit Rahadian",
    url: siteUrl,
    logo: `${siteUrl}/android-chrome-512x512.png`,
    sameAs: [
      "https://github.com/agitrahadian-22110006",
      "https://www.instagram.com/agitrhdn",
      "https://www.tiktok.com/@agitrahadian",
      "https://www.facebook.com/share/16HuZskNh5/",
      "https://wa.me/6287758263820"
    ]
  };

  // Schema: WebSite
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
        description="Lihat pengalaman kerja Agit Rahadian sebagai Full-Stack Web Developer, termasuk pengembangan website sekolah, aplikasi internal, dan kontribusi pada solusi digital pendidikan."
        keywords="Agit Rahadian, pengalaman kerja, Full-Stack Web Developer, React, Laravel, PHP, Pendidikan, Digital Solutions"
        canonical={`${siteUrl}/experience`}
        structuredData={structuredData}
      />

      <Navbar />

      <main className="experience-wrapper" role="main" aria-label="Pengalaman Kerja Agit Rahadian">
        <h1>Experience WEB</h1>

        <section className="timeline" aria-label="Timeline Pengalaman Kerja">
          <article className="timeline-element" tabIndex={0}>
            <time className="date" dateTime="2024">2024 - 2025</time>
            <h3>
              <SiNextdotjs 
                style={{ verticalAlign: 'middle', marginRight: 6, color: '#00adb5' }} 
                aria-label="Next.js Icon" 
              /> 
               Web Developer As A Team UI/UX & Backend(https://maassiroji.sch.id/)
            </h3>
            <h4>Website MA-Assiroji</h4>
            <p>
              Membangun dan mengembangkan berbagai Website profil sekolah, aplikasi internal madrasah, serta sistem manajemen informasi akademik. Fokus pada clean code, performa optimal, dan desain responsif. Berpengalaman menggunakan React, Laravel, PHP, dan MySQL.
            </p>
            <ul>
              <li>Website Profil Madrasah Aliyah AS-SIROJI (maassiroji.sch.id)</li>
              <li>Aplikasi PPDB Online & Sistem Informasi Akademik</li>
              <li>Website profil sekolah dan landing page edukasi</li>
            </ul>
          </article>

         <article className="timeline-element" tabIndex={0}>
  <time className="date" dateTime="2025">2025 - sekarang</time>
  <h3>
    <SiNextdotjs
      style={{ verticalAlign: 'middle', marginRight: 6, color: '#00adb5' }}
      aria-label="Next.js Icon"
    />
    Web Developer Agit NutriKids(https://agit-nutri-kids.vercel.app/)
  </h3>
  <h4>Project Agit NutriKids</h4>
  <p>
    Membangun aplikasi web interaktif Agit NutriKids yang berfokus pada pemantauan status gizi anak berbasis Z-score WHO. Proyek ini dibuat menggunakan React + Vite, dengan integrasi data standar WHO LMS dan berbagai fitur kalkulasi yang disesuaikan.
  </p>
  <ul>
    <li>Desain UI/UX responsif dengan Tailwind CSS dan animasi ringan</li>
    <li>Fitur input data anak (nama, usia, berat, tinggi) dan validasi real-time</li>
    <li>Implementasi kalkulasi Z-score WHO (HAZ & WHZ) berbasis JSON data standar</li>
    <li>Halaman hasil dengan interpretasi status gizi dan rekomendasi nutrisi</li>
    <li>Halaman panduan lengkap (imunisasi, stimulasi, pola makan, dan lainnya)</li>
    <li>Optimasi performa dan deployment di Vercel dengan domain publik</li>
  </ul>
</article>

<h1>Pengalaman Kerja Lainnya</h1>
        <article className="timeline-element" tabIndex={0}>
  <time className="date" dateTime="2021">2021-2021</time>
  <h3>
    <SiNextdotjs
      style={{ verticalAlign: 'middle', marginRight: 6, color: '#00adb5' }}
      aria-label="Game Developer Icon"
    />
    Farming House
  </h3>
  <h4>Farming House Gaming, Cimahi</h4>
  <p>
    Bekerja pada proyek “World of Warcraft Farming” bersama Farming House Gaming di Cimahi. 
    Tanggung jawab meliputi perancangan mekanisme produksi sumber daya dalam game, optimasi 
    alur farming, dan peningkatan pengalaman pemain melalui automasi crafting dan marketplace 
    in-game.
  </p>
  <ul>
    <li>Mendesain mekanisme farming item langka dan sumber daya dalam World of Warcraft</li>
    <li>Mengembangkan skrip automasi farming untuk NPC dan event berbasis lua scripting</li>
    <li>Memastikan keseimbangan ekonomi in-game melalui pengaturan spawn rate dan harga pasar</li>
    <li>Berkoordinasi dengan tim QA untuk mendeteksi bug farming dan memperbaiki exploit</li>
    <li>Mengelola komunitas pemain, mengumpulkan umpan balik, dan menerapkan pembaruan berkala</li>
  </ul>
</article>

<article className="timeline-element" tabIndex={0}>
  <time className="date" dateTime="2021">2021-2021</time>
  <h3>
    <SiNextdotjs
      style={{ verticalAlign: 'middle', marginRight: 6, color: '#00adb5' }}
      aria-label="Factory Icon"
    />
    Production & Finishing Operator
  </h3>
  <h4>
    CV Mandala Logam<br />
    Jl. Raya Leles No.15, Salamnunggal, Kec. Leles,<br />
    Kabupaten Garut, Jawa Barat 44152
  </h4>
  <p>
    Bekerja di pabrik karet sebagai operator produksi dan finishing. Tugas utama mencakup 
    pengolahan karet semi-jadi menjadi produk yang rata, bersih, dan siap untuk tahap selanjutnya. 
    Melakukan quality check di setiap tahap agar memenuhi standar mutu perusahaan.
  </p>
  <ul>
    <li>Menyiapkan cetakan dan mesin untuk proses pengepresan karet semi-jadi.</li>
    <li>Mengoperasikan mesin bubut khusus karet untuk meratakan dan membersihkan permukaan.</li>
    <li>Memeriksa hasil produksi setiap batch: memastikan ketebalan, kebersihan, dan bentuk sesuai spesifikasi.</li>
    <li>Melaporkan kerusakan mesin atau cacat produk kepada supervisor untuk perbaikan cepat.</li>
    <li>Melakukan packing akhir: menumpuk, menimbang, dan melabeli produk karet akhir sebelum dikirim.</li>
    <li>Mematuhi standar keselamatan kerja (APD lengkap, prosedur kebersihan) dan menjaga area produksi tetap rapi.</li>
  </ul>
</article>

<article className="timeline-element" tabIndex={0}>
  <time className="date" dateTime="2021-2022">2021 – 2022</time>
 <h3>
    <SiNextdotjs
      style={{ verticalAlign: 'middle', marginRight: 6, color: '#00adb5' }}
      aria-label="Factory Icon"
    />
    Production/Operator Mesin – Sampul Ijazah
  </h3>
  <h4>
    CV Al-Karomah<br />
    Jl. H. Hasan Arif, Bagendit, Kec. Banyuresmi,<br />
    Kabupaten Garut, Jawa Barat 44191
  </h4>
  <p>
    Bekerja di bagian produksi sampul ijazah untuk jenjang SD, SMP, dan SMA/SMK. 
    Tanggung jawab meliputi seluruh alur pembuatan hingga sampul jadi, mulai dari persiapan bahan hingga pengepakan akhir.
  </p>
  <ul>
    <li>Memotong dan mengukur bahan dasar (karton, kain, kertas khusus) sesuai spesifikasi ukuran ijazah.</li>
    <li>Mengoperasikan mesin emboss untuk mencetak nama sekolah, logo, dan elemen dekoratif lain di sampul.</li>
    <li>Memasukkan lembar karton ke dalam mesin cetak nama dan logo, memastikan hasil cetakan tajam dan simetris.</li>
    <li>Menambahkan lapisan plastik pelindung dan melipat sampul secara presisi agar rapi dan tahan lama.</li>
    <li>Memeriksa kualitas setiap sampul: memastikan tidak ada cacat cetak, bahan lembab, atau lipatan yang salah posisi.</li>
    <li>Mengepak sampul yang telah selesai, menata dalam kardus sesuai jumlah, dan menyiapkan untuk pengiriman ke instansi sekolah.</li>
    <li>Mematuhi standar keselamatan kerja: penggunaan APD (sarung tangan, masker), menjaga kebersihan area, dan memeriksa kondisi mesin secara rutin.</li>
  </ul>
</article>

<article className="timeline-element" tabIndex={0}>
  <time className="date" dateTime="2023-2025">2023 – Sekarang</time>
  <h3>
    <SiNextdotjs
      style={{ verticalAlign: 'middle', marginRight: 6, color: '#00adb5' }}
      aria-label="Factory Icon"
    />
    Admin Online Shop
  </h3>
  <h4>
    Istana Tas Anak 99<br />
    VXV3+2WR, Sindangsari, Kec. Leuwigoong,<br />
    Kabupaten Garut, Jawa Barat 44192
  </h4>
  <p>
    Bertanggung jawab sebagai admin e-commerce untuk beberapa platform (Lazada, TikTok Shop, 
    Shopee, Tokopedia). Melakukan seluruh rangkaian proses penjualan—mulai dari pembuatan 
    listing hingga pengiriman barang—serta pengelolaan stok tas anak dan dewasa.
  </p>
  <ul>
    <li>Mengunggah foto dan deskripsi produk (tas anak SD, TK, PAUD, ransel dewasa) ke semua 
        marketplace dengan optimasi kata kunci agar visibilitas meningkat.</li>
    <li>Memantau pesanan masuk, mencetak resi, dan berkoordinasi dengan jasa kurir untuk 
        penjemputan pengiriman.</li>
    <li>Mempersiapkan dan mengepak pesanan secara rapi, memastikan produk sesuai pesanan 
        sebelum dikirim ke pelanggan.</li>
    <li>Mengelola stok barang harian: mencatat produk yang masuk dan keluar, menyesuaikan data 
        stok di sistem agar selalu akurat.</li>
    <li>Melakukan pembaruan harga, promosi, dan diskon di setiap platform agar sesuai dengan 
        strategi penjualan dan tren pasar.</li>
    <li>Menangani pertanyaan pelanggan melalui chat atau pesan di platform, memberikan 
        informasi detail produk, dan menyelesaikan keluhan dengan cepat.</li>
    <li>Bekerja sama dengan tim gudang untuk memastikan ketersediaan barang dan menjaga 
        persediaan tetap optimal.</li>
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
