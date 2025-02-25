import React from "react";
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
      description: "輸入你的基本資訊並提交表單。",
    },
    {
      img: step2,
      title: "Step 2",
      description: "檢查電子郵件並完成帳號驗證。",
    },
    {
      img: step3,
      title: "Step 3",
      description: "登入帳號並開始使用服務！",
    },
    {
      img: step4,
      title: "Step 4",
      description: "設定你的個人偏好和帳號安全選項。",
    },
  ];

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
            <div className="card-image">
              <img src={step.img} alt={step.title} />
            </div>
            <div className="card-content">
              <h2>{step.title}</h2>
              <p>{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default RegistrationModern;
