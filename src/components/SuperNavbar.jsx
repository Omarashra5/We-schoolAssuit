import { useState, useEffect, useContext, useRef } from "react";
import { LanguageContext } from "../context/LanguageContext.jsx";
import { ThemeContext } from "../context/ThemeContext.jsx";
import { useNavigate } from "react-router-dom";

export default function SuperNavbar({ user }) {
  const { lang, setLang } = useContext(LanguageContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [pullDown, setPullDown] = useState(false);
  const [time, setTime] = useState(new Date());
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [cameraStream, setCameraStream] = useState(null);
  const videoRef = useRef(null);
  const navigate = useNavigate();
  const isArabic = lang === "ar";

  // معلومات الجهاز دقيقة
  const [deviceInfo, setDeviceInfo] = useState({
    browser: "Unknown",
    os: "Unknown",
    screen: `${window.innerWidth}x${window.innerHeight}`,
  });

  useEffect(() => {
    const ua = navigator.userAgent;

    // Browser detection
    let browser = "Unknown";
    if (ua.includes("Edg")) browser = "Microsoft Edge";
    else if (ua.includes("Chrome") && !ua.includes("Edg")) browser = "Chrome";
    else if (ua.includes("Firefox")) browser = "Firefox";
    else if (ua.includes("Safari") && !ua.includes("Chrome")) browser = "Safari";

    // OS detection
    let os = "Unknown";
    if (ua.includes("Win")) os = "Windows";
    else if (ua.includes("Mac")) os = "MacOS";
    else if (ua.includes("Linux")) os = "Linux";
    else if (ua.includes("Android")) os = "Android";
    else if (ua.includes("iPhone") || ua.includes("iPad")) os = "iOS";

    setDeviceInfo({ browser, os, screen: `${window.innerWidth}x${window.innerHeight}` });
  }, []);

  // تحديث الساعة
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Online/offline
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  // Pull-down support لمس + ماوس
  useEffect(() => {
    let startY = 0;
    let currentY = 0;

    const handleTouchStart = (e) => { startY = e.touches[0].clientY; };
    const handleTouchMove = (e) => { currentY = e.touches[0].clientY; if (currentY - startY > 50) setPullDown(true); };
    const handleTouchEnd = () => { if (currentY - startY < 50) setPullDown(false); };

    const handleMouseDown = (e) => { startY = e.clientY; window.addEventListener("mousemove", handleMouseMove); window.addEventListener("mouseup", handleMouseUp); };
    const handleMouseMove = (e) => { currentY = e.clientY; if (currentY - startY > 50) setPullDown(true); };
    const handleMouseUp = () => { if (currentY - startY < 50) setPullDown(false); window.removeEventListener("mousemove", handleMouseMove); window.removeEventListener("mouseup", handleMouseUp); };

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);
    window.addEventListener("mousedown", handleMouseDown);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  // فتح الكاميرا
  const openCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      setCameraStream(stream);
      if (videoRef.current) videoRef.current.srcObject = stream;
    } catch (err) {
      alert(isArabic ? "لا يمكن الوصول للكاميرا: " : "Cannot access camera: " + err.message);
    }
  };

  // إغلاق الكاميرا عند غلق Sidebar
  useEffect(() => {
    if (!sidebarOpen && cameraStream) {
      cameraStream.getTracks().forEach(track => track.stop());
      setCameraStream(null);
    }
  }, [sidebarOpen, cameraStream]);

  // أخذ صورة من الفيديو
  const captureScreenshot = () => {
    if (!videoRef.current) return;
    const canvas = document.createElement("canvas");
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
    canvas.toBlob((blob) => {
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "screenshot.png";
      a.click();
      URL.revokeObjectURL(url);
    });
  };

  const goTo = (path) => navigate(path);
  const navBg = theme === "dark" ? "rgba(0, 0, 0, 1)" : "rgba(255, 255, 255, 1)";
  const navText = theme === "dark" ? "#ffffffff" : "#000000ff";

  return (
    <>
      {/* Super Top Bar */}
      <div 
      dir={isArabic ? "ltr" : "rtl"}
        className={`super-top-bar ${pullDown ? "open" : ""}`}
        style={{
          background: navBg,
          color: navText,
          backdropFilter: "blur(20px)",
          transition: "all 0.4s ease",
        }}
        >
        
        <div  className="container d-flex justify-content-between align-items-center p-2">

          <div>{time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</div>

          <div className="d-flex gap-2">
            <button className="btn-outline" onClick={() => goTo("/")}>{isArabic ? "الرئيسية" : "Home"}</button>
            <button className="btn-outline" onClick={() => toggleTheme()}>{theme === "dark" ? (isArabic ? "ضوء" : "Light") : (isArabic ? "ظلام" : "Dark")}</button>
            <button className="btn-outline" onClick={() => setLang(isArabic ? "en" : "ar")}>{isArabic ? "EN" : "AR"}</button>
            <button className="btn-outline" onClick={() => setSidebarOpen(true)}>{isArabic ? "الإعدادات" : "Settings"}</button>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div  className={`super-sidebar ${sidebarOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setSidebarOpen(false)}>✖</button>
        <h4>{isArabic ? "الإعدادات" : "Settings"}</h4>
        <p>{isArabic ? `المتصفح: ${deviceInfo.browser}` : `Browser: ${deviceInfo.browser}`}</p>
        <p>{isArabic ? `نظام التشغيل: ${deviceInfo.os}` : `OS: ${deviceInfo.os}`}</p>
        <p>{isArabic ? `حجم الشاشة: ${deviceInfo.screen}` : `Screen: ${deviceInfo.screen}`}</p>
        <p>{isArabic ? `الوقت: ${time.toLocaleTimeString()}` : `Time: ${time.toLocaleTimeString()}`}</p>
        <p>{isArabic ? `الحالة: ${isOnline ? "متصل" : "غير متصل"}` : `Status: ${isOnline ? "Online" : "Offline"}`}</p>
      </div>

      <style>{`
        .super-top-bar {
          position: fixed;
          top: -70px;
          left: 0;
          width: 100%;
          z-index:1500;
          font-size: 0.9rem;
          border-bottom-left-radius:15px;
          border-bottom-right-radius:15px;
          box-shadow:0 5px 15px rgba(144, 0, 255, 1);
        }
        .super-top-bar.open{ top:0; }
        .btn-outline {
          background:transparent;
          color:#8b00ff;
          padding:2px 8px;
          border-radius:10px;
          font-size:0.8rem;
          cursor:pointer;
        }
        .btn-outline:hover{ background:#8b00ff;color:#fff; }

        .super-sidebar{
          position:fixed;
          top:0;
          right:-320px;
          width:320px;
          height:100%;
          background:${theme === "dark" ? "#000000ff" : "#ffffffff"};
          color:${theme === "dark" ? "#fff" : "#000"};
          box-shadow:-5px 0 15px rgba(0,0,0,0.3);
          transition:all 0.4s ease;
          z-index:2000;
          padding:20px;
          display:flex;
          flex-direction:column;
          gap:8px;
        }
        .super-sidebar.open{ right:0; }
        .super-sidebar .close-btn{
          align-self:flex-end;font-size:1.3rem;background:transparent;border:none;cursor:pointer;
        }
        .super-sidebar button{
          background:#8b00ff;color:#fff;border:none;border-radius:6px;padding:6px;cursor:pointer;font-size:0.9rem;
        }
        .super-sidebar button:hover{ opacity:0.85; }
      `}</style>
    </>
  );
}
