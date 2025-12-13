import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";
import { LanguageContext } from "../context/LanguageContext.jsx";

export default function Profile({ user }) {
  const { theme } = useContext(ThemeContext);
  const { lang } = useContext(LanguageContext);
  const isArabic = lang === "ar";

  const [showImage, setShowImage] = useState(false);

  if (!user) return <p className="text-center mt-5">{isArabic ? "الرجاء تسجيل الدخول أولاً" : "Please login first"}</p>;

  return (
    <div className="profile-container" style={{ minHeight: "80vh", padding: "2rem", background: theme === "dark" ? "#111" : "#f8f9fa", color: theme === "dark" ? "#fff" : "#111" }} dir={isArabic ? "rtl" : "ltr"}>
      <div className="profile-card" style={{
        maxWidth: "800px",
        margin: "auto",
        padding: "2rem",
        background: theme === "dark" ? "#1c1c1c" : "#fff",
        borderRadius: "20px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
        transition: "all 0.3s"
      }}>
        <div className="d-flex flex-column flex-md-row align-items-center gap-4">
          {/* الصورة مع حدث الضغط */}
          <img
            src={user.image || "https://via.placeholder.com/150"}
            alt="Profile"
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "50%",
              objectFit: "cover",
              boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
              cursor: "pointer",
              transition: "transform 0.3s"
            }}
            onClick={() => setShowImage(true)}
            onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
            onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
          />
          <div>
            <h2 style={{ marginBottom: "0.5rem" }}>{user.name}</h2>
            <p><strong>{isArabic ? "المدرسة" : "School"}:</strong> {user.school}</p>
            <p><strong>{isArabic ? "العنوان" : "Address"}:</strong> {user.address}</p>
            <p><strong>{isArabic ? "رقم الهاتف" : "Phone"}:</strong> {user.phone}</p>
            <p><strong>Email:</strong> {user.email}</p>
          </div>
        </div>
      </div>

      {/* Overlay لتكبير الصورة */}
      {showImage && (
        <div
          onClick={() => setShowImage(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            cursor: "zoom-out"
          }}
        >
          <img
            src={user.image}
            alt="Profile Full"
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              borderRadius: "10px",
              boxShadow: "0 5px 25px rgba(0,0,0,0.5)"
            }}
          />
        </div>
      )}
    </div>
  );
}
