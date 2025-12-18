import { useEffect, useState } from "react";
import logo from "../components/images/logo.png";
import "../components/loader.css";

export default function Loader({ onFinish }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            if (onFinish) onFinish();
          }, 500);
          return 100;
        }
        return prev + Math.floor(Math.random() * 3) + 1;
      });
    }, 40);
    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="loader-container">
      <div className="loader-content">
        <img src={logo} alt="WE School Logo" className="loader-logo" />

        <h1 className="loader-title">
          <span className="we">WE</span> <span className="assiut">Assiut</span>
        </h1>
        <h3 className="loader-subtitle">Applied Technology School</h3>

        {/* العدّاد الرقمي */}
        <div className="loader-progress-number">{progress}%</div>

        {/* شريط التحميل */}
        <div className="loader-bar">
          <span style={{ width: `${progress}%` }}></span>
        </div>

        {/* glow effect */}
        <div className="loader-glow" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
}
