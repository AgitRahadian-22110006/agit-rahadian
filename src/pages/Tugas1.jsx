import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/IsiTugas.css';
import tugasList from '../data/TugasData';

export default function Tugas1() {
  const tugas = tugasList.find((item) => item.id === 1);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Beranda", "item": "https://agitrahadian.my.id/" },
      { "@type": "ListItem", "position": 2, "name": "Tugas", "item": "https://agitrahadian.my.id/tugas" },
      { "@type": "ListItem", "position": 3, "name": tugas.title, "item": `https://agitrahadian.my.id${tugas.link}` }
    ]
  };

  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `https://agitrahadian.my.id${tugas.link}`,
    "url": `https://agitrahadian.my.id${tugas.link}`,
    "name": `Detail ${tugas.title} – Agit Rahadian`,
    "description": tugas.description
  };

  const structuredData = [breadcrumbSchema, webpageSchema, tugas.structuredData];

  return (
    <>
      <SEO
        title={`Detail ${tugas.title}`}
        description={tugas.description}
        keywords="Logika First Order, FOL, Tugas 1, Agit Rahadian"
        canonical={tugas.link}
        structuredData={structuredData}
      />

      <Navbar />

      <main className="tugas1-page container" role="main" aria-labelledby="judul-tugas1">
        <header className="tugas1-header">
          <h1 id="judul-tugas1" className="tugas1-title">Tugas 1: Logika First Order</h1>
        </header>

        {/* Bagian 1 */}
        <section className="tugas1-content" aria-labelledby="section-1">
          <h2 id="section-1"><i className="fas fa-lightbulb" /> 1. Pelajari Logika First Order dan Contoh Kasusnya</h2>
          <p><strong>Pengertian:</strong> Logika First Order (First Order Logic/FOL) adalah sistem logika yang menggunakan predikat, kuantor, dan variabel untuk menyatakan fakta tentang objek di dunia nyata.</p>
          <h3>Ciri-ciri utama:</h3>
          <ul>
            <li>Memiliki kuantor universal (∀) dan eksistensial (∃)</li>
            <li>Menyatakan sifat objek dengan predikat (misalnya: Manusia(x))</li>
            <li>Digunakan dalam AI, basis data, sistem pakar, dll.</li>
          </ul>
          <h3>Contoh kasus:</h3>
          <ul>
            <li>∀x (Demam(x) ∧ Batuk(x) → Flu(x))</li>
            <li>∀x (Anggota(x) → ∃y (Meminjam(x, y)))</li>
          </ul>
        </section>

        {/* Bagian 2 */}
        <section className="tugas1-content" aria-labelledby="section-2">
          <h2 id="section-2"><i className="fas fa-pencil-alt" /> 2. Menuliskan Ekspresi dalam Logika First Order</h2>
          <p><strong>Pernyataan:</strong></p>
          <ol>
            <li>Semua mahasiswa informatika suka kecerdasan buatan</li>
            <li>Setiap yang paham pemrograman suka kecerdasan buatan</li>
            <li>Kesimpulan: Semua mahasiswa ilmu komputer paham pemrograman</li>
          </ol>
          <p><strong>Notasi:</strong></p>
          <ul>
            <li>M(x): x adalah mahasiswa informatika</li>
            <li>C(x): x suka kecerdasan buatan</li>
            <li>P(x): x paham pemrograman</li>
            <li>K(x): x adalah mahasiswa ilmu komputer</li>
          </ul>
          <h3>FOL:</h3>
          <ul>
            <li>∀x (M(x) → C(x))</li>
            <li>∀x (P(x) → C(x))</li>
            <li><strong>Kesimpulan:</strong> ∀x (K(x) → P(x))</li>
          </ul>
          <p><strong>Evaluasi Kesimpulan:</strong> Tidak valid, karena premis hanya menyatakan siapa yang menyukai kecerdasan buatan, bukan hubungan langsung antara mahasiswa ilmu komputer dan pemrograman.</p>
        </section>

        {/* Bagian 3 */}
        <section className="tugas1-content" aria-labelledby="section-3">
          <h2 id="section-3"><i className="fas fa-exchange-alt" /> 3. Konversi Kalimat ke FOL dan Pembuktian</h2>
          <p><strong>Pernyataan:</strong></p>
          <ol>
            <li>Setiap apel atau pear adalah buah</li>
            <li>Setiap buah memiliki warna kuning atau hijau atau merah</li>
            <li>Tidak ada pear berwarna merah</li>
            <li>Tidak ada buah manis berwarna hijau</li>
          </ol>
          <p><strong>Notasi:</strong></p>
          <ul>
            <li>A(x): x adalah apel</li>
            <li>R(x): x adalah pear</li>
            <li>B(x): x adalah buah</li>
            <li>K(x): x berwarna kuning</li>
            <li>H(x): x berwarna hijau</li>
            <li>M(x): x berwarna merah</li>
            <li>S(x): x adalah buah manis</li>
          </ul>
          <h3>FOL:</h3>
          <ul>
            <li>∀x ((A(x) ∨ R(x)) → B(x))</li>
            <li>∀x (B(x) → (K(x) ∨ H(x) ∨ M(x)))</li>
            <li>¬∃x (R(x) ∧ M(x))</li>
            <li>¬∃x (S(x) ∧ H(x))</li>
          </ul>
          <p><strong>Pembuktian:</strong> Berdasarkan premis, pear tidak berwarna merah dan buah manis tidak berwarna hijau. Maka, buah manis hanya mungkin berwarna kuning atau merah, dan pear hanya mungkin kuning atau hijau.</p>
        </section>

        {/* Navigasi kembali */}
        <nav className="back-link" aria-label="Navigasi kembali ke daftar tugas">
          <Link to="/tugas" className="btn-back">
            ← Kembali ke Daftar Tugas
          </Link>
        </nav>
      </main>

      <Footer />
    </>
  );
}
