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

useEffect(() => {
  setLoading(true);
  setTimeout(() => {
    const data = [
      {
        id: 1,
        title: isArabic ? "افتتاح 8 فروع جديدة لمدارس WE" : "Egypt Opens 8 New WE Applied Technology Schools",
        date: "2025-07-29",
        content: isArabic
          ? "افتتحت الحكومة المصرية 8 فروع جديدة من مدارس WE للتكنولوجيا التطبيقية في محافظات متعددة ضمن شبكة تضم 27 مدرسة بهدف تعزيز المهارات الرقمية والتكنولوجية." 
          : "Egypt has opened eight new WE Applied Technology Schools across several governorates as part of expanding the network to 27 schools, strengthening digital and technological skills education." ,
        image: img1
      },
      {
        id: 2,
        title: isArabic ? "زيارة وزير الاتصالات لمدرسة WE بالمنصورة" : "Telecom Minister Visits WE School in Mansoura",
        date: "2025-12-06",
        content: isArabic
          ? "قام وزير الاتصالات بتفقد مدرسة WE للتكنولوجيا التطبيقية بالمنصورة، ومتابعة التجهيزات التعليمية والبنية التحتية الحديثة بها." 
          : "The Minister of Communications inspected the WE Applied Technology School in Mansoura, reviewing modern educational facilities and infrastructure." ,
        image: img2
      },
      {
        id: 3,
        title: isArabic ? "مصر وإيطاليا توقعان بروتوكولات تعاون لتطوير المدارس التطبيقية" : "Egypt, Italy Sign Agreements to Expand Applied Tech Schools",
        date: "2025-11-25",
        content: isArabic
          ? "وقعت الحكومة المصرية ممثلة في الجهات المعنية اتفاقيات تعاون مع الجانب الإيطالي لتأسيس أكثر من 89 مدرسة تكنولوجية تطبيقية جديدة." 
          : "Egypt and Italy signed cooperation protocols to establish 89 new applied technology schools, marking a major push in technical education expansion." ,
        image: img3
      },
      {
        id: 4,
        title: isArabic ? "انطلاق العام الدراسي الجديد بمدارس التكنولوجيا التطبيقية" : "New Academic Year Begins at Applied Technology Schools",
        date: "2025-11-09",
        content: isArabic
          ? "بدأ العام الدراسي الجديد في المدارس التكنولوجية التطبيقية التي تقدم برامج متقدمة في عدة تخصصات تعليمية وفنية." 
          : "The new academic year started at Applied Technology Schools offering advanced programs across multiple tech and applied disciplines." ,
        image: img4
      },
      {
        id: 5,
        title: isArabic ? "تعليم تطبيقي: زيادة أعداد المدارس التطبيقية في مصر" : "Growth of Applied Technology Schools Across Egypt",
        date: "2025-12-13",
        content: isArabic
          ? "تقرير رسمي يشير إلى توسع مدارس التكنولوجيا التطبيقية ليشمل زيادة عدد المدارس والفصول بما يدعم استراتيجية التعليم الفني." 
          : "An official report highlights expansion of applied technology schools and classrooms in support of technical education strategy." ,
        image: img5
      },
      {
        id: 6,
        title: isArabic ? "مؤتمر توقيع شراكات تعليمية جديدة" : "New Educational Partnerships Signed for WE Schools",
        date: "2025-10-08",
        content: isArabic
          ? "وقعت الحكومة اتفاقية شراكة مع شركة HP لتدريب المعلمين والقادة على أحدث أساليب التعليم الرقمي في مدارس WE." 
          : "A partnership was signed with HP to train teachers and leaders in digital education techniques across WE schools." ,
        image: img6
      },
      {
        id: 7,
        title: isArabic ? "افتتاح مدرسة WE بمدينة نصر" : "WE Applied Technology School Opens in Nasr City",
        date: "2025-08-09",
        content: isArabic
          ? "تم افتتاح فرع مدرسة WE للتكنولوجيا التطبيقية بمدينة نصر ضمن خطة التوسع لتوفير تعليم تكنولوجي متخصص للطلاب." 
          : "A WE Applied Technology School branch was opened in Nasr City as part of expansion plan to provide specialized tech education." ,
        image: img7
      },
      {
        id: 8,
        title: isArabic ? "انطلاقة معسكر تأهيلي للطلاب" : "WE Students Participate in Preparatory Camp",
        date: "2025-08-20",
        content: isArabic
          ? "شارك طلاب مدارس WE في معسكر تأهيلي تفاعلي لتعزيز مهاراتهم العلمية والعملية." 
          : "WE schools’ students took part in an interactive preparatory camp to boost their academic and practical skills." ,
        image: img8
      },
      {
        id: 9,
        title: isArabic ? "تكريم الطلاب المتفوقين بمدارس WE" : "WE Schools Honor Top Performing Students",
        date: "2025-09-10",
        content: isArabic
          ? "تم تكريم الطلاب المتفوقين في مدارس WE للتكنولوجيا التطبيقية خلال حفل خاص بحضور أولياء الأمور والقيادات التعليمية." 
          : "Top-performing students at WE Applied Technology Schools were honored in a special ceremony attended by families and education leaders." ,
        image: img9
      },
      {
        id: 10,
        title: isArabic ? "انطلاق مسابقة البرمجة السنوية" : "Annual Coding Competition Kicks Off",
        date: "2025-10-15",
        content: isArabic
          ? "أقيمت مسابقة برمجة سنوية بين طلاب مدارس WE لتحفيز القدرات الإبداعية والتقنية لديهم." 
          : "The annual coding competition was held among WE students to inspire creative and technical capabilities." ,
        image: img10
      },
      {
        id: 11,
        title: isArabic ? "ورش عمل تدريبية للطلاب" : "Student Workshops Launched",
        date: "2025-11-01",
        content: isArabic
          ? "نُظمت ورش عمل لتطوير المهارات العملية للطلاب في مجالات الاتصالات والتكنولوجيا." 
          : "Workshops were organized to develop students’ practical skills in telecommunications and technology." ,
        image: img11
      },
      {
        id: 12,
        title: isArabic ? "توريث مهارات القيادات التعليمية" : "Leadership Training for WE School Staff",
        date: "2025-09-20",
        content: isArabic
          ? "قدّم برنامج تدريبي مكثف لقادة المدارس والمعلمين لتحسين جودة التعليم والتعلم." 
          : "An intensive leadership training program was delivered for school leaders and teachers to improve teaching quality." ,
        image: img12
      },
      {
        id: 13,
        title: isArabic ? "توسعة مختبرات العلم والتكنولوجيا" : "Science & Tech Labs Expanded at WE Schools",
        date: "2025-10-25",
        content: isArabic
          ? "تم توسعة مختبرات العلوم والتكنولوجيا في عدد من فروع مدارس WE لتحسين بيئة التدريب العملي." 
          : "Science and technology labs were expanded at several WE school branches to enhance hands-on training." ,
        image: img13
      },
      {
        id: 14,
        title: isArabic ? "احتفال اليوم المفتوح للمدارس" : "WE School Open Day Event",
        date: "2025-12-05",
        content: isArabic
          ? "أقامت مدارس WE يومًا مفتوحًا لعائلات الطلاب للتعرف على البرامج التعليمية والمناهج الحديثة." 
          : "WE schools hosted an open day event for families to explore educational programs and modern curricula." ,
        image: img14
      },
      {
        id: 15,
        title: isArabic ? "تحسين الشراكات الدولية لمدارس التكنولوجيا" : "International Collaboration Boost for WE Schools",
        date: "2025-10-30",
        content: isArabic
          ? "أعلنت الوزارة عن تعزيز الشراكات الدولية مع مؤسسات تعليمية لدعم المناهج وتبادل الخبرات." 
          : "The ministry announced enhanced international collaborations with educational institutions to support curricula and exchange expertise." ,
        image: img15
      },
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
