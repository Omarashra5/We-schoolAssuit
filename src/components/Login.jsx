import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";
import { LanguageContext } from "../context/LanguageContext.jsx";
import LoaderLogin from "./LoaderLogin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import '../components/LoginForm.css';

export default function Login({ onLogin }) {
  const { theme } = useContext(ThemeContext);
  const { lang } = useContext(LanguageContext);
  const isArabic = lang === "ar";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [user, setUser] = useState(null);

  const text = {
    en: { title: "Login to Your Account", email: "Email", password: "Password", submit: "Login" },
    ar: { title: "تسجيل الدخول", email: "البريد الإلكتروني", password: "كلمة المرور", submit: "دخول" }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    setTimeout(() => {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const foundUser = users.find(u => u.email === email && u.password === password);

      if (foundUser) {
        setUser(foundUser);
        setMessage(isArabic ? "تم تسجيل الدخول بنجاح!" : "Logged in successfully!");
        onLogin(foundUser);
      } else {
        setMessage(isArabic ? "خطأ في البريد الإلكتروني أو كلمة المرور" : "Invalid email or password");
      }

      setLoading(false);
    }, 1500);
  };

  return (
    <div className="login-container" style={{ background: theme === "dark" ? "#111" : "#f0f2f5", color: theme==='dark'?'black':'black'}} dir={isArabic ? "rtl" : "ltr"}>
      {loading && <LoaderLogin />}
      <div className="login-card">
        <div className="login-logo"></div>
        <div className="login-form">
          <h2>{text[lang].title}</h2>

          {user && (
            <div style={{ textAlign: "center", marginBottom: "1rem" }}>
              <img
                src={user.image}
                alt="Profile"
                style={{ width: 100, height: 100, borderRadius: "50%", objectFit: "cover", boxShadow: "0 5px 15px rgba(0,0,0,0.3)" }}
              />
              <h3 style={{ marginTop: "0.5rem" }}>{user.name}</h3>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <FontAwesomeIcon icon={faEnvelope} />
              <input
                type="email"
                placeholder={text[lang].email}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <FontAwesomeIcon icon={faLock} />
              <input
                type="password"
                placeholder={text[lang].password}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit">{text[lang].submit}</button>
          </form>

          {message && <p className={`status-msg ${user ? "success" : "error"}`}>{message}</p>}
        </div>
      </div>
    </div>
  );
}
