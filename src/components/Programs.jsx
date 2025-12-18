import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext.jsx";
import { ThemeContext } from "../context/ThemeContext.jsx";

import iconTech from "../components/programs/2.jpg";
import iconScience from "../components/programs/4.jpg";
import iconNetworks from "../components/images/network.jfif";
import iconTele from "../components/images/telycommunications.jfif";

export default function Programs() {
  const { lang } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);
  const isArabic = lang === "ar";

  const programs = [
    {
      id: 1,
      title: isArabic ? "البرمجة وتطوير البرمجيات" : "Programming & Software Development",
      description: isArabic
        ? "تعلم أساسيات البرمجة وتطوير تطبيقات الويب والبرمجيات."
        : "Learn programming fundamentals and software development.",
      image: iconTech
    },
    {
      id: 2,
      title: isArabic ? "العلوم التطبيقية" : "Applied Sciences",
      description: isArabic
        ? "دراسة الفيزياء والكيمياء والرياضيات بأسلوب عملي مبسط."
        : "Study physics, chemistry, and mathematics in a practical way.",
      image: iconScience
    },
    {
      id: 3,
      title: isArabic ? "الاتصالات" : "Communications",
      description: isArabic
        ? "دراسة أنظمة وتقنيات الاتصالات."
        : "Study communication systems and technologies.",
      image: iconTele
    },
    {
      id: 3,
      title: isArabic ? "الشبكات" : "Networks",
      description: isArabic
        ? "فهم الشبكات والبروتوكولات والبنية التحتية."
        : "Understand networks, protocols, and infrastructure.",
      image: iconNetworks
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "5rem 2rem",
        background:
          theme === "dark"
            ? "linear-gradient(180deg,#0f0f0f,#1a1a1a)"
            : "linear-gradient(180deg,#f8f9fa,#e9ecef)",
        color: theme === "dark" ? "#fff" : "#ffffffff"
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "4rem",
          fontSize: "3rem",
          fontWeight: "800",
          letterSpacing: "1px"
        }}
      >
        {isArabic ? "برامج المدرسة" : "Our Programs"}
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2.5rem"
        }}
        dir={isArabic?'rtl':'ltr'}
      >
        {programs.map((program) => (
          <div
            key={program.id}
            className="program-card"
            style={{
              position: "relative",
              height: "420px",
              borderRadius: "25px",
              overflow: "hidden",
              cursor: "pointer",
              boxShadow: "0 20px 40px rgba(0,0,0,0.35)"
            }}
          >
            <img
              src={program.image}
              alt={program.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.6s ease"
              }}
            />

            <div
              className="overlay"
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.2))",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                padding: "2rem",
                transition: "all 0.4s ease"
              }}
            >
              <h3 style={{ fontSize: "1.6rem", marginBottom: "0.5rem" }}>
                {program.title}
              </h3>
              <p style={{ fontSize: "1rem", opacity: 0.9, lineHeight: "1.6" }}>
                {program.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .program-card:hover img {
          transform: scale(1.15);
        }

        .program-card:hover .overlay {
          background: linear-gradient(
            to top,
            rgba(0,0,0,0.95),
            rgba(0,0,0,0.35)
          );
        }
      `}</style>
    </div>
  );
}
