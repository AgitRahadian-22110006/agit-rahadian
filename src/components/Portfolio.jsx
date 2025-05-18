import { Link } from 'react-router-dom';
import { portfolioList } from '../data/DataPortfolio';
import SEO from '../components/SEO';
import '../styles/Portfolio.css';

function Portfolio() {
  // Bangun ItemList schema secara dinamis
  const itemListElements = portfolioList.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    url: `https://agitrahadian.my.id/portfolio/${item.id}`,
    name: item.title,
    image: item.images[0]?.src,
    description: item.description,
  }));

  const listSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Portfolio - Agit Rahadian",
    description:
      "Lihat proyek-proyek portofolio Agit Rahadian, termasuk pengembangan website, aplikasi internal, dan solusi digital lainnya.",
    itemListElement: itemListElements,
  };

  return (
    <section id="portfolio">
      <SEO
        title="Portfolio"
        description="Lihat portfolio Agit Rahadian, seorang Full-Stack Developer dari Garut. Koleksi proyek pengembangan website sekolah, aplikasi madrasah, dan sistem informasi akademik."
        keywords="Portfolio, Proyek Web Development, Agit Rahadian, Website Sekolah, Aplikasi Madrasah, Sistem Informasi Akademik"
        ogImage="https://agitrahadian.my.id/assets/portfolio1-600x281.webp"
        canonical="/portfolio"
        structuredData={listSchema}
      />

      <div className="wrapper">
        <h1>Project Portfolio Agit Rahadian</h1>
        <p>
          Berikut adalah beberapa proyek yang telah saya, <strong>Agit Rahadian</strong>, kerjakan. Portofolio ini mencakup pengembangan website profil sekolah, aplikasi internal madrasah, dan sistem informasi akademik yang dirancang untuk memenuhi kebutuhan khusus klien saya.
        </p>

        <div className="grid">
          {portfolioList.map((item) => {
            // derive base path and extensions for responsive images
            const src = item.images[0].src; // e.g., '/assets/portfolio1.webp'
            const base = src.replace(/\.(webp|png|jpg|jpeg)$/, '');
            return (
              <div className="item" key={item.id}>
                <div className="box">
                  <Link to={`/portfolio/${item.id}`}>
                    <picture>
                      {/* varian AVIF */}
                      <source
                        type="image/avif"
                        srcSet={`${base}-287x134.avif 287w, ${base}-600x281.avif 600w`}
                        sizes="(max-width: 600px) 100vw, 600px"
                      />
                      {/* varian WebP */}
                      <source
                        type="image/webp"
                        srcSet={`${base}-287x134.webp 287w, ${base}-600x281.webp 600w`}
                        sizes="(max-width: 600px) 100vw, 600px"
                      />
                      {/* fallback img */}
                      <img
                        src={`${base}-287x134.webp`}
                        alt={`Proyek ${item.title} oleh Agit Rahadian`}
                        loading="lazy"
                        decoding="async"
                        width={287}
                        height={134}
                      />
                    </picture>
                  </Link>
                  <h2>{item.title}</h2>
                  <p className="description">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
