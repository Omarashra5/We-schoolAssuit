import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext.jsx";
import { ThemeContext } from "../context/ThemeContext.jsx";
import aboutBg from "../components/images/student2.jpg"; 

export default function About() {
  const { lang } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);
  const isArabic = lang === "ar";

  const text = {
    en: {
      title: "About WE Assiut School & Applied Technology",
      intro: "Applied Technology Schools are pioneering educational institutions in Egypt, focusing on equipping students with practical technical skills that meet industry standards.",
      aboutSchool: "WE Assiut School, a branch of WE Schools, has been delivering quality education and modern technical programs, empowering students to innovate and excel in the technology sector.",
      websiteStory: "This website was developed to showcase our programs, news, and resources. It was built using modern web technologies including React, React Router, Context API, and localStorage for data handling. The development process took several weeks, carefully planning each component to ensure a smooth user experience.",
      developer: "The site was developed with passion and dedication by Omar Ashraf.",
      conclusion: "Our mission is to inspire young minds, bridge the gap between education and technology, and provide a digital gateway for students, parents, and educators."
    },
    ar: {
      title: "عن مدرسة WE أسيوط والمدارس التكنولوجيا",
      intro: "مدارس التكنولوجيا التطبيقية هي مؤسسات تعليمية رائدة في مصر، تركز على تزويد الطلاب بالمهارات التقنية العملية التي تتوافق مع معايير الصناعة.",
      aboutSchool: "مدرسة WE أسيوط، فرع من مدارس WE، تقدم تعليمًا عالي الجودة وبرامج تقنية حديثة، تمكّن الطلاب من الابتكار والتفوق في مجال التكنولوجيا.",
      websiteStory: "تم تطوير هذا الموقع لعرض برامجنا وأخبارنا ومواردنا. تم بناؤه باستخدام أحدث تقنيات الويب مثل React و React Router و Context API و localStorage لإدارة البيانات. استغرق تطوير الموقع عدة أسابيع، مع التخطيط لكل مكون بعناية لضمان تجربة مستخدم سلسة.",
      developer: "تم تطوير الموقع بشغف وإتقان بواسطة عمر أشرف.",
      conclusion: "مهمتنا هي إلهام العقول الشابة، وجسر الفجوة بين التعليم والتكنولوجيا، وتوفير بوابة رقمية للطلاب وأولياء الأمور والمعلمين."
    }
  };

  return (
    <div style={{
      background: theme === "dark" ? "#111" : "#f8f9fa",
      color: theme === "dark" ? "#fff" : "#000",
      minHeight: "100vh",
      paddingTop: "5rem",
      paddingBottom: "5rem",
      backgroundImage: `url(${aboutBg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundBlendMode: theme === "dark" ? "darken" : "lighten"
    }} dir={isArabic?'rtl':'ltr'}>
      <div style={{
        maxWidth: "900px",
        margin: "0 auto",
        background: theme === "dark" ? "rgba(0,0,0,0.7)" : "rgba(255,255,255,0.9)",
        padding: "3rem",
        borderRadius: "12px",
        boxShadow: theme === "dark" ? "0 0 20px rgba(255,255,255,0.2)" : "0 0 20px rgba(0,0,0,0.1)"
      }}>
        <h1 style={{ textAlign: "center", marginBottom: "2rem", fontSize: "2.5rem" }}>{text[lang].title}</h1>
        <p style={{ fontSize: "1.2rem", marginBottom: "1.5rem" }}>{text[lang].intro}</p>
        <p style={{ fontSize: "1.2rem", marginBottom: "1.5rem" }}>{text[lang].aboutSchool}</p>
        <p style={{ fontSize: "1.2rem", marginBottom: "1.5rem" }}>{text[lang].websiteStory}</p>
        <p style={{ fontSize: "1.2rem", fontWeight: "600", marginBottom: "1.5rem" }}>{text[lang].developer}</p>
        <p style={{ fontSize: "1.2rem" }}>{text[lang].conclusion}</p>
      </div>
    </div>
  );
}
