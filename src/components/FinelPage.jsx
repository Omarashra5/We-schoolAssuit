import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";
import { LanguageContext } from "../context/LanguageContext.jsx";
import "./FinelPage.css";

export default function About() {
  const { theme } = useContext(ThemeContext);
  const { lang } = useContext(LanguageContext);
  const isArabic = lang === "ar";

  const milestones = [
    { year: "2022", title: isArabic ? "تأسيس المدرسة" : "School Founded", desc: isArabic ? "بدأت WE أسيوط الجديدة نشاطها التعليمي." : "WE Assiut New School started its educational journey." },
    { year: "2023", title: isArabic ? "إطلاق أول برنامج تكنولوجي" : "Launched First Tech Program", desc: isArabic ? "تم إطلاق برنامج التكنولوجيا التطبيقية بنجاح." : "Successfully launched Applied Technology Program." },
    { year: "2024", title: isArabic ? "التوسع في المعامل" : "Expansion in Laboratories", desc: isArabic ? "تم افتتاح مباني جديدة وتجهيز مختبرات حديثة." : "New buildings and modern labs inaugurated." },
    { year: "2026", title: isArabic ? "استقبال أول دفعة من الخريجين" : "First Graduating Class", desc: isArabic ? "خرجت أول دفعة من طلاب المدرسة المتميزين." : "First batch of outstanding students graduated." },
  ];

  return (
    <section className={`about-timeline ${theme}`}>
      <h2>{isArabic ? "أهم إنجازاتنا" : "Our Milestones"}<i class="fa-solid fa-pen"></i></h2>
      <div className="timeline-container">
        {milestones.map((item, idx) => (
          <div key={idx} className="timeline-card">
            <div className="timeline-circle" />
            <div className="timeline-info">
              <span className="timeline-year">{item.year}</span>
              <h3 className="timeline-title">{item.title}</h3>
              <p className={`timeline-desc ${theme==='dark'?'light':'dark'}`}>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
