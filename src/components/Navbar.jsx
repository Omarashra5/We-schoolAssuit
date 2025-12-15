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
    en: { home: "Home", about: "About", programs: "Programs", news: "News", login: "Login", register: "Register", profile: "Profile", school: "WE School" },
    ar: { home: "الرئيسية", about: "عن المدرسة", programs: "البرامج", news: "الأخبار", login: "تسجيل دخول", register: "تسجيل", profile: "الملف الشخصي", school: "WE School" }
  };

  useEffect(() => {
    document.body.style.backgroundColor = theme === "dark" ? "#111" : "#fff";
    document.body.style.color = theme === "dark" ? "#fff" : "#000";
  }, [theme]);

  const navBg = theme === "dark" ? "rgba(20,0,50,0.85)" : "rgba(255,255,255,0.95)";
  const navText = theme === "dark" ? "text-white" : "text-dark";
  const iconColor = theme === "dark" ? "#fff" : "#000";

  const handleLangChange = () => {
    setLoadingLang(true);
    setTimeout(() => {
      setLang(isArabic ? "en" : "ar");
      setLoadingLang(false);
    }, 600);
  };

  const goTo = (path) => navigate(path);

  return (
    <>
      {loadingLang && <Loader />}

      <nav className={`navbar navbar-expand-lg shadow-lg p-3 rounded-5 mt-3 ${navText}`}
        style={{ backdropFilter: "blur(20px)", background: navBg, transition: "all 0.4s ease", zIndex: 999 }} dir={isArabic ? "rtl" : "ltr"}>
        <div className="container-fluid d-flex align-items-center justify-content-between">

          {/* Logo */}
          <div className="navbar-brand d-flex align-items-center gap-2" style={{ cursor: "pointer" }} onClick={() => goTo("/")}>
            <div className="logo-circle">WE</div>
            <strong className={`${theme === "dark" ? "text-light" : "text-dark"} fs-5 gradient-text`}>
              {text[lang].school}
            </strong>
          </div>

          {/* Collapse Toggle */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mainNav">
            <ul className={`navbar-nav mx-auto mb-2 mb-lg-0 ${isArabic ? "me-auto" : "ms-auto"}`}>
              {["home", "about", "programs", "news"].map((item, idx) => (
                <li key={idx} className="nav-item">
                  <span
                    className={`nav-link fw-semibold ${navText} nav-glow`}
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      goTo(item === "home" ? "/" : `/${item}`)
                    }
                  >
                    <i
                      className={`fas fa-${item === "home" ? "home" : item === "about" ? "school" : item === "news" ? "newspaper" : "envelope"} me-2`}
                      style={{ color: iconColor }}
                    ></i>
                    {text[lang][item]}
                  </span>
                </li>
              ))}
            </ul>

            <div className="d-flex gap-3 align-items-center">

              {user ? (
                <button className="btn btn-gradient fw-semibold px-4 py-2" onClick={() => goTo("/profile")}>
                  {text[lang].profile}
                </button>
              ) : (
                <>
                  <button className="btn btn-outline-gradient fw-semibold px-4 py-2" onClick={() => goTo("/login")}>
                    {text[lang].login}
                  </button>
                  <button className="btn btn-gradient fw-semibold px-4 py-2" onClick={() => goTo("/register")}>
                    {text[lang].register}
                  </button>
                </>
              )}

              {/* Language Toggle */}
              <button className="btn-lang-fancy position-relative overflow-hidden" onClick={handleLangChange}>
                <span className="lang-text">{isArabic ? "EN" : "AR"}</span>
                <span className="ripple"></span>
              </button>

              {/* Theme Toggle */}
              <button className="btn-theme-toggle" onClick={toggleTheme}>
                {theme === "dark" ? <i className="fa-solid fa-sun"></i> : <i className="fa-solid fa-moon"></i>}
              </button>

            </div>
          </div>
        </div>
      </nav>

      <style>{`
        .logo-circle {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg,#8b00ff,#c473ff);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-weight: 900;
          font-size: 1.4rem;
          box-shadow: 0 10px 30px rgba(140,0,255,0.6);
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .logo-circle:hover {
          transform: scale(1.25) rotate(-10deg);
          box-shadow: 0 15px 50px rgba(140,0,255,0.8);
        }

        .gradient-text {
          background: linear-gradient(90deg,#8b00ff,#c473ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .nav-link.nav-glow {
          position: relative;
          transition: all 0.3s ease;
        }
        .nav-link.nav-glow::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 50%;
          width: 0%;
          height: 3px;
          background: #c473ff;
          border-radius: 3px;
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }
        .nav-link.nav-glow:hover::after {
          width: 70%;
        }
        .nav-link.nav-glow:hover {
          transform: translateY(-3px) scale(1.08);
          color: #c473ff;
        }

        .btn-gradient {
          background: linear-gradient(135deg,#8b00ff,#c473ff);
          color: #fff;
          border: none;
          border-radius: 18px;
          transition: all 0.3s;
          font-size: 0.95rem;
        }
        .btn-gradient:hover {
          transform: scale(1.12) rotate(-3deg);
          box-shadow: 0 12px 35px rgba(140,0,255,0.7);
        }

        .btn-outline-gradient {
          background: transparent;
          border: 2px solid #8b00ff;
          color: #8b00ff;
          border-radius: 18px;
          transition: all 0.3s;
        }
        .btn-outline-gradient:hover {
          background: #8b00ff;
          color: #fff;
          transform: scale(1.12);
          box-shadow: 0 12px 35px rgba(140,0,255,0.7);
        }

        .btn-lang-fancy {
          background: linear-gradient(135deg,#8b00ff,#c473ff);
          color: #fff;
          font-weight: 700;
          padding: 0.55rem 1.5rem;
          border: none;
          border-radius: 16px;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 6px 25px rgba(140,0,255,0.5);
        }
        .btn-lang-fancy:hover {
          transform: scale(1.15);
          box-shadow: 0 12px 40px rgba(140,0,255,0.8);
        }
        .btn-lang-fancy .ripple {
          position: absolute;
          width: 120px;
          height: 120px;
          background: rgba(255,255,255,0.35);
          border-radius: 50%;
          transform: scale(0);
          pointer-events: none;
          animation: ripple-effect 0.6s linear;
        }
        @keyframes ripple-effect { to { transform: scale(4); opacity: 0; } }

        .btn-theme-toggle {
          background: transparent;
          border: none;
          font-size: 1.35rem;
          color: ${iconColor};
          cursor: pointer;
          transition: transform 0.3s;
        }
        .btn-theme-toggle:hover { transform: scale(1.3) rotate(15deg); }

        .navbar-toggler {
          border-radius: 12px;
          border: none;
        }
        .navbar-toggler-icon {
          filter: ${theme === "dark" ? "invert(1)" : "invert(0)"};
        }
      `}</style>
    </>
  );
}
