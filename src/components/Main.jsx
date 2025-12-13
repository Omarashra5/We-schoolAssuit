import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../context/LanguageContext.jsx";
import { ThemeContext } from "../context/ThemeContext.jsx";
import logo from "../components/images/logo.png";

export default function Main() {
  const { lang } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);
  const isArabic = lang === "ar";

  const text = {
    en: {
      title: "WE Applied Technology School",
      subtitle: "Building the future of technology in",
      action: "Explore Programs",
    },
    ar: {
      title: "مدرسة WE للتكنولوجيا التطبيقية",
      subtitle: "نصنع مستقبل التكنولوجيا في",
      action: "استعرض البرامج",
    },
  };

  /* ===== Typing Effect ===== */
  const word = "أسيوط الجديدة";
  const [typed, setTyped] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 80 : 120;
    const pauseTime = 1200;

    let timer;

    if (!isDeleting && index <= word.length) {
      timer = setTimeout(() => {
        setTyped(word.slice(0, index));
        setIndex(index + 1);
      }, typingSpeed);
    } else if (isDeleting && index >= 0) {
      timer = setTimeout(() => {
        setTyped(word.slice(0, index));
        setIndex(index - 1);
      }, typingSpeed);
    } else if (index > word.length) {
      timer = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (index < 0) {
      setIsDeleting(false);
      setIndex(0);
    }

    return () => clearTimeout(timer);
  }, [index, isDeleting]);

  /* ===== Scroll ===== */
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
     
       <section
      dir={isArabic ? "rtl" : "ltr"}
      className="hero-section"
      style={{
        minHeight: "95vh",
        display: "flex",
        alignItems: "center",
        padding: "0 6%",
        background:
          theme === "dark"
            ? "radial-gradient(circle at 10% 20%, #0f172a, #020617)"
            : "radial-gradient(circle at 10% 20%, #e0f2fe, #ffffff)",
      }}
    >
      
      {/* ===== TEXT ===== */}
      <div className="hero-text">
        
        <h1>{text[lang].title}</h1>

        <p>
          
          {text[lang].subtitle}{" "}
          
          <span className="typed-word">{typed}</span>
          <span className="cursor">|</span>
          
        </p>

        <button onClick={handleScroll}>
          {text[lang].action}
        </button>
      </div>
      

      {/* ===== VISUAL ===== */}
      <div className="hero-visual">
        <div className="blur-circle" />

        <div className="logo-box">
          <img src={logo} alt="WE Logo" />
        </div>
      </div>

      {/* ===== Styles ===== */}
      <style>{`
        .hero-section {
  gap: 4rem;
       position: relative; 
      }

        .hero-text {
          flex: 1;
        }

        .hero-text h1 {
          font-size: 3.8rem;
          font-weight: 900;
          line-height: 1.2;
          color: ${theme === "dark" ? "#fff" : "#020617"};
        }

        .hero-text p {
          margin-top: 1.5rem;
          font-size: 1.5rem;
          color: ${theme === "dark" ? "#cbd5f5" : "#334155"};
        }

        .typed-word {
          color: #8400ff;
          font-weight: 700;
        }

        .hero-text button {
          margin-top: 3rem;
          padding: 16px 46px;
          border-radius: 14px;
          border: none;
          font-size: 1.1rem;
          font-weight: 700;
          background: linear-gradient(90deg,#22c55e,#0ea5e9);
          color: #020617;
          cursor: pointer;
          transition: 0.3s;
        }

        .hero-text button:hover {
          transform: scale(1.08);
        }

        .hero-visual {
          flex: 1;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .blur-circle {
          width: 420px;
          height: 420px;
          border-radius: 50%;
          background: linear-gradient(135deg, #9122c5, #0ea5e9);
          filter: blur(90px);
          opacity: 0.75;
          position: absolute;
        }

        .logo-box {
          width: 320px;
          height: 320px;
          border-radius: 30px;
          background: ${theme === "dark" ? "#020617" : "#fff"};
          box-shadow: 0 40px 80px rgba(0,0,0,0.35);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
        }

        .logo-box img {
          width: 85%;
          height: auto;
        }

        .cursor {
          margin-left: 4px;
          animation: blink 1s infinite;
        }

        @keyframes blink {
          0%, 50%, 100% { opacity: 1; }
          25%, 75% { opacity: 0; }
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 992px) {
          .hero-section {
            flex-direction: column-reverse;
            text-align: center;
            padding: 4rem 6%;
          }

          .hero-text h1 {
            font-size: 2.6rem;
          }

          .hero-text p {
            font-size: 1.25rem;
          }

          .hero-text button {
            margin-left: auto;
            margin-right: auto;
          }

          .logo-box {
            width: 260px;
            height: 260px;
          }

          .blur-circle {
            width: 300px;
            height: 300px;
          }
        }
      `}</style>
   

    </section>
    </>
   
  );
}
