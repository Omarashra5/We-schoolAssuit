import { useContext, useState, useMemo } from "react";
import { LanguageContext } from "../context/LanguageContext.jsx";
import { ThemeContext } from "../context/ThemeContext.jsx";

export default function InfoSection() {
    const { lang } = useContext(LanguageContext);
    const { theme } = useContext(ThemeContext);
    const [search, setSearch] = useState("");
    const [faqStep, setFaqStep] = useState(0);

    const text = {
        en: {
            title: "Everything You Need to Know",
            subtitle: "WE Assiut Applied Technology School",
            faqs: [
                { question: "What is WE Applied Technology School?", answer: "It is the first school specialized in communications and IT, a partnership between MCIT and Telecom Egypt, based on the competency-based education system." },
                { question: "What is the competency-based system?", answer: "A system to ensure students become skilled technicians with theoretical knowledge, practical skills, and soft skills including ethics, communication, and teamwork." },
                { question: "What are WE schools?", answer: "WE schools are applied technology schools partnered with private sector companies to train skilled technicians in their fields." },
                { question: "What are WE branches and locations?", answer: "WE has 7 branches across Egypt: Cairo (Nasr City), Alexandria, Minya, Mansoura, Suez, New Valley, Giza (Sheikh Zayed)." },
                { question: "What are the admission requirements?", answer: "Students must be medically fit, Egyptian nationality, under 18 by Oct 1, have English proficiency, minimum preparatory grade of 250, and pass entrance tests & interviews." },
                { question: "What subjects are taught?", answer: "First year: Telecom, IT, Math, Physics, English, Arabic, Religious Education, National Education, Technical Drawing, Electrical Systems, ICT, PE, Life Skills, plus practical training. Second year: specialization subject (Telecom or IT), core subjects, and soft skills development." },
                { question: "Which universities can graduates attend and can they join Engineering?", answer: "Graduates can enter Engineering after equivalence, technological universities, and technical institutes." },
                { question: "Can graduates join the workforce directly?", answer: "Yes, graduates are qualified to work immediately in their specialization." },
                { question: "What certificates do students receive?", answer: "Students receive a Diploma from Applied Technology Schools, internationally accredited certificate, Telecom Egypt experience certificate, and professional certifications during practical training." },
                { question: "What is the nature of entrance tests and interviews?", answer: "Tests are straightforward, covering math, English, and Arabic at preparatory level. Interviews assess readiness and potential." },
                { question: "Who teaches the curriculum?", answer: "Engineers, teachers, and professors with industry experience teach the courses, providing guidance and support." },
                { question: "If I come from an Arabic school, will it affect me?", answer: "Students may initially struggle with English terminology but will adapt quickly with support and self-study." },
                { question: "Link to apply to the school", answer: "You can apply online through the provided school link." },
                { question: "Additional questions about the second year subjects?", answer: "Second year includes specialization subject (Telecom/IT), Math, Physics, English, Arabic, Religious studies, Social studies, AutoCAD, ICT, PE, Life skills, and leadership & soft skills development." },
                { question: "What are the practical skills developed?", answer: "Students develop communication, confidence, self-reliance, presentation skills, teamwork, and leadership abilities throughout the program." },
            ]
        },
        ar: {
            title: "كل ما تحتاج معرفته",
            subtitle: "مدرسة WE اسيوط للتكنولوجيا التطبيقية",
            faqs: [
                { question: "ايه هي مدرسة WE للتكنولوجيا التطبيقية؟", answer: "هي أول مدرسة متخصصة في مجالي الاتصالات وتكنولوجيا المعلومات وهي شراكة بين وزارة الاتصالات وشركة المصرية للاتصالات ونظام التعليم فيها قائم على الجدارات." },
                { question: "يعني إيه نظام الجدارات؟", answer: "هو نظام لضمان أن يكون الطالب فني محترف يمتلك المعرفة النظرية، المهارات العملية، والأخلاقيات والمهارات الحياتية مثل التواصل والعمل الجماعي." },
                { question: "ما هي مدارس التكنولوجيا التطبيقية؟", answer: "مدارس التكنولوجيا التطبيقية هي نوع من مدارس التعليم الفني، حيث تعتمد على الشراكة مع شركات القطاع الخاص لإعداد فنيين متعلمين ومتدربين في مجالات تخصصهم." },
                { question: "ايه هي فروع WE ومواقعها؟", answer: "الفروع موجودة في القاهرة (مدينة نصر)، الإسكندرية، المنيا، المنصورة، السويس، الوادي الجديد، والجيزة (الشيخ زايد)." },
                { question: "ايه هي شروط القبول بمدارس WE؟", answer: "شروط القبول تشمل اللياقة الطبية، الجنسية المصرية، ألا يزيد العمر عن 18 سنة في أول أكتوبر، إجادة اللغة الإنجليزية، ألا يقل مجموع الشهادة الإعدادية عن 250، واجتياز اختبارات القبول والمقابلة." },
                { question: "ايه هي المواد اللي بتدرسوها؟", answer: "السنة الأولى: الاتصالات، تكنولوجيا المعلومات، رياضيات، فيزياء، إنجليزي، عربي، تربية دينية، تربية وطنية، رسم فني، أنظمة كهربائية، ICT، PE، مهارات حياتية، plus التدريب الميداني. السنة الثانية: مادة التخصص، المواد الأساسية، وتطوير المهارات الشخصية والقيادية." },
                { question: "ايه هي الكليات اللي نقدر ندخلها بعد التخرج وهل يمكن دخول هندسة؟", answer: "يمكن دخول كلية الهندسة بعد المعادلة، الجامعات التكنولوجية، والمعاهد الفنية." },
                { question: "هل يمكن للخريج الالتحاق بسوق العمل مباشرة؟", answer: "نعم، سيكون جدير بالعمل بمجال تخصصه فور التخرج." },
                { question: "ايه هي الشهادات اللي بيحصل عليها الطالب؟", answer: "شهادة دبلوم فني، شهادة أكاديمية دولية، شهادة خبرة من المصرية للاتصالات، وشهادات مهنية خلال التدريب العملي." },
                { question: "ايه هي طبيعة اختبارات القبول والمقابلة الشخصية؟", answer: "الاختبارات سهلة وتغطي الماث، الإنجليزي، والعربي بمستوى إعدادى، والمقابلة تهدف لتقييم الطالب ومهاراته." },
                { question: "مين اللي بيشرح المناهج؟", answer: "المناهج يشرحها مهندسون ودكاترة محترفين لديهم خبرة في المجال ودراية بسوق العمل، مع دعم كامل للطلاب." },
                { question: "أنا من مدرسة عربي، هل ده هيأثر عليا؟", answer: "قد تحتاج لبعض الوقت للتكيف مع المصطلحات الإنجليزية، ولكن مع الدعم والاجتهاد ستتعود بسرعة." },
                { question: "رابط التقديم على المدرسة", answer: "يمكنك التقديم الآن عبر الرابط المخصص للمدرسة." },
                { question: "في سنة تانيه بندرس ايه؟", answer: "السنة الثانية تشمل مادة التخصص (Telecom/IT)، رياضيات، فيزياء، إنجليزي، عربي، تربية دينية، دراسات اجتماعية، AutoCAD، ICT، PE، مهارات حياتية، وتطوير المهارات القيادية والشخصية." },
                { question: "ايه هي المهارات العملية اللي بنتعلمها؟", answer: "الطلاب يطوروا مهارات التواصل، الثقة بالنفس، الاعتماد على الذات، presentation skills، العمل الجماعي، والقيادة طوال فترة البرنامج." },
            ]
        }
    };

    // جمع الكلمات للـ autocomplete
    const suggestions = useMemo(() => {
        const words = new Set();
        text[lang].faqs.forEach(faq => {
            faq.question.split(/[\s,.:؟]+/).forEach(w => words.add(w));
            faq.answer.split(/[\s,.:؟]+/).forEach(w => words.add(w));
        });
        return Array.from(words);
    }, [lang]);

    // اقتراحات البحث
    const filteredSuggestions = useMemo(() => {
        if (!search) return [];
        return suggestions
            .filter(word => word.toLowerCase().includes(search.toLowerCase()))
            .slice(0, 5);
    }, [search, suggestions]);

    // Filter FAQs by search
    const filteredFaqs = useMemo(() => {
        if (!search) return text[lang].faqs;
        return text[lang].faqs.filter(f =>
            f.question.toLowerCase().includes(search.toLowerCase()) ||
            f.answer.toLowerCase().includes(search.toLowerCase())
        );
    }, [search, lang]);

    // Slice FAQs
    const faqsToShow = filteredFaqs.slice(0, (faqStep + 1) * 4);

    const highlightText = (text, term) => {
        if (!term) return text;
        const regex = new RegExp(`(${term})`, "gi");
        return text.split(regex).map((part, i) =>
            regex.test(part) ? <mark key={i}>{part}</mark> : part
        );
    };

    const handleMore = () => { if ((faqStep + 1) * 4 < filteredFaqs.length) setFaqStep(faqStep + 1); };
    const handleLess = () => { if (faqStep > 0) setFaqStep(faqStep - 1); };

    return (
        <section dir={lang === "ar" ? "rtl" : "ltr"} className={`info-4d ${theme}`}>
            <div className="container">
                {/* Header */}
                <header className="info-header">
                    <span>{text[lang].subtitle}</span>
                    <h1>{text[lang].title}</h1>
                    <div className="search-wrapper">
                        <input
                            type="text"
                            placeholder={lang === "ar" ? "ابحث في الأسئلة..." : "Search FAQs..."}
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            className="search-input"
                        />
                        {filteredSuggestions.length > 0 && (
                            <ul className="suggestions-list" style={{
                                background: theme === 'dark' ? 'rgba(20,20,20,0.95)' : 'rgba(255,255,255,0.95)',
                                color: theme === 'dark' ? '#fff' : '#000'
                            }}>
                                {filteredSuggestions.map((s, i) => (
                                    <li key={i} onClick={() => setSearch(s)}>{s}</li>
                                ))}
                            </ul>

                        )}
                    </div>
                </header>

                {/* FAQ Cards */}
                <div className="faq-content">
                    {faqsToShow.length === 0 && <p className="no-results">{lang === "ar" ? "لا توجد نتائج" : "No results found"}</p>}
                    {faqsToShow.map((faq, i) => (
                        <div key={i} className="faq-card">
                            <h2>{highlightText(faq.question, search)}</h2>
                            <p>{highlightText(faq.answer, search)}</p>
                        </div>
                    ))}
                </div>

                {/* Controls */}
                <div className="text-center mt-5 control-buttons">
                    <button className="btn-control" onClick={handleMore}>{lang === "ar" ? "المزيد من الاسئله" : "See More"}</button>
                    <button className="btn-control" onClick={handleLess}>{lang === "ar" ? "عرض اقل" : "See Less"}</button>
                </div>
            </div>

            <style>{`
        .info-4d { padding: 8rem 0; perspective: 1500px; transition: background 0.5s, color 0.5s; }
        .info-4d.light { background: linear-gradient(130deg,#f0f4ff,#e0e7ff); color:#020617; }
        .info-4d.dark { background: linear-gradient(130deg,#09030f,#1a0737); color:#f8fafc; }

        .info-header { max-width:900px; margin-bottom:5rem; text-align:center; }
        .info-header span { font-size:.9rem; letter-spacing:.25em; text-transform:uppercase; font-weight:700; color:#8b5cf6; }
        .info-header h1 { font-size:clamp(2.8rem,5vw,4rem); font-weight:900; line-height:1.15; margin-top:1rem; }

        .search-wrapper { position: relative; display: inline-block; width: 100%; max-width: 400px; margin: 2rem auto 0; }
        .search-input { width: 100%; padding:.6rem 1rem; border-radius:14px; border:1px solid #8b5cf6; font-size:1rem; outline:none; transition:all 0.3s; }
        .search-input:focus { box-shadow:0 0 25px rgba(139,92,246,0.5); transform:scale(1.02); }

        .suggestions-list {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: rgba(255,255,255,0.95);
          border-radius: 10px;
          margin-top: 4px;
          padding: 0.5rem 0;
          list-style: none;
          max-height: 200px;
          overflow-y: auto;
          box-shadow: 0 5px 15px rgba(0,0,0,0.15);
          z-index: 100;
        }
        .suggestions-list li {
          padding: 0.5rem 1rem;
          cursor: pointer;
        }
        .suggestions-list li:hover {
          background: linear-gradient(135deg,#8b00ff,#c473ff);
          color: #fff;
        }

        .faq-content { display:grid; grid-template-columns:repeat(auto-fit,minmax(360px,1fr)); gap:2.5rem; }
        .faq-card {
          background:rgba(255,255,255,0.05);
          backdrop-filter:blur(18px);
          border-radius:22px;
          padding:2rem;
          transition:transform 0.4s, box-shadow 0.4s;
          transform-style:preserve-3d;
          box-shadow:0 10px 50px rgba(0,0,0,0.2);
        }
        .faq-card:hover { transform:translateY(-15px) rotateX(3deg) rotateY(3deg) scale(1.05); box-shadow:0 20px 70px rgba(0,0,0,0.35); }
        .faq-card h2 { font-size:1.4rem; font-weight:800; margin-bottom:1rem; }
        .faq-card p { font-size:1rem; line-height:1.8; opacity:0.85; }
        mark { background:linear-gradient(135deg,#8b00ff,#c473ff); color:#fff; padding:0 4px; border-radius:4px; font-weight:700; }
        .no-results { grid-column:1/-1; text-align:center; opacity:0.7; font-weight:600; padding:2rem 0; }

        .control-buttons { display:flex; justify-content:center; gap:1.5rem; flex-wrap:wrap; }
        .btn-control { background: linear-gradient(135deg,#8b00ff,#c473ff); color:#fff; padding:0.8rem 2rem; font-weight:700; border-radius:14px; border:none; cursor:pointer; transition:all 0.3s; }
        .btn-control:hover { transform: scale(1.1); box-shadow:0 10px 30px rgba(140,0,255,0.5); }

        @media(max-width:768px){
          .info-header h1 { font-size:2.4rem; }
          .faq-card { padding:1.5rem; }
        }
      `}</style>
        </section>
    );
}
