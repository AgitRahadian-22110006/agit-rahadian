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
          content="Lihat pengalaman kerja Agit Rahadian sebagai Full-Stack Web Developer, termasuk pengembangan website sekolah, aplikasi internal, dan kontribusi pada solusi digital pendidikan."
        />
        <meta
          name="keywords"
         content="Agit Rahadian, Agit, agit, AGIT, AgitRahadian, Agitrahadian, agitrahadian, AGITRAHADIAN, AGIT RAHADIAN, Portfolio, STMIK MARDIRA INDONESIA, STMIK, MARDIRA, STMIK MARDIRA Full-Stack Developer, Web Developer, Programmer, Digital Solutions, Clean Code, Responsive Design"
        />
        <meta name="author" content="Agit Rahadian" />
        <meta property="og:title" content="Pengalaman Kerja - Agit Rahadian" />
        <meta
          property="og:description"
          content="Lihat pengalaman kerja Agit Rahadian sebagai Full-Stack Web Developer, termasuk pengembangan website sekolah, aplikasi internal, dan kontribusi pada solusi digital pendidikan."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://agitrahadian.my.id/experience" />
      </Helmet>

      <Navbar />
      <div className="wrapper">
        <h1>Pengalaman Kerja</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023 - Sekarang"
            iconStyle={{ background: '#222831', color: '#fff' }}
            icon={<SiNextdotjs aria-label="Next.js Icon" />}
          >
            <h3 className="vertical-timeline-element-title">Full-Stack Web Developer (Freelance)</h3>
            <h4 className="vertical-timeline-element-subtitle">Remote & Garut, Jawa Barat</h4>
            <p>
              Membangun dan mengembangkan berbagai Website profil sekolah, aplikasi internal madrasah, serta sistem manajemen informasi akademik. Fokus pada clean code, performa optimal, dan desain responsif. Berpengalaman menggunakan React, Laravel, PHP, dan MySQL.
            </p>
            <ul>
              <li>Website Profil Madrasah Aliyah AS-SIROJI (maassiroji.sch.id)</li>
              <li>Aplikasi PPDB Online & Sistem Informasi Akademik</li>
              <li>Website profil sekolah dan landing page edukasi</li>
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021 - 2023"
            iconStyle={{ background: '#222831', color: '#fff' }}
            icon={<SiNextdotjs aria-label="Next.js Icon" />}
          >
            <h3 className="vertical-timeline-element-title">Web Developer (Project Based)</h3>
            <h4 className="vertical-timeline-element-subtitle">STMIK Mardira Indonesia</h4>
            <p>
              Berperan dalam tim pengembangan aplikasi internal kampus dan sistem informasi akademik. Bertanggung jawab pada pengembangan frontend dan backend, deployment, serta optimasi performa aplikasi.
            </p>
            <ul>
              <li>Pengembangan aplikasi manajemen data mahasiswa</li>
              <li>Integrasi API dan deployment ke server kampus</li>
              <li>Maintenance dan update sistem internal</li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Experience;