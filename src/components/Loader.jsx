import { useEffect, useState } from "react";
import logo from "../components/images/logo.png";
import "../components/loader.css"; // استخدم نفس ملف CSS القديم للستايل الأساسي

export default function Loader({ onFinish }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            if (onFinish) onFinish();
          }, 500); // بعد وصول 100% نخفف اللودر بسرعة
          return 100;
        }
        return prev + Math.floor(Math.random() * 3) + 1; // زيادة عشوائية لإحساس طبيعي
      });
    }, 50);
    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="loader-container">
      <div className="loader-content">
        <h1 className="loader-title">
          <span className="we">WE</span>{" "}
          <span className="assiut">Assiut</span>
        </h1>
        <h3 className="loader-subtitle">Applied Technology School</h3>

        <img src={logo} alt="WE School Logo" className="loader-logo" />

        {/* عداد رقمي */}
        <div style={{
          marginTop: "20px",
          fontSize: "2rem",
          color: "#fff",
          fontWeight: "bold",
          letterSpacing: "1px",
          textShadow: "0 0 10px rgba(255,255,255,0.7)"
        }}>
          {progress}%
        </div>

        {/* شريط تحميل متدرج */}
        <div className="loader-bar" style={{ marginTop: "15px" }}>
          <span style={{ width: `${progress}%` }}></span>
        </div>
      </div>
    </div>
  );
}
