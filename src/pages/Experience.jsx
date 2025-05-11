import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import { Helmet } from 'react-helmet';
import { SiNextdotjs } from "react-icons/si";

function Experience() {
  return (
    <>
      {/* Metadata untuk SEO */}
      <Helmet>
        <title>Pengalaman Kerja - Agit Rahadian</title>
        <meta
          name="description"
          content="Lihat pengalaman kerja saya, termasuk peran sebagai Art Director dan kontribusi dalam desain kreatif, pengalaman pengguna, dan pemasaran online."
        />
        <meta
          name="keywords"
          content="Agit Rahadian, Full-Stack Developer, Web Developer, Programmer, Solusi Digital, Portofolio, Portfolio, STMIK MARDIRA INDONESIA, STMIK, MARDIRA, STMIK MARDIRA Full-Stack Developer, Web Developer, Programmer, Digital Solutions, Clean Code, Responsive Design, Pengalaman Kerja, Art Director, Desain Kreatif, Pengalaman Pengguna, SEO, Pemasaran Online"
        />
        <meta name="author" content="Agit Rahadian" />
        <meta property="og:title" content="Pengalaman Kerja - Agit Rahadian" />
        <meta
          property="og:description"
          content="Lihat pengalaman kerja saya, termasuk peran sebagai Art Director dan kontribusi dalam desain kreatif, pengalaman pengguna, dan pemasaran online."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/experience" />
      </Helmet>

      <Navbar />
      <div className="wrapper">
        <h1>Pengalaman Kerja</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2025 - present"
            iconStyle={{ background: '#222831', color: '#fff' }}
            icon={<SiNextdotjs aria-label="Next.js Icon" />}
          >
            <h3 className="vertical-timeline-element-title">Art Director</h3>
            <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
            <p>
              Creative Direction, User Experience, Visual Design, SEO, Online Marketing
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023 - 2024"
            iconStyle={{ background: '#222831', color: '#fff' }}
            icon={<SiNextdotjs aria-label="Next.js Icon" />}
          >
            <h3 className="vertical-timeline-element-title">Art Director</h3>
            <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
            <p>
              Creative Direction, User Experience, Visual Design, SEO, Online Marketing
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Experience;