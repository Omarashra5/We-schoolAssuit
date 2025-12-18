import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext.jsx";
import { ThemeContext } from "../context/ThemeContext.jsx";
import { Link } from "react-router-dom";
import logo from "../components/images/logo.png";

export default function Footer() {
  const { lang } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);
  const isArabic = lang === "ar";

  const text = {
    en: {
      school: "WE Assiut",
      description: "Applied Technology School",
      importantLinks: "Important Links",
      contactUs: "Contact Us",
      home: "Home",
      about: "About School",
      programs: "Programs",
      contact: "Contact"
    },
    ar: {
      school: "WE أسيوط",
      description: "التكنولوجيا التطبيقية",
      importantLinks: "روابط مهمة",
      contactUs: "تواصل معنا",
      home: "الرئيسية",
      about: "عن المدرسة",
      programs: "البرامج",
      contact: "اتصل بنا"
    }
  };

  return (
    <footer className={`footer ${theme === "dark" ? "dark" : "light"}`} dir={isArabic ? "rtl" : "ltr"}>
      {/* خلفية متحركة */}
      <div className="footer-bg"></div>

      {/* شعار المدرسة */}
      <div className="text-center mb-5">
        <img
          src={logo}
          alt="WE Logo"
          className="footer-logo"
        />
      </div>

      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="row text-center text-md-start">
          {/* عمود المعلومات */}
          <div className="col-md-4 mb-4 footer-column">
            <h5 className="fw-bold mb-3">{text[lang].school}</h5>
            <p>{text[lang].description}</p>
            <p>{isArabic ? "العنوان: WE Assiut , أسيوط ، مصر" : "Address: New Assiut, Egypt"}</p>
          </div>

          {/* عمود الروابط */}
          <div className="col-md-4 mb-4 footer-column">
            <h5 className="fw-bold mb-3">{text[lang].importantLinks}</h5>
            <ul className="list-unstyled">
              <li><Link className="footer-link" to="/"><i className="fas fa-home me-2"></i>{text[lang].home}</Link></li>
              <li><Link className="footer-link" to="/about"><i className="fas fa-school me-2"></i>{text[lang].about}</Link></li>
              <li><Link className="footer-link" to="/programs"><i className="fas fa-book me-2"></i>{text[lang].programs}</Link></li>
              <li><a className="footer-link" href="https://wa.me/201012329975"><i className="fas fa-envelope me-2"></i>{text[lang].contact}</a></li>
            </ul>
          </div>

          {/* عمود التواصل الاجتماعي */}
          <div className="col-md-4 mb-4 footer-column">
            <h5 className="fw-bold mb-3">{text[lang].contactUs}</h5>
            <p><a className="footer-link social" href="https://wa.me/201012329975"><i className="fa-brands fa-whatsapp me-2"></i>+201012329975</a></p>
            <p><a className="footer-link social" href="https://www.facebook.com/share/17viP4EUpy/"><i className="fa-brands fa-facebook me-2"></i>www.facebook.com/OmarAshraf</a></p>
            <p><a className="footer-link social" href="mailto:info@weassiut.edu.eg"><i className="fas fa-envelope me-2"></i>we@weassiut.edu.eg</a></p>
          </div>
        </div>

        <hr />

        <div className="text-center pt-3" style={{ fontSize: "0.95rem" }}>
          &copy; {new Date().getFullYear()} {text[lang].school}. All rights reserved. Crafted with <strong><mark>Omar Ashraf</mark></strong>
        </div>
      </div>

      {/* CSS */}
      <style jsx>{`
        .footer {
          position: relative;
          overflow: hidden;
          padding-top: 6rem;
          padding-bottom: 3rem;
          color: ${theme === "dark" ? "#fff" : "#111"};
        }

        .footer-bg {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 20% 30%, rgba(255,255,255,0.05), transparent 70%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.05), transparent 70%);
          animation: animate-bg 20s linear infinite;
          z-index: 1;
        }

        @keyframes animate-bg {
          0% { transform: translate(0,0); }
          50% { transform: translate(50px, 30px); }
          100% { transform: translate(0,0); }
        }

        .footer-logo {
          max-height: 100px;
          filter: ${theme === "dark" ? "drop-shadow(0 0 25px #ff6bcb)" : "drop-shadow(0 0 25px #fff)"};
          transition: all 0.5s;
        }

        .footer-column h5 {
          font-size: 1.6rem;
          letter-spacing: 1px;
          text-transform: uppercase;
          position: relative;
          background: linear-gradient(90deg,#8b00ff,#c473ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .footer-column h5::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 0;
          width: 70px;
          height: 4px;
          background: linear-gradient(90deg, #ff6bcb, #5f0fff);
          border-radius: 3px;
        }

        .footer-link {
          color: inherit;
          text-decoration: none;
          display: inline-block;
          margin: 0.4rem 0;
          font-size: 1.05rem;
          font-weight: 500;
          position: relative;
          transition: all 0.4s ease;
        }

        .footer-link::before {
          content: '';
          position: absolute;
          left: -10px;
          top: 50%;
          transform: translateY(-50%);
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #ff6bcb;
          opacity: 0;
          transition: all 0.3s;
        }

        .footer-link:hover::before {
          opacity: 1;
        }

        .footer-link:hover {
          color: #ff6bcb;
          transform: translateX(5px) scale(1.05);
        }

        .footer-link i {
          transition: all 0.4s ease;
          color: inherit;
        }

        .footer-link i:hover {
          transform: scale(1.3) rotate(10deg);
          color: #5f0fff;
        }

        hr {
          border-color: ${theme === "dark" ? "#555" : "#fff"};
          opacity: 0.3;
          margin-top: 3rem;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .footer-column h5::after { width: 50px; }
        }
      `}</style>
    </footer>
  );
}
