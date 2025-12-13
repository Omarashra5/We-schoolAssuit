import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";
import { LanguageContext } from "../context/LanguageContext.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSchool } from "@fortawesome/free-solid-svg-icons";

import "../components/CssCarousel.css";

import img3 from "./images/185.jpg";
import img4 from "./images/795.jpg";
import img5 from "./images/OIP.webp";
import img6 from "./images/281417395288802025070906020929.jpg";
import img7 from "./images/maxresdefault.jpg";

export default function ImageCarousel() {
  const { theme } = useContext(ThemeContext);
  const { lang } = useContext(LanguageContext);
  const isArabic = lang === "ar";

  const images = [img3, img4, img5, img6, img7];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // كل 4 ثواني
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  const title = isArabic
    ? "صور لمدارس WE للتكنولوجيا التطبيقية"
    : "Photo WE Applied Technology School";

  return (
    <div
      className="carousel-container"
      style={{
        background: theme === "dark" ? "#111" : "#f8f9fa",
        padding: "2rem 0",
      }}
      dir={isArabic ? "rtl" : "ltr"}
    >
      {/* عنوان Carousel */}
      <div className="carousel-header text-center mb-4">
        <h2 style={{ color: theme === "dark" ? "#fff" : "#111" }}>
          <FontAwesomeIcon icon={faSchool} className="me-2" />
          {title}
        </h2>
      </div>

      {/* صور Carousel */}
      <div className="carousel-wrapper">
        {images.map((img, idx) => {
          const diff = idx - currentIndex;
          const scale = diff === 0 ? 1.2 : 0.8; // الصورة المركزية أكبر
          const zIndex = diff === 0 ? 3 : 2 - Math.abs(diff);
          const opacity = Math.abs(diff) > 3 ? 0 : 1;
          const translateX = diff * 260; // مسافة أكبر مع الصور الكبيرة
          const rotateY = diff * 8; // ميلان بسيط للصور الجانبية

          return (
            <img
              key={idx}
              src={img}
              alt={`carousel-${idx}`}
              className="carousel-image"
              style={{
                transform: `translateX(${translateX}px) scale(${scale}) rotateY(${rotateY}deg)`,
                zIndex: zIndex,
                opacity: opacity,
                transition: "all 0.6s ease",
                borderRadius: "15px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
                width: "300px",
                height: "200px",
                objectFit: "cover",
              }}
            />
          );
        })}
      </div>

      {/* أزرار التنقل */}
      <button
        className="carousel-btn prev"
        style={{
          background: theme === "dark" ? "#1c1c1c" : "#007bff",
          color: "#fff",
        }}
        onClick={isArabic ? nextSlide : prevSlide} // لو عربي، السهم اليسار يبقى next
      >
        {isArabic ? ">" : "<"}
      </button>
      <button
        className="carousel-btn next"
        style={{
          background: theme === "dark" ? "#1c1c1c" : "#007bff",
          color: "#fff",
        }}
        onClick={isArabic ? prevSlide : nextSlide} // لو عربي، السهم اليمين يبقى prev
      >
        {isArabic ? "<" : ">"}
      </button>

    </div>
  );
}
