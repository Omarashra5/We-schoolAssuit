import { useContext, useState } from "react";
import { LanguageContext } from "../context/LanguageContext.jsx";
import { ThemeContext } from "../context/ThemeContext.jsx";

const videosData = [
  { id: 1, name: "يوسف اشرف", specialty: "IT / تكنولوجيا المعلومات", src: "./video/vid1.mp4" },
  { id: 2, name: "ميار هشام", specialty: "برمجة / Programming", src: "/public/video/vid2.mp4" },
  { id: 3, name: "شهد ياسين", specialty: "برمجة / Programming", src: "/public/video/vid3.mp4" },
  { id: 4, name: "يارا خالد", specialty: "اتصالات / Telecommunications" , src: "/public/video/vid4.mp4" },
  { id: 5, name: "تقي محمد", specialty:  "برمجة / Programming", src: "/public/video/vid5.mp4" },
  { id: 6, name: "بلال سعد ", specialty: "IT / تكنولوجيا المعلومات", src: "/public/video/vid6.mp4" },
];

export default function StudentVideos() {
  const { lang } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);
  const isArabic = lang === "ar";

  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <section className="videos-section" dir={isArabic ? "rtl" : "ltr"}>
      <div className="container">
        <h2 className="section-title">
          {isArabic ? "رحلة شبابنا من أرض الواقع" : "Our Students' Real Journey"}
        </h2>
        <p className="section-subtitle">
          {isArabic
            ? "نقدم لمحة عن حياة طلاب مدارس WE من خلال فيديوهات حقيقية."
            : "Get a real glimpse into WE students' lives through authentic videos."}
        </p>

        <div className="videos-grid">
          {videosData.map((video) => (
            <div key={video.id} className="video-card" onClick={() => setSelectedVideo(video)}>
              <video src={video.src} muted loop className="card-video" />
              <div className="overlay">
                <h3>{`${video.name}`}</h3>
                <p>{video.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedVideo && (
        <div className="lightbox" onClick={() => setSelectedVideo(null)}>
          <video src={selectedVideo.src} controls autoPlay className="lightbox-video" />
          <p className="lightbox-title">{selectedVideo.name}</p>
          <p className="lightbox-specialty">{selectedVideo.specialty}</p>
        </div>
      )}

      <style>{`
        .videos-section {
          padding: 6rem 2rem;
          background: ${theme === "dark" ? "#111" : "#f5f5f5"};
          color: ${theme === "dark" ? "#fff" : "#111"};
          font-family: 'Poppins', sans-serif;
          transition: all 0.3s;
        }

        .container { max-width: 1200px; margin: 0 auto; }

        .section-title {
          font-size: 2.8rem;
          font-weight: 900;
          text-align: center;
          margin-bottom: 1rem;
          background: linear-gradient(90deg, #8b00ff, #c473ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .section-subtitle {
          text-align: center;
          font-size: 1.3rem;
          margin-bottom: 3rem;
          color: ${theme === "dark" ? "#ccc" : "#555"};
        }

        .videos-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }

        .video-card {
          position: relative;
          cursor: pointer;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 15px 40px rgba(0,0,0,0.3);
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .video-card:hover { transform: scale(1.05); box-shadow: 0 25px 60px rgba(0,0,0,0.5); }

        .card-video { width: 100%; height: 180px; object-fit: cover; display: block; }

        .overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.5);
          color: #fff;
          opacity: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 1rem;
          transition: opacity 0.3s;
        }

        .video-card:hover .overlay { opacity: 1; }

        .overlay h3 { font-size: 1.3rem; margin-bottom: 0.5rem; }
        .overlay p { font-size: 1rem; font-weight: 500; }

        /* Lightbox */
        .lightbox {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.95);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          cursor: zoom-out;
          padding: 2rem;
        }

        .lightbox-video {
          max-width: 90%;
          max-height: 70vh;
          border-radius: 16px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.7);
        }

        .lightbox-title {
          margin-top: 1rem;
          font-size: 1.5rem;
          font-weight: 700;
          color: #fff;
        }

        .lightbox-specialty {
          font-size: 1.2rem;
          color: #ccc;
        }

        @media (max-width:768px) {
          .card-video { height: 150px; }
        }
      `}</style>
    </section>
  );
}
