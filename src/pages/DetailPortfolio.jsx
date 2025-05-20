// src/pages/DetailPortfolio.jsx
import { useParams } from 'react-router-dom';
import { portfolioList } from '../data/DataPortfolio';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import SEO from '../components/SEO'; // Komponen SEO menggunakan react-helmet-async
import '../styles/DetailPortfolio.css';

function DetailPortfolio() {
  const { id } = useParams();
  const item = portfolioList.find((p) => p.id === Number(id));

  if (!item) {
    return (
      <>
        <SEO
          title="Portfolio Tidak Ditemukan"
          description="Halaman portfolio yang Anda cari tidak ditemukan. Silakan kembali ke halaman utama untuk melihat proyek lainnya."
          canonical="/404"
        >
          <meta name="robots" content="noindex, follow" />
        </SEO>
        <Navbar />
        <main className="not-found">
          <h1>Portfolio tidak ditemukan.</h1>
        </main>
        <Footer />
      </>
    );
  }

  // Schema untuk proyek
  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": item.title,
    "description": item.description,
    "image": item.images[0]?.src,
    "url": `https://agitrahadian.my.id/portfolio/${item.id}`,
    "author": {
      "@type": "Person",
      "name": "Agit Rahadian",
      "url": "https://agitrahadian.my.id"
    }
  };

  // Breadcrumb schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Beranda", "item": "https://agitrahadian.my.id/" },
      { "@type": "ListItem", "position": 2, "name": "Portfolio", "item": "https://agitrahadian.my.id/#portfolio" },
      { "@type": "ListItem", "position": 3, "name": item.title, "item": `https://agitrahadian.my.id/portfolio/${item.id}` }
    ]
  };

  const structuredData = [projectSchema, breadcrumbSchema];

  return (
    <>
      <SEO
        title={item.title}
        description={`${item.description} Lihat detail proyek ${item.title} oleh Agit Rahadian, Full-Stack Web Developer asal Garut yang berspesialisasi dalam pengembangan solusi digital.`}
        keywords={`${item.title}, Web Development, Portofolio, Agit Rahadian, Garut`}
        ogImage={item.images[0]?.src}
        canonical={`/portfolio/${item.id}`}
        structuredData={structuredData}
      >
        <meta name="robots" content="index, follow" />
      </SEO>

      <Navbar />
      <section id="detail-portfolio" className="detail-portfolio">
        <div className="container">
          <div className="detail-header">
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-visit"
            >
              Kunjungi Situs
            </a>
            <h2 className="detail-title">{item.title}</h2>
            <p className="detail-description">{item.description}</p>
          </div>

          <div className="gallery">
            {item.images.map((img, idx) => (
              <div className="gallery-item" key={idx}>
                <div className="image-card">
                  <img src={img.src} alt={img.alt} />
                  <div className="card-caption">{img.caption}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default DetailPortfolio;