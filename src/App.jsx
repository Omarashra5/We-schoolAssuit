import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Features from "./components/Features";
import OurPartners from "./components/OurPartners";
import Loader from "./components/Loader";
import CarouselComponent from "./components/CarouselComponent";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import About from "./components/About";
import News from "./components/News";
import FinelPage from "./components/FinelPage";
import Programs from "./components/Programs";
import Ways from "./components/Ways";
import CookieConsent from "./components/CookieConsent";

const BLOCK_DURATION = 10 * 1000; 

export default function App() {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);
  const [hackCount, setHackCount] = useState(0);
  const [blocked, setBlocked] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(30);

  const [showScroll, setShowScroll] = useState(false);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // === Existing security hooks ===
  useEffect(() => {
    const blockUntil = localStorage.getItem("blockUntil");
    if (blockUntil && Date.now() < Number(blockUntil)) {
      setBlocked(true);
      setSecondsLeft(Math.ceil((blockUntil - Date.now()) / 1000));
    }
  }, []);

  useEffect(() => {
    if (blocked) return;

    const forbiddenKeys = ["F12", "I", "J", "U"];
    const dangerAction = () => setHackCount(prev => prev + 1);

    const handleContextMenu = (e) => {
      e.preventDefault();
      alert("محظور! موقع WE أسيوط محمي");
      dangerAction();
    };

    const handleKeyDown = (e) => {
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && forbiddenKeys.includes(e.key.toUpperCase())) ||
        (e.ctrlKey && e.key.toUpperCase() === "U")
      ) {
        e.preventDefault();
        alert(" محاولة غير مصرح بها");
        dangerAction();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [blocked]);

  useEffect(() => {
    if (hackCount >= 5 && !blocked) {
      const until = Date.now() + BLOCK_DURATION;
      localStorage.setItem("blockUntil", until);
      setBlocked(true);
      setSecondsLeft(10);
    }
  }, [hackCount, blocked]);

  useEffect(() => {
    if (!blocked) return;

    const blockUntil = localStorage.getItem("blockUntil");
    const interval = setInterval(() => {
      const remaining = Math.ceil((Number(blockUntil) - Date.now()) / 1000);
      if (remaining <= 0) {
        setBlocked(false);
        setHackCount(0);
        localStorage.removeItem("blockUntil");
        clearInterval(interval);
      } else {
        setSecondsLeft(remaining);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [blocked]);

  useEffect(() => {
    if (blocked) return;

    const warn = () => {
      alert(" نظام أمان مدارس WE أسيوط\nهذه المحاولة غير مسموح بها");
      setHackCount(prev => prev + 1);
    };

    const blockCopy = (e) => { e.preventDefault(); warn(); };
    const blockSelect = (e) => e.preventDefault();
    const blockDrag = (e) => { e.preventDefault(); warn(); };

    document.addEventListener("copy", blockCopy);
    document.addEventListener("cut", blockCopy);
    document.addEventListener("selectstart", blockSelect);
    document.addEventListener("dragstart", blockDrag);

    return () => {
      document.removeEventListener("copy", blockCopy);
      document.removeEventListener("cut", blockCopy);
      document.removeEventListener("selectstart", blockSelect);
      document.removeEventListener("dragstart", blockDrag);
    };
  }, [blocked]);

  useEffect(() => {
    if (blocked) return;

    const checkDevTools = () => {
      const threshold = 160;
      const widthThreshold = window.outerWidth - window.innerWidth > threshold;
      const heightThreshold = window.outerHeight - window.innerHeight > threshold;
      if (widthThreshold || heightThreshold) {
        alert("فتح أدوات المطورين محظور!");
        setHackCount(prev => prev + 1);
      }
    };

    const interval = setInterval(checkDevTools, 1000);
    return () => clearInterval(interval);
  }, [blocked]);

  useEffect(() => {
    console.log = console.warn = console.error = () => {};
  }, []);

  return (
    <>
      {loading && <Loader onFinish={() => setLoading(false)} />}

      {!loading && (
        <>
          {blocked ? (
            <div 
              className="hack-overlay"
              style={{ pointerEvents: "all" }} 
            >
              <h1>🚨 ACCESS BLOCKED</h1>
              <p>تم رصد نشاط غير آمن</p>
              <p>سيتم فتح الموقع بعد</p>
              <h2>{secondsLeft} ثانية</h2>
            </div>
          ) : (
            <>
              <Navbar user={currentUser} />
              <CookieConsent/>
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <Main />
                      <Features />
                      <FinelPage />
                      <Ways />
                      <CarouselComponent />
                      <OurPartners />
                    </>
                  }
                />
                <Route path="/about" element={<About />} />
                <Route path="/news" element={<News />} />
                <Route path="/programs" element={<Programs />} />
                <Route path="/login" element={<Login onLogin={setCurrentUser} />} />
                <Route path="/register" element={<Register onRegister={setCurrentUser} />} />
                <Route path="/profile" element={<Profile user={currentUser} />} />
              </Routes>

              <Footer />

              {/* Scroll to Top Button */}
              {showScroll && (
                <button className="scroll-top-btn" onClick={scrollToTop} data-theme="light">
                  <h5>Top</h5>
                </button>
              )}
            </>
          )}
        </>
      )}

      <style jsx>{`
        * {
          -webkit-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }

        img {
          pointer-events: none;
        }

        .hack-overlay {
          position: fixed;
          inset: 0;
          background: radial-gradient(circle, #300000, #000);
          color: #ff4d4d;
          z-index: 9999;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          animation: pulse 1.4s infinite;
        }

        .hack-overlay h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .hack-overlay h2 {
          font-size: 2.5rem;
          color: #fff;
        }

        @keyframes pulse {
          0% { opacity: 1; }
          50% { opacity: 0.85; }
          100% { opacity: 1; }
        }

        /* Scroll Top Button */
        .scroll-top-btn {
          position: fixed;
          bottom: 20px;
          right: 40px;
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #782fffff, #7724ddff);
          color: #fff;
          border: none;
          border-radius: 20%;
          font-size: 2rem;
          cursor: pointer;
          box-shadow: 0 5px 20px rgba(0,0,0,0.3);
          transition: all 0.3s ease-in-out;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .scroll-top-btn:hover {
          transform: scale(1.15);
          box-shadow: 0 10px 30px rgba(0,0,0,0.6);
          animation: glow 1.2s infinite alternate;
        }

        [data-theme="dark"] .scroll-top-btn {
          background: linear-gradient(135deg, #00c6ff, #0072ff);
          color: #fff;
        }

        @keyframes glow {
          from { box-shadow: 0 5px 20px rgba(0,0,0,0.3), 0 0 10px rgba(255,255,255,0.3); }
          to { box-shadow: 0 10px 30px rgba(0,0,0,0.6), 0 0 20px rgba(255,255,255,0.6); }
        }
      `}</style>
    </>
  );
}
