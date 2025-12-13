import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";
import { LanguageContext } from "../context/LanguageContext.jsx";
import '../components/App.css'
import p1 from "./images/Picture1.png";
import p2 from "./images/Picture2.png";
import p4 from "./images/Picture4.png";
import p5 from "./images/Picture5.png";
import p6 from "./images/Picture6.png";

export default function OurPartners() {
  const { theme } = useContext(ThemeContext);
  const { lang } = useContext(LanguageContext);

  const partners = [p1, p2, p4, p5, p6];

  return (
    <section
      style={{
        backgroundColor: theme === "dark" ? "#111" : "#f8f9fa",
        padding: "4rem 0",
        overflow: "hidden",
      }}
    >
      <div className="container">
        <h2
          className={`text-center mb-5 ${
            theme === "dark" ? "text-white" : "text-dark"
          }`}
        >
          {lang === "ar" ? "شركاؤنا" : "Our Partners"}<i class="fa-solid fa-handshake"></i>
        </h2>
      </div>

      <div className="partners-wrapper">
        <div className="partners-track">
          {[...partners, ...partners].map((logo, idx) => (
            <div
              key={idx}
              className="partner-card"
              style={{
                background: theme === "dark" ? "#1c1c1c" : "#fff",
              }}
            >
              <img src={logo} alt="partner" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
