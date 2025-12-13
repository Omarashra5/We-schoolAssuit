import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../context/LanguageContext.jsx";
import { ThemeContext } from "../context/ThemeContext.jsx";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";

export default function Navbar({ user }) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { lang, setLang } = useContext(LanguageContext);
  const [loadingLang, setLoadingLang] = useState(false);
  const isArabic = lang === "ar";
  const navigate = useNavigate();

  const text = {
    en: { home: "Home", about: "About", programs: "Programs", news: "News", contact: "Contact", login: "Login", register: "Register", profile: "Profile", school: "WE School" },
    ar: { home: "الرئيسية", about: "عن المدرسة", programs: "البرامج", news: "الأخبار", contact: "اتصل بنا", login: "تسجيل دخول", register: "تسجيل", profile: "الملف الشخصي", school: "WE School" }
  };

  // Apply theme to body
  useEffect(() => {
    document.body.style.backgroundColor = theme === "dark" ? "#111" : "#fff";
    document.body.style.color = theme === "dark" ? "#fff" : "#000";
  }, [theme]);

  const navBg = theme === "dark" ? "rgba(0,0,0,0.9)" : "rgba(255,255,255,0.95)";
  const navText = theme === "dark" ? "text-white" : "text-dark";
  const iconColor = theme === "dark" ? "#fff" : "#000";

  // Handle language change with loader
  const handleLangChange = () => {
    setLoadingLang(true);
    setTimeout(() => {
      setLang(isArabic ? "en" : "ar");
      setLoadingLang(false);
    }, 1200);
  };

  // Navigation handler
  const goTo = (path) => {
    navigate(path);
  };

  return (
    <>
      {loadingLang && <Loader />}

      <nav className={`navbar navbar-expand-lg shadow-lg p-3 rounded-4 mt-3 ${navText}`} style={{ backdropFilter: "blur(12px)", background: navBg, transition: "all 0.3s" }} dir={isArabic ? "rtl" : "ltr"}>
        <div className="container-fluid">

          {/* Theme Toggle */}
          <button className={`btn ${theme === "dark" ? "btn-light" : "btn-dark"} me-3`} onClick={toggleTheme}>
            {theme === "dark" ? <i className="fa-solid fa-sun"></i> : <i className="fa-solid fa-moon"></i>}
          </button>

          {/* Logo */}
          <div className="navbar-brand d-flex align-items-center gap-2" style={{ cursor: "pointer" }} onClick={() => goTo("/")}>
            <div style={{
              width: 50, height: 50, borderRadius: 14,
              background: "linear-gradient(135deg,#3240ffff,#174dffff)",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#fff", fontWeight: 700, fontSize: 20,
              boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
              transition: "transform 0.3s"
            }}
              onMouseEnter={e => e.currentTarget.style.transform = "scale(1.1)"}
              onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
            >
              WE
            </div>
            <strong className={`${theme === "dark" ? "text-light" : "text-dark"}`} style={{ fontSize: 20 }}>{text[lang].school}</strong>
          </div>

          {/* Collapse Toggle */}
          <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mainNav">
            <ul className={`navbar-nav mx-auto mb-2 mb-lg-0 ${isArabic ? "me-auto" : "ms-auto"}`}>
              <li className="nav-item"><span className={`nav-link fw-semibold ${navText}`} style={{ cursor: "pointer" }} onClick={() => goTo("/")}><i className="fas fa-home me-2" style={{ color: iconColor }}></i>{text[lang].home}</span></li>
              <li className="nav-item"><span className={`nav-link fw-semibold ${navText}`} style={{ cursor: "pointer" }} onClick={() => goTo("/about")}><i className="fas fa-school me-2" style={{ color: iconColor }}></i>{text[lang].about}</span></li>
              <li className="nav-item"><span className={`nav-link fw-semibold ${navText}`} style={{ cursor: "pointer" }} onClick={() => goTo("/news")}><i className="fas fa-newspaper me-2" style={{ color: iconColor }}></i>{text[lang].news}</span></li>
              <li className="nav-item"><span className={`nav-link fw-semibold ${navText}`} style={{ cursor: "pointer" }} onClick={() => goTo("https://wa.me/201012329975")}><i className="fas fa-envelope me-2" style={{ color: iconColor }}></i>{text[lang].contact}</span></li>
            </ul>

            <div className="d-flex gap-2 align-items-center">
              {user ? (
                <button className="btn btn-primary fw-semibold px-3" onClick={() => goTo("/profile")}>
                  {text[lang].profile}
                </button>
              ) : (
                <>
                  <button className="btn btn-outline-primary fw-semibold px-3" onClick={() => goTo("/login")}>
                    {text[lang].login}
                  </button>
                  <button className="btn btn-success fw-semibold px-3" onClick={() => goTo("/register")}>
                    {text[lang].register}
                  </button>
                </>
              )}

              {/* Language Toggle */}
              <button className="btn-lang-fancy position-relative overflow-hidden" onClick={handleLangChange}>
                <span className="lang-text">{isArabic ? "EN" : "AR"}</span>
                <span className="ripple"></span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <style jsx>{`
        .nav-link {
          transition: all 0.3s ease;
        }
        .nav-link:hover {
          color: #ffdd00;
          transform: translateY(-2px) scale(1.05);
        }
        .navbar-toggler {
          border-radius: 8px;
        }
        .btn-lang-fancy {
          background: linear-gradient(135deg,#3240ff,#174dff);
          color: #fff;
          font-weight: 700;
          padding: 0.6rem 1.5rem;
          border: none;
          border-radius: 14px;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 6px 20px rgba(50,64,255,0.5);
        }
        .btn-lang-fancy:hover {
          transform: scale(1.1);
          box-shadow: 0 8px 25px rgba(50,64,255,0.7);
        }
        .btn-lang-fancy .ripple {
          position: absolute;
          width: 100px;
          height: 100px;
          background: rgba(255,255,255,0.4);
          border-radius: 50%;
          transform: scale(0);
          pointer-events: none;
          animation: ripple-effect 0.6s linear;
        }
        @keyframes ripple-effect {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
}
