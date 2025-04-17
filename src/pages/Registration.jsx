import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Registration.css";

// 載入各步驟所需的圖片資源
import step1 from "../images/sample1.png";
import step2 from "../images/sample2.png";
import step3 from "../images/sample3.png";
import step4 from "../images/storepic4.png";

/**
 * RegistrationModern Component
 * ------------------------------
 * 此組件展示註冊流程的現代化教學，包含：
 * - 背景的不規則形狀裝飾
 * - 註冊步驟的卡片網格展示 (利用 Framer Motion 實現動畫效果)
 * - 點擊圖片後彈出的模態視窗 (顯示大圖)
 */
function RegistrationModern() {
  // 定義註冊步驟數據：圖片、標題與描述
  const steps = [
    {
      img: step1,
      title: "Step 1",
      description: "填寫基本資料",
    },
    {
      img: step2,
      title: "Step 2",
      description: "手機簡訊驗證",
    },
    {
      img: step3,
      title: "Step 3",
      description: "身分認證作業",
    },
    {
      img: step4,
      title: "Step 4",
      description: "續填其它資料",
    },
  ];

  // 使用 useState 管理目前被點擊的圖片，作為彈出模態視窗的依據
  const [selectedImage, setSelectedImage] = useState(null);

  /**
   * 處理點擊圖片事件
   * @param {string} imgSrc - 被點擊圖片的來源路徑
   */
  const handleImageClick = (imgSrc) => {
    setSelectedImage(imgSrc);
  };

  /**
   * 關閉模態視窗：重設 selectedImage 狀態
   */
  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="modern-registration">
      {/* 背景不規則形狀裝飾 */}
      <div className="background-blobs">
        <div className="blob blob1"></div>
        <div className="blob blob2"></div>
        <div className="blob blob3"></div>
      </div>

      {/* 頁面標題與描述 */}
      <header className="modern-header">
        <h1>註冊教學</h1>
        <p>跟著步驟，輕鬆完成註冊</p>
      </header>

      {/* 註冊步驟卡片網格 */}
      <div className="steps-grid">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="step-card"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
          >
            {/* 點擊圖片時觸發 handleImageClick 打開模態視窗 */}
            <div className="card-image" onClick={() => handleImageClick(step.img)}>
              <img src={step.img} alt={step.title} />
            </div>
            <div className="card-content">
              <h2>{step.title}</h2>
              <p>{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 模態視窗：僅在 selectedImage 存在時顯示 */}
      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Enlarged" />
            <button className="modal-close" onClick={closeModal}>
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default RegistrationModern;
