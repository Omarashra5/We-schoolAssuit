import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";
import { LanguageContext } from "../context/LanguageContext.jsx";

export default function Profile({ user }) {
  const { theme } = useContext(ThemeContext);
  const { lang } = useContext(LanguageContext);
  const isArabic = lang === "ar"; 
  const [showImage, setShowImage] = useState(false);

  if (!user)
    return (
      <p
        className="text-center mt-5"
        style={{
          fontSize: "1.2rem",
          color: theme === "dark" ? "#fff" : "#111",
          fontFamily: "Cairo, Tajawal, sans-serif",
        }}
      >
        {isArabic ? "الرجاء تسجيل الدخول أولاً" : "Please login first"}
      </p>
    );

  return (
    <div
      className="profile-container"
      dir={isArabic ? "rtl" : "ltr"}
      style={{
        minHeight: "100vh",
        padding: "2rem",
        background: theme === "dark" ? "#111" : "#f0f2f8",
        color: theme === "dark" ? "#fff" : "#111",
        fontFamily: "Cairo, Tajawal, sans-serif",
        transition: "all 0.3s",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="profile-card">
        <div className="profile-inner">
          {/* الصورة */}
          <div className="profile-image" onClick={() => setShowImage(true)}>
            <img
              src={user.image || "https://via.placeholder.com/180"}
              alt="Profile"
            />
          </div>

          {/* البيانات */}
          <div className="profile-info">
            <h2>{user.name}</h2>
            <p>
              <strong>{isArabic ? "المدرسة:" : "School:"}</strong> {user.school}
            </p>
            <p>
              <strong>{isArabic ? "العنوان:" : "Address:"}</strong> {user.address}
            </p>
            <p>
              <strong>{isArabic ? "رقم الهاتف:" : "Phone:"}</strong> {user.phone}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
          </div>
        </div>
      </div>

      {/* Overlay لتكبير الصورة */}
      {showImage && (
        <div className="overlay" onClick={() => setShowImage(false)}>
          <img
            src={user.image || "https://via.placeholder.com/500"}
            alt="Profile Full"
          />
        </div>
      )}

      {/* ====== STYLES ====== */}
      <style jsx>{`
        .profile-card {
          width: 100%;
          max-width: 900px;
          padding: 2.5rem;
          border-radius: 24px;
          backdrop-filter: blur(20px);
          background: ${theme === "dark"
            ? "rgba(30,30,40,0.85)"
            : "rgba(255,255,255,0.9)"};
          box-shadow: ${theme === "dark"
            ? "0 25px 70px rgba(0,0,0,0.6)"
            : "0 25px 70px rgba(0,0,0,0.12)"};
          transition: all 0.3s;
        }

        .profile-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
        }

        .profile-image {
          cursor: pointer;
          transition: transform 0.3s;
        }

        .profile-image img {
          width: 180px;
          height: 180px;
          border-radius: 50%;
          object-fit: cover;
          box-shadow: 0 8px 30px rgba(0,0,0,0.35);
          transition: transform 0.3s;
        }

        .profile-image:hover img {
          transform: scale(1.08);
        }

        .profile-info {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
          width: 100%;
          max-width: 500px;
          text-align: ${isArabic ? "right" : "left"};
        }

        .profile-info h2 {
          font-size: 2rem;
          text-align: center;
        }

        .profile-info p {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 1.05rem;
          line-height: 1.6;
        }

        .overlay {
          position: fixed;
          inset: 0;
          background-color: rgba(0,0,0,0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          cursor: zoom-out;
        }

        .overlay img {
          max-width: 90%;
          max-height: 90%;
          border-radius: 14px;
          box-shadow: 0 8px 35px rgba(0,0,0,0.5);
        }

        @media (max-width: 768px) {
          .profile-inner {
            gap: 1.5rem;
          }

          .profile-image img {
            width: 140px;
            height: 140px;
          }

          .profile-info {
            max-width: 100%;
            text-align: center;
          }

          .profile-info h2 {
            font-size: 1.6rem;
          }
        }
      `}</style>
    </div>
  );
}
