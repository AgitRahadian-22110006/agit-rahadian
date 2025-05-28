import portfolio1 from '../assets/project1/portfolio1.webp';
import profilImg from '../assets/project1/profil.webp';
import saranaImg from '../assets/project1/sarana.webp';
import prestasiImg from '../assets/project1/prestasi.webp';
import kurikulumImg from '../assets/project1/kurikulum.webp';
import guruImg from '../assets/project1/guru.webp';
import ppdbImg from '../assets/project1/ppdb.webp';

import portfolio2 from '../assets/project2/nutri1.png';
import darkmodeImg from '../assets/project2/darkmode.png';
import fiturImg from '../assets/project2/fitur.png';
import inputImg from '../assets/project2/input.png';
import resultImg from '../assets/project2/result.png';
import infoImg from '../assets/project2/info.png';

export const portfolioList = [
  {
    id: 1,
    title: 'Madrasah Aliyah (MA) AS-SIROJI',
    description: `Website profil sekolah Madrasah Aliyah AS-SIROJI ini kami rancang dan kembangkan dengan pendekatan modern dan responsif. Kami menghadirkan halaman beranda interaktif, menu navigasi intuitif, dan konten lengkap mulai dari profil lembaga, visi-misi, struktur organisasi, hingga informasi PPDB. Setiap elemen didesain agar memudahkan pengunjung mengakses data guru, kurikulum, fasilitas, serta prestasi siswa dengan cepat dan nyaman.`,
    link: 'https://www.maassiroji.sch.id/',
    images: [
      {
        src: portfolio1,
        alt: 'Beranda MA AS-SIROJI - Desain beranda interaktif',
        caption: 'Desain beranda yang kami buat menampilkan logo, judul, dan banner interaktif.',
      },
      {
        src: profilImg,
        alt: 'Profil Sekolah MA AS-SIROJI - Visi, Misi, dan Struktur Organisasi',
        caption: 'Halaman Profil: kami sertakan sejarah, visi-misi, dan struktur organisasi.',
      },
      {
        src: saranaImg,
        alt: 'Sarana dan Prasarana MA AS-SIROJI',
        caption: 'Detail fasilitas: ruang kelas, laboratorium, dan lapangan sekolah kami dokumentasikan.',
      },
      {
        src: prestasiImg,
        alt: 'Prestasi Siswa MA AS-SIROJI',
        caption: 'Section Prestasi: menampilkan kejuaraan kaligrafi dan lomba ilmiah siswa.',
      },
      {
        src: kurikulumImg,
        alt: 'Kurikulum dan Ekstrakurikuler MA AS-SIROJI',
        caption: 'Bagian Kurikulum: daftar mata pelajaran dan ekstrakurikuler yang kami tampilkan.',
      },
      {
        src: guruImg,
        alt: 'Guru dan Karyawan MA AS-SIROJI',
        caption: 'Profil tenaga pendidik dan staf kami dengan foto dan bio singkat.',
      },
      {
        src: ppdbImg,
        alt: 'PPDB Online MA AS-SIROJI',
        caption: 'Halaman PPDB: formulir pendaftaran online dan informasi alur pendaftaran.',
      },
    ],
  },
  {
    id: 2,
    title: 'Agit NutriKids',
    description: `Agit NutriKids adalah aplikasi kalkulasi status gizi anak berbasis WHO Z-score. Aplikasi ini membantu orang tua mengevaluasi pertumbuhan anak berdasarkan tinggi badan, berat badan, dan usia. Dibangun menggunakan React, Vite, dan Tailwind CSS, aplikasi ini memiliki fitur lengkap seperti kalkulator interaktif, hasil visual, dan halaman edukatif seputar gizi anak.`,
    link: 'https://agit-nutri-kids.vercel.app/',
    images: [
      {
        src: portfolio2,
        alt: 'Beranda Agit NutriKids',
        caption: 'Tampilan awal aplikasi dengan tombol navigasi menuju fitur kalkulasi dan panduan gizi.',
      },
      {
        src: darkmodeImg,
        alt: 'Dark Mode Agit NutriKids',
        caption: 'Dukungan dark mode modern untuk kenyamanan pengguna di malam hari.',
      },
      {
        src: fiturImg,
        alt: 'Fitur Utama Agit NutriKids',
        caption: 'Penjelasan fitur-fitur utama seperti kalkulasi Z-score dan interpretasi status gizi.',
      },
      {
        src: inputImg,
        alt: 'Form Input Data Anak',
        caption: 'Form interaktif untuk memasukkan nama, usia, tinggi, berat, dan jenis kelamin.',
      },
      {
        src: resultImg,
        alt: 'Hasil Perhitungan Z-score',
        caption: 'Hasil status gizi lengkap dengan nilai Z-score, status WHO, dan rekomendasi.',
      },
      {
        src: infoImg,
        alt: 'Halaman Edukasi Gizi Anak',
        caption: 'Halaman informasi tentang HAZ/WHZ, zat gizi mikro, stimulasi, dan panduan orang tua.',
      },
    ],
  },
];
