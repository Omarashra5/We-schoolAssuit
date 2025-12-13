import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";
import { LanguageContext } from "../context/LanguageContext.jsx";
import "./FinelPage.css"; // ملف CSS مخصص للفخامة

export default function About() {
  const { theme } = useContext(ThemeContext);
  const { lang } = useContext(LanguageContext);
  const isArabic = lang === "ar";

  return (
    <div className={`about-container ${theme === "dark" ? "dark" : "light"}`} dir={isArabic ? "rtl" : "ltr"}>
      <div className="about-wrapper">
        
        {/* العنوان الرئيسي */}
        <h1 className="about-title">
          {isArabic ? "عن مدرسة WE أسيوط الجديدة" : "About WE Assiut New School"}
        </h1>
        <p className="about-intro">
          {isArabic
            ? "مدرسة WE أسيوط الجديدة هي مؤسسة تعليمية متطورة تهدف لتخريج طلاب مبدعين في مجالات التكنولوجيا والبرمجة والهندسة الحديثة."
            : "The new WE Assiut School is an advanced educational institution aimed at graduating creative students in technology, programming, and modern engineering fields."}
        </p>

        {/* قسم المعلومات والخريطة */}
        <div className="about-content">
          
          {/* معلومات المدرسة */}
          <div className="about-info">
            <h2>{isArabic ? "معلومات المدرسة" : "School Info"}</h2>
            <ul>
              <li><strong>{isArabic ? "المدينة:" : "City:"}</strong> Assiut</li>
              <li><strong>{isArabic ? "العنوان:" : "Address:"}</strong> New WE Assiut Campus, Assiut, Egypt</li>
              <li><strong>{isArabic ? "تخصص المدرسة:" : "Specialty:"}</strong> تكنولوجيا وتطبيقات حديثة / Technology & Applied Sciences</li>
              <li><strong>{isArabic ? "سنة التأسيس:" : "Established:"}</strong> 2022</li>
              <li><strong>{isArabic ? "عدد الطلاب:" : "Students:"}</strong> 500+ {isArabic ? "طالب وطالبة" : "students"}</li>
              <li><strong>{isArabic ? "البريد الإلكتروني:" : "Email:"}</strong> we@weassiut.edu.eg</li>
              <li><strong>{isArabic ? "الهاتف:" : "Phone:"}</strong> +20 101 232 9975</li>
            </ul>
          </div>

          {/* الخريطة */}
          <div className="about-map">
            <h2>{isArabic ? "موقعنا على الخريطة" : "Our Location"}</h2>
            <iframe
              title="WE Assiut New School Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.1234567890!2d31.184567!3d27.189876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14472abcde123456%3A0xabcdef1234567890!2sWE%20Assiut%20New%20School!5e0!3m2!1sar!2seg!4v1700000000000!5m2!1sar!2seg"
              width="100%"
              height="350"
              style={{ border: 0, borderRadius: "20px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>

        {/* قسم الرسالة والرؤية */}
        <div className="about-mission">
          <h2>{isArabic ? "رسالتنا ورؤيتنا" : "Our Mission & Vision"}</h2>
          <p>
            {isArabic
              ? "نهدف إلى تخريج جيل من الطلاب المبدعين والمبتكرين القادرين على مواجهة تحديات العصر الرقمي، من خلال تعليم عملي وتجارب مبتكرة وبيئة تعليمية محفزة ومجهزة بأحدث التقنيات."
              : "We aim to graduate a generation of creative and innovative students capable of facing the challenges of the digital era, through hands-on learning, innovative experiences, and a fully-equipped modern educational environment."}
          </p>
        </div>

      </div>
    </div>
  );
}
