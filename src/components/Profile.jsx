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
        style={{ fontSize: "1.2rem", color: theme === "dark" ? "#fff" : "#111" }}
      >
        {isArabic ? "الرجاء تسجيل الدخول أولاً" : "Please login first"}
      </p>
    );

  return (
    <div
      className="profile-container"
      style={{
        minHeight: "100vh",
        padding: "2rem",
        background: theme === "dark" ? "#111" : "#f0f2f8",
        color: theme === "dark" ? "#fff" : "#111",
        transition: "all 0.3s",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      dir={isArabic ? "rtl" : "ltr"}
    >
      <div
        className="profile-card"
        style={{
          width: "100%",
          maxWidth: "900px",
          padding: "2.5rem",
          borderRadius: "24px",
          backdropFilter: "blur(20px)",
          background: theme === "dark" ? "rgba(30,30,40,0.85)" : "rgba(255,255,255,0.9)",
          boxShadow: theme === "dark"
            ? "0 25px 70px rgba(0,0,0,0.6)"
            : "0 25px 70px rgba(0,0,0,0.12)",
          transition: "all 0.3s",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          {/* الصورة */}
          <div
            style={{
              position: "relative",
              cursor: "pointer",
              transition: "transform 0.3s",
            }}
            onClick={() => setShowImage(true)}
          >
            <img
              src={user.image || "https://via.placeholder.com/180"}
              alt="Profile"
              style={{
                width: "180px",
                height: "180px",
                borderRadius: "50%",
                objectFit: "cover",
                boxShadow: "0 8px 30px rgba(0,0,0,0.35)",
                transition: "transform 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          </div>

          {/* البيانات */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "1rem",
              width: "100%",
              maxWidth: "500px",
            }}
          >
            <h2 style={{ textAlign: "center", fontSize: "2rem" }}>{user.name}</h2>

            <p style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
              🏫 <strong>{isArabic ? "المدرسة:" : "School:"}</strong> {user.school}
            </p>
            <p style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
              📍 <strong>{isArabic ? "العنوان:" : "Address:"}</strong> {user.address}
            </p>
            <p style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
              📞 <strong>{isArabic ? "رقم الهاتف:" : "Phone:"}</strong> {user.phone}
            </p>
            <p style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
              ✉️ <strong>Email:</strong> {user.email}
            </p>
          </div>
        </div>
      </div>

      {/* Overlay لتكبير الصورة */}
      {showImage && (
        <div
          onClick={() => setShowImage(false)}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.85)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            cursor: "zoom-out",
          }}
        >
          <img
            src={user.image || "https://via.placeholder.com/500"}
            alt="Profile Full"
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              borderRadius: "14px",
              boxShadow: "0 8px 35px rgba(0,0,0,0.5)",
              transition: "transform 0.3s",
            }}
          />
        </div>
      )}
    </div>
  );
}
