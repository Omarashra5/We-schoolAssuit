import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext.jsx";
import { ThemeContext } from "../context/ThemeContext.jsx";
import aboutBg from "../components/images/student2.jpg";
import "./DownloadCV.css";

export default function About() {
  const { lang } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);
  const isArabic = lang === "ar";
  const cvLink = "/OmarAshraf_Cv.docx";
  const text = {
    en: {
      title: "About WE Assiut School & Applied Technology",
      intro: "Applied Technology Schools are pioneering educational institutions in Egypt, focusing on equipping students with practical technical skills that meet industry standards.",
      aboutSchool: "WE Assiut School, a branch of WE Schools, delivers quality education and modern technical programs, empowering students to innovate and excel.",
      websiteStory: "This website showcases our programs, news, and resources, built with React, React Router, Context API, and localStorage for seamless user experience.",
      developer: "Developed with passion by Omar Ashraf.",
      conclusion: "Our mission is to inspire young minds, bridge education and technology, and provide a digital gateway for students, parents, and educators."
    },
    ar: {
      title: "عن مدرسة WE أسيوط والمدارس التكنولوجيا",
      intro: "مدارس التكنولوجيا التطبيقية هي مؤسسات تعليمية رائدة في مصر، تركز على تزويد الطلاب بالمهارات التقنية العملية المتوافقة مع معايير الصناعة.",
      aboutSchool: "مدرسة WE أسيوط، فرع من مدارس WE، تقدم تعليمًا عالي الجودة وبرامج تقنية حديثة، تمكّن الطلاب من الابتكار والتفوق.",
      websiteStory: "يعرض هذا الموقع برامجنا وأخبارنا ومواردنا، وتم بناؤه باستخدام React و React Router و Context API و localStorage لتجربة مستخدم سلسة.",
      developer: "تم تطوير الموقع بشغف بواسطة عمر أشرف.",
      conclusion: "مهمتنا إلهام العقول الشابة، وجسر الفجوة بين التعليم والتكنولوجيا، وتوفير بوابة رقمية للطلاب وأولياء الأمور والمعلمين."
    }
  };

  return (
    <section
      dir={isArabic ? "rtl" : "ltr"}
      style={{
        minHeight: "100vh",
        padding: "6rem 2rem",
        background: theme === "dark" ? "#111" : "#f8f9fa",
        color: theme === "dark" ? "#fff" : "#111",
        backgroundImage: `url(${aboutBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: theme === "dark" ? "darken" : "lighten",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          background: theme === "dark" ? "rgba(0,0,0,0.7)" : "rgba(255,255,255,0.95)",
          padding: "3rem",
          borderRadius: "15px",
          boxShadow: theme === "dark" ? "0 0 25px rgba(255,255,255,0.2)" : "0 0 25px rgba(0,0,0,0.1)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: "2.8rem",
            fontWeight: 900,
            marginBottom: "2rem",
            background: "linear-gradient(90deg,#6b5bff,#00cfff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {text[lang].title}
        </h1>

        <div style={{ marginBottom: "2rem", lineHeight: 1.7, fontSize: "1.15rem" }}>
          <p style={{ marginBottom: "1.5rem" }}>{text[lang].intro}</p>

          <section style={{ marginBottom: "1.5rem" }}>
            <h3 style={{ fontWeight: 700, marginBottom: "0.7rem" }}>
              {isArabic ? "عن المدرسة" : "About the School"}
            </h3>
            <p>{text[lang].aboutSchool}</p>
          </section>

          <section style={{ marginBottom: "1.5rem" }}>
            <h3 style={{ fontWeight: 700, marginBottom: "0.7rem" }}>
              {isArabic ? "عن الموقع" : "About This Website"}
            </h3>
            <p>{text[lang].websiteStory}</p>
          </section>

          <section style={{ marginBottom: "1.5rem" }}>
            <h3 style={{ fontWeight: 700, marginBottom: "0.7rem" }}>
              {isArabic ? "المطور" : "Developer"}
            </h3>
            <p>{text[lang].developer}</p>
          </section>

          <section>
            <h3 style={{ fontWeight: 700, marginBottom: "0.7rem" }}>
              {isArabic ? "المهمة" : "Our Mission"}
            </h3>
            <p>{text[lang].conclusion}</p>
          </section>
        </div>
      </div>
      <div className="download-cv-container" data-theme={theme} dir={isArabic ? "rtl" : "ltr"}>
        <h2>{isArabic ? "تحميل السيرة الذاتية" : "Download My CV"}</h2>
        <p>{isArabic ? "تعرف على مطور الموقع" : "Get to know the website developer"}</p>
        <a href={cvLink} download className="download-cv-btn">
          {isArabic ? "تحميل الآن" : "Download Now"}
        </a>
      </div>
    </section>
  );
}
