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

// 👇 ScrollToTopButton component
function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {visible && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          <h5><strong><i class="fa-solid fa-arrow-up"></i></strong></h5>
        </button>
      )}
      <style jsx>{`
        .scroll-to-top {
          position: fixed;
          bottom: 10px;
          right: 10px;
          background: #504545ff;
          color: #ffffffff;
          border: none;
          padding: 0.8rem 1rem;
          border-radius: 10px;
          cursor: pointer;
          font-size: 1.5rem;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
          z-index: 1000;
          transition: transform 0.3s, opacity 0.3s;
        }

        .scroll-to-top:hover {
          transform: translateY(-5px);
          opacity: 0.9;
        }
      `}</style>
    </>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <>
      {loading && <Loader onFinish={() => setLoading(false)} />}

      {!loading && (
        <>
          <Navbar user={currentUser} />

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Main />
                  <Features />
                  <FinelPage />
                  <CarouselComponent />
                  <OurPartners />
                  <Ways />
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
          <ScrollToTopButton />
        </>
      )}
    </>
  );
}
