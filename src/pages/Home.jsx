import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Portfolio from "../components/Portfolio";
import About from "../components/About";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <>
      {/* Metadata untuk SEO */}
      <Helmet>
        <title>Agit Rahadian - Full-Stack Web Developer</title>
        <meta
          name="description"
          content="Selamat datang di portofolio Agit Rahadian, seorang Full-Stack Web Developer yang berfokus pada pengembangan solusi digital modern dan responsif."
        />
        <meta
          name="keywords"
          content="Agit Rahadian, Agit, agit, AGIT, AgitRahadian, Agitrahadian, agitrahadian, AGITRAHADIAN, AGIT RAHADIAN, Portfolio, STMIK MARDIRA INDONESIA, STMIK, MARDIRA, STMIK MARDIRA Full-Stack Developer, Web Developer, Programmer, Digital Solutions, Clean Code, Responsive Design"
        />
        <meta name="author" content="Agit Rahadian" />
        <meta property="og:title" content="Agit Rahadian - Full-Stack Web Developer" />
        <meta
          property="og:description"
          content="Selamat datang di portofolio Agit Rahadian, seorang Full-Stack Web Developer yang berfokus pada pengembangan solusi digital modern dan responsif."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://agitrahadian.my.id" />
        <meta property="og:image" content="https://agitrahadian.my.id/assets/profile-picture.webp" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Agit Rahadian - Full-Stack Web Developer",
              "description": "Selamat datang di portofolio Agit Rahadian, seorang Full-Stack Web Developer yang berfokus pada pengembangan solusi digital modern dan responsif.",
              "url": "https://agitrahadian.my.id"
            }
          `}
        </script>
      </Helmet>

      <Navbar />
      <Header />
      <Portfolio />
      <About />
      <Footer />
    </>
  );
}

export default Home;