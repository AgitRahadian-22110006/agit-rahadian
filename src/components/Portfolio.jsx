import { Link } from 'react-router-dom';
import { portfolioList } from '../data/DataPortfolio';
import SEO from '../components/SEO';
import '../styles/Portfolio.css';

function Portfolio() {
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
    "@id": "https://agitrahadian.my.id/portfolio#ItemList",
    "url": "https://agitrahadian.my.id/portfolio",
    "name": "Portfolio – Agit Rahadian",
    "description":
      "Lihat proyek-proyek portofolio Agit Rahadian: website sekolah, aplikasi madrasah, dan sistem informasi akademik.",
    "itemListElement": itemListElements,
  };

  return (
    <section id="portfolio">
      <SEO
        title="Portfolio – Agit Rahadian"
        description="Lihat portfolio Agit Rahadian, Full-Stack Developer dari Garut: koleksi proyek website sekolah, aplikasi madrasah, dan sistem informasi akademik."
        keywords="Portfolio, Web Development, Agit Rahadian, Aplikasi Pendidikan, Sistem Informasi Akademik"
        ogImage="https://agitrahadian.my.id/assets/portfolio1.webp"
        canonical="https://agitrahadian.my.id/portfolio"
        structuredData={listSchema}
      />

      <div className="wrapper">
        <h1>Project Portfolio Agit Rahadian</h1>
        <p>
          Temukan berbagai proyek yang telah saya kerjakan: profil sekolah, sistem akademik,
          dan aplikasi internal madrasah, dengan fokus clean code dan performa optimal.
        </p>

        <div className="grid">
          {portfolioList.map((item) => (
            <div className="item" key={item.id} itemProp="itemListElement">
              <article
                className="box"
                itemScope
                itemType="https://schema.org/CreativeWork"
              >
                <Link
                  to={`/portfolio/${item.id}`}
                  className="image-link"
                  aria-label={`Lihat detail ${item.title}`}
                  itemProp="url"
                >
                  <img
                    src={item.images[0]?.src}
                    alt={item.images[0]?.alt || `Gambar proyek ${item.title}`}
                    loading="lazy"
                    width={600}
                    height={281}
                    itemProp="image"
                  />
                </Link>

                <h2 itemProp="name">{item.title}</h2>
                <p className="description" itemProp="description">
                  {item.description.length > 180
                    ? item.description.slice(0, 180) + '...'
                    : item.description}
                </p>

                <Link
                  to={`/portfolio/${item.id}`}
                  className="view-btn"
                  aria-label={`Lihat detail ${item.title}`}
                >
                  Lihat Detail
                </Link>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
