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
    name: "Portfolio – Agit Rahadian",
    description:
      "Lihat proyek-proyek portofolio Agit Rahadian: website sekolah, aplikasi madrasah, dan sistem informasi akademik.",
    itemListElement: itemListElements,
  };

  return (
    <section id="portfolio">
      <SEO
        title="Portfolio – Agit Rahadian"
        description="Lihat portfolio Agit Rahadian, Full-Stack Developer dari Garut: koleksi proyek website sekolah, aplikasi madrasah, dan sistem informasi akademik."
        keywords="Portfolio, Web Development, Agit Rahadian, Aplikasi Pendidikan, Sistem Informasi Akademik"
        ogImage="https://agitrahadian.my.id/assets/portfolio1.webp"
        canonical="/portfolio"
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
            <div className="item" key={item.id}>
              <article className="box">
                <Link
                  to={`/portfolio/${item.id}`}
                  className="image-link"
                  aria-label={`Lihat detail ${item.title}`}
                >
                  <img
                    src={item.images[0].src}
                    alt={`Proyek ${item.title} oleh Agit Rahadian`}
                    loading="lazy"
                    width={600}
                    height={281}
                  />
                </Link>

                <h2>{item.title}</h2>
                <p className="description">{item.description}</p>

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
