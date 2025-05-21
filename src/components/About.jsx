import { Helmet } from 'react-helmet-async';
import { FaHtml5, FaPhp, FaReact, FaLaravel, FaGithub } from 'react-icons/fa';
import { MdCss } from 'react-icons/md';
import { IoLogoJavascript } from 'react-icons/io';
import { SiXampp } from 'react-icons/si';

import '../styles/About.css';

function About() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Apa spesialisasi Agit Rahadian sebagai Web Developer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Agit Rahadian adalah Full-Stack Web Developer yang fokus pada pengembangan website pendidikan seperti profil sekolah dan sistem informasi akademik."
        }
      },
      {
        "@type": "Question",
        "name": "Apa latar belakang pendidikan Agit Rahadian?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Agit Rahadian merupakan lulusan S1 Sistem Informasi dari STMIK Mardira Indonesia."
        }
      },
      {
        "@type": "Question",
        "name": "Bagaimana cara menghubungi Agit Rahadian?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Anda dapat menghubungi melalui email agitrahadian140702@gmail.com atau WhatsApp 087758263820."
        }
      }
    ]
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Agit Rahadian",
    "jobTitle": "Full-Stack Web Developer",
    "url": "https://agitrahadian.my.id",
    "image": "https://agitrahadian.my.id/assets/profile-picture.avif",
    "alumniOf": [
      { "@type": "EducationalOrganization", "name": "STMIK Mardira Indonesia" },
      { "@type": "EducationalOrganization", "name": "SMA Negeri 10 Garut" }
    ],
    "knowsAbout": ["React", "Laravel", "PHP", "MySQL", "JavaScript", "CSS", "HTML"],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Garut",
      "addressRegion": "Jawa Barat",
      "addressCountry": "Indonesia"
    },
    "sameAs": [
      "https://github.com/agitrahadian-22110006",
      "https://www.instagram.com/agitrhdn"
    ]
  };

  return (
    <section id="about">
      <Helmet>
        <title>About Agit Rahadian - Full-Stack Developer Indonesia</title>
        <meta name="description" content="Profil lengkap Agit Rahadian, Full-Stack Web Developer dari Garut yang mengembangkan sistem informasi dan aplikasi pendidikan digital." />
        <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="about-wrapper">
        <h1 className="gradient-title">Tentang Saya</h1>

        <div className="about-bio">
          <p>
            Halo! Saya <strong>Agit Rahadian</strong>, seorang <em>Full-Stack Web Developer</em> dari Garut, Jawa Barat. Fokus saya adalah membangun solusi digital pendidikan, seperti website sekolah dan sistem informasi akademik.
          </p>
          <p>
            Saya percaya bahwa teknologi yang tepat dapat menyederhanakan proses belajar dan mengajar. Dengan keahlian di bidang frontend dan backend, saya menciptakan aplikasi yang ringan, cepat, dan ramah pengguna.
          </p>
        </div>

        <blockquote className="motto">
          “Teknologi bukan hanya alat, tapi jembatan menuju pendidikan yang inklusif dan efisien.”
        </blockquote>

        <h2>Skill & Tools</h2>
        <div className="skills-grid">
          <div><FaHtml5 /> <span>HTML5</span></div>
          <div><MdCss /> <span>CSS3</span></div>
          <div><IoLogoJavascript /> <span>JavaScript</span></div>
          <div><FaReact /> <span>React</span></div>
          <div><FaPhp /> <span>PHP</span></div>
          <div><FaLaravel /> <span>Laravel</span></div>
          <div><SiXampp /> <span>XAMPP</span></div>
          <div><FaGithub /> <span>GitHub</span></div>
        </div>

        <h2>FAQ</h2>
        <div className="faq-section">
          <div>
            <h3>Spesialisasi?</h3>
            <p>Sistem informasi akademik, aplikasi pendidikan, website sekolah modern.</p>
          </div>
          <div>
            <h3>Pendidikan?</h3>
            <p>Lulusan S1 Sistem Informasi dari STMIK Mardira Indonesia.</p>
          </div>
          <div>
            <h3>Kontak?</h3>
            <p>Email: agitrahadian140702@gmail.com<br />WhatsApp: 087758263820</p>
          </div>
        </div>

        <div className="about-cta">
          <h2>Tertarik Bekerja Sama?</h2>
          <p>
            Ayo kita bangun aplikasi pendidikan yang modern, fungsional, dan bermanfaat bagi masyarakat. Hubungi saya untuk memulai kolaborasi!
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
