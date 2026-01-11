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
    <footer className={`footer ${theme}`} dir={isArabic ? "rtl" : "ltr"}>
      <div className="container py-5 position-relative" style={{ zIndex: 2 }}>
        <div className="text-center mb-4">
          <img src={logo} alt="Logo" className="footer-logo" />
        </div>

        <div className="row text-center text-md-start">
          <div className="col-md-4 mb-4 footer-column">
            <h5>{text[lang].school}</h5>
            <p>{text[lang].description}</p>
            <p>{isArabic ? "العنوان: WE Assiut , أسيوط ، مصر" : "Address: New Assiut , Egypt"}</p>
          </div>

          <div className="col-md-4 mb-4 footer-column">
            <h5>{text[lang].importantLinks}</h5>
            <ul className="list-unstyled">
              <li><Link className="footer-link" to="/">{text[lang].home}</Link></li>
              <li><Link className="footer-link" to="/about">{text[lang].about}</Link></li>
              <li><Link className="footer-link" to="/programs">{text[lang].programs}</Link></li>
              <li><a className="footer-link" href="https://wa.me/201012329975">{text[lang].contact}</a></li>
            </ul>
          </div>

          <div className="col-md-4 mb-4 footer-column">
            <h5>{text[lang].contactUs}</h5>
            <p><a className="footer-link social" href="https://wa.me/201012329975">+201012329975</a></p>
            <p><a className="footer-link social" href="https://www.facebook.com/share/17viP4EUpy/">Facebook</a></p>
            <p><a className="footer-link social" href="mailto:info@weassiut.edu.eg">we@weassiut.edu.eg</a></p>
          </div>
        </div>
        <div className="text-center my-4">
          <img
            src="/public/images/QRCode for تقييم موقع مدرسة وي اسيوط التكنولوجيا التطبيقيه.png"
            alt="QR Code"
            className="footer-qr"
          />
        </div>
        <hr />

        <div className="text-center pt-3">
          &copy; 2026 {text[lang].school}. All rights reserved.
        </div>
      </div>

      <style jsx>{`
        .footer {
          position: relative;
          overflow: hidden;
          font-family: 'Inter', sans-serif;
          color: ${theme === 'dark' ? '#e0e0e0' : '#222'};
          background: ${theme === 'dark' ? 'linear-gradient(135deg, #0a0a23, #1a0a3a)' : 'linear-gradient(135deg, #f0f4ff, #dce6ff)'};
        }
  .footer-qr {
    max-width: 150px;   /* حجم ثابت مناسب */
    width: 100%;
    height: auto;
    margin: 0 auto;    /* يتوسط العنصر */
    display: block;
    border-radius: 12px; /* زاوية مدورة */
    box-shadow: 0 4px 15px rgba(0,0,0,0.2); /* شادو لطيف */
  }
        .footer-logo {
          max-height: 80px;
          filter: ${theme === 'dark' ? 'drop-shadow(0 0 25px #7f00ff)' : 'drop-shadow(0 0 20px #5f4fff)'};
          transition: transform 0.3s ease;
        }
        .footer-logo:hover { transform: scale(1.08); }

        .footer-column h5 {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: ${theme === 'dark' ? '#fff' : '#333'};
          background: linear-gradient(90deg, #7f00ff, #00d4ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .footer-link {
          display: block;
          color: inherit;
          text-decoration: none; /* بدون underline */
          margin: 0.4rem 0;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .footer-link:hover {
          color: ${theme === 'dark' ? '#00d4ff' : '#7f00ff'};
          transform: translateX(4px);
        }

        .social {
          font-weight: 600;
        }

        hr {
          border: none;
          height: 1px;
          background: ${theme === 'dark' ? '#444' : '#ccc'};
          opacity: 0.4;
          margin: 2rem 0;
        }

        @media (max-width: 768px) {
          .footer-column { margin-bottom: 2rem; }
        }
      `}</style>
    </footer>
  );
}
