import { useParams } from 'react-router-dom';
import { portfolioList } from '../data/DataPortfolio';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import SEO from '../components/SEO';
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
          canonical="https://agitrahadian.my.id/404"
        >
          <meta name="robots" content="noindex, follow" />
        </SEO>
        <Navbar />
        <main className="not-found" role="main" aria-label="Halaman Tidak Ditemukan">
          <h1>Portfolio tidak ditemukan.</h1>
        </main>
        <Footer />
        <ScrollToTop />
      </>
    );
  }

  // Schema: CreativeWork + Breadcrumb
  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `https://agitrahadian.my.id/portfolio/${item.id}`,
    "name": item.title,
    "headline": item.title,
    "description": item.description,
    "image": item.images[0]?.src,
    "url": `https://agitrahadian.my.id/portfolio/${item.id}`,
    "author": {
      "@type": "Person",
      "name": "Agit Rahadian",
      "url": "https://agitrahadian.my.id"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Beranda", "item": "https://agitrahadian.my.id/" },
      { "@type": "ListItem", "position": 2, "name": "Portfolio", "item": "https://agitrahadian.my.id/portfolio" },
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
        canonical={`https://agitrahadian.my.id/portfolio/${item.id}`}
        structuredData={structuredData}
      >
        <meta name="robots" content="index, follow" />
      </SEO>

      <Navbar />
      <main id="detail-portfolio" className="detail-portfolio" role="main" aria-label={`Detail Portofolio: ${item.title}`}>
        <div className="container">
          <article className="detail-header">
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-visit"
              aria-label={`Kunjungi proyek ${item.title}`}
            >
              Kunjungi Situs
            </a>
            <h1 className="detail-title">{item.title}</h1>
            <p className="detail-description">{item.description}</p>
          </article>

          <section className="gallery" aria-label={`Galeri Gambar untuk proyek ${item.title}`}>
            {item.images.map((img, idx) => (
              <figure className="gallery-item" key={idx}>
                <div className="image-card">
                  <img
                    src={img.src}
                    alt={img.alt || `Gambar proyek ${item.title}`}
                    loading="lazy"
                    width="100%"
                  />
                  {img.caption && <figcaption className="card-caption">{img.caption}</figcaption>}
                </div>
              </figure>
            ))}
          </section>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default DetailPortfolio;
