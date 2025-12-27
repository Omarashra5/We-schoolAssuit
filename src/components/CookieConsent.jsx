import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";
import { LanguageContext } from "../context/LanguageContext.jsx";
import "./CookieConsent.css";

export default function CookieConsent() {
  const { theme } = useContext(ThemeContext);
  const { lang } = useContext(LanguageContext);
  const isArabic = lang === "ar";

  const [visible, setVisible] = useState(true); // البانر يظهر دائمًا عند الدخول
  const [secondsLeft, setSecondsLeft] = useState(15);
  const [accessGranted, setAccessGranted] = useState(false); // هل يمكنه التصفح

  // تايمر 15 ثانية لإخفاء البانر
  useEffect(() => {
    if (!visible) return;

    const interval = setInterval(() => {
      setSecondsLeft(prev => {
        if (prev <= 1) {
          setVisible(false);
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [visible]);

  const handleAccept = () => {
    setVisible(false);
    setAccessGranted(true); // يسمح بالدخول
  };

  const handleReject = () => {
    setVisible(false);
    setAccessGranted(false); // يمنع الدخول
  };

  return (
    <>
      {/* البانر يظهر دائمًا */}
      {visible && (
        <div className={`cookie-banner ${theme}`} dir={isArabic ? "rtl" : "ltr"}>
          <p>
            {isArabic
              ? "يستخدم موقع WE أسيوط الكوكيز لتحسين تجربتك. بالضغط على قبول فإنك توافق على استخدام الكوكيز."
              : "WE Assiut uses cookies to enhance your experience. By clicking Accept, you agree to our use of cookies."}
          </p>

          <div className="cookie-buttons">
            <button className="accept-btn" onClick={handleAccept}>
              {isArabic ? "قبول" : "Accept"}
            </button>
            <button className="reject-btn" onClick={handleReject}>
              {isArabic ? "رفض" : "Reject"}
            </button>
          </div>

          <div className="cookie-timer">
            {isArabic ? `تختفي خلال ${secondsLeft} ثانية` : `Hides in ${secondsLeft} sec`}
          </div>

          <p className="copyright-note">
            {isArabic
              ? "حقوق النشر © 2025 WE Assiut. كل الحقوق محفوظة."
              : "Copyright © 2025 WE Assiut. All rights reserved."}
          </p>
        </div>
      )}

      {/* overlay لمن رفض الكوكيز */}
      {!accessGranted && !visible && (
        <div className="access-block-overlay">
          <p>{isArabic ? "يجب الموافقة على الصلاحيات لتصفح الموقع" : "You must accept Permissions to browse the site"}</p>
          <button className="accept-btn" onClick={handleAccept}>
            {isArabic ? "قبول" : "Accept"}
          </button>
        </div>
      )}
    </>
  );
}
