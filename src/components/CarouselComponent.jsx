import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";
import { LanguageContext } from "../context/LanguageContext.jsx";

import img3 from "./images/185.jpg";
import img4 from "./images/795.jpg";
import img5 from "./images/OIP.webp";
import img6 from "./images/281417395288802025070906020929.jpg";
import img7 from "./images/maxresdefault.jpg";

export default function ImageCarousel() {
  const { theme } = useContext(ThemeContext);
  const { lang } = useContext(LanguageContext);
  const isArabic = lang === "ar";

  const images = [
    { src: img3, title: isArabic ? "مدرسة WE أسيوط" : "WE Assiut School" },
    { src: img4, title: isArabic ? "مختبرات حديثة" : "Modern Labs" },
    { src: img5, title: isArabic ? "فصول تقنية" : "Tech Classrooms" },
    { src: img6, title: isArabic ? "ورش عملية" : "Hands-on Workshops" },
    { src: img7, title: isArabic ? "طلابنا المتميزين" : "Our Outstanding Students" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div
      className="carousel-container"
      dir={isArabic ? "rtl" : "ltr"}
      style={{
        background: theme === "dark" ? "#0f0f1f" : "#f9f9f9",
        padding: "3rem 0",
        position: "relative",
        textAlign: "center",
      }}
    >
      <div className="carousel-wrapper" style={{ position: "relative", height: "220px" }}>
        {images.map((img, idx) => (
          <div
            key={idx}
            style={{
              opacity: idx === currentIndex ? 1 : 0,
              transition: "opacity 1s ease",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "300px",
              height: "200px",
            }}
          >
            <img
              src={img.src}
              alt={img.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "12px",
                boxShadow: theme === "dark"
                  ? "0 10px 25px rgba(0,0,0,0.7)"
                  : "0 10px 25px rgba(0,0,0,0.2)"
              }}
            />
            <div style={{
              position: "absolute",
              bottom: "10px",
              width: "100%",
              textAlign: "center",
              color: theme === "dark" ? "#fff" : "#111",
              background: theme === "dark" ? "rgba(0,0,0,0.5)" : "rgba(255,255,255,0.6)",
              padding: "5px 0",
              borderRadius: "0 0 12px 12px",
              fontWeight: "600"
            }}>
              {img.title}
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        style={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          border: "none",
          background: theme === "dark" ? "#222" : "#007bff",
          color: "#fff",
          padding: "0.6rem 1rem",
          borderRadius: "8px",
          cursor: "pointer",
          opacity: 0.7,
        }}
      >
        {isArabic ? ">" : "<"}
      </button>
      <button
        onClick={nextSlide}
        style={{
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
          border: "none",
          background: theme === "dark" ? "#222" : "#007bff",
          color: "#fff",
          padding: "0.6rem 1rem",
          borderRadius: "8px",
          cursor: "pointer",
          opacity: 0.7,
        }}
      >
        {isArabic ? "<" : ">"}
      </button>
    </div>
  );
}
