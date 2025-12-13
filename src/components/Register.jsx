import { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";
import { LanguageContext } from "../context/LanguageContext.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSchool, faMapMarkerAlt, faPhone, faEnvelope, faLock, faImage, faUserTie } from "@fortawesome/free-solid-svg-icons";
import Loader from "./Loader";
import './RegisterForm.css';

export default function Register({ onRegister }) {
  const { theme } = useContext(ThemeContext);
  const { lang } = useContext(LanguageContext);
  const isArabic = lang === "ar";

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    school: "",
    address: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    schoolLogo: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    const users = JSON.parse(localStorage.getItem("users")) || [];

    setTimeout(() => {
      if (users.some(u => u.email === formData.email)) {
        setMessage(isArabic ? "البريد الإلكتروني مستخدم بالفعل" : "Email already registered");
        setLoading(false);
        return;
      }
      if (formData.password !== formData.confirmPassword) {
        setMessage(isArabic ? "كلمة المرور غير متطابقة" : "Passwords do not match");
        setLoading(false);
        return;
      }

      // تحويل الصورة إلى Base64 قبل التخزين
      const reader = new FileReader();
      reader.onloadend = () => {
        const newUser = {
          ...formData,
          image: formData.schoolLogo ? reader.result : "https://via.placeholder.com/150"
        };
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
        setMessage(isArabic ? "تم تسجيل الحساب بنجاح!" : "Account registered successfully!");
        onRegister(newUser);
        setLoading(false);
      };

      if (formData.schoolLogo) {
        reader.readAsDataURL(formData.schoolLogo);
      } else {
        reader.onloadend();
      }

    }, 1500);
  };

  return (
    <div className="register-container" style={{ background: theme === "dark" ? "#111" : "#f0f2f5", color: theme === 'dark' ? 'black' : 'black' }} dir={isArabic ? "rtl" : "ltr"}>
      {loading && <Loader />}
      <div className="register-card">
        <div className="register-logo"></div>
        <div className="register-form">
          <h2>{isArabic ? "تسجيل حساب جديد" : "Register New Account"}</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <FontAwesomeIcon icon={faUser} />
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder={isArabic ? "الاسم بالكامل" : "Full Name"} required />
            </div>
            <div className="input-group">
              <FontAwesomeIcon icon={faUserTie} />
              <select name="role" value={formData.role} onChange={handleChange} required>
                <option value="">{isArabic ? "اختر الدور" : "Select Role"}</option>
                <option value="student">{isArabic ? "طالب" : "Student"}</option>
                <option value="teacher">{isArabic ? "مدرس" : "Teacher"}</option>
                <option value="admin">{isArabic ? "أدمن" : "Admin"}</option>
              </select>
            </div>
            <div className="input-group">
              <FontAwesomeIcon icon={faSchool} />
              <select name="school" value={formData.school} onChange={handleChange} required>
                <option value="">{isArabic ? "اختر المدرسة" : "Select School"}</option>
                <option value="WE Assiut">{isArabic ? "أسيوط" : "WE Assiut"}</option>
                <option value="Al Minya">{isArabic ? "المنيا" : "Al Minya"}</option>
                <option value="Al Tukh">{isArabic ? "الطوخ" : "Al Tukh"}</option>
                <option value="Al Nasr">{isArabic ? "النصر" : "Al Nasr"}</option>
                <option value="Alexandria">{isArabic ? "الإسكندرية" : "Alexandria"}</option>
                <option value="Mansoura">{isArabic ? "المنصورة" : "Mansoura"}</option>
              </select>
            </div>
            <div className="input-group">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder={isArabic ? "العنوان" : "Address"} required />
            </div>
            <div className="input-group">
              <FontAwesomeIcon icon={faPhone} />
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder={isArabic ? "رقم الهاتف" : "Phone"} required />
            </div>
            <div className="input-group">
              <FontAwesomeIcon icon={faEnvelope} />
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder={isArabic ? "البريد الإلكتروني" : "Email"} required />
            </div>
            <div className="input-group">
              <FontAwesomeIcon icon={faImage} />
              <input type="file" name="schoolLogo" onChange={handleChange} />
            </div>
            <div className="input-group">
              <FontAwesomeIcon icon={faLock} />
              <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder={isArabic ? "كلمة المرور" : "Password"} required />
            </div>
            <div className="input-group">
              <FontAwesomeIcon icon={faLock} />
              <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder={isArabic ? "تأكيد كلمة المرور" : "Confirm Password"} required />
            </div>
            <button type="submit">{isArabic ? "تسجيل" : "Register"}</button>
          </form>
          {loading && <p className="status-msg">{isArabic ? "جارٍ تسجيل الحساب..." : "Registering..."}</p>}
          {message && <p className="status-msg success">{message}</p>}
        </div>
      </div>
    </div>
  );
}
