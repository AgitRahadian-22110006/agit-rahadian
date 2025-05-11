import portfolio1 from '../assets/portfolio1.webp';
import profilImg from '../assets/profil.webp';
import saranaImg from '../assets/sarana.webp';
import prestasiImg from '../assets/prestasi.webp';
import kurikulumImg from '../assets/kurikulum.webp';
import guruImg from '../assets/guru.webp';
import ppdbImg from '../assets/ppdb.webp';

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
];