import React from "react";
import "./Registration.css";
import step1 from "../images/sample1.png";
import step2 from "../images/sample2.png";
import step3 from "../images/sample3.png";
import step4 from "../images/sample4.png"; // 新增的圖片
import wavebg from "../images/wave_1.png";

function Registration() {
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
    <div className="registration-container">
      {/* 頂部標題和滾動文字 */}
      <div className="header-section">
        <h1 className="title">註冊教學</h1>
        <div className="animated-text-container">
          <p className="animated-text">Follow the Steps Below</p>
        </div>
      </div>

      {/* 教學步驟區塊 */}
      <div className="steps-container">
        {steps.map((step, index) => (
          <div key={index} className="step">
            <img src={step.img} alt={step.title} className="step-image" />
            <h2 className="step-title">{step.title}</h2>
            <p className="step-description">{step.description}</p>
          </div>
        ))}
      </div>

      {/* 波浪背景 */}

    </div>
  );
}

export default Registration;
