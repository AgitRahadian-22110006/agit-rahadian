import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function ScrollToTop() {
  const location = useLocation(); // Perbaikan penamaan variabel

  useEffect(() => {
    window.scrollTo(0, 0); // Menggulir ke atas setiap kali rute berubah
  }, [location]);

  return null; // Komponen tidak merender elemen apa pun
}

export default ScrollToTop;