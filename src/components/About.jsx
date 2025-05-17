import { Helmet } from 'react-helmet';
import { FaHtml5 } from 'react-icons/fa';
import { MdCss } from 'react-icons/md';
import { FaPhp } from 'react-icons/fa6';
import { FaReact } from 'react-icons/fa';
import { SiXampp } from 'react-icons/si';
import { FaLaravel } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';

import '../styles/About.css';

function About() {
  return (
    <section id="about">
      {/* Metadata untuk SEO */}
      <Helmet>
        <title>Tentang Agit Rahadian - Full-Stack Web Developer</title>
        <meta
          name="description"
          content="Agit Rahadian adalah Full-Stack Web Developer dengan pengalaman membangun website sekolah dan aplikasi pendidikan sejak 2020. Menguasai PHP, Laravel, React & MySQL."
        />
        <meta
          name="keywords"
          content="Agit Rahadian, Agit, agit, AGIT, AgitRahadian, Agitrahadian, agitrahadian, AGITRAHADIAN, AGIT RAHADIAN, Portfolio, STMIK MARDIRA INDONESIA, STMIK, MARDIRA, STMIK MARDIRA, Full-Stack Developer, Web Developer, Programmer, Digital Solutions, Clean Code, Responsive Design, Garut, Indonesia"
        />
        <meta name="author" content="Agit Rahadian" />
        <meta property="og:title" content="Tentang Agit Rahadian - Full-Stack Web Developer" />
        <meta
          property="og:description"
          content="Agit Rahadian adalah Full-Stack Web Developer dengan pengalaman membangun website sekolah dan aplikasi pendidikan sejak 2020. Menguasai PHP, Laravel, React & MySQL."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://agitrahadian.my.id/about" />
        <meta property="og:image" content="https://agitrahadian.my.id/assets/profile-picture.webp" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Agit Rahadian",
              "jobTitle": "Full-Stack Web Developer",
              "description": "Seorang Full-Stack Web Developer yang fokus menciptakan solusi digital praktis dan user-friendly untuk sektor pendidikan di Indonesia.",
              "url": "https://agitrahadian.my.id",
              "image": "https://agitrahadian.my.id/assets/profile-picture.webp",
              "birthDate": "2002-07-14",
              "alumniOf": [
                {
                  "@type": "EducationalOrganization",
                  "name": "STMIK Mardira Indonesia",
                  "department": "Teknik Informatika - Prodi Sistem Informasi"
                },
                {
                  "@type": "EducationalOrganization",
                  "name": "SMA Negeri 10 Garut",
                  "department": "Jurusan IPA"
                }
              ],
              "knowsAbout": ["Web Development", "React", "Laravel", "PHP", "MySQL", "JavaScript", "CSS3", "HTML5"],
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance Web Developer"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Garut",
                "addressRegion": "Jawa Barat",
                "addressCountry": "Indonesia"
              },
              "sameAs": [
                "https://github.com/agitrahadian-22110006",
                "https://www.instagram.com/agitrhdn",
                "https://www.tiktok.com/@agitrahadian",
                "https://www.facebook.com/share/16HuZskNh5/"
              ]
            }
          `}
        </script>
      </Helmet>

      <div className="wrapper">
        <h1>About Me</h1>

        <div className="professional-bio">
          <h2>Siapa Agit Rahadian?</h2>
          <p>
            Agit Rahadian adalah seorang Full-Stack Web Developer lulusan STMIK Mardira Indonesia yang berspesialisasi dalam pengembangan website dan aplikasi untuk sektor pendidikan. Lahir pada 14 Juli 2002 di Garut, Jawa Barat, Agit telah mengembangkan berbagai solusi digital termasuk website profil sekolah Madrasah Aliyah AS-SIROJI dan sistem informasi akademik internal.
          </p>
          <p>
            Sebagai programmer yang peduli dengan kualitas pendidikan di Indonesia, Agit Rahadian menggabungkan keahlian teknis dengan pemahaman mendalam tentang kebutuhan institusi pendidikan. Fokus utamanya adalah menciptakan solusi digital yang tidak hanya fungsional, tetapi juga user-friendly dan berdampak positif.
          </p>
          <blockquote>
            "Setiap baris kode yang saya tulis adalah langkah kecil menuju transformasi digital pendidikan Indonesia." - Agit Rahadian
          </blockquote>
        </div>

        <p>
          Halo!! Saya <strong>Agit Rahadian</strong>, seorang <strong>Full-Stack Web Developer</strong> 
          yang memiliki fokus pada pengembangan solusi digital untuk dunia pendidikan. Sejak tahun <em>2020</em>, 
          saya telah membangun berbagai website profil sekolah, aplikasi internal madrasah, serta sistem manajemen informasi akademik—termasuk proyek <strong>Madrasah Aliyah AS-SIROJI</strong> yang dibangun dari nol.
        </p>

        <p>
          Saya memiliki keterampilan menyeluruh dari desain UI/UX, pengembangan frontend dan backend, hingga deployment ke server production. Berikut beberapa keahlian inti saya:
        </p>

        <ul className="highlights">
          <li><strong>UI/UX Design</strong> – Membuat antarmuka responsif dan intuitif untuk berbagai perangkat</li>
          <li><strong>Clean Code & Architecture</strong> – Penulisan kode yang efisien, reusable, dan mudah dimaintain</li>
          <li><strong>Performance Optimization</strong> – Memastikan kecepatan dan efisiensi dari sisi klien & server</li>
          <li><strong>Database Management</strong> – Perancangan dan pengelolaan database MySQL/PostgreSQL</li>
          <li><strong>CI/CD Workflow</strong> – Otomatisasi proses pengembangan hingga live production</li>
        </ul>

        <p>
          Di luar dunia coding, saya aktif berbagi tutorial pemrograman di blog pribadi, serta senang terlibat dalam komunitas open-source dan kegiatan edukatif digital. Tujuan saya adalah membangun aplikasi yang tidak hanya fungsional, tetapi juga berdampak langsung pada kualitas pendidikan di Indonesia.
        </p>

        <h2>Technologies & Tools</h2>
        <div className="skills">
          <div className="skill-item">
            <FaHtml5 aria-label="HTML5" title="HTML5" />
            <span>HTML5</span>
          </div>
          <div className="skill-item">
            <MdCss aria-label="CSS3" title="CSS3" />
            <span>CSS3</span>
          </div>
          <div className="skill-item">
            <IoLogoJavascript aria-label="JavaScript" title="JavaScript" />
            <span>JavaScript</span>
          </div>
          <div className="skill-item">
            <FaReact aria-label="React" title="React" />
            <span>React</span>
          </div>
          <div className="skill-item">
            <FaPhp aria-label="PHP" title="PHP" />
            <span>PHP</span>
          </div>
          <div className="skill-item">
            <FaLaravel aria-label="Laravel" title="Laravel" />
            <span>Laravel</span>
          </div>
          <div className="skill-item">
            <SiXampp aria-label="XAMPP" title="XAMPP" />
            <span>XAMPP</span>
          </div>
          <div className="skill-item">
            <FaGithub aria-label="Git & GitHub" title="Git & GitHub" />
            <span>Git & GitHub</span>
          </div>
        </div>

        <p>
          Lihat juga <a href="/#portfolio">proyek saya</a> untuk mengetahui lebih lanjut tentang apa yang telah saya kerjakan.
        </p>
      </div>
    </section>
  );
}

export default About;