import React from "react";
import { motion } from "framer-motion";
import "./About.css";
import storepic1 from "../images/storepic1.png";
import storepic2 from "../images/storepic2.png";
import storepic3 from "../images/storepic3.png";
import storepic4 from "../images/storepic4.png";
import storepic5 from "../images/storepic5.png";

function About() {
  const galleryImages = [
    { src: storepic1, alt: "Photo 1" },
    { src: storepic2, alt: "Photo 2" },
    { src: storepic3, alt: "Photo 3" },
    { src: storepic4, alt: "Photo 4" },
    { src: storepic5, alt: "Photo 5" },
  ];

  return (
    <div className="about-container">
      <HeaderSection />
      <GallerySection images={galleryImages} />
      <MainContentSection
        title="富比多彩券行"
        content={`台灣彩券公司於民國95年7月10日成立，為中國信託金控旗下公司，
          中國信託銀行得財政部認可，自第3屆起履行公益彩券發行業務的責任。
          台灣彩券致力於公益彩券的經營和推廣，透過專業的彩券銷售管理及社會大眾的參與，
          協助充實政府公益彩券盈餘並推動公益彩券產業健全化。`}
      />
      <WaveSection />
    </div>
  );
}

const HeaderSection = () => (
  <div className="header-section">
    <div className="header-content">
      <motion.h1 
        className="title" 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        關於我們
      </motion.h1>
      <motion.p 
        className="subtitle" 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Discover More About Our Store
      </motion.p>
    </div>
  </div>
);

const GallerySection = ({ images }) => (
  <div className="gallery-section">
    <div className="gallery-grid">
      {images.map(({ src, alt }, index) => (
        <motion.img 
          key={index} 
          src={src} 
          alt={alt} 
          className="gallery-photo" 
          loading="lazy" 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        />
      ))}
    </div>
  </div>
);

const MainContentSection = ({ title, content }) => (
  <section className="new-section">
    <h2 className="new-title">{title}</h2>
    <p className="new-content">{content}</p>
  </section>
);

const WaveSection = () => (
  <div className="wave-container">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      className="wave-svg"
    >
      <path
        fill="#ffb84d"
        fillOpacity="0.9"
        d="M0,256L80,250C160,244,320,230,480,218C640,206,800,200,960,202C1120,204,1280,216,1360,224L1440,230L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
      ></path>
      <path
        fill="#ffe77d"
        fillOpacity="0.7"
        d="M0,224L80,213.3C160,203,320,181,480,165.3C640,149,800,139,960,144C1120,149,1280,171,1360,181.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        style={{ transform: "translateY(-10px)" }}
      ></path>
    </svg>
  </div>
);

export default About;
