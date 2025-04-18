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
 * 此組件展示註冊流程的現代化教學，並可在「首次註冊」與「二轉三地會員」兩種教學間切換。
 */
function RegistrationModern() {
  // 切換教學類型：first / upgrade
  const [tutorialType, setTutorialType] = useState("first");
  // 點擊後顯示大圖的 state
  const [selectedImage, setSelectedImage] = useState(null);

  // 首次註冊步驟
  const firstTimeSteps = [
    { img: step1, title: "Step 1", description: "填寫基本資料" },
    { img: step2, title: "Step 2", description: "手機簡訊驗證" },
    { img: step3, title: "Step 3", description: "身分認證作業" },
    { img: step4, title: "Step 4", description: "續填其它資料" },
  ];

  // 二轉三地會員專屬步驟（範例）
  const upgradeSteps = [
    { img: step4, title: "Step A", description: "登入會員中心" },
    { img: step3, title: "Step B", description: "選擇升等方案" },
    { img: step2, title: "Step C", description: "填寫升等表單" },
    { img: step1, title: "Step D", description: "完成繳費/驗證" },
  ];

  // 根據選擇顯示對應步驟
  const steps = tutorialType === "first" ? firstTimeSteps : upgradeSteps;

  const handleImageClick = (imgSrc) => {
    setSelectedImage(imgSrc);
  };
  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="modern-registration">
      {/* 背景 blobs */}
      <div className="background-blobs">
        <div className="blob blob1"></div>
        <div className="blob blob2"></div>
        <div className="blob blob3"></div>
      </div>

      {/* 教學切換按鈕 */}
      <div className="tutorial-toggle">
        <button
          className={tutorialType === "first" ? "active" : ""}
          onClick={() => setTutorialType("first")}
        >
          首次註冊教學
        </button>
        <button
          className={tutorialType === "upgrade" ? "active" : ""}
          onClick={() => setTutorialType("upgrade")}
        >
          二轉三會員教學
        </button>
      </div>

      {/* 標題區 */}
      <header className="modern-header">
        <h1>註冊教學</h1>
        <p>跟著步驟，輕鬆完成註冊</p>
      </header>

      {/* 步驟卡片網格 */}
      <div className="steps-grid">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="step-card"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
          >
            <div
              className="card-image"
              onClick={() => handleImageClick(step.img)}
            >
              <img src={step.img} alt={step.title} />
            </div>
            <div className="card-content">
              <h2>{step.title}</h2>
              <p>{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 圖片放大模態視窗 */}
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
