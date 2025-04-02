import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Registration.css";
import step1 from "../images/sample1.png";
import step2 from "../images/sample2.png";
import step3 from "../images/sample3.png";
import step4 from "../images/sample4.png";

function RegistrationModern() {
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

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imgSrc) => {
    setSelectedImage(imgSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="modern-registration">
      {/* 背景不規則形狀容器 */}
      <div className="background-blobs">
        <div className="blob blob1"></div>
        <div className="blob blob2"></div>
        <div className="blob blob3"></div>
      </div>
      <header className="modern-header">
        <h1>註冊教學</h1>
        <p>跟著步驟，輕鬆完成註冊</p>
      </header>

      <div className="steps-grid">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="step-card"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
          >
            {/* 加上 onClick 事件 */}
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

      {/* Modal */}
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
