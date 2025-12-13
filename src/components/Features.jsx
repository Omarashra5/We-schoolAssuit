import { useContext, useState } from "react";
import { LanguageContext } from "../context/LanguageContext.jsx";
import { ThemeContext } from "../context/ThemeContext.jsx";
import img1 from './images/programming.jfif'
import img2 from './images/network.jfif'
import img3 from './images/telycommunications.jfif'

export default function InfoSection() {
    const { lang } = useContext(LanguageContext);
    const { theme } = useContext(ThemeContext);
    const [faqStep, setFaqStep] = useState(0); // 0 -> first 5, 1 -> next 5, 2 -> last 5

    const text = {
        en: {
            cards: [
                { title: "Networking", description: "Understand networks, protocols, and infrastructure.", img: img2 },
                { title: "Programming", description: "Learn coding, algorithms, and software development.", img: img1 },
                { title: "Telecommunications", description: "Study communication systems and technologies.", img: img3 },
            ],
            faqTitle: "Frequently Asked Questions",
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
            cards: [
                { title: "الشبكات", description: "فهم الشبكات والبروتوكولات والبنية التحتية.", img: img2 },
                { title: "البرمجة", description: "تعلم البرمجة والخوارزميات وتطوير البرمجيات.", img: img1 },
                { title: "الاتصالات", description: "دراسة أنظمة وتقنيات الاتصالات.", img: img3 },
            ],
            faqTitle: "الأسئلة الشائعة",
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

    const bgColor = theme === "dark" ? "#111111ff" : "#f8f9fa";
    const textColor = theme === "dark" ? "text-white" : "text-dark";

    // slice faqs based on faqStep
    const faqsToShow = text[lang].faqs.slice(faqStep * 5, faqStep * 5 + 5);

    const handleToggleFaq = () => {
        setFaqStep((prev) => (prev + 1) % 3); // 0 -> 1 -> 2 -> 0
    };

    return (
        <section style={{ backgroundColor: bgColor, padding: "4rem 0", transition: "all 0.5s" }}>
            {/* Cards Section */}
            <h1 className="text-center pb-4">{lang === "ar" ? "الاقسام" : "Departments"}<i class="fa-solid fa-building"></i></h1>
            <div className="container mb-5">
                <div className="row g-4">
                    {text[lang].cards.map((card, idx) => (
                        <div key={idx} className="col-md-4">
                            <div
                                className={`card h-100 shadow-lg ${theme === "dark" ? "bg-dark text-white" : "bg-white text-dark"}`}
                                style={{
                                    borderRadius: "20px",
                                    overflow: "hidden",
                                    transition: "transform 0.3s, box-shadow 0.3s",
                                    cursor: "pointer",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = "translateY(-10px)";
                                    e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.3)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = "translateY(0)";
                                    e.currentTarget.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)";
                                }}
                            >
                                <img
                                    src={card.img}
                                    className="card-img-top"
                                    alt={card.title}
                                    style={{
                                        height: "220px",
                                        objectFit: "cover",
                                        borderBottom: theme === "dark" ? "2px solid #555" : "2px solid #eee",
                                    }}
                                />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">{card.title}</h5>
                                    <p className="card-text flex-grow-1">{card.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Accordion Section */}
            <div className="container">
                <h3 className={`mb-3 ${textColor}`}>{text[lang].faqTitle}<i class="fa-solid fa-question"></i></h3>
                <div className="accordion" id="faqAccordion">
                    {faqsToShow.map((faq, idx) => (
                        <div key={idx} className="accordion-item mt-2">
                            <h2 className="accordion-header" id={`heading${faqStep * 5 + idx}`}>
                                <button
                                    className={`accordion-button ${theme === "light" ? "bg-primary text-white" : ""}`}
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target={`#collapse${faqStep * 5 + idx}`}
                                    aria-expanded={idx === 0 ? "true" : "false"}
                                    aria-controls={`collapse${faqStep * 5 + idx}`}
                                >
                                    {faq.question}
                                </button>
                            </h2>
                            <div
                                id={`collapse${faqStep * 5 + idx}`}
                                className={`accordion-collapse collapse ${idx === 0 ? "show" : ""}`}
                                aria-labelledby={`heading${faqStep * 5 + idx}`}
                                data-bs-parent="#faqAccordion"
                            >
                                <div className={`accordion-body ${theme === "dark" ? "bg-dark text-white" : ""}`}>
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-3">
                    <button className="btn btn-success" onClick={handleToggleFaq}>
                        {faqStep < 2 ? (lang === "ar" ? "عرض المزيد" : "See More") : (lang === "ar" ? "عرض اقل" : "See Less")}
                    </button>
                </div>
            </div>
        </section>
    );
}
