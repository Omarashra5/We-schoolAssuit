import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";
import { LanguageContext } from "../context/LanguageContext.jsx";
import LoaderLogin from "./LoaderLogin";
import "../components/LoginForm.css";

export default function Login({ onLogin }) {
  const { theme } = useContext(ThemeContext);
  const { lang } = useContext(LanguageContext);
  const isArabic = lang === "ar";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const text = {
    en: {
      title: "Login to Your Account",
      email: "Email address",
      password: "Password",
      submit: "Login",
    },
    ar: {
      title: "تسجيل الدخول",
      email: "البريد الإلكتروني",
      password: "كلمة المرور",
      submit: "دخول",
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    setTimeout(() => {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const found = users.find(
        (u) => u.email === email && u.password === password
      );

      if (found) {
        setMessage(isArabic ? "تم تسجيل الدخول بنجاح" : "Login successful");
        onLogin(found);
      } else {
        setMessage(
          isArabic
            ? "بيانات الدخول غير صحيحة"
            : "Invalid email or password"
        );
      }
      setLoading(false);
    }, 1200);
  };

  return (
    <div
      className="login-container"
      data-theme={theme}
      dir={isArabic ? "rtl" : "ltr"}
    >
      {loading && <LoaderLogin />}

      <div className="login-card">
        <div className="login-logo"></div>

        <div className="login-form">
          <h2>{text[lang].title}</h2>

          <form onSubmit={handleSubmit}>

            <div className="field">
              <input
                id="email"
                className="login-input"
                type="email"
                placeholder=" "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label htmlFor="email">{text[lang].email}</label>
            </div>

            <div className="field">
              <input
                id="password"
                className="login-input"
                type="password"
                placeholder=" "
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label htmlFor="password">{text[lang].password}</label>
            </div>

            <button type="submit">{text[lang].submit}</button>
          </form>


          {message && <p className="status-msg">{message}</p>}
        </div>
      </div>
    </div>
  );
}
