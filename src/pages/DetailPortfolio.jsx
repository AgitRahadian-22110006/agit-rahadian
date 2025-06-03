// src/pages/DetailPortfolio.jsx
import { useParams } from 'react-router-dom';
import { portfolioList } from '../data/DataPortfolio';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import SEO from '../components/SEO';
import '../styles/DetailPortfolio.css';

export default function DetailPortfolio() {
  const { id } = useParams();
  const item = portfolioList.find((p) => p.id === Number(id));
  const siteUrl = 'https://agitrahadian.my.id';

  if (!item) {
    return (
      <>
        <SEO
          title="Portfolio Tidak Ditemukan – Agit Rahadian"
          description="Halaman portfolio yang Anda cari tidak ditemukan. Silakan kembali ke halaman utama untuk melihat proyek lainnya."
          canonical={`${siteUrl}/404`}
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

  // CreativeWork JSON-LD (Project)
  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${siteUrl}/portfolio/${item.id}`,
    name: item.title,
    headline: item.title,
    description: item.description,
    image: item.images[0]?.src,
    url: `${siteUrl}/portfolio/${item.id}`,
    author: {
      "@type": "Person",
      name: "Agit Rahadian",
      url: siteUrl
    }
  };

  // BreadcrumbList JSON-LD
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Beranda", item: `${siteUrl}/` },
      { "@type": "ListItem", position: 2, name: "Portfolio", item: `${siteUrl}/portfolio` },
      { "@type": "ListItem", position: 3, name: item.title, item: `${siteUrl}/portfolio/${item.id}` }
    ]
  };

  // Person JSON-LD
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Agit Rahadian",
    url: siteUrl,
    image: `${siteUrl}/android-chrome-512x512.png`,
    jobTitle: "Full-Stack Web Developer",
    sameAs: [
      "https://github.com/agitrahadian-22110006",
      "https://www.instagram.com/agitrhdn",
      "https://www.tiktok.com/@agitrahadian",
      "https://www.facebook.com/share/16HuZskNh5/",
      "https://wa.me/6287758263820"
    ],
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/portfolio/${item.id}`
    }
  };

  // Organization JSON-LD
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Agit Rahadian",
    url: siteUrl,
    logo: `${siteUrl}/android-chrome-512x512.png`,
    sameAs: personSchema.sameAs
  };

  // WebSite JSON-LD
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Agit Rahadian",
    url: siteUrl,
    logo: `${siteUrl}/android-chrome-512x512.png`,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/?s={search_term_string}`,
      "query-input": "required name=search_term_string"
    },
    publisher: {
      "@type": "Person",
      name: "Agit Rahadian"
    }
  };

  const structuredData = [
    projectSchema,
    breadcrumbSchema,
    personSchema,
    organizationSchema,
    websiteSchema
  ];

  return (
    <>
      <SEO
        title={item.title}
        description={`${item.description} Lihat detail proyek ${item.title} oleh Agit Rahadian, Full-Stack Web Developer asal Garut.`}
        keywords={`${item.title}, Web Development, Portofolio, Agit Rahadian, Garut`}
        ogImage={item.images[0]?.src}
        ogType="website"
        canonical={`${siteUrl}/portfolio/${item.id}`}
        structuredData={structuredData}
      >
        <meta name="robots" content="index, follow" />
      </SEO>

      <Navbar />
      <main
        id="detail-portfolio"
        className="detail-portfolio"
        role="main"
        aria-label={`Detail Portofolio: ${item.title}`}
      >
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
