import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext.jsx";
import { ThemeContext } from "../context/ThemeContext.jsx";

const features = [
  {
    icon: "fa-solid fa-graduation-cap",
    title: { ar: "تعليم تطبيقي حقيقي", en: "Real Applied Education" },
    desc: { ar: "مناهج حديثة قائمة على التطبيق العملي وربط الطالب بسوق العمل.", en: "Modern curricula based on real practical training and market needs." },
  },
  {
    icon: "fa-solid fa-network-wired",
    title: { ar: "تخصصات مطلوبة", en: "In-Demand Specializations" },
    desc: { ar: "برمجة – اتصالات – شبكات.", en: "Telecom, Programming, Networks" },
  },
  {
    icon: "fa-solid fa-briefcase",
    title: { ar: "تدريب داخل شركات", en: "Corporate Training" },
    desc: { ar: "تدريب ميداني داخل شركات كبرى أثناء الدراسة.", en: "Hands-on training inside major companies during study." },
  },
  {
    icon: "fa-solid fa-certificate",
    title: { ar: "شهادات معتمدة", en: "Certified Programs" },
    desc: { ar: "شهادات معتمدة محليًا ودوليًا تؤهل لسوق العمل.", en: "Locally and internationally accredited certifications." },
  },
  {
    icon: "fa-solid fa-user-tie",
    title: { ar: "إعداد مهني متكامل", en: "Professional Preparation" },
    desc: { ar: "تنمية المهارات الشخصية والقيادية بجانب التعليم الفني.", en: "Developing soft skills and leadership alongside technical education." },
  },
  {
    icon: "fa-solid fa-road",
    title: { ar: "مستقبل مضمون", en: "Secure Career Path" },
    desc: { ar: "فرص عمل قوية أو استكمال الدراسة الجامعية.", en: "Strong job opportunities or continuing university education." },
  },
];

export default function FeaturesShowcase() {
  const { lang } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);
  const isArabic = lang === "ar";

  return (
    <section className={`features ${theme}`} dir={isArabic ? "rtl" : "ltr"}>
      <div className="features-header">
        <h2>{isArabic ? "لماذا مدرسة WE " : "Why WE School ? "}<i class="fa-solid fa-school"></i> </h2>
        <p>{isArabic ? "نقدّم تجربة تعليمية مختلفة تصنع مهندس المستقبل." : "We offer a unique educational experience shaping future professionals."}</p>
      </div>

      <div className="features-grid">
        {features.map((item, idx) => (
          <div className="feature-card" key={idx}>
            <div className="icon"><i className={item.icon}></i></div>
            <div className="content">
              <h3>{item.title[lang]}</h3>
              <p>{item.desc[lang]}</p>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .features { padding: 6rem 2rem; font-family: "Cairo", "Tajawal", system-ui, sans-serif; }
        .features.dark { background: linear-gradient(180deg, #0a0a0f, #111118); color: #fff; }
        .features.light { background: #f7f8fc; color: #111; }

        .features-header { max-width: 900px; margin: 0 auto 4rem; text-align: center; }
        .features-header h2 { font-size: 3rem; font-weight: 900; background: linear-gradient(90deg, #8b00ff, #c473ff); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .features-header p { margin-top: 1rem; font-size: 1.2rem; opacity: 0.75; }

        .features-grid { display: flex; flex-direction: column; gap: 2rem; max-width: 1000px; margin: auto; }

        .feature-card { display: grid; grid-template-columns: 80px 1fr; gap: 2rem; padding: 2rem 2.5rem; border-radius: 22px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); transition: 0.4s; }
        .features.light .feature-card { background: #fff; border: 1px solid #eee; }
        .feature-card:hover { transform: translateY(-6px); box-shadow: 0 25px 60px rgba(139,0,255,0.35); }

        .icon { font-size: 3rem; color: #8b00ff; display: flex; align-items: center; justify-content: center; }
         }

        [dir="rtl"] .feature-card { grid-template-columns: 1fr 80px; }

        @media (max-width: 768px) {
          .feature-card { grid-template-columns: 1fr; text-align: center; }
          .content { text-align: center; }
        }
      `}</style>
    </section>
  );
}
