import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";
import { LanguageContext } from "../context/LanguageContext.jsx";
import LoaderNews from "./LoaderNews";

// استيراد صور الأخبار
import img1 from '../components/imagesNews/13159734111656231295.webp';
import img2 from '../components/imagesNews/2.jpg';
import img3 from '../components/imagesNews/3.jpeg';
import img4 from '../components/imagesNews/4.webp';
import img5 from '../components/imagesNews/5.jpg';
import img6 from '../components/imagesNews/6.jpg';
import img7 from '../components/imagesNews/7.webp';
import img8 from '../components/imagesNews/8.jpg';
import img9 from '../components/imagesNews/9.jpg';
import img10 from '../components/imagesNews/10.jpg';
import img11 from '../components/imagesNews/11.jpg';
import img12 from '../components/imagesNews/12.webp';
import img13 from '../components/imagesNews/13.jpeg';
import img14 from '../components/imagesNews/14.webp';
import img15 from '../components/imagesNews/15.jpg';

export default function News() {
  const { theme } = useContext(ThemeContext);
  const { lang } = useContext(LanguageContext);
  const isArabic = lang === "ar";

  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedNews, setSelectedNews] = useState(null);
  const newsPerPage = 6;

  // تحميل الأخبار مع Loader
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const data = [
        { id: 1, title: isArabic ? "افتتاح مدرسة WE أسيوط" : "WE Assiut School Opening", date: "2025-12-01", content: isArabic ? "تم افتتاح مدرسة WE أسيوط للتكنولوجيا التطبيقية لتوفير تعليم عالي الجودة للطلاب." : "WE Assiut Applied Technology School has opened to provide high-quality education for students.", image: img1 },
        { id: 2, title: isArabic ? "تطوير الموقع الإلكتروني" : "Website Development Update", date: "2025-12-05", content: isArabic ? "تم تحديث الموقع الإلكتروني لتسهيل وصول الطلاب وأولياء الأمور للمعلومات بسرعة." : "The website has been updated to help students and parents access information quickly.", image: img2 },
        { id: 3, title: isArabic ? "إطلاق برنامج جديد للطلاب" : "New Student Program Launch", date: "2025-12-06", content: isArabic ? "تم إطلاق برنامج جديد لتطوير مهارات الطلاب في مجال التكنولوجيا." : "A new program has been launched to enhance students' skills in technology.", image: img3 },
        { id: 4, title: isArabic ? "تعيين مدرسين جدد" : "New Teachers Appointed", date: "2025-12-07", content: isArabic ? "تم تعيين عدد من المدرسين المتخصصين لتقديم أفضل تعليم ممكن." : "Several specialized teachers have been appointed to provide the best education possible.", image: img4 },
        { id: 5, title: isArabic ? "ورش عمل لتطوير الطلاب" : "Student Workshop Activities", date: "2025-12-08", content: isArabic ? "تم تنظيم ورش عمل للطلاب لتطوير مهاراتهم العملية." : "Workshops were organized for students to enhance their practical skills.", image: img5 },
        { id: 6, title: isArabic ? "زيارة علمية للمصانع" : "Scientific Field Trip", date: "2025-12-09", content: isArabic ? "زار الطلاب المصانع للتعرف على تطبيقات التكنولوجيا في الواقع." : "Students visited factories to learn real-world applications of technology.", image: img6 },
        { id: 7, title: isArabic ? "مسابقة البرمجة السنوية" : "Annual Coding Competition", date: "2025-12-10", content: isArabic ? "أقيمت مسابقة للبرمجة بين الطلاب لتعزيز مهاراتهم." : "A coding competition was held among students to enhance their skills.", image: img7 },
        { id: 8, title: isArabic ? "تدريب المدرسين على تقنيات حديثة" : "Teacher Training Workshop", date: "2025-12-11", content: isArabic ? "تم عقد تدريب للمدرسين حول أحدث التقنيات التعليمية." : "Teachers were trained on the latest educational technologies.", image: img8 },
        { id: 9, title: isArabic ? "افتتاح مختبر علوم جديد" : "New Science Lab Opened", date: "2025-12-12", content: isArabic ? "تم افتتاح مختبر علوم مجهز بالكامل لتطوير التجارب العملية للطلاب." : "A fully equipped science lab has been opened for hands-on experiments.", image: img9 },
        { id: 10, title: isArabic ? "مسابقة الروبوتات" : "Robotics Competition", date: "2025-12-13", content: isArabic ? "شارك الطلاب في مسابقة الروبوتات لتعزيز الإبداع والتفكير الهندسي." : "Students participated in a robotics competition to enhance creativity and engineering thinking.", image: img10 },
        { id: 11, title: isArabic ? "اليوم المفتوح للمدرسة" : "School Open Day", date: "2025-12-14", content: isArabic ? "استضافت المدرسة أول يوم مفتوح لتعريف الأهالي بالبرامج التعليمية." : "The school hosted its first open day to introduce parents to the educational programs.", image: img11 },
        { id: 12, title: isArabic ? "المشاركة في معرض العلوم" : "Science Fair Participation", date: "2025-12-15", content: isArabic ? "شارك الطلاب في معرض العلوم المحلي لعرض مشاريعهم المبتكرة." : "Students participated in the local science fair to showcase their innovative projects.", image: img12 },
        { id: 13, title: isArabic ? "حفل تكريم الطلاب المتفوقين" : "Top Students Award Ceremony", date: "2025-12-16", content: isArabic ? "تم تكريم الطلاب المتفوقين في جميع التخصصات." : "Top students across all fields were awarded and recognized.", image: img13 },
        { id: 14, title: isArabic ? "تحديث المكتبة الرقمية" : "Digital Library Update", date: "2025-12-17", content: isArabic ? "تم تحديث المكتبة الرقمية لتشمل أحدث المراجع والكتب الإلكترونية." : "The digital library was updated with the latest references and e-books.", image: img14 },
        { id: 15, title: isArabic ? "إطلاق تطبيق المدرسة" : "School App Launch", date: "2025-12-18", content: isArabic ? "تم إطلاق تطبيق الهاتف الذكي لتسهيل تواصل الطلاب والمدرسين." : "The mobile app has been launched to facilitate communication between students and teachers.", image: img15 },
      ];
      setNewsData(data);
      setLoading(false);
    }, 2000);
  }, [isArabic]);

  const totalPages = Math.ceil(newsData.length / newsPerPage);
  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = newsData.slice(indexOfFirstNews, indexOfLastNews);

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  if (loading) return <LoaderNews />;

  return (
    <div className="news-container" style={{ background: theme === "dark" ? "#111" : "#f8f9fa", color: theme === "dark" ? "#fff" : "#111", minHeight: "80vh", padding: "2rem" }}>
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>{isArabic ? "الأخبار" : "News"} <i class="fa-solid fa-newspaper"></i></h1>

      <div className="news-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
        {currentNews.map(news => (
          <div key={news.id} className="news-card" style={{ background: theme === "dark" ? "#1c1c1c" : "#fff", borderRadius: "15px", overflow: "hidden", boxShadow: "0 5px 15px rgba(0,0,0,0.2)", cursor: "pointer" }} onClick={() => setSelectedNews(news)}>
            <img src={news.image} alt={news.title} style={{ width: "100%", height: "180px", objectFit: "cover" }} />
            <div style={{ padding: "1rem" }}>
              <h3>{news.title}</h3>
              <p style={{ fontSize: "0.9rem", color: theme === "dark" ? "#ccc" : "#555" }}>{news.date}</p>
              <p style={{ fontSize: "0.95rem" }}>{news.content.slice(0, 80)}...</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div style={{ textAlign: "center", marginTop: "2rem", display: "flex", justifyContent: "center", gap: "0.5rem", flexWrap: "wrap" }}>
        <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1} style={{ padding: "0.5rem 1rem", borderRadius: "8px", cursor: "pointer" }}>{isArabic ? "السابق" : "Prev"}</button>
        {[...Array(totalPages)].map((_, i) => (
          <button key={i} onClick={() => goToPage(i + 1)} style={{ padding: "0.5rem 1rem", borderRadius: "8px", cursor: "pointer", background: currentPage === i + 1 ? "#007bff" : theme === "dark" ? "#333" : "#eee", color: currentPage === i + 1 ? "#fff" : theme === "dark" ? "#fff" : "#111" }}>{i + 1}</button>
        ))}
        <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages} style={{ padding: "0.5rem 1rem", borderRadius: "8px", cursor: "pointer" }}>{isArabic ? "التالي" : "Next"}</button>
      </div>

      {/* نافذة الأخبار الكاملة */}
      {selectedNews && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "rgba(0,0,0,0.7)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 999 }} onClick={() => setSelectedNews(null)}>
          <div style={{ background: theme === "dark" ? "#1c1c1c" : "#fff", color: theme === "dark" ? "#fff" : "#111", maxWidth: "600px", width: "90%", borderRadius: "15px", overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,0.3)", position: "relative" }} onClick={e => e.stopPropagation()}>
            <img src={selectedNews.image} alt={selectedNews.title} style={{ width: "100%", height: "250px", objectFit: "cover" }} />
            <div style={{ padding: "1.5rem" }}>
              <h2>{selectedNews.title}</h2>
              <p style={{ fontSize: "0.9rem", color: theme === "dark" ? "#ccc" : "#555" }}>{selectedNews.date}</p>
              <p style={{ marginTop: "1rem", lineHeight: "1.6" }}>{selectedNews.content}</p>
              <button onClick={() => setSelectedNews(null)} style={{ marginTop: "1rem", padding: "0.5rem 1rem", border: "none", borderRadius: "10px", background: "#007bff", color: "#fff", cursor: "pointer" }}>{isArabic ? "اغلاق" : "Close"}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
