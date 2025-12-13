import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext.jsx";
import { ThemeContext } from "../context/ThemeContext.jsx";
import { Link } from "react-router-dom";
import footerBg from "../components/images/footer-bg.png";
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
    <footer
      className={`footer ${theme === "dark" ? "dark" : "light"}`}
      dir={isArabic ? "rtl" : "ltr"}
      style={{
        background: theme === "dark"
          ? `linear-gradient(135deg, #3a0ca3, #0f0f0f), url(${footerBg}) center/cover no-repeat`
          : `linear-gradient(135deg, #5f0fff, #ff6bcb), url(${footerBg}) center/cover no-repeat`,
        color: theme === "dark" ? "#fff" : "#ffffffff",
        position: "relative",
        overflow: "hidden",
        paddingTop: "6rem",
        paddingBottom: "3rem",
      }}
    >
      {/* شعار المدرسة */}
      <div className="text-center mb-5">
        <img
          src={logo}
          alt="WE Logo"
          style={{
            maxHeight: "100px",
            filter: theme === "dark"
              ? "drop-shadow(0 0 15px #ff6bcb)"
              : "drop-shadow(0 0 15px #fff)"
          }}
        />
      </div>

      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="row text-center text-md-start">
          {/* عمود المعلومات */}
          <div className="col-md-4 mb-4 footer-column">
            <h5 className="fw-bold mb-3">{text[lang].school}</h5>
            <p>{text[lang].description}</p>
            <p>{isArabic ? "العنوان: WE Assiut Campus, أسيوط، مصر" : "Address: New Assiut, Egypt"}</p>
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
            <p><a className="footer-link" href="https://wa.me/201012329975"><i className="fa-brands fa-whatsapp me-2"></i>+201012329975</a></p>
            <p><a className="footer-link" href="https://www.facebook.com/share/17viP4EUpy/"><i className="fa-brands fa-facebook me-2"></i>www.facebook.com/weassiut</a></p>
            <p><a className="footer-link" href="mailto:info@weassiut.edu.eg"><i className="fas fa-envelope me-2"></i>we@weassiut.edu.eg</a></p>
          </div>
        </div>

        <hr style={{ borderColor: theme === "dark" ? "#555" : "#fff", opacity: 0.3 }} />

        <div className="text-center pt-3" style={{ fontSize: "0.9rem" }}>
          &copy; {new Date().getFullYear()} {text[lang].school}. All rights reserved.
        </div>
      </div>

      {/* CSS داخلي */}
      <style jsx>{`
        .footer-column h5 {
          font-size: 1.5rem;
          letter-spacing: 1px;
          text-transform: uppercase;
          position: relative;
        }

        .footer-column h5::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, #ff6bcb, #5f0fff);
          border-radius: 2px;
        }

        .footer-link {
          color: inherit;
          text-decoration: none;
          display: inline-block;
          margin: 0.3rem 0;
          font-size: 1rem;
          transition: all 0.4s ease;
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
          transform: scale(1.3);
          color: #5f0fff;
        }

        .footer a:hover {
          text-decoration: none;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .footer-column h5::after {
            width: 40px;
          }
        }
      `}</style>
    </footer>
  );
}
