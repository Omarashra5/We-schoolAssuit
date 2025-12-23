import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext.jsx";
import { LanguageContext } from "../context/LanguageContext.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faSchool,
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
  faLock,
  faUserTie,
  faImage
} from "@fortawesome/free-solid-svg-icons";
import Loader from "./Loader";
import "./RegisterForm.css";

export default function Register({ onRegister }) {
  const { theme } = useContext(ThemeContext);
  const { lang } = useContext(LanguageContext);
  const isArabic = lang === "ar";
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [imagePreview, setImagePreview] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    role: "",
    school: "",
    address: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    image: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files) {
      const file = files[0];
      setFormData({ ...formData, image: file });

      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    // ===== VALIDATION =====
    if (formData.name.trim().length < 3) {
      setMessage(isArabic ? "الاسم يجب أن يكون 3 أحرف على الأقل" : "Name must be at least 5 characters");
      setLoading(false);
      return;
    }

    if (!formData.email.endsWith("@gmail.com")) {
      setMessage(isArabic ? "البريد الإلكتروني يجب أن يكون Gmail" : "Email must be a Gmail address");
      setLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setMessage(isArabic ? "كلمة المرور يجب أن تكون 6 أحرف على الأقل" : "Password must be at least 6 characters");
      setLoading(false);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setMessage(isArabic ? "كلمة المرور غير متطابقة" : "Passwords do not match");
      setLoading(false);
      return;
    }

    const phoneRegex = /^[0-9]{11}$/;
    if (!phoneRegex.test(formData.phone)) {
      setMessage(isArabic ? "رقم الهاتف يجب أن يكون 11 رقم" : "Phone number must be 11 digits");
      setLoading(false);
      return;
    }

    setTimeout(() => {
      const users = JSON.parse(localStorage.getItem("users")) || [];

      // منع تكرار الإيميل
      const emailExists = users.some(u => u.email === formData.email);
      if (emailExists) {
        setMessage(isArabic ? "هذا البريد مستخدم بالفعل" : "Email already exists");
        setLoading(false);
        return;
      }

      const newUser = {
        ...formData,
        image: imagePreview
      };

      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));

      onRegister(newUser);
      setMessage(isArabic ? "تم إنشاء الحساب بنجاح" : "Account created successfully");

      setTimeout(() => {
        navigate("/"); // Home
      }, 800);

      setLoading(false);
    }, 1200);
  };

  return (
    <div className="register-container" data-theme={theme} dir={isArabic ? "rtl" : "ltr"}>
      {loading && <Loader />}

      <div className="register-card">
        <div className="register-logo"></div>

        <div className="register-form">
          <h2>{isArabic ? "تسجيل حساب جديد" : "Register New Account"}</h2>

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <FontAwesomeIcon icon={faUser} />
              <input name="name" placeholder=" " onChange={handleChange} required />
              <label>{isArabic ? "الاسم بالكامل" : "Full Name"}</label>
            </div>

            <div className="input-group">
              <FontAwesomeIcon icon={faUserTie} />
              <select name="role" onChange={handleChange} required>
                <option value="student" style={{ color: "black" }}>
                  {isArabic ? "طالب" : "Student"}
                </option>
                <option value="teacher" style={{ color: "black" }}>
                  {isArabic ? "مدرس" : "Teacher"}
                </option>
              </select>
            </div>

            <div className="input-group">
              <FontAwesomeIcon icon={faSchool} />
              <input name="school" placeholder=" " onChange={handleChange} required />
              <label>{isArabic ? "المدرسة" : "School"}</label>
            </div>

            <div className="input-group">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <input name="address" placeholder=" " onChange={handleChange} required />
              <label>{isArabic ? "العنوان" : "Address"}</label>
            </div>

            <div className="input-group">
              <FontAwesomeIcon icon={faPhone} />
              <input name="phone" placeholder=" " onChange={handleChange} required />
              <label>{isArabic ? "رقم الهاتف" : "Phone"}</label>
            </div>

            <div className="input-group">
              <FontAwesomeIcon icon={faEnvelope} />
              <input type="email" name="email" placeholder=" " onChange={handleChange} required />
              <label>{isArabic ? "البريد الإلكتروني" : "Email"}</label>
            </div>

            <div className="input-group">
              <FontAwesomeIcon icon={faLock} />
              <input type="password" name="password" placeholder=" " onChange={handleChange} required />
              <label>{isArabic ? "كلمة المرور" : "Password"}</label>
            </div>

            <div className="input-group">
              <FontAwesomeIcon icon={faLock} />
              <input type="password" name="confirmPassword" placeholder=" " onChange={handleChange} required />
              <label>{isArabic ? "تأكيد كلمة المرور" : "Confirm Password"}</label>
            </div>

            <div className="image-upload">
              <label>
                <FontAwesomeIcon icon={faImage} />
                <span>{isArabic ? "ارفع صورتك" : "Upload Your Image"}</span>
                <input type="file" accept="image/*" required onChange={handleChange} />
              </label>

              {imagePreview && <img src={imagePreview} alt="Preview" />}
            </div>

            <button type="submit">{isArabic ? "تسجيل" : "Register"}</button>
          </form>

          {message && <p className="status-msg">{message}</p>}
        </div>
      </div>
    </div>
  );
}
