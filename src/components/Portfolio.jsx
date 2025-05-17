import { portfolioList } from '../data/DataPortfolio';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import '../styles/Portfolio.css';

function Portfolio() {
  return (
    <section id="portfolio">
      {/* Metadata untuk SEO */}
      <Helmet>
        <title>Portfolio - Agit Rahadian | Proyek-Proyek Web Development</title>
        <meta
          name="description"
          content="Lihat portfolio Agit Rahadian, seorang Full-Stack Developer dari Garut. Koleksi proyek pengembangan website sekolah, aplikasi madrasah, dan sistem informasi akademik."
        />
        <meta
          name="keywords"
          content="Agit Rahadian, Agit, agit, AGIT, AgitRahadian, Agitrahadian, agitrahadian, AGITRAHADIAN, AGIT RAHADIAN, Portfolio, STMIK MARDIRA INDONESIA, STMIK, MARDIRA, STMIK MARDIRA, Proyek Web Development, Website Sekolah, MA AS-SIROJI, Garut, Jawa Barat, Indonesia"
        />
        <meta name="author" content="Agit Rahadian" />
        <meta property="og:title" content="Portfolio - Agit Rahadian | Proyek-Proyek Web Development" />
        <meta
          property="og:description"
          content="Lihat portfolio Agit Rahadian, seorang Full-Stack Developer dari Garut. Koleksi proyek pengembangan website sekolah, aplikasi madrasah, dan sistem informasi akademik."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://agitrahadian.my.id/portfolio" />
        <meta property="og:image" content="https://agitrahadian.my.id/assets/portfolio-thumbnail.png" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": "Portfolio - Agit Rahadian",
              "description": "Lihat proyek-proyek portofolio Agit Rahadian, termasuk pengembangan website, aplikasi internal, dan solusi digital lainnya.",
              "itemListElement": [
                ${portfolioList.map((item, index) => `
                  {
                    "@type": "ListItem",
                    "position": ${index + 1},
                    "url": "https://agitrahadian.my.id/portfolio/${item.id}",
                    "name": "${item.title}",
                    "image": "${item.images[0].src}",
                    "description": "${item.description}"
                  }
                `).join(',')}
              ]
            }
          `}
        </script>
      </Helmet>

      <div className="wrapper">
        <h1>Project Portfolio Agit Rahadian</h1>
        <p>
          Berikut adalah beberapa proyek yang telah saya, Agit Rahadian, kerjakan. Portofolio ini mencakup pengembangan website profil sekolah, aplikasi internal madrasah, dan sistem informasi akademik yang dirancang untuk memenuhi kebutuhan khusus klien saya.
        </p>
        <div className="grid">
          {portfolioList.map((item) => (
            <div className="item" key={item.id}>
              <div className="box">
                <Link to={`/portfolio/${item.id}`}>
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;