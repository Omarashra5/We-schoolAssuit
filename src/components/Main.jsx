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

  const word = isArabic ? "أسيوط الجديدة" : "New Assiut";
  const [typed, setTyped] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const speed = isDeleting ? 50 : 120;
    const pause = 1200;
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
  }, [index, isDeleting]);

  const handleScroll = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section dir={isArabic ? "rtl" : "ltr"} className="hero">

      {/* VIDEO BACKGROUND */}
      <video className="hero-video" autoPlay muted loop playsInline>
        <source src="https://res.cloudinary.com/dfjxtpdfo/video/upload/v1765988991/hero_c1fsbb.mp4" type="video/mp4" />
      </video>

      {/* OVERLAY */}
      <div className="hero-overlay" />

      {/* PARTICLES */}
      <div className="particles">
        {[...Array(60)].map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random()*100}%`,
            animationDelay: `${Math.random()*5}s`,
            width: `${Math.random()*5+2}px`,
            height: `${Math.random()*5+2}px`
          }} />
        ))}
      </div>

      {/* CONTENT */}
      <div className="hero-content">
        <div className="hero-text">
          <h1>{text[lang].title}</h1>
          <p>
            {text[lang].subtitle} <span className="typed">{typed}</span>
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

      {/* WAVES */}
      <div className="wave">
        <svg viewBox="0 0 1440 150" preserveAspectRatio="none">
          <path d="M0,64 C360,192 1080,0 1440,64 L1440,150 L0,150 Z" fill="rgba(128, 0, 255, 0.4)" />
        </svg>
      </div>

      <style>{`
        .hero {
          position: relative;
          height: 100vh;
          overflow: hidden;
          font-family: 'Poppins', sans-serif;
        }

        .hero-video {
          position: absolute;
          top:0; left:0;
          width:100%; height:100%;
          object-fit: cover;
          filter: brightness(0.4) contrast(1.3) saturate(1.3);
          z-index: 0;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(128,0,255,0.85), rgba(58,0,102,0.85));
          mix-blend-mode: multiply;
          z-index:1;
        }

        .particles {
          position: absolute;
          inset:0;
          z-index:1;
          pointer-events:none;
        }

        .particle {
          position: absolute;
          background: rgba(255,255,255,0.4);
          border-radius:50%;
          animation: floatUp 8s linear infinite;
        }

        @keyframes floatUp {
          0% { transform: translateY(100vh) scale(0.5); opacity:0; }
          50% { opacity:1; }
          100% { transform: translateY(-20vh) scale(1); opacity:0; }
        }

        .hero-content {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: row;
          gap:5rem;
          width:100%;
          max-width:1200px;
          margin:0 auto;
          padding: 0 6%;
          align-items: center;
          justify-content: space-between;
          top:50%;
          transform: translateY(-50%);
        }

        .hero-text {
          flex:1;
          color:#fff;
        }

        .hero-text h1 {
          font-size: 4rem;
          font-weight:900;
          line-height:1.1;
          background: linear-gradient(90deg,#8b00ff,#c473ff);
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
        }

        .hero-text p {
          margin-top:1.5rem;
          font-size:1.6rem;
          color: #e5e7eb;
        }

        .typed { font-weight:900; color:#c473ff; }
        .cursor { display:inline-block; width:2px; background:#c473ff; margin-left:3px; animation: blink 1s infinite; }

        .hero-text button {
          margin-top:3rem;
          padding:18px 50px;
          border-radius:16px;
          border:none;
          font-size:1.2rem;
          font-weight:700;
          background: linear-gradient(90deg,#8b00ff,#c473ff);
          color:#fff;
          cursor:pointer;
          box-shadow:0 10px 25px rgba(0,0,0,0.3);
          transition:0.3s ease-in-out;
        }

        .hero-text button:hover {
          transform: scale(1.15) rotateZ(-2deg);
          box-shadow:0 15px 30px rgba(0,0,0,0.5);
        }

        .hero-visual {
          flex:1;
          position: relative;
          display:flex;
          justify-content:center;
          align-items:center;
        }

        .glow {
          width:450px; height:450px;
          border-radius:50%;
          background: radial-gradient(circle,#8b00ff,#c473ff);
          filter: blur(120px);
          opacity:0.7;
          position:absolute;
          animation: pulse 3s infinite ease-in-out;
        }

        .logo-box {
          width:350px; height:350px;
          border-radius:40px;
          background:#020617;
          box-shadow:0 50px 120px rgba(0,0,0,0.6);
          display:flex; align-items:center; justify-content:center;
          z-index:2;
          transition: transform 0.5s ease;
        }

        .logo-box:hover { transform: rotateY(15deg) scale(1.05); }
        .logo-box img { width:80%; transition: transform 0.5s ease; }

        .wave { position:absolute; bottom:0; width:100%; height:150px; overflow:hidden; z-index:3; }

        @keyframes blink {0%,50%,100%{opacity:1} 25%,75%{opacity:0}}
        @keyframes fadeUp {0%{opacity:0; transform:translateY(50px);}100%{opacity:1;transform:translateY(0);}}
        @keyframes pulse {0%,100%{transform:scale(0.9);opacity:0.7;}50%{transform:scale(1.1);opacity:0.85;}}

        @media (max-width:1200px){
          .hero-content{flex-direction:column-reverse; gap:2rem;}
          .hero-text h1{font-size:3.2rem;}
          .hero-text p{font-size:1.4rem;}
        }
        @media (max-width:768px){
          .hero-text h1{font-size:2.4rem;}
          .hero-text p{font-size:1.2rem;}
          .hero-text button{padding:12px 32px; font-size:1rem;}
          .glow{width:250px; height:250px; filter:blur(80px);}
          .logo-box{width:220px; height:220px;}
        }
      `}</style>
    </section>
  );
}
