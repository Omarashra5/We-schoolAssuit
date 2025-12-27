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
      action: "Content",
    },
    ar: {
      title: "مدرسة WE للتكنولوجيا التطبيقية",
      subtitle: "نصنع مستقبل التكنولوجيا في",
      action: "المحتوي",
    },
  };

  const word = isArabic ? "أسيوط الجديدة" : "New Assiut";
  const [typed, setTyped] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const speed = isDeleting ? 60 : 120;
    const pause = 1400;
    let timer;

    if (!isDeleting && index <= word.length) {
      timer = setTimeout(() => {
        setTyped(word.slice(0, index));
        setIndex(index + 1);
      }, speed);
    } else if (isDeleting && index >= 0) {
      timer = setTimeout(() => {
        setTyped(word.slice(0, index));
        setIndex(index - 1);
      }, speed);
    } else if (index > word.length) {
      timer = setTimeout(() => setIsDeleting(true), pause);
    } else if (index < 0) {
      setIsDeleting(false);
      setIndex(0);
    }

    return () => clearTimeout(timer);
  }, [index, isDeleting, word]);

  const handleScroll = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section dir={isArabic ? "rtl" : "ltr"} className="hero">

      {/* VIDEO */}
      <video className="hero-video" autoPlay muted loop playsInline>
        <source
          src="https://res.cloudinary.com/dfjxtpdfo/video/upload/v1765988991/hero_c1fsbb.mp4"
          type="video/mp4"
        />
      </video>

      {/* OVERLAY */}
      <div className="hero-overlay" />

      {/* CONTENT */}
      <div className="hero-content">
        <div className="hero-text">
          <h1>{text[lang].title}</h1>
          <p>
            {text[lang].subtitle}{" "}
            <span className="typed">{typed}</span>
            <span className="cursor">|</span>
          </p>
          <button onClick={handleScroll}>{text[lang].action}</button>
        </div>

        <div className="hero-visual">
          <div className="glow" />
          <div className="logo-box">
            <img src={logo} alt="WE Logo" />
          </div>
        </div>
      </div>

 <style>{`
/* ================= HERO BASE ================= */
.hero {
  position: relative;
  height: 100vh;
  overflow: hidden;
  font-family: 'Poppins', sans-serif;
  background: #020617;
}

/* ================= VIDEO ================= */
.hero-video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.42) contrast(1.2) saturate(1.15);
  z-index: 0;
}

/* ================= OVERLAY (CLEAN CINEMA) ================= */
.hero-overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      180deg,
      rgba(2,6,23,0.85) 0%,
      rgba(2,6,23,0.65) 50%,
      rgba(2,6,23,0.95) 100%
    );
  z-index: 1;
}

/* ================= CONTENT ================= */
.hero-content {
  position: relative;
  z-index: 2;
  max-width: 1400px;
  margin: 0 auto;
  height: 100%;
  padding: 0 6%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6rem;
}

/* ================= TEXT ================= */
.hero-text {
  flex: 1;
  color: #fff;
}

.hero-text h1 {
  font-size: 4.2rem;
  font-weight: 900;
  line-height: 1.1;
  letter-spacing: -1px;
  color: #fff;
}

.hero-text p {
  margin-top: 1.6rem;
  font-size: 1.55rem;
  color: #cbd5f5;
}

/* typing */
.typed {
  font-weight: 800;
  color: #a78bfa;
}

.cursor {
  margin-left: 3px;
  animation: blink 1s infinite;
}

/* ================= BUTTON ================= */
.hero-text button {
  margin-top: 3.2rem;
  padding: 16px 48px;
  border-radius: 14px;
  border: 1px solid rgba(255,255,255,0.12);
  background: rgba(255,255,255,0.08);
  backdrop-filter: blur(8px);
  color: #fff;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
}

.hero-text button:hover {
  background: rgba(255,255,255,0.15);
  transform: translateY(-3px);
}

/* ================= VISUAL ================= */
.hero-visual {
  flex: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* soft glow */
.glow {
  position: absolute;
  width: 420px;
  height: 420px;
  background: radial-gradient(circle, rgba(167,139,250,0.4), transparent 70%);
  filter: blur(120px);
  opacity: 0.9;
}

/* logo box (premium clean) */
.logo-box {
  width: 320px;
  height: 320px;
  border-radius: 28px;
  background: rgba(2,6,23,0.85);
  border: 1px solid rgba(255,255,255,0.08);
  backdrop-filter: blur(12px);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 40px 90px rgba(0,0,0,0.7);
}

.logo-box img {
  width: 78%;
}

/* ================= ANIMATIONS ================= */
@keyframes blink {
  0%,50%,100% { opacity: 1; }
  25%,75% { opacity: 0; }
}

/* ================= RESPONSIVE ================= */
@media (max-width: 1200px) {
  .hero-content {
    flex-direction: column-reverse;
    text-align: center;
    gap: 3rem;
  }
  .hero-text h1 {
    font-size: 3.2rem;
  }
}

@media (max-width: 768px) {
  .hero-text h1 {
    font-size: 2.3rem;
  }
  .hero-text p {
    font-size: 1.2rem;
  }
  .logo-box {
    width: 220px;
    height: 220px;
  }
  .glow {
    width: 260px;
    height: 260px;
    filter: blur(90px);
  }
}
`}</style>

    </section>
  );
}
