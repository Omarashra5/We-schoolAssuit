import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";
import { LanguageContext } from "../context/LanguageContext.jsx";

export default function About() {
  const { theme } = useContext(ThemeContext);
  const { lang } = useContext(LanguageContext);
  const isArabic = lang === "ar";

  const milestones = [
    { year: "2020", title: isArabic ? "بدء مدارس WE" : "WE Schools Launched", desc: isArabic ? "تم الإطلاق تحت إشراف وزارة الاتصالات والتعليم." : "Launched under Ministry supervision." },
    { year: "2022", title: isArabic ? "توسّع وتدريب عملي" : "Expansion & Training", desc: isArabic ? "استمرار تقديم برامج تقنية مع التدريب العملي." : "Continued tech programs with hands-on training." },
    { year: "2024", title: isArabic ? "تخصصات جديدة" : "New Specializations", desc: isArabic ? "إضافة تطوير البرمجيات والشبكات وأمن المعلومات." : "Added software development, networking, and cybersecurity." },
    { year: "2025", title: isArabic ? "افتتاح 8 مدارس جديدة" : "8 New Schools", desc: isArabic ? "تغطية 27 محافظة في مصر." : "Covering 27 governorates in Egypt." },
    { year: "2025", title: isArabic ? "شهادات معتمدة" : "Accredited Certificates", desc: isArabic ? "طلاب المدارس يحصلون على دبلوم فني وشهادات مهنية." : "Students earn technical diploma & certified training." }
  ];

  return (
    <section className={`about-timeline ${theme}`}>
      <h2>{isArabic ? "أهم إنجازاتنا" : "Our Milestones"}</h2>
      <div className="timeline-container">
        {milestones.map((item, idx) => (
          <div key={idx} className="timeline-card">
            <div className="timeline-circle" />
            <div className="timeline-info">
              <span className="timeline-year">{item.year}</span>
              <h3 className="timeline-title">{item.title}</h3>
              <p className={`timeline-desc ${theme==='dark' ? 'dark-desc' : 'light-desc'}`}>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <style>{`
.about-timeline {
  padding: 5rem 2rem;
  text-align: center;
  background: ${theme==='dark' ? '#120c30' : '#f4f8ff'};
}

.about-timeline h2 {
  font-size: clamp(2rem,5vw,3rem);
  font-weight: 900;
  margin-bottom: 3rem;
  color: ${theme==='dark' ? '#fff' : '#222'};
}

.timeline-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}

.timeline-card {
  background: ${theme==='dark' ? 'rgba(25,12,50,0.85)' : 'rgba(255,255,255,0.95)'};
  border-radius: 18px;
  width: 280px;
  padding: 1.8rem;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  box-shadow: ${theme==='dark' ? '0 10px 30px rgba(50,0,100,0.4)' : '0 5px 15px rgba(0,0,0,0.08)'};
}

.timeline-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: ${theme==='dark' ? '0 18px 50px rgba(70,0,120,0.5)' : '0 10px 30px rgba(0,0,0,0.12)'};
}

.timeline-circle {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: ${theme==='dark' ? '#a0ffcc' : '#00aaff'};
  margin: 0 auto 0.8rem;
}

.timeline-year {
  font-weight: 700;
  font-size: 1.2rem;
  color: ${theme==='dark' ? '#b0b0ff' : '#555'};
  margin-bottom: 0.4rem;
}

.timeline-title {
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  color: ${theme==='dark' ? '#fff' : '#222'};
}

.timeline-desc.dark-desc {
  font-size: 0.9rem;
  color: #c0f0e0;
  line-height: 1.4;
}

.timeline-desc.light-desc {
  font-size: 0.9rem;
  color: #555;
  line-height: 1.4;
}

@media (max-width: 1024px) {
  .timeline-container { flex-direction: column; align-items: center; }
  .timeline-card { width: 90%; }
}
      `}</style>
    </section>
  );
}
