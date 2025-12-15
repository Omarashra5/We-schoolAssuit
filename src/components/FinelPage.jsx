import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";
import { LanguageContext } from "../context/LanguageContext.jsx";
import "./FinelPage.css"; // ملف CSS مخصص للفخامة

export default function About() {
  const { theme } = useContext(ThemeContext);
  const { lang } = useContext(LanguageContext);
  const isArabic = lang === "ar";

  return (
   <>
{/* ===== TIMELINE SECTION ===== */}
<div className="about-timeline">
  <h2>{isArabic ? "أهم إنجازاتنا" : "Our Milestones"}</h2>
  <div className="timeline-wrapper">
    {[
      { year: "2022", title: isArabic ? "تأسيس المدرسة" : "School Founded", desc: isArabic ? "بدأت WE أسيوط الجديدة نشاطها التعليمي." : "WE Assiut New School started its educational journey." },
      { year: "2023", title: isArabic ? "إطلاق أول برنامج تكنولوجي" : "Launched First Tech Program", desc: isArabic ? "تم إطلاق برنامج التكنولوجيا التطبيقية بنجاح." : "Successfully launched Applied Technology Program." },
      { year: "2024", title: isArabic ? "توسيع الحرم الجامعي" : "Campus Expansion", desc: isArabic ? "تم افتتاح مباني جديدة وتجهيز مختبرات حديثة." : "New buildings and modern labs inaugurated." },
      { year: "2026", title: isArabic ? "استقبال أول دفعة من الخريجين" : "First Graduating Class", desc: isArabic ? "خرجت أول دفعة من طلاب المدرسة المتميزين." : "First batch of outstanding students graduated." },
    ].map((item, idx) => (
      <div key={idx} className="timeline-item">
        <div className="timeline-circle" />
        <div className="timeline-content">
          <span className="timeline-year">{item.year}</span>
          <h3 className="timeline-title">{item.title}</h3>
          <p className="timeline-desc">{item.desc}</p>
        </div>
      </div>
    ))}
  </div>
</div>


   </>
  );
}
