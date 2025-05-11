import { portfolioList } from '../data/DataPortfolio';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import '../styles/Portfolio.css';

function Portfolio() {
  return (
    <section id="portfolio">
      {/* Metadata untuk SEO */}
      <Helmet>
        <title>Portfolio - Agit Rahadian</title>
        <meta
          name="description"
          content="Lihat proyek-proyek portofolio saya, termasuk pengembangan website, aplikasi internal, dan solusi digital lainnya."
        />
        <meta
          name="keywords"
          content="Agit Rahadian, Portfolio, STMIK MARDIRA INDONESIA, STMIK, MARDIRA, STMIK MARDIRA Full-Stack Developer, Web Developer, Programmer, Digital Solutions, Clean Code, Responsive Design"
        />
        <meta name="author" content="Agit Rahadian" />
        <meta property="og:title" content="Portfolio - Agit Rahadian" />
        <meta
          property="og:description"
          content="Lihat proyek-proyek portofolio saya, termasuk pengembangan website, aplikasi internal, dan solusi digital lainnya."
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
              "description": "Lihat proyek-proyek portofolio saya, termasuk pengembangan website, aplikasi internal, dan solusi digital lainnya.",
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
        <h1>Project Portfolio Saya</h1>
        <p>
          Berikut adalah beberapa proyek yang telah saya kerjakan, mencakup pengembangan website, aplikasi internal, dan solusi digital lainnya.
        </p>
        <div className="grid">
          {portfolioList.map((item) => (
            <div className="item" key={item.id}>
              <div className="box">
                <Link to={`/portfolio/${item.id}`}>
                  <img
                    src={item.images[0].src}
                    alt={`Gambar proyek ${item.title}`}
                    height={item.images[0].height || 170}
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