import { useState } from "react";
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

export default function App() {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <>
      {loading && <Loader onFinish={() => setLoading(false)} />}

      {!loading && (
        <>
          {/* مرّر currentUser للـ Navbar */}
          <Navbar user={currentUser} />

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Main />
                  <Features />
                  <CarouselComponent />
                  <OurPartners />
                  <FinelPage />
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
        </>
      )}
    </>
  );
}
