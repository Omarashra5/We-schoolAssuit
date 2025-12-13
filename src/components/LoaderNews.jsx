import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";
import './LoaderNews.css'; // ملف CSS مخصص لللودر

export default function LoaderNews() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="loader-news-container" style={{ background: theme === "dark" ? "#111" : "rgba(0,0,0,0.05)" }}>
      <div className="loader-news">
        {[...Array(5)].map((_, i) => (
          <div key={i} className={`loader-news-item ${theme === "dark" ? "dark" : ""}`}></div>
        ))}
      </div>
      <p style={{ color: theme === "dark" ? "#fff" : "#111", marginTop: "1rem" }}>Loading latest news...</p>
    </div>
  );
}
