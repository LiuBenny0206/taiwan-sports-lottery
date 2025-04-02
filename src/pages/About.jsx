import React from "react";
import { motion } from "framer-motion";
import "./About.css";

// 調整圖片路徑或檔名
import storepic1 from "../images/storepic1.png";
import storepic2 from "../images/storepic2.png";
import storepic3 from "../images/storepic3.png";
import storepic4 from "../images/storepic4.png";
import storepic5 from "../images/storepic5.png";

function About() {
  const galleryImages = [
    { src: storepic1, alt: "Store Image 1" },
    { src: storepic2, alt: "Store Image 2" },
    { src: storepic3, alt: "Store Image 3" },
    { src: storepic4, alt: "Store Image 4" },
    { src: storepic5, alt: "Store Image 5" },
  ];

  return (
    <div className="about-page">
      {/* Hero 區塊 */}
      <div className="hero-section">
        <div className="hero-overlay">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            關於我們
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            我們的故事，從這裡開始
          </motion.p>
        </div>
      </div>

      {/* Gallery 區塊 */}
      <div className="gallery-section">
        {/* 新增三個三角形裝飾 */}
        <div className="triangle triangle1"></div>
        <div className="triangle triangle2"></div>
        <div className="triangle triangle3"></div>

        <h2 className="gallery-title">店面風采</h2>
        <p className="gallery-subtitle">歡迎來到富比多彩券行，這裡是我們的店面與環境</p>

        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <motion.img
              key={index}
              src={image.src}
              alt={image.alt}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="gallery-photo"
              loading="lazy"
            />
          ))}
        </div>
      </div>

      <div className="info-section">
        <div className="info-content">
          <div className="info-text">
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              富比多彩券行
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              台灣彩券公司於民國95年7月10日成立，為中國信託金控旗下公司，
              中國信託銀行得財政部認可，自第3屆起履行公益彩券發行業務的責任。
              台灣彩券致力於公益彩券的經營和推廣，透過專業的彩券銷售管理及社會大眾的參與，
              協助充實政府公益彩券盈餘並推動公益彩券產業健全化。
            </motion.p>
          </div>
          <div className="info-image">
            <motion.img
              src={storepic1}
              alt="Info"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
