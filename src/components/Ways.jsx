import { useContext, useState } from "react";
import { LanguageContext } from "../context/LanguageContext.jsx";
import { ThemeContext } from "../context/ThemeContext.jsx";

const featuresData = [
  {
    id: 1,
    title: { en: "Fast Performance", ar: "أداء سريع" },
    description: { en: "Optimized for speed and efficiency.", ar: "محسّن للسرعة والكفاءة" },
    icon: "⚡"
  },
  {
    id: 2,
    title: { en: "Secure", ar: "آمن" },
    description: { en: "Top-notch security for your data.", ar: "أعلى مستويات الأمان لبياناتك" },
    icon: "🔒"
  },
  {
    id: 3,
    title: { en: "Cloud Sync", ar: "مزامنة سحابية" },
    description: { en: "Access your data anywhere, anytime.", ar: "الوصول لبياناتك في أي وقت ومن أي مكان" },
    icon: "☁️"
  },
  {
    id: 4,
    title: { en: "AI Powered", ar: "مدعوم بالذكاء الاصطناعي" },
    description: { en: "Smart features to boost productivity.", ar: "ميزات ذكية لتعزيز الإنتاجية" },
    icon: "🤖"
  },
  {
    id: 5,
    title: { en: "Responsive Design", ar: "تصميم متجاوب" },
    description: { en: "Looks perfect on any device.", ar: "يظهر بشكل مثالي على أي جهاز" },
    icon: "📱"
  },
];

export default function FeaturesShowcase() {
  const { lang } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);
  const isArabic = lang === "ar";

  const [activeFeature, setActiveFeature] = useState(null);

  return (
    <section className="features-section" dir={isArabic ? "rtl" : "ltr"}>
      <div className="container">
        <h2 className="section-title">
          {isArabic ? "مميزاتنا" : "Our Features"}
        </h2>
        <p className="section-subtitle">
          {isArabic
            ? "استكشف مميزاتنا بطريقة تفاعلية وجذابة."
            : "Explore our features interactively and elegantly."}
        </p>

        <div className="features-grid">
          {featuresData.map((feature) => (
            <div
              key={feature.id}
              className="feature-card"
              onClick={() => setActiveFeature(feature)}
            >
              <div className="feature-card-inner">
                <div className="feature-front">
                  <div className="feature-icon">{feature.icon}</div>
                  <h3>{isArabic ? feature.title.ar : feature.title.en}</h3>
                </div>
                <div className="feature-back">
                  <p>{isArabic ? feature.description.ar : feature.description.en}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeFeature && (
        <div className="lightbox" onClick={() => setActiveFeature(null)}>
          <h2>{isArabic ? activeFeature.title.ar : activeFeature.title.en}</h2>
          <p>{isArabic ? activeFeature.description.ar : activeFeature.description.en}</p>
        </div>
      )}

      <style>{`
        .features-section {
          padding: 6rem 2rem;
          background: ${theme === "dark" ? "#111" : "#f5f5f5"};
          color: ${theme === "dark" ? "#fff" : "#111"};
          font-family: 'Poppins', sans-serif;
          transition: all 0.3s;
        }

        .container { max-width: 1200px; margin: 0 auto; }

        .section-title {
          font-size: 2.8rem;
          font-weight: 900;
          text-align: center;
          margin-bottom: 1rem;
          background: linear-gradient(90deg, #8b00ff, #c473ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .section-subtitle {
          text-align: center;
          font-size: 1.3rem;
          margin-bottom: 3rem;
          color: ${theme === "dark" ? "#ccc" : "#555"};
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 2rem;
        }

        .feature-card {
          perspective: 1000px;
          cursor: pointer;
        }

        .feature-card-inner {
          position: relative;
          width: 100%;
          height: 250px;
          text-align: center;
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }

        .feature-card:hover .feature-card-inner {
          transform: rotateY(180deg);
        }

        .feature-front,
        .feature-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 20px;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
          padding: 1rem;
        }

        .feature-front {
          background: ${theme === "dark" ? "#222" : "#fff"};
          font-size: 1.2rem;
          transition: background 0.3s;
        }

        .feature-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .feature-back {
          background: linear-gradient(135deg, #8b00ff, #c473ff);
          color: #fff;
          transform: rotateY(180deg);
          font-size: 1rem;
        }

        /* Lightbox */
        .lightbox {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.95);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          cursor: zoom-out;
          padding: 2rem;
          color: #fff;
        }

        .lightbox h2 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .lightbox p {
          font-size: 1.2rem;
        }

        @media (max-width:768px) {
          .feature-card-inner { height: 220px; }
        }
      `}</style>
    </section>
  );
}
