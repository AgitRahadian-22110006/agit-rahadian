import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Portfolio from "../components/Portfolio";
import About from "../components/About";
import Footer from "../components/Footer";
import CustomPageSEO from "../components/CustomPageSEO";

function Home() {
  return (
    <>
      {/* Enhanced SEO Component untuk halaman beranda */}
      <CustomPageSEO 
        title="Agit Rahadian - Full-Stack Web Developer | Portfolio Resmi"
        description="Agit Rahadian adalah Full-Stack Web Developer berpengalaman dari Garut yang fokus pada pengembangan website sekolah, aplikasi pendidikan, dan solusi digital praktis untuk meningkatkan kualitas pendidikan di Indonesia."
        image="/assets/profile-picture.webp"
        url="https://agitrahadian.my.id"
        type="website"
        tags={[
          "Agit Rahadian", "Full-Stack Developer", "Web Developer Garut", 
          "Programmer Indonesia", "Website Sekolah", "Aplikasi Pendidikan",
          "Portfolio Developer", "STMIK Mardira Indonesia", "React Developer",
          "Laravel Developer", "PHP Developer", "Jasa Website Sekolah"
        ]}
      />

      <Navbar />
      <Header />
      <Portfolio />
      <About />
      <Footer />
    </>
  );
}

export default Home;