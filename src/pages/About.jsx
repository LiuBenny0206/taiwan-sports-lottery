import React from "react";
import { motion } from "framer-motion";
import "./About.css";

import storepic1 from "../images/storepic1.jpg";
import storepic2 from "../images/storepic2.png";
import storepic3 from "../images/storepic3.jpg";
import storepic4 from "../images/storepic4.jpg";
import storepic5 from "../images/storepic5.jpg";
import storepic6 from "../images/stroepic6.png";
import Certificate from "../images/Certificate.jpg";
import storepic7 from "../images/storepic7.jpg";



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
      {/* --- Hero 區塊 --- */}
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

      {/* --- 店面風采 --- */}
      <div className="gallery-section">
        <div className="triangle triangle1"></div>
        <div className="triangle triangle2"></div>

        <h2 className="gallery-title">店面風采</h2>
        <p className="gallery-subtitle">
          歡迎來到富比多彩券行，這裡是我們的店面與環境
        </p>

        <div className="scroll-gallery">
          {galleryImages.map((image, index) => {
            const tilt = (Math.random() * 4 - 2).toFixed(2) + "deg";
            return (
              <motion.div
                key={index}
                className="gallery-card"
                style={{ "--tilt": tilt }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <img src={image.src} alt={image.alt} className="gallery-photo" />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* --- 左圖＋右白框 --- */}
      <div className="rectangle-section">
        <div className="rect-image">
          <motion.img
            src={storepic7}
            alt="活動照片"
            initial={{ opacity: 0, x: -500 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          />
        </div>
        <div className="white-box">
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            本店自第一屆彩券開賣起，便投入台灣彩券的銷售行列，
            率先採用 <strong>複合式經營模式</strong>，
            結合便利商店與彩券銷售，讓顧客在日常生活中也能輕鬆參與公益。
            <br /><br />
            隨著制度日漸成熟，富比多彩券行也同步轉型為
            <strong>正式彩券行</strong>，不僅販售多元彩券產品，
            亦提供專業彩券相關資訊與中獎查詢協助，成為社區民眾信賴的好鄰居。
            <br /><br />
            我們始終相信，
            <strong>彩券不只是希望的開端，更是凝聚社區力量的一種方式。</strong>
          </motion.p>
        </div>
      </div>

      {/* --- 兩層波浪：底部 --- */}
      <div className="footer-wave-container">
        {/* 底層：深色 */}
        <svg
          className="wave wave1"
          viewBox="0 0 600 200"
          preserveAspectRatio="none"
        >
          <path
            d="M0,64 C300,144 900,-48 1200,64 L1200,200 L0,200 Z"
            fill="#ffe87d"
          />
        </svg>
        {/* 上層：原本黃 */}
        <svg
          className="wave wave2"
          viewBox="0 0 2400 200"
          preserveAspectRatio="none"
        >
          <path
            d="M0,80 C300,-16 900,176 1200,80 L1200,200 L0,200 Z"
            fill="#fff1ac"
          />
        </svg>
      </div>
    </div>
  );
}

export default About;
