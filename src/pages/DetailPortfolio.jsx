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
          canonical="/404"
        />
        <Navbar />
        <p className="not-found">Portfolio tidak ditemukan.</p>
        <Footer />
        <ScrollToTop />
      </>
    );
  }

  // Structured Data
  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: item.title,
    description: item.description,
    image: item.images[0]?.src,
    url: `https://agitrahadian.my.id/portfolio/${item.id}`,
    author: {
      "@type": "Person",
      name: "Agit Rahadian",
      url: "https://agitrahadian.my.id"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { position: 1, "@type": "ListItem", name: "Beranda", item: "https://agitrahadian.my.id" },
      { position: 2, "@type": "ListItem", name: "Portfolio", item: "https://agitrahadian.my.id/#portfolio" },
      { position: 3, "@type": "ListItem", name: item.title, item: `https://agitrahadian.my.id/portfolio/${item.id}` }
    ]
  };

  const structuredData = [projectSchema, breadcrumbSchema];

  return (
    <>
      <SEO
        title={item.title}
        description={`${item.description} Lihat detail proyek ${item.title} oleh Agit Rahadian, Full-Stack Developer.`}
        keywords={`${item.title}, Portfolio, Agit Rahadian, Web Development`}
        ogImage={item.images[0]?.src}
        canonical={`/portfolio/${item.id}`}
        structuredData={structuredData}
      >
        <meta name="robots" content="index, follow" />
      </SEO>

      <Navbar />
      <section id="detail-portfolio">
        <div className="container">
          <div className="detail-header">
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-visit"
              >
                Kunjungi Situs
              </a>
            )}
            <h2 className="detail-title">{item.title}</h2>
            <p className="detail-description">{item.description}</p>
          </div>

          <div className="gallery">
            {item.images.map((img, idx) => {
              const base = img.src.replace(/\.(webp|png|jpg|jpeg)$/, '');
              return (
                <div className="gallery-item" key={idx}>
                  <picture>
                    <source
                      type="image/avif"
                      srcSet={`${base}-600x400.avif 600w, ${base}-1200x800.avif 1200w`}
                      sizes="(max-width: 600px) 100vw, 600px"
                    />
                    <source
                      type="image/webp"
                      srcSet={`${base}-600x400.webp 600w, ${base}-1200x800.webp 1200w`}
                      sizes="(max-width: 600px) 100vw, 600px"
                    />
                    <img
                      src={`${base}-600x400.webp`}
                      alt={img.alt || item.title}
                      loading="lazy"
                      decoding="async"
                      width={600}
                      height={400}
                    />
                  </picture>
                  {img.caption && <div className="card-caption">{img.caption}</div>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </>
  );
}

export default DetailPortfolio;
