import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";
import './LoaderLogin.css';

export default function LoaderLogin() {
  const { theme } = useContext(ThemeContext);
  const loaderColor = theme === "dark" ? "#fff" : "#3240ff";

  return (
    <div className="loader-login-overlay">
      <div className="loader-login" style={{ borderTopColor: loaderColor }}></div>
    </div>
  );
}
