import React from 'react';
import { useParams } from 'react-router-dom';
import { portfolioList } from '../data/DataPortfolio';
import { Helmet } from 'react-helmet';
import '../styles/DetailPortfolio.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

function DetailPortfolio() {
  const { id } = useParams();
  const item = portfolioList.find((p) => p.id === Number(id));

  if (!item) {
    return (
      <>
        <Helmet>
          <title>Portfolio Tidak Ditemukan - Agit Rahadian</title>
          <meta
            name="description"
            content="Halaman portfolio tidak ditemukan. Silakan kembali ke halaman utama untuk melihat proyek lainnya."
          />
        </Helmet>
        <Navbar />
        <p className="not-found">Portfolio tidak ditemukan.</p>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{item.title} - Agit Rahadian</title>
        <meta name="description" content={item.description} />
        <meta property="og:title" content={`${item.title} - Agit Rahadian`} />
        <meta property="og:description" content={item.description} />
        <meta property="og:image" content={item.images[0]?.src} />
        <meta property="og:url" content={`https://agitrahadian.my.id/portfolio/${item.id}`} />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "CreativeWork",
              "name": "${item.title}",
              "description": "${item.description}",
              "url": "https://agitrahadian.my.id/portfolio/${item.id}",
              "image": "${item.images[0]?.src}"
            }
          `}
        </script>
      </Helmet>
      <Navbar />
      <section id="detail-portfolio">
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